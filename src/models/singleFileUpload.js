const { Schema, model } = require("mongoose");

const singleFile = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("singleFile", singleFile);
