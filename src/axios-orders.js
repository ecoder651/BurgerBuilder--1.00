import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burgerbuilder-10af1-default-rtdb.firebaseio.com/'
});

export default instance;