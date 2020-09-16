import React, {useEffect} from 'react';
import {connect,useDispatch} from 'react-redux';
import {getRestaurantReviews} from '../../../Redux/actions/restaurantActions';
import {authenticate} from '../../../Redux/actions/authActions';
import Review from './Review';

const DisplayReviews = (props) => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(authenticate())
        dispatch(getRestaurantReviews(props.match))
        console.log(props)

        if (props.user && props.state.includes(props.user.display_name)) {
            alert('cant review')
        }
        else{
            alert('no user')
        }
        // eslint-disable-next-line
    },[props.length,dispatch, props.match])
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
        length: state.resto.reviews.length,
        user: state.auth.data
        
    }
}

export default connect(mapStateToProps)(DisplayReviews);
