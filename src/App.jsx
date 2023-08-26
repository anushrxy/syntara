// src/App.jsx
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import NavBar from "./components/marginals/navbar/NavBar";
import Home from "./pages/Home";
import Footer from "./components/marginals/Footer/Footer";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
