// src/admin/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ADMIN_CREDENTIALS = {
  email: "admin@example.com",
  password: "admin123",
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email === ADMIN_CREDENTIALS.email &&
      password === ADMIN_CREDENTIALS.password
    ) {
      localStorage.setItem("admin-auth", "true");
      navigate("/admin");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Admin Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-control mb-2"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-danger" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
