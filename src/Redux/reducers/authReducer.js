import {
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../types';

const initialState = {
    loggedIn: false,
    error: null,
    data: {}
}

const authReducer = (state = initialState, action) => {
    switch  (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                data: action.payload
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        case REGISTER_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default: return state;
    }
}

export default authReducer;