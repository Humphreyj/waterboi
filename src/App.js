import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import axiosAuth from  './tools/auth';
import {userLogin} from './Redux/actions/authActions'
import './App.css';
import Navigation from './components/UI/Navigation';
import Routes from './Routes/Routes';
import {BrowserRouter as Router} from 'react-router-dom';
import Login from './components/auth/Login';
import './styles/global.scss';
import Main from './components/Main'



function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    
    axiosAuth
    .get('http://localhost:5000/api/auth/session')
    .then(res => {
     let userData = {email:"Lucas@cool.com", password:'BeansBeans1!'}
      dispatch(userLogin(userData))
      console.log(userData)
    })
    .catch(err => {console.log(err)})

  },[])
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
