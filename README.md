<img alt="Logo" align="right" src="https://raw.githubusercontent.com/serverless-stack/identity/main/sst.svg" width="20%" />

# [SST Examples](https://serverless-stack.com/examples)

A collection of example serverless apps built with SST.

## Examples

### Building APIs

- [How to create a REST API with serverless](https://github.com/serverless-stack/examples/tree/main/rest-api)

  Create a serverless REST API on AWS using the `sst.Api` construct to define the routes of our API.

- [How to create a REST API in TypeScript with serverless](https://github.com/serverless-stack/examples/tree/main/rest-api-ts)

  Create a serverless REST API on AWS with TypeScript using the `sst.Api` construct to define the routes of our API.

- [How to create a REST API in Golang with serverless](https://github.com/serverless-stack/examples/tree/main/rest-api-go)

  Create a serverless REST API on AWS with Golang using the `sst.Api` construct to define the routes of our API.

- [How to add a custom domain to a serverless API](https://github.com/serverless-stack/examples/tree/main/rest-api-custom-domain)

  Add a custom domain to a serverless REST API on AWS using the `sst.Api` construct.

### Using GraphQL

- [How to create an Apollo GraphQL API with serverless](https://github.com/serverless-stack/examples/tree/main/graphql-apollo)

  Create a serverless Apollo GraphQL API on AWS using the `sst.ApolloApi` construct.

- [How to create a serverless GraphQL API with AWS AppSync](https://github.com/serverless-stack/examples/tree/main/graphql-appsync)

  Create a serverless AppSync GraphQL API on AWS using the `sst.AppSyncApi` construct.

### Working with databases

- [How to use DynamoDB in your serverless app](https://github.com/serverless-stack/examples/tree/main/rest-api-dynamodb)

  Use DynamoDB in your serverless app on AWS using the `sst.Api` and `sst.Table` to create a simple hit counter.

- [How to create a CRUD API with serverless using DynamoDB](https://github.com/serverless-stack/examples/tree/main/crud-api-dynamodb)

  Create a CRUD API with serverless using DynamoDB. With the `sst.Api` and `sst.Table` constructs.

### Authentication

#### Using AWS IAM

- [How to add Cognito authentication to a serverless API](https://github.com/serverless-stack/examples/tree/main/api-auth-cognito)

  Add Cognito User Pool authentication to a serverless API using the `sst.Api` and `sst.Auth` constructs.

- [How to add Facebook authentication to a serverless API](https://github.com/serverless-stack/examples/tree/main/api-auth-facebook)

  Add Facebook authentication to a serverless API using the `sst.Api` and `sst.Auth` constructs.

- [How to add Google authentication to a serverless API](https://github.com/serverless-stack/examples/tree/main/api-auth-google)

  Add Google authentication to a serverless API using the `sst.Api` and `sst.Auth` constructs.

- [How to add Twitter authentication to a serverless API](https://github.com/serverless-stack/examples/tree/main/api-auth-twitter)

  Add Twitter authentication to a serverless API using the `sst.Api` and `sst.Auth` constructs.

- [How to add Auth0 authentication to a serverless API](https://github.com/serverless-stack/examples/tree/main/api-auth-auth0)

  Add Auth0 authentication to a serverless API using the `sst.Api` and `sst.Auth` constructs.

#### Using JWT

- [How to add JWT authorization with Cognito User Pool to a serverless API](https://github.com/serverless-stack/examples/tree/main/api-auth-jwt-cognito-user-pool)

  Add JWT authorization with Cognito User Pool to a serverless API using the `sst.Api` constructs.

- [How to add JWT authorization with Auth0 to a serverless API](https://github.com/serverless-stack/examples/tree/main/api-auth-jwt-auth0)

  Add JWT authorization with Auth0 to a serverless API using the `sst.Api` constructs.

### Async Tasks

- [How to use cron jobs in your serverless app](https://github.com/serverless-stack/examples/tree/main/cron-job)

  Create a cron job in your serverless app using the `sst.Cron` construct.

- [How to use queues in your serverless app](https://github.com/serverless-stack/examples/tree/main/queue)

  Create a queue system in your serverless app using the `sst.Api` and `sst.Queue` constructs.

- [How to use Pub/Sub in your serverless app](https://github.com/serverless-stack/examples/tree/main/pub-sub)

  Create a pub/sub system in your serverless app using the `sst.Api` and `sst.Topic` constructs.

## Documentation

Learn more about the SST.

- [Docs](https://docs.serverless-stack.com/)
- [@serverless-stack/cli](https://docs.serverless-stack.com/packages/cli)
- [@serverless-stack/resources](https://docs.serverless-stack.com/packages/resources)

## Contributing

To add an example:

  1. Checkout this repo 
  2. Create a new directory at the root with the name of the example
  3. Add the example code
  4. Format the code by
     
     Running Prettier for JS at the root

     ``` bash
     $ npm run prettier
     ```
     
     Running the following in a dir with Go files

     ``` bash
     $ go fmt
     ```
  5. Submit a PR!

And [join us on Slack](https://launchpass.com/serverless-stack).

