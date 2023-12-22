import { defineStore } from 'pinia';

interface State {
  /** 用戶的登入狀態 */
  isLoggedIn: boolean;
}

/** 用戶的驗證狀態 */
export const useAuthStore = defineStore('auth', {
  state: (): State => ({
    isLoggedIn: false
  })
});
