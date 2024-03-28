################# backend #######################
terraform {
  backend "s3" {
    encrypt        = true
    #dynamodb_table = "my-org-tf-state-lock"
    key            = "mysitedomains/my-static-website_lambda.tfstate"
    region         = "us-east-1"
  }
}

################# provider ######################
provider "aws"  {
  region = var.aws_region
}

provider "aws" {
  alias  = "acm_provider"
  region = var.aws_region
}

##########Lambda's

#### Lambda Function - base lambda

#### Layers
#resource "aws_lambda_layer_version" "jama_events_invole_sm_0_ly" {
#  filename   = "${path.module}/lambda/base_lambda/psycopg2.zip"
#  layer_name = "jama_psycopg2"
#  compatible_runtimes = [var.runtime_lambda]
  #source_code_hash    = data.archive_file.lambda_layers_archive.output_base64sha256
#}


#data "archive_file" "jama_events_invole_sm_0" {
#type        = "zip" 
#source_file  = "${path.module}/lambda/base_lambda/lambda_function.py"
#output_path = "${path.module}/lambda/base_lambda/lambda_function.zip"
#}

#resource "aws_lambda_function" "jama_events_step_added_step_0" {
#  filename      = "${path.module}/lambda/base_lambda/lambda_function.zip"
#  function_name = "es-01-speaker-diarization"
#  role          = var.lambda_role_arn
#  handler       = "lambda_function.lambda_handler"
#  layers = [aws_lambda_layer_version.jama_events_invole_sm_0_ly.arn]
#  runtime = var.runtime_lambda
#  timeout = "300"
#  reserved_concurrent_executions ="30"
#  vpc_config {
#  subnet_ids         = [data.aws_subnet.subnet_id_1.id, data.aws_subnet.subnet_id_2.id, data.aws_subnet.subnet_id_3.id]
#  security_group_ids = [aws_security_group.dms_jama_group.id]
#  }
#  environment {
#    variables = {
#      secret_name = "rods-engg-common-user-pws"
#      DATABASE = var.db_name
#      HOST = module.Aurora-cluster.aurora_writer_endpoint
#    }
#  }
#}


################# Lambda ##################
resource "aws_lambda_function" "es-01-speaker-diarization" {
  function_name    = "${var.project_name}-es-01-speaker-diarization"
  role             = var.lambda_role_arn
  package_type     = "Image"
  timeout          = 600

  image_uri        = var.image_uri

  environment {
    variables = {
      ASSEMBLY_API_KEY = var.assembly_api_key_value
    }
  }
}



############# APi Gateway #############

#resource "aws_api_gateway_rest_api" "this_api" {
#  name        = "${var.project_name}-api-gateway"
#  description = "API Gateway used to invoke lambda"
#}


########### assembly_token #########
#resource "aws_api_gateway_resource" "assembly_token_resource" {
#  rest_api_id = aws_api_gateway_rest_api.this_api.id
#  parent_id = aws_api_gateway_rest_api.this_api.root_resource_id
#  path_part = "assembly_token"
#}

#resource "aws_api_gateway_method" "assembly_token_method" {
#  rest_api_id = aws_api_gateway_rest_api.this_api.id
#  resource_id = aws_api_gateway_resource.assembly_token_resource.id
#  http_method = "GET"
#  authorization = "NONE"
#}

#resource "aws_api_gateway_integration" "assembly_token_integration" {
#  rest_api_id = aws_api_gateway_rest_api.this_api.id
#  resource_id = aws_api_gateway_resource.assembly_token_resource.id
#  http_method = aws_api_gateway_method.assembly_token_method.http_method
#  integration_http_method = "GET"
#  type = "AWS_PROXY"
#  uri = aws_lambda_function.es-01-speaker-diarization.invoke_arn
#  request_templates = {
#    "application/json" = jsonencode({
#      statusCode = 200
#    })
#  }
#}

#resource "aws_api_gateway_method_response" "assembly_token_method_response" {
#  rest_api_id = aws_api_gateway_rest_api.this_api.id
#  resource_id = aws_api_gateway_resource.assembly_token_resource.id
#  http_method = aws_api_gateway_method.assembly_token_method.http_method
#  status_code = 200
#  response_parameters = {
#    "method.response.header.Access-Control-Allow-Headers" = true
#    "method.response.header.Access-Control-Allow-Origin"  = true,
#    "method.response.header.Access-Control-Allow-Methods" = true,
#  }
#}

#resource "aws_api_gateway_integration_response" "assembly_token_integration_response" {
#  rest_api_id = aws_api_gateway_rest_api.this_api.id
#  resource_id = aws_api_gateway_resource.assembly_token_resource.id
#  http_method = aws_api_gateway_method.assembly_token_method.http_method
#  status_code = aws_api_gateway_method_response.assembly_token_method_response.status_code
#  response_parameters = {
#    "method.response.header.Access-Control-Allow-Origin"  = "'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'"
#    "method.response.header.Access-Control-Allow-Headers" = "'*'"
#    "method.response.header.Access-Control-Allow-Methods" = "'GET,OPTIONS'"
#  }
#  response_templates = {
#    "application/json" = <<EOF
#{
#  "statusCode": 200,
#  "message": "OK! Everything in order"
#}
#EOF
# 
#  } 
#}

########### transcribe_audio_url #########
#resource "aws_api_gateway_resource" "transcribe_audio_url_resource" {
#  rest_api_id = aws_api_gateway_rest_api.this_api.id
#  parent_id = aws_api_gateway_rest_api.this_api.root_resource_id
#  path_part = "transcribe_audio_url"
#}

#resource "aws_api_gateway_method" "transcribe_audio_url_method" {
#  rest_api_id = aws_api_gateway_rest_api.this_api.id
#  resource_id = aws_api_gateway_resource.transcribe_audio_url_resource.id
#  http_method = "POST"
#  authorization = "NONE"
#}

#resource "aws_api_gateway_integration" "transcribe_audio_url_integration" {
#  rest_api_id = aws_api_gateway_rest_api.this_api.id
#  resource_id = aws_api_gateway_resource.transcribe_audio_url_resource.id
#  http_method = aws_api_gateway_method.transcribe_audio_url_method.http_method
#  integration_http_method = "POST"
#  type = "AWS_PROXY"
#  uri = aws_lambda_function.es-01-speaker-diarization.invoke_arn
#  request_templates = {
#    "application/json" = jsonencode({
#      statusCode = 200
#    })
#  }
#}


#resource "aws_api_gateway_method_response" "transcribe_audio_url_method_response" {
#  rest_api_id = aws_api_gateway_rest_api.this_api.id
#  resource_id = aws_api_gateway_resource.transcribe_audio_url_resource.id
#  http_method = aws_api_gateway_method.transcribe_audio_url_method.http_method
#  status_code = 200
#  response_parameters = {
#    "method.response.header.Access-Control-Allow-Headers" = true
#    "method.response.header.Access-Control-Allow-Origin"  = true
#    "method.response.header.Access-Control-Allow-Methods" = true
#  }
#}

#resource "aws_api_gateway_integration_response" "transcribe_audio_url_integration_response" {
#  rest_api_id = aws_api_gateway_rest_api.this_api.id
#  resource_id = aws_api_gateway_resource.transcribe_audio_url_resource.id
#  http_method = aws_api_gateway_method.transcribe_audio_url_method.http_method
#  status_code = aws_api_gateway_method_response.transcribe_audio_url_method_response.status_code
#  response_parameters = {
#    "method.response.header.Access-Control-Allow-Origin"  = "'*'"
#    "method.response.header.Access-Control-Allow-Methods" = "'POST,OPTIONS'"
#  }
#  response_templates = {
#    "application/json" = <<EOF
#{
#  "statusCode": 200,
#  "message": "OK! Everything in order"
#}
#EOF
#  }
#}

#resource "aws_api_gateway_deployment" "this_deployment" {
#    depends_on = [
#    aws_api_gateway_integration.assembly_token_integration,
#    aws_api_gateway_integration.transcribe_audio_url_integration
#  ]
#  rest_api_id = aws_api_gateway_rest_api.this_api.id
#  stage_name = var.stage_name
#}


#resource "aws_lambda_permission" "assembly_token_permission" {
#  action = "lambda:InvokeFunction"
#  function_name = aws_lambda_function.es-01-speaker-diarization.function_name
#  principal = "apigateway.amazonaws.com"
#  source_arn = "arn:aws:execute-api:${var.aws_region}:${var.accountId}:${aws_api_gateway_rest_api.this_api.id}/*/${aws_api_gateway_method.assembly_token_method.http_method}${aws_api_gateway_resource.assembly_token_resource.path}"
#  
#}

#resource "aws_lambda_permission" "transcribe_audio_url_permission" {
#  action = "lambda:InvokeFunction"
#  function_name = aws_lambda_function.es-01-speaker-diarization.function_name
#  principal = "apigateway.amazonaws.com"
#  source_arn = "arn:aws:execute-api:${var.aws_region}:${var.accountId}:${aws_api_gateway_rest_api.this_api.id}/*/${aws_api_gateway_method.transcribe_audio_url_method.http_method}${aws_api_gateway_resource.transcribe_audio_url_resource.path}"
#  
#}

resource "aws_apigatewayv2_api" "this_api" {
  name          = "${var.project_name}-api-gateway"
  protocol_type = "HTTP"
  description   = "API Gateway used to invoke lambda"
  cors_configuration {
    allow_origins = ["*"]
    allow_methods = ["*"]
    allow_headers = ["*"]
    expose_headers = ["*"]
  }
}

resource "aws_apigatewayv2_integration" "api_integration" {
  api_id                = aws_apigatewayv2_api.this_api.id
  integration_type      = "AWS_PROXY"
  integration_method    = "POST"
  integration_uri       = aws_lambda_function.es-01-speaker-diarization.arn
  connection_type       = "INTERNET"
}

resource "aws_apigatewayv2_route" "api_routes" {
  for_each = {
    "/api/assembly_token"       = "GET /api/assembly_token"
    "/api/ping"                 = "GET /api/ping"
    "/api/extract_patient_info" = "POST /api/extract_patient_info"
    "/api/transcribe_audio"     = "POST /api/transcribe_audio"
    "/api/transcribe_audio_url" = "POST /api/transcribe_audio_url"
  }

  api_id    = aws_apigatewayv2_api.this_api.id
  route_key = each.value
  target    = "integrations/${aws_apigatewayv2_integration.api_integration.id}"
}

resource "aws_apigatewayv2_stage" "api_stage" {
  api_id = aws_apigatewayv2_api.this_api.id
  name   = "$default"
  auto_deploy = true
}

resource "aws_apigatewayv2_deployment" "api_deployment" {
  api_id      = aws_apigatewayv2_api.this_api.id
  description = "Deployment for API Gateway"
  depends_on  = [aws_apigatewayv2_stage.api_stage]
}

resource "aws_lambda_permission" "api_trigger_permissions" {
  for_each      = aws_apigatewayv2_route.api_routes
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.es-01-speaker-diarization.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.this_api.execution_arn}/*/*${each.key}"
}


################# variable ######################

variable "aws_region" {
  type        = string
  description = "aws region for resources"
}

variable "accountId" {
  type        = string
  description = "accountId"
}

variable "lambda_role_arn" {
  type        = string
  description = "arn of the lambda role"
}

variable "project_name" {
  description = "name of the project"
}

variable "stage_name" {
  description = "name of the stage"
}

variable "image_uri" {
  description = "lambda image uri"
}

variable "assembly_api_key_value" {
  description = "value of the assembly_api_key_value environment variable"
  sensitive = true
}



################ Output ###################

output "api_endpoint" {
  value = aws_apigatewayv2_api.this_api.api_endpoint
}