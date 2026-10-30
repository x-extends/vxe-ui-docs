import { RouteRecordConfig } from './conf'

import RouteLayout from '@/components/RouteLayout.vue'

export const timelineRouteConfig: RouteRecordConfig = {
  path: 'timeline',
  component: RouteLayout,
  children: [
    { path: 'size', name: 'ComponentTimelineSize', component: () => import('@/views/timeline/size/CodeExample.vue') },
    { path: 'vertical', name: 'ComponentTimelineVertical', component: () => import('@/views/timeline/vertical/CodeExample.vue') },
    { path: 'reverse', name: 'ComponentTimelineReverse', component: () => import('@/views/timeline/reverse/CodeExample.vue') },
    { path: 'options', name: 'ComponentTimelineOptions', component: () => import('@/views/timeline/options/CodeExample.vue') }
  ]
}
