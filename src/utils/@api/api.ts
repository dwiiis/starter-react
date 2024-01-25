import axios from 'axios';
import { RootState } from '@/store';
import { Store } from '@reduxjs/toolkit';

let store: Store;

export const injectStore = (_store: Store) => {
  store = _store;
};

export const defaultApi = axios.create();

const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

api.interceptors.request.use(
  (config) => {
    const state: RootState = store.getState();
    const token = state.admin?.token;    

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      console.log('error 401 -> logout');
    } else if (error?.response?.status === 500) {
      console.log(
        'System Currently Cannot Process your Request, Please Contact your IT Department',
      );
    }

    return Promise.reject(error);
  },
);

export default api;
