import React,{useEffect} from 'react';

import {useDispatch} from 'react-redux';
import {getAllRestaurants} from '../../Redux/actions/restaurantActions';

import Featured from './Featured'
import Freshest from './Freshest';

const Splash = () => {

        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(getAllRestaurants())
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

export default Splash;
