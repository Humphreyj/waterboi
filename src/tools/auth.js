import axios from 'axios';

axios.defaults.withCredentials = true;
const axiosAuth = (axios.create({
    baseURL: process.env.REACT_APP_BACKEND,
}));

export default axiosAuth;