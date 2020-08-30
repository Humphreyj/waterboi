import React,{useState, useEffect} from 'react';
import {connect,useDispatch} from 'react-redux';
import {getAllRestaurants} from '../../Redux/actions/restaurantActions';

import Restaurant from '../homepage/Restaurant'


const AllRestaurants = (props) => {
    const all = props.state;
    const dispatch = useDispatch()
    const [restaurantMaster, setRestaurantMaster] = useState(all)
    const [input, setInput] = useState('');
    let newList = [];

    useEffect(() => {
        if (props.state.length == 0) {
            dispatch(getAllRestaurants())
        }
    },[])
    
    useEffect(() => {
        setRestaurantMaster(all)
    },[all])

    useEffect(() => {
        if(input != '') {
			newList = all.filter(item => {
					return item.name.toLowerCase().indexOf(input.toLowerCase()) != -1
			})
			setRestaurantMaster(newList)
			
		}else if(input === '') {
			setRestaurantMaster(all)
		}
    },[input])
    //Filters the list of restaurants based on the search term.
    const handleChange = (e) => {
		setInput(e.target.value);		
	};
   
    return (
        <div className='all-restaurants'>
            <input
            className='search-restaurant'
            placeholder='search' 
            onChange={handleChange}
            type="text"/>
            
            {
                restaurantMaster?.map(item => {
                    return (
                        <Restaurant 
                        name={item.name}
                        rating={item.rating}
                        location={item.location}
                        />
                    )
                })
            }
            
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        state: state.resto.restaurants
    }
}

export default connect(mapStateToProps)(AllRestaurants);
