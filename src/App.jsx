import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';

import './App.css';

function App() {
  const [pokemonData, setPokemonData] = useState([])

  return (
    <Router>
      <Routes>
        <Route 
          path='/' 
          element={<Home setPokemonData={setPokemonData}/>}
        />

        <Route 
          path='/:name' 
          element={<Profile pokemonData={pokemonData}/>}
        />

      </Routes>
    </Router>
  );
}

export default App;
