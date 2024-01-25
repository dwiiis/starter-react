import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  darkMode: false,
  // Add other application states here
};

const toggleSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = toggleSlice.actions;

export const selectDarkMode = (state: any) => state?.theme?.darkMode;

export default toggleSlice.reducer;
