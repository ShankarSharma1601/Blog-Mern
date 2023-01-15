const mongoose = require("mongoose");

// user schema
const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
  },
  { timestamps: true }
);

// model
const blogModel = mongoose.model("blogs", blogSchema);

// export
module.exports = blogModel;
