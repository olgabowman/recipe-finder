import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipes: [],
  loading: false,
  error: null,
};

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setRecipes: (state, action) => {
      state.recipes = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setRecipes, setLoading, setError } = recipesSlice.actions;

export default recipesSlice.reducer;
