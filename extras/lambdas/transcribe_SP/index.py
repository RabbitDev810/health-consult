
from fastapi import FastAPI, HTTPException, Request
from mangum import Mangum
from pydantic import AnyHttpUrl, FileUrl
import requests
from transcriber import assembly_ai
from schemas import AudioDataUrl, AudioUrl, PatientInfo, Token, Conversation
from entity_extractor.guardrail_extractor import extract_patient_info
import logging

app = FastAPI()
logging.basicConfig(level=logging.INFO)

@app.get('/api/ping')
async def hello():
    return {'res': 'pong'}

@app.get('/api/assembly_token', response_model=Token)
async def get_token() :
    try:
        print(f"🔵Received request for get token:🔵 ")  
        return {"token": assembly_ai.get_temporary_token()}
    except requests.HTTPError as http_err:
        print(f'HTTP error occurred: {http_err}')
        raise HTTPException(status_code=500, detail='Internal error')
    except Exception as err:
        print(f'Error occurred: {err}')
        raise HTTPException(status_code=500, detail='Internal error')

@app.post('/api/transcribe_audio', response_model=Conversation)
async def transcribe_data_url(req_body: AudioDataUrl):
    try:
        # req = await request.json()
        # data_url = req['dataUrl']
        print(f"🔵Received request for transcribing audio:🔵 {req_body}")  
        audio_url = assembly_ai.data_url_to_url(req_body.audio_data_url)
        print(f"🔴🔴🔴🔴🔴🔴🔵🔴 {audio_url}")
        transcript = assembly_ai.get_transcript(audio_url)
        print(f"🔴🔴🔴🔴🔴🔴🔴 {transcript}")
        return transcript
     
    except Exception as error:
        print(f"🔵🔴error🔴🔵 {error}")
        raise HTTPException(status_code=500, detail='Internal error')
    
@app.post('/api/transcribe_audio_url', response_model=Conversation)
async def transcribe_url(req_body: AudioUrl):
    try:
        return assembly_ai.get_transcript(req_body.audio_url)
    except Exception as error:
        print(error)
        raise HTTPException(status_code=500, detail='Internal error')
    

@app.post('/api/extract_patient_info', response_model=PatientInfo)
async def extract_patient_details(conversation: Conversation):
    try:
        return extract_patient_info(conversation)
    except Exception as error:
        print(error)
        raise HTTPException(status_code=500, detail='Internal error')
    
handler = Mangum(app)
    