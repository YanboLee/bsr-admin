import { Controller } from 'egg';

export default class UsersController extends Controller {
  public async info() {
    const { ctx } = this;
    const req = ctx.request.body;
    ctx.body = await ctx.service.users.info(req);
  }
}
