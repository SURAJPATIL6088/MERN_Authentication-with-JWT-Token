import React, { useState } from "react";
import "./style.css";
import { useNavigate, Link } from "react-router-dom";
import { handleSuccess, handleError } from "../util";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  const [isLoginInfo, setIsLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const tempLoginInfo = { ...isLoginInfo };
    tempLoginInfo[name] = value;
    setIsLoginInfo(tempLoginInfo);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const { email, password } = isLoginInfo;

    if (!email || !password) {
      return handleError("Field:Email, Password are Required..");
    }

    try {
      const url = "https://mern-authentication-with-jwt-token-api.vercel.app/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(isLoginInfo),
      });

      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;

      if (success) {
        handleSuccess(message);
        localStorage.setItem("token", jwtToken);
        localStorage.setItem("loggedInUser", name);

        setTimeout(() => {
          navigate("/home");
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
      <h1>Login Now</h1>
      <p>Login to your account</p>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Enter Email here"
            value={isLoginInfo.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Enter Password here"
            value={isLoginInfo.password}
          />
        </div>

        <span>
          If you Dont have Account? <Link to="/signup">Signup</Link>
        </span>

        <button type="submit">Login</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
