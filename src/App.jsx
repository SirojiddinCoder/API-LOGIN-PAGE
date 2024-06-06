import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
function App() {
  return (
    <div>
      
      <Routes>
       
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
     
    </div>
  );
}

export default App;
