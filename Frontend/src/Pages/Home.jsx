import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { handleSuccess } from "../util";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState("");

  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedInUser"));
  }, []);

  const handleLogout = () =>{
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    handleSuccess("Logout Successfully..");
    setTimeout(()=>{
        navigate('/login');
    }, 1000)
    
  }

  return (
    <div>
      <h2>Welcome {loggedInUser},</h2>
      <button onClick={handleLogout}>Logout</button>
      <ToastContainer/>
    </div>
  );
};

export default Home;
