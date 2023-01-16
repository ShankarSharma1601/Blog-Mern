import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(value);
    setUserLogin({ ...userLogin, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userLogin);
    axios.post("/users/login", userLogin);
  };
  return (
    <>
      <form className="forms" method="POST" onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            autoComplete="off"
            name="email"
            value={userLogin.email}
            onChange={handleInput}
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            autoComplete="off"
            name="password"
            value={userLogin.password}
            onChange={handleInput}
            className="form-control"
            id="password"
            required
          />
        </div>
        {/* <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link to="/register">Create an Account</Link>
      </form>
    </>
  );
};

export default Login;
