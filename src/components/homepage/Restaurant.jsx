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
                <StarRatingComponent 
                className = 'stars'
                name="rate1" 
                starCount={5}
                value={props.rating}
                editing={false}
                
                />
            </div>
        </div>
    );
}

export default Restaurant;
