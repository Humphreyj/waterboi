import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Restaurant from './Restaurant';

const Featured = (props) => {
    const newArr = [...props.state]
    const sorted = newArr.sort((a,b) =>  a.average_rating < b.average_rating ? 1 : -1)
    const coolest = sorted.slice(0,3)
    console.log(sorted)
    return (
        <section className="coolest-container">
                <h6 className='coolest-title'>This weeks coolest waters.</h6>
                
                {coolest?.map(item => {
                    return(
                        <Restaurant 
                        name={item.name}
                        rating={item.average_rating}
                        location={item.location}
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
