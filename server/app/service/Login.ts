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
    // status = 10  需要审核
    data.status = 10;
    const result = await this.app.mysql.insert('t_user', data);
    const verifyMessage = {
      id: 1,
      message: '注册审核',
      type: '1',
      recieveId: 1,
      state: 1
    }
    await this.app.mysql.insert('t_verify_message', verifyMessage);
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

  public async reset(data) {
    const { mobile, password, newpassword } = data;
    const dbUser = await this.app.mysql.get('t_user', { mobile: mobile });
    if (dbUser.password === password) {
      const result = await this.app.mysql.update('t_user', {
        password: newpassword
      }, {
        where: {
          mobile: mobile
        }
      });
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
    } else {
      return {
        result: 0,
        message: 'password incorrect',
        data: ''
      }
    }
  }
}
