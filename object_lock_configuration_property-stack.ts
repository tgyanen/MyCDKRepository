import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_s3 as s3 } from 'aws-cdk-lib';

export class ObjectLockConfigurationPropertyStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const cfnBucket = new s3.CfnBucket(this, 'MyBucket1', {
      objectLockEnabled: true,
      objectLockConfiguration: {
        objectLockEnabled: 'Enabled',
        rule: {
          defaultRetention: {
            days:1,
            mode: 'COMPLIANCE',
          }
        }
      }
    });
  }
}
