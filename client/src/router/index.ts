import List from '@/page/list';
import Chart from '@/page/chart';

const routes = [
  {
    path: '/list',
    component: List
  },
  {
    path: '/chart',
    component: Chart
  }
];

export default routes;

export interface RouteInterface {
  path: string,
  component: any,
  routes?: Array<any>
}
