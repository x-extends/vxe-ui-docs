import { RouteRecordConfig } from './conf'

import RouteLayout from '@/components/RouteLayout.vue'

export const stepsRouteConfig: RouteRecordConfig = {
  path: 'steps',
  component: RouteLayout,
  children: [
    { path: 'size', name: 'ComponentStepsSize', component: () => import('@/views/steps/size/CodeExample.vue') },
    { path: 'value', name: 'ComponentStepsValue', component: () => import('@/views/steps/value/CodeExample.vue') },
    { path: 'showNum', name: 'ComponentStepsShowNum', component: () => import('@/views/steps/showNum/CodeExample.vue') },
    { path: 'showIcon', name: 'ComponentStepsShowIcon', component: () => import('@/views/steps/showIcon/CodeExample.vue') },
    { path: 'vertical', name: 'ComponentStepsVertical', component: () => import('@/views/steps/vertical/CodeExample.vue') },
    { path: 'options', name: 'ComponentStepsOptions', component: () => import('@/views/steps/options/CodeExample.vue') },
    { path: 'status', name: 'ComponentStepsStatus', component: () => import('@/views/steps/status/CodeExample.vue') },
    { path: 'type', name: 'ComponentStepsType', component: () => import('@/views/steps/type/CodeExample.vue') }
  ]
}
