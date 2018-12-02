import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Register from './component/register';
import Login from './component/login';
import Navbar from './component/navbar';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
