from schemas import Conversation, PatientInfo
import guardrails as gd
import openai
import os
from dotenv import load_dotenv
load_dotenv()
openai.api_key = os.getenv('OPENAI_API_KEY')


patient_info_prompt = '''
prompt = """
Given the following conversation between patient and hospital staff, please extract a dictionary that contains the patient's information.

${conversation}

${gr.complete_json_suffix_v2}
"""
'''


def extract_patient_info(conversation: Conversation) -> PatientInfo:

    conversation_string = ""
    for statement in conversation.statements:
        speaker = statement.speaker_name if statement.speaker_name else statement.speaker_id
        conversation_string += f"{speaker}: {statement.completed_statement}\n"

    guard = gd.Guard.from_pydantic(output_class=PatientInfo, prompt=patient_info_prompt)
    res = guard(
    openai.chat.completions.create,
    prompt_params={"conversation": conversation_string},
    max_tokens=1024,
    temperature=0.00,
    )

    return PatientInfo(**res.validated_output) if res.validation_passed else PatientInfo(**res.raw_llm_output)