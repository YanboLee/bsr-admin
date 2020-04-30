import * as app from 'egg';


/**
 * Test Service
 */
export default class Test extends app.Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    return `hi, ${name}`;
  }
}
