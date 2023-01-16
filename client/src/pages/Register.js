import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [userRegister, setUserRegister] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(value);
    setUserRegister({ ...userRegister, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userRegister);
    axios.post("/users/register", userRegister);
  };
  return (
    <>
      <form className="forms" method="POST" onSubmit={handleSubmit}>
        <h1>Register Form</h1>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            autoComplete="off"
            name="name"
            value={userRegister.name}
            onChange={handleInput}
            id="name"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            autoComplete="off"
            name="email"
            value={userRegister.email}
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
            value={userRegister.password}
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
        <Link to="/login">Already have Account? Login Here</Link>
      </form>
    </>
  );
};

export default Register;
