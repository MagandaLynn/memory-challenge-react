import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { usersReducer } from '../features/users/usersSlice';
import { goalsReducer } from '../features/goals/goalsSlice';
import { createPageReducer } from '../features/create/createPageSlice';

export const store = configureStore({
  reducer: {
    
    goals: goalsReducer,
    users: usersReducer,
    create: createPageReducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
