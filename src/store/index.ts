import { configureStore, combineReducers } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const combinedReducers = combineReducers({
  root: rootReducer,
});

const store = configureStore({
  reducer: combinedReducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
