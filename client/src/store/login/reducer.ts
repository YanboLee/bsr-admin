
import { defaultLoginUser, ILoginUser } from '@/model/loginUser';
import { LoginAction } from './action';
import { SETLOGINUSER, CLEARLOGINUSER } from '../types/const';

const setUserToLocalstorage = (data: ILoginUser) => {
  window.localStorage.setItem('bsr:logindata', JSON.stringify(data));
};
const getUserToLocalstorage = () => {
  const storgeData = window.localStorage.getItem('bsr:logindata') || '{}';
  const data = JSON.parse(storgeData);
  return data;
};

// 处理并返回 state
export default (state = getUserToLocalstorage(), action: LoginAction): Object => {
  switch (action.type) {
    case SETLOGINUSER:
      setUserToLocalstorage(action.data);
      return {
        mobile: action.data.mobile,
        nick_name: action.data.nick_name,
        role: action.data.role,
        email: action.data.email,
        status: action.data.status,
      };
    case CLEARLOGINUSER:
      return defaultLoginUser;
    default:
      return state;
  }
};
