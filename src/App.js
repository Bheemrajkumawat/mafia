import React from "react";
import "./App.css";

import "./App.css";
import Header from "./components/Header/Header";
import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/ Home/ Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Reviews from "./pages/Reviews/Reviews";
import Ride from "./pages/Ride/Ride";
import Services from "./pages/Services/Services";
function App() {
  return (
    <>
     <Router>
     <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/Reviews" element={<Reviews/>}></Route>
        <Route path="/ride" element={<Ride/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
      </Routes>
     </Router>
        
      
    </>
  );
}

export default App;
