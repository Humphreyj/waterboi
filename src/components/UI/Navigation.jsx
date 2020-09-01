import React,{useState} from 'react';
import {connect,useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout,loginToggle} from '../../Redux/actions/authActions';

const Navigation = (props) => {
    const dispatch = useDispatch()
    const [drawerIsOpen,setDrawerIsOpen] = useState(false)
    const userLogout = () => {
        dispatch(logout())
    }
    const showLogin = () => {
        dispatch(loginToggle())
        console.log(props)
        setDrawerIsOpen(!drawerIsOpen)
    }
    return (
        <nav className='main-nav'>
            <div className="menu">
                <i className={drawerIsOpen ? "fas fa-glass-whiskey toggle open" : "fas fa-glass-whiskey toggle"}
                onClick={()=>setDrawerIsOpen(!drawerIsOpen)}
                ></i>
                <div className={drawerIsOpen ? "menu-modal open-modal" : "menu-modal"}>
                    <Link to='/' onClick={()=>setDrawerIsOpen(!drawerIsOpen)}>Home</Link>
                    {props.loggedIn ? <p onClick={userLogout}>LOGOUT</p> :<p onClick={showLogin}>Login</p>}
                    {props.loggedIn ? null :<Link to='/register' onClick={()=>setDrawerIsOpen(!drawerIsOpen)}>Signup</Link>}
                </div>
            </div>
            
            
        </nav>
    );
}
const mapStateToProps = (state) => {
    return {
        loggingIn: state.auth.loggingIn,
        loggedIn: state.auth.loggedIn
    }
}

export default connect(mapStateToProps)(Navigation);
