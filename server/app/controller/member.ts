import { Controller } from 'egg';

export default class MemberController extends Controller {
  public async list() {
    const { ctx } = this;
    const req = ctx.request.query;
    ctx.body = await ctx.service.member.getMemberInfo(req);
  }

  public async insert() {
    const { ctx } = this;
    const req = ctx.request.body;
    ctx.body = await ctx.service.member.insertMemberInfo(req);
  }

  public async updateMember() {
    const { ctx } = this;
    const req = ctx.request.query;
    ctx.body = await ctx.service.member.updateMemberInfo(req);
  }
}
