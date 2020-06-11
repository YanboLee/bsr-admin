import { LoginAction } from './action';
import { SETLOGINUSER, CLEARLOGINUSER } from '../types/const';

// 处理并返回 state
export default (state = {}, action: LoginAction): Object => {
  console.log(action);
  switch (action.type) {
    case SETLOGINUSER:
      return {
        mobile: '',
        nick_name: ''
      };
    case CLEARLOGINUSER:
      return {
        mobile: '',
        nick_name: ''
      };
    default:
      return state;
  }
};
