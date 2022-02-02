import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const Login = (props) => {
  let history = useHistory();
  const [creds, setcreds] = useState({ email: "", password: "" });
  const onSubmit = async (e) => {
    console.log("successfully submitted");
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: creds.email, password: creds.password }),
    });

    const json = await response.json();
    console.log(json.authtoken);
    if (json.success) {
      //save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      history.push("/home");
    } else {
      alert("Invalid Credentials");
    }
  };
  const onChange = (e) => {
    setcreds({ ...creds, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            name="email"
            value={creds.email}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            value={creds.password}
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
