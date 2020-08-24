import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {useDispatch} from 'react-redux';
import {getAllRestaurants} from '../../Redux/actions/restaurantActions';

import Featured from './Featured'
import Freshest from './Freshest';

const Splash = (props) => {

        const dispatch = useDispatch();
        
        useEffect(() => {
            dispatch(getAllRestaurants())
            console.log(props)
        },[])

        


    return (
        <div className='splash-page'>
            <section className="showcase">
                <div className="backdrop">
                    <div className="showcase-content">
                    <h4>Walp</h4>
                    <p>Like Yelp but for water.</p>
                    </div>
                </div>
            </section>

            <Featured />
            
            <Freshest />
            
            

            
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        state: state.resto.restaurants
    }
}
export default connect(mapStateToProps)(Splash);
