import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand mx-auto" to="/">
            Blog App
          </Link>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                All Blogs
              </Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/add-blog">
                Add Blog
              </Link>
            </li>
          </ul>
          <Link to="/login" className="btn btn-info mx-auto">
            Login
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
