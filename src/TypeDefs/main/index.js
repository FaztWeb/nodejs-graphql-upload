const { gql } = require("apollo-server-express");

const { typeDefs: User } = require("../UserTypeDefs");
const UploadType = require("../UploadType");

const typeDefs = gql`
  scalar Upload

  type Query {
    _: String
  }
  type Mutation {
    _empty: String
  }
`;

module.exports = {
  typeDefs: [typeDefs, User, UploadType],
};
