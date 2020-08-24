import React from 'react';
import {connect} from 'react-redux';
import Restaurant from './Restaurant';

const Featured = (props) => {
    const coolest = props.state.slice(0,3)
    console.log(props)
    return (
        <section className="coolest-container">
                <h6 className='coolest-title'>This weeks coolest waters.</h6>
                
                {coolest?.map(item => {
                    return(
                        <Restaurant 
                        name={item.name}
                        rating={item.rating}
                        location={item.location}
                        />
                    )
                })}
                <div className="button-box">
                    <button className="see-all">See All</button>
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
