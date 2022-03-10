const { GraphQLUpload } = require("graphql-upload");

const { resolvers: UserResolvers } = require("../UserResolvers");
const { resolvers: UploadResolver } = require("../UploadResolver");

const resolvers = [UserResolvers, { Upload: GraphQLUpload }, UploadResolver];

module.exports = { resolvers };
