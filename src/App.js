import React from 'react';
import './App.css';
import Navigation from './components/UI/Navigation';
import Routes from './Routes/Routes';
import {BrowserRouter as Router} from 'react-router-dom';
import Login from './components/auth/Login';
import './styles/global.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Login />
      <Routes />
      
    </div>
    </Router>
    
  );
}

export default App;
