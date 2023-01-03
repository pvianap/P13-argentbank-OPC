import { createAsyncThunk, createSlice, Dispatch } from '@reduxjs/toolkit';
import Api from '../utils/Api';

interface UserData {
  // définissez ici les propriétés du profil utilisateur
}

interface TransactionData {
  // définissez ici les propriétés des transactions
}

export default class Actions {
  static login(email: string, password: string, dispatch: Dispatch) {
    Api.login(email, password)
      .then((response) => {
        dispatch({
          type: 'AUTHENTICATE',
          payload: true,
        });
      })

      .catch(() => {
        dispatch({
          type: 'AUTHENTICATE',
          payload: false,
        });
      });
  }

  static logout(dispatch: Dispatch) {
    dispatch({
      type: 'AUTHENTICATE',
      payload: false,
    });
  }

  static changeProfile(data: UserData, dispatch: Dispatch) {
    Api.putUserProfile(data).then((response) => {
      dispatch({
        type: 'CHANGE_PROFILE',
        payload: response.user,
      });
    });
  }

  static transactions(dispatch: Dispatch) {
    Api.getTransactions().then((response) => {
      dispatch({
        type: 'TRANSACTIONS',
        payload: response.transactions,
      });
    });
  }
}

//Login => API.login (mail, pass) => Dispatch(res)

//Logout => Dispatch() => Redirect(/login)

//Change Profile => Api.modify (field, newData) => Dispatch (res)

//Transactions => Api.transaction (user) => Dispatch (res)
