import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"


function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      
      </div>
    </Router>
  );
}

export default App;
