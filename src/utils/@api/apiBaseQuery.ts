import { BaseQueryFn } from '@reduxjs/toolkit/dist/query';
import { AxiosError, AxiosRequestConfig } from 'axios';
import Api from './api';

export const apiBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' },
  ): BaseQueryFn<{
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
    responseType?: AxiosRequestConfig['responseType'];
    headers?: AxiosRequestConfig['headers'];
  }> =>
  async ({ url, method, data, params, responseType, headers }) => {
    try {
      const result = await Api({
        url: baseUrl + url,
        method,
        data,
        params,
        responseType,
        headers,
      });
      return { data: result.data };
    } catch (error) {
      const err = error as AxiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };
