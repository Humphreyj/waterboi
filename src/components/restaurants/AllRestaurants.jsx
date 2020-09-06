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
        if (props.state.length === 0) {
            dispatch(getAllRestaurants())
        }
    },[])
    
    useEffect(() => {
        setRestaurantMaster(all)
    },[all])

    useEffect(() => {
        if(input !== '') {
			newList = all.filter(item => {
					return item.name.toLowerCase().indexOf(input.toLowerCase()) !== -1
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
    
    const selectRestaurant = (id) => {
        props.history.push(`/restaurants/${id}`);
        console.log(props)
    }
   
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
                        click={()=>selectRestaurant(item.id)}
                        name={item.restaurant_name}
                        location={item.address}
                        rating={item.average_rating}
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
