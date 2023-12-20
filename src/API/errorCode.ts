import { ElMessageBox as $message } from 'element-plus'; // 取得警告標籤
import i18n from '@/CORE/i18n';
/** 後端系統的共用錯誤 */
import { COMMON_ERRORS } from '@/CUSTOMER/axios/error';

export default (data: backendResponse<any>): void => {
  /** 如果有找到共用的錯誤code則別不往下執行 */
  if (COMMON_ERRORS.includes(data.code)) return;

  let msg: any = i18n.global.t('Util.error', { code: data.code }) + ` ${data.response}`;
  const errorMsg: any = i18n.global.t(`NotificationSystem.${data.code}`);
  /** 判斷沒有多語言對應時，回傳普通警示 */
  if (errorMsg !== `NotificationSystem.${data.code}`) {
    msg = errorMsg;
  }
  $message.alert(msg);
};
