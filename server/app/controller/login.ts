import { Controller } from 'egg';

export default class LoginController extends Controller {

  public async regist() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.upload(ctx.request.body.file);
  }
}
