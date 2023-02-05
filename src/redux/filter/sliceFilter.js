import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    addFilter(state, action) {
      return state = action.payload;
    },
    removeFilter(state, action) {
      return state = '';
    },
  },
});
export const { addFilter, removeFilter } = filterSlice.actions;


