import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const Restaurant = (props) => {
    return (
        <div className='restaurant-container'
        onClick={props.click}>
            <img src="" alt="Restaurant"/>
            <div className="restaurant-info">
                <p className='restaurant-name' >{props.name}</p>
                <p className='restaurant-location'>{props.location}</p>
                <div className="rating">
                <StarRatingComponent 
                className = 'stars'
                name="rate1" 
                starCount={5}
                value={parseInt(props.rating)}
                editing={false}
                
                />
                {props.count === 1 ? <p className="review-count">{props.count} review</p> : <p className="review-count">{props.count} reviews</p>}

                </div>
                
            </div>
        </div>
    );
}

export default Restaurant;
