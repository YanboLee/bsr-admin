import * as app from 'egg';


/**
 * Users Service
 */
export default class Users extends app.Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async info() {
    return {
      code: 20000,
      data: {
        user: {
          roles: '[admin]',
          name: 'leeeee_text',
          avatar: 'wwwww',
          introduction: 'data for text',
          email: 'aaaaa'
        }
      }
    };
  }
}
