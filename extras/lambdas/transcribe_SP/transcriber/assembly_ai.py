import os
import requests
import json
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, Request
import base64
import io
from schemas import Conversation, Statement
import validators
import requests
from time import sleep




import assemblyai as aai
load_dotenv()
aai.settings.api_key = os.getenv('ASSEMBLY_API_KEY')

def get_temporary_token() -> str:

    apiUrl = 'https://api.assemblyai.com/v2/realtime/token'
    requestData = {
        'expires_in': 1800,
    }

    headers = {
        'authorization': os.getenv('ASSEMBLY_API_KEY'),
        'Content-Type': 'application/json',
    }
    response = requests.post(apiUrl, data=json.dumps(requestData), headers=headers)
    response.raise_for_status()  # Raises stored HTTPError, if one occurred

    return response.json().get('token')


def get_transcript(audio_url: str) -> Conversation:
    if not validators.url(audio_url):
        print("Invalid audio URL")
        raise HTTPException(status_code=400, detail='Invalid audio URL provided')

    api_key = os.getenv('ASSEMBLY_API_KEY')
    endpoint = "https://api.assemblyai.com/v2/transcript"

    headers = {
        "authorization": api_key,
        "content-type": "application/json"
    }

    transcript_request = {
        'audio_url': audio_url,
        'speaker_labels': True
    }

    # Submit the transcription job
    response = requests.post(endpoint, json=transcript_request, headers=headers)
    print(f'reponse::::::: {response}')
    if response.status_code != 200:
        raise HTTPException(status_code=response.status_code, detail=response.text)

    job_id = response.json()['id']
    print(f'job_id::::: {job_id}')

    # Poll the job status
    while True:
        transcript_response = requests.get(f"{endpoint}/{job_id}", headers=headers)
        print(f"transcript_response::::: {transcript_response}")
        transcript_data = transcript_response.json()
        print(f"transcript_data::::: {transcript_data}")
        if transcript_data['status'] == 'completed':
            break
        elif transcript_data['status'] == 'failed':
            raise HTTPException(status_code=500, detail='Transcription job failed.')
        sleep(5)  # Sleep to avoid hitting rate limits

    # Retrieve the completed transcript
    statements = [
        Statement(speaker_id=u['speaker'], completed_statement=u['text'])
        for u in transcript_data['utterances']
    ]
    print(f"statements::::::::::: {statements}")
    return Conversation(statements=statements)


def data_url_to_url(data_url: str) -> str:
    base64_data = data_url.split(',')[1]
    binary_data = base64.b64decode(base64_data)
    binary_io = io.BytesIO(binary_data)
    audio_url = aai.extras.file_from_stream(binary_io)
    return audio_url
    