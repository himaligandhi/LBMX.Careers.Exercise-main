import React from 'react';

import './App.scss';
import { Home } from './components/Home';
import Postings from './components/Postings';

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>LBMX Careers</h1>
        <Home />
        <Postings />
      </div>
    </div>
  );
}

export default App;
