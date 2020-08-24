import axios from 'axios';
import toastr from 'toastr';

import {
    GET_RESTAURANTS
} from '../types'

export const getAllRestaurants = () => (dispatch) => {
    axios.get(`http://localhost:5000/api/restaurants`)
    .then(res => {
        console.log(res)
        dispatch({
            type: GET_RESTAURANTS,
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err)
    })
}
