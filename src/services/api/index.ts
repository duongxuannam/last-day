import axios from 'axios';

export const BASE_URL = 'https://fakestoreapi.com';

const api = axios.create({
    baseURL: BASE_URL,
});

export default api;
