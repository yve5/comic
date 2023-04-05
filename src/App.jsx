import React from 'react';
import './App.scss';

import Pattern from './Pattern';

const App = () => (
  <div className="App">
    <div className="container">
      <nav className="navbar bg-body-tertiary qwe">
        <div className="container-fluid">
          <span className="navbar-brand">Navbar</span>
        </div>
      </nav>

      <Pattern />
    </div>
  </div>
);

export default App;
