# AWS CDK Starter
The purpose of this guide is to create CI/CD pipeline from AWS CDK with Docker using Travis CI.

### Prerequisites
- Docker
- AWS account
- Basic knowledge of AWS stack
- Accounts in Github and TravisCI
- Basic knowledge of Typescript/Javascript


### Steps

#### Step 01:
First we will bootstap a AWS CDK project and deploy it in AWS Stack.
* First create AWS CDK in your local enviroment
  `npm install -g aws-cdk`
* Create AWS CDK project by running following command. `mkdir aws-cdk-starter` <br> `cd aws-cdk-starter` <br> `cdk init --language typescript`

#### Step 02:
* Create a new IAM user having full Clould formation access
* Copy Access id and secret key
* Export access credentionals on your enviroment as follows 
  `export AWS_ACCESS_KEY_ID=user-id` <br> `export AWS_SECRET_ACCESS_KEY=secret-key` <br> `export AWS_DEFAULT_REGION=ap-southeast-2`
* Run `cdk deploy`
* HURRAY !!!. We have created first cdk