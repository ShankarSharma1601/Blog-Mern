import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Blog = ({ blog }) => {
  const handleDelete = async () => {
    axios
      .delete(`blogs/delete-blog/${blog._id}`)
      .then((res) => console.log(res.data))
      .then(alert("Delete Successfully"))
      .catch((err) => console.log(err));
    window.location = "/";
  };
  return (
    <>
      <div className="card mx-auto mt-5 mb-2" style={{ width: "30rem" }}>
        <h5 className="card-title mx-auto mt-2">{blog.title}</h5>
        <div className="card-body">
          <img className="card-img-top" src={blog.image} alt="i" />
          <p className="card-text">{blog.description}</p>
          <Link to={`/${blog._id}`} className="btn btn-info mx-auto">
            Edit
          </Link>
          {/* <button className="btn btn-info mx-auto">
            <a
              className="text-decoration-none text-white"
              href={`/update-blog/${blog._id}`}
            >
              Edit
            </a>
          </button> */}
          {/* <Link
            to={`/delete-blog/${blog._id}`}
            className="btn btn-danger mx-auto"
          >
            Delete
          </Link> */}
          <button className="btn btn-danger mx-auto" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Blog;
