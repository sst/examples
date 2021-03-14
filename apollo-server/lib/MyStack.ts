import * as cdk from "@aws-cdk/core";
import * as sst from "@serverless-stack/resources";

export default class MyStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    // Create the HTTP API
    const api = new sst.Api(this, "Api", {
      // apollo-server-lambda doesn't support ApiPayloadFormatVersion V2
      defaultPayloadFormatVersion: sst.ApiPayloadFormatVersion.V1,
      routes: {
        "ANY /": "src/lambda.handler",
      },
    });

    // Show API endpoint in output
    new cdk.CfnOutput(this, "ApiEndpoint", {
      value: api.httpApi.apiEndpoint,
    });
  }
}
