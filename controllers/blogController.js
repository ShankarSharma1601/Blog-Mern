const blogModel = require("../models/blogModel");
const mongoose = require("mongoose");

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

// get Single post
const singleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogModel.findById(id);
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
      message: "Post added Successfully",
      newblog: {
        ...newblog,
        id: newblog._id,
      },
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
    });
  }
};

const updateBlog = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`post ${id} not found`);
  try {
    //const updateblog = blogModel.findByIdAndUpdate(id, req.body);
    blogModel.findById(id).then((blog) => {
      blog.title = req.body.title;
      blog.image = req.body.image;
      blog.description = req.body.description;
      blog.save().then(() =>
        res.status(201).json({
          success: true,
          message: "Update Successfully",
          blog,
        })
      );
    });
    // await updateblog.save();
    // res.status(201).json({
    //   success: true,
    //   message: "Update Successfully",
    //   updateblog,
    // });
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
    });
  }
};

const deleteBlog = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`post ${id} not found`);
  try {
    blogModel.findByIdAndDelete(id).then(
      res.status(201).json({
        success: true,
        message: "Deleted Successfully",
      })
    );
  } catch (error) {
    res.status(404).json({
      success: false,
      error,
    });
  }
};

module.exports = { getAllBlogs, singleBlog, addBlog, updateBlog, deleteBlog };
