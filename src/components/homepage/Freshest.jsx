import React from 'react';
import {connect} from 'react-redux';
import Restaurant from './Restaurant';

const Freshest = (props) => {
    const freshest = props.state.slice(1).slice(-3)
    return (
    <section className='freshest'>
        <h6>The Freshest Waters</h6>
        {freshest?.map(item => {
                    return(
                        <Restaurant 
                        name={item.restaurant_name}
                        location={item.address}
                        rating={item.average_rating}
                        
                        />
                    )
                })}
    </section>
    );
}
const mapStateToProps = (state) => {
    return {
        state: state.resto.restaurants
    }
}
export default connect(mapStateToProps)(Freshest);
