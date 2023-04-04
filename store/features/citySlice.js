import { createSlice } from '@reduxjs/toolkit';

export const CitySlice = createSlice({
  name: 'city',
  initialState: { city: '' },
  reducers: {
    change: (state, city) => {
      state.city = city.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { change } = CitySlice.actions;

export default CitySlice;
