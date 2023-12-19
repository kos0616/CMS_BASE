import { type AxiosResponse } from 'axios';
import backendErrorHandler from '@/CORE/axios/backendErrorHandler';
import permissionHandler from './permissionHandler';

const FORM_VALIDATION = 20001;
const PERMISSION_DENIED = [10015];

export const COMMON_ERRORS = [FORM_VALIDATION, ...PERMISSION_DENIED];

/**
 * 後端通用驗證錯誤
 * 1 表單
 * 2 權限不足
 */
export const errorHandler = (response: AxiosResponse<backendResponse<any>>) => {
  const code = response.data.code;
  if (FORM_VALIDATION === code) backendErrorHandler(response.data);
  if (PERMISSION_DENIED.includes(code)) permissionHandler();
};
