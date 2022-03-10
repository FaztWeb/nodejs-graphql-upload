const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect("mongodb://localhost/graphqldb");
  console.log("connected mongodb");
};

module.exports = {
  connectDB,
};
