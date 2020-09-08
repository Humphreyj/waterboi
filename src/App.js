import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {authenticate} from './Redux/actions/authActions'
import './App.css';
import Navigation from './components/UI/Navigation';
import Routes from './Routes/Routes';
import {BrowserRouter as Router} from 'react-router-dom';
import Login from './components/auth/Login';
import './styles/global.scss';




function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(authenticate())
    
  },[dispatch])
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
