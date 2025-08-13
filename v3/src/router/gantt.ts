import { RouteConfig } from 'vue-router'

import RouteLayout from '@/components/RouteLayout.vue'

export const ganttRouteConfig: RouteConfig = {
  path: 'gantt',
  component: RouteLayout,
  children: [
    // {
    //   path: 'base',
    //   component: RouteLayout,
    //   children: [
    //     {
    //       path: 'field',
    //       name: 'ComponentFormDesignBase',
    //       component: () => import('@/views/form-design/base/CodeExample.vue')
    //     }
    //   ]
    // }
  ]
}
