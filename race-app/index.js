import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Races from './components/Races';
import './index.css';

const Root = () => (
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/races" component={Races} />
      </Switch>
    </App>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
