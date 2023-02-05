import React, { useState, useEffect } from "react";
import axios from "axios";
import Blog from "../components/Blog";

const Homepage = () => {
  const [allBlog, setAllBlog] = useState([]);

  // const blogs = async () => {
  //   const data = await axios.get("/blogs/all-blogs");
  //   console.log(data.data);
  //   // setAllBlog(data.data);
  // };
  // blogs();

  useEffect(() => {
    const getAllBlog = async () => {
      const blog = await axios.get("/blogs/all-blogs");
      console.log(blog.data);
      setAllBlog(blog.data);
      // console.log(blogs.data);
      // setAllBlog(allBlog);
      // console.log(blogs);
    };
    getAllBlog();
  }, []);

  return (
    <>
      {allBlog.map((blog) => (
        <Blog blog={blog} key={blog._id} />
      ))}
    </>
  );
};

export default Homepage;
