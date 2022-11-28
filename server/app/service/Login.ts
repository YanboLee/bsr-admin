import { Service }from 'egg';
const uuid = require('node-uuid');

/**
 * Login Service
 */
export default class Login extends Service {

  /**
   * regist
   * @param name - your name
   */
  public async regist(data) {
    const queryInDb = await this.app.mysql.select('t_user', {where: { mobile: data.mobile }});
    if (queryInDb.length > 0) {
      return {
        result: 0,
        message: '该手机号已注册',
        data: ''
      }
    }
    // status = 10  需要审核
    data.status = 10;
    data.role = 1;
    let key_id =  uuid.v1();
    data.key_id = key_id;

    // const result = await this.app.mysql.insert('t_user', data);
    // const verifyMessage = {
    //   id: uuid.v1(),
    //   message: '注册审核',
    //   type: '1',
    //   recieveId: 1,
    //   postId: key_id,
    //   state: 1
    // }

    // await this.app.mysql.insert('t_verify', verifyMessage);
    // const insertSuccess = result.affectedRows === 1;
    
    // if (insertSuccess) return {
    //   result: 20000,
    //   message: '注册成功，等待管理员审核',
    //   data: ''
    // }

    // return {
    //   result: 0,
    //   message: 'error',
    //   data: ''
    // }
  }
  public async login() {
    // const { username, password } = data;
    // const dbUser = await this.app.mysql.get('t_user');
    // if (!dbUser.mobile || !dbUser.status) {
    //   return {
    //     result: 0,
    //     message: '用户名输入有误',
    //     data: ''
    //   }
    // }
    // if (dbUser && dbUser.status !== 1) {
    //   return {
    //     result: 0,
    //     message: '用户暂无权限登录，请联系管理员',
    //     data: ''
    //   }
    // }
    // if (dbUser && dbUser.password === password) {
    //   dbUser.accessToken = username + '-token'
    //   return {
    //     result: 20000,
    //     message: 'ok',
    //     data: dbUser
    //   }
    // }

    return {
      result: 0,
      message: 'login error',
      data: ''
    }
  }

  public async reset() {
    // const { mobile, password, newpassword } = data;
    // const dbUser = await this.app.mysql.get('t_user', { mobile: mobile });
    // if (dbUser.password === password) {
    //   const result = await this.app.mysql.update('t_user', {
    //     password: newpassword
    //   }, {
    //     where: {
    //       mobile: mobile
    //     }
    //   });
    //   const insertSuccess = result.affectedRows === 1;
    //   if (insertSuccess) return {
    //     result: 1,
    //     message: 'ok',
    //     data: ''
    //   }

    //   return {
    //     result: 0,
    //     message: 'error',
    //     data: ''
    //   }
    // } else {
    //   return {
    //     result: 0,
    //     message: 'password incorrect',
    //     data: ''
    //   }
    // }
  }
}
