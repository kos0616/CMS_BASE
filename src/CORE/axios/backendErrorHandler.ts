import { ElMessageBox } from 'element-plus';
import { h } from 'vue';

/** 通用的後端request輸入錯誤報錯 */
export default (res: backendResponse<any>) => {
  switch (res.code) {
    case 20001:
      alerter(res.response);
      break;
  }
};

function alerter(res: string | Record<string, any>) {
  let msg;

  if (typeof res === 'object') {
    const VNode = Object.entries(res).map(([key, value]) => h('div', null, `${key}: ${value}`));
    msg = h('div', VNode);
  } else {
    msg = res;
  }

  ElMessageBox({
    type: 'error',
    title: 'Error',
    message: msg
  });
}
