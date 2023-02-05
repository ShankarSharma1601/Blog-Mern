const express = require("express");
const {
  getAllBlogs,
  addBlog,
  updateBlog,
  deleteBlog,
  singleBlog,
} = require("../controllers/blogController");
const router = express.Router();

// Routes
// GET || ALL blog
router.get("/all-blogs", getAllBlogs);

// GET || Single Blog
router.get("/:id", singleBlog);

// POST || add blog
router.post("/add-blog", addBlog);

// POST || update blog
router.post("/update-blog/:id", updateBlog);

// POST || delete blog
router.delete("/delete-blog/:id", deleteBlog);

module.exports = router;
