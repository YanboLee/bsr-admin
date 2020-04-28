import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

const userRouter: RouteConfig = {
  path: '/user',
  component: Layout,
  redirect: '/user/list',
  children: [
    {
      path: 'list',
      component: () => import(/* webpackChunkName: "user" */ '@/views/bsr/user/index.vue'),
      name: 'userList',
      meta: {
        title: 'userList',
        icon: 'dashboard',
        affix: true
      }
    }
  ]
}

export default userRouter
