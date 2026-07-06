import { RouteRecordRaw } from 'vue-router'

import RouteLayout from '@/components/RouteLayout.vue'

export const listRouteConfig: RouteRecordRaw = {
  path: 'list',
  component: RouteLayout,
  children: [
    {
      path: 'base',
      component: RouteLayout,
      children: [
        { path: 'basics', name: 'ComponentListBaseBasics', component: () => import('@/views/list/base/basics/CodeExample.vue') },
        { path: 'autoResize', name: 'ComponentListBaseAutoResize', component: () => import('@/views/list/base/autoResize/CodeExample.vue') },
        { path: 'itemHeight', name: 'ComponentListBaseItemHeight', component: () => import('@/views/list/base/itemHeight/CodeExample.vue') },
        { path: 'padding', name: 'ComponentListBasePadding', component: () => import('@/views/list/base/padding/CodeExample.vue') },
        { path: 'hover', name: 'ComponentListBaseHover', component: () => import('@/views/list/base/hover/CodeExample.vue') }
      ]
    },
    {
      path: 'current',
      component: RouteLayout,
      children: [
        { path: 'base', name: 'ComponentListCurrentBase', component: () => import('@/views/list/current/base/CodeExample.vue') },
        { path: 'currentMethod', name: 'ComponentListCurrentCurrentMethod', component: () => import('@/views/list/current/currentMethod/CodeExample.vue') }
      ]
    },
    {
      path: 'radio',
      component: RouteLayout,
      children: [
        { path: 'base', name: 'ComponentListRadioBase', component: () => import('@/views/list/radio/base/CodeExample.vue') },
        { path: 'handleManual', name: 'ComponentListRadioHandleManual', component: () => import('@/views/list/radio/handleManual/CodeExample.vue') },
        { path: 'highlight', name: 'ComponentListRadioHighlight', component: () => import('@/views/list/radio/highlight/CodeExample.vue') },
        { path: 'trigger', name: 'ComponentListRadioTrigger', component: () => import('@/views/list/radio/trigger/CodeExample.vue') },
        { path: 'checkMethod', name: 'ComponentListRadioCheckMethod', component: () => import('@/views/list/radio/checkMethod/CodeExample.vue') },
        { path: 'visibleMethod', name: 'ComponentListRadioVisibleMethod', component: () => import('@/views/list/radio/visibleMethod/CodeExample.vue') }
      ]
    },
    {
      path: 'checkbox',
      component: RouteLayout,
      children: [
        { path: 'base', name: 'ComponentListCheckboxBase', component: () => import('@/views/list/checkbox/base/CodeExample.vue') },
        { path: 'handleManual', name: 'ComponentListCheckboxHandleManual', component: () => import('@/views/list/checkbox/handleManual/CodeExample.vue') },
        { path: 'highlight', name: 'ComponentListCheckboxHighlight', component: () => import('@/views/list/checkbox/highlight/CodeExample.vue') },
        { path: 'trigger', name: 'ComponentListCheckboxTrigger', component: () => import('@/views/list/checkbox/trigger/CodeExample.vue') },
        { path: 'checkMethod', name: 'ComponentListCheckboxCheckMethod', component: () => import('@/views/list/checkbox/checkMethod/CodeExample.vue') },
        { path: 'visibleMethod', name: 'ComponentListCheckboxVisibleMethod', component: () => import('@/views/list/checkbox/visibleMethod/CodeExample.vue') }
      ]
    },
    {
      path: 'menu',
      component: RouteLayout,
      children: [
        { path: 'basics', name: 'ComponentListMenuBasics', component: () => import('@/views/list/menu/basics/CodeExample.vue') },
        { path: 'icon', name: 'ComponentListMenuIcon', component: () => import('@/views/list/menu/icon/CodeExample.vue') },
        { path: 'disabled', name: 'ComponentListMenuDisabled', component: () => import('@/views/list/menu/disabled/CodeExample.vue') },
        { path: 'visible', name: 'ComponentListMenuVisible', component: () => import('@/views/list/menu/visible/CodeExample.vue') },
        { path: 'loading', name: 'ComponentListMenuLoading', component: () => import('@/views/list/menu/loading/CodeExample.vue') },
        { path: 'visibleMethod', name: 'ComponentListMenuVisibleMethod', component: () => import('@/views/list/menu/visibleMethod/CodeExample.vue') }
      ]
    },
    {
      path: 'drag',
      component: RouteLayout,
      children: [
        { path: 'sort', name: 'ComponentListDragSort', component: () => import('@/views/list/drag/sort/CodeExample.vue') },
        { path: 'icon', name: 'ComponentListDragIcon', component: () => import('@/views/list/drag/icon/CodeExample.vue') },
        { path: 'showGuidesStatus', name: 'ComponentListDragShowGuidesStatus', component: () => import('@/views/list/drag/showGuidesStatus/CodeExample.vue') },
        { path: 'trigger', name: 'ComponentListDragTrigger', component: () => import('@/views/list/drag/trigger/CodeExample.vue') },
        { path: 'events', name: 'ComponentListDragEvents', component: () => import('@/views/list/drag/events/CodeExample.vue') },
        { path: 'tooltipMethod', name: 'ComponentListDragTooltipMethod', component: () => import('@/views/list/drag/tooltipMethod/CodeExample.vue') },
        { path: 'disabledMethod', name: 'ComponentListDragDisabledMethod', component: () => import('@/views/list/drag/disabledMethod/CodeExample.vue') },
        { path: 'visibleMethod', name: 'ComponentListDragVisibleMethod', component: () => import('@/views/list/drag/visibleMethod/CodeExample.vue') },
        { path: 'dragMethod', name: 'ComponentListDragDragMethod', component: () => import('@/views/list/drag/dragMethod/CodeExample.vue') },
        { path: 'cossList', name: 'ComponentListDragDragCossList', component: () => import('@/views/list/drag/cossList/CodeExample.vue') }
      ]
    },
    {
      path: 'edit',
      component: RouteLayout,
      children: [
        { path: 'insert', name: 'ComponentListEditInsert', component: () => import('@/views/list/edit/insert/CodeExample.vue') },
        { path: 'remove', name: 'ComponentListEditRemove', component: () => import('@/views/list/edit/remove/CodeExample.vue') },
        { path: 'full', name: 'ComponentListEditFull', component: () => import('@/views/list/edit/full/CodeExample.vue') }
      ]
    },
    {
      path: 'scroll',
      component: RouteLayout,
      children: [
        { path: 'basics', name: 'ComponentListScrollBasics', component: () => import('@/views/list/scroll/basics/CodeExample.vue') }
      ]
    },
    {
      path: 'template',
      component: RouteLayout,
      children: [
        { path: 'header', name: 'ComponentListTemplateHeader', component: () => import('@/views/list/template/header/CodeExample.vue') },
        { path: 'footer', name: 'ComponentListTemplateFooter', component: () => import('@/views/list/template/footer/CodeExample.vue') },
        { path: 'content', name: 'ComponentListTemplateContent', component: () => import('@/views/list/template/content/CodeExample.vue') },
        { path: 'default', name: 'ComponentListTemplateDefault', component: () => import('@/views/list/template/default/CodeExample.vue') }
      ]
    },
    {
      path: 'other',
      component: RouteLayout,
      children: [
        { path: 'vn', name: 'ComponentListOtherVn', component: () => import('@/views/list/other/vn/CodeExample.vue') },
        { path: 'table', name: 'ComponentListOtherTable', component: () => import('@/views/list/other/table/CodeExample.vue') }
      ]
    }
  ]
}
