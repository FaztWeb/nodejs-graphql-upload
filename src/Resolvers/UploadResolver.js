const { readFile, multipleFileUploads } = require("../libs/uploadFile");
const SingleFileUpload = require("../models/singleFileUpload");
const MultipleUpload = require("../models/multipleFileUpload");

const resolvers = {
  Query: {
    greetings: () => "",
  },
  Mutation: {
    async singleUpload(_, { file }) {
      const imageUrl = await readFile(file);
      const singleFile = new SingleFileUpload({ image: imageUrl });
      await singleFile.save();
      return {
        message: "Uploaded succesfully",
      };
    },
    async multipleUpload(_, { file }) {
      const imageUrl = await multipleFileUploads(file);
      const multipleFile = new MultipleUpload();
      multipleFile.images.push(...imageUrl);
      await multipleFile.save();
      return {
        message: "Multiple file was uploaded",
      };
    },
    async singleUploadWithData(_, { file, title }) {
      console.log(file)
      const imageUrl = await readFile(file);
      const singleFile = new SingleFileUpload({ image: imageUrl });
      await singleFile.save();

      return {
        title: title.toUpperCase(),
        imageUrl,
      };
    },
  },
};

module.exports = {
  resolvers,
};
