import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component.js"
import Homepage from "./components/Homepage.component.js"


function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={Homepage} />
      
      </div>
    </Router>
  );
}

export default App;
