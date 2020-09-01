import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {registerUser} from '../../Redux/actions/authActions';


const Register = () => {
    const dispatch = useDispatch();
    const [newUser, setNewUser] = useState({
        display_name: '',
        email: '',
        location: '',
        password: '',
        confirm_password: ''
    })
    const handleChange = (e) => {
        setNewUser({...newUser,[e.target.name] : e.target.value})
    }
    const submit = (e) => {
        e.preventDefault()
        dispatch(registerUser(newUser))
        setNewUser({
            display_name: '',
            email: '',
            location: '',
            password: '',
            confirm_password: ''
        })
        window.location='/'
    }

    return (
        <div className='register'>
            <h3 className='title'>Sign Up with Walp</h3>
            <h4>Get out there and get hydrated</h4>

            <h6 className="have-account">Already a Walper? <Link className='to-login' to='login'>Login</Link></h6>
            

            <form 
            className='registration-form'
            onSubmit={submit}
            >
                <input 
                name='display_name'
                value={newUser.display_name}
                placeholder='Display Name'
                onChange={handleChange}
                type="text"/>

                 <input 
                name='email'
                value={newUser.email}
                placeholder='E-mail'
                onChange={handleChange}
                type="email"/>

                <input 
                name='location'
                value={newUser.location}
                placeholder='Location'
                onChange={handleChange}
                type="text"/>

                <input 
                name='password'
                value={newUser.password}
                placeholder='Password'
                onChange={handleChange}
                type="password"/>
                
                <input 
                name='confirm_password'
                value={newUser.confirm_password}
                placeholder='Confirm Password'
                onChange={handleChange}
                type="password"/>

                <button className="register-button">
                    Register
                </button>
                
            </form>
            <h6 className="have-account">Already a Walper? <Link className='to-login' to='login'>Login</Link></h6>
        </div>
    );
}

export default Register;
