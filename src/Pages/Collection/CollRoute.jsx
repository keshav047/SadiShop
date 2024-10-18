import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Collection from './Collection'; // Adjust the import path as necessary
import All from './All'; // Import your All component
import SuitSalwar from './SuitSalwar'; // Import your Suit Salwar component
import Salwar from './Salwar'; // Import your Salwar component
import Gowns from './Gowns'; // Import your Gowns component
import Bridal from './BridalSarees'; // Import your Bridal component

function CollRoute() {
  return (
    <Router>
    {/* <Collection /> */}
    <Routes>
   
    <Route path="/collection" element={<Collection />} />
      <Route path="/all" element={<All />} />
      <Route path="/suit-salwar" element={<SuitSalwar />} />
      <Route path="/salwar" element={<Salwar />} />
      <Route path="/gowns" element={<Gowns />} />
      <Route path="/bridal" element={<Bridal />} />
    </Routes>
    </Router>
  );
}

export default CollRoute;
