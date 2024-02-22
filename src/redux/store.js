import { combineReducers } from 'redux';
import recipesReducer from './recipesSlice';
import { configureStore } from '@reduxjs/toolkit';




const rootReducer = combineReducers({
  recipes: recipesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
