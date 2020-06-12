export interface ILoginUser {
  mobile: String,
  nick_name: String,
  email: String,
  role: String,
  status: String,
}

export const defaultLoginUser = {
  mobile: '',
  nick_name: '',
  email: '',
  role: '',
  status: '',
};
