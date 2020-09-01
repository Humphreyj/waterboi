import {
    GET_RESTAURANTS, 
    GET_SINGLE_RESTAURANT,
    GET_RESTAURANT_REVIEWS
} from '../types';

const initialState = {
    
    restaurants: [],
    restaurant: {},
    reviews: [],


}

const restaurantReducer = (state = initialState, action) => {
    switch  (action.type) {
        case GET_RESTAURANTS:
            return {
                ...state,
                restaurants: action.payload
            };
        case GET_SINGLE_RESTAURANT:
            return {
                ...state,
                restaurant: action.payload
            }
        case GET_RESTAURANT_REVIEWS:
            return {
                ...state,
                reviews: action.payload
            }
      
        default: return state;
    }
}

export default restaurantReducer;