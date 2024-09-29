import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import React from "react";


const App = ()=>{
  return (
    <div>
      <div className="bg-slate-900">
      <Navbar/>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="Cart" element={<Cart/>} />
        </Routes>
      </div>
    </div>
  )
};

export default App;