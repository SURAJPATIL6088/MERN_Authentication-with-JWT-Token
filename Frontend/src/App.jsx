import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./Pages/login";
import Signup from "./Pages/signup";
import Home from "./Pages/Home";
import RefreshHandler from "./RefreshHandler";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const ProtectedRoutes = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login"/>;
  };

  return (
    <div>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<ProtectedRoutes element={<Home />}/>} />
      </Routes>
    </div>
  );
}

export default App;
