import React, { useState } from "react";
import "./login.css";
const Axios = require("axios");

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    Axios.post("http://localhost:5000/login", user)
    .then(res => alert(res.data.message));
  };

  return (
    <div className="login">
      {console.log(user)}
      <h1>Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter your email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter your password"
        onChange={handleChange}
      />
      <div className="button" onClick={login}>
        Login
      </div>
    </div>
  );
};

export default Login;
