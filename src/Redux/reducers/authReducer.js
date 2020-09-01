import {
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_TOGGLE,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    LOGGED_IN
} from '../types';

const initialState = {
    
    loggingIn: false,
    loggedIn: false,
    error: null,
    data: {}
}

const authReducer = (state = initialState, action) => {
    switch  (action.type) {
        case LOGGED_IN:
            return {
                ...state,
                loggedIn: true
            }
        case LOGIN_TOGGLE:
            return {
                ...state,
                loggingIn: !state.loggingIn
            }
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
        case LOGOUT:
            return {
                ...state,
                data: {},
                loggedIn: false
            }
        default: return state;
    }
}

export default authReducer;