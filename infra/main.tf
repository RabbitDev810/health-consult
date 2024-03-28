################# backend #######################
terraform {
  backend "s3" {
    encrypt        = true
    #dynamodb_table = "my-org-tf-state-lock"
    key            = "mysitedomains/my-static-website_application.tfstate"
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

################################################# Uploads all files from the local "src/dist" directory to a specified AWS S3 bucket.
resource "aws_s3_object" "static_file" {
  for_each     = fileset(local.dist_dir, "**")
  bucket       = data.aws_s3_bucket.this_bucket.id
  key          = each.key
  source       = "${local.dist_dir}/${each.value}"
  content_type = lookup(local.content_types, regex("\\.[^.]+$", each.value), null)
  etag         = filemd5("${local.dist_dir}/${each.value}")
}

data "aws_s3_bucket" "this_bucket" {
  bucket = var.bucket_name
}







################# variable ######################

variable "prefix" {
  type        = string
  description = "Prefix for resources"
}

variable "aws_region" {
  type        = string
  description = "aws region for resources"
}

variable "project" {
  type        = string
  description = "project name"
}

variable "bucket_name" {
  type        = string
  description = "bucket name"
}









