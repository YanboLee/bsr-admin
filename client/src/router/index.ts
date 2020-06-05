import Member from '@/page/member';
import Chart from '@/page/chart';
import Login from '@/page/login';
import Home from '@/page/home';

const routes = [
  {
    path: '/member',
    component: Member
  },
  {
    path: '/chart',
    component: Chart
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
