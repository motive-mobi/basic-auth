import React from 'react';
import { Router, Link } from "react-router-dom";
import Routes from "./Router";
import history from "./utils/history";

function App() {
  return (
    <Router history={history}>
      <div className="container">
        <Link to="/">Início</Link>
        <Link to="/dashboard">Painel</Link>
        <Routes />
      </div>
    </Router>
  );
}

export default App;
