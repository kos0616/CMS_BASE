import errorCode from '@/CUSTOMER/axios/error'; // 進行後端error code提示
import $http from '@/CUSTOMER/axios';

const API = 'account/auth/logout';

type response = any;

/** 登出 */
export default async () => {
  return $http
    .get<backendResponse<response>>(API)
    .then((d) => {
      if (d.data.code === 0) {
        const result = d.data.response;
        return result;
      }
      throw d;
    })
    .catch((err) => {
      errorCode(err.data, 'ACCOUNT');
    });
};
