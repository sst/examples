import { Token } from "@aws-cdk/core";
import * as sst from "@serverless-stack/resources";

import Sum from "./Sum";

export default class MyStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // Create the custom resource
    const sum = new Sum(this, "MySum", { lhs: 40, rhs: 2 });

    this.addOutputs({
      Result: Token.asString(sum.result),
    });
  }
}
