import { RouteConfig } from 'vue-router'

import RouteLayout from '@/components/RouteLayout.vue'

export const formDesignRouteConfig: RouteConfig = {
  path: 'form-design',
  component: RouteLayout,
  children: [
    // {
    //   path: 'base',
    //   name: 'ComponentFormDesignBase',
    //   component: () => import('@/views/form-design/base/CodeExample.vue')
    // },
    // {
    //   path: 'customGroup',
    //   name: 'ComponentFormDesignCustomGroup',
    //   component: () => import('@/views/form-design/customGroup/CodeExample.vue')
    // },
    // {
    //   path: 'mobile',
    //   name: 'ComponentFormDesignMobile',
    //   component: () => import('@/views/form-design/mobile/CodeExample.vue')
    // },
    // {
    //   path: 'pcAndMobile',
    //   name: 'ComponentFormDesignPcAndMobile',
    //   component: () => import('@/views/form-design/pcAndMobile/CodeExample.vue')
    // },
    // {
    //   path: 'renderView',
    //   name: 'ComponentFormDesignRenderView',
    //   component: () => import('@/views/form-design/renderView/CodeExample.vue')
    // }
  ]
}
