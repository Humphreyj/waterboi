import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {registerUser} from '../../Redux/actions/authActions';


const Register = () => {
    const dispatch = useDispatch();
    const [newUser, setNewUser] = useState({
        display_name: '',
        first_name: '',
        last_name: '',
        location: '',
        email: '',
        password: '',
    
    })
    const handleChange = (e) => {
        setNewUser({...newUser,[e.target.name] : e.target.value})
    }
    const submit = (e) => {
        e.preventDefault()
        dispatch(registerUser(newUser))
        setNewUser({
            display_name: '',
            first_name: '',
            last_name: '',
            location: '',
            email: '',
            password: '',
            
        })
        window.location='/'
    }

    return (
        <div className='register'>
            <h3 className='title'>Sign Up with Walp</h3>
            <h4 className='subtitle'>Get out there and get hydrated</h4>

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
                name='first_name'
                value={newUser.first_name}
                placeholder='First Name'
                onChange={handleChange}
                type="text"/>

                <input 
                name='last_name'
                value={newUser.last_name}
                placeholder='Last Name'
                onChange={handleChange}
                type="text"/>

                 

                <input 
                name='location'
                value={newUser.location}
                placeholder='Location'
                onChange={handleChange}
                type="text"/>

                <input 
                name='email'
                value={newUser.email}
                placeholder='E-mail'
                onChange={handleChange}
                type="email"/>

                <input 
                name='password'
                value={newUser.password}
                placeholder='Password'
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
