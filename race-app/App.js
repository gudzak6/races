import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const App = ({ children }) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/races">Races</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default App;
