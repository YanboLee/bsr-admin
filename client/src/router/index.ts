import Member from '@/page/member';
import Audit from '@/page/audit';
import Login from '@/page/login';
import Home from '@/page/home';

const routes = [
  {
    path: '/member',
    component: Member
  },
  {
    path: '/audit',
    component: Audit
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }
];

export default routes;

export interface RouteInterface {
  path: string,
  component: any,
  routes?: Array<any>
}
