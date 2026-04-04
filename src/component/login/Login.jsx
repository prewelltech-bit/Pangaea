import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Login.css";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    alert("Login attempt with: " + data.email);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back</h2>
        <p>Please login to your account</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              {...register("email")} 
              placeholder="Enter your email" 
              style={{ borderColor: errors.email ? "#e63946" : "" }}
            />
            {errors.email && <span className="login-error">{errors.email.message}</span>}
          </div>

          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              {...register("password")} 
              placeholder="Enter your password" 
              style={{ borderColor: errors.password ? "#e63946" : "" }}
            />
            {errors.password && <span className="login-error">{errors.password.message}</span>}
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
