import { starterAPI } from './api';
import adminSlice from './slices/adminSlice';
import toggleSlice from './slices/toggleSlice';

const rootReducer = {
  admin: adminSlice,
  theme: toggleSlice,
  [starterAPI.reducerPath]: starterAPI.reducer,
};
export default rootReducer;
