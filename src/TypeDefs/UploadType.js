const { gql } = require("apollo-server-express");

module.exports = gql`
  extend type Mutation {
    singleUpload(file: Upload!): SuccessMessage
    multipleUpload(file: [Upload]!): SuccessMessage

    singleUploadWithData(file: Upload, title: String): DataResponse
  }

  type SuccessMessage {
    message: String
  }

  type DataResponse {
    title: String,
    imageUrl: String
  }
`;
