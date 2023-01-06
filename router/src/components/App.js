import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home";
import Demo from "./pages/Demo";
import KeyFeatures from "./pages/KeyFeatures";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";
import "./App.css";

function App() {
  return (
    <div className="containery">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/features' element={<KeyFeatures/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/testimonials' element={<Testimonials/>}/>
        <Route path='/demo' element={<Demo/>}/>
      </Routes>
    </div>
  );
}

export default App;

