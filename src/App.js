import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './components/Header'
import Pokedex from './components/Pokedex'




//todo: pagination and infinite scroll
//todo: react router
//todo: save favorite pokemon?

function App() {
  return (
    <div className="App">
      <Header />

      <Pokedex />
    </div>
  );
}

export default App;
