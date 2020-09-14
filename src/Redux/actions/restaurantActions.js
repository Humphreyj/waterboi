import axios from 'axios';
import toastr from 'toastr';
import axiosAuth from '../../tools/auth';

import {
    GET_RESTAURANTS, 
    GET_SINGLE_RESTAURANT,
    GET_RESTAURANT_REVIEWS
} from '../types'

export const getAllRestaurants = () => (dispatch) => {
    axios.get(`${process.env.REACT_APP_BACKEND}/restaurants`)
    .then(res => {
        console.log(res.data)
        dispatch({
            type: GET_RESTAURANTS,
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err)
    })
}

export const getSingleRestaurant = (id) => (dispatch) => {
    axios
    .get(`${process.env.REACT_APP_BACKEND}/restaurants/${id}`)
    .then(res => {
        dispatch({
            type: GET_SINGLE_RESTAURANT,
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err)
    })
}

export const getRestaurantReviews = (id) => (dispatch) => {
    axios.get(`${process.env.REACT_APP_BACKEND}/restaurants/${id}/reviews`)
    .then(res => {
        dispatch({
            type: GET_RESTAURANT_REVIEWS,
            payload: res.data
        })
    })
    .catch(err => {
        console.log(err)
        toastr.error(err)
    })
}

export const addNewReview = (id,newReview) => (dispatch) => {
    axiosAuth.post(`${process.env.REACT_APP_BACKEND}/restaurants/${id}/reviews`, newReview)
    .then(res => {
       console.log(res)
        
    })
    .catch(err => {
        console.log(err)
    })
}


