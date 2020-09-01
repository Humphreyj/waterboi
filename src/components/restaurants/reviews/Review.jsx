import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Review = (props) => {
    return (
        <div className='review-container'>
            <h4 className='display-name'>{props.name}</h4>
            <p className='review-content'>{props.content}</p>
            <StarRatingComponent 
                name="rate1" 
                starCount={5}
                value={props.rating}
                
                />  
        </div>
    );
}

export default Review;
