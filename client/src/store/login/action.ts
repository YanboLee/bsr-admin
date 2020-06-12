import { ILoginUser } from '@/model/loginUser';
import {
  SETLOGINUSER,
  SET_LOGINUSER,
  CLEARLOGINUSER,
  CLEAR_LOGINUSER
} from '../types/const';

export interface SETLOGINUSERAction {
  type: SET_LOGINUSER;
  data: ILoginUser
}

export interface CLEARLOGINUSERAction {
  type: CLEAR_LOGINUSER;
}

export type LoginAction = SETLOGINUSERAction | CLEARLOGINUSERAction;

export const setlogin = (data: ILoginUser): SETLOGINUSERAction => ({
  type: SETLOGINUSER,
  data,
});

export const clearlogin = (): CLEARLOGINUSERAction => ({
  type: CLEARLOGINUSER
});
