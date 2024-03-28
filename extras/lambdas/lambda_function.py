import boto3 
import psycopg2
import time
from typing import Dict, Any
import json
import os
from io import BytesIO
from datetime import datetime, timezone
import traceback
from botocore.exceptions import ClientError


def get_secret(secret_name, region_name):
    ''' Reads the secret from the secret manager '''
    # Create a Secrets Manager client
    session = boto3.session.Session()
    client = session.client(
        service_name='secretsmanager',
        region_name=region_name
    )
    try:
        get_secret_value_response = client.get_secret_value(
            SecretId=secret_name
        )
    except ClientError as e:
        raise e
    creds = json.loads(get_secret_value_response['SecretString'])
    user_pw = creds.get('commonn_user_pw')
    print(user_pw)
    USER, PASSWORD = user_pw.split("/")
    return USER, PASSWORD


def connect_to_db(database, user, password, host, port=5432):
    """Connects to DB and returns the connection object"""
    try:
        conn = psycopg2.connect(
            database=database,
            user=user,
            password=password,
            host=host,
            port=port
        )
        return conn
    except Exception as e:
        print(f"Error in connecting to databse {database}", e)


def call_events_functions(conn):	
    ''' Updates the table '''	
    try:	
        # Creating a cursor object	
        cursor = conn.cursor()	
       ## sql = f""" CALL utils.sp_call_lambdas_for_first_open_batch()  """
        sql = f""" SELECT utils.f_jama_audits_start_processing_ready_batches()"""
        print(sql)
        cursor.execute(sql)	
        conn.commit()	
        return True	
    except Exception as e:	
        #print(e)
        print(traceback.format_exc())
        return e


def lambda_handler(event, context):
    try:
        print(event)
        DATABASE = os.environ['DATABASE']
        print(DATABASE)
        secret_name = os.environ['secret_name']
        print(secret_name)
        HOST = os.environ['HOST']
        print(HOST)
        user, pw = get_secret(secret_name, 'us-gov-west-1') 
        print(user)
        print(pw)
        user = 'postgres'
        pw = 'SnMke-burp-alto-strut-FxB53D9'
        conn = connect_to_db(DATABASE, user, pw, HOST)
        conn.close()
        print("********conn*********")
        response = call_events_functions(conn)
        return response
    except Exception as e:
        print(traceback.format_exc())
    finally:
        if conn:
            conn.close()



