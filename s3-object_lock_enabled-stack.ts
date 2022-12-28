import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_s3 as s3 } from 'aws-cdk-lib';
export class S3ObjectLockEnabledStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const objectLockConfigurationProperty: s3.CfnBucket.ObjectLockConfigurationProperty = {
      objectLockEnabled: 'Enabled',
      rule: {
       defaultRetention: {
          mode: 'COMPLIANCE',
          days: 1,
        },
      },  
    };
    const cfnBucket = new s3.CfnBucket(this, 'myBucket1', {
      objectLockEnabled: true,
      objectLockConfiguration: objectLockConfigurationProperty
    });
  }
}