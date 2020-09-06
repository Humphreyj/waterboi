import React,{useEffect} from 'react';
import {connect,useDispatch} from 'react-redux';

import {getAllRestaurants} from '../../Redux/actions/restaurantActions';


import Featured from './Featured'
import Freshest from './Freshest';

const Splash = (props) => {
        let token = localStorage.getItem('token')
        let numba = localStorage.getItem('num')
        const dispatch = useDispatch();

        useEffect(() => {
            console.log(props,token, numba)
        })

        useEffect(() => {
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
