import React,{useState} from 'react';
import {useDispatch, connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {userLogin, loginToggle} from '../../Redux/actions/authActions';

const Login = (props) => {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e) => {
        setUserData({...userData,[e.target.name]: e.target.value})
        console.log(userData)
    }
    const submit = (e) => {
        e.preventDefault();
        dispatch(userLogin(userData))

    }
    const hideLogin = () => {
        dispatch(loginToggle())
        console.log(props)
    }

    return (
        <div className={props.loggingIn ? 'login-page' : 'login-page hidden'}>
            <h4 className="title">Log in to Walp</h4>
            <div className="new-to-walp">
                <h6>New to Walp? <Link className='to-sign-up' to='/register'> Sign up!</Link></h6>
                

                <p className="tos">By logging in you agree to not be a dumb jerk.</p>
            </div>
            
            <form 
            className='log-in-form'
            onSubmit={submit}
            >
                <input 
                type="email"
                placeholder='Email'
                name='email'
                value={userData.email}
                onChange={handleChange}
                />
                <input 
                type="password"
                placeholder='Password'
                onChange={handleChange}
                name = 'password'
                value={userData.password}
                />
                <Link 
                className='forgot-password'
                to='/'>Forgot Password?</Link>

                <button className="login-button">Log in!</button>
            </form>    

          
            <i 
            onClick={hideLogin}
            className="far fa-window-close cancel fa-2x"></i>       
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        loggingIn: state.auth.loggingIn,
        loggedIn: state.auth.loggedIn
    }
}

export default connect(mapStateToProps)(Login);
