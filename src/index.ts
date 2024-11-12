import { ApolloServer, gql } from "apollo-server";

// add query here to fetch data
// schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => {
      return "hello world!";
    },
  },
};

// schema and resolver
export const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(() => {
  console.log("Server is RUNNING");
});
