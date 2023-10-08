import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['FETCH_ALL_CHARACTERS', 'FETCH_CHARACTER'],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;

export default store;
