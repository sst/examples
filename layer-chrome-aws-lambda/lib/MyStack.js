import * as cdk from "@aws-cdk/core";
import * as s3 from "@aws-cdk/aws-s3";
import * as lambda from "@aws-cdk/aws-lambda";
import * as sst from "@serverless-stack/resources";

export default class MyStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // Create S3 bucket
    const bucket = new s3.Bucket(this, "MyBucket", {
      publicReadAccess: true,
    });

    // Get Chrome Layer
    const layerArn =
      "arn:aws:lambda:us-east-1:764866452798:layer:chrome-aws-lambda:22";
    const layer = lambda.LayerVersion.fromLayerVersionArn(
      this,
      "Layer",
      layerArn
    );

    // Create Api
    const api = new sst.Api(this, "Api", {
      routes: {
        "GET /": {
          function: {
            handler: "src/lambda.main",
            bundle: {
              externalModules: ["chrome-aws-lambda"],
            },
            environment: {
              BUCKET_NAME: bucket.bucketName,
            },
            layers: [layer],
          },
        },
      },
    });
    api.attachPermissions([bucket]);

    // Show S3 bucket in output
    new cdk.CfnOutput(this, "BucketName", {
      value: bucket.bucketName,
    });

    // Show API endpoint in output
    new cdk.CfnOutput(this, "ApiEndpoint", {
      value: api.httpApi.apiEndpoint,
    });
  }
}
