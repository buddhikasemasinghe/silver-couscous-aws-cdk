#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { SilverCouscousAwsCdkStack } from '../lib/silver-couscous-aws-cdk-stack';

const app = new cdk.App();
new SilverCouscousAwsCdkStack(app, 'SilverCouscousAwsCdkStack');
