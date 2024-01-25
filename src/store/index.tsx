import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { starterAPI } from './api';
import { AdminState } from './slices/adminSlice';
import rootReducer from './rootReducer';

export const persistConfig = {
  key: CONFIG.appName,
  storage,
  whitelist: ['admin'],
};

const reducer = combineReducers(rootReducer);
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(starterAPI.middleware);
  },
});

export type RootState = {
  admin: AdminState;
  theme: Boolean;
};

export const persistor = persistStore(store);
