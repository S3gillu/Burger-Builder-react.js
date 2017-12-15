import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-react-f95d5.firebaseio.com/'
});

export default instance;