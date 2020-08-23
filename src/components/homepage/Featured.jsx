import React from 'react';
import Restaurant from './Restaurant';

const Featured = () => {
    return (
        <section className="featured">
                <h6>This weeks coolest waters.</h6>
                <Restaurant />
                <Restaurant />
                <Restaurant />
            </section>
    );
}

export default Featured;
