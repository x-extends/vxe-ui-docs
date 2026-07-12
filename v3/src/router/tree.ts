import { RouteConfig } from 'vue-router'

import RouteLayout from '@/components/RouteLayout.vue'

export const treeRouteConfig: RouteConfig = {
  path: 'tree',
  component: RouteLayout,
  children: [
    {
      path: 'base',
      component: RouteLayout,
      children: [
        {
          path: 'basics',
          name: 'ComponentTreeBaseBasics',
          component: () => import('@/views/tree/base/basics/CodeExample.vue')
        },
        {
          path: 'size',
          name: 'ComponentTreeBaseSize',
          component: () => import('@/views/tree/base/size/CodeExample.vue')
        },
        {
          path: 'height',
          name: 'ComponentTreeBaseHeight',
          component: () => import('@/views/tree/base/height/CodeExample.vue')
        },
        {
          path: 'loading',
          name: 'ComponentTreeBaseLoading',
          component: () => import('@/views/tree/base/loading/CodeExample.vue')
        },
        {
          path: 'field',
          name: 'ComponentTreeBaseField',
          component: () => import('@/views/tree/base/field/CodeExample.vue')
        },
        {
          path: 'hierarchy',
          name: 'ComponentTreeBaseHierarchy',
          component: () => import('@/views/tree/base/hierarchy/CodeExample.vue')
        },
        {
          path: 'leveling',
          name: 'ComponentTreeBaseLeveling',
          component: () => import('@/views/tree/base/leveling/CodeExample.vue')
        },
        {
          path: 'trigger',
          name: 'ComponentTreeBaseTrigger',
          component: () => import('@/views/tree/base/trigger/CodeExample.vue')
        },
        {
          path: 'showIcon',
          name: 'ComponentTreeBaseShowIcon',
          component: () => import('@/views/tree/base/showIcon/CodeExample.vue')
        },
        {
          path: 'icon',
          name: 'ComponentTreeBaseIcon',
          component: () => import('@/views/tree/base/icon/CodeExample.vue')
        },
        {
          path: 'accordion',
          name: 'ComponentTreeBaseAccordion',
          component: () => import('@/views/tree/base/accordion/CodeExample.vue')
        },
        {
          path: 'showLine',
          name: 'ComponentTreeBaseShowLine',
          component: () => import('@/views/tree/base/showLine/CodeExample.vue')
        },
        {
          path: 'expandAll',
          name: 'ComponentTreeBaseExpandAll',
          component: () => import('@/views/tree/base/expandAll/CodeExample.vue')
        },
        {
          path: 'expandNodeKeys',
          name: 'ComponentTreeBaseExpandNodeKeys',
          component: () => import('@/views/tree/base/expandNodeKeys/CodeExample.vue')
        }
      ]
    },
    {
      path: 'tooltip',
      component: RouteLayout,
      children: [
        { path: 'basics', name: 'ComponentTreeTooltipBasics', component: () => import('@/views/tree/tooltip/basics/CodeExample.vue') },
        { path: 'enterable', name: 'ComponentTreeTooltipEnterable', component: () => import('@/views/tree/tooltip/enterable/CodeExample.vue') },
        { path: 'showAll', name: 'ComponentTreeTooltipShowAll', component: () => import('@/views/tree/tooltip/showAll/CodeExample.vue') },
        { path: 'contentMethod', name: 'ComponentTreeTooltipContentMethod', component: () => import('@/views/tree/tooltip/contentMethod/CodeExample.vue') }
      ]
    },
    {
      path: 'rootNode',
      component: RouteLayout,
      children: [
        { path: 'rootParentValue', name: 'ComponentTreeRootNodeRootParentValue', component: () => import('@/views/tree/rootNode/rootParentValue/CodeExample.vue') },
        { path: 'rootValues', name: 'ComponentTreeRootNodeRootValues', component: () => import('@/views/tree/rootNode/rootValues/CodeExample.vue') }
      ]
    },
    {
      path: 'current',
      component: RouteLayout,
      children: [
        {
          path: 'base',
          name: 'ComponentTreeCurrentBase',
          component: () => import('@/views/tree/current/base/CodeExample.vue')
        },
        {
          path: 'trigger',
          name: 'ComponentTreeCurrentTrigger',
          component: () => import('@/views/tree/current/trigger/CodeExample.vue')
        },
        {
          path: 'currentMethod',
          name: 'ComponentTreeCurrentCurrentMethod',
          component: () => import('@/views/tree/current/currentMethod/CodeExample.vue')
        }
      ]
    },
    {
      path: 'checkbox',
      component: RouteLayout,
      children: [
        {
          path: 'base',
          name: 'ComponentTreeCheckboxBase',
          component: () => import('@/views/tree/checkbox/base/CodeExample.vue')
        },
        {
          path: 'handleManual',
          name: 'ComponentTreeCheckboxHandleManual',
          component: () => import('@/views/tree/checkbox/handleManual/CodeExample.vue')
        },
        {
          path: 'highlight',
          name: 'ComponentTreeCheckboxHighlight',
          component: () => import('@/views/tree/checkbox/highlight/CodeExample.vue')
        },
        { path: 'defaultSelect', name: 'ComponentTreeCheckboxDefaultSelect', component: () => import('@/views/tree/checkbox/defaultSelect/CodeExample.vue') },
        {
          path: 'checkStrictly',
          name: 'ComponentTreeCheckboxCheckStrictly',
          component: () => import('@/views/tree/checkbox/checkStrictly/CodeExample.vue')
        },
        {
          path: 'checkMethod',
          name: 'ComponentTreeCheckboxCheckMethod',
          component: () => import('@/views/tree/checkbox/checkMethod/CodeExample.vue')
        },
        {
          path: 'visibleMethod',
          name: 'ComponentTreeCheckboxVisibleMethod',
          component: () => import('@/views/tree/checkbox/visibleMethod/CodeExample.vue')
        },
        { path: 'color', name: 'ComponentTreeCheckboxColor', component: () => import('@/views/tree/checkbox/color/CodeExample.vue') },
        {
          path: 'template',
          name: 'ComponentTreeCheckboxTemplate',
          component: () => import('@/views/tree/checkbox/template/CodeExample.vue')
        }
      ]
    },
    {
      path: 'radio',
      component: RouteLayout,
      children: [
        {
          path: 'base',
          name: 'ComponentTreeRadioBase',
          component: () => import('@/views/tree/radio/base/CodeExample.vue')
        },
        {
          path: 'handleManual',
          name: 'ComponentTreeRadioHandleManual',
          component: () => import('@/views/tree/radio/handleManual/CodeExample.vue')
        },
        {
          path: 'highlight',
          name: 'ComponentTreeRadioHighlight',
          component: () => import('@/views/tree/radio/highlight/CodeExample.vue')
        },
        { path: 'defaultSelect', name: 'ComponentTreeRadioDefaultSelect', component: () => import('@/views/tree/radio/defaultSelect/CodeExample.vue') },
        {
          path: 'checkMethod',
          name: 'ComponentTreeRadioCheckMethod',
          component: () => import('@/views/tree/radio/checkMethod/CodeExample.vue')
        },
        {
          path: 'visibleMethod',
          name: 'ComponentTreeRadioVisibleMethod',
          component: () => import('@/views/tree/radio/visibleMethod/CodeExample.vue')
        },
        {
          path: 'template',
          name: 'ComponentTreeRadioTemplate',
          component: () => import('@/views/tree/radio/template/CodeExample.vue')
        }
      ]
    },
    {
      path: 'search',
      component: RouteLayout,
      children: [
        {
          path: 'filterValue',
          name: 'ComponentTreeSearchFilterValue',
          component: () => import('@/views/tree/search/filterValue/CodeExample.vue')
        },
        {
          path: 'filterMethod',
          name: 'ComponentTreeSearchFilterMethod',
          component: () => import('@/views/tree/search/filterMethod/CodeExample.vue')
        },
        {
          path: 'light',
          name: 'ComponentTreeSearchLight',
          component: () => import('@/views/tree/search/light/CodeExample.vue')
        }
      ]
    },
    {
      path: 'menu',
      component: RouteLayout,
      children: [
        { path: 'basics', name: 'ComponentTreeMenuBasics', component: () => import('@/views/tree/menu/basics/CodeExample.vue') },
        { path: 'icon', name: 'ComponentTreeMenuIcon', component: () => import('@/views/tree/menu/icon/CodeExample.vue') },
        { path: 'disabled', name: 'ComponentTreeMenuDisabled', component: () => import('@/views/tree/menu/disabled/CodeExample.vue') },
        { path: 'visible', name: 'ComponentTreeMenuVisible', component: () => import('@/views/tree/menu/visible/CodeExample.vue') },
        { path: 'loading', name: 'ComponentTreeMenuLoading', component: () => import('@/views/tree/menu/loading/CodeExample.vue') },
        { path: 'visibleMethod', name: 'ComponentTreeMenuVisibleMethod', component: () => import('@/views/tree/menu/visibleMethod/CodeExample.vue') }
      ]
    },
    {
      path: 'drag',
      component: RouteLayout,
      children: [
        { path: 'sort', name: 'ComponentTreeDragSort', component: () => import('@/views/tree/drag/sort/CodeExample.vue') },
        { path: 'icon', name: 'ComponentTreeDragIcon', component: () => import('@/views/tree/drag/icon/CodeExample.vue') },
        { path: 'showGuidesStatus', name: 'ComponentTreeDragShowGuidesStatus', component: () => import('@/views/tree/drag/showGuidesStatus/CodeExample.vue') },
        { path: 'trigger', name: 'ComponentTreeDragTrigger', component: () => import('@/views/tree/drag/trigger/CodeExample.vue') },
        { path: 'events', name: 'ComponentTreeDragEvents', component: () => import('@/views/tree/drag/events/CodeExample.vue') },
        { path: 'tooltipMethod', name: 'ComponentTreeDragTooltipMethod', component: () => import('@/views/tree/drag/tooltipMethod/CodeExample.vue') },
        { path: 'disabledMethod', name: 'ComponentTreeDragDisabledMethod', component: () => import('@/views/tree/drag/disabledMethod/CodeExample.vue') },
        { path: 'visibleMethod', name: 'ComponentTreeDragVisibleMethod', component: () => import('@/views/tree/drag/visibleMethod/CodeExample.vue') },
        { path: 'peerDrag', name: 'ComponentTreeDragPeerDrag', component: () => import('@/views/tree/drag/peerDrag/CodeExample.vue') },
        { path: 'cossDrag', name: 'ComponentTreeDragCossDrag', component: () => import('@/views/tree/drag/cossDrag/CodeExample.vue') },
        { path: 'selfToChildDrag', name: 'ComponentTreeDragSelfToChildDrag', component: () => import('@/views/tree/drag/selfToChildDrag/CodeExample.vue') },
        { path: 'toChildDrag', name: 'ComponentTreeDragToChildDrag', component: () => import('@/views/tree/drag/toChildDrag/CodeExample.vue') },
        { path: 'dragMethod', name: 'ComponentTreeDragDragMethod', component: () => import('@/views/tree/drag/dragMethod/CodeExample.vue') },
        { path: 'cossTree', name: 'ComponentTreeDragCossTree', component: () => import('@/views/tree/drag/cossTree/CodeExample.vue') }
      ]
    },
    {
      path: 'lazy',
      component: RouteLayout,
      children: [
        {
          path: 'loadMethod',
          name: 'ComponentTreeLazyLoadMethod',
          component: () => import('@/views/tree/lazy/loadMethod/CodeExample.vue')
        },
        {
          path: 'error',
          name: 'ComponentTreeLazyError',
          component: () => import('@/views/tree/lazy/error/CodeExample.vue')
        },
        {
          path: 'showLine',
          name: 'ComponentTreeLazyShowLine',
          component: () => import('@/views/tree/lazy/showLine/CodeExample.vue')
        }
      ]
    },
    {
      path: 'edit',
      component: RouteLayout,
      children: [
        { path: 'insert', name: 'ComponentTreeEditInsert', component: () => import('@/views/tree/edit/insert/CodeExample.vue') },
        { path: 'remove', name: 'ComponentTreeEditRemove', component: () => import('@/views/tree/edit/remove/CodeExample.vue') },
        { path: 'full', name: 'ComponentTreeEditFull', component: () => import('@/views/tree/edit/full/CodeExample.vue') }
      ]
    },
    {
      path: 'scroll',
      component: RouteLayout,
      children: [
        {
          path: 'basics',
          name: 'ComponentTreeScrollBasics',
          component: () => import('@/views/tree/scroll/basics/CodeExample.vue')
        },
        {
          path: 'loadData',
          name: 'ComponentTreeScrollLoadData',
          component: () => import('@/views/tree/scroll/loadData/CodeExample.vue')
        },
        { path: 'scrollTo', name: 'ComponentTreeScrollScrollTo', component: () => import('@/views/tree/scroll/scrollTo/CodeExample.vue') }
      ]
    },
    {
      path: 'template',
      component: RouteLayout,
      children: [
        {
          path: 'title',
          name: 'ComponentTreeTemplateTitle',
          component: () => import('@/views/tree/template/title/CodeExample.vue')
        },
        {
          path: 'icon',
          name: 'ComponentTreeTemplateIcon',
          component: () => import('@/views/tree/template/icon/CodeExample.vue')
        },
        {
          path: 'extra',
          name: 'ComponentTreeTemplateExtra',
          component: () => import('@/views/tree/template/extra/CodeExample.vue')
        },
        {
          path: 'header',
          name: 'ComponentTreeTemplateHeader',
          component: () => import('@/views/tree/template/header/CodeExample.vue')
        },
        {
          path: 'footer',
          name: 'ComponentTreeTemplateFooter',
          component: () => import('@/views/tree/template/footer/CodeExample.vue')
        }
      ]
    },
    {
      path: 'other',
      component: RouteLayout,
      children: [
        { path: 'extra', name: 'ComponentTreeOtherExtra', component: () => import('@/views/tree/other/extra/CodeExample.vue') },
        { path: 'scrollTo', name: 'ComponentTreeOtherScrollTo', component: () => import('@/views/tree/other/scrollTo/CodeExample.vue') },
        { path: 'treeTransfer', name: 'ComponentTreeOtherTreeTransfer', component: () => import('@/views/tree/other/treeTransfer/CodeExample.vue') }
      ]
    }
  ]
}
