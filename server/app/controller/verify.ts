import { Controller } from 'egg';

export default class VerifyController extends Controller {
  public async list() {
    const { ctx } = this;
    const req = ctx.request.query;
    ctx.body = await ctx.service.verify.list(req);
  }

  public async verify() {
    const { ctx } = this;
    const req = ctx.request.query;
    ctx.body = await ctx.service.verify.verify(req);
  }
}
