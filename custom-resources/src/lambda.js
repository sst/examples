export async function main(event) {
  return {
    Data: {
      Result: event.ResourceProperties.lhs + event.ResourceProperties.rhs,
    },
  };
}
