import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="series" element={<Series />} />
      <Route exact path="filmes" element={<Movies />} />
    </Routes>
  );
}

export default App;
