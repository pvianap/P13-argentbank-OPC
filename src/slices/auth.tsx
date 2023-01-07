import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from './message';

import AuthService from '../services/auth-service';

type RegisterPayload = {
  lastName: string;
  firstName: string;
  email: string;
  password: string;
};

const user = JSON.parse(localStorage.getItem('user') || 'null');
// export const register = createAsyncThunk(
//   'auth/register',
//   async ({ email, password }, thunkAPI) => {
//     try {
//       const response = await AuthService.register(username, email, password);
//       thunkAPI.dispatch(setMessage(response.data.message));
//       return response.data;
//     } catch (error: any) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       thunkAPI.dispatch(setMessage(message));
//       return thunkAPI.rejectWithValue();
//     }
//   }
// );

export const login = createAsyncThunk(
  'auth/login',
  async (
    { email, password }: { email: string; password: string },
    thunkAPI: any
  ) => {
    try {
      const data = await AuthService.login(email, password);
      return { user: data };
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await AuthService.logout();
});

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // [register.fulfilled.type]: (state, action) => {
    //   state.isLoggedIn = false;
    // },
    // [register.rejected.type]: (state, action) => {
    //   state.isLoggedIn = false;
    // },
    [login.fulfilled.type]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected.type]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled.type]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      return state;
    },
  },
});

const { reducer } = authSlice;
export default reducer;
