import React, {useEffect} from 'react';
import {connect,useDispatch} from 'react-redux';
import {getRestaurantReviews} from '../../../Redux/actions/restaurantActions';
import Review from './Review';

const DisplayReviews = (props) => {
    const dispatch = useDispatch();
    console.log(props)
    useEffect(() => {
        dispatch(getRestaurantReviews(props.match))
        
    },[props.length])
    return (
        <div>
            {props.state?.map(item => {
                return (
                    <Review
                    name={item.display_name}
                    content={item.content}
                    rating={item.rating}
                     />
                )
            })}
            
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        state: state.resto.reviews,
        length: state.resto.reviews.length
        
    }
}

export default connect(mapStateToProps)(DisplayReviews);
