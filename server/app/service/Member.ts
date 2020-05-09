import * as app from 'egg';


/**
 * Member Service
 */
export default class Member extends app.Service {

  /**
   * 获取队员信息
   */
  public async getMemberInfo(data) {
    const { mobile } = data;
    const dbMember = await this.app.mysql.select('t_member', {
      mobile: mobile
    });

    if (dbMember.length > 0) {
      return {
        result: 1,
        message: 'ok',
        data: dbMember
      }
    }
  }

  /**
   * 获取队员信息
   */
  public async insertMemberInfo(data) {
    const result = await this.app.mysql.insert('t_member', data);

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
}
