import { RouteRecordConfig } from './conf'

import RouteLayout from '@/components/RouteLayout.vue'

export const treeSelectRouteConfig: RouteRecordConfig = {
  path: 'tree-select',
  component: RouteLayout,
  children: [
    {
      path: 'basics',
      component: RouteLayout,
      children: [
        {
          path: 'size',
          name: 'ComponentTreeSelectBaseSize',
          component: () => import('@/views/tree-select/base/size/CodeExample.vue')
        },
        {
          path: 'hierarchy',
          name: 'ComponentTreeSelectBaseHierarchy',
          component: () => import('@/views/tree-select/base/hierarchy/CodeExample.vue')
        },
        {
          path: 'leveling',
          name: 'ComponentTreeSelectBaseLeveling',
          component: () => import('@/views/tree-select/base/leveling/CodeExample.vue')
        },
        {
          path: 'multiple',
          name: 'ComponentTreeSelectBaseMultiple',
          component: () => import('@/views/tree-select/base/multiple/CodeExample.vue')
        },
        {
          path: 'icon',
          name: 'ComponentTreeSelectBaseIcon',
          component: () => import('@/views/tree-select/base/icon/CodeExample.vue')
        },
        {
          path: 'optionProps',
          name: 'ComponentTreeSelectBaseOptionProps',
          component: () => import('@/views/tree-select/base/optionProps/CodeExample.vue')
        },
        { path: 'fullLabel', name: 'ComponentTreeSelectBaseFullLabel', component: () => import('@/views/tree-select/base/fullLabel/CodeExample.vue') },
        {
          path: 'popupWH',
          name: 'ComponentTreeSelectBasePopupWH',
          component: () => import('@/views/tree-select/base/popupWH/CodeExample.vue')
        },
        {
          path: 'expandAll',
          name: 'ComponentTreeSelectBaseExpandAll',
          component: () => import('@/views/tree-select/base/expandAll/CodeExample.vue')
        },
        {
          path: 'trigger',
          name: 'ComponentTreeSelectBaseTrigger',
          component: () => import('@/views/tree-select/base/trigger/CodeExample.vue')
        }
      ]
    },
    {
      path: 'radio',
      component: RouteLayout,
      children: [
        {
          path: 'base',
          name: 'ComponentTreeSelectRadioBase',
          component: () => import('@/views/tree-select/radio/base/CodeExample.vue')
        },
        { path: 'checkMethod', name: 'ComponentTreeSelectRadioCheckMethod', component: () => import('@/views/tree-select/radio/checkMethod/CodeExample.vue') },
        { path: 'visibleMethod', name: 'ComponentTreeSelectRadioVisibleMethod', component: () => import('@/views/tree-select/radio/visibleMethod/CodeExample.vue') },
        {
          path: 'trigger',
          name: 'ComponentTreeSelectRadioTrigger',
          component: () => import('@/views/tree-select/radio/trigger/CodeExample.vue')
        }
      ]
    },
    {
      path: 'checkbox',
      component: RouteLayout,
      children: [
        {
          path: 'base',
          name: 'ComponentTreeSelectCheckboxBase',
          component: () => import('@/views/tree-select/checkbox/base/CodeExample.vue')
        },
        {
          path: 'checkStrictly',
          name: 'ComponentTreeSelectCheckboxCheckStrictly',
          component: () => import('@/views/tree-select/checkbox/checkStrictly/CodeExample.vue')
        },
        { path: 'checkMethod', name: 'ComponentTreeSelectCheckboxCheckMethod', component: () => import('@/views/tree-select/checkbox/checkMethod/CodeExample.vue') },
        { path: 'visibleMethod', name: 'ComponentTreeSelectCheckboxVisibleMethod', component: () => import('@/views/tree-select/checkbox/visibleMethod/CodeExample.vue') },
        {
          path: 'trigger',
          name: 'ComponentTreeSelectCheckboxTrigger',
          component: () => import('@/views/tree-select/checkbox/trigger/CodeExample.vue')
        },
        { path: 'color', name: 'ComponentTreeSelectCheckboxColor', component: () => import('@/views/tree-select/checkbox/color/CodeExample.vue') }
      ]
    },
    {
      path: 'line',
      component: RouteLayout,
      children: [
        { path: 'showLine', name: 'ComponentTreeSelectLineShowLine', component: () => import('@/views/tree-select/line/showLine/CodeExample.vue') },
        { path: 'type', name: 'ComponentTreeSelectLineType', component: () => import('@/views/tree-select/line/type/CodeExample.vue') }
      ]
    },
    {
      path: 'search',
      component: RouteLayout,
      children: [
        {
          path: 'filterValue',
          name: 'ComponentTreeSelectSearchFilterValue',
          component: () => import('@/views/tree-select/search/filterValue/CodeExample.vue')
        },
        {
          path: 'filterMethod',
          name: 'ComponentTreeSelectSearchFilterMethod',
          component: () => import('@/views/tree-select/search/filterMethod/CodeExample.vue')
        }
      ]
    },
    {
      path: 'remote',
      component: RouteLayout,
      children: [
        { path: 'autoLoad', name: 'ComponentTreeSelectRemoteAutoLoad', component: () => import('@/views/tree-select/remote/autoLoad/CodeExample.vue') }
      ]
    },
    {
      path: 'operBtn',
      component: RouteLayout,
      children: [
        {
          path: 'checked',
          name: 'ComponentTreeSelectOperBtnChecked',
          component: () => import('@/views/tree-select/operBtn/checked/CodeExample.vue')
        },
        {
          path: 'all',
          name: 'ComponentTreeSelectOperBtnAll',
          component: () => import('@/views/tree-select/operBtn/all/CodeExample.vue')
        }
      ]
    },
    {
      path: 'lazy',
      component: RouteLayout,
      children: [
        {
          path: 'base',
          name: 'ComponentTreeSelectLazyBase',
          component: () => import('@/views/tree-select/lazy/base/CodeExample.vue')
        },
        {
          path: 'multiple',
          name: 'ComponentTreeSelectLazyMultiple',
          component: () => import('@/views/tree-select/lazy/multiple/CodeExample.vue')
        },
        { path: 'lazyOptions', name: 'ComponentTreeSelectLazyLazyOptions', component: () => import('@/views/tree-select/lazy/lazyOptions/CodeExample.vue') }
      ]
    },
    {
      path: 'menu',
      component: RouteLayout,
      children: [
        { path: 'basics', name: 'ComponentTreeSelectMenuBasics', component: () => import('@/views/tree-select/menu/basics/CodeExample.vue') },
        { path: 'visibleMethod', name: 'ComponentTreeSelectMenuVisibleMethod', component: () => import('@/views/tree-select/menu/visibleMethod/CodeExample.vue') }
      ]
    },
    {
      path: 'scroll',
      component: RouteLayout,
      children: [
        {
          path: 'basics',
          name: 'ComponentTreeSelectScrollBasics',
          component: () => import('@/views/tree-select/scroll/basics/CodeExample.vue')
        },
        {
          path: 'filter',
          name: 'ComponentTreeSelectScrollFilter',
          component: () => import('@/views/tree-select/scroll/filter/CodeExample.vue')
        }
      ]
    },
    {
      path: 'template',
      component: RouteLayout,
      children: [
        { path: 'header', name: 'ComponentTreeSelectTemplateHeader', component: () => import('@/views/tree-select/template/header/CodeExample.vue') },
        { path: 'footer', name: 'ComponentTreeSelectTemplateFooter', component: () => import('@/views/tree-select/template/footer/CodeExample.vue') },
        { path: 'treeTitle', name: 'ComponentTreeSelectTemplateTreeTitle', component: () => import('@/views/tree-select/template/title/CodeExample.vue') },
        { path: 'treeIcon', name: 'ComponentTreeSelectTemplateTreeIcon', component: () => import('@/views/tree-select/template/icon/CodeExample.vue') },
        { path: 'treeExtra', name: 'ComponentTreeSelectTemplateTreeExtra', component: () => import('@/views/tree-select/template/extra/CodeExample.vue') }
      ]
    },
    {
      path: 'other',
      component: RouteLayout,
      children: [
        { path: 'region', name: 'ComponentTreeSelectOtherRegion', component: () => import('@/views/tree-select/other/region/CodeExample.vue') }
      ]
    }
  ]
}
