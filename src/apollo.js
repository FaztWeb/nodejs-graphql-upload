const { ApolloServer } = require("apollo-server-express");

const { typeDefs } = require("./TypeDefs/main/index");
const { resolvers } = require("./Resolvers/main/index");

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

module.exports = apolloServer;
