import React from 'react';
import {Route} from 'react-router-dom';
import Splash from '../components/homepage/Splash';

const Routes = (props) => {
    return (
        <>
            <Route path = '/' exact component={Splash} />
        </>
    );
}

export default Routes;
