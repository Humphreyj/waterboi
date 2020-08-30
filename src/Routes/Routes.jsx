import React from 'react';
import {Route} from 'react-router-dom';
import Splash from '../components/homepage/Splash';
import Restaurants from '../components/restaurants/AllRestaurants';
import AllRestaurants from '../components/restaurants/AllRestaurants';

const Routes = (props) => {
    return (
        <>
            <Route path = '/' exact component={Splash} />
            <Route path = '/restaurants' exact component={AllRestaurants} />
        </>
    );
}

export default Routes;
