// src/store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../auth/AuthSlice';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
