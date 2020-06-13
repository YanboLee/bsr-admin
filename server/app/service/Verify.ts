import * as app from 'egg';


/**
 * Verify Service  审核
 */
export default class Verify extends app.Service {

  /**
   * list 审核列表
   * @param name - your name
   */
  public async list(data) {
    const result = await this.app.mysql.select('t_verify', {where: {
      recieveId: data.userId
    }});

    if (result.length > 0) {
      return {
        result: 1,
        message: 'ok',
        data: result
      }
    }
  }

  /**
   * 审核（通过、拒绝） 审核
   */
  public async verify(data) {
    if (+data.state === 1) {
      // pass
      let result;
      switch (+data.type) {
        case 1:
          // 注册审核
          result = await this.app.mysql.update('t_user', {
            status: 1,
            update_time: new Date()
          }, {
            where: {
              key_id: data.postId
            }
          });
          break;
      }

      // 将该条信息在审核表置为无效
      await this.app.mysql.update('t_verify', {
        state: 0,
        update_time: new Date()
      }, {
        where: {
          id: data.id
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
      // reject

    }

    return {
      result: 0,
      message: 'error in code',
      data: {}
    }
  }
}
