import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3333/v1',
});

export { http };
