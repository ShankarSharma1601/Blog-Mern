const blogModel = require("../models/blogModel");

// get all blog
const getAllBlogs = async (req, res) => {
  try {
    const blog = await blogModel.find();
    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
    });
  }
};

// add blog
const addBlog = async (req, res) => {
  try {
    const newblog = blogModel(req.body);
    await newblog.save();
    res.status(201).json({
      success: true,
      newblog,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
    });
  }
};

module.exports = { getAllBlogs, addBlog };
