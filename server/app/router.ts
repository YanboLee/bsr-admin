import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  router.get('/', controller.home.index)
    .get('/regist', controller.login.regist)
    .get('/login', controller.login.login);
};
