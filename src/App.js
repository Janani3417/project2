import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Servicep from "./pages/Servicep"; 
import Portfolio from "./pages/Portfolio"; 
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/services" element={<Servicep />} />
        <Route path="/portfolio" element={<Portfolio />} />
       <Route path="/contact" element={<Contact />} />

      </Routes>
      
      <Footer /> 
    </Router>
  );
}

export default App;