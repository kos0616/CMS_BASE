import { ElMessageBox } from 'element-plus';

/**
 * 顯示伺服器錯誤 ex: CORS, 404, 500
 * 後端錯誤與這裡無關 ex: 10015 20001  */
export default function errorAlerter(error: any) {
  const status = error.response?.status;

  status
    ? alerter(showMsg(status))
    : alerter(
        'A network error occurred. This could be a CORS issue or a dropped internet connection.'
      );

  function alerter(message: string) {
    ElMessageBox({
      type: 'error',
      title: 'Error',
      message
    });
  }

  function showMsg(n: number): string {
    switch (n) {
      case 404:
        return 'A network error occurred. Status 404';
      case 500:
        return 'A network error occurred. Status 500';
      case 403:
        return 'A network error occurred. Status 403';
      case 401:
        return 'A network error occurred. Status 401';
      default:
        return `A network error occurred. Status ${n}`;
    }
  }
}
