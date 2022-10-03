import React, { useState } from "react";
import "./register.css";
const Axios = require('axios');

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
      const {name, email, password, reEnterPassword} = user
      if(name && email && password (password === reEnterPassword)){
        
        Axios.post("http://localhost:5000/register", user)
        .then((res) => {
          console.log(res);
        })
      }else{
        alert('Invalid Inputs');
      }
      
  }

  return (
    <div className="register">
      {console.log("User", user)}
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder=" Your Name"
      />
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter your password"
        onChange={handleChange}
      />
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder=" Re-Enter your password"
        onChange={handleChange}
      />
      <div className="button" onClick={register}>Register</div>
      or
      <div className="button">Login</div>
    </div>
  );
};

export default Register;
