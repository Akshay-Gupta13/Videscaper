import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Sign from "./components/Sign";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* <Footer/> */}
    </>
  );
};

export default App;
