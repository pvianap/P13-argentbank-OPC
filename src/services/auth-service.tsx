import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1';

const register = (
  email: string,
  password: string,
  firstName: string,
  lastName: string
) => {
  return axios.post(API_URL + '/user/signup', {
    email,
    password,
    firstName,
    lastName,
  });
};

const login = (email: string, password: string) => {
  return axios
    .post(API_URL + '/user/login', {
      email,
      password,
    })
    .then((response) => {
      if (response.data.body.token) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
