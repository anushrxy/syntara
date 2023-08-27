// src/App.jsx
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./index.css";
import NavBar from "./components/marginals/navbar/NavBar";
import Home from "./pages/Home";
import Seller from "./pages/Seller";
import Buyer from "./pages/Buyer";
import Footer from "./components/marginals/Footer/Footer";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/buyer" element={<Buyer />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
