import React, { useState } from "react";
import "./style.css";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleSuccess, handleError } from "../util";

const Signup = () => {
  const navigate = useNavigate();

  const [isSignupInfo, setIsSignupInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const tempSignupInfo = { ...isSignupInfo };
    tempSignupInfo[name] = value;
    setIsSignupInfo(tempSignupInfo);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const { name, email, password } = isSignupInfo;
    if (!name || !email || !password) {
      return handleError("Field:Name, Email, Password are Required");
    }

    try {
      const url = "https://mern-authentication-with-jwt-token-api.vercel.app/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(isSignupInfo),
      });

      const result = await response.json();
      const { success, message, error } = result;
    
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else if (error) {
        const details = error?.details[0].message;
        handleError(details);
      } else if (!success) {
        handleError(message);
      }

      console.log(result);
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div className="main__container">
      <h1>Create Account</h1>
      <p>Create your account</p>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            autoFocus
            placeholder="Enter Name here"
            value={isSignupInfo.name}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Enter Email here"
            value={isSignupInfo.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Enter Password here"
            value={isSignupInfo.password}
          />
        </div>
        <button type="submit">Sign Up</button>
        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Signup;
