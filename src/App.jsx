import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Pattern1 from './Pattern1';

const App = () => (
  <div className="App">
    <div className="container">
      <div className="row">
        <div className="col">
          <nav className="navbar bg-body-tertiary">
            <div className="container-fluid">
              <span className="navbar-brand">Navbar</span>
            </div>
          </nav>
        </div>
      </div>

      <Pattern1 />
    </div>
  </div>
);

export default App;
