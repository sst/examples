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

    // Show the API endpoint and other info in the output
    this.addOutputs({
      ApiEndpoint: api.httpApi.apiEndpoint,
      BucketName: bucket.bucketName,
    });
  }
}
