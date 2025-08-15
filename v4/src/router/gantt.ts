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
        { path: 'border', name: 'ComponentGanttBaseBorder', component: () => import('@/views/gantt/base/border/CodeExample.vue') },
        { path: 'stripe', name: 'ComponentGanttBaseStripe', component: () => import('@/views/gantt/base/stripe/CodeExample.vue') },
        { path: 'showProgress', name: 'ComponentGanttBaseShowProgress', component: () => import('@/views/gantt/base/showProgress/CodeExample.vue') },
        { path: 'showContent', name: 'ComponentGanttBaseShowContent', component: () => import('@/views/gantt/base/showContent/CodeExample.vue') },
        { path: 'loading', name: 'ComponentGanttBaseLoading', component: () => import('@/views/gantt/base/loading/CodeExample.vue') },
        { path: 'resize', name: 'ComponentGanttBaseResize', component: () => import('@/views/gantt/base/resize/CodeExample.vue') }
      ]
    },
    {
      path: 'style',
      component: RouteLayout,
      children: [
        { path: 'tableWidth', name: 'ComponentGanttStyleTableWidth', component: () => import('@/views/gantt/style/tableWidth/CodeExample.vue') },
        { path: 'barColor', name: 'ComponentGanttStyleBarColor', component: () => import('@/views/gantt/style/barColor/CodeExample.vue') },
        { path: 'round', name: 'ComponentGanttStyleRound', component: () => import('@/views/gantt/style/round/CodeExample.vue') }
      ]
    },
    {
      path: 'currentRow',
      component: RouteLayout,
      children: [
        { path: 'base', name: 'ComponentGanttCurrentRowBase', component: () => import('@/views/gantt/currentRow/base/CodeExample.vue') },
        { path: 'trigger', name: 'ComponentGanttCurrentTrigger', component: () => import('@/views/gantt/currentRow/trigger/CodeExample.vue') }
      ]
    },
    {
      path: 'tree',
      component: RouteLayout,
      children: [
        { path: 'leveling', name: 'ComponentGanttTreeLeveling', component: () => import('@/views/gantt/tree/leveling/CodeExample.vue') },
        { path: 'hierarchy', name: 'ComponentGanttTreeHierarchy', component: () => import('@/views/gantt/tree/hierarchy/CodeExample.vue') },
        { path: 'stripe', name: 'ComponentGanttTreeStripe', component: () => import('@/views/gantt/tree/stripe/CodeExample.vue') },
        { path: 'seqMode', name: 'ComponentGanttTreeSeqMode', component: () => import('@/views/gantt/tree/seqMode/CodeExample.vue') },
        { path: 'line', name: 'ComponentGanttTreeLine', component: () => import('@/views/gantt/tree/line/CodeExample.vue') }
      ]
    },
    {
      path: 'edit',
      component: RouteLayout,
      children: [
        { path: 'tableCell', name: 'ComponentGanttEditTableCell', component: () => import('@/views/gantt/edit/tableCell/CodeExample.vue') },
        { path: 'taskBar', name: 'ComponentGanttEditTaskBar', component: () => import('@/views/gantt/edit/taskBar/CodeExample.vue') }
      ]
    },
    {
      path: 'rowDrag',
      component: RouteLayout,
      children: [
        {
          path: 'sort',
          name: 'ComponentGanttRowDragSort',
          component: () => import('@/views/gantt/rowDrag/sort/CodeExample.vue')
        },
        {
          path: 'tree',
          component: RouteLayout,
          children: [
            {
              path: 'base',
              name: 'ComponentGanttRowDragTreeBase',
              component: () => import('@/views/gantt/rowDrag/tree/base/CodeExample.vue')
            },
            {
              path: 'peerDrag',
              name: 'ComponentGanttRowDragTreePeerDrag',
              component: () => import('@/views/gantt/rowDrag/tree/peerDrag/CodeExample.vue')
            },
            {
              path: 'cossDrag',
              name: 'ComponentGanttRowDragTreeCossDrag',
              component: () => import('@/views/gantt/rowDrag/tree/cossDrag/CodeExample.vue')
            },
            {
              path: 'selfToChildDrag',
              name: 'ComponentGanttRowDragTreeSelfToChildDrag',
              component: () => import('@/views/gantt/rowDrag/tree/selfToChildDrag/CodeExample.vue')
            },
            {
              path: 'toChildDrag',
              name: 'ComponentGanttRowDragTreeToChildDrag',
              component: () => import('@/views/gantt/rowDrag/tree/toChildDrag/CodeExample.vue')
            }
          ]
        }
      ]
    },
    {
      path: 'proxy',
      component: RouteLayout,
      children: [
        { path: 'query', name: 'ComponentGanttProxyQuery', component: () => import('@/views/gantt/proxy/query/CodeExample.vue') },
        { path: 'pager', name: 'ComponentGanttProxyPager', component: () => import('@/views/gantt/proxy/pager/CodeExample.vue') }
      ]
    }
  ]
}
