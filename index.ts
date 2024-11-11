import { ApolloServer, gql } from "apollo-server";

// add query here to fetch data
const typeDefs = gql`
  type Query {
    hello: string
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
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log("RUNNING" + url);
});
