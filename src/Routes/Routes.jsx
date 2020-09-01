import React from 'react';
import {Route} from 'react-router-dom';
import Splash from '../components/homepage/Splash';
import AllRestaurants from '../components/restaurants/AllRestaurants';
import RestaurantDetails from '../components/restaurants/RestaurantDetails';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';


const Routes = (props) => {
    return (
        <>
            <Route path = '/' exact component={Splash} />
            <Route path = '/restaurants' exact component={AllRestaurants} />
            <Route path = '/restaurants/:id' exact  component={RestaurantDetails}/>

            {/* //Auth */}
            <Route path = '/login' component={Login} />
            <Route path = '/register' component={Register} />
            

        </>
    );
}

export default Routes;
