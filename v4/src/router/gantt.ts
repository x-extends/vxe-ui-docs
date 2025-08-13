import { RouteRecordRaw } from 'vue-router'

import RouteLayout from '@/components/RouteLayout.vue'

export const ganttRouteConfig: RouteRecordRaw = {
  path: 'gantt',
  component: RouteLayout,
  children: [
    {
      path: 'base',
      component: RouteLayout,
      children: [
        { path: 'size', name: 'ComponentGanttBaseSize', component: () => import('@/views/gantt/base/size/CodeExample.vue') },
        { path: 'field', name: 'ComponentGanttBaseField', component: () => import('@/views/gantt/base/field/CodeExample.vue') },
        { path: 'showProgress', name: 'ComponentGanttBaseShowProgress', component: () => import('@/views/gantt/base/showProgress/CodeExample.vue') },
        { path: 'showContent', name: 'ComponentGanttBaseShowContent', component: () => import('@/views/gantt/base/showContent/CodeExample.vue') },
        { path: 'resize', name: 'ComponentGanttBaseResize', component: () => import('@/views/gantt/base/resize/CodeExample.vue') }
      ]
    },
    {
      path: 'style',
      component: RouteLayout,
      children: [
        { path: 'tableWidth', name: 'ComponentGanttstyleTableWidth', component: () => import('@/views/gantt/style/tableWidth/CodeExample.vue') },
        { path: 'barColor', name: 'ComponentGanttstyleBarColor', component: () => import('@/views/gantt/style/barColor/CodeExample.vue') },
        { path: 'round', name: 'ComponentGanttstyleRound', component: () => import('@/views/gantt/style/round/CodeExample.vue') }
      ]
    },
    {
      path: 'edit',
      component: RouteLayout,
      children: [
        { path: 'tableCell', name: 'ComponentGanttEditTableCell', component: () => import('@/views/gantt/edit/tableCell/CodeExample.vue') },
        { path: 'taskBar', name: 'ComponentGanttEditTaskBar', component: () => import('@/views/gantt/edit/taskBar/CodeExample.vue') }
      ]
    }
  ]
}
