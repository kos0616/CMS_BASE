import axios, { type AxiosResponse } from 'axios';
import getToken from '../lib/token/getToken';
import errorAlerter from './errorAlerter';
export const BASE_URL = import.meta.env.VITE_APP_URL;

import { useIPStore } from '@/CORE/stores/IP';
const IPStore = useIPStore();

/**
 * axios 實例，將所有請求都放在這個 axios 實例上面，便於管理
 * getIp 僅會在實例初次引用且store內沒有IP時嘗試取得
 */
const Axios = axios.create({
  timeout: 100000,
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'x-authorisation': getToken(),
    'X-Branch-Source': IPStore.IP
  }
});

Axios.interceptors.request.use((config) => {
  const configData = config;
  configData.headers['x-authorisation'] = getToken();
  return config;
});

Axios.interceptors.response.use(
  (response: AxiosResponse<backendResponse<any>>) => response,
  (error) => {
    /** 伺服器的錯誤 CORS 404 403 等 */
    errorAlerter(error);
    return Promise.reject(error);
  }
);

export default Axios;
