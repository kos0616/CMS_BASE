import { type AxiosResponse } from 'axios';
import Axios from '@/CORE/axios/index';
import { errorHandler } from './error';

/** 客制層request額外調整 */
// raw_axios.interceptors.request.use((config) => {});

Axios.interceptors.response.use((response: AxiosResponse<backendResponse<any>>) => {
  /** 後端的其他報錯 */
  errorHandler(response);
  return response;
});

export default Axios;
