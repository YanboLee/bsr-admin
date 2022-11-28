import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  let baseUri = '/api-gateway'
  router.get(baseUri, controller.home.index)
    // 登录
    .post(baseUri + '/regist', controller.login.regist)
    .post(baseUri + '/login', controller.login.login)
    .get(baseUri + '/reset', controller.login.reset)
    .post(baseUri + '/users/info', controller.users.info)
    // 审核
    .get(baseUri + '/verify/list', controller.verify.list)
    .get(baseUri + '/verify/verify', controller.verify.verify)
    // 队员信息
    .get(baseUri + '/member/list', controller.member.list)
    .post(baseUri + '/member/create', controller.member.insert)
    //活动
    .post(baseUri + '/common/uploadPic', controller.common.uploadPic)
    .post(baseUri + '/activity/create', controller.activity.create)
};
