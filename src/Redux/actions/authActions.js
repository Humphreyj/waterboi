import toastr from 'toastr';
import axios from 'axios';

import {
    REGISTER_SUCCESS,
    LOGIN_TOGGLE,
    LOGIN_SUCCESS,
    LOGOUT,
    LOGGED_IN
} from '../types';

export const checkToken = () => (dispatch) => {
    dispatch({
        type: LOGGED_IN
    })
}

//register

export const registerUser = (data) => (dispatch) => {
    return axios
            .post(`http://localhost:5000/api/auth/register`, data)
            .then(res => {
                console.log(res)
                window.location = '/login';
                dispatch({
                    type: REGISTER_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                console.log(err)
                toastr.error(err)
            })
}
export const loginToggle = () => (dispatch) => {
    
    dispatch({
        type: LOGIN_TOGGLE
    })

}

export const userLogin = (userData) => (dispatch) => {
    return axios
            .post(`http://localhost:5000/api/auth/login`, userData)
            .then(res => {
                console.log(res.data)
                
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data
                })
                dispatch({
                    type: LOGIN_TOGGLE
                })
            })
            .catch(err => {
                console.log(err)
                toastr.error(err)
            })
}


export const logout = () => (dispatch) => {
    return axios
            .get('http://localhost:5000/api/auth/logout')
            .then(res => {
                console.log(res)
                localStorage.clear()
                window.location = '/'
                dispatch({
                    type: LOGOUT
                })
            })
            .catch(err => {
                console.log(err)
            })
}

