import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { usersReducer } from './users/usersSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
