import React from 'react';

const Restaurant = (props) => {
    return (
        <div className='restaurant-container'>
            <img src="" alt="Restaurant"/>
            <div className="restaurant-info">
                <p className='restaurant-name' >{props.name}</p>
                <p className='restaurant-rating'>rating</p>
                <p className='restaurant-location'>{props.location}</p>
            </div>
        </div>
    );
}

export default Restaurant;
