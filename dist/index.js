"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
// add query here to fetch data
// schema
const typeDefs = (0, apollo_server_1.gql) `
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
const server = new apollo_server_1.ApolloServer({
    typeDefs,
    resolvers,
});
server.listen().then(() => {
    console.log("RUNNING");
});
