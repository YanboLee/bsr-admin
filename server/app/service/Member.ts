import * as app from 'egg';


/**
 * Member Service
 */
export default class Member extends app.Service {

  /**
   * 获取队员信息
   */
  public async getMemberInfo() {
    // const { mobile } = data;
    // const dbMember = await this.app.mysql.select('t_member', {where: {
    //   mobile: mobile
    // }});

    // if (dbMember.length > 0) {
      return {
        result: 1,
        message: 'ok',
        // data: dbMember
      }
    // }
  }

  /**
   * 获取队员信息
   */
  public async insertMemberInfo() {
    // data.status = 1;
    // data.team_duty = 1;
    // const result = await this.app.mysql.insert('t_member', data);
    // const insertSuccess = result.affectedRows === 1;
    
    // if (insertSuccess) return {
    //   result: 1,
    //   message: 'ok',
    //   data: ''
    // }

    return {
      result: 0,
      message: 'error',
      data: ''
    }
  }
  // 更新队员信息
  public async updateMemberInfo() {
    // const result = await this.app.mysql.update('t_member', data, {});

    // const insertSuccess = result.affectedRows === 1;
    
    // if (insertSuccess) return {
    //   result: 1,
    //   message: 'ok',
    //   data: ''
    // }

    return {
      result: 0,
      message: 'error',
      data: ''
    }
  }
}
