import { RouteConfig } from 'vue-router'

import RouteLayout from '@/components/RouteLayout.vue'

export const listDesignRouteConfig: RouteConfig = {
  path: 'list-design',
  component: RouteLayout,
  children: [
    // {
    //   path: 'base',
    //   name: 'ComponentListDesignBase',
    //   component: () => import('@/views/list-design/base/CodeExample.vue')
    // },
    // {
    //   path: 'mobile',
    //   name: 'ComponentListDesignMobile',
    //   component: () => import('@/views/list-design/mobile/CodeExample.vue')
    // },
    // {
    //   path: 'pcAndMobile',
    //   name: 'ComponentListDesignPcAndMobile',
    //   component: () => import('@/views/list-design/pcAndMobile/CodeExample.vue')
    // },
    // {
    //   path: 'formAndList',
    //   name: 'ComponentListDesignFormAndList',
    //   component: () => import('@/views/list-design/formAndList/CodeExample.vue')
    // }
  ]
}
