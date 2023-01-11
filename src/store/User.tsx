import { createSlice } from '@reduxjs/toolkit';
import api from '../services/Api';
import authHeader from '../services/auth-header';

const initialUser = JSON.parse(localStorage.getItem('user') ?? 'null');
//Slice
const slice = createSlice({
  name: 'user',
  initialState: {
    user: initialUser,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logoutSuccess: (state, action) => {
      state.user = null;
      localStorage.removeItem('user');
    },
    setProfile: (state, action) => {
      //ADD TO STATE
      state.user.content = action.payload;
      //ADD TO LOCAL STORAGE
      const user = JSON.parse(localStorage.getItem('user') ?? 'null');
      user.content = action.payload;
      localStorage.setItem('user', JSON.stringify(user));
    },
  },
});

export default slice.reducer;

// Actions
const { loginSuccess, logoutSuccess, setProfile } = slice.actions;
export const login =
  ({ email, password }: { email: string; password: string }) =>
  async (dispatch: any) => {
    console.log('slice was called');
    try {
      const res = await api.post('/user/login', { email, password });

      dispatch(loginSuccess({ token: res.data.body.token }));
      dispatch(profile());
    } catch (e: any) {
      return console.error(e.message);
    }
  };
export const logout = () => async (dispatch: any) => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(logoutSuccess({}));
  } catch (e: any) {
    return console.error(e.message);
  }
};

export const profile = () => async (dispatch: any) => {
  try {
    const res = await api.post('/user/profile', {}, { headers: authHeader() });
    dispatch(setProfile({ content: res.data.body }));
    return res.data.body;
  } catch (e: any) {
    return console.error(e.message);
  }
};

export const updateProfile = (userProfile: object) => async (dispatch: any) => {
  try {
    const res = await api.put('/user/profile', userProfile, {
      headers: authHeader(),
    });
    dispatch(profile());
  } catch (e: any) {
    return console.error(e.message);
  }
};
