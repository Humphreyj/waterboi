import React,{useEffect} from 'react';
import {connect,useDispatch} from 'react-redux';
import {getSingleRestaurant} from '../../Redux/actions/restaurantActions';
import {authenticate} from '../../Redux/actions/authActions';
import DisplayReviews from './reviews/DisplayReviews';
import StarRatingComponent from 'react-star-rating-component';

import AddReview from './reviews/AddReview';



const RestuarantDetails = (props) => {
    const dispatch = useDispatch()
    let match = props.match.params.id
    

    useEffect(()=> {
        dispatch(authenticate())
        dispatch(getSingleRestaurant(match))
    },[dispatch,match])

    console.log(props.state)
    return (
        <div className='restaurant-details'>
            
            <div className="primary-info">
                <img src="#" alt="Restaurant"/>
                <div>
                    
                    <h4 className='restaurant-name'>{props.state.name}</h4>
                    <h4 className='location'>{props.state.location}</h4>
                    <h4 className='price-range'>Price range: {props.state.price_range}</h4>
                    <StarRatingComponent 
                name="rate1" 
                starCount={5}
                value={props.state.average_rating}
                editing={false}
                />
                </div>
            </div>
            

            <DisplayReviews
            match={match} />

            {props.loggedIn ? <AddReview match={match} /> : <h4>Please Log in to leave a review</h4> }
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        state: state.resto.restaurant,
        loggedIn: state.auth.loggedIn
    }
}

export default connect(mapStateToProps)(RestuarantDetails);
