import { Construct, CustomResource, Token } from "@aws-cdk/core";
import * as cr from "@aws-cdk/custom-resources";
import * as sst from "@serverless-stack/resources";

export default class Sum extends Construct {
  result;

  constructor(scope, id, props) {
    super(scope, id);

    // Create Lambda function
    const eventHandler = new sst.Function(this, "Handler", {
      handler: "src/lambda.main",
    });

    // Create custom resource
    const provider = new cr.Provider(this, "ResourceProvider", {
      onEventHandler: eventHandler,
    });

    const resource = new CustomResource(this, "Resource", {
      resourceType: "Custom::Sum",
      serviceToken: provider.serviceToken,
      properties: {
        lhs: props.lhs,
        rhs: props.rhs,
      },
    });

    this.result = Token.asNumber(resource.getAtt("Result"));
  }
}
