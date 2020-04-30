import { Service }from 'egg';


/**
 * Login Service
 */
export default class Login extends Service {

  /**
   * regist
   * @param name - your name
   */
  public async regist(data) {
    const result = await this.app.mysql.insert('t_user', data);
    const insertSuccess = result.affectedRows === 1;
    
    if (insertSuccess) return {
      result: 1,
      message: 'ok',
      data: ''
    }

    return {
      result: 0,
      message: 'error',
      data: ''
    }
  }
  public async login(data) {
    const { mobile, password } = data;
    const dbUser = await this.app.mysql.get('t_user', { mobile: mobile });

    if (dbUser && dbUser.password === password) return {
      result: 1,
      message: 'ok',
      data: dbUser
    }

    return {
      result: 0,
      message: 'login error',
      data: ''
    }

  }
}
