import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.get('/', controller.home.index)
    // 登录
    .post('/regist', controller.login.regist)
    .post('/login', controller.login.login)
    .get('/reset', controller.login.reset)
    .post('/users/info', controller.users.info)
    // 审核
    .get('/verify/list', controller.verify.list)
    .get('/verify/verify', controller.verify.verify)
    // 队员信息
    .get('/member/list', controller.member.list)
    .post('/member/create', controller.member.insert)
    //活动
    .post('/common/uploadPic', controller.common.uploadPic)
    .post('/activity/create', controller.activity.create)
};
