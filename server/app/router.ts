import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.get('/', controller.home.index)
    // 登录
    .get('/regist', controller.login.regist)
    .post('/login', controller.login.login)
    .get('/reset', controller.login.reset)
    // 审核
    .get('/verify/list', controller.verify.list)
    .get('/verify/verify', controller.verify.verify)
    // 队员信息
    .get('/member/getMember', controller.member.getMember)
};
