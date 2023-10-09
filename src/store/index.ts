import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import MainDB from './DexieModel';

// Define Redux store
export const reduxStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "FETCH_ALL_CHARACTERS",
          "FETCH_CHARACTER", 
          "ADD_FAVORITE", 
          "FETCH_FAVORITES", 
          "DELETE_FAVORITE"
        ],
      },
    }),
});

export const dexieStore = new MainDB();

// Define AppDispatch type
export type AppDispatch = typeof reduxStore.dispatch;


