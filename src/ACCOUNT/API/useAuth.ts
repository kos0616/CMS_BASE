import { useAuthStore } from '../../CORE/stores/auth';
import { useRouter } from 'vue-router';
import Logout from '../Service/logout';

export const useAuth = () => {
  const auth = useAuthStore();
  const router = useRouter();
  /**
   *
   * @param callBack 登出的API與轉址
   */
  const logout = async () => {
    await Logout();
    auth.isLoggedIn = false;

    localStorage.removeItem('token');
    localStorage.removeItem('x-authorisation');

    router.push('/login');
  };

  return {
    isLoggedIn: auth.isLoggedIn,
    logout
  };
};
