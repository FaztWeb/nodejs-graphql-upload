const { Schema, model } = require("mongoose");

const multipleFileSchema = new Schema(
  {
    images: [
      {
        url: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = new model("MultipleFile", multipleFileSchema);
