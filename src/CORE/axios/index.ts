import axios, { type AxiosResponse } from 'axios';
import getToken from '../lib/token/getToken';
import errorAlerter from './errorAlerter';

export const BASE_URL = import.meta.env.VITE_APP_URL;

// todo: 用戶IP的初始化手法
// todo: 後端的 error handler
// todo: 整合 headers => 測試是否合併過頭
// todo: default error handle (numbers and CORS)
// feature: loading 的觸發不再經由 axios 理由是會發生不斷閃白的現象 openLoading

const Axios = axios.create({
  timeout: 100000,
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'x-authorisation': getToken()
    // todo: IP
    // 'X-Branch-Source': ''
  }
});

Axios.interceptors.request.use((config) => {
  const configData = config;
  configData.headers['x-authorisation'] = getToken();
  return config;
});

Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    errorAlerter(error);
    return Promise.reject(error);
  }
);

export default Axios;
