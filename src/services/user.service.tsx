import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3001/api/v1';

const getUserBoard = () => {
  return axios.get(API_URL + 'user', { headers: authHeader() });
};

const userService = {
  getUserBoard,
};

export default userService;
