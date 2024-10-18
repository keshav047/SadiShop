import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import Collection from './Pages/Collection/Collection';
import All from './Pages/Collection/All';
import SuitSalwar from './Pages/Collection/SuitSalwar';
import Salwar from './Pages/Collection/Salwar';
import Gowns from './Pages/Collection/Gowns';
import Bridal from './Pages/Collection/BridalSarees';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collections" element={<Collection />} />
        <Route path="/collections/all" element={<All />} />
        <Route path="/collections/suit-salwar" element={<SuitSalwar />} />
        <Route path="/collections/salwar" element={<Salwar />} />
        <Route path="/collections/gowns" element={<Gowns />} />
        <Route path="/collections/bridal" element={<Bridal />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
