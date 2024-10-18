import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


import Home from './Pages/Home/Home';

import Contact from './Pages/Contact/Contact';

import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <Footer />
    </Router>
  );
}

export default App;
