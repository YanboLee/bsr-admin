import * as app from 'egg'
import { v4 as uuidv4 } from 'uuid'

/**
 * Member Service
 */
export default class Member extends app.Service {
  /**
   * 获取活动信息
   */
  public async getList(data) {
    let param = data
    Object.keys(param).forEach((key) => {
      if (!param[key]) {
        delete param[key]
      }
    })
    const dbActivity = await this.app.mysql.select('t_activity', {
      where: param,
    })

    return {
      result: 1,
      message: 'ok',
      data: dbActivity,
    }
  }

  /**
   * 新增活動信息
   */
  public async insert(data) {
    data.status = 1
    data.key_id = uuidv4()
    const result = await this.app.mysql.insert('t_activity', data)
    const insertSuccess = result.affectedRows === 1

    if (insertSuccess)
      return {
        result: 1,
        message: 'ok',
        data: '',
      }

    return {
      result: 0,
      message: 'error',
      data: '',
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
      data: '',
    }
  }
}
