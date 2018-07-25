import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/landing/Login'
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import AxiosCall from './components/AxiosCall';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        
    
          <Route exact path="/" component={Login} />
          <Route path="/axios" component={AxiosCall} />
          
        </div>
      </BrowserRouter>    
    );
  }
}

export default App;
