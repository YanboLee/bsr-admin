import { Controller } from 'egg';

export default class MemberController extends Controller {
  public async getMember() {
    const { ctx } = this;
    const req = ctx.request.query;
    ctx.body = await ctx.service.member.getMemberInfo(req);
  }

  public async insertMember() {
    const { ctx } = this;
    const req = ctx.request.query;
    ctx.body = await ctx.service.member.insertMemberInfo(req);
  }
}
