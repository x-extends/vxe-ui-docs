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
        { path: 'data', name: 'ComponentGanttBaseData', component: () => import('@/views/gantt/base/data/CodeExample.vue') },
        { path: 'tableWidth', name: 'ComponentGanttBaseTableWidth', component: () => import('@/views/gantt/base/tableWidth/CodeExample.vue') },
        { path: 'border', name: 'ComponentGanttBaseBorder', component: () => import('@/views/gantt/base/border/CodeExample.vue') },
        { path: 'stripe', name: 'ComponentGanttBaseStripe', component: () => import('@/views/gantt/base/stripe/CodeExample.vue') },
        { path: 'showNowLine', name: 'ComponentGanttBaseShowNowLine', component: () => import('@/views/gantt/base/showNowLine/CodeExample.vue') },
        { path: 'resizable', name: 'ComponentGanttBaseResizable', component: () => import('@/views/gantt/base/resizable/CodeExample.vue') },
        { path: 'resizableHeight', name: 'ComponentGanttBaseResizableHeight', component: () => import('@/views/gantt/base/resizableHeight/CodeExample.vue') },
        { path: 'autoHeight', name: 'ComponentGanttBaseAutoHeight', component: () => import('@/views/gantt/base/autoHeight/CodeExample.vue') },
        { path: 'fixed', name: 'ComponentGanttBaseFixed', component: () => import('@/views/gantt/base/fixed/CodeExample.vue') },
        { path: 'group', name: 'ComponentGanttBaseGroup', component: () => import('@/views/gantt/base/group/CodeExample.vue') },
        { path: 'sort', name: 'ComponentGanttBaseSort', component: () => import('@/views/gantt/base/sort/CodeExample.vue') },
        { path: 'filter', name: 'ComponentGanttBaseFilter', component: () => import('@/views/gantt/base/filter/CodeExample.vue') },
        { path: 'loading', name: 'ComponentGanttBaseLoading', component: () => import('@/views/gantt/base/loading/CodeExample.vue') },
        { path: 'resize', name: 'ComponentGanttBaseResize', component: () => import('@/views/gantt/base/resize/CodeExample.vue') }
      ]
    },
    {
      path: 'taskBar',
      component: RouteLayout,
      children: [
        { path: 'showProgress', name: 'ComponentGanttTaskBarShowProgress', component: () => import('@/views/gantt/taskBar/showProgress/CodeExample.vue') },
        { path: 'showContent', name: 'ComponentGanttTaskBarShowContent', component: () => import('@/views/gantt/taskBar/showContent/CodeExample.vue') },
        { path: 'barColor', name: 'ComponentGanttTaskBarBarColor', component: () => import('@/views/gantt/taskBar/barColor/CodeExample.vue') },
        { path: 'round', name: 'ComponentGanttTaskBarRound', component: () => import('@/views/gantt/taskBar/round/CodeExample.vue') },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            { path: 'taskBar', name: 'ComponentGanttTaskBarTemplateTaskBar', component: () => import('@/views/gantt/taskBar/template/taskBar/CodeExample.vue') }
          ]
        }
      ]
    },
    {
      path: 'cell',
      component: RouteLayout,
      children: [
        { path: 'padding', name: 'ComponentGanttCellPadding', component: () => import('@/views/gantt/cell/padding/CodeExample.vue') },
        { path: 'height', name: 'ComponentGanttCellHeight', component: () => import('@/views/gantt/cell/height/CodeExample.vue') }
      ]
    },
    {
      path: 'merge',
      component: RouteLayout,
      children: [
        { path: 'row', name: 'ComponentGanttMergeRow', component: () => import('@/views/gantt/merge/row/CodeExample.vue') },
        { path: 'column', name: 'ComponentGanttMergeColumn', component: () => import('@/views/gantt/merge/column/CodeExample.vue') },
        { path: 'header', name: 'ComponentGanttMergeHeader', component: () => import('@/views/gantt/merge/header/CodeExample.vue') }
      ]
    },
    {
      path: 'footer',
      component: RouteLayout,
      children: [
        { path: 'showFooter', name: 'ComponentGanttFooterShowFooter', component: () => import('@/views/gantt/footer/showFooter/CodeExample.vue') },
        { path: 'footerData', name: 'ComponentGanttFooterFooterData', component: () => import('@/views/gantt/footer/footerData/CodeExample.vue') }
      ]
    },
    {
      path: 'radio',
      component: RouteLayout,
      children: [
        { path: 'highlight', name: 'ComponentGanttRadioHighlight', component: () => import('@/views/gantt/radio/highlight/CodeExample.vue') },
        { path: 'checkMethod', name: 'ComponentGanttRadioCheckMethod', component: () => import('@/views/gantt/radio/checkMethod/CodeExample.vue') },
        { path: 'trigger', name: 'ComponentGanttRadioTrigger', component: () => import('@/views/gantt/radio/trigger/CodeExample.vue') },
        { path: 'visibleMethod', name: 'ComponentGanttRadioVisibleMethod', component: () => import('@/views/gantt/radio/visibleMethod/CodeExample.vue') }
      ]
    },
    {
      path: 'checkbox',
      component: RouteLayout,
      children: [
        { path: 'highlight', name: 'ComponentGanttCheckboxHighlight', component: () => import('@/views/gantt/checkbox/highlight/CodeExample.vue') },
        { path: 'field', name: 'ComponentGanttCheckboxField', component: () => import('@/views/gantt/checkbox/field/CodeExample.vue') },
        { path: 'checkMethod', name: 'ComponentGanttCheckboxCheckMethod', component: () => import('@/views/gantt/checkbox/checkMethod/CodeExample.vue') },
        { path: 'batch', name: 'ComponentGanttCheckboxBatch', component: () => import('@/views/gantt/checkbox/batch/CodeExample.vue') },
        { path: 'range', name: 'ComponentGanttCheckboxRange', component: () => import('@/views/gantt/checkbox/range/CodeExample.vue') },
        { path: 'reserve', name: 'ComponentGanttCheckboxReserve', component: () => import('@/views/gantt/checkbox/reserve/CodeExample.vue') },
        { path: 'showReserveStatus', name: 'ComponentGanttCheckboxShowReserveStatus', component: () => import('@/views/gantt/checkbox/showReserveStatus/CodeExample.vue') },
        { path: 'trigger', name: 'ComponentGanttCheckboxTrigger', component: () => import('@/views/gantt/checkbox/trigger/CodeExample.vue') },
        { path: 'visibleMethod', name: 'ComponentGanttCheckboxVisibleMethod', component: () => import('@/views/gantt/checkbox/visibleMethod/CodeExample.vue') }
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
        { path: 'tableRow', name: 'ComponentGanttEditTableRow', component: () => import('@/views/gantt/edit/tableRow/CodeExample.vue') },
        { path: 'taskBar', name: 'ComponentGanttEditTaskBar', component: () => import('@/views/gantt/edit/taskBar/CodeExample.vue') }
      ]
    },
    {
      path: 'validate',
      component: RouteLayout,
      children: [
        { path: 'mode', name: 'ComponentGanttValidateMode', component: () => import('@/views/gantt/validate/mode/CodeExample.vue') },
        { path: 'validateField', name: 'ComponentGanttValidateValidateField', component: () => import('@/views/gantt/validate/validateField/CodeExample.vue') },
        { path: 'theme', name: 'ComponentGanttValidateTheme', component: () => import('@/views/gantt/validate/theme/CodeExample.vue') }
      ]
    },
    {
      path: 'rowResizable',
      component: RouteLayout,
      children: [
        { path: 'base', name: 'ComponentGanttRowResizableBase', component: () => import('@/views/gantt/rowResizable/base/CodeExample.vue') },
        { path: 'fixed', name: 'ComponentGanttRowResizableFixed', component: () => import('@/views/gantt/rowResizable/fixed/CodeExample.vue') },
        { path: 'allRowDrag', name: 'ComponentGanttRowResizableAllRowDrag', component: () => import('@/views/gantt/rowResizable/allRowDrag/CodeExample.vue') }
      ]
    },
    {
      path: 'rowDrag',
      component: RouteLayout,
      children: [
        { path: 'sort', name: 'ComponentGanttRowDragSort', component: () => import('@/views/gantt/rowDrag/sort/CodeExample.vue') },
        { path: 'fixed', name: 'ComponentGanttRowDragFixed', component: () => import('@/views/gantt/rowDrag/fixed/CodeExample.vue') },
        { path: 'icon', name: 'ComponentGanttRowDragIcon', component: () => import('@/views/gantt/rowDrag/icon/CodeExample.vue') },
        {
          path: 'tree',
          component: RouteLayout,
          children: [
            { path: 'base', name: 'ComponentGanttRowDragTreeBase', component: () => import('@/views/gantt/rowDrag/tree/base/CodeExample.vue') },
            { path: 'peerDrag', name: 'ComponentGanttRowDragTreePeerDrag', component: () => import('@/views/gantt/rowDrag/tree/peerDrag/CodeExample.vue') },
            { path: 'cossDrag', name: 'ComponentGanttRowDragTreeCossDrag', component: () => import('@/views/gantt/rowDrag/tree/cossDrag/CodeExample.vue') },
            { path: 'selfToChildDrag', name: 'ComponentGanttRowDragTreeSelfToChildDrag', component: () => import('@/views/gantt/rowDrag/tree/selfToChildDrag/CodeExample.vue') },
            { path: 'toChildDrag', name: 'ComponentGanttRowDragTreeToChildDrag', component: () => import('@/views/gantt/rowDrag/tree/toChildDrag/CodeExample.vue') },
            { path: 'cossTable', name: 'ComponentGanttRowDragTreeCossTable', component: () => import('@/views/gantt/rowDrag/tree/cossTable/CodeExample.vue') }
          ]
        },
        { path: 'dragMethod', name: 'ComponentGanttRowDragDragMethod', component: () => import('@/views/gantt/rowDrag/dragMethod/CodeExample.vue') },
        { path: 'manual', name: 'ComponentGanttRowDragManual', component: () => import('@/views/gantt/rowDrag/manual/CodeExample.vue') },
        { path: 'cossTable', name: 'ComponentGanttRowDragCossTable', component: () => import('@/views/gantt/rowDrag/cossTable/CodeExample.vue') }
      ]
    },
    {
      path: 'rowGroup',
      component: RouteLayout,
      children: [
        { path: 'basic', name: 'ComponentGanttRowGroupBasic', component: () => import('@/views/gantt/rowGroup/basic/CodeExample.vue') },
        { path: 'groupFields', name: 'ComponentGanttRowGroupGroupFields', component: () => import('@/views/gantt/rowGroup/groupFields/CodeExample.vue') },
        { path: 'handleSet', name: 'ComponentGanttRowGroupHandleSet', component: () => import('@/views/gantt/rowGroup/handleSet/CodeExample.vue') }
      ]
    },
    {
      path: 'menu',
      component: RouteLayout,
      children: [
        { path: 'prefixConfig', name: 'ComponentGanttMenuPrefixConfig', component: () => import('@/views/gantt/menu/prefixConfig/CodeExample.vue') },
        { path: 'suffixConfig', name: 'ComponentGanttMenuSuffixConfig', component: () => import('@/views/gantt/menu/suffixConfig/CodeExample.vue') },
        { path: 'full', name: 'ComponentGanttMenuFull', component: () => import('@/views/gantt/menu/full/CodeExample.vue') },
        { path: 'privilege', name: 'ComponentGanttMenuPrivilege', component: () => import('@/views/gantt/menu/privilege/CodeExample.vue') }
      ]
    },
    {
      path: 'form',
      component: RouteLayout,
      children: [
        { path: 'search', name: 'ComponentGanttFormSearch', component: () => import('@/views/gantt/form/search/CodeExample.vue') },
        { path: 'collapse', name: 'ComponentGanttFormCollapse', component: () => import('@/views/gantt/form/collapse/CodeExample.vue') }
      ]
    },
    {
      path: 'toolbar',
      component: RouteLayout,
      children: [
        { path: 'buttons', name: 'ComponentGanttToolbarButtons', component: () => import('@/views/gantt/toolbar/buttons/CodeExample.vue') },
        { path: 'tools', name: 'ComponentGanttToolbarTools', component: () => import('@/views/gantt/toolbar/tools/CodeExample.vue') },
        { path: 'refresh', name: 'ComponentGanttToolbarRefresh', component: () => import('@/views/gantt/toolbar/refresh/CodeExample.vue') },
        { path: 'zoom', name: 'ComponentGanttToolbarZoom', component: () => import('@/views/gantt/toolbar/zoom/CodeExample.vue') }
      ]
    },
    {
      path: 'custom',
      component: RouteLayout,
      children: [
        { path: 'toolbar', name: 'ComponentGanttCustomsToolbar', component: () => import('@/views/gantt/custom/toolbar/CodeExample.vue') },
        { path: 'modal', name: 'ComponentGanttCustomsModal', component: () => import('@/views/gantt/custom/modal/CodeExample.vue') },
        { path: 'drawer', name: 'ComponentGanttCustomsDrawer', component: () => import('@/views/gantt/custom/drawer/CodeExample.vue') }
      ]
    },
    {
      path: 'pager',
      component: RouteLayout,
      children: [
        { path: 'mockPage', name: 'ComponentGanttPagerMockPage', component: () => import('@/views/gantt/pager/mockPage/CodeExample.vue') },
        { path: 'layouts', name: 'ComponentGanttPagerLayouts', component: () => import('@/views/gantt/pager/layouts/CodeExample.vue') },
        { path: 'start', name: 'ComponentGanttPagerStart', component: () => import('@/views/gantt/pager/start/CodeExample.vue') }
      ]
    },
    {
      path: 'scales',
      component: RouteLayout,
      children: [
        { path: 'default', name: 'ComponentGanttScalesDefault', component: () => import('@/views/gantt/scales/default/CodeExample.vue') },
        { path: 'yearMonthDate', name: 'ComponentGanttScalesYearMonthDate', component: () => import('@/views/gantt/scales/yearMonthDate/CodeExample.vue') },
        { path: 'quarterMonthDate', name: 'ComponentGanttScalesQuarterMonthDate', component: () => import('@/views/gantt/scales/quarterMonthDate/CodeExample.vue') },
        { path: 'monthDayDate', name: 'ComponentGanttScalesMonthDayDate', component: () => import('@/views/gantt/scales/monthDayDate/CodeExample.vue') },
        { path: 'monthDate', name: 'ComponentGanttScalesMonthDate', component: () => import('@/views/gantt/scales/monthDate/CodeExample.vue') },
        { path: 'dateHour', name: 'ComponentGanttScalesDateHour', component: () => import('@/views/gantt/scales/dateHour/CodeExample.vue') },
        { path: 'hourMinute', name: 'ComponentGanttScalesHourMinute', component: () => import('@/views/gantt/scales/hourMinute/CodeExample.vue') },
        { path: 'minuteSecond', name: 'ComponentGanttScalesMinuteSecond', component: () => import('@/views/gantt/scales/minuteSecond/CodeExample.vue') },
        { path: 'titleMethod', name: 'ComponentGanttScalesTitleMethod', component: () => import('@/views/gantt/scales/titleMethod/CodeExample.vue') },
        { path: 'headerCellStyle', name: 'ComponentGanttScalesHeaderCellStyle', component: () => import('@/views/gantt/scales/headerCellStyle/CodeExample.vue') },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            { path: 'title', name: 'ComponentGanttScalesTemplateTitle', component: () => import('@/views/gantt/scales/template/title/CodeExample.vue') }
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
    },
    {
      path: 'scroll',
      component: RouteLayout,
      children: [
        { path: 'vertical', name: 'ComponentGanttScrollVertical', component: () => import('@/views/gantt/scroll/vertical/CodeExample.vue') }
      ]
    },
    {
      path: 'scrollbar',
      component: RouteLayout,
      children: [
        { path: 'barStyle', name: 'ComponentGantScrollbarBarStyle', component: () => import('@/views/gantt/scrollbar/barStyle/CodeExample.vue') },
        { path: 'barPos', name: 'ComponentGantScrollbarBarPos', component: () => import('@/views/gantt/scrollbar/barPos/CodeExample.vue') }
      ]
    },
    {
      path: 'template',
      component: RouteLayout,
      children: [
        { path: 'layout', name: 'ComponentGantTemplateLayout', component: () => import('@/views/gantt/template/layout/CodeExample.vue') },
        { path: 'taskBar', name: 'ComponentGantTemplateTaskBar', component: () => import('@/views/gantt/template/taskBar/CodeExample.vue') },
        { path: 'taskCellTitle', name: 'ComponentGantTemplateTaskCellTitle', component: () => import('@/views/gantt/template/taskCellTitle/CodeExample.vue') },
        { path: 'form', name: 'ComponentGantTemplateForm', component: () => import('@/views/gantt/template/form/CodeExample.vue') },
        { path: 'pager', name: 'ComponentGantTemplatePager', component: () => import('@/views/gantt/template/pager/CodeExample.vue') },
        { path: 'default', name: 'ComponentGantTemplateDefault', component: () => import('@/views/gantt/template/default/CodeExample.vue') },
        { path: 'header', name: 'ComponentGantTemplateHeader', component: () => import('@/views/gantt/template/header/CodeExample.vue') },
        { path: 'footer', name: 'ComponentGantTemplateFooter', component: () => import('@/views/gantt/template/footer/CodeExample.vue') },
        { path: 'tooltip', name: 'ComponentGantTemplateTooltip', component: () => import('@/views/gantt/template/tooltip/CodeExample.vue') },
        { path: 'radio', name: 'ComponentGantTemplateRadio', component: () => import('@/views/gantt/template/radio/CodeExample.vue') },
        { path: 'checkbox', name: 'ComponentGantTemplateCheckbox', component: () => import('@/views/gantt/template/checkbox/CodeExample.vue') },
        { path: 'filter', name: 'ComponentGantTemplateFilter', component: () => import('@/views/gantt/template/filter/CodeExample.vue') },
        { path: 'edit', name: 'ComponentGantTemplateEdit', component: () => import('@/views/gantt/template/edit/CodeExample.vue') },
        { path: 'valid', name: 'ComponentGantTemplateValid', component: () => import('@/views/gantt/template/valid/CodeExample.vue') }
      ]
    }
  ]
}
