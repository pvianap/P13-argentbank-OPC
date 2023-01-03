import axios from 'axios';

export class Api {
  static async login(email: string, password: string) {
    const URL = 'http://localhost:3001/api/v1';
    try {
      const response = await axios.post(URL + '/user/login', {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async getUserProfile() {
    try {
      const response = await axios.get('/profile');
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async putUserProfile(data: object) {
    try {
      const response = await axios.put('/profile', data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async getTransactions() {
    try {
      const response = await axios.get('/transactions');
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default Api;

// CLASS API { Functions }

//POST LOGIN

//GET USER PROFILE

//POST CHANGE PROFILE

//GET TRANSACTIONS
