import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const EditBlog = (req, res) => {
  const { id } = useParams();
  const [addblog, setAddblog] = useState({});

  useEffect(() => {
    const getBlog = async () => {
      const blog = await axios.get(`/blogs/${id}`);
      // console.log(blog.data);
      setAddblog(blog.data);
    };
    getBlog();
  }, []);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(value);
    setAddblog({ ...addblog, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id);
    axios
      .post(`/blogs/update-blog/${id}`, addblog)
      .then(() => console.log(addblog))
      .then(() => alert("You have successfully edit the blog"))
      .catch((err) => console.log(err));
    window.location = "/";
  };
  return (
    <>
      {/* <div className="modal" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit the Blog</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="forms">
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={addblog.title}
                    onChange={handleInput}
                    id="title"
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
                {/* <button type="submit" className="btn btn-primary">
                  Submit
                </button> */}
      {/* </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Save changes
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <form className="forms" onSubmit={handleSubmit}>
        <h1>Edit Blog</h1>
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

export default EditBlog;
