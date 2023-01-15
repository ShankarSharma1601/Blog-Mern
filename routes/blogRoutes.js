const express = require("express");
const { getAllBlogs, addBlog } = require("../controllers/blogController");
const router = express.Router();

// Routes
// GET || blog
router.get("/all-blogs", getAllBlogs);

// POST || add blog
router.post("/add-blog", addBlog);

module.exports = router;
