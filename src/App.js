import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout"
function App() {
  return (
    <Router>

    <div className="App">
          <Header/>
      <Switch>
        <Route path="/checkout">
          <Checkout/>
        </Route>
        
        
        {/* Default group always at the bottom */}
        <Route path="/">
      {/*1. header */}
        
      {/* 2. Home/body */}
        <Home/>
        </Route>


      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
