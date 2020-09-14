import React,{useEffect} from 'react';
import {connect,useDispatch} from 'react-redux';
import { authenticate } from '../../Redux/actions/authActions';
import blankie from '../../img/blankie.jpg';


const UserProfile = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
            
            dispatch(authenticate())
            console.log(props.user)
        
    },[dispatch,props.user])
    


    console.log(props)
    return (
        <div className='user-profile'>
            
            <div className="user-heading">
            <img src={blankie} alt={`${props.user.first_name}`}/>
            <h3 className="welcome">Welcome, {props.user.display_name}</h3>
            </div>
            <h4 className="location">{props.user.location}</h4>
            
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.data,
    }
}

export default connect(mapStateToProps)(UserProfile);
