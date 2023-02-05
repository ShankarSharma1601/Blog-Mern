import React, { useState } from "react";
import axios from "axios";

const AddBlog = () => {
  const [addblog, setAddblog] = useState({
    title: "",
    image: "",
    description: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(value);
    setAddblog({ ...addblog, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(addblog);
    axios.post("/blogs/add-blog", addblog);
    alert("You have successfully add the blog");
    setAddblog({
      title: "",
      image: "",
      description: "",
    });
    window.location = "/";
  };

  return (
    <>
      <form className="forms" onSubmit={handleSubmit}>
        <h1>Add Blog</h1>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={addblog.title}
            onChange={handleInput}
            id="title"
            aria-describedby="emailHelp"
            placeholder="Enter title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input
            type="text"
            className="form-control"
            name="image"
            value={addblog.image}
            onChange={handleInput}
            id="image"
            placeholder="Image url"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            value={addblog.description}
            onChange={handleInput}
            id="description"
            placeholder="Description"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddBlog;
