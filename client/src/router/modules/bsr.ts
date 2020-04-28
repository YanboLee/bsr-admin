import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

const bsrRouter: RouteConfig = {
  path: '/bsr',
  component: Layout,
  redirect: 'noredirect',
  name: 'bsr',
  meta: {
    title: 'bsr',
    icon: 'fill'
  },
  children: [
    {
      path: 'user',
      component: () => import(/* webpackChunkName: "user" */ '@/views/bsr/user/index.vue'),
      name: 'bsrUser',
      meta: {
        title: 'user',
        noCache: true
      }
    },
    {
      path: 'member',
      component: () => import(/* webpackChunkName: "member" */ '@/views/bsr/member/index.vue'),
      name: 'bsrMember',
      meta: {
        title: 'member',
        noCache: true
      }
    },
    {
      path: 'equip',
      component: () => import(/* webpackChunkName: "equip" */ '@/views/bsr/equip/index.vue'),
      name: 'bsrEquip',
      meta: {
        title: 'equip',
        noCache: true
      }
    }
  ]
}

export default bsrRouter
