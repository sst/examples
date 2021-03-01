import * as cdk from "@aws-cdk/core";
import * as sst from "@serverless-stack/resources";

export default class MyStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // Create Api
    const api = new sst.Api(this, "Api", {
      defaultAuthorizationType: sst.ApiAuthorizationType.AWS_IAM,
      routes: {
        "GET /private": "src/private.main",
        "GET /public": {
          function: "src/public.main",
          authorizationType: sst.ApiAuthorizationType.NONE,
        },
      },
    });

    // Create auth provider
    const auth = new sst.Auth(this, "Auth", {
      twitter: {
        consumerKey: "gyMbPOiwefr6x63SjIW8NN0d1",
        consumerSecret: "qxld8zic5c2eyahqK3gjGLGQaOTogGfAgHh17MYOIcOUR9l2Nz",
      },
    });

    // Allow authenticated users invoke API
    auth.attachPermissionsForAuthUsers([api]);

    // Show API endpoint in output
    new cdk.CfnOutput(this, "ApiEndpoint", {
      value: api.httpApi.apiEndpoint,
    });
    new cdk.CfnOutput(this, "IdentityPoolId", {
      value: auth.cognitoCfnIdentityPool.ref,
    });
  }
}
