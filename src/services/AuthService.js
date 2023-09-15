import { AUTH } from '../constants';
import AxiosRequest from '../plugins/AxiosRequest';

class AuthService {
  login(payload) {
    try {
      return AxiosRequest({
        url: AUTH.LOGIN,
        method: 'POST',
        data: payload,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new AuthService();
