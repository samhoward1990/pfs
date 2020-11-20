import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Image, Button } from 'react-bootstrap';
import './App.css';

import pfsLogo from './images/PFS_Logo-removebg.png';
import Homepage from './pages/homepage/homepage';
function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav-div">
          <Nav className="bg-dark p-2 positioned-nav justify-content-around">
            <Link to="/"><Button variant="outline-light">Home</Button></Link>
            <Link to="/about"><Button variant="outline-light">About</Button></Link>
          </Nav>
          <Link to="/"><img src={pfsLogo} className="positioned-logo" width="150px" height="150px" /></Link>
        </div>
        <Route exact path="/">
          <Homepage />
        </Route>
      </div>
    </Router>
  );
}

export default App;
