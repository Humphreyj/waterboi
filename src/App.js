import React from 'react';
import './App.css';
import Navigation from './components/UI/Navigation';
import Routes from './Routes/Routes';
import {BrowserRouter as Router} from 'react-router-dom';
import Footer from './components/UI/Footer';
import './styles/global.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
      <Routes />
      
    </div>
    </Router>
    
  );
}

export default App;
