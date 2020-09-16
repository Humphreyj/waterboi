import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Restaurant from './Restaurant';

const Featured = (props) => {
    const newArr = [...props.state]
    const sorted = newArr.sort((a,b) =>  a.average_rating < b.average_rating ? 1 : -1)
    const coolest = sorted.slice(0,3)
    console.log(props)
    const selectRestaurant = (id) => {
        window.location =`/restaurants/${id}`;
        console.log(props)
    }
    return (
        <section className="coolest-container">
                <h6 className='coolest-title'>This weeks coolest waters.</h6>
                
                {coolest?.map((item,i) => {
                    return(
                        <Restaurant
                        click={()=>selectRestaurant(item.id)} 
                        key = {i}
                        name={item.restaurant_name}
                        location={item.address}
                        rating={item.average_rating}
                        />
                    )
                })}
                <div className="button-box">
                    <Link to='/restaurants'>
                        <button className="see-all">See All</button>
                    </Link>
                    
                </div>
            </section>
    );
}

const mapStateToProps = (state) => {
    return {
        state: state.resto.restaurants
    }
}

export default connect(mapStateToProps)(Featured);
