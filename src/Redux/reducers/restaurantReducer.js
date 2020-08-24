import {
    GET_RESTAURANTS
} from '../types';

const initialState = {
    
    restaurants: []
}

const restaurantReducer = (state = initialState, action) => {
    switch  (action.type) {
        case GET_RESTAURANTS:
            return {
                ...state,
                restaurants: action.payload
            };
      
        default: return state;
    }
}

export default restaurantReducer;