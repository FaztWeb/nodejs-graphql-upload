const { gql } = require("apollo-server-express");

const typeDefs = gql`
  extend type Query {
    greetings: String
  }
`;

module.exports = {
  typeDefs,
};
