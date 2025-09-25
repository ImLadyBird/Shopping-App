import axios from 'axios';

const client = axios.create({
  baseURL: 'https://strapi-store-server.onrender.com/api',
});

export { client };