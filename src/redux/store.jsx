import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Defaults to localStorage for web

import amazonReducer from './amazonSlice'; // Importing your amazonReducer slice

// Configuration for redux-persist
const persistConfig = {
  key: 'root', // Key for the root of the persisted state
  version: 1, // Version of the persisted state
  storage, // Storage engine to use (default is localStorage for web)
};

// Create a persisted reducer using redux-persist
const persistedReducer = persistReducer(persistConfig, amazonReducer);

// Configure the Redux store using Redux Toolkit
export const store = configureStore({
  reducer: {
    amazon: persistedReducer, // Root reducer includes your persisted amazonReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // Configure middleware to handle specific actions that redux-persist uses
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Ignore these action types
      },
    }),
});

// Create a persistor object to persist the store
export const persistor = persistStore(store);
