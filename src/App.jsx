import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Animes from './pages/Animes';
import Games from './pages/Games';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="series" element={<Series />} />
      <Route exact path="filmes" element={<Movies />} />
      <Route exact path="animes" element={<Animes />} />
      <Route exact path="games" element={<Games />} />
    </Routes>
  );
}

export default App;
