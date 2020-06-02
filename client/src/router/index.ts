import List from '@/page/list';
import Chart from '@/page/chart';
import Login from '@/page/login';

const routes = [
  {
    path: '/list',
    component: List
  },
  {
    path: '/chart',
    component: Chart
  },
  {
    path: '/login',
    component: Login
  }
];

export default routes;

export interface RouteInterface {
  path: string,
  component: any,
  routes?: Array<any>
}
