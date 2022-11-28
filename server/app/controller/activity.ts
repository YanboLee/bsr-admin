import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async create() {
    const { ctx } = this;
    ctx.body = await ctx.service.activity.insert(ctx.request.body);
  }
}
