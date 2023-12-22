import { type AxiosResponse } from 'axios';
import formErrorHandler from '@/CORE/axios/formErrorHandler';
import errorCodeAlerter from '@/CORE/axios/errorCodeAlerter';
import permissionHandler from './permissionHandler';

const FORM_VALIDATION = 20001;
const PERMISSION_DENIED = [10015];

export const COMMON_ERRORS = [FORM_VALIDATION, ...PERMISSION_DENIED];

/**
 * 後端通用驗證錯誤
 * 1 表單
 * 2 權限不足
 * 3 一般警示
 */
export default (response: AxiosResponse<backendResponse<any>>, moduleName: string) => {
  const code = response.data.code;
  if (FORM_VALIDATION === code) {
    formErrorHandler(response.data);
    return;
  }

  if (PERMISSION_DENIED.includes(code)) {
    permissionHandler();
    return;
  }

  errorCodeAlerter(response.data, moduleName);
};
