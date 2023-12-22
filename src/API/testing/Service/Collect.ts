import errorCode from '@/CUSTOMER/axios/error'; // 進行後端error code提示
// import $http from '@/CORE/axios';
import $http from '@/CUSTOMER/axios';

const API = 'casinoPaymentFlow/front-collectSequence/info';

export type request = {};

type response = { foo: 'bar' };

/** 收錢方法 */
export default async (request: request) => {
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
      errorCode(err.data, 'API');
    });
};
