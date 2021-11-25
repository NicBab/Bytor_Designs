import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Header, Footer } from './components/index'
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route />
        <Route />
        <Route />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
