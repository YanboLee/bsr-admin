import { Controller } from 'egg';

export default class LoginController extends Controller {

  // 注册
  public async regist() {
    const { ctx } = this;
    const req = ctx.request.query;
    ctx.body = await ctx.service.login.regist(req);
  }

  // 登录
  public async login() {
    const { ctx } = this;
    const req = ctx.request.query
    ctx.body = await ctx.service.login.login(req);
  }

  // 登出
  // public async logout() {}

  // 忘记密码
  public async reset() {
    const { ctx } = this;
    const req = ctx.request.query
    ctx.body = await ctx.service.login.reset(req);
  }
}
