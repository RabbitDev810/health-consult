FROM public.ecr.aws/lambda/python:3.12

# Copy the requirements file and install dependencies
COPY requirements.txt ${LAMBDA_TASK_ROOT}
RUN pip install -r requirements.txt

# Copy the application code
COPY . ${LAMBDA_TASK_ROOT}

# Set the CMD to your handler using Mangum to adapt FastAPI for Lambda
CMD [ "index.handler" ]
