import React,{useEffect} from 'react';
import {connect,useDispatch} from 'react-redux';

import {getAllRestaurants} from '../../Redux/actions/restaurantActions';
import { authenticate } from '../../Redux/actions/authActions';


import Featured from './Featured'
import Freshest from './Freshest';

const Splash = (props) => {

        const dispatch = useDispatch();

    

        useEffect(() => {
            dispatch(authenticate())
            dispatch(getAllRestaurants())
            console.log(props)
        },[dispatch])

        


    return (
        <div className='splash-page'>
            <section className="showcase">
                
                    <div className="showcase-content">
                    <h4>Walp</h4>
                    <p>Like Yelp but for water.</p>
                    </div>
                
            </section>

            <Featured />
            
            <Freshest />
            
            

            
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        state: state.resto.restaurants,
        user: state.auth.data,
        loggedIn: state.auth.loggedIn
    }
}
export default connect(mapStateToProps)(Splash);
