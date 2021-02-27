import * as cdk from "@aws-cdk/core";
import * as apigAuthorizers from "@aws-cdk/aws-apigatewayv2-authorizers";
import * as sst from "@serverless-stack/resources";

export default class MyStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // Create Api
    const api = new sst.Api(this, "Api", {
      defaultAuthorizer: new apigAuthorizers.HttpJwtAuthorizer({
        jwtAudience: ["r7MQkwTZjIzcKhGmlcy9QhMNXnT9qhwX"],
        jwtIssuer: "https://sst-test.us.auth0.com/",
      }),
      defaultAuthorizationType: "JWT",
      routes: {
        "GET /private": "src/private.main",
        "GET /public": {
          authorizationType: "NONE",
          function: "src/public.main",
        },
      },
    });

    // Show API endpoint in output
    new cdk.CfnOutput(this, "ApiEndpoint", {
      value: api.httpApi.apiEndpoint,
    });
  }
}
