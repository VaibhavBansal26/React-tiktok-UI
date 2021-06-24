import axios from 'axios';


const instance = axios.create({
    baseURL:"https://mern-tiktok-vb.herokuapp.com/"
});

export default instance;