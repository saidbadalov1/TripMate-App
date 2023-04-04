import { configureStore } from '@reduxjs/toolkit';
import { AuthSlice, login, logout } from './features/authSlice';
import CitySlice from './features/citySlice';

export const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    city: CitySlice.reducer,
  },
});
