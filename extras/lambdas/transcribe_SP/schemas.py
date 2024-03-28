from enum import Enum
import uuid
from pydantic import BaseModel, HttpUrl, ValidationError, validator, Field
from datetime import date
from guardrails.validators import ValidRange, ValidChoices
from typing import Optional




class Token(BaseModel):
    token: str

class Statement(BaseModel):
    speaker_id: str = ""
    speaker_name: str|None = None
    partial_statement: str = ""
    completed_statement: str = ""


class Conversation(BaseModel):
    id: uuid.UUID|None = None
    statements: list[Statement]

    class Config:

        schema_extra= {
            "examples": [
                {
                    "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    "statements": [
                        {
                        "speaker_id": "Nurse",
                        "speaker_name": "Nurse",
                        "partial_statement": "",
                        "completed_statement": "Good morning! My name is Nurse Johnson, and I'll be taking care of you today. Can you please verify your full name for me?"
                        },
                        {
                        "speaker_id": "Patient",
                        "speaker_name": "Patient",
                        "partial_statement": "",
                        "completed_statement": "Good morning, Nurse Johnson. My name is Sarah Thompson."
                        },
                        {
                        "speaker_id": "Nurse",
                        "speaker_name": "Nurse",
                        "partial_statement": "",
                        "completed_statement": "Thank you, Sarah. And to confirm, could you also provide me with your date of birth?"
                        },
                        {
                        "speaker_id": "Patient",
                        "speaker_name": "Patient",
                        "partial_statement": "",
                        "completed_statement": "Sure, it's June 15, 1985."
                        },
                        {
                        "speaker_id": "Nurse",
                        "speaker_name": "Nurse",
                        "partial_statement": "",
                        "completed_statement": "Great, thank you. Now, I'd like to confirm your address. Could you please tell me where you currently live?"
                        },
                        {
                        "speaker_id": "Patient",
                        "speaker_name": "Patient",
                        "partial_statement": "",
                        "completed_statement": "I live at 123 Oak Street, Apartment 5B.."
                        },
                        {
                        "speaker_id": "Nurse",
                        "speaker_name": "Nurse",
                        "partial_statement": "",
                        "completed_statement": "Excellent. Thank you, Sarah. This helps us ensure that all your information is up to date. How was your day so far?"
                        },
                        {
                        "speaker_id": "Patient",
                        "speaker_name": "Patient",
                        "partial_statement": "",
                        "completed_statement": "So far so good, and i just dropped my kids at school, and now i am ready to start my work day. So Nurse Johnson i forgot to mention my new address; my new address is 1123 Lincoln st, NewYork"
                        },
                        {
                        "speaker_id": "Nurse",
                        "speaker_name": "Nurse",
                        "partial_statement": "",
                        "completed_statement": "Excellent. Thanks for updating the address."
                        }
                    ]
                }
            ]
        }
    

class AudioUrl(BaseModel):
    audio_url: HttpUrl

class AudioDataUrl(BaseModel):
    audio_data_url: str

class Gender(str, Enum):
    male= "male"
    female= "female"
    transgender= "transgender"
    non_binary= "non-binary/ non-conforming"
    other= "other"
    prefer_not_to_respond= "prefer not to respond"
    unknown= "unknown"


class PatientInfo(BaseModel):
    id: Optional[str] = Field(description="Unique patient's id. It should be a string. Keep it black if information is missing.")
    gender: Optional[Gender]  = Field(description="Patient's gender. It should be one of ['male','female','transgender','non-binary/ non-conforming','other','prefer not to respond']. If information is missing, please enter 'unknown'",
                                  validators=[ValidChoices(choices=list(Gender), on_fail='reask')])
    name: Optional[str] = Field(description="Patien's name. It should be a string. Keep it black if information is missing.")
    date_of_birth: Optional[str]  = Field(description="Patien's date of birth in 'MM-dd-yyyy' format. Keep it black if information is missing.")
    age: Optional[int]   = Field(description="Patient's age in years",validators=[ValidRange(min=0, max=100)])
    address: Optional[str] = Field(description="Patient's address. Keep it black if information is missing.")








