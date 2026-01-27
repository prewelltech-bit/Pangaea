import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back</h2>
        <p>Please login to your account</p>

        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <button type="submit">Login</button>

          <span className="signup-text">
            Don’t have an account? <a href="#">Sign up</a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
