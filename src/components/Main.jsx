import React,{useEffect,useDispatch} from 'react';
import Navigation from './UI/Navigation';
import Login from './auth/Login';
import Routes from '../Routes/Routes';

const Main = () => {
    const dispatch = useDispatch()
    useEffect(() => {

    })
    return (
        <>
            <Navigation />
            <Login />
            <Routes />
            
        </>
    );
}

export default Main;
