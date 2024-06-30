import axios, { AxiosRequestConfig } from 'axios';
import { TPropsWithPaginationQuery } from '@/types';

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_BASE_URL,
  headers: {
    Accept: 'application/json',
  },
});

const apiCaller = {
  get: (
    url: string,
    params?: TPropsWithPaginationQuery<{
      [key: string]: any;
    }>,
    options?: AxiosRequestConfig,
  ) => instance.get(url, { params, ...options }),
  post: (
    url: string,
    params?: {
      [key: string]: any;
    },
    options?: AxiosRequestConfig,
  ) => instance.post(url, params, options),
  put: (
    url: string,
    params?: {
      [key: string]: any;
    },
    options?: AxiosRequestConfig,
  ) => instance.put(url, params, options),
  delete: (url: string) => instance.delete(url),
};

export default apiCaller;
