import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Series from './pages/Series';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/series" element={<Series />} />
    </Routes>
  );
}

export default App;
