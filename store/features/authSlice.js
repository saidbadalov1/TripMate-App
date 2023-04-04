import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  loading: true,
  userId: '',
};

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isAuth = true;
      localStorage.setItem('auth', state.isAuth);
      state.loading = false;
    },
    getUserId: (state, userId) => {
      state.userId = userId.payload;
      localStorage.setItem('userId', state.userId);
    },
    updateUserId: (state) => {
      state.userId = localStorage.getItem('userId');
    },
    logout: (state) => {
      state.isAuth = false;
      state.userId = localStorage.setItem('userId', undefined);
      localStorage.setItem('auth', false);
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, getUserId, updateUserId } = AuthSlice.actions;

export default AuthSlice;
