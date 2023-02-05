import React from "react";
// import BlogModel from "../../../models/blogModel";

const SingleBlog = ({ blog }) => {
  return (
    <>
      <div className="card mx-auto mt-5 mb-2" style={{ width: "30rem" }}>
        <h5 className="card-title mx-auto mt-2">{blog.title}</h5>
        <div className="card-body">
          <img className="card-img-top" src={blog.image} alt="i" />
          <p className="card-text">{blog.description}</p>
          {/* <Link
            to={`/update-blog/${blog._id}`}
            className="btn btn-info mx-auto"
            onClick={<EditBlog />}
          >
            Edit
          </Link> */}
          <button className="btn btn-info mx-auto">
            <a
              className="text-decoration-none text-white"
              href={`/blogs/${blog._id}`}
            >
              Edit
            </a>
          </button>
          {/* <Link
            to={`/delete-blog/${blog._id}`}
            className="btn btn-danger mx-auto"
          >
            Delete
          </Link> */}
          <button className="btn btn-danger mx-auto">
            <a href={`/blogs/delete-blog/${blog._id}`}>Delete</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
