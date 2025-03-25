import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import RouteLayout from '@/components/RouteLayout.vue'
import PageLayout from '@/components/PageLayout.vue'

import StartInstall from '@/views/start/install/CodeExample.vue'
import StartUseGlobal from '@/views/start/useGlobal/CodeExample.vue'
import StartUseImport from '@/views/start/useImport/CodeExample.vue'
import StartCDN from '@/views/start/cdn/CodeExample.vue'
import StartIcons from '@/views/start/icon/CodeExample.vue'
import StartConfig from '@/views/start/config/CodeExample.vue'
import StartTheme from '@/views/start/theme/CodeExample.vue'
import StartI18n from '@/views/start/i18n/CodeExample.vue'
import StartUseZIndex from '@/views/start/z-index/CodeExample.vue'
import StartPermission from '@/views/start/permission/CodeExample.vue'
import FreeDonation from '@/views/start/FreeDonation.vue'
import JoinSponsor from '@/views/start/JoinSponsor.vue'
import EnterprisePreview from '@/views/start/EnterprisePreview.vue'

const tableRouteConfig: RouteRecordRaw = {
  path: 'table',
  component: RouteLayout,
  children: [
    {
      path: 'base',
      component: RouteLayout,
      children: [
        {
          path: 'basic',
          name: 'ComponentTableBaseBasic',
          component: () => import('@/views/table/base/basic/CodeExample.vue')
        },
        {
          path: 'size',
          name: 'ComponentTableBaseSize',
          component: () => import('@/views/table/base/size/CodeExample.vue')
        },
        {
          path: 'align',
          name: 'ComponentTableBaseAlign',
          component: () => import('@/views/table/base/align/CodeExample.vue')
        },
        {
          path: 'visible',
          name: 'ComponentTableBaseVisible',
          component: () => import('@/views/table/base/visible/CodeExample.vue')
        },
        {
          path: 'width',
          name: 'ComponentTableBaseWidth',
          component: () => import('@/views/table/base/width/CodeExample.vue')
        },
        {
          path: 'autoBreak',
          name: 'ComponentTableBaseAutoBreak',
          component: () => import('@/views/table/base/autoBreak/CodeExample.vue')
        },
        {
          path: 'overflow',
          name: 'ComponentTableBaseOverflow',
          component: () => import('@/views/table/base/overflow/CodeExample.vue')
        },
        {
          path: 'tooltip',
          name: 'ComponentTableBaseTooltip',
          component: () => import('@/views/table/base/tooltip/CodeExample.vue')
        },
        {
          path: 'scrollStyle',
          name: 'ComponentTableBaseScrollStyle',
          component: () => import('@/views/table/base/scrollStyle/CodeExample.vue')
        },
        {
          path: 'stripe',
          name: 'ComponentTableBaseStripe',
          component: () => import('@/views/table/base/stripe/CodeExample.vue')
        },
        {
          path: 'border',
          name: 'ComponentTableBaseBorder',
          component: () => import('@/views/table/base/border/CodeExample.vue')
        },
        {
          path: 'round',
          name: 'ComponentTableBaseRound',
          component: () => import('@/views/table/base/round/CodeExample.vue')
        },
        {
          path: 'padding',
          name: 'ComponentTableBasePadding',
          component: () => import('@/views/table/base/padding/CodeExample.vue')
        },
        {
          path: 'style',
          name: 'ComponentTableBaseStyle',
          component: () => import('@/views/table/base/style/CodeExample.vue')
        },
        {
          path: 'dynamicStyle',
          name: 'ComponentTableBaseDynamicStyle',
          component: () => import('@/views/table/base/dynamicStyle/CodeExample.vue')
        },
        {
          path: 'header',
          name: 'ComponentTableBaseHeader',
          component: () => import('@/views/table/base/header/CodeExample.vue')
        },
        {
          path: 'footer',
          name: 'ComponentTableBaseFooter',
          component: () => import('@/views/table/base/footer/CodeExample.vue')
        },
        {
          path: 'currentColumn',
          name: 'ComponentTableBaseCurrentColumn',
          component: () => import('@/views/table/base/currentColumn/CodeExample.vue')
        },
        {
          path: 'resizable',
          name: 'ComponentTableBaseHeaderResizable',
          component: () => import('@/views/table/base/resizable/CodeExample.vue')
        },
        {
          path: 'minHeight',
          name: 'ComponentTableBaseHeaderMinHeight',
          component: () => import('@/views/table/base/minHeight/CodeExample.vue')
        },
        {
          path: 'height',
          name: 'ComponentTableBaseHeight',
          component: () => import('@/views/table/base/height/CodeExample.vue')
        },
        {
          path: 'maxHeight',
          name: 'ComponentTableBaseMaxHeight',
          component: () => import('@/views/table/base/maxHeight/CodeExample.vue')
        },
        {
          path: 'columnHeight',
          name: 'ComponentTableBaseColumnHeight',
          component: () => import('@/views/table/base/columnHeight/CodeExample.vue')
        },
        {
          path: 'rowHeight',
          name: 'ComponentTableBaseRowHeight',
          component: () => import('@/views/table/base/rowHeight/CodeExample.vue')
        },
        {
          path: 'autoHeight',
          name: 'ComponentTableBaseAutoHeight',
          component: () => import('@/views/table/base/autoHeight/CodeExample.vue')
        },
        {
          path: 'fixed',
          name: 'ComponentTableBaseFixed',
          component: () => import('@/views/table/base/fixed/CodeExample.vue')
        },
        {
          path: 'fixedFull',
          name: 'ComponentTableBaseFixedFull',
          component: () => import('@/views/table/base/fixedFull/CodeExample.vue')
        },
        {
          path: 'group',
          name: 'ComponentTableBaseGroup',
          component: () => import('@/views/table/base/group/CodeExample.vue')
        },
        {
          path: 'seq',
          name: 'ComponentTableBaseSeq',
          component: () => import('@/views/table/base/seq/CodeExample.vue')
        },
        {
          path: 'currentRow',
          name: 'ComponentTableBaseCurrentRow',
          component: () => import('@/views/table/base/currentRow/CodeExample.vue')
        },
        {
          path: 'radio',
          name: 'ComponentTableBaseRadio',
          component: () => import('@/views/table/base/radio/CodeExample.vue')
        },
        {
          path: 'selection',
          name: 'ComponentTableBaseSelection',
          component: () => import('@/views/table/base/selection/CodeExample.vue')
        },
        {
          path: 'sort',
          name: 'ComponentTableBaseSort',
          component: () => import('@/views/table/base/sort/CodeExample.vue')
        },
        {
          path: 'filter',
          name: 'ComponentTableBaseFilter',
          component: () => import('@/views/table/base/filter/CodeExample.vue')
        },
        {
          path: 'empty',
          name: 'ComponentTableBaseEmpty',
          component: () => import('@/views/table/base/empty/CodeExample.vue')
        },
        {
          path: 'loading',
          name: 'ComponentTableBaseLoading',
          component: () => import('@/views/table/base/loading/CodeExample.vue')
        },
        {
          path: 'format',
          name: 'ComponentTableBaseFormat',
          component: () => import('@/views/table/base/format/CodeExample.vue')
        },
        {
          path: 'data',
          name: 'ComponentTableBaseData',
          component: () => import('@/views/table/base/data/CodeExample.vue')
        },
        {
          path: 'titlePrefix',
          name: 'ComponentTableBaseTitlePrefix',
          component: () => import('@/views/table/base/titlePrefix/CodeExample.vue')
        },
        {
          path: 'titleSuffix',
          name: 'ComponentTableBaseTitleSuffix',
          component: () => import('@/views/table/base/titleSuffix/CodeExample.vue')
        },
        {
          path: 'html',
          name: 'ComponentTableBaseHtml',
          component: () => import('@/views/table/base/html/CodeExample.vue')
        },
        {
          path: 'full',
          name: 'ComponentTableBaseFull',
          component: () => import('@/views/table/base/full/CodeExample.vue')
        }
      ]
    },
    {
      path: 'footer',
      component: RouteLayout,
      children: [
        {
          path: 'footerData',
          name: 'ComponentTableFooterFooterData',
          component: () => import('@/views/table/footer/footerData/CodeExample.vue')
        },
        {
          path: 'footerMethod',
          name: 'ComponentTableFooterFooterMethod',
          component: () => import('@/views/table/footer/footerMethod/CodeExample.vue')
        },
        {
          path: 'footerFormat',
          name: 'ComponentTableFooterFooterFormat',
          component: () => import('@/views/table/footer/footerFormat/CodeExample.vue')
        },
        {
          path: 'template',
          name: 'ComponentTableFooterTemplate',
          component: () => import('@/views/table/footer/template/CodeExample.vue')
        }
      ]
    },
    {
      path: 'radio',
      component: RouteLayout,
      children: [
        {
          path: 'highlight',
          name: 'ComponentTableRadioHighlight',
          component: () => import('@/views/table/radio/highlight/CodeExample.vue')
        },
        {
          path: 'checkMethod',
          name: 'ComponentTableRadioCheckMethod',
          component: () => import('@/views/table/radio/checkMethod/CodeExample.vue')
        },
        {
          path: 'visibleMethod',
          name: 'ComponentTableRadioVisibleMethod',
          component: () => import('@/views/table/radio/visibleMethod/CodeExample.vue')
        },
        {
          path: 'template',
          name: 'ComponentTableRadioTemplate',
          component: () => import('@/views/table/radio/template/CodeExample.vue')
        }
      ]
    },
    {
      path: 'checkbox',
      component: RouteLayout,
      children: [
        {
          path: 'highlight',
          name: 'ComponentTableCheckboxHighlight',
          component: () => import('@/views/table/checkbox/highlight/CodeExample.vue')
        },
        {
          path: 'field',
          name: 'ComponentTableCheckboxField',
          component: () => import('@/views/table/checkbox/field/CodeExample.vue')
        },
        {
          path: 'checkMethod',
          name: 'ComponentTableCheckboxCheckMethod',
          component: () => import('@/views/table/checkbox/checkMethod/CodeExample.vue')
        },
        {
          path: 'visibleMethod',
          name: 'ComponentTableCheckboxVisibleMethod',
          component: () => import('@/views/table/checkbox/visibleMethod/CodeExample.vue')
        },
        {
          path: 'range',
          name: 'ComponentTableCheckboxRange',
          component: () => import('@/views/table/checkbox/range/CodeExample.vue')
        },
        {
          path: 'template',
          name: 'ComponentTableCheckboxTemplate',
          component: () => import('@/views/table/checkbox/template/CodeExample.vue')
        }
      ]
    },
    {
      path: 'sort',
      component: RouteLayout,
      children: [
        {
          path: 'multiple',
          name: 'ComponentTableSortMultiple',
          component: () => import('@/views/table/sort/multiple/CodeExample.vue')
        },
        {
          path: 'trigger',
          name: 'ComponentTableSortTrigger',
          component: () => import('@/views/table/sort/trigger/CodeExample.vue')
        },
        {
          path: 'orders',
          name: 'ComponentTableSortOrders',
          component: () => import('@/views/table/sort/orders/CodeExample.vue')
        },
        {
          path: 'allowBtn',
          name: 'ComponentTableSortAllowBtn',
          component: () => import('@/views/table/sort/allowBtn/CodeExample.vue')
        },
        {
          path: 'defaultSort',
          name: 'ComponentTableSortDefaultSort',
          component: () => import('@/views/table/sort/defaultSort/CodeExample.vue')
        },
        {
          path: 'sortType',
          name: 'ComponentTableSortSortType',
          component: () => import('@/views/table/sort/sortType/CodeExample.vue')
        },
        {
          path: 'sortMethod',
          name: 'ComponentTableSortSortMethod',
          component: () => import('@/views/table/sort/sortMethod/CodeExample.vue')
        },
        {
          path: 'remote',
          name: 'ComponentTableSortRemote',
          component: () => import('@/views/table/sort/remote/CodeExample.vue')
        },
        {
          path: 'setSort',
          name: 'ComponentTableSortSetSort',
          component: () => import('@/views/table/sort/setSort/CodeExample.vue')
        }
      ]
    },
    {
      path: 'filter',
      component: RouteLayout,
      children: [
        {
          path: 'remote',
          name: 'ComponentTableFilterRemote',
          component: () => import('@/views/table/filter/remote/CodeExample.vue')
        },
        {
          path: 'tree',
          name: 'ComponentTableFilterTree',
          component: () => import('@/views/table/filter/tree/CodeExample.vue')
        },
        {
          path: 'setFilter',
          name: 'ComponentTableFilterSetFilter',
          component: () => import('@/views/table/filter/setFilter/CodeExample.vue')
        },
        {
          path: 'manual',
          name: 'ComponentTableFilterManual',
          component: () => import('@/views/table/filter/manual/CodeExample.vue')
        },
        {
          path: 'headerFilter',
          name: 'ComponentTableFilterHeaderFilter',
          component: () => import('@/views/table/filter/headerFilter/CodeExample.vue')
        }
      ]
    },
    {
      path: 'rowResizable',
      component: RouteLayout,
      children: [
        {
          path: 'base',
          name: 'ComponentTableRowResizableBase',
          component: () => import('@/views/table/rowResizable/base/CodeExample.vue')
        },
        {
          path: 'fixed',
          name: 'ComponentTableRowResizableFixed',
          component: () => import('@/views/table/rowResizable/fixed/CodeExample.vue')
        },
        {
          path: 'tree',
          name: 'ComponentTableRowResizableTree',
          component: () => import('@/views/table/rowResizable/tree/CodeExample.vue')
        },
        {
          path: 'rowResize',
          name: 'ComponentTableRowResizableRowResize',
          component: () => import('@/views/table/rowResizable/rowResize/CodeExample.vue')
        },
        {
          path: 'manual',
          name: 'ComponentTableRowResizableManual',
          component: () => import('@/views/table/rowResizable/manual/CodeExample.vue')
        }
      ]
    },
    {
      path: 'rowDrag',
      component: RouteLayout,
      children: [
        {
          path: 'sort',
          name: 'ComponentTableRowDragSort',
          component: () => import('@/views/table/rowDrag/sort/CodeExample.vue')
        },
        {
          path: 'fixed',
          name: 'ComponentTableRowDragFixed',
          component: () => import('@/views/table/rowDrag/fixed/CodeExample.vue')
        },
        {
          path: 'icon',
          name: 'ComponentTableRowDragIcon',
          component: () => import('@/views/table/rowDrag/icon/CodeExample.vue')
        },
        {
          path: 'showGuidesStatus',
          name: 'ComponentTableRowDragShowGuidesStatus',
          component: () => import('@/views/table/rowDrag/showGuidesStatus/CodeExample.vue')
        },
        {
          path: 'trigger',
          name: 'ComponentTableRowDragTrigger',
          component: () => import('@/views/table/rowDrag/trigger/CodeExample.vue')
        },
        {
          path: 'tree',
          component: RouteLayout,
          children: [
            {
              path: 'base',
              name: 'ComponentTableRowDragTreeBase',
              component: () => import('@/views/table/rowDrag/tree/base/CodeExample.vue')
            },
            {
              path: 'cossDrag',
              name: 'ComponentTableRowDragTreeCossDrag',
              component: () => import('@/views/table/rowDrag/tree/cossDrag/CodeExample.vue')
            },
            {
              path: 'selfToChildDrag',
              name: 'ComponentTableRowDragTreeSelfToChildDrag',
              component: () => import('@/views/table/rowDrag/tree/selfToChildDrag/CodeExample.vue')
            },
            {
              path: 'toChildDrag',
              name: 'ComponentTableRowDragTreeToChildDrag',
              component: () => import('@/views/table/rowDrag/tree/toChildDrag/CodeExample.vue')
            },
            {
              path: 'showGuidesStatus',
              name: 'ComponentTableRowDragTreeShowGuidesStatus',
              component: () => import('@/views/table/rowDrag/tree/showGuidesStatus/CodeExample.vue')
            },
            {
              path: 'dragMethod',
              name: 'ComponentTableRowDragTreeDragMethod',
              component: () => import('@/views/table/rowDrag/tree/dragMethod/CodeExample.vue')
            },
            {
              path: 'lazy',
              name: 'ComponentTableRowDragTreeLazy',
              component: () => import('@/views/table/rowDrag/tree/lazy/CodeExample.vue')
            }
          ]
        },
        {
          path: 'events',
          name: 'ComponentTableRowDragEvents',
          component: () => import('@/views/table/rowDrag/events/CodeExample.vue')
        },
        {
          path: 'disabledMethod',
          name: 'ComponentTableRowDragDisabledMethod',
          component: () => import('@/views/table/rowDrag/disabledMethod/CodeExample.vue')
        },
        {
          path: 'visibleMethod',
          name: 'ComponentTableRowDragVisibleMethod',
          component: () => import('@/views/table/rowDrag/visibleMethod/CodeExample.vue')
        },
        {
          path: 'dragMethod',
          name: 'ComponentTableRowDragDragMethod',
          component: () => import('@/views/table/rowDrag/dragMethod/CodeExample.vue')
        }
      ]
    },
    {
      path: 'colResizable',
      component: RouteLayout,
      children: [
        {
          path: 'mode',
          name: 'ComponentTableColResizableMode',
          component: () => import('@/views/table/colResizable/mode/CodeExample.vue')
        },
        {
          path: 'group',
          name: 'ComponentTableColResizableGroup',
          component: () => import('@/views/table/colResizable/group/CodeExample.vue')
        },
        {
          path: 'fixed',
          name: 'ComponentTableColResizableFixed',
          component: () => import('@/views/table/colResizable/fixed/CodeExample.vue')
        }
      ]
    },
    {
      path: 'colDrag',
      component: RouteLayout,
      children: [
        {
          path: 'sort',
          name: 'ComponentTableColDragSort',
          component: () => import('@/views/table/colDrag/sort/CodeExample.vue')
        },
        {
          path: 'fixed',
          name: 'ComponentTableColDragFixed',
          component: () => import('@/views/table/colDrag/fixed/CodeExample.vue')
        },
        {
          path: 'icon',
          name: 'ComponentTableColDragIcon',
          component: () => import('@/views/table/colDrag/icon/CodeExample.vue')
        },
        {
          path: 'showGuidesStatus',
          name: 'ComponentTableColDragShowGuidesStatus',
          component: () => import('@/views/table/colDrag/showGuidesStatus/CodeExample.vue')
        },
        {
          path: 'group',
          name: 'ComponentTableColDragGroup',
          component: () => import('@/views/table/colDrag/group/CodeExample.vue')
        },
        {
          path: 'trigger',
          name: 'ComponentTableColDragTrigger',
          component: () => import('@/views/table/colDrag/trigger/CodeExample.vue')
        },
        {
          path: 'events',
          name: 'ComponentTableColDragEvents',
          component: () => import('@/views/table/colDrag/events/CodeExample.vue')
        },
        {
          path: 'disabledMethod',
          name: 'ComponentTableColDragDisabledMethod',
          component: () => import('@/views/table/colDrag/disabledMethod/CodeExample.vue')
        },
        {
          path: 'visibleMethod',
          name: 'ComponentTableColDragVisibleMethod',
          component: () => import('@/views/table/colDrag/visibleMethod/CodeExample.vue')
        },
        {
          path: 'dragMethod',
          name: 'ComponentTableColDragDragMethod',
          component: () => import('@/views/table/colDrag/dragMethod/CodeExample.vue')
        }
      ]
    },
    {
      path: 'merge',
      component: RouteLayout,
      children: [
        {
          path: 'row',
          name: 'ComponentTableMergeRow',
          component: () => import('@/views/table/merge/row/CodeExample.vue')
        },
        {
          path: 'column',
          name: 'ComponentTableMergeColumn',
          component: () => import('@/views/table/merge/column/CodeExample.vue')
        },
        {
          path: 'all',
          name: 'ComponentTableMergeAll',
          component: () => import('@/views/table/merge/all/CodeExample.vue')
        },
        {
          path: 'footer',
          name: 'ComponentTableMergeFooter',
          component: () => import('@/views/table/merge/footer/CodeExample.vue')
        },
        {
          path: 'horizontal',
          name: 'ComponentTableMergeHorizontal',
          component: () => import('@/views/table/merge/horizontal/CodeExample.vue')
        }
      ]
    },
    {
      path: 'expand',
      component: RouteLayout,
      children: [
        {
          path: 'basic',
          name: 'ComponentTableExpandBasic',
          component: () => import('@/views/table/expand/basic/CodeExample.vue')
        },
        {
          path: 'padding',
          name: 'ComponentTableExpandPadding',
          component: () => import('@/views/table/expand/padding/CodeExample.vue')
        },
        {
          path: 'icon',
          name: 'ComponentTableExpandIcon',
          component: () => import('@/views/table/expand/icon/CodeExample.vue')
        },
        {
          path: 'height',
          name: 'ComponentTableExpandHeight',
          component: () => import('@/views/table/expand/height/CodeExample.vue')
        },
        {
          path: 'fixed',
          name: 'ComponentTableExpandFixed',
          component: () => import('@/views/table/expand/fixed/CodeExample.vue')
        },
        {
          path: 'trigger',
          name: 'ComponentTableExpandTrigger',
          component: () => import('@/views/table/expand/trigger/CodeExample.vue')
        },
        {
          path: 'lazy',
          name: 'ComponentTableExpandLazy',
          component: () => import('@/views/table/expand/lazy/CodeExample.vue')
        },
        {
          path: 'visibleMethod',
          name: 'ComponentTableExpandVisibleMethod',
          component: () => import('@/views/table/expand/visibleMethod/CodeExample.vue')
        },
        {
          path: 'toggleMethod',
          name: 'ComponentTableExpandToggleMethod',
          component: () => import('@/views/table/expand/toggleMethod/CodeExample.vue')
        },
        {
          path: 'childTable',
          name: 'ComponentTableExpandChildTable',
          component: () => import('@/views/table/expand/childTable/CodeExample.vue')
        }
      ]
    },
    {
      path: 'menu',
      component: RouteLayout,
      children: [
        {
          path: 'header',
          name: 'ComponentTableMenuHeader',
          component: () => import('@/views/table/menu/header/CodeExample.vue')
        },
        {
          path: 'body',
          name: 'ComponentTableMenuBody',
          component: () => import('@/views/table/menu/body/CodeExample.vue')
        },
        {
          path: 'footer',
          name: 'ComponentTableMenuFooter',
          component: () => import('@/views/table/menu/footer/CodeExample.vue')
        },
        {
          path: 'prefixConfig',
          name: 'ComponentTableMenuPrefixConfig',
          component: () => import('@/views/table/menu/prefixConfig/CodeExample.vue')
        },
        {
          path: 'suffixConfig',
          name: 'ComponentTableMenuSuffixConfig',
          component: () => import('@/views/table/menu/suffixConfig/CodeExample.vue')
        },
        {
          path: 'full',
          name: 'ComponentTableMenuFull',
          component: () => import('@/views/table/menu/full/CodeExample.vue')
        },
        {
          path: 'privilege',
          name: 'ComponentTableMenuPrivilege',
          component: () => import('@/views/table/menu/privilege/CodeExample.vue')
        }
      ]
    },
    {
      path: 'form',
      component: RouteLayout,
      children: [
        {
          path: 'formData',
          name: 'ComponentTableFormFormData',
          component: () => import('@/views/table/form/formData/CodeExample.vue')
        },
        {
          path: 'collapse',
          name: 'ComponentTableFormCollapse',
          component: () => import('@/views/table/form/collapse/CodeExample.vue')
        }
      ]
    },
    {
      path: 'toolbar',
      component: RouteLayout,
      children: [
        {
          path: 'buttons',
          name: 'ComponentTableToolbarButtons',
          component: () => import('@/views/table/toolbar/buttons/CodeExample.vue')
        },
        {
          path: 'tools',
          name: 'ComponentTableToolbarTools',
          component: () => import('@/views/table/toolbar/tools/CodeExample.vue')
        },
        {
          path: 'custom',
          name: 'ComponentTableToolbarCustom',
          component: () => import('@/views/table/toolbar/custom/CodeExample.vue')
        },
        {
          path: 'refresh',
          name: 'ComponentTableToolbarRefresh',
          component: () => import('@/views/table/toolbar/refresh/CodeExample.vue')
        },
        {
          path: 'print',
          name: 'ComponentTableToolbarPrint',
          component: () => import('@/views/table/toolbar/print/CodeExample.vue')
        },
        {
          path: 'import',
          name: 'ComponentTableToolbarImport',
          component: () => import('@/views/table/toolbar/import/CodeExample.vue')
        },
        {
          path: 'export',
          name: 'ComponentTableToolbarExport',
          component: () => import('@/views/table/toolbar/export/CodeExample.vue')
        },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            {
              path: 'buttons',
              name: 'ComponentTableToolbarTemplateButtons',
              component: () => import('@/views/table/toolbar/template/buttons/CodeExample.vue')
            },
            {
              path: 'buttonPrefix',
              name: 'ComponentTableToolbarTemplateButtonPrefix',
              component: () => import('@/views/table/toolbar/template/buttonPrefix/CodeExample.vue')
            },
            {
              path: 'buttonSuffix',
              name: 'ComponentTableToolbarTemplateButtonSuffix',
              component: () => import('@/views/table/toolbar/template/buttonSuffix/CodeExample.vue')
            },
            {
              path: 'tools',
              name: 'ComponentTableToolbarTemplateTools',
              component: () => import('@/views/table/toolbar/template/tools/CodeExample.vue')
            },
            {
              path: 'toolPrefix',
              name: 'ComponentTableToolbarTemplateToolPrefix',
              component: () => import('@/views/table/toolbar/template/toolPrefix/CodeExample.vue')
            },
            {
              path: 'toolSuffix',
              name: 'ComponentTableToolbarTemplateToolSuffix',
              component: () => import('@/views/table/toolbar/template/toolSuffix/CodeExample.vue')
            }
          ]
        }
      ]
    },
    {
      path: 'custom',
      component: RouteLayout,
      children: [
        {
          path: 'toolbar',
          name: 'ComponentTableCustomToolbar',
          component: () => import('@/views/table/custom/toolbar/CodeExample.vue')
        },
        {
          path: 'modal',
          name: 'ComponentTableCustomModal',
          component: () => import('@/views/table/custom/modal/CodeExample.vue')
        },
        {
          path: 'drawer',
          name: 'ComponentTableCustomDrawer',
          component: () => import('@/views/table/custom/drawer/CodeExample.vue')
        },
        {
          path: 'defHide',
          name: 'ComponentTableCustomDefHide',
          component: () => import('@/views/table/custom/defHide/CodeExample.vue')
        },
        {
          path: 'checkMethod',
          name: 'ComponentTableCustomCheckMethod',
          component: () => import('@/views/table/custom/checkMethod/CodeExample.vue')
        },
        {
          path: 'visibleMethod',
          name: 'ComponentTableCustomVisibleMethod',
          component: () => import('@/views/table/custom/visibleMethod/CodeExample.vue')
        },
        {
          path: 'visible',
          name: 'ComponentTableCustomVisible',
          component: () => import('@/views/table/custom/visible/CodeExample.vue')
        },
        {
          path: 'fixed',
          name: 'ComponentTableCustomFixed',
          component: () => import('@/views/table/custom/fixed/CodeExample.vue')
        },
        {
          path: 'fixedMax',
          name: 'ComponentTableCustomFixedMax',
          component: () => import('@/views/table/custom/fixedMax/CodeExample.vue')
        },
        {
          path: 'resizable',
          name: 'ComponentTableCustomResizable',
          component: () => import('@/views/table/custom/resizable/CodeExample.vue')
        },
        {
          path: 'sort',
          name: 'ComponentTableCustomSort',
          component: () => import('@/views/table/custom/sort/CodeExample.vue')
        },
        {
          path: 'customBtn',
          name: 'ComponentTableCustomCustomBtn',
          component: () => import('@/views/table/custom/customBtn/CodeExample.vue')
        },
        {
          path: 'placement',
          name: 'ComponentTableCustomPlacement',
          component: () => import('@/views/table/custom/placement/CodeExample.vue')
        },
        {
          path: 'storage',
          name: 'ComponentTableCustomStorage',
          component: () => import('@/views/table/custom/storage/CodeExample.vue')
        },
        {
          path: 'events',
          name: 'ComponentTableCustomEvents',
          component: () => import('@/views/table/custom/events/CodeExample.vue')
        },
        {
          path: 'immediate',
          name: 'ComponentTableCustomImmediate',
          component: () => import('@/views/table/custom/immediate/CodeExample.vue')
        },
        {
          path: 'remote',
          name: 'ComponentTableCustomRemote',
          component: () => import('@/views/table/custom/remote/CodeExample.vue')
        },
        {
          path: 'remoteFull',
          name: 'ComponentTableCustomRemoteFull',
          component: () => import('@/views/table/custom/remoteFull/CodeExample.vue')
        },
        {
          path: 'manual',
          name: 'ComponentTableCustomManual',
          component: () => import('@/views/table/custom/manual/CodeExample.vue')
        },
        {
          path: 'collapseColumn',
          name: 'ComponentTableCustomCollapseColumn',
          component: () => import('@/views/table/custom/collapseColumn/CodeExample.vue')
        }
      ]
    },
    {
      path: 'pager',
      component: RouteLayout,
      children: [
        {
          path: 'mockPage',
          name: 'ComponentTablePagerMockPage',
          component: () => import('@/views/table/pager/mockPage/CodeExample.vue')
        },
        {
          path: 'layouts',
          name: 'ComponentTablePagerLayouts',
          component: () => import('@/views/table/pager/layouts/CodeExample.vue')
        },
        {
          path: 'start',
          name: 'ComponentTablePagerStart',
          component: () => import('@/views/table/pager/start/CodeExample.vue')
        }
      ]
    },
    {
      path: 'tree',
      component: RouteLayout,
      children: [
        {
          path: 'basic',
          name: 'ComponentTableTreeBasic',
          component: () => import('@/views/table/tree/basic/CodeExample.vue')
        },
        {
          path: 'leveling',
          name: 'ComponentTableTreeLeveling',
          component: () => import('@/views/table/tree/leveling/CodeExample.vue')
        },
        {
          path: 'hierarchy',
          name: 'ComponentTableTreeHierarchy',
          component: () => import('@/views/table/tree/hierarchy/CodeExample.vue')
        },
        {
          path: 'stripe',
          name: 'ComponentTableTreeStripe',
          component: () => import('@/views/table/tree/stripe/CodeExample.vue')
        },
        {
          path: 'seqMode',
          name: 'ComponentTableTreeSeqMode',
          component: () => import('@/views/table/tree/seqMode/CodeExample.vue')
        },
        {
          path: 'icon',
          name: 'ComponentTableTreeIcon',
          component: () => import('@/views/table/tree/icon/CodeExample.vue')
        },
        {
          path: 'accordion',
          name: 'ComponentTableTreeAccordion',
          component: () => import('@/views/table/tree/accordion/CodeExample.vue')
        },
        {
          path: 'currentRow',
          name: 'ComponentTableTreeCurrentRow',
          component: () => import('@/views/table/tree/currentRow/CodeExample.vue')
        },
        {
          path: 'currentColumn',
          name: 'ComponentTableTreeCurrentColumn',
          component: () => import('@/views/table/tree/currentColumn/CodeExample.vue')
        },
        {
          path: 'radio',
          name: 'ComponentTableTreeRadio',
          component: () => import('@/views/table/tree/radio/CodeExample.vue')
        },
        {
          path: 'checkbox',
          name: 'ComponentTableTreeCheckbox',
          component: () => import('@/views/table/tree/checkbox/CodeExample.vue')
        },
        {
          path: 'line',
          name: 'ComponentTableTreeLine',
          component: () => import('@/views/table/tree/line/CodeExample.vue')
        },
        {
          path: 'maxHeight',
          name: 'ComponentTableTreeMaxHeight',
          component: () => import('@/views/table/tree/maxHeight/CodeExample.vue')
        },
        {
          path: 'fixed',
          name: 'ComponentTableTreeFixed',
          component: () => import('@/views/table/tree/fixed/CodeExample.vue')
        },
        {
          path: 'menu',
          name: 'ComponentTableTreeMenu',
          component: () => import('@/views/table/tree/menu/CodeExample.vue')
        },
        {
          path: 'sort',
          name: 'ComponentTableTreeSort',
          component: () => import('@/views/table/tree/sort/CodeExample.vue')
        },
        {
          path: 'filter',
          name: 'ComponentTableTreeFilter',
          component: () => import('@/views/table/tree/filter/CodeExample.vue')
        },
        {
          path: 'lazy',
          name: 'ComponentTableTreeLazy',
          component: () => import('@/views/table/tree/lazy/CodeExample.vue')
        },
        {
          path: 'lazyEdit',
          name: 'ComponentTableTreeLazyEdit',
          component: () => import('@/views/table/tree/lazyEdit/CodeExample.vue')
        },
        {
          path: 'expand',
          name: 'ComponentTableTreeExpand',
          component: () => import('@/views/table/tree/expand/CodeExample.vue')
        },
        {
          path: 'expandLazy',
          name: 'ComponentTableTreeExpandLazy',
          component: () => import('@/views/table/tree/expandLazy/CodeExample.vue')
        },
        {
          path: 'group',
          name: 'ComponentTableTreeGroup',
          component: () => import('@/views/table/tree/group/CodeExample.vue')
        }
      ]
    },
    {
      path: 'keyboard',
      component: RouteLayout,
      children: [
        {
          path: 'selected',
          name: 'ComponentTableKeyboardSelected',
          component: () => import('@/views/table/keyboard/selected/CodeExample.vue')
        },
        {
          path: 'keyboard',
          name: 'ComponentTableKeyboardKeyboard',
          component: () => import('@/views/table/keyboard/keyboard/CodeExample.vue')
        },
        {
          path: 'enterAppend',
          name: 'ComponentTableKeyboardEnterAppend',
          component: () => import('@/views/table/keyboard/enterAppend/CodeExample.vue')
        },
        {
          path: 'edit',
          name: 'ComponentTableKeyboardEdit',
          component: () => import('@/views/table/keyboard/edit/CodeExample.vue')
        },
        {
          path: 'editMethod',
          name: 'ComponentTableKeyboardEditMethod',
          component: () => import('@/views/table/keyboard/editMethod/CodeExample.vue')
        },
        {
          path: 'tree',
          name: 'ComponentTableKeyboardTree',
          component: () => import('@/views/table/keyboard/tree/CodeExample.vue')
        },
        {
          path: 'treeEdit',
          name: 'ComponentTableKeyboardTreeEdit',
          component: () => import('@/views/table/keyboard/treeEdit/CodeExample.vue')
        }
      ]
    },
    {
      path: 'edit',
      component: RouteLayout,
      children: [
        {
          path: 'manual',
          name: 'ComponentTableEditManual',
          component: () => import('@/views/table/edit/manual/CodeExample.vue')
        },
        {
          path: 'click',
          name: 'ComponentTableEditClick',
          component: () => import('@/views/table/edit/click/CodeExample.vue')
        },
        {
          path: 'dblclick',
          name: 'ComponentTableEditDblclick',
          component: () => import('@/views/table/edit/dblclick/CodeExample.vue')
        },
        {
          path: 'autoFocus',
          name: 'ComponentTableEditAutoFocus',
          component: () => import('@/views/table/edit/autoFocus/CodeExample.vue')
        },
        {
          path: 'autoClear',
          name: 'ComponentTableEditAutoClear',
          component: () => import('@/views/table/edit/autoClear/CodeExample.vue')
        },
        {
          path: 'status',
          name: 'ComponentTableEditStatus',
          component: () => import('@/views/table/edit/status/CodeExample.vue')
        },
        {
          path: 'cellPlaceholder',
          name: 'ComponentTableEditCellPlaceholder',
          component: () => import('@/views/table/edit/cellPlaceholder/CodeExample.vue')
        },
        // {
        //   path: 'update',
        //   name: 'ComponentTableEditUpdate',
        //   component: () => import('@/views/table/edit/update/CodeExample.vue')
        // },
        // {
        //   path: 'insert',
        //   name: 'ComponentTableEditInsert',
        //   component: () => import('@/views/table/edit/insert/CodeExample.vue')
        // },
        // {
        //   path: 'remove',
        //   name: 'ComponentTableEditRemove',
        //   component: () => import('@/views/table/edit/remove/CodeExample.vue')
        // },
        // {
        //   path: 'pending',
        //   name: 'ComponentTableEditPending',
        //   component: () => import('@/views/table/edit/pending/CodeExample.vue')
        // },
        // {
        //   path: 'revert',
        //   name: 'ComponentTableEditRevert',
        //   component: () => import('@/views/table/edit/revert/CodeExample.vue')
        // },
        {
          path: 'handleTemp',
          component: RouteLayout,
          children: [
            {
              path: 'insert',
              name: 'ComponentTableEditHandleTempInsert',
              component: () => import('@/views/table/edit/handleTemp/insert/CodeExample.vue')
            },
            {
              path: 'remove',
              name: 'ComponentTableEditHandleTempRemove',
              component: () => import('@/views/table/edit/handleTemp/remove/CodeExample.vue')
            },
            {
              path: 'pending',
              name: 'ComponentTableEditHandleTempPending',
              component: () => import('@/views/table/edit/handleTemp/pending/CodeExample.vue')
            },
            {
              path: 'update',
              name: 'ComponentTableEditHandleTempUpdate',
              component: () => import('@/views/table/edit/handleTemp/update/CodeExample.vue')
            },
            {
              path: 'revert',
              name: 'ComponentTableEditHandleTempRevert',
              component: () => import('@/views/table/edit/handleTemp/revert/CodeExample.vue')
            }
          ]
        },
        {
          path: 'handleOriginal',
          component: RouteLayout,
          children: [
            {
              path: 'insert',
              name: 'ComponentTableEditHandleOriginalInsert',
              component: () => import('@/views/table/edit/handleOriginal/insert/CodeExample.vue')
            },
            {
              path: 'remove',
              name: 'ComponentTableEditHandleOriginalRemove',
              component: () => import('@/views/table/edit/handleOriginal/remove/CodeExample.vue')
            },
            {
              path: 'update',
              name: 'ComponentTableEditHandleOriginalUpdate',
              component: () => import('@/views/table/edit/handleOriginal/update/CodeExample.vue')
            }
          ]
        },
        {
          path: 'cellDisable',
          name: 'ComponentTableEditCellDisable',
          component: () => import('@/views/table/edit/cellDisable/CodeExample.vue')
        },
        {
          path: 'rowDisable',
          name: 'ComponentTableEditRowDisable',
          component: () => import('@/views/table/edit/rowDisable/CodeExample.vue')
        },
        {
          path: 'cellValid',
          name: 'ComponentTableEditCellValid',
          component: () => import('@/views/table/edit/cellValid/CodeExample.vue')
        },
        {
          path: 'rowValid',
          name: 'ComponentTableEditRowValid',
          component: () => import('@/views/table/edit/rowValid/CodeExample.vue')
        },
        {
          path: 'tree',
          name: 'ComponentTableEditTree',
          component: () => import('@/views/table/edit/tree/CodeExample.vue')
        },
        {
          path: 'span',
          name: 'ComponentTableEditSpan',
          component: () => import('@/views/table/edit/span/CodeExample.vue')
        },
        {
          path: 'menu',
          name: 'ComponentTableEditMenu',
          component: () => import('@/views/table/edit/menu/CodeExample.vue')
        },
        {
          path: 'fileList',
          name: 'ComponentTableEditFileList',
          component: () => import('@/views/table/edit/fileList/CodeExample.vue')
        },
        {
          path: 'modalForm',
          name: 'ComponentTableEditModalForm',
          component: () => import('@/views/table/edit/modalForm/CodeExample.vue')
        },
        {
          path: 'modalSelect',
          name: 'ComponentTableEditModalSelect',
          component: () => import('@/views/table/edit/modalSelect/CodeExample.vue')
        },
        {
          path: 'drawerForm',
          name: 'ComponentTableEditDrawerForm',
          component: () => import('@/views/table/edit/drawerForm/CodeExample.vue')
        },
        {
          path: 'drawerSelect',
          name: 'ComponentTableEditDrawerSelect',
          component: () => import('@/views/table/edit/drawerSelect/CodeExample.vue')
        },
        {
          path: 'rowHeight',
          name: 'ComponentTableEditRowHeight',
          component: () => import('@/views/table/edit/rowHeight/CodeExample.vue')
        },
        {
          path: 'multiLineText',
          name: 'ComponentTableEditMultiLineText',
          component: () => import('@/views/table/edit/multiLineText/CodeExample.vue')
        },
        {
          path: 'linkageDisabled',
          name: 'ComponentTableEditLinkageDisabled',
          component: () => import('@/views/table/edit/linkageDisabled/CodeExample.vue')
        },
        {
          path: 'uniqueSelect',
          name: 'ComponentTableEditUniqueSelect',
          component: () => import('@/views/table/edit/uniqueSelect/CodeExample.vue')
        },
        {
          path: 'cascadingSelect',
          name: 'ComponentTableEditCascadingSelect',
          component: () => import('@/views/table/edit/cascadingSelect/CodeExample.vue')
        },
        {
          path: 'showNegativeStatus',
          name: 'ComponentTableEditShowNegativeStatus',
          component: () => import('@/views/table/edit/showNegativeStatus/CodeExample.vue')
        },
        {
          path: 'rowImmediately',
          name: 'ComponentTableEditRowImmediately',
          component: () => import('@/views/table/edit/rowImmediately/CodeExample.vue')
        },
        {
          path: 'footerImmediately',
          name: 'ComponentTableEditFooterImmediately',
          component: () => import('@/views/table/edit/footerImmediately/CodeExample.vue')
        },
        {
          path: 'realtimeSave',
          name: 'ComponentTableEditRealtimeSave',
          component: () => import('@/views/table/edit/realtimeSave/CodeExample.vue')
        }
      ]
    },
    {
      path: 'validate',
      component: RouteLayout,
      children: [
        {
          path: 'rules',
          name: 'ComponentTableValidateRules',
          component: () => import('@/views/table/validate/rules/CodeExample.vue')
        },
        {
          path: 'string',
          name: 'ComponentTableValidateString',
          component: () => import('@/views/table/validate/string/CodeExample.vue')
        },
        {
          path: 'number',
          name: 'ComponentTableValidateNumber',
          component: () => import('@/views/table/validate/number/CodeExample.vue')
        },
        {
          path: 'regexp',
          name: 'ComponentTableValidateRegexp',
          component: () => import('@/views/table/validate/regexp/CodeExample.vue')
        },
        {
          path: 'array',
          name: 'ComponentTableValidateArray',
          component: () => import('@/views/table/validate/array/CodeExample.vue')
        },
        {
          path: 'custom',
          name: 'ComponentTableValidateCustom',
          component: () => import('@/views/table/validate/custom/CodeExample.vue')
        },
        {
          path: 'mode',
          name: 'ComponentTableValidateMode',
          component: () => import('@/views/table/validate/mode/CodeExample.vue')
        },
        {
          path: 'theme',
          name: 'ComponentTableValidateTheme',
          component: () => import('@/views/table/validate/theme/CodeExample.vue')
        },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            {
              path: 'edit',
              name: 'ComponentTableValidateTemplateEdit',
              component: () => import('@/views/table/validate/template/edit/CodeExample.vue')
            },
            {
              path: 'valid',
              name: 'ComponentTableValidateTemplateValid',
              component: () => import('@/views/table/validate/template/valid/CodeExample.vue')
            }
          ]
        }
      ]
    },
    {
      path: 'cellRender',
      component: RouteLayout,
      children: [
        {
          path: 'format-number-input',
          name: 'ComponentTableCellRenderFormatNumberInput',
          component: () => import('@/views/table/cellRender/format-number-input/CodeExample.vue')
        },
        {
          path: 'format-option',
          name: 'ComponentTableCellRenderFormatOption',
          component: () => import('@/views/table/cellRender/format-option/CodeExample.vue')
        },
        {
          path: 'format-tree',
          name: 'ComponentTableCellRenderFormatTree',
          component: () => import('@/views/table/cellRender/format-tree/CodeExample.vue')
        },
        {
          path: 'vxe-switch',
          name: 'ComponentTableCellRenderVxeSwitch',
          component: () => import('@/views/table/cellRender/vxe-switch/CodeExample.vue')
        },
        {
          path: 'vxe-radio-group',
          name: 'ComponentTableCellRenderVxeRadioGroup',
          component: () => import('@/views/table/cellRender/vxe-radio-group/CodeExample.vue')
        },
        {
          path: 'vxe-checkbox-group',
          name: 'ComponentTableCellRenderVxeCheckboxGroup',
          component: () => import('@/views/table/cellRender/vxe-checkbox-group/CodeExample.vue')
        },
        {
          path: 'vxe-button-group',
          name: 'ComponentTableCellRenderVxeButtonGroup',
          component: () => import('@/views/table/cellRender/vxe-button-group/CodeExample.vue')
        },
        {
          path: 'vxe-image',
          name: 'ComponentTableCellRenderVxeImage',
          component: () => import('@/views/table/cellRender/vxe-image/CodeExample.vue')
        },
        {
          path: 'vxe-image-group',
          name: 'ComponentTableCellRenderVxeImageGroup',
          component: () => import('@/views/table/cellRender/vxe-image-group/CodeExample.vue')
        },
        {
          path: 'vxe-text-ellipsis',
          name: 'ComponentTableCellRenderVxeTextEllipsis',
          component: () => import('@/views/table/cellRender/vxe-text-ellipsis/CodeExample.vue')
        },
        {
          path: 'vxe-rate',
          name: 'ComponentTableCellRenderVxeRate',
          component: () => import('@/views/table/cellRender/vxe-rate/CodeExample.vue')
        },
        {
          path: 'vxe-slider',
          name: 'ComponentTableCellRenderVxeSlider',
          component: () => import('@/views/table/cellRender/vxe-slider/CodeExample.vue')
        },
        {
          path: 'vxe-upload',
          name: 'ComponentTableCellRenderVxeUpload',
          component: () => import('@/views/table/cellRender/vxe-upload/CodeExample.vue')
        }
      ]
    },
    {
      path: 'cellTemplate',
      component: RouteLayout,
      children: [
        {
          path: 'vxe-tag',
          name: 'ComponentTableCellTemplateVxeTag',
          component: () => import('@/views/table/cellTemplate/vxe-tag/CodeExample.vue')
        },
        {
          path: 'vxe-switch',
          name: 'ComponentTableCellTemplateVxeSwitch',
          component: () => import('@/views/table/cellTemplate/vxe-switch/CodeExample.vue')
        },
        {
          path: 'vxe-radio-group',
          name: 'ComponentTableCellTemplateVxeRadioGroup',
          component: () => import('@/views/table/cellTemplate/vxe-radio-group/CodeExample.vue')
        },
        {
          path: 'vxe-checkbox-group',
          name: 'ComponentTableCellTemplateVxeCheckboxGroup',
          component: () => import('@/views/table/cellTemplate/vxe-checkbox-group/CodeExample.vue')
        },
        {
          path: 'vxe-button',
          name: 'ComponentTableCellTemplateVxeButton',
          component: () => import('@/views/table/cellTemplate/vxe-button/CodeExample.vue')
        },
        {
          path: 'vxe-image',
          name: 'ComponentTableCellTemplateVxeImage',
          component: () => import('@/views/table/cellTemplate/vxe-image/CodeExample.vue')
        },
        {
          path: 'vxe-image-group',
          name: 'ComponentTableCellTemplateVxeImageGroup',
          component: () => import('@/views/table/cellTemplate/vxe-image-group/CodeExample.vue')
        },
        {
          path: 'vxe-text-ellipsis',
          name: 'ComponentTableCellTemplateVxeTextEllipsis',
          component: () => import('@/views/table/cellTemplate/vxe-text-ellipsis/CodeExample.vue')
        },
        {
          path: 'vxe-rate',
          name: 'ComponentTableCellTemplateVxeRate',
          component: () => import('@/views/table/cellTemplate/vxe-rate/CodeExample.vue')
        },
        {
          path: 'vxe-slider',
          name: 'ComponentTableCellTemplateVxeSlider',
          component: () => import('@/views/table/cellTemplate/vxe-slider/CodeExample.vue')
        },
        {
          path: 'vxe-upload',
          name: 'ComponentTableCellTemplateVxeUpload',
          component: () => import('@/views/table/cellTemplate/vxe-upload/CodeExample.vue')
        },
        {
          path: 'vxe-modal',
          name: 'ComponentTableCellTemplateVxeModal',
          component: () => import('@/views/table/cellTemplate/vxe-modal/CodeExample.vue')
        },
        {
          path: 'vxe-drawer',
          name: 'ComponentTableCellTemplateVxeDrawer',
          component: () => import('@/views/table/cellTemplate/vxe-drawer/CodeExample.vue')
        },
        {
          path: 'allEdit',
          name: 'ComponentTableCellTemplateAllEdit',
          component: () => import('@/views/table/cellTemplate/allEdit/CodeExample.vue')
        }
      ]
    },
    {
      path: 'editRender',
      component: RouteLayout,
      children: [
        {
          path: 'input',
          name: 'ComponentTableEditRenderInput',
          component: () => import('@/views/table/editRender/input/CodeExample.vue')
        },
        {
          path: 'select',
          name: 'ComponentTableEditRenderSelect',
          component: () => import('@/views/table/editRender/select/CodeExample.vue')
        },
        {
          path: 'vxe-input',
          name: 'ComponentTableEditRenderVxeInput',
          component: () => import('@/views/table/editRender/vxe-input/CodeExample.vue')
        },
        {
          path: 'vxe-number-input',
          name: 'ComponentTableEditRenderVxeNumberInput',
          component: () => import('@/views/table/editRender/vxe-number-input/CodeExample.vue')
        },
        {
          path: 'vxe-icon-picker',
          name: 'ComponentTableEditRenderVxeIconPicker',
          component: () => import('@/views/table/editRender/vxe-icon-picker/CodeExample.vue')
        },
        {
          path: 'vxe-color-picker',
          name: 'ComponentTableEditRenderVxeColorPicker',
          component: () => import('@/views/table/editRender/vxe-color-picker/CodeExample.vue')
        },
        {
          path: 'vxe-date-picker',
          name: 'ComponentTableEditRenderVxeDatePicker',
          component: () => import('@/views/table/editRender/vxe-date-picker/CodeExample.vue')
        },
        {
          path: 'vxe-select',
          name: 'ComponentTableEditRenderVxeSelect',
          component: () => import('@/views/table/editRender/vxe-select/CodeExample.vue')
        },
        {
          path: 'vxe-tree-select',
          name: 'ComponentTableEditRenderVxeTreeSelect',
          component: () => import('@/views/table/editRender/vxe-tree-select/CodeExample.vue')
        },
        {
          path: 'vxe-table-select',
          name: 'ComponentTableEditRenderVxeTableSelect',
          component: () => import('@/views/table/editRender/vxe-table-select/CodeExample.vue')
        },
        {
          path: 'events',
          name: 'ComponentTableEditRenderEvents',
          component: () => import('@/views/table/editRender/events/CodeExample.vue')
        }
      ]
    },
    {
      path: 'editTemplate',
      component: RouteLayout,
      children: [
        {
          path: 'vxe-input',
          name: 'ComponentTableEditTemplateVxeInput',
          component: () => import('@/views/table/editTemplate/vxe-input/CodeExample.vue')
        },
        {
          path: 'vxe-number-input',
          name: 'ComponentTableEditTemplateVxeNumberInput',
          component: () => import('@/views/table/editTemplate/vxe-number-input/CodeExample.vue')
        },
        {
          path: 'vxe-icon-picker',
          name: 'ComponentTableEditTemplateVxeIconPicker',
          component: () => import('@/views/table/editTemplate/vxe-icon-picker/CodeExample.vue')
        },
        {
          path: 'vxe-date-picker',
          name: 'ComponentTableEditTemplateVxeDatePicker',
          component: () => import('@/views/table/editTemplate/vxe-date-picker/CodeExample.vue')
        },
        {
          path: 'vxe-select',
          name: 'ComponentTableEditTemplateVxeSelect',
          component: () => import('@/views/table/editTemplate/vxe-select/CodeExample.vue')
        },
        {
          path: 'vxe-tree-select',
          name: 'ComponentTableEditTemplateVxeTreeSelect',
          component: () => import('@/views/table/editTemplate/vxe-tree-select/CodeExample.vue')
        },
        {
          path: 'vxe-table-select',
          name: 'ComponentTableEditTemplateVxeTableSelect',
          component: () => import('@/views/table/editTemplate/vxe-table-select/CodeExample.vue')
        },
        {
          path: 'vxe-pulldown',
          name: 'ComponentTableEditTemplateVxePulldown',
          component: () => import('@/views/table/editTemplate/vxe-pulldown/CodeExample.vue')
        },
        {
          path: 'vxe-modal',
          name: 'ComponentTableEditTemplateVxeModal',
          component: () => import('@/views/table/editTemplate/vxe-modal/CodeExample.vue')
        },
        {
          path: 'vxe-drawer',
          name: 'ComponentTableEditTemplateVxeDrawer',
          component: () => import('@/views/table/editTemplate/vxe-drawer/CodeExample.vue')
        }
      ]
    },
    {
      path: 'template',
      component: RouteLayout,
      children: [
        {
          path: 'default',
          name: 'ComponentTableTemplateDefault',
          component: () => import('@/views/table/template/default/CodeExample.vue')
        },
        {
          path: 'header',
          name: 'ComponentTableTemplateHeader',
          component: () => import('@/views/table/template/header/CodeExample.vue')
        },
        {
          path: 'footer',
          name: 'ComponentTableTemplateFooter',
          component: () => import('@/views/table/template/footer/CodeExample.vue')
        },
        {
          path: 'checkbox',
          name: 'ComponentTableTemplateCheckbox',
          component: () => import('@/views/table/template/checkbox/CodeExample.vue')
        },
        {
          path: 'radio',
          name: 'ComponentTableTemplateRadio',
          component: () => import('@/views/table/template/radio/CodeExample.vue')
        },
        {
          path: 'content',
          name: 'ComponentTableTemplateContent',
          component: () => import('@/views/table/template/content/CodeExample.vue')
        },
        {
          path: 'filter',
          name: 'ComponentTableTemplateFilter',
          component: () => import('@/views/table/template/filter/CodeExample.vue')
        },
        {
          path: 'edit',
          name: 'ComponentTableTemplateEdit',
          component: () => import('@/views/table/template/edit/CodeExample.vue')
        }
      ]
    },
    {
      path: 'import',
      component: RouteLayout,
      children: [
        {
          path: 'base',
          name: 'ComponentTableImportBase',
          component: () => import('@/views/table/import/base/CodeExample.vue')
        },
        {
          path: 'advanced',
          name: 'ComponentTableImportAdvanced',
          component: () => import('@/views/table/import/advanced/CodeExample.vue')
        }
      ]
    },
    {
      path: 'export',
      component: RouteLayout,
      children: [
        {
          path: 'base',
          name: 'ComponentTableExportBase',
          component: () => import('@/views/table/export/base/CodeExample.vue')
        },
        {
          path: 'txt',
          name: 'ComponentTableExportTxt',
          component: () => import('@/views/table/export/txt/CodeExample.vue')
        },
        {
          path: 'xml',
          name: 'ComponentTableExportXml',
          component: () => import('@/views/table/export/xml/CodeExample.vue')
        },
        {
          path: 'html',
          name: 'ComponentTableExportHtml',
          component: () => import('@/views/table/export/html/CodeExample.vue')
        },
        {
          path: 'csv',
          name: 'ComponentTableExportCsv',
          component: () => import('@/views/table/export/csv/CodeExample.vue')
        },
        {
          path: 'exportMethod',
          name: 'ComponentTableExportExportMethod',
          component: () => import('@/views/table/export/exportMethod/CodeExample.vue')
        },
        {
          path: 'advanced',
          name: 'ComponentTableExportAdvanced',
          component: () => import('@/views/table/export/advanced/CodeExample.vue')
        },
        {
          path: 'columns',
          name: 'ComponentTableExportColumns',
          component: () => import('@/views/table/export/columns/CodeExample.vue')
        }
      ]
    },
    {
      path: 'print',
      component: RouteLayout,
      children: [
        {
          path: 'base',
          name: 'ComponentTablePrintBase',
          component: () => import('@/views/table/print/base/CodeExample.vue')
        },
        {
          path: 'advanced',
          name: 'ComponentTablePrintAdvanced',
          component: () => import('@/views/table/print/advanced/CodeExample.vue')
        },
        {
          path: 'page',
          name: 'ComponentTablePrintPage',
          component: () => import('@/views/table/print/page/CodeExample.vue')
        },
        {
          path: 'multilist',
          name: 'ComponentTablePrintMultilist',
          component: () => import('@/views/table/print/multilist/CodeExample.vue')
        },
        {
          path: 'order',
          name: 'ComponentTablePrintOrder',
          component: () => import('@/views/table/print/order/CodeExample.vue')
        }
      ]
    },
    {
      path: 'scroll',
      component: RouteLayout,
      children: [
        {
          path: 'vertical',
          name: 'ComponentTableScrollVertical',
          component: () => import('@/views/table/scroll/vertical/CodeExample.vue')
        },
        {
          path: 'horizontal',
          name: 'ComponentTableScrollHorizontal',
          component: () => import('@/views/table/scroll/horizontal/CodeExample.vue')
        },
        {
          path: 'hv',
          name: 'ComponentTableScrollHV',
          component: () => import('@/views/table/scroll/hv/CodeExample.vue')
        },
        {
          path: 'loadData',
          name: 'ComponentTableScrollLoadData',
          component: () => import('@/views/table/scroll/loadData/CodeExample.vue')
        },
        {
          path: 'fixed',
          name: 'ComponentTableScrollFixed',
          component: () => import('@/views/table/scroll/fixed/CodeExample.vue')
        },
        {
          path: 'mode',
          name: 'ComponentTableScrollMode',
          component: () => import('@/views/table/scroll/mode/CodeExample.vue')
        },
        {
          path: 'rowHeight',
          name: 'ComponentTableScrollRowHeight',
          component: () => import('@/views/table/scroll/rowHeight/CodeExample.vue')
        },
        {
          path: 'autoRowHeight',
          name: 'ComponentTableScrollAutoRowHeight',
          component: () => import('@/views/table/scroll/autoRowHeight/CodeExample.vue')
        },
        {
          path: 'autoRowVH',
          name: 'ComponentTableScrollAutoRowVH',
          component: () => import('@/views/table/scroll/autoRowVH/CodeExample.vue')
        },
        {
          path: 'autoRowFixed',
          name: 'ComponentTableScrollAutoRowFixed',
          component: () => import('@/views/table/scroll/autoRowFixed/CodeExample.vue')
        },
        {
          path: 'group',
          name: 'ComponentTableScrollGroup',
          component: () => import('@/views/table/scroll/group/CodeExample.vue')
        },
        {
          path: 'keyboard',
          name: 'ComponentTableScrollKeyboard',
          component: () => import('@/views/table/scroll/keyboard/CodeExample.vue')
        },
        {
          path: 'merge',
          name: 'ComponentTableScrollMerge',
          component: () => import('@/views/table/scroll/merge/CodeExample.vue')
        },
        {
          path: 'tree',
          name: 'ComponentTableScrollTree',
          component: () => import('@/views/table/scroll/tree/CodeExample.vue')
        },
        {
          path: 'edit',
          name: 'ComponentTableScrollEdit',
          component: () => import('@/views/table/scroll/edit/CodeExample.vue')
        },
        {
          path: 'hvEdit',
          name: 'ComponentTableScrollHVEdit',
          component: () => import('@/views/table/scroll/hvEdit/CodeExample.vue')
        }
      ]
    },
    {
      path: 'search',
      component: RouteLayout,
      children: [
        {
          path: 'list',
          name: 'ComponentTableSearchList',
          component: () => import('@/views/table/search/list/CodeExample.vue')
        },
        {
          path: 'tree',
          name: 'ComponentTableSearchTree',
          component: () => import('@/views/table/search/tree/CodeExample.vue')
        }
      ]
    },
    {
      path: 'events',
      component: RouteLayout,
      children: [
        {
          path: 'click',
          name: 'ComponentTableEventsClick',
          component: () => import('@/views/table/events/click/CodeExample.vue')
        },
        {
          path: 'scroll',
          name: 'ComponentTableEventsScroll',
          component: () => import('@/views/table/events/scroll/CodeExample.vue')
        }
      ]
    },
    {
      path: 'other',
      component: RouteLayout,
      children: [
        {
          path: 'tabs',
          name: 'ComponentTableOtherTabs',
          component: () => import('@/views/table/other/tabs/CodeExample.vue')
        },
        {
          path: 'lineEllipsis',
          name: 'ComponentTableOtherLineEllipsis',
          component: () => import('@/views/table/other/lineEllipsis/CodeExample.vue')
        },
        {
          path: 'bookkeepingVoucher',
          name: 'ComponentTableOtherBookkeepingVoucher',
          component: () => import('@/views/table/other/bookkeepingVoucher/CodeExample.vue')
        }
      ]
    }
  ]
}

const gridRouteConfig: RouteRecordRaw = {
  path: 'grid',
  component: RouteLayout,
  children: [
    {
      path: 'base',
      component: RouteLayout,
      children: [
        {
          path: 'basic',
          name: 'ComponentGridBaseBasic',
          component: () => import('@/views/grid/base/basic/CodeExample.vue')
        },
        {
          path: 'size',
          name: 'ComponentGridBaseSize',
          component: () => import('@/views/grid/base/size/CodeExample.vue')
        },
        {
          path: 'align',
          name: 'ComponentGridBaseAlign',
          component: () => import('@/views/grid/base/align/CodeExample.vue')
        },
        {
          path: 'visible',
          name: 'ComponentGridBaseVisible',
          component: () => import('@/views/grid/base/visible/CodeExample.vue')
        },
        {
          path: 'width',
          name: 'ComponentGridBaseWidth',
          component: () => import('@/views/grid/base/width/CodeExample.vue')
        },
        {
          path: 'autoBreak',
          name: 'ComponentGridBaseAutoBreak',
          component: () => import('@/views/grid/base/autoBreak/CodeExample.vue')
        },
        {
          path: 'overflow',
          name: 'ComponentGridBaseOverflow',
          component: () => import('@/views/grid/base/overflow/CodeExample.vue')
        },
        {
          path: 'tooltip',
          name: 'ComponentGridBaseTooltip',
          component: () => import('@/views/grid/base/tooltip/CodeExample.vue')
        },
        {
          path: 'scrollStyle',
          name: 'ComponentGridBaseScrollStyle',
          component: () => import('@/views/grid/base/scrollStyle/CodeExample.vue')
        },
        {
          path: 'stripe',
          name: 'ComponentGridBaseStripe',
          component: () => import('@/views/grid/base/stripe/CodeExample.vue')
        },
        {
          path: 'border',
          name: 'ComponentGridBaseBorder',
          component: () => import('@/views/grid/base/border/CodeExample.vue')
        },
        {
          path: 'round',
          name: 'ComponentGridBaseRound',
          component: () => import('@/views/grid/base/round/CodeExample.vue')
        },
        {
          path: 'padding',
          name: 'ComponentGridBasePadding',
          component: () => import('@/views/grid/base/padding/CodeExample.vue')
        },
        {
          path: 'style',
          name: 'ComponentGridBaseStyle',
          component: () => import('@/views/grid/base/style/CodeExample.vue')
        },
        {
          path: 'dynamicStyle',
          name: 'ComponentGridBaseDynamicStyle',
          component: () => import('@/views/grid/base/dynamicStyle/CodeExample.vue')
        },
        {
          path: 'header',
          name: 'ComponentGridBaseHeader',
          component: () => import('@/views/grid/base/header/CodeExample.vue')
        },
        {
          path: 'currentColumn',
          name: 'ComponentGridBaseCurrentColumn',
          component: () => import('@/views/grid/base/currentColumn/CodeExample.vue')
        },
        {
          path: 'resizable',
          name: 'ComponentGridBaseHeaderResizable',
          component: () => import('@/views/grid/base/resizable/CodeExample.vue')
        },
        {
          path: 'minHeight',
          name: 'ComponentGridBaseHeaderMinHeight',
          component: () => import('@/views/grid/base/minHeight/CodeExample.vue')
        },
        {
          path: 'height',
          name: 'ComponentGridBaseHeight',
          component: () => import('@/views/grid/base/height/CodeExample.vue')
        },
        {
          path: 'maxHeight',
          name: 'ComponentGridBaseMaxHeight',
          component: () => import('@/views/grid/base/maxHeight/CodeExample.vue')
        },
        {
          path: 'columnHeight',
          name: 'ComponentGridBaseColumnHeight',
          component: () => import('@/views/grid/base/columnHeight/CodeExample.vue')
        },
        {
          path: 'rowHeight',
          name: 'ComponentGridBaseRowHeight',
          component: () => import('@/views/grid/base/rowHeight/CodeExample.vue')
        },
        {
          path: 'autoHeight',
          name: 'ComponentGridBaseAutoHeight',
          component: () => import('@/views/grid/base/autoHeight/CodeExample.vue')
        },
        {
          path: 'fixed',
          name: 'ComponentGridBaseFixed',
          component: () => import('@/views/grid/base/fixed/CodeExample.vue')
        },
        {
          path: 'fixedFull',
          name: 'ComponentGridBaseFixedFull',
          component: () => import('@/views/grid/base/fixedFull/CodeExample.vue')
        },
        {
          path: 'footer',
          name: 'ComponentGridBaseFooter',
          component: () => import('@/views/grid/base/footer/CodeExample.vue')
        },
        {
          path: 'group',
          name: 'ComponentGridBaseGroup',
          component: () => import('@/views/grid/base/group/CodeExample.vue')
        },
        {
          path: 'seq',
          name: 'ComponentGridBaseSeq',
          component: () => import('@/views/grid/base/seq/CodeExample.vue')
        },
        {
          path: 'currentRow',
          name: 'ComponentGridBaseCurrentRow',
          component: () => import('@/views/grid/base/currentRow/CodeExample.vue')
        },
        {
          path: 'radio',
          name: 'ComponentGridBaseRadio',
          component: () => import('@/views/grid/base/radio/CodeExample.vue')
        },
        {
          path: 'selection',
          name: 'ComponentGridBaseSelection',
          component: () => import('@/views/grid/base/selection/CodeExample.vue')
        },
        {
          path: 'sort',
          name: 'ComponentGridBaseSort',
          component: () => import('@/views/grid/base/sort/CodeExample.vue')
        },
        {
          path: 'filter',
          name: 'ComponentGridBaseFilter',
          component: () => import('@/views/grid/base/filter/CodeExample.vue')
        },
        {
          path: 'empty',
          name: 'ComponentGridBaseEmpty',
          component: () => import('@/views/grid/base/empty/CodeExample.vue')
        },
        {
          path: 'loading',
          name: 'ComponentGridBaseLoading',
          component: () => import('@/views/grid/base/loading/CodeExample.vue')
        },
        {
          path: 'format',
          name: 'ComponentGridBaseFormat',
          component: () => import('@/views/grid/base/format/CodeExample.vue')
        },
        {
          path: 'data',
          name: 'ComponentGridBaseData',
          component: () => import('@/views/grid/base/data/CodeExample.vue')
        },
        {
          path: 'html',
          name: 'ComponentGridBaseHtml',
          component: () => import('@/views/grid/base/html/CodeExample.vue')
        },
        {
          path: 'columns',
          name: 'ComponentGridBaseColumns',
          component: () => import('@/views/grid/base/columns/CodeExample.vue')
        },
        {
          path: 'full',
          name: 'ComponentGridBaseFull',
          component: () => import('@/views/grid/base/full/CodeExample.vue')
        }
      ]
    },
    {
      path: 'cell',
      component: RouteLayout,
      children: [
        { path: 'width', name: 'ComponentGridCellWidth', component: () => import('@/views/grid/cell/width/CodeExample.vue') },
        { path: 'padding', name: 'ComponentGridCellPadding', component: () => import('@/views/grid/cell/padding/CodeExample.vue') },
        { path: 'height', name: 'ComponentGridCellHeight', component: () => import('@/views/grid/cell/height/CodeExample.vue') }
      ]
    },
    {
      path: 'sort',
      component: RouteLayout,
      children: [
        {
          path: 'multiple',
          name: 'ComponentGridSortMultiple',
          component: () => import('@/views/grid/sort/multiple/CodeExample.vue')
        },
        {
          path: 'tree',
          name: 'ComponentGridSortTree',
          component: () => import('@/views/grid/sort/tree/CodeExample.vue')
        },
        {
          path: 'remote',
          name: 'ComponentGridSortRemote',
          component: () => import('@/views/grid/sort/remote/CodeExample.vue')
        },
        {
          path: 'setSort',
          name: 'ComponentGridSortSetSort',
          component: () => import('@/views/grid/sort/setSort/CodeExample.vue')
        },
        {
          path: 'iconVisibleMethod',
          name: 'ComponentGridSortIconVisibleMethod',
          component: () => import('@/views/grid/sort/iconVisibleMethod/CodeExample.vue')
        }
      ]
    },
    {
      path: 'filter',
      component: RouteLayout,
      children: [
        {
          path: 'remote',
          name: 'ComponentGridFilterRemote',
          component: () => import('@/views/grid/filter/remote/CodeExample.vue')
        },
        {
          path: 'tree',
          name: 'ComponentGridFilterTree',
          component: () => import('@/views/grid/filter/tree/CodeExample.vue')
        },
        {
          path: 'setFilter',
          name: 'ComponentGridFilterSetFilter',
          component: () => import('@/views/grid/filter/setFilter/CodeExample.vue')
        },
        {
          path: 'manual',
          name: 'ComponentGridFilterManual',
          component: () => import('@/views/grid/filter/manual/CodeExample.vue')
        },
        {
          path: 'headerFilter',
          name: 'ComponentGridFilterHeaderFilter',
          component: () => import('@/views/grid/filter/headerFilter/CodeExample.vue')
        },
        {
          path: 'iconVisibleMethod',
          name: 'ComponentGridFilterIconVisibleMethod',
          component: () => import('@/views/grid/filter/iconVisibleMethod/CodeExample.vue')
        }
      ]
    },
    {
      path: 'filterRender',
      component: RouteLayout,
      children: [
        {
          path: 'vxe-input',
          name: 'ComponentGridFilterRenderVxeInput',
          component: () => import('@/views/grid/filterRender/vxe-input/CodeExample.vue')
        },
        {
          path: 'vxe-number-input',
          name: 'ComponentGridFilterRenderVxeNumberInput',
          component: () => import('@/views/grid/filterRender/vxe-number-input/CodeExample.vue')
        },
        {
          path: 'vxe-select',
          name: 'ComponentGridFilterRenderVxeSelect',
          component: () => import('@/views/grid/filterRender/vxe-select/CodeExample.vue')
        },
        {
          path: 'vxe-date-picker',
          name: 'ComponentGridFilterRenderVxeDatePicker',
          component: () => import('@/views/grid/filterRender/vxe-date-picker/CodeExample.vue')
        }
      ]
    },
    {
      path: 'filterTemplate',
      component: RouteLayout,
      children: [
        {
          path: 'vxe-input',
          name: 'ComponentGridFilterTemplateVxeInput',
          component: () => import('@/views/grid/filterTemplate/vxe-input/CodeExample.vue')
        },
        {
          path: 'vxe-select',
          name: 'ComponentGridFilterTemplateVxeSelect',
          component: () => import('@/views/grid/filterTemplate/vxe-select/CodeExample.vue')
        }
      ]
    },
    {
      path: 'colResizable',
      component: RouteLayout,
      children: [
        {
          path: 'mode',
          name: 'ComponentGridColResizableMode',
          component: () => import('@/views/grid/colResizable/mode/CodeExample.vue')
        },
        {
          path: 'group',
          name: 'ComponentGridColResizableGroup',
          component: () => import('@/views/grid/colResizable/group/CodeExample.vue')
        },
        {
          path: 'fixed',
          name: 'ComponentGridColResizableFixed',
          component: () => import('@/views/grid/colResizable/fixed/CodeExample.vue')
        },
        {
          path: 'dblclickAutoWidth',
          name: 'ComponentGridColResizableDblclickAutoWidth',
          component: () => import('@/views/grid/colResizable/dblclickAutoWidth/CodeExample.vue')
        },
        {
          path: 'allColumnDrag',
          name: 'ComponentGridColResizableAllColumnDrag',
          component: () => import('@/views/grid/colResizable/allColumnDrag/CodeExample.vue')
        },
        {
          path: 'manual',
          name: 'ComponentGridColResizableManual',
          component: () => import('@/views/grid/colResizable/manual/CodeExample.vue')
        }
      ]
    },
    {
      path: 'colDrag',
      component: RouteLayout,
      children: [
        {
          path: 'sort',
          name: 'ComponentGridColDragSort',
          component: () => import('@/views/grid/colDrag/sort/CodeExample.vue')
        },
        {
          path: 'fixed',
          name: 'ComponentGridColDragFixed',
          component: () => import('@/views/grid/colDrag/fixed/CodeExample.vue')
        },
        {
          path: 'icon',
          name: 'ComponentGridColDragIcon',
          component: () => import('@/views/grid/colDrag/icon/CodeExample.vue')
        },
        {
          path: 'showGuidesStatus',
          name: 'ComponentGridColDragShowGuidesStatus',
          component: () => import('@/views/grid/colDrag/showGuidesStatus/CodeExample.vue')
        },
        {
          path: 'group',
          name: 'ComponentGridColDragGroup',
          component: () => import('@/views/grid/colDrag/group/CodeExample.vue')
        },
        {
          path: 'peerDrag',
          name: 'ComponentGridColDragPeerDrag',
          component: () => import('@/views/grid/colDrag/peerDrag/CodeExample.vue')
        },
        {
          path: 'crossDrag',
          name: 'ComponentGridColDragCrossDrag',
          component: () => import('@/views/grid/colDrag/crossDrag/CodeExample.vue')
        },
        {
          path: 'selfToChildDrag',
          name: 'ComponentGridColDragSelfToChildDrag',
          component: () => import('@/views/grid/colDrag/selfToChildDrag/CodeExample.vue')
        },
        {
          path: 'toChildDrag',
          name: 'ComponentGridColDragToChildDrag',
          component: () => import('@/views/grid/colDrag/toChildDrag/CodeExample.vue')
        },
        {
          path: 'trigger',
          name: 'ComponentGridColDragTrigger',
          component: () => import('@/views/grid/colDrag/trigger/CodeExample.vue')
        },
        {
          path: 'events',
          name: 'ComponentGridColDragEvents',
          component: () => import('@/views/grid/colDrag/events/CodeExample.vue')
        },
        {
          path: 'tooltipMethod',
          name: 'ComponentGridColDragTooltipMethod',
          component: () => import('@/views/grid/colDrag/tooltipMethod/CodeExample.vue')
        },
        {
          path: 'disabledMethod',
          name: 'ComponentGridColDragDisabledMethod',
          component: () => import('@/views/grid/colDrag/disabledMethod/CodeExample.vue')
        },
        {
          path: 'visibleMethod',
          name: 'ComponentGridColDragVisibleMethod',
          component: () => import('@/views/grid/colDrag/visibleMethod/CodeExample.vue')
        },
        {
          path: 'dragMethod',
          name: 'ComponentGridColDragDragMethod',
          component: () => import('@/views/grid/colDrag/dragMethod/CodeExample.vue')
        },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            {
              path: 'tip',
              name: 'ComponentGridColDragTemplateTip',
              component: () => import('@/views/grid/colDrag/template/tip/CodeExample.vue')
            }
          ]
        },
        {
          path: 'manual',
          name: 'ComponentGridColDragManual',
          component: () => import('@/views/grid/colDrag/manual/CodeExample.vue')
        },
        {
          path: 'rowCol',
          name: 'ComponentGridColDragRowCol',
          component: () => import('@/views/grid/colDrag/rowCol/CodeExample.vue')
        }
      ]
    },
    {
      path: 'rowResizable',
      component: RouteLayout,
      children: [
        {
          path: 'base',
          name: 'ComponentGridRowResizableBase',
          component: () => import('@/views/grid/rowResizable/base/CodeExample.vue')
        },
        {
          path: 'fixed',
          name: 'ComponentGridRowResizableFixed',
          component: () => import('@/views/grid/rowResizable/fixed/CodeExample.vue')
        },
        {
          path: 'tree',
          name: 'ComponentGridRowResizableTree',
          component: () => import('@/views/grid/rowResizable/tree/CodeExample.vue')
        },
        {
          path: 'rowResize',
          name: 'ComponentGridRowResizableRowResize',
          component: () => import('@/views/grid/rowResizable/rowResize/CodeExample.vue')
        },
        {
          path: 'dblclickAutoHeight',
          name: 'ComponentGridRowResizableDblclickAutoHeight',
          component: () => import('@/views/grid/rowResizable/dblclickAutoHeight/CodeExample.vue')
        },
        {
          path: 'allRowDrag',
          name: 'ComponentGridRowResizableAllRowDrag',
          component: () => import('@/views/grid/rowResizable/allRowDrag/CodeExample.vue')
        },
        {
          path: 'manual',
          name: 'ComponentGridRowResizableManual',
          component: () => import('@/views/grid/rowResizable/manual/CodeExample.vue')
        }
      ]
    },
    {
      path: 'rowDrag',
      component: RouteLayout,
      children: [
        {
          path: 'sort',
          name: 'ComponentGridRowDragSort',
          component: () => import('@/views/grid/rowDrag/sort/CodeExample.vue')
        },
        {
          path: 'fixed',
          name: 'ComponentGridRowDragFixed',
          component: () => import('@/views/grid/rowDrag/fixed/CodeExample.vue')
        },
        {
          path: 'icon',
          name: 'ComponentGridRowDragIcon',
          component: () => import('@/views/grid/rowDrag/icon/CodeExample.vue')
        },
        {
          path: 'showGuidesStatus',
          name: 'ComponentGridRowDragShowGuidesStatus',
          component: () => import('@/views/grid/rowDrag/showGuidesStatus/CodeExample.vue')
        },
        {
          path: 'trigger',
          name: 'ComponentGridRowDragTrigger',
          component: () => import('@/views/grid/rowDrag/trigger/CodeExample.vue')
        },
        {
          path: 'tree',
          component: RouteLayout,
          children: [
            {
              path: 'base',
              name: 'ComponentGridRowDragTreeBase',
              component: () => import('@/views/grid/rowDrag/tree/base/CodeExample.vue')
            },
            {
              path: 'peerDrag',
              name: 'ComponentGridRowDragTreePeerDrag',
              component: () => import('@/views/grid/rowDrag/tree/peerDrag/CodeExample.vue')
            },
            {
              path: 'cossDrag',
              name: 'ComponentGridRowDragTreeCossDrag',
              component: () => import('@/views/grid/rowDrag/tree/cossDrag/CodeExample.vue')
            },
            {
              path: 'selfToChildDrag',
              name: 'ComponentGridRowDragTreeSelfToChildDrag',
              component: () => import('@/views/grid/rowDrag/tree/selfToChildDrag/CodeExample.vue')
            },
            {
              path: 'toChildDrag',
              name: 'ComponentGridRowDragTreeToChildDrag',
              component: () => import('@/views/grid/rowDrag/tree/toChildDrag/CodeExample.vue')
            },
            {
              path: 'showGuidesStatus',
              name: 'ComponentGridRowDragTreeShowGuidesStatus',
              component: () => import('@/views/grid/rowDrag/tree/showGuidesStatus/CodeExample.vue')
            },
            {
              path: 'dragMethod',
              name: 'ComponentGridRowDragTreeDragMethod',
              component: () => import('@/views/grid/rowDrag/tree/dragMethod/CodeExample.vue')
            },
            {
              path: 'lazy',
              name: 'ComponentGridRowDragTreeLazy',
              component: () => import('@/views/grid/rowDrag/tree/lazy/CodeExample.vue')
            },
            {
              path: 'manual',
              name: 'ComponentGridRowDragTreeManual',
              component: () => import('@/views/grid/rowDrag/tree/manual/CodeExample.vue')
            }
          ]
        },
        {
          path: 'events',
          name: 'ComponentGridRowDragEvents',
          component: () => import('@/views/grid/rowDrag/events/CodeExample.vue')
        },
        {
          path: 'tooltipMethod',
          name: 'ComponentGridRowDragTooltipMethod',
          component: () => import('@/views/grid/rowDrag/tooltipMethod/CodeExample.vue')
        },
        {
          path: 'disabledMethod',
          name: 'ComponentGridRowDragDisabledMethod',
          component: () => import('@/views/grid/rowDrag/disabledMethod/CodeExample.vue')
        },
        {
          path: 'visibleMethod',
          name: 'ComponentGridRowDragVisibleMethod',
          component: () => import('@/views/grid/rowDrag/visibleMethod/CodeExample.vue')
        },
        {
          path: 'dragMethod',
          name: 'ComponentGridRowDragDragMethod',
          component: () => import('@/views/grid/rowDrag/dragMethod/CodeExample.vue')
        },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            {
              path: 'tip',
              name: 'ComponentGridRowDragTemplateTip',
              component: () => import('@/views/grid/rowDrag/template/tip/CodeExample.vue')
            }
          ]
        },
        {
          path: 'manual',
          name: 'ComponentGridRowDragManual',
          component: () => import('@/views/grid/rowDrag/manual/CodeExample.vue')
        }
      ]
    },
    {
      path: 'layout',
      component: RouteLayout,
      children: [
        {
          path: 'pager',
          name: 'ComponentGridLayoutPager',
          component: () => import('@/views/grid/layout/pager/CodeExample.vue')
        },
        {
          path: 'toolbar',
          name: 'ComponentGridLayoutToolbar',
          component: () => import('@/views/grid/layout/toolbar/CodeExample.vue')
        }
      ]
    },
    {
      path: 'footer',
      component: RouteLayout,
      children: [
        {
          path: 'footerData',
          name: 'ComponentGridFooterFooterData',
          component: () => import('@/views/grid/footer/footerData/CodeExample.vue')
        },
        {
          path: 'footerMethod',
          name: 'ComponentGridFooterFooterMethod',
          component: () => import('@/views/grid/footer/footerMethod/CodeExample.vue')
        },
        {
          path: 'footerFormat',
          name: 'ComponentGridFooterFooterFormat',
          component: () => import('@/views/grid/footer/footerFormat/CodeExample.vue')
        },
        {
          path: 'template',
          name: 'ComponentGridFooterTemplate',
          component: () => import('@/views/grid/footer/template/CodeExample.vue')
        }
      ]
    },
    {
      path: 'radio',
      component: RouteLayout,
      children: [
        {
          path: 'highlight',
          name: 'ComponentGridRadioHighlight',
          component: () => import('@/views/grid/radio/highlight/CodeExample.vue')
        },
        {
          path: 'checkMethod',
          name: 'ComponentGridRadioCheckMethod',
          component: () => import('@/views/grid/radio/checkMethod/CodeExample.vue')
        },
        {
          path: 'trigger',
          name: 'ComponentGridRadioTrigger',
          component: () => import('@/views/grid/radio/trigger/CodeExample.vue')
        },
        {
          path: 'visibleMethod',
          name: 'ComponentGridRadioVisibleMethod',
          component: () => import('@/views/grid/radio/visibleMethod/CodeExample.vue')
        },
        {
          path: 'headerBtn',
          name: 'ComponentGridRadioHeaderBtn',
          component: () => import('@/views/grid/radio/headerBtn/CodeExample.vue')
        },
        {
          path: 'template',
          name: 'ComponentGridRadioTemplate',
          component: () => import('@/views/grid/radio/template/CodeExample.vue')
        }
      ]
    },
    {
      path: 'checkbox',
      component: RouteLayout,
      children: [
        {
          path: 'highlight',
          name: 'ComponentGridCheckboxHighlight',
          component: () => import('@/views/grid/checkbox/highlight/CodeExample.vue')
        },
        {
          path: 'field',
          name: 'ComponentGridCheckboxField',
          component: () => import('@/views/grid/checkbox/field/CodeExample.vue')
        },
        {
          path: 'checkMethod',
          name: 'ComponentGridCheckboxCheckMethod',
          component: () => import('@/views/grid/checkbox/checkMethod/CodeExample.vue')
        },
        {
          path: 'visibleMethod',
          name: 'ComponentGridCheckboxVisibleMethod',
          component: () => import('@/views/grid/checkbox/visibleMethod/CodeExample.vue')
        },
        {
          path: 'trigger',
          name: 'ComponentGridCheckboxTrigger',
          component: () => import('@/views/grid/checkbox/trigger/CodeExample.vue')
        },
        {
          path: 'reserve',
          name: 'ComponentGridCheckboxReserve',
          component: () => import('@/views/grid/checkbox/reserve/CodeExample.vue')
        },
        {
          path: 'showReserveStatus',
          name: 'ComponentGridCheckboxShowReserveStatus',
          component: () => import('@/views/grid/checkbox/showReserveStatus/CodeExample.vue')
        },
        {
          path: 'range',
          name: 'ComponentGridCheckboxRange',
          component: () => import('@/views/grid/checkbox/range/CodeExample.vue')
        },
        {
          path: 'template',
          name: 'ComponentGridCheckboxTemplate',
          component: () => import('@/views/grid/checkbox/template/CodeExample.vue')
        }
      ]
    },
    {
      path: 'merge',
      component: RouteLayout,
      children: [
        {
          path: 'row',
          name: 'ComponentGridMergeRow',
          component: () => import('@/views/grid/merge/row/CodeExample.vue')
        },
        {
          path: 'column',
          name: 'ComponentGridMergeColumn',
          component: () => import('@/views/grid/merge/column/CodeExample.vue')
        },
        {
          path: 'all',
          name: 'ComponentGridMergeAll',
          component: () => import('@/views/grid/merge/all/CodeExample.vue')
        },
        {
          path: 'spanMethod',
          name: 'ComponentGridMergeSpanMethod',
          component: () => import('@/views/grid/merge/spanMethod/CodeExample.vue')
        },
        {
          path: 'footer',
          name: 'ComponentGridMergeFooter',
          component: () => import('@/views/grid/merge/footer/CodeExample.vue')
        },
        {
          path: 'horizontal',
          name: 'ComponentGridMergeHorizontal',
          component: () => import('@/views/grid/merge/horizontal/CodeExample.vue')
        }
      ]
    },
    {
      path: 'expand',
      component: RouteLayout,
      children: [
        {
          path: 'basic',
          name: 'ComponentGridExpandBasic',
          component: () => import('@/views/grid/expand/basic/CodeExample.vue')
        },
        {
          path: 'padding',
          name: 'ComponentGridExpandPadding',
          component: () => import('@/views/grid/expand/padding/CodeExample.vue')
        },
        {
          path: 'height',
          name: 'ComponentGridExpandHeight',
          component: () => import('@/views/grid/expand/height/CodeExample.vue')
        },
        {
          path: 'fixed',
          name: 'ComponentGridExpandFixed',
          component: () => import('@/views/grid/expand/fixed/CodeExample.vue')
        },
        {
          path: 'childTable',
          name: 'ComponentGridExpandChildTable',
          component: () => import('@/views/grid/expand/childTable/CodeExample.vue')
        },
        {
          path: 'mode',
          name: 'ComponentGridExpandMode',
          component: () => import('@/views/grid/expand/mode/CodeExample.vue')
        },
        {
          path: 'selectModalTable',
          name: 'ComponentGridExpandSelectModalTable',
          component: () => import('@/views/grid/expand/selectModalTable/CodeExample.vue')
        }
      ]
    },
    {
      path: 'menu',
      component: RouteLayout,
      children: [
        {
          path: 'prefixConfig',
          name: 'ComponentGridMenuPrefixConfig',
          component: () => import('@/views/grid/menu/prefixConfig/CodeExample.vue')
        },
        {
          path: 'suffixConfig',
          name: 'ComponentGridMenuSuffixConfig',
          component: () => import('@/views/grid/menu/suffixConfig/CodeExample.vue')
        },
        {
          path: 'full',
          name: 'ComponentGridMenuFull',
          component: () => import('@/views/grid/menu/full/CodeExample.vue')
        },
        {
          path: 'privilege',
          name: 'ComponentGridMenuPrivilege',
          component: () => import('@/views/grid/menu/privilege/CodeExample.vue')
        }
      ]
    },
    {
      path: 'form',
      component: RouteLayout,
      children: [
        {
          path: 'search',
          name: 'ComponentGridFormSearch',
          component: () => import('@/views/grid/form/search/CodeExample.vue')
        },
        {
          path: 'formData',
          name: 'ComponentGridFormFormData',
          component: () => import('@/views/grid/form/formData/CodeExample.vue')
        },
        {
          path: 'collapse',
          name: 'ComponentGridFormCollapse',
          component: () => import('@/views/grid/form/collapse/CodeExample.vue')
        },
        {
          path: 'itemTemplate',
          name: 'ComponentGridFormItemTemplate',
          component: () => import('@/views/grid/form/itemTemplate/CodeExample.vue')
        },
        {
          path: 'template',
          name: 'ComponentGridFormTemplate',
          component: () => import('@/views/grid/form/template/CodeExample.vue')
        }
      ]
    },
    {
      path: 'toolbar',
      component: RouteLayout,
      children: [
        {
          path: 'buttons',
          name: 'ComponentGridToolbarButtons',
          component: () => import('@/views/grid/toolbar/buttons/CodeExample.vue')
        },
        {
          path: 'tools',
          name: 'ComponentGridToolbarTools',
          component: () => import('@/views/grid/toolbar/tools/CodeExample.vue')
        },
        {
          path: 'custom',
          name: 'ComponentGridToolbarCustom',
          component: () => import('@/views/grid/toolbar/custom/CodeExample.vue')
        },
        {
          path: 'print',
          name: 'ComponentGridToolbarPrint',
          component: () => import('@/views/grid/toolbar/print/CodeExample.vue')
        },
        {
          path: 'zoom',
          name: 'ComponentGridToolbarZoom',
          component: () => import('@/views/grid/toolbar/zoom/CodeExample.vue')
        },
        {
          path: 'import',
          name: 'ComponentGridToolbarImport',
          component: () => import('@/views/grid/toolbar/import/CodeExample.vue')
        },
        {
          path: 'export',
          name: 'ComponentGridToolbarExport',
          component: () => import('@/views/grid/toolbar/export/CodeExample.vue')
        },
        {
          path: 'refresh',
          name: 'ComponentGridToolbarRefresh',
          component: () => import('@/views/grid/toolbar/refresh/CodeExample.vue')
        },
        {
          path: 'full',
          name: 'ComponentGridToolbarFull',
          component: () => import('@/views/grid/toolbar/full/CodeExample.vue')
        },
        {
          path: 'icon',
          name: 'ComponentGridToolbarIcon',
          component: () => import('@/views/grid/toolbar/icon/CodeExample.vue')
        },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            {
              path: 'buttons',
              name: 'ComponentGridToolbarTemplateButtons',
              component: () => import('@/views/grid/toolbar/template/buttons/CodeExample.vue')
            },
            {
              path: 'buttonPrefix',
              name: 'ComponentGridToolbarTemplateButtonPrefix',
              component: () => import('@/views/grid/toolbar/template/buttonPrefix/CodeExample.vue')
            },
            {
              path: 'buttonSuffix',
              name: 'ComponentGridToolbarTemplateButtonSuffix',
              component: () => import('@/views/grid/toolbar/template/buttonSuffix/CodeExample.vue')
            },
            {
              path: 'tools',
              name: 'ComponentGridToolbarTemplateTools',
              component: () => import('@/views/grid/toolbar/template/tools/CodeExample.vue')
            },
            {
              path: 'toolPrefix',
              name: 'ComponentGridToolbarTemplateToolPrefix',
              component: () => import('@/views/grid/toolbar/template/toolPrefix/CodeExample.vue')
            },
            {
              path: 'toolSuffix',
              name: 'ComponentGridToolbarTemplateToolSuffix',
              component: () => import('@/views/grid/toolbar/template/toolSuffix/CodeExample.vue')
            }
          ]
        }
      ]
    },
    {
      path: 'custom',
      component: RouteLayout,
      children: [
        {
          path: 'toolbar',
          name: 'ComponentGridCustomToolbar',
          component: () => import('@/views/grid/custom/toolbar/CodeExample.vue')
        },
        {
          path: 'modal',
          name: 'ComponentGridCustomModal',
          component: () => import('@/views/grid/custom/modal/CodeExample.vue')
        },
        {
          path: 'drawer',
          name: 'ComponentGridCustomDrawer',
          component: () => import('@/views/grid/custom/drawer/CodeExample.vue')
        },
        {
          path: 'defHide',
          name: 'ComponentGridCustomDefHide',
          component: () => import('@/views/grid/custom/defHide/CodeExample.vue')
        },
        {
          path: 'checkMethod',
          name: 'ComponentGridCustomCheckMethod',
          component: () => import('@/views/grid/custom/checkMethod/CodeExample.vue')
        },
        {
          path: 'visibleMethod',
          name: 'ComponentGridCustomVisibleMethod',
          component: () => import('@/views/grid/custom/visibleMethod/CodeExample.vue')
        },
        {
          path: 'resizableWidth',
          name: 'ComponentGridCustomResizableWidth',
          component: () => import('@/views/grid/custom/resizableWidth/CodeExample.vue')
        },
        // {
        //   path: 'visible',
        //   name: 'ComponentGridCustomVisible',
        //   component: () => import('@/views/grid/custom/visible/CodeExample.vue')
        // },
        // {
        //   path: 'fixed',
        //   name: 'ComponentGridCustomFixed',
        //   component: () => import('@/views/grid/custom/fixed/CodeExample.vue')
        // },
        // {
        //   path: 'resizable',
        //   name: 'ComponentGridCustomResizable',
        //   component: () => import('@/views/grid/custom/resizable/CodeExample.vue')
        // },
        // {
        //   path: 'sort',
        //   name: 'ComponentGridCustomSort',
        //   component: () => import('@/views/grid/custom/sort/CodeExample.vue')
        // },
        // {
        //   path: 'template',
        //   name: 'ComponentGridCustomTemplate',
        //   component: () => import('@/views/grid/custom/template/CodeExample.vue')
        // },
        {
          path: 'placement',
          name: 'ComponentGridCustomPlacement',
          component: () => import('@/views/grid/custom/placement/CodeExample.vue')
        },
        {
          path: 'storage',
          name: 'ComponentGridCustomStorage',
          component: () => import('@/views/grid/custom/storage/CodeExample.vue')
        },
        {
          path: 'events',
          name: 'ComponentGridCustomEvents',
          component: () => import('@/views/grid/custom/events/CodeExample.vue')
        },
        {
          path: 'immediate',
          name: 'ComponentGridCustomImmediate',
          component: () => import('@/views/grid/custom/immediate/CodeExample.vue')
        },
        {
          path: 'remote',
          name: 'ComponentGridCustomRemote',
          component: () => import('@/views/grid/custom/remote/CodeExample.vue')
        },
        {
          path: 'remoteFull',
          name: 'ComponentGridCustomRemoteFull',
          component: () => import('@/views/grid/custom/remoteFull/CodeExample.vue')
        },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            {
              path: 'top',
              name: 'ComponentGridCustomTemplateTop',
              component: () => import('@/views/grid/custom/template/top/CodeExample.vue')
            },
            {
              path: 'header',
              name: 'ComponentGridCustomTemplateHeader',
              component: () => import('@/views/grid/custom/template/header/CodeExample.vue')
            },
            {
              path: 'bottom',
              name: 'ComponentGridCustomTemplateBottom',
              component: () => import('@/views/grid/custom/template/bottom/CodeExample.vue')
            },
            {
              path: 'default',
              name: 'ComponentGridCustomTemplateDefault',
              component: () => import('@/views/grid/custom/template/default/CodeExample.vue')
            },
            {
              path: 'footer',
              name: 'ComponentGridCustomTemplateFooter',
              component: () => import('@/views/grid/custom/template/footer/CodeExample.vue')
            }
          ]
        }
      ]
    },
    {
      path: 'pager',
      component: RouteLayout,
      children: [
        {
          path: 'mockPage',
          name: 'ComponentGridPagerMockPage',
          component: () => import('@/views/grid/pager/mockPage/CodeExample.vue')
        },
        {
          path: 'layouts',
          name: 'ComponentGridPagerLayouts',
          component: () => import('@/views/grid/pager/layouts/CodeExample.vue')
        },
        {
          path: 'start',
          name: 'ComponentGridPagerStart',
          component: () => import('@/views/grid/pager/start/CodeExample.vue')
        },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            {
              path: 'pager',
              name: 'ComponentGridPagerTemplatePager',
              component: () => import('@/views/grid/pager/template/pager/CodeExample.vue')
            },
            {
              path: 'left',
              name: 'ComponentGridPagerTemplateLeft',
              component: () => import('@/views/grid/pager/template/left/CodeExample.vue')
            },
            {
              path: 'right',
              name: 'ComponentGridPagerTemplateRight',
              component: () => import('@/views/grid/pager/template/right/CodeExample.vue')
            },
            {
              path: 'func',
              name: 'ComponentGridPagerTemplateFunc',
              component: () => import('@/views/grid/pager/template/func/CodeExample.vue')
            }
          ]
        }
      ]
    },
    {
      path: 'tree',
      component: RouteLayout,
      children: [
        {
          path: 'leveling',
          name: 'ComponentGridTreeLeveling',
          component: () => import('@/views/grid/tree/leveling/CodeExample.vue')
        },
        {
          path: 'hierarchy',
          name: 'ComponentGridTreeHierarchy',
          component: () => import('@/views/grid/tree/hierarchy/CodeExample.vue')
        },
        {
          path: 'stripe',
          name: 'ComponentGridTreeStripe',
          component: () => import('@/views/grid/tree/stripe/CodeExample.vue')
        },
        {
          path: 'seqMode',
          name: 'ComponentGridTreeSeqMode',
          component: () => import('@/views/grid/tree/seqMode/CodeExample.vue')
        },
        {
          path: 'line',
          name: 'ComponentGridTreeLine',
          component: () => import('@/views/grid/tree/line/CodeExample.vue')
        },
        {
          path: 'radio',
          name: 'ComponentGridTreeRadio',
          component: () => import('@/views/grid/tree/radio/CodeExample.vue')
        },
        {
          path: 'expandRowKeys',
          name: 'ComponentGridTreeExpandRowKeys',
          component: () => import('@/views/grid/tree/expandRowKeys/CodeExample.vue')
        },
        {
          path: 'checkbox',
          component: RouteLayout,
          children: [
            {
              path: 'base',
              name: 'ComponentGridTreeCheckboxBase',
              component: () => import('@/views/grid/tree/checkbox/base/CodeExample.vue')
            },
            {
              path: 'labelField',
              name: 'ComponentGridTreeCheckboxLabelField',
              component: () => import('@/views/grid/tree/checkbox/labelField/CodeExample.vue')
            },
            {
              path: 'checkStrictly',
              name: 'ComponentGridTreeCheckboxCheckStrictly',
              component: () => import('@/views/grid/tree/checkbox/checkStrictly/CodeExample.vue')
            },
            {
              path: 'strictlyHeader',
              name: 'ComponentGridTreeCheckboxStrictlyHeader',
              component: () => import('@/views/grid/tree/checkbox/strictlyHeader/CodeExample.vue')
            }
          ]
        },
        {
          path: 'group',
          name: 'ComponentGridTreeGroup',
          component: () => import('@/views/grid/tree/group/CodeExample.vue')
        },
        {
          path: 'groupFields',
          name: 'ComponentGridTreeGroupFields',
          component: () => import('@/views/grid/tree/groupFields/CodeExample.vue')
        },
        {
          path: 'lazy',
          name: 'ComponentGridTreeLazy',
          component: () => import('@/views/grid/tree/lazy/CodeExample.vue')
        }
      ]
    },
    {
      path: 'validate',
      component: RouteLayout,
      children: [
        {
          path: 'rules',
          name: 'ComponentGridValidateRules',
          component: () => import('@/views/grid/validate/rules/CodeExample.vue')
        },
        {
          path: 'string',
          name: 'ComponentGridValidateString',
          component: () => import('@/views/grid/validate/string/CodeExample.vue')
        },
        {
          path: 'number',
          name: 'ComponentGridValidateNumber',
          component: () => import('@/views/grid/validate/number/CodeExample.vue')
        },
        {
          path: 'regexp',
          name: 'ComponentGridValidateRegexp',
          component: () => import('@/views/grid/validate/regexp/CodeExample.vue')
        },
        {
          path: 'array',
          name: 'ComponentGridValidateArray',
          component: () => import('@/views/grid/validate/array/CodeExample.vue')
        },
        {
          path: 'custom',
          name: 'ComponentGridValidateCustom',
          component: () => import('@/views/grid/validate/custom/CodeExample.vue')
        },
        {
          path: 'mode',
          name: 'ComponentGridValidateMode',
          component: () => import('@/views/grid/validate/mode/CodeExample.vue')
        },
        {
          path: 'validateField',
          name: 'ComponentGridValidateValidateField',
          component: () => import('@/views/grid/validate/validateField/CodeExample.vue')
        },
        {
          path: 'theme',
          name: 'ComponentGridValidateTheme',
          component: () => import('@/views/grid/validate/theme/CodeExample.vue')
        },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            {
              path: 'edit',
              name: 'ComponentGridValidateTemplateEdit',
              component: () => import('@/views/grid/validate/template/edit/CodeExample.vue')
            },
            {
              path: 'valid',
              name: 'ComponentGridValidateTemplateValid',
              component: () => import('@/views/grid/validate/template/valid/CodeExample.vue')
            }
          ]
        }
      ]
    },
    {
      path: 'cellRender',
      component: RouteLayout,
      children: [
        {
          path: 'format-number-input',
          name: 'ComponentGridCellRenderFormatNumberInput',
          component: () => import('@/views/grid/cellRender/format-number-input/CodeExample.vue')
        },
        {
          path: 'format-option',
          name: 'ComponentGridCellRenderFormatOption',
          component: () => import('@/views/grid/cellRender/format-option/CodeExample.vue')
        },
        {
          path: 'format-tree',
          name: 'ComponentGridCellRenderFormatTree',
          component: () => import('@/views/grid/cellRender/format-tree/CodeExample.vue')
        },
        {
          path: 'vxe-switch',
          name: 'ComponentGridCellRenderVxeSwitch',
          component: () => import('@/views/grid/cellRender/vxe-switch/CodeExample.vue')
        },
        {
          path: 'vxe-radio',
          name: 'ComponentGridCellRenderVxeRadioGroup',
          component: () => import('@/views/grid/cellRender/vxe-radio-group/CodeExample.vue')
        },
        {
          path: 'vxe-checkbox',
          name: 'ComponentGridCellRenderVxeCheckboxGroup',
          component: () => import('@/views/grid/cellRender/vxe-checkbox-group/CodeExample.vue')
        },
        {
          path: 'vxe-button-group',
          name: 'ComponentGridCellRenderVxeButtonGroup',
          component: () => import('@/views/grid/cellRender/vxe-button-group/CodeExample.vue')
        },
        {
          path: 'vxe-image',
          name: 'ComponentGridCellRenderVxeImage',
          component: () => import('@/views/grid/cellRender/vxe-image/CodeExample.vue')
        },
        {
          path: 'vxe-image-group',
          name: 'ComponentGridCellRenderVxeImageGroup',
          component: () => import('@/views/grid/cellRender/vxe-image-group/CodeExample.vue')
        },
        {
          path: 'vxe-text-ellipsis',
          name: 'ComponentGridCellRenderVxeTextEllipsis',
          component: () => import('@/views/grid/cellRender/vxe-text-ellipsis/CodeExample.vue')
        },
        {
          path: 'vxe-rate',
          name: 'ComponentGridCellRenderVxeRate',
          component: () => import('@/views/grid/cellRender/vxe-rate/CodeExample.vue')
        },
        {
          path: 'vxe-upload',
          name: 'ComponentGridCellRenderVxeUpload',
          component: () => import('@/views/grid/cellRender/vxe-upload/CodeExample.vue')
        }
      ]
    },
    {
      path: 'cellTemplate',
      component: RouteLayout,
      children: [
        {
          path: 'vxe-tag',
          name: 'ComponentGridCellTemplateVxeTag',
          component: () => import('@/views/grid/cellTemplate/vxe-tag/CodeExample.vue')
        },
        {
          path: 'vxe-switch',
          name: 'ComponentGridCellTemplateVxeSwitch',
          component: () => import('@/views/grid/cellTemplate/vxe-switch/CodeExample.vue')
        },
        {
          path: 'vxe-button-group',
          name: 'ComponentGridCellTemplateVxeButtonGroup',
          component: () => import('@/views/grid/cellTemplate/vxe-button-group/CodeExample.vue')
        },
        {
          path: 'vxe-button',
          name: 'ComponentGridCellTemplateVxeButton',
          component: () => import('@/views/grid/cellTemplate/vxe-button/CodeExample.vue')
        },
        {
          path: 'vxe-image',
          name: 'ComponentGridCellTemplateVxeImage',
          component: () => import('@/views/grid/cellTemplate/vxe-image/CodeExample.vue')
        },
        {
          path: 'vxe-upload',
          name: 'ComponentGridCellTemplateVxeUpload',
          component: () => import('@/views/grid/cellTemplate/vxe-upload/CodeExample.vue')
        },
        {
          path: 'vxe-modal',
          name: 'ComponentGridCellTemplateVxeModal',
          component: () => import('@/views/grid/cellTemplate/vxe-modal/CodeExample.vue')
        },
        {
          path: 'vxe-drawer',
          name: 'ComponentGridCellTemplateVxeDrawer',
          component: () => import('@/views/grid/cellTemplate/vxe-drawer/CodeExample.vue')
        },
        {
          path: 'allEdit',
          name: 'ComponentGridCellTemplateAllEdit',
          component: () => import('@/views/grid/cellTemplate/allEdit/CodeExample.vue')
        }
      ]
    },
    {
      path: 'keyboard',
      component: RouteLayout,
      children: [
        {
          path: 'selected',
          name: 'ComponentGridKeyboardSelected',
          component: () => import('@/views/grid/keyboard/selected/CodeExample.vue')
        },
        {
          path: 'keyboard',
          name: 'ComponentGridKeyboardKeyboard',
          component: () => import('@/views/grid/keyboard/keyboard/CodeExample.vue')
        },
        {
          path: 'currRow',
          name: 'ComponentGridKeyboardCurrRow',
          component: () => import('@/views/grid/keyboard/currRow/CodeExample.vue')
        },
        {
          path: 'currColumn',
          name: 'ComponentGridKeyboardCurrColumn',
          component: () => import('@/views/grid/keyboard/currColumn/CodeExample.vue')
        },
        {
          path: 'currRowCol',
          name: 'ComponentGridKeyboardCurrRowCol',
          component: () => import('@/views/grid/keyboard/currRowCol/CodeExample.vue')
        },
        {
          path: 'enterAppend',
          name: 'ComponentGridKeyboardEnterAppend',
          component: () => import('@/views/grid/keyboard/enterAppend/CodeExample.vue')
        },
        {
          path: 'edit',
          name: 'ComponentGridKeyboardEdit',
          component: () => import('@/views/grid/keyboard/edit/CodeExample.vue')
        },
        {
          path: 'editMethod',
          name: 'ComponentGridKeyboardEditMethod',
          component: () => import('@/views/grid/keyboard/editMethod/CodeExample.vue')
        },
        {
          path: 'tree',
          name: 'ComponentGridKeyboardTree',
          component: () => import('@/views/grid/keyboard/tree/CodeExample.vue')
        },
        {
          path: 'treeEdit',
          name: 'ComponentGridKeyboardTreeEdit',
          component: () => import('@/views/grid/keyboard/treeEdit/CodeExample.vue')
        }
      ]
    },
    {
      path: 'edit',
      component: RouteLayout,
      children: [
        {
          path: 'manual',
          name: 'ComponentGridEditManual',
          component: () => import('@/views/grid/edit/manual/CodeExample.vue')
        },
        {
          path: 'click',
          name: 'ComponentGridEditClick',
          component: () => import('@/views/grid/edit/click/CodeExample.vue')
        },
        {
          path: 'dblclick',
          name: 'ComponentGridEditDblclick',
          component: () => import('@/views/grid/edit/dblclick/CodeExample.vue')
        },
        {
          path: 'cellDisable',
          name: 'ComponentGridEditCellDisable',
          component: () => import('@/views/grid/edit/cellDisable/CodeExample.vue')
        },
        {
          path: 'mode',
          name: 'ComponentGridEditMode',
          component: () => import('@/views/grid/edit/mode/CodeExample.vue')
        },
        {
          path: 'rowDisable',
          name: 'ComponentGridEditRowDisable',
          component: () => import('@/views/grid/edit/rowDisable/CodeExample.vue')
        },
        {
          path: 'cellValid',
          name: 'ComponentGridEditCellValid',
          component: () => import('@/views/grid/edit/cellValid/CodeExample.vue')
        },
        {
          path: 'rowValid',
          name: 'ComponentGridEditRowValid',
          component: () => import('@/views/grid/edit/rowValid/CodeExample.vue')
        },
        {
          path: 'handleTemp',
          component: RouteLayout,
          children: [
            {
              path: 'insert',
              name: 'ComponentGridEditHandleTempInsert',
              component: () => import('@/views/grid/edit/handleTemp/insert/CodeExample.vue')
            },
            {
              path: 'remove',
              name: 'ComponentGridEditHandleTempRemove',
              component: () => import('@/views/grid/edit/handleTemp/remove/CodeExample.vue')
            },
            {
              path: 'pending',
              name: 'ComponentGridEditHandleTempPending',
              component: () => import('@/views/grid/edit/handleTemp/pending/CodeExample.vue')
            },
            {
              path: 'update',
              name: 'ComponentGridEditHandleTempUpdate',
              component: () => import('@/views/grid/edit/handleTemp/update/CodeExample.vue')
            },
            {
              path: 'revert',
              name: 'ComponentGridEditHandleTempRevert',
              component: () => import('@/views/grid/edit/handleTemp/revert/CodeExample.vue')
            }
          ]
        },
        {
          path: 'handleOriginal',
          component: RouteLayout,
          children: [
            {
              path: 'insert',
              name: 'ComponentGridEditHandleOriginalInsert',
              component: () => import('@/views/grid/edit/handleOriginal/insert/CodeExample.vue')
            },
            {
              path: 'remove',
              name: 'ComponentGridEditHandleOriginalRemove',
              component: () => import('@/views/grid/edit/handleOriginal/remove/CodeExample.vue')
            },
            {
              path: 'update',
              name: 'ComponentGridEditHandleOriginalUpdate',
              component: () => import('@/views/grid/edit/handleOriginal/update/CodeExample.vue')
            }
          ]
        },
        {
          path: 'showNegativeStatus',
          name: 'ComponentGridEditShowNegativeStatus',
          component: () => import('@/views/grid/edit/showNegativeStatus/CodeExample.vue')
        },
        {
          path: 'rowImmediately',
          name: 'ComponentGridEditRowImmediately',
          component: () => import('@/views/grid/edit/rowImmediately/CodeExample.vue')
        },
        {
          path: 'footerImmediately',
          name: 'ComponentGridEditFooterImmediately',
          component: () => import('@/views/grid/edit/footerImmediately/CodeExample.vue')
        },
        {
          path: 'modalForm',
          name: 'ComponentGridEditModalForm',
          component: () => import('@/views/grid/edit/modalForm/CodeExample.vue')
        },
        {
          path: 'modalSelect',
          name: 'ComponentGridEditModalSelect',
          component: () => import('@/views/grid/edit/modalSelect/CodeExample.vue')
        },
        {
          path: 'drawerForm',
          name: 'ComponentGridEditDrawerForm',
          component: () => import('@/views/grid/edit/drawerForm/CodeExample.vue')
        },
        {
          path: 'drawerSelect',
          name: 'ComponentGridEditDrawerSelect',
          component: () => import('@/views/grid/edit/drawerSelect/CodeExample.vue')
        }
      ]
    },
    {
      path: 'editRender',
      component: RouteLayout,
      children: [
        {
          path: 'input',
          name: 'ComponentGridEditRenderInput',
          component: () => import('@/views/grid/editRender/input/CodeExample.vue')
        },
        {
          path: 'select',
          name: 'ComponentGridEditRenderSelect',
          component: () => import('@/views/grid/editRender/select/CodeExample.vue')
        },
        {
          path: 'vxe-input',
          name: 'ComponentGridEditRenderVxeInput',
          component: () => import('@/views/grid/editRender/vxe-input/CodeExample.vue')
        },
        {
          path: 'vxe-number-input',
          name: 'ComponentGridEditRenderVxeNumberInput',
          component: () => import('@/views/grid/editRender/vxe-number-input/CodeExample.vue')
        },
        {
          path: 'vxe-icon-picker',
          name: 'ComponentGridEditRenderVxeIconPicker',
          component: () => import('@/views/grid/editRender/vxe-icon-picker/CodeExample.vue')
        },
        {
          path: 'vxe-color-picker',
          name: 'ComponentGridEditRenderVxeColorPicker',
          component: () => import('@/views/grid/editRender/vxe-color-picker/CodeExample.vue')
        },
        {
          path: 'vxe-date-picker',
          name: 'ComponentGridEditRenderVxeDatePicker',
          component: () => import('@/views/grid/editRender/vxe-date-picker/CodeExample.vue')
        },
        {
          path: 'vxe-select',
          name: 'ComponentGridEditRenderVxeSelect',
          component: () => import('@/views/grid/editRender/vxe-select/CodeExample.vue')
        },
        {
          path: 'vxe-tree-select',
          name: 'ComponentGridEditRenderVxeTreeSelect',
          component: () => import('@/views/grid/editRender/vxe-tree-select/CodeExample.vue')
        },
        {
          path: 'vxe-table-select',
          name: 'ComponentGridEditRenderVxeTableSelect',
          component: () => import('@/views/grid/editRender/vxe-table-select/CodeExample.vue')
        },
        {
          path: 'events',
          name: 'ComponentGridEditRenderEvents',
          component: () => import('@/views/grid/editRender/events/CodeExample.vue')
        },
        {
          path: 'cellDisable',
          name: 'ComponentGridEditRenderCellDisable',
          component: () => import('@/views/grid/editRender/cellDisable/CodeExample.vue')
        },
        {
          path: 'rowDisable',
          name: 'ComponentGridEditRenderRowDisable',
          component: () => import('@/views/grid/editRender/rowDisable/CodeExample.vue')
        },
        {
          path: 'readonly',
          name: 'ComponentGridEditRenderReadonly',
          component: () => import('@/views/grid/editRender/readonly/CodeExample.vue')
        }
      ]
    },
    {
      path: 'editTemplate',
      component: RouteLayout,
      children: [
        {
          path: 'vxe-input',
          name: 'ComponentGridEditTemplateVxeInput',
          component: () => import('@/views/grid/editTemplate/vxe-input/CodeExample.vue')
        },
        {
          path: 'vxe-number-input',
          name: 'ComponentGridEditTemplateVxeNumberInput',
          component: () => import('@/views/grid/editTemplate/vxe-number-input/CodeExample.vue')
        },
        {
          path: 'vxe-icon-picker',
          name: 'ComponentGridEditTemplateVxeIconPicker',
          component: () => import('@/views/grid/editTemplate/vxe-icon-picker/CodeExample.vue')
        },
        {
          path: 'vxe-date-picker',
          name: 'ComponentGridEditTemplateVxeDatePicker',
          component: () => import('@/views/grid/editTemplate/vxe-date-picker/CodeExample.vue')
        },
        {
          path: 'vxe-select',
          name: 'ComponentGridEditTemplateVxeSelect',
          component: () => import('@/views/grid/editTemplate/vxe-select/CodeExample.vue')
        },
        {
          path: 'vxe-tree-select',
          name: 'ComponentGridEditTemplateVxeTreeSelect',
          component: () => import('@/views/grid/editTemplate/vxe-tree-select/CodeExample.vue')
        },
        {
          path: 'vxe-table-select',
          name: 'ComponentGridEditTemplateVxeTableSelect',
          component: () => import('@/views/grid/editTemplate/vxe-table-select/CodeExample.vue')
        },
        {
          path: 'vxe-pulldown',
          name: 'ComponentGridEditTemplateVxePulldown',
          component: () => import('@/views/grid/editTemplate/vxe-pulldown/CodeExample.vue')
        },
        {
          path: 'vxe-modal',
          name: 'ComponentGridEditTemplateVxeModal',
          component: () => import('@/views/grid/editTemplate/vxe-modal/CodeExample.vue')
        },
        {
          path: 'vxe-drawer',
          name: 'ComponentGridEditTemplateVxeDrawer',
          component: () => import('@/views/grid/editTemplate/vxe-drawer/CodeExample.vue')
        }
      ]
    },
    {
      path: 'template',
      component: RouteLayout,
      children: [
        {
          path: 'layout',
          name: 'ComponentGridTemplateLayout',
          component: () => import('@/views/grid/template/layout/CodeExample.vue')
        },
        {
          path: 'default',
          name: 'ComponentGridTemplateDefault',
          component: () => import('@/views/grid/template/default/CodeExample.vue')
        },
        {
          path: 'header',
          name: 'ComponentGridTemplateHeader',
          component: () => import('@/views/grid/template/header/CodeExample.vue')
        },
        {
          path: 'footer',
          name: 'ComponentGridTemplateFooter',
          component: () => import('@/views/grid/template/footer/CodeExample.vue')
        },
        {
          path: 'checkbox',
          name: 'ComponentGridTemplateCheckbox',
          component: () => import('@/views/grid/template/checkbox/CodeExample.vue')
        },
        {
          path: 'radio',
          name: 'ComponentGridTemplateRadio',
          component: () => import('@/views/grid/template/radio/CodeExample.vue')
        },
        {
          path: 'content',
          name: 'ComponentGridTemplateContent',
          component: () => import('@/views/grid/template/content/CodeExample.vue')
        },
        {
          path: 'filter',
          name: 'ComponentGridTemplateFilter',
          component: () => import('@/views/grid/template/filter/CodeExample.vue')
        },
        {
          path: 'edit',
          name: 'ComponentGridTemplateEdit',
          component: () => import('@/views/grid/template/edit/CodeExample.vue')
        },
        {
          path: 'valid',
          name: 'ComponentGridTemplateValid',
          component: () => import('@/views/grid/template/valid/CodeExample.vue')
        }
      ]
    },
    {
      path: 'import',
      component: RouteLayout,
      children: [
        {
          path: 'base',
          name: 'ComponentGridImportBase',
          component: () => import('@/views/grid/import/base/CodeExample.vue')
        },
        {
          path: 'txt',
          name: 'ComponentGridImportTxt',
          component: () => import('@/views/grid/import/txt/CodeExample.vue')
        },
        {
          path: 'xml',
          name: 'ComponentGridImportXml',
          component: () => import('@/views/grid/import/xml/CodeExample.vue')
        },
        {
          path: 'html',
          name: 'ComponentGridImportHtml',
          component: () => import('@/views/grid/import/html/CodeExample.vue')
        },
        {
          path: 'csv',
          name: 'ComponentGridImportCsv',
          component: () => import('@/views/grid/import/csv/CodeExample.vue')
        },
        {
          path: 'advanced',
          name: 'ComponentGridImportAdvanced',
          component: () => import('@/views/grid/import/advanced/CodeExample.vue')
        },
        {
          path: 'remote',
          name: 'ComponentGridImportRemote',
          component: () => import('@/views/grid/import/remote/CodeExample.vue')
        },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            {
              path: 'top',
              name: 'ComponentGridImportTemplateTop',
              component: () => import('@/views/grid/import/template/top/CodeExample.vue')
            },
            {
              path: 'bottom',
              name: 'ComponentGridImportTemplateBottom',
              component: () => import('@/views/grid/import/template/bottom/CodeExample.vue')
            },
            {
              path: 'default',
              name: 'ComponentGridImportTemplateDefault',
              component: () => import('@/views/grid/import/template/default/CodeExample.vue')
            },
            {
              path: 'footer',
              name: 'ComponentGridImportTemplateFooter',
              component: () => import('@/views/grid/import/template/footer/CodeExample.vue')
            }
          ]
        }
      ]
    },
    {
      path: 'export',
      component: RouteLayout,
      children: [
        {
          path: 'base',
          name: 'ComponentGridExportBase',
          component: () => import('@/views/grid/export/base/CodeExample.vue')
        },
        {
          path: 'txt',
          name: 'ComponentGridExportTxt',
          component: () => import('@/views/grid/export/txt/CodeExample.vue')
        },
        {
          path: 'xml',
          name: 'ComponentGridExportXml',
          component: () => import('@/views/grid/export/xml/CodeExample.vue')
        },
        {
          path: 'html',
          name: 'ComponentGridExportHtml',
          component: () => import('@/views/grid/export/html/CodeExample.vue')
        },
        {
          path: 'csv',
          name: 'ComponentGridExportCsv',
          component: () => import('@/views/grid/export/csv/CodeExample.vue')
        },
        {
          path: 'data',
          name: 'ComponentGridExportData',
          component: () => import('@/views/grid/export/data/CodeExample.vue')
        },
        {
          path: 'exportMethod',
          name: 'ComponentGridExportExportMethod',
          component: () => import('@/views/grid/export/exportMethod/CodeExample.vue')
        },
        {
          path: 'advanced',
          name: 'ComponentGridExportAdvanced',
          component: () => import('@/views/grid/export/advanced/CodeExample.vue')
        },
        {
          path: 'includeFields',
          name: 'ComponentGridExportIncludeFields',
          component: () => import('@/views/grid/export/includeFields/CodeExample.vue')
        },
        {
          path: 'excludeFields',
          name: 'ComponentGridExportExcludeFields',
          component: () => import('@/views/grid/export/excludeFields/CodeExample.vue')
        },
        {
          path: 'types',
          name: 'ComponentGridExportTypes',
          component: () => import('@/views/grid/export/types/CodeExample.vue')
        },
        {
          path: 'remote',
          name: 'ComponentGridExportRemote',
          component: () => import('@/views/grid/export/remote/CodeExample.vue')
        },
        {
          path: 'modes',
          name: 'ComponentGridExportModes',
          component: () => import('@/views/grid/export/modes/CodeExample.vue')
        },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            {
              path: 'top',
              name: 'ComponentGridExportTemplateTop',
              component: () => import('@/views/grid/export/template/top/CodeExample.vue')
            },
            {
              path: 'parameter',
              name: 'ComponentGridExportTemplateParameter',
              component: () => import('@/views/grid/export/template/parameter/CodeExample.vue')
            },
            {
              path: 'bottom',
              name: 'ComponentGridExportTemplateBottom',
              component: () => import('@/views/grid/export/template/bottom/CodeExample.vue')
            },
            {
              path: 'default',
              name: 'ComponentGridExportTemplateDefault',
              component: () => import('@/views/grid/export/template/default/CodeExample.vue')
            },
            {
              path: 'footer',
              name: 'ComponentGridExportTemplateFooter',
              component: () => import('@/views/grid/export/template/footer/CodeExample.vue')
            }
          ]
        }
      ]
    },
    {
      path: 'print',
      component: RouteLayout,
      children: [
        {
          path: 'base',
          name: 'ComponentGridPrintBase',
          component: () => import('@/views/grid/print/base/CodeExample.vue')
        },
        {
          path: 'beforeMethod',
          name: 'ComponentGridPrintBeforeMethod',
          component: () => import('@/views/grid/print/beforeMethod/CodeExample.vue')
        },
        {
          path: 'advanced',
          name: 'ComponentGridPrintAdvanced',
          component: () => import('@/views/grid/print/advanced/CodeExample.vue')
        },
        {
          path: 'columns',
          name: 'ComponentGridPrintColumns',
          component: () => import('@/views/grid/print/columns/CodeExample.vue')
        },
        {
          path: 'page',
          name: 'ComponentGridPrintPage',
          component: () => import('@/views/grid/print/page/CodeExample.vue')
        },
        {
          path: 'multilist',
          name: 'ComponentGridPrintMultilist',
          component: () => import('@/views/grid/print/multilist/CodeExample.vue')
        },
        {
          path: 'header',
          name: 'ComponentGridPrintHeader',
          component: () => import('@/views/grid/print/header/CodeExample.vue')
        },
        {
          path: 'footer',
          name: 'ComponentGridPrintFooter',
          component: () => import('@/views/grid/print/footer/CodeExample.vue')
        },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            {
              path: 'top',
              name: 'ComponentGridPrintTemplateTop',
              component: () => import('@/views/grid/print/template/top/CodeExample.vue')
            },
            {
              path: 'parameter',
              name: 'ComponentGridPrintTemplateParameter',
              component: () => import('@/views/grid/print/template/parameter/CodeExample.vue')
            },
            {
              path: 'bottom',
              name: 'ComponentGridPrintTemplateBottom',
              component: () => import('@/views/grid/print/template/bottom/CodeExample.vue')
            },
            {
              path: 'default',
              name: 'ComponentGridPrintTemplateDefault',
              component: () => import('@/views/grid/print/template/default/CodeExample.vue')
            },
            {
              path: 'footer',
              name: 'ComponentGridPrintTemplateFooter',
              component: () => import('@/views/grid/print/template/footer/CodeExample.vue')
            }
          ]
        },
        {
          path: 'order',
          name: 'ComponentGridPrintOrder',
          component: () => import('@/views/grid/print/order/CodeExample.vue')
        }
      ]
    },
    {
      path: 'scroll',
      component: RouteLayout,
      children: [
        {
          path: 'vertical',
          name: 'ComponentGridScrollVertical',
          component: () => import('@/views/grid/scroll/vertical/CodeExample.vue')
        },
        {
          path: 'horizontal',
          name: 'ComponentGridScrollHorizontal',
          component: () => import('@/views/grid/scroll/horizontal/CodeExample.vue')
        },
        {
          path: 'hv',
          name: 'ComponentGridScrollHV',
          component: () => import('@/views/grid/scroll/hv/CodeExample.vue')
        },
        {
          path: 'loadData',
          name: 'ComponentGridScrollLoadData',
          component: () => import('@/views/grid/scroll/loadData/CodeExample.vue')
        },
        {
          path: 'fixed',
          name: 'ComponentGridScrollFixed',
          component: () => import('@/views/grid/scroll/fixed/CodeExample.vue')
        },
        {
          path: 'mode',
          name: 'ComponentGridScrollMode',
          component: () => import('@/views/grid/scroll/mode/CodeExample.vue')
        },
        {
          path: 'rowHeight',
          name: 'ComponentGridScrollRowHeight',
          component: () => import('@/views/grid/scroll/rowHeight/CodeExample.vue')
        },
        {
          path: 'autoRowHeight',
          name: 'ComponentGridScrollAutoRowHeight',
          component: () => import('@/views/grid/scroll/autoRowHeight/CodeExample.vue')
        },
        {
          path: 'autoRowVH',
          name: 'ComponentGridScrollAutoRowVH',
          component: () => import('@/views/grid/scroll/autoRowVH/CodeExample.vue')
        },
        {
          path: 'autoRowFixed',
          name: 'ComponentGridScrollAutoRowFixed',
          component: () => import('@/views/grid/scroll/autoRowFixed/CodeExample.vue')
        },
        {
          path: 'dragRow',
          name: 'ComponentGridScrollDragRow',
          component: () => import('@/views/grid/scroll/dragRow/CodeExample.vue')
        },
        {
          path: 'dragCol',
          name: 'ComponentGridScrollDragCol',
          component: () => import('@/views/grid/scroll/dragCol/CodeExample.vue')
        },
        {
          path: 'group',
          name: 'ComponentGridScrollGroup',
          component: () => import('@/views/grid/scroll/group/CodeExample.vue')
        },
        {
          path: 'footer',
          name: 'ComponentGridScrollFooter',
          component: () => import('@/views/grid/scroll/footer/CodeExample.vue')
        },
        {
          path: 'merge',
          name: 'ComponentGridScrollMerge',
          component: () => import('@/views/grid/scroll/merge/CodeExample.vue')
        },
        {
          path: 'tree',
          name: 'ComponentGridScrollTree',
          component: () => import('@/views/grid/scroll/tree/CodeExample.vue')
        },
        {
          path: 'hvTree',
          name: 'ComponentGridScrollHVTree',
          component: () => import('@/views/grid/scroll/hvTree/CodeExample.vue')
        },
        {
          path: 'dragTree',
          name: 'ComponentGridScrollDragTree',
          component: () => import('@/views/grid/scroll/dragTree/CodeExample.vue')
        },
        {
          path: 'expand',
          name: 'ComponentGridScrollExpand',
          component: () => import('@/views/grid/scroll/expand/CodeExample.vue')
        },
        {
          path: 'expandFixed',
          name: 'ComponentGridScrollExpandFixed',
          component: () => import('@/views/grid/scroll/expandFixed/CodeExample.vue')
        },
        {
          path: 'edit',
          name: 'ComponentGridScrollEdit',
          component: () => import('@/views/grid/scroll/edit/CodeExample.vue')
        },
        {
          path: 'hvEdit',
          name: 'ComponentGridScrollHVEdit',
          component: () => import('@/views/grid/scroll/hvEdit/CodeExample.vue')
        },
        {
          path: 'bigData',
          name: 'ComponentGridScrollBigData',
          component: () => import('@/views/grid/scroll/bigData/CodeExample.vue')
        }
      ]
    },
    {
      path: 'proxy',
      component: RouteLayout,
      children: [
        {
          path: 'query',
          name: 'ComponentGridProxyQuery',
          component: () => import('@/views/grid/proxy/query/CodeExample.vue')
        },
        {
          path: 'pager',
          name: 'ComponentGridProxyPager',
          component: () => import('@/views/grid/proxy/pager/CodeExample.vue')
        },
        {
          path: 'sort',
          name: 'ComponentGridProxySort',
          component: () => import('@/views/grid/proxy/sort/CodeExample.vue')
        },
        {
          path: 'filter',
          name: 'ComponentGridProxyFilter',
          component: () => import('@/views/grid/proxy/filter/CodeExample.vue')
        },
        {
          path: 'form',
          name: 'ComponentGridProxyForm',
          component: () => import('@/views/grid/proxy/form/CodeExample.vue')
        },
        {
          path: 'seq',
          name: 'ComponentGridProxySeq',
          component: () => import('@/views/grid/proxy/seq/CodeExample.vue')
        },
        {
          path: 'toolbarQuery',
          name: 'ComponentGridProxyToolbarQuery',
          component: () => import('@/views/grid/proxy/toolbarQuery/CodeExample.vue')
        },
        {
          path: 'manualQuery',
          name: 'ComponentGridProxyManualQuery',
          component: () => import('@/views/grid/proxy/manualQuery/CodeExample.vue')
        },
        {
          path: 'toolbarExport',
          name: 'ComponentGridProxyToolbarExport',
          component: () => import('@/views/grid/proxy/toolbarExport/CodeExample.vue')
        },
        {
          path: 'toolbarRemoteExport',
          name: 'ComponentGridProxyToolbarRemoteExport',
          component: () => import('@/views/grid/proxy/toolbarRemoteExport/CodeExample.vue')
        },
        {
          path: 'toolbarDelete',
          name: 'ComponentGridProxyToolbarDelete',
          component: () => import('@/views/grid/proxy/toolbarDelete/CodeExample.vue')
        },
        {
          path: 'manualDelete',
          name: 'ComponentGridProxyManualDelete',
          component: () => import('@/views/grid/proxy/manualDelete/CodeExample.vue')
        },
        {
          path: 'toolbarMark',
          name: 'ComponentGridProxyToolbarMark',
          component: () => import('@/views/grid/proxy/toolbarMark/CodeExample.vue')
        },
        {
          path: 'manualMark',
          name: 'ComponentGridProxyManualMark',
          component: () => import('@/views/grid/proxy/manualMark/CodeExample.vue')
        },
        {
          path: 'toolbarSave',
          name: 'ComponentGridProxyToolbarSave',
          component: () => import('@/views/grid/proxy/toolbarSave/CodeExample.vue')
        },
        {
          path: 'manualSave',
          name: 'ComponentGridProxyManualSave',
          component: () => import('@/views/grid/proxy/manualSave/CodeExample.vue')
        }
      ]
    },
    {
      path: 'scrollbar',
      component: RouteLayout,
      children: [
        {
          path: 'barStyle',
          name: 'ComponentGridScrollbarBarStyle',
          component: () => import('@/views/grid/scrollbar/barStyle/CodeExample.vue')
        },
        {
          path: 'barPos',
          name: 'ComponentGridScrollbarBarPos',
          component: () => import('@/views/grid/scrollbar/barPos/CodeExample.vue')
        }
      ]
    },
    {
      path: 'search',
      component: RouteLayout,
      children: [
        {
          path: 'list',
          name: 'ComponentGridSearchList',
          component: () => import('@/views/grid/search/list/CodeExample.vue')
        },
        {
          path: 'tree',
          name: 'ComponentGridSearchTree',
          component: () => import('@/views/grid/search/tree/CodeExample.vue')
        }
      ]
    },
    {
      path: 'events',
      component: RouteLayout,
      children: [
        {
          path: 'click',
          name: 'ComponentGridEventsClick',
          component: () => import('@/views/grid/events/click/CodeExample.vue')
        },
        {
          path: 'scroll',
          name: 'ComponentGridEventsScroll',
          component: () => import('@/views/grid/events/scroll/CodeExample.vue')
        }
      ]
    },
    {
      path: 'loadMore',
      component: RouteLayout,
      children: [
        {
          path: 'horizontal',
          name: 'ComponentGridLoadMoreHorizontal',
          component: () => import('@/views/grid/loadMore/horizontal/CodeExample.vue')
        },
        {
          path: 'vertical',
          name: 'ComponentGridLoadMoreVertical',
          component: () => import('@/views/grid/loadMore/vertical/CodeExample.vue')
        },
        {
          path: 'vh',
          name: 'ComponentGridLoadMoreVH',
          component: () => import('@/views/grid/loadMore/vh/CodeExample.vue')
        },
        {
          path: 'boundaryX',
          name: 'ComponentGridLoadMoreBoundaryX',
          component: () => import('@/views/grid/loadMore/boundaryX/CodeExample.vue')
        },
        {
          path: 'boundaryY',
          name: 'ComponentGridLoadMoreBoundaryY',
          component: () => import('@/views/grid/loadMore/boundaryY/CodeExample.vue')
        },
        {
          path: 'boundaryXY',
          name: 'ComponentGridLoadMoreBoundaryXY',
          component: () => import('@/views/grid/loadMore/boundaryXY/CodeExample.vue')
        }
      ]
    },
    {
      path: 'other',
      component: RouteLayout,
      children: [
        {
          path: 'visibleColumn',
          name: 'ComponentGridOtherVisibleColumn',
          component: () => import('@/views/grid/other/visibleColumn/CodeExample.vue')
        },
        {
          path: 'tabs',
          name: 'ComponentGridOtherTabs',
          component: () => import('@/views/grid/other/tabs/CodeExample.vue')
        },
        {
          path: 'scrollTo',
          name: 'ComponentGridOtherScrollTo',
          component: () => import('@/views/grid/other/scrollTo/CodeExample.vue')
        },
        {
          path: 'reverse',
          name: 'ComponentGridOtherReverse',
          component: () => import('@/views/grid/other/reverse/CodeExample.vue')
        },
        {
          path: 'fileList',
          name: 'ComponentGridOtherFileList',
          component: () => import('@/views/grid/other/fileList/CodeExample.vue')
        },
        {
          path: 'lineEllipsis',
          name: 'ComponentGridOtherLineEllipsis',
          component: () => import('@/views/grid/other/lineEllipsis/CodeExample.vue')
        },
        {
          path: 'yearMonth',
          name: 'ComponentGridOtherYearMonth',
          component: () => import('@/views/grid/other/yearMonth/CodeExample.vue')
        },
        {
          path: 'pageCheckbox',
          name: 'ComponentGridOtherPageCheckbox',
          component: () => import('@/views/grid/other/pageCheckbox/CodeExample.vue')
        },
        {
          path: 'bookkeepingVoucher',
          name: 'ComponentGridOtherBookkeepingVoucher',
          component: () => import('@/views/grid/other/bookkeepingVoucher/CodeExample.vue')
        },
        {
          path: 'allRowColDrag',
          name: 'ComponentGridOtherAllRowColDrag',
          component: () => import('@/views/grid/other/allRowColDrag/CodeExample.vue')
        },
        {
          path: 'pasteToUpload',
          name: 'ComponentGridOtherPasteToUpload',
          component: () => import('@/views/grid/other/pasteToUpload/CodeExample.vue')
        }
      ]
    }
  ]
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'StartInstall'
    }
  },
  {
    path: '/',
    redirect: {
      name: 'StartInstall'
    }
  },
  {
    path: '/start',
    component: PageLayout,
    children: [
      {
        path: 'install',
        name: 'StartInstall',
        component: StartInstall
      },
      {
        path: 'useGlobal',
        name: 'StartUseGlobal',
        component: StartUseGlobal
      },
      {
        path: 'useImport',
        name: 'StartUseImport',
        component: StartUseImport
      },
      {
        path: 'cdn',
        name: 'StartCDN',
        component: StartCDN
      },
      {
        path: 'global',
        name: 'StartConfig',
        component: StartConfig
      },
      {
        path: 'icons',
        name: 'StartIcons',
        component: StartIcons
      },
      {
        path: 'theme',
        name: 'StartTheme',
        component: StartTheme
      },
      {
        path: 'i18n',
        name: 'StartI18n',
        component: StartI18n
      },
      {
        path: 'z-index',
        name: 'StartUseZIndex',
        component: StartUseZIndex
      },
      {
        path: 'permission',
        name: 'StartPermission',
        component: StartPermission
      },
      {
        path: 'freeDonation',
        name: 'FreeDonation',
        component: FreeDonation
      },
      {
        path: 'joinSponsor',
        name: 'JoinSponsor',
        component: JoinSponsor
      }
    ]
  },
  {
    path: '/enterprise',
    component: PageLayout,
    children: [
      {
        path: 'preview/:previewCode',
        name: 'EnterprisePreview',
        component: EnterprisePreview
      }
    ]
  },
  {
    path: '/tool',
    component: PageLayout,
    children: [
      {
        path: 'clipboard',
        name: 'ToolClipboard',
        component: () => import('@/views/tool/clipboard/CodeExample.vue')
      }
    ]
  },
  {
    path: '/global',
    component: PageLayout,
    children: [
      {
        path: 'formats',
        component: RouteLayout,
        children: [
          {
            path: 'table',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalFormatsTableAPI',
                component: () => import('@/views/global/formats/table/api/CodeExample.vue')
              },
              {
                path: 'base',
                name: 'GlobalFormatsTableBase',
                component: () => import('@/views/global/formats/table/base/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'menus',
        component: RouteLayout,
        children: [
          {
            path: 'table',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalMenusTableAPI',
                component: () => import('@/views/global/menus/table/api/CodeExample.vue')
              },
              {
                path: 'base',
                name: 'GlobalMenusTableBase',
                component: () => import('@/views/global/menus/table/base/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'commands',
        component: RouteLayout,
        children: [
          {
            path: 'table',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalCommandsTableAPI',
                component: () => import('@/views/global/commands/table/api/CodeExample.vue')
              },
              {
                path: 'base',
                name: 'GlobalCommandsTableBase',
                component: () => import('@/views/global/commands/table/base/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'validators',
        component: RouteLayout,
        children: [
          {
            path: 'form',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalValidatorsFormAPI',
                component: () => import('@/views/global/validators/form/api/CodeExample.vue')
              },
              {
                path: 'base',
                name: 'GlobalValidatorsFormBase',
                component: () => import('@/views/global/validators/form/base/CodeExample.vue')
              }
            ]
          },
          {
            path: 'table',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalValidatorsTableAPI',
                component: () => import('@/views/global/validators/table/api/CodeExample.vue')
              },
              {
                path: 'base',
                name: 'GlobalValidatorsTableBase',
                component: () => import('@/views/global/validators/table/base/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'interceptor',
        component: RouteLayout,
        children: [
          {
            path: 'table',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalInterceptorTableAPI',
                component: () => import('@/views/global/interceptor/table/api/CodeExample.vue')
              },
              {
                path: 'base',
                name: 'GlobalInterceptorTableBase',
                component: () => import('@/views/global/interceptor/table/base/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'renderer',
        component: RouteLayout,
        children: [
          {
            path: 'form',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalRendererFormAPI',
                component: () => import('@/views/global/renderer/form/api/CodeExample.vue')
              },
              {
                path: 'item',
                component: RouteLayout,
                children: [
                  {
                    path: 'myItemAmount',
                    name: 'GlobalRendererFormItemMyItemAmount',
                    component: () => import('@/views/global/renderer/form/item/myItemAmount/CodeExample.vue')
                  },
                  {
                    path: 'myItemUpload',
                    name: 'GlobalRendererFormItemMyItemUpload',
                    component: () => import('@/views/global/renderer/form/item/myItemUpload/CodeExample.vue')
                  }
                ]
              }
            ]
          },
          {
            path: 'table',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalRendererTableAPI',
                component: () => import('@/views/global/renderer/table/api/CodeExample.vue')
              },
              {
                path: 'default',
                component: RouteLayout,
                children: [
                  {
                    path: 'myCellLink',
                    name: 'GlobalRendererTableDefaultMyLink',
                    component: () => import('@/views/global/renderer/table/default/myCellLink/CodeExample.vue')
                  },
                  {
                    path: 'myCellImg',
                    name: 'GlobalRendererTableDefaultMyImg',
                    component: () => import('@/views/global/renderer/table/default/myCellImg/CodeExample.vue')
                  },
                  {
                    path: 'myCellAmount',
                    name: 'GlobalRendererTableDefaultMyAmount',
                    component: () => import('@/views/global/renderer/table/default/myCellAmount/CodeExample.vue')
                  },
                  {
                    path: 'myHeaderLink',
                    name: 'GlobalRendererTableDefaultMyHeaderLink',
                    component: () => import('@/views/global/renderer/table/default/myHeaderLink/CodeExample.vue')
                  },
                  {
                    path: 'myFooterAmount',
                    name: 'GlobalRendererTableDefaultMyFooterAmount',
                    component: () => import('@/views/global/renderer/table/default/myFooterAmount/CodeExample.vue')
                  },
                  {
                    path: 'myFullAmount',
                    name: 'GlobalRendererTableDefaultMyFullAmount',
                    component: () => import('@/views/global/renderer/table/default/myFullAmount/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'edit',
                component: RouteLayout,
                children: [
                  {
                    path: 'myEditAmount',
                    name: 'GlobalRendererTableEditMyEditAmount',
                    component: () => import('@/views/global/renderer/table/edit/myEditAmount/CodeExample.vue')
                  },
                  {
                    path: 'myEditPulldown',
                    name: 'GlobalRendererTableEditMyEditPulldown',
                    component: () => import('@/views/global/renderer/table/edit/myEditPulldown/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'expand',
                component: RouteLayout,
                children: [
                  {
                    path: 'myExpandList',
                    name: 'GlobalRendererTableExpandMyExpandList',
                    component: () => import('@/views/global/renderer/table/expand/myExpandList/CodeExample.vue')
                  },
                  {
                    path: 'myExpandTable',
                    name: 'GlobalRendererTableExpandMyExpandTable',
                    component: () => import('@/views/global/renderer/table/expand/myExpandTable/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'toolbar',
                component: RouteLayout,
                children: [
                  {
                    path: 'btn',
                    name: 'GlobalRendererTableToolbarBtn',
                    component: () => import('@/views/global/renderer/table/toolbar/button/CodeExample.vue')
                  },
                  {
                    path: 'tool',
                    name: 'GlobalRendererTableToolbarTool',
                    component: () => import('@/views/global/renderer/table/toolbar/tool/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'filter',
                component: RouteLayout,
                children: [
                  {
                    path: 'myFilterInput',
                    name: 'GlobalRendererTableFilterMyFilterInput',
                    component: () => import('@/views/global/renderer/table/filter/myFilterInput/CodeExample.vue')
                  },
                  {
                    path: 'myFilterComplex',
                    name: 'GlobalRendererTableFilterMyFilterComplex',
                    component: () => import('@/views/global/renderer/table/filter/myFilterComplex/CodeExample.vue')
                  },
                  {
                    path: 'myFilterContent',
                    name: 'GlobalRendererTableFilterMyFilterContent',
                    component: () => import('@/views/global/renderer/table/filter/myFilterContent/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'empty',
                component: RouteLayout,
                children: [
                  {
                    path: 'myEmptyImg',
                    name: 'GlobalRendererTableMyEmptyImg',
                    component: () => import('@/views/global/renderer/table/empty/myEmptyImg/CodeExample.vue')
                  },
                  {
                    path: 'myEmptyText',
                    name: 'GlobalRendererTableMyEmptyText',
                    component: () => import('@/views/global/renderer/table/empty/myEmptyText/CodeExample.vue')
                  }
                ]
              }
            ]
          },
          {
            path: 'form-design',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalRendererFormDesignAPI',
                component: () => import('@/views/global/renderer/form-design/api/CodeExample.vue')
              },
              {
                path: 'widget',
                component: RouteLayout,
                children: [
                  {
                    path: 'myInputWidget',
                    name: 'GlobalRendererFormDesignWidgetMyInputWidget',
                    component: () => import('@/views/global/renderer/form-design/widget/myInputWidget/CodeExample.vue')
                  },
                  {
                    path: 'myTextareaWidget',
                    name: 'GlobalRendererFormDesignWidgetMyTextareaWidget',
                    component: () => import('@/views/global/renderer/form-design/widget/myTextareaWidget/CodeExample.vue')
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/cssVar',
    component: PageLayout,
    children: [
      {
        path: 'table',
        component: RouteLayout,
        children: [
          { path: 'fontSize', name: 'CssVarTableFontSize', component: () => import('@/views/vars/table/fontSize/CodeExample.vue') },
          { path: 'fontColor', name: 'CssVarTableFontColor', component: () => import('@/views/vars/table/fontColor/CodeExample.vue') },
          { path: 'border', name: 'CssVarTableBorder', component: () => import('@/views/vars/table/border/CodeExample.vue') },
          { path: 'background', name: 'CssVarTableBackground', component: () => import('@/views/vars/table/background/CodeExample.vue') },
          { path: 'rowHeight', name: 'CssVarTableRowHeight', component: () => import('@/views/vars/table/rowHeight/CodeExample.vue') }
        ]
      }
    ]
  },
  {
    path: '/component',
    component: PageLayout,
    children: [
      {
        path: 'icon',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentIconSize',
            component: () => import('@/views/icon/size/CodeExample.vue')
          },
          {
            path: 'base',
            name: 'ComponentIconBase',
            component: () => import('@/views/icon/base/CodeExample.vue')
          },
          {
            path: 'animation',
            name: 'ComponentIconAnimation',
            component: () => import('@/views/icon/animation/CodeExample.vue')
          },
          {
            path: 'status',
            name: 'ComponentIconStatus',
            component: () => import('@/views/icon/status/CodeExample.vue')
          }
        ]
      },
      {
        path: 'layout',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'ComponentLayoutBase',
            component: () => import('@/views/layout/base/CodeExample.vue')
          },
          {
            path: 'fixed',
            name: 'ComponentLayoutFixed',
            component: () => import('@/views/layout/fixed/CodeExample.vue')
          },
          {
            path: 'aside',
            name: 'ComponentLayoutAside',
            component: () => import('@/views/layout/aside/CodeExample.vue')
          },
          {
            path: 'header',
            name: 'ComponentLayoutHeader',
            component: () => import('@/views/layout/header/CodeExample.vue')
          },
          {
            path: 'body',
            name: 'ComponentLayoutBody',
            component: () => import('@/views/layout/body/CodeExample.vue')
          }
        ]
      },
      {
        path: 'row',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'ComponentRowBase',
            component: () => import('@/views/row/base/CodeExample.vue')
          },
          {
            path: 'gutter',
            name: 'ComponentRowGutter',
            component: () => import('@/views/row/gutter/CodeExample.vue')
          },
          {
            path: 'vertical',
            name: 'ComponentRowVertical',
            component: () => import('@/views/row/vertical/CodeExample.vue')
          },
          {
            path: 'wrap',
            name: 'ComponentRowWrap',
            component: () => import('@/views/row/wrap/CodeExample.vue')
          },
          {
            path: 'colWidth',
            name: 'ComponentRowColWidth',
            component: () => import('@/views/row/colWidth/CodeExample.vue')
          },
          {
            path: 'colFill',
            name: 'ComponentRowColFill',
            component: () => import('@/views/row/colFill/CodeExample.vue')
          },
          {
            path: 'colAlign',
            name: 'ComponentRowColAlign',
            component: () => import('@/views/row/colAlign/CodeExample.vue')
          },
          {
            path: 'colEllipsis',
            name: 'ComponentRowColEllipsis',
            component: () => import('@/views/row/colEllipsis/CodeExample.vue')
          }
        ]
      },
      {
        path: 'avatar',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'ComponentAvatarBase',
            component: () => import('@/views/avatar/base/CodeExample.vue')
          },
          {
            path: 'size',
            name: 'ComponentAvatarSize',
            component: () => import('@/views/avatar/size/CodeExample.vue')
          },
          {
            path: 'icon',
            name: 'ComponentAvatarIcon',
            component: () => import('@/views/avatar/icon/CodeExample.vue')
          },
          {
            path: 'circle',
            name: 'ComponentAvatarCircle',
            component: () => import('@/views/avatar/circle/CodeExample.vue')
          },
          {
            path: 'status',
            name: 'ComponentAvatarStatus',
            component: () => import('@/views/avatar/status/CodeExample.vue')
          },
          {
            path: 'dot',
            name: 'ComponentAvatarDot',
            component: () => import('@/views/avatar/dot/CodeExample.vue')
          },
          {
            path: 'count',
            name: 'ComponentAvatarCount',
            component: () => import('@/views/avatar/count/CodeExample.vue')
          }
        ]
      },
      {
        path: 'badge',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'ComponentBadgeBase',
            component: () => import('@/views/badge/base/CodeExample.vue')
          },
          {
            path: 'size',
            name: 'ComponentBadgerSize',
            component: () => import('@/views/badge/size/CodeExample.vue')
          },
          {
            path: 'dot',
            name: 'ComponentBadgerDot',
            component: () => import('@/views/badge/dot/CodeExample.vue')
          }
        ]
      },
      {
        path: 'breadcrumb',
        name: 'ComponentBreadcrumb',
        component: () => import('@/views/breadcrumb/CodeExample.vue')
      },
      {
        path: 'menu',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'ComponentMenuBase',
            component: () => import('@/views/menu/base/CodeExample.vue')
          },
          {
            path: 'loading',
            name: 'ComponentMenuLoading',
            component: () => import('@/views/menu/loading/CodeExample.vue')
          },
          {
            path: 'icon',
            name: 'ComponentMenuIcon',
            component: () => import('@/views/menu/icon/CodeExample.vue')
          },
          {
            path: 'routerLink',
            name: 'ComponentMenuRouterLink',
            component: () => import('@/views/menu/routerLink/CodeExample.vue')
          },
          {
            path: 'permissionCode',
            name: 'ComponentMenuPermissionCode',
            component: () => import('@/views/menu/permissionCode/CodeExample.vue')
          },
          {
            path: 'template',
            name: 'ComponentMenuTemplate',
            component: () => import('@/views/menu/template/CodeExample.vue')
          }
        ]
      },
      {
        path: 'image',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'ComponentImageBase',
            component: () => import('@/views/image/base/CodeExample.vue')
          },
          {
            path: 'circle',
            name: 'ComponentImageCircle',
            component: () => import('@/views/image/circle/CodeExample.vue')
          },
          {
            path: 'multiple',
            name: 'ComponentImageMultiple',
            component: () => import('@/views/image/multiple/CodeExample.vue')
          },
          {
            path: 'lazy',
            name: 'ComponentImageLazy',
            component: () => import('@/views/image/lazy/CodeExample.vue')
          },
          {
            path: 'showPreview',
            name: 'ComponentImageShowPreview',
            component: () => import('@/views/image/showPreview/CodeExample.vue')
          },
          {
            path: 'maskClosable',
            name: 'ComponentImageMaskClosable',
            component: () => import('@/views/image/maskClosable/CodeExample.vue')
          },
          {
            path: 'showPrintButton',
            name: 'ComponentImageShowPrintButton',
            component: () => import('@/views/image/showPrintButton/CodeExample.vue')
          },
          {
            path: 'showDownloadButton',
            name: 'ComponentImageShowDownloadButton',
            component: () => import('@/views/image/showDownloadButton/CodeExample.vue')
          }
        ]
      },
      {
        path: 'image-group',
        component: RouteLayout,
        children: [
          { path: 'group', name: 'ComponentImageGroupBase', component: () => import('@/views/image-group/base/CodeExample.vue') },
          { path: 'showPreview', name: 'ComponentImageGroupShowPreview', component: () => import('@/views/image-group/showPreview/CodeExample.vue') },
          { path: 'showPrintButton', name: 'ComponentImageGroupShowPrintButton', component: () => import('@/views/image-group/showPrintButton/CodeExample.vue') },
          { path: 'showDownloadButton', name: 'ComponentImageGroupShowDownloadButton', component: () => import('@/views/image-group/showDownloadButton/CodeExample.vue') }
        ]
      },
      {
        path: 'image-preview',
        name: 'ComponentImagePreview',
        component: () => import('@/views/image-preview/CodeExample.vue')
      },
      {
        path: 'anchor',
        name: 'ComponentAnchor',
        component: () => import('@/views/anchor/CodeExample.vue')
      },
      {
        path: 'text',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentTextSize',
            component: () => import('@/views/text/size/CodeExample.vue')
          },
          {
            path: 'status',
            name: 'ComponentTextStatus',
            component: () => import('@/views/text/status/CodeExample.vue')
          },
          {
            path: 'icon',
            name: 'ComponentTextIcon',
            component: () => import('@/views/text/icon/CodeExample.vue')
          },
          {
            path: 'clickToCopy',
            name: 'ComponentTextClickToCopy',
            component: () => import('@/views/text/clickToCopy/CodeExample.vue')
          }
        ]
      },
      {
        path: 'text-ellipsis',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentTextEllipsisSize',
            component: () => import('@/views/text-ellipsis/size/CodeExample.vue')
          },
          {
            path: 'status',
            name: 'ComponentTextEllipsisStatus',
            component: () => import('@/views/text-ellipsis/status/CodeExample.vue')
          },
          {
            path: 'line-single',
            name: 'ComponentTextEllipsisIconLineSingle',
            component: () => import('@/views/text-ellipsis/line-single/CodeExample.vue')
          },
          {
            path: 'line-clamp',
            name: 'ComponentTextEllipsisLineClamp',
            component: () => import('@/views/text-ellipsis/line-clamp/CodeExample.vue')
          }
        ]
      },
      {
        path: 'link',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentLinkSize',
            component: () => import('@/views/link/size/CodeExample.vue')
          },
          {
            path: 'status',
            name: 'ComponentLinkStatus',
            component: () => import('@/views/link/status/CodeExample.vue')
          },
          {
            path: 'icon',
            name: 'ComponentLinkIcon',
            component: () => import('@/views/link/icon/CodeExample.vue')
          },
          {
            path: 'underline',
            name: 'ComponentLinkUnderline',
            component: () => import('@/views/link/underline/CodeExample.vue')
          },
          {
            path: 'href',
            name: 'ComponentLinkHref',
            component: () => import('@/views/link/href/CodeExample.vue')
          },
          {
            path: 'router',
            name: 'ComponentLinkRouter',
            component: () => import('@/views/link/router/CodeExample.vue')
          },
          {
            path: 'permissionCode',
            name: 'ComponentLinkPermissionCode',
            component: () => import('@/views/link/permissionCode/CodeExample.vue')
          }
        ]
      },
      {
        path: 'tag',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentTagSize',
            component: () => import('@/views/tag/size/CodeExample.vue')
          },
          {
            path: 'status',
            name: 'ComponentTagStatus',
            component: () => import('@/views/tag/status/CodeExample.vue')
          },
          {
            path: 'icon',
            name: 'ComponentTagIcon',
            component: () => import('@/views/tag/icon/CodeExample.vue')
          }
        ]
      },
      {
        path: 'button',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentButtonSize',
            component: () => import('@/views/button/size/CodeExample.vue')
          },
          {
            path: 'status',
            name: 'ComponentButtonStatus',
            component: () => import('@/views/button/status/CodeExample.vue')
          },
          {
            path: 'icon',
            name: 'ComponentButtonIcon',
            component: () => import('@/views/button/icon/CodeExample.vue')
          },
          {
            path: 'circle',
            name: 'ComponentButtonCircle',
            component: () => import('@/views/button/circle/CodeExample.vue')
          },
          {
            path: 'round',
            name: 'ComponentButtonRound',
            component: () => import('@/views/button/round/CodeExample.vue')
          },
          {
            path: 'tipIcon',
            name: 'ComponentButtonTipIcon',
            component: () => import('@/views/button/tipIcon/CodeExample.vue')
          },
          {
            path: 'trigger',
            name: 'ComponentButtonTrigger',
            component: () => import('@/views/button/trigger/CodeExample.vue')
          },
          {
            path: 'loading',
            name: 'ComponentButtonLoading',
            component: () => import('@/views/button/loading/CodeExample.vue')
          },
          {
            path: 'group',
            name: 'ComponentButtonGroup',
            component: () => import('@/views/button/group/CodeExample.vue')
          },
          {
            path: 'vertical',
            name: 'ComponentButtonVertical',
            component: () => import('@/views/button/vertical/CodeExample.vue')
          },
          {
            path: 'dropdown',
            name: 'ComponentButtonDropdown',
            component: () => import('@/views/button/dropdown/CodeExample.vue')
          },
          {
            path: 'disabled',
            name: 'ComponentButtonDisabled',
            component: () => import('@/views/button/disabled/CodeExample.vue')
          },
          {
            path: 'permissionCode',
            name: 'ComponentButtonPermissionCode',
            component: () => import('@/views/button/permissionCode/CodeExample.vue')
          }
        ]
      },
      {
        path: 'rate',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentRateSize',
            component: () => import('@/views/rate/size/CodeExample.vue')
          },
          {
            path: 'status',
            name: 'ComponentRateStatus',
            component: () => import('@/views/rate/status/CodeExample.vue')
          },
          {
            path: 'disabled',
            name: 'ComponentRateDisabled',
            component: () => import('@/views/rate/disabled/CodeExample.vue')
          }
        ]
      },
      {
        path: 'radio',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentRadioSize',
            component: () => import('@/views/radio/size/CodeExample.vue')
          },
          {
            path: 'disabled',
            name: 'ComponentRadioDisabled',
            component: () => import('@/views/radio/disabled/CodeExample.vue')
          },
          {
            path: 'strict',
            name: 'ComponentRadioStrict',
            component: () => import('@/views/radio/strict/CodeExample.vue')
          },
          {
            path: 'group',
            name: 'ComponentRadioGroup',
            component: () => import('@/views/radio/group/CodeExample.vue')
          },
          {
            path: 'button',
            name: 'ComponentRadioButton',
            component: () => import('@/views/radio/button/CodeExample.vue')
          }
        ]
      },
      {
        path: 'checkbox',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentCheckboxSize',
            component: () => import('@/views/checkbox/size/CodeExample.vue')
          },
          {
            path: 'indeterminate',
            name: 'ComponentCheckboxIndeterminate',
            component: () => import('@/views/checkbox/indeterminate/CodeExample.vue')
          },
          {
            path: 'disabled',
            name: 'ComponentCheckboxDisabled',
            component: () => import('@/views/checkbox/disabled/CodeExample.vue')
          },
          {
            path: 'value',
            name: 'ComponentCheckboxValue',
            component: () => import('@/views/checkbox/value/CodeExample.vue')
          },
          {
            path: 'group',
            name: 'ComponentCheckboxGroup',
            component: () => import('@/views/checkbox/group/CodeExample.vue')
          },
          {
            path: 'max',
            name: 'ComponentCheckboxMax',
            component: () => import('@/views/checkbox/max/CodeExample.vue')
          }
        ]
      },
      {
        path: 'slider',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentSliderSize',
            component: () => import('@/views/slider/size/CodeExample.vue')
          },
          {
            path: 'base',
            name: 'ComponentSliderBase',
            component: () => import('@/views/slider/base/CodeExample.vue')
          },
          {
            path: 'range',
            name: 'ComponentSliderRange',
            component: () => import('@/views/slider/range/CodeExample.vue')
          },
          {
            path: 'readonly',
            name: 'ComponentSliderReadonly',
            component: () => import('@/views/slider/readonly/CodeExample.vue')
          },
          {
            path: 'disabled',
            name: 'ComponentSliderDisabled',
            component: () => import('@/views/slider/disabled/CodeExample.vue')
          }
        ]
      },
      {
        path: 'input',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentInputSize',
            component: () => import('@/views/input/size/CodeExample.vue')
          },
          {
            path: 'text',
            name: 'ComponentInputText',
            component: () => import('@/views/input/text/CodeExample.vue')
          },
          {
            path: 'search',
            name: 'ComponentInputSearch',
            component: () => import('@/views/input/search/CodeExample.vue')
          },
          {
            path: 'password',
            name: 'ComponentInputPassword',
            component: () => import('@/views/input/password/CodeExample.vue')
          },
          {
            path: 'date',
            name: 'ComponentInputDate',
            component: () => import('@/views/input/date/CodeExample.vue')
          },
          {
            path: 'week',
            name: 'ComponentInputWeek',
            component: () => import('@/views/input/week/CodeExample.vue')
          },
          {
            path: 'month',
            name: 'ComponentInputMonth',
            component: () => import('@/views/input/month/CodeExample.vue')
          },
          {
            path: 'quarter',
            name: 'ComponentInputQuarter',
            component: () => import('@/views/input/quarter/CodeExample.vue')
          },
          {
            path: 'year',
            name: 'ComponentInputYear',
            component: () => import('@/views/input/year/CodeExample.vue')
          },
          {
            path: 'time',
            name: 'ComponentInputTime',
            component: () => import('@/views/input/time/CodeExample.vue')
          },
          {
            path: 'datetime',
            name: 'ComponentInputDatetime',
            component: () => import('@/views/input/datetime/CodeExample.vue')
          },
          {
            path: 'number',
            name: 'ComponentInputNumber',
            component: () => import('@/views/input/number/CodeExample.vue')
          },
          {
            path: 'integer',
            name: 'ComponentInputInteger',
            component: () => import('@/views/input/integer/CodeExample.vue')
          },
          {
            path: 'float',
            name: 'ComponentInputFloat',
            component: () => import('@/views/input/float/CodeExample.vue')
          },
          {
            path: 'count',
            name: 'ComponentInputCount',
            component: () => import('@/views/input/count/CodeExample.vue')
          },
          {
            path: 'prefix',
            name: 'ComponentInputPrefix',
            component: () => import('@/views/input/prefix/CodeExample.vue')
          },
          {
            path: 'suffix',
            name: 'ComponentInputSuffix',
            component: () => import('@/views/input/suffix/CodeExample.vue')
          },
          {
            path: 'template',
            name: 'ComponentInputTemplate',
            component: () => import('@/views/input/template/CodeExample.vue')
          }
        ]
      },
      {
        path: 'password-input',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentPasswordInputSize',
            component: () => import('@/views/password-input/size/CodeExample.vue')
          },
          {
            path: 'clearable',
            name: 'ComponentPasswordInputClearable',
            component: () => import('@/views/password-input/clearable/CodeExample.vue')
          },
          {
            path: 'controls',
            name: 'ComponentPasswordInputControls',
            component: () => import('@/views/password-input/controls/CodeExample.vue')
          }
        ]
      },
      {
        path: 'number-input',
        component: RouteLayout,
        children: [
          {
            path: 'number',
            component: RouteLayout,
            children: [
              {
                path: 'base',
                name: 'ComponentNumberInputNumberBase',
                component: () => import('@/views/number-input/number/base/CodeExample.vue')
              },
              {
                path: 'clearable',
                name: 'ComponentNumberInputNumberClearable',
                component: () => import('@/views/number-input/number/clearable/CodeExample.vue')
              },
              {
                path: 'readonly',
                name: 'ComponentNumberInputNumberReadonly',
                component: () => import('@/views/number-input/number/readonly/CodeExample.vue')
              },
              {
                path: 'step',
                name: 'ComponentNumberInputNumberStep',
                component: () => import('@/views/number-input/number/step/CodeExample.vue')
              },
              {
                path: 'range',
                name: 'ComponentNumberInputNumberRange',
                component: () => import('@/views/number-input/number/range/CodeExample.vue')
              },
              {
                path: 'controls',
                name: 'ComponentNumberInputNumberControls',
                component: () => import('@/views/number-input/number/controls/CodeExample.vue')
              }
            ]
          },
          {
            path: 'integer',
            component: RouteLayout,
            children: [
              {
                path: 'base',
                name: 'ComponentNumberInputIntegerBase',
                component: () => import('@/views/number-input/integer/base/CodeExample.vue')
              },
              {
                path: 'clearable',
                name: 'ComponentNumberInputIntegerClearable',
                component: () => import('@/views/number-input/integer/clearable/CodeExample.vue')
              },
              {
                path: 'readonly',
                name: 'ComponentNumberInputIntegerReadonly',
                component: () => import('@/views/number-input/integer/readonly/CodeExample.vue')
              },
              {
                path: 'step',
                name: 'ComponentNumberInputIntegerStep',
                component: () => import('@/views/number-input/integer/step/CodeExample.vue')
              },
              {
                path: 'range',
                name: 'ComponentNumberInputIntegerRange',
                component: () => import('@/views/number-input/number/range/CodeExample.vue')
              },
              {
                path: 'controls',
                name: 'ComponentNumberInputIntegerControls',
                component: () => import('@/views/number-input/integer/controls/CodeExample.vue')
              }
            ]
          },
          {
            path: 'float',
            component: RouteLayout,
            children: [
              {
                path: 'base',
                name: 'ComponentNumberInputFloatBase',
                component: () => import('@/views/number-input/float/base/CodeExample.vue')
              },
              {
                path: 'clearable',
                name: 'ComponentNumberInputFloatClearable',
                component: () => import('@/views/number-input/float/clearable/CodeExample.vue')
              },
              {
                path: 'readonly',
                name: 'ComponentNumberInputFloatReadonly',
                component: () => import('@/views/number-input/float/readonly/CodeExample.vue')
              },
              {
                path: 'digits',
                name: 'ComponentNumberInputFloatDigits',
                component: () => import('@/views/number-input/float/digits/CodeExample.vue')
              },
              {
                path: 'step',
                name: 'ComponentNumberInputFloatStep',
                component: () => import('@/views/number-input/float/step/CodeExample.vue')
              },
              {
                path: 'range',
                name: 'ComponentNumberInputFloatRange',
                component: () => import('@/views/number-input/float/range/CodeExample.vue')
              },
              {
                path: 'autoFill',
                name: 'ComponentNumberInputFloatAutoFill',
                component: () => import('@/views/number-input/float/autoFill/CodeExample.vue')
              },
              {
                path: 'controls',
                name: 'ComponentNumberInputFloatControls',
                component: () => import('@/views/number-input/float/controls/CodeExample.vue')
              }
            ]
          },
          {
            path: 'amount',
            component: RouteLayout,
            children: [
              {
                path: 'base',
                name: 'ComponentNumberInputAmountBase',
                component: () => import('@/views/number-input/amount/base/CodeExample.vue')
              },
              {
                path: 'clearable',
                name: 'ComponentNumberInputAmountClearable',
                component: () => import('@/views/number-input/amount/clearable/CodeExample.vue')
              },
              {
                path: 'readonly',
                name: 'ComponentNumberInputAmountReadonly',
                component: () => import('@/views/number-input/amount/readonly/CodeExample.vue')
              },
              {
                path: 'digits',
                name: 'ComponentNumberInputAmountDigits',
                component: () => import('@/views/number-input/amount/digits/CodeExample.vue')
              },
              {
                path: 'showCurrency',
                name: 'ComponentNumberInputAmountShowCurrency',
                component: () => import('@/views/number-input/amount/showCurrency/CodeExample.vue')
              },
              {
                path: 'step',
                name: 'ComponentNumberInputAmountStep',
                component: () => import('@/views/number-input/amount/step/CodeExample.vue')
              },
              {
                path: 'range',
                name: 'ComponentNumberInputAmountRange',
                component: () => import('@/views/number-input/amount/range/CodeExample.vue')
              },
              {
                path: 'autoFill',
                name: 'ComponentNumberInputAmountAutoFill',
                component: () => import('@/views/number-input/amount/autoFill/CodeExample.vue')
              },
              {
                path: 'controls',
                name: 'ComponentNumberInputAmountControls',
                component: () => import('@/views/number-input/amount/controls/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'textarea',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentTextareaSize',
            component: () => import('@/views/textarea/size/CodeExample.vue')
          },
          {
            path: 'disabled',
            name: 'ComponentTextareaDisabled',
            component: () => import('@/views/textarea/disabled/CodeExample.vue')
          },
          {
            path: 'readonly',
            name: 'ComponentTextareaReadonly',
            component: () => import('@/views/textarea/readonly/CodeExample.vue')
          },
          {
            path: 'count',
            name: 'ComponentTextareaCount',
            component: () => import('@/views/textarea/count/CodeExample.vue')
          },
          {
            path: 'autosize',
            name: 'ComponentTextareaAutosize',
            component: () => import('@/views/textarea/autosize/CodeExample.vue')
          },
          {
            path: 'resize',
            name: 'ComponentTextareaResize',
            component: () => import('@/views/textarea/resize/CodeExample.vue')
          }
        ]
      },
      {
        path: 'color-picker',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentColorPickerSize',
            component: () => import('@/views/color-picker/size/CodeExample.vue')
          },
          {
            path: 'clearable',
            name: 'ComponentColorPickerClearable',
            component: () => import('@/views/color-picker/clearable/CodeExample.vue')
          },
          {
            path: 'colors',
            name: 'ComponentColorPickerColors',
            component: () => import('@/views/color-picker/colors/CodeExample.vue')
          },
          {
            path: 'type',
            name: 'ComponentColorPickerType',
            component: () => import('@/views/color-picker/type/CodeExample.vue')
          },
          {
            path: 'showEyeDropper',
            name: 'ComponentColorPickerShowEyeDropper',
            component: () => import('@/views/color-picker/showEyeDropper/CodeExample.vue')
          }
        ]
      },
      {
        path: 'icon-picker',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentIconPickerSize',
            component: () => import('@/views/icon-picker/size/CodeExample.vue')
          },
          {
            path: 'clearable',
            name: 'ComponentIconPickerClearable',
            component: () => import('@/views/icon-picker/clearable/CodeExample.vue')
          },
          {
            path: 'icons',
            name: 'ComponentIconPickerIcons',
            component: () => import('@/views/icon-picker/icons/CodeExample.vue')
          },
          {
            path: 'color',
            name: 'ComponentIconPickerColor',
            component: () => import('@/views/icon-picker/color/CodeExample.vue')
          }
        ]
      },
      {
        path: 'date-picker',
        component: RouteLayout,
        children: [
          {
            path: 'date',
            component: RouteLayout,
            children: [
              {
                path: 'base',
                name: 'ComponentDatePickerDateBase',
                component: () => import('@/views/date-picker/date/base/CodeExample.vue')
              },
              {
                path: 'disabled',
                name: 'ComponentDatePickerDateDisabled',
                component: () => import('@/views/date-picker/date/disabled/CodeExample.vue')
              },
              {
                path: 'multiple',
                name: 'ComponentDatePickerDateMultiple',
                component: () => import('@/views/date-picker/date/multiple/CodeExample.vue')
              },
              {
                path: 'shortcut',
                name: 'ComponentDatePickerDateShortcut',
                component: () => import('@/views/date-picker/date/shortcut/CodeExample.vue')
              },
              {
                path: 'template',
                component: RouteLayout,
                children: [
                  {
                    path: 'top',
                    name: 'ComponentDatePickerDateTemplateTop',
                    component: () => import('@/views/date-picker/date/template/top/CodeExample.vue')
                  },
                  {
                    path: 'bottom',
                    name: 'ComponentDatePickerDateTemplateBottom',
                    component: () => import('@/views/date-picker/date/template/bottom/CodeExample.vue')
                  },
                  {
                    path: 'left',
                    name: 'ComponentDatePickerDateTemplateLeft',
                    component: () => import('@/views/date-picker/date/template/left/CodeExample.vue')
                  },
                  {
                    path: 'right',
                    name: 'ComponentDatePickerDateTemplateRight',
                    component: () => import('@/views/date-picker/date/template/right/CodeExample.vue')
                  }
                ]
              }
            ]
          },
          {
            path: 'week',
            component: RouteLayout,
            children: [
              {
                path: 'base',
                name: 'ComponentDatePickerWeekBase',
                component: () => import('@/views/date-picker/week/base/CodeExample.vue')
              },
              {
                path: 'disabled',
                name: 'ComponentDatePickerWeekDisabled',
                component: () => import('@/views/date-picker/week/disabled/CodeExample.vue')
              },
              {
                path: 'multiple',
                name: 'ComponentDatePickerWeekMultiple',
                component: () => import('@/views/date-picker/week/multiple/CodeExample.vue')
              },
              {
                path: 'startDay',
                name: 'ComponentDatePickerWeekStartDay',
                component: () => import('@/views/date-picker/week/startDay/CodeExample.vue')
              },
              {
                path: 'selectDay',
                name: 'ComponentDatePickerWeekSelectDay',
                component: () => import('@/views/date-picker/week/selectDay/CodeExample.vue')
              },
              {
                path: 'shortcut',
                name: 'ComponentDatePickerWeekShortcut',
                component: () => import('@/views/date-picker/week/shortcut/CodeExample.vue')
              },
              {
                path: 'template',
                component: RouteLayout,
                children: [
                  {
                    path: 'top',
                    name: 'ComponentDatePickerWeekTemplateTop',
                    component: () => import('@/views/date-picker/week/template/top/CodeExample.vue')
                  },
                  {
                    path: 'bottom',
                    name: 'ComponentDatePickerWeekTemplateBottom',
                    component: () => import('@/views/date-picker/week/template/bottom/CodeExample.vue')
                  },
                  {
                    path: 'left',
                    name: 'ComponentDatePickerWeekTemplateLeft',
                    component: () => import('@/views/date-picker/week/template/left/CodeExample.vue')
                  },
                  {
                    path: 'right',
                    name: 'ComponentDatePickerWeekTemplateRight',
                    component: () => import('@/views/date-picker/week/template/right/CodeExample.vue')
                  }
                ]
              }
            ]
          },
          {
            path: 'month',
            component: RouteLayout,
            children: [
              {
                path: 'base',
                name: 'ComponentDatePickerMonthBase',
                component: () => import('@/views/date-picker/month/base/CodeExample.vue')
              },
              {
                path: 'multiple',
                name: 'ComponentDatePickerMonthMultiple',
                component: () => import('@/views/date-picker/month/multiple/CodeExample.vue')
              },
              {
                path: 'shortcut',
                name: 'ComponentDatePickerMonthShortcut',
                component: () => import('@/views/date-picker/month/shortcut/CodeExample.vue')
              }
            ]
          },
          {
            path: 'quarter',
            component: RouteLayout,
            children: [
              {
                path: 'base',
                name: 'ComponentDatePickerQuarterBase',
                component: () => import('@/views/date-picker/quarter/base/CodeExample.vue')
              },
              {
                path: 'multiple',
                name: 'ComponentDatePickerQuarterMultiple',
                component: () => import('@/views/date-picker/quarter/multiple/CodeExample.vue')
              },
              {
                path: 'shortcut',
                name: 'ComponentDatePickerQuarterShortcut',
                component: () => import('@/views/date-picker/quarter/shortcut/CodeExample.vue')
              }
            ]
          },
          {
            path: 'year',
            component: RouteLayout,
            children: [
              {
                path: 'base',
                name: 'ComponentDatePickerYearBase',
                component: () => import('@/views/date-picker/year/base/CodeExample.vue')
              },
              {
                path: 'multiple',
                name: 'ComponentDatePickerYearMultiple',
                component: () => import('@/views/date-picker/year/multiple/CodeExample.vue')
              },
              {
                path: 'shortcut',
                name: 'ComponentDatePickerYearShortcut',
                component: () => import('@/views/date-picker/year/shortcut/CodeExample.vue')
              }
            ]
          },
          {
            path: 'time',
            component: RouteLayout,
            children: [
              {
                path: 'base',
                name: 'ComponentDatePickerTimeBase',
                component: () => import('@/views/date-picker/time/base/CodeExample.vue')
              },
              {
                path: 'disabled',
                name: 'ComponentDatePickerTimeDisabled',
                component: () => import('@/views/date-picker/time/disabled/CodeExample.vue')
              },
              {
                path: 'valueFormat',
                name: 'ComponentDatePickerTimeValueFormat',
                component: () => import('@/views/date-picker/time/valueFormat/CodeExample.vue')
              },
              {
                path: 'shortcut',
                name: 'ComponentDatePickerTimeShortcut',
                component: () => import('@/views/date-picker/time/shortcut/CodeExample.vue')
              },
              {
                path: 'template',
                component: RouteLayout,
                children: [
                  {
                    path: 'top',
                    name: 'ComponentDatePickerTimeTemplateTop',
                    component: () => import('@/views/date-picker/time/template/top/CodeExample.vue')
                  },
                  {
                    path: 'bottom',
                    name: 'ComponentDatePickerTimeTemplateBottom',
                    component: () => import('@/views/date-picker/time/template/bottom/CodeExample.vue')
                  },
                  {
                    path: 'left',
                    name: 'ComponentDatePickerTimeTemplateLeft',
                    component: () => import('@/views/date-picker/time/template/left/CodeExample.vue')
                  },
                  {
                    path: 'right',
                    name: 'ComponentDatePickerTimeTemplateRight',
                    component: () => import('@/views/date-picker/time/template/right/CodeExample.vue')
                  }
                ]
              }
            ]
          },
          {
            path: 'datetime',
            component: RouteLayout,
            children: [
              {
                path: 'base',
                name: 'ComponentDatePickerDatetimeBase',
                component: () => import('@/views/date-picker/datetime/base/CodeExample.vue')
              },
              {
                path: 'disabled',
                name: 'ComponentDatePickerDatetimeDisabled',
                component: () => import('@/views/date-picker/datetime/disabled/CodeExample.vue')
              },
              {
                path: 'multiple',
                name: 'ComponentDatePickerDatetimeMultiple',
                component: () => import('@/views/date-picker/datetime/multiple/CodeExample.vue')
              },
              {
                path: 'valueFormat',
                name: 'ComponentDatePickerDatetimeValueFormat',
                component: () => import('@/views/date-picker/datetime/valueFormat/CodeExample.vue')
              },
              {
                path: 'shortcut',
                name: 'ComponentDatePickerDatetimeShortcut',
                component: () => import('@/views/date-picker/week/shortcut/CodeExample.vue')
              },
              {
                path: 'template',
                component: RouteLayout,
                children: [
                  {
                    path: 'top',
                    name: 'ComponentDatePickerDatetimeTemplateTop',
                    component: () => import('@/views/date-picker/datetime/template/top/CodeExample.vue')
                  },
                  {
                    path: 'bottom',
                    name: 'ComponentDatePickerDatetimeTemplateBottom',
                    component: () => import('@/views/date-picker/datetime/template/bottom/CodeExample.vue')
                  },
                  {
                    path: 'left',
                    name: 'ComponentDatePickerDatetimeTemplateLeft',
                    component: () => import('@/views/date-picker/datetime/template/left/CodeExample.vue')
                  },
                  {
                    path: 'right',
                    name: 'ComponentDatePickerDatetimeTemplateRight',
                    component: () => import('@/views/date-picker/datetime/template/right/CodeExample.vue')
                  }
                ]
              }
            ]
          },
          {
            path: 'disabledMethod',
            name: 'ComponentDatePickerDisabledMethod',
            component: () => import('@/views/date-picker/disabledMethod/CodeExample.vue')
          },
          {
            path: 'minMax',
            name: 'ComponentDatePickerMinMax',
            component: () => import('@/views/date-picker/minMax/CodeExample.vue')
          },
          {
            path: 'festivalMethod',
            name: 'ComponentDatePickerFestivalMethod',
            component: () => import('@/views/date-picker/festivalMethod/CodeExample.vue')
          },
          {
            path: 'holidays',
            name: 'ComponentDatePickerHolidays',
            component: () => import('@/views/date-picker/holidays/CodeExample.vue')
          }
        ]
      },
      {
        path: 'select',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            component: RouteLayout,
            children: [
              {
                path: 'size',
                name: 'ComponentSelectBaseSize',
                component: () => import('@/views/select/base/size/CodeExample.vue')
              },
              {
                path: 'clearable',
                name: 'ComponentSelectBaseClearable',
                component: () => import('@/views/select/base/clearable/CodeExample.vue')
              },
              {
                path: 'disabled',
                name: 'ComponentSelectBaseDisabled',
                component: () => import('@/views/select/base/disabled/CodeExample.vue')
              },
              {
                path: 'icon',
                name: 'ComponentSelectBaseIcon',
                component: () => import('@/views/select/base/icon/CodeExample.vue')
              },
              {
                path: 'loading',
                name: 'ComponentSelectBaseLoading',
                component: () => import('@/views/select/base/loading/CodeExample.vue')
              },
              {
                path: 'filterable',
                name: 'ComponentSelectBaseFilterable',
                component: () => import('@/views/select/base/filterable/CodeExample.vue')
              },
              {
                path: 'remote',
                name: 'ComponentSelectBaseRemote',
                component: () => import('@/views/select/base/remote/CodeExample.vue')
              },
              {
                path: 'group',
                name: 'ComponentSelectBaseGroup',
                component: () => import('@/views/select/base/group/CodeExample.vue')
              },
              {
                path: 'defaultValue',
                name: 'ComponentSelectBaseDefaultValue',
                component: () => import('@/views/select/base/defaultValue/CodeExample.vue')
              },
              {
                path: 'multiple',
                name: 'ComponentSelectBaseMultiple',
                component: () => import('@/views/select/base/multiple/CodeExample.vue')
              },
              {
                path: 'max',
                name: 'ComponentSelectBaseMax',
                component: () => import('@/views/select/base/max/CodeExample.vue')
              },
              {
                path: 'allowCreate',
                name: 'ComponentSelectBaseAllowCreate',
                component: () => import('@/views/select/base/allowCreate/CodeExample.vue')
              },
              {
                path: 'template',
                name: 'ComponentSelectBaseTemplate',
                component: () => import('@/views/select/base/template/CodeExample.vue')
              },
              {
                path: 'scroll',
                name: 'ComponentSelectBaseScroll',
                component: () => import('@/views/select/base/scroll/CodeExample.vue')
              }
            ]
          },
          {
            path: 'config',
            component: RouteLayout,
            children: [
              {
                path: 'clearable',
                name: 'ComponentSelectConfigClearable',
                component: () => import('@/views/select/config/clearable/CodeExample.vue')
              },
              {
                path: 'disabled',
                name: 'ComponentSelectConfigDisabled',
                component: () => import('@/views/select/config/disabled/CodeExample.vue')
              },
              {
                path: 'loading',
                name: 'ComponentSelectConfigLoading',
                component: () => import('@/views/select/config/loading/CodeExample.vue')
              },
              {
                path: 'filterable',
                name: 'ComponentSelectConfigFilterable',
                component: () => import('@/views/select/config/filterable/CodeExample.vue')
              },
              {
                path: 'remote',
                name: 'ComponentSelectConfigRemote',
                component: () => import('@/views/select/config/remote/CodeExample.vue')
              },
              {
                path: 'group',
                name: 'ComponentSelectConfigGroup',
                component: () => import('@/views/select/config/group/CodeExample.vue')
              },
              {
                path: 'defaultValue',
                name: 'ComponentSelectConfigDefaultValue',
                component: () => import('@/views/select/config/defaultValue/CodeExample.vue')
              },
              {
                path: 'multiple',
                name: 'ComponentSelectConfigMultiple',
                component: () => import('@/views/select/config/multiple/CodeExample.vue')
              },
              {
                path: 'allowCreate',
                name: 'ComponentSelectConfigAllowCreate',
                component: () => import('@/views/select/config/allowCreate/CodeExample.vue')
              },
              {
                path: 'template',
                name: 'ComponentSelectConfigTemplate',
                component: () => import('@/views/select/config/template/CodeExample.vue')
              },
              {
                path: 'scroll',
                name: 'ComponentSelectConfigScroll',
                component: () => import('@/views/select/config/scroll/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'pager',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentPagerSize',
            component: () => import('@/views/pager/size/CodeExample.vue')
          },
          {
            path: 'align',
            name: 'ComponentPagerAlign',
            component: () => import('@/views/pager/align/CodeExample.vue')
          },
          {
            path: 'pageSize',
            name: 'ComponentPagerPageSize',
            component: () => import('@/views/pager/pageSize/CodeExample.vue')
          },
          {
            path: 'layout',
            name: 'ComponentPagerLayout',
            component: () => import('@/views/pager/layout/CodeExample.vue')
          },
          {
            path: 'template',
            component: RouteLayout,
            children: [
              {
                path: 'left',
                name: 'ComponentPagerTemplateLeft',
                component: () => import('@/views/pager/template/left/CodeExample.vue')
              },
              {
                path: 'right',
                name: 'ComponentPagerTemplateRight',
                component: () => import('@/views/pager/template/right/CodeExample.vue')
              },
              {
                path: 'func',
                name: 'ComponentPagerTemplateFunc',
                component: () => import('@/views/pager/template/func/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'empty',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'ComponentEmptyBase',
            component: () => import('@/views/empty/base/CodeExample.vue')
          },
          {
            path: 'icon',
            name: 'ComponentEmptyIcon',
            component: () => import('@/views/empty/icon/CodeExample.vue')
          },
          {
            path: 'status',
            name: 'ComponentEmptyStatus',
            component: () => import('@/views/empty/status/CodeExample.vue')
          },
          {
            path: 'imageUrl',
            name: 'ComponentEmptyImageUrl',
            component: () => import('@/views/empty/imageUrl/CodeExample.vue')
          }
        ]
      },
      {
        path: 'result',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'ComponentResultBase',
            component: () => import('@/views/result/base/CodeExample.vue')
          },
          {
            path: 'icon',
            name: 'ComponentResultIcon',
            component: () => import('@/views/result/icon/CodeExample.vue')
          },
          {
            path: 'status',
            name: 'ComponentResultStatus',
            component: () => import('@/views/result/status/CodeExample.vue')
          },
          {
            path: 'imageUrl',
            name: 'ComponentResultImageUrl',
            component: () => import('@/views/result/imageUrl/CodeExample.vue')
          },
          {
            path: 'extra',
            name: 'ComponentResultExtra',
            component: () => import('@/views/result/extra/CodeExample.vue')
          }
        ]
      },
      {
        path: 'notice-bar',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentNoticeBarSize',
            component: () => import('@/views/notice-bar/size/CodeExample.vue')
          },
          {
            path: 'horizontal',
            name: 'ComponentNoticeBarHorizontal',
            component: () => import('@/views/notice-bar/horizontal/CodeExample.vue')
          },
          {
            path: 'direction',
            name: 'ComponentNoticeBarDirection',
            component: () => import('@/views/notice-bar/direction/CodeExample.vue')
          },
          {
            path: 'speed',
            name: 'ComponentNoticeBarSpeed',
            component: () => import('@/views/notice-bar/speed/CodeExample.vue')
          },
          {
            path: 'template',
            component: RouteLayout,
            children: [
              {
                path: 'default',
                name: 'ComponentNoticeBarTemplateDefault',
                component: () => import('@/views/notice-bar/template/default/CodeExample.vue')
              },
              {
                path: 'prefix',
                name: 'ComponentNoticeBarTemplatePrefix',
                component: () => import('@/views/notice-bar/template/prefix/CodeExample.vue')
              },
              {
                path: 'suffix',
                name: 'ComponentNoticeBarTemplateSuffix',
                component: () => import('@/views/notice-bar/template/suffix/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'alert',
        component: RouteLayout,
        children: [
          {
            path: 'global',
            name: 'ComponentModalAlertGlobal',
            component: () => import('@/views/modal/alert/global/CodeExample.vue')
          },
          {
            path: 'draggable',
            name: 'ComponentModalAlertDraggable',
            component: () => import('@/views/modal/alert/draggable/CodeExample.vue')
          },
          {
            path: 'escClosable',
            name: 'ComponentModalAlertEscClosable',
            component: () => import('@/views/modal/alert/escClosable/CodeExample.vue')
          },
          {
            path: 'status',
            name: 'ComponentModalAlertStatus',
            component: () => import('@/views/modal/alert/status/CodeExample.vue')
          },
          {
            path: 'manual',
            name: 'ComponentModalAlertManual',
            component: () => import('@/views/modal/alert/manual/CodeExample.vue')
          },
          {
            path: 'multiple',
            name: 'ComponentModalAlertMultiple',
            component: () => import('@/views/modal/alert/multiple/CodeExample.vue')
          },
          {
            path: 'template',
            name: 'ComponentModalAlertTemplate',
            component: () => import('@/views/modal/alert/template/CodeExample.vue')
          }
        ]
      },
      {
        path: 'confirm',
        component: RouteLayout,
        children: [
          {
            path: 'global',
            name: 'ComponentModalConfirmGlobal',
            component: () => import('@/views/modal/confirm/global/CodeExample.vue')
          },
          {
            path: 'draggable',
            name: 'ComponentModalConfirmDraggable',
            component: () => import('@/views/modal/confirm/draggable/CodeExample.vue')
          },
          {
            path: 'escClosable',
            name: 'ComponentModalConfirmEscClosable',
            component: () => import('@/views/modal/confirm/escClosable/CodeExample.vue')
          },
          {
            path: 'manual',
            name: 'ComponentModalConfirmManual',
            component: () => import('@/views/modal/confirm/manual/CodeExample.vue')
          },
          {
            path: 'multiple',
            name: 'ComponentModalConfirmMultiple',
            component: () => import('@/views/modal/confirm/multiple/CodeExample.vue')
          },
          {
            path: 'template',
            name: 'ComponentModalConfirmTemplate',
            component: () => import('@/views/modal/confirm/template/CodeExample.vue')
          }
        ]
      },
      {
        path: 'message',
        component: RouteLayout,
        children: [
          {
            path: 'global',
            name: 'ComponentModalMessageGlobal',
            component: () => import('@/views/modal/message/global/CodeExample.vue')
          },
          {
            path: 'multiple',
            name: 'ComponentModalMessageMultiple',
            component: () => import('@/views/modal/message/multiple/CodeExample.vue')
          },
          {
            path: 'status',
            name: 'ComponentModalMessageStatus',
            component: () => import('@/views/modal/message/status/CodeExample.vue')
          },
          {
            path: 'template',
            name: 'ComponentModalMessageTemplate',
            component: () => import('@/views/modal/message/template/CodeExample.vue')
          }
        ]
      },
      {
        path: 'notification',
        component: RouteLayout,
        children: [
          {
            path: 'global',
            name: 'ComponentModalNotificationGlobal',
            component: () => import('@/views/modal/notification/global/CodeExample.vue')
          },
          {
            path: 'multiple',
            name: 'ComponentModalNotificationMultiple',
            component: () => import('@/views/modal/notification/multiple/CodeExample.vue')
          },
          {
            path: 'status',
            name: 'ComponentModalNotificationStatus',
            component: () => import('@/views/modal/notification/status/CodeExample.vue')
          },
          {
            path: 'footer',
            name: 'ComponentModalNotificationFooter',
            component: () => import('@/views/modal/notification/footer/CodeExample.vue')
          },
          {
            path: 'template',
            name: 'ComponentModalNotificationTemplate',
            component: () => import('@/views/modal/notification/template/CodeExample.vue')
          }
        ]
      },
      {
        path: 'modal',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'ComponentModalModalBase',
            component: () => import('@/views/modal/modal/base/CodeExample.vue')
          },
          {
            path: 'global',
            name: 'ComponentModalModalGlobal',
            component: () => import('@/views/modal/modal/global/CodeExample.vue')
          },
          {
            path: 'size',
            name: 'ComponentModalModalSize',
            component: () => import('@/views/modal/modal/size/CodeExample.vue')
          },
          {
            path: 'padding',
            name: 'ComponentModalModalPadding',
            component: () => import('@/views/modal/modal/padding/CodeExample.vue')
          },
          {
            path: 'loading',
            name: 'ComponentModalModalLoading',
            component: () => import('@/views/modal/modal/loading/CodeExample.vue')
          },
          {
            path: 'draggable',
            name: 'ComponentModalModalDraggable',
            component: () => import('@/views/modal/modal/draggable/CodeExample.vue')
          },
          {
            path: 'mask',
            name: 'ComponentModalModalMask',
            component: () => import('@/views/modal/modal/mask/CodeExample.vue')
          },
          {
            path: 'lockScroll',
            name: 'ComponentModalModalLockScroll',
            component: () => import('@/views/modal/modal/lockScroll/CodeExample.vue')
          },
          {
            path: 'lockView',
            name: 'ComponentModalModalLockView',
            component: () => import('@/views/modal/modal/lockView/CodeExample.vue')
          },
          {
            path: 'resize',
            name: 'ComponentModalModalResize',
            component: () => import('@/views/modal/modal/resize/CodeExample.vue')
          },
          {
            path: 'manual',
            name: 'ComponentModalModalManual',
            component: () => import('@/views/modal/modal/manual/CodeExample.vue')
          },
          {
            path: 'multiple',
            name: 'ComponentModalModalMultiple',
            component: () => import('@/views/modal/modal/multiple/CodeExample.vue')
          },
          {
            path: 'escClosable',
            name: 'ComponentModalModalEscClosable',
            component: () => import('@/views/modal/modal/escClosable/CodeExample.vue')
          },
          {
            path: 'beforeHide',
            name: 'ComponentModalModalBeforeHide',
            component: () => import('@/views/modal/modal/beforeHide/CodeExample.vue')
          },
          {
            path: 'template',
            component: RouteLayout,
            children: [
              {
                path: 'layout',
                name: 'ComponentModalModalTemplateLayout',
                component: () => import('@/views/modal/modal/template/layout/CodeExample.vue')
              },
              {
                path: 'footer',
                name: 'ComponentModalModalTemplateFooter',
                component: () => import('@/views/modal/modal/template/footer/CodeExample.vue')
              }
            ]
          },
          {
            path: 'button',
            name: 'ComponentModalModalButton',
            component: () => import('@/views/modal/modal/button/CodeExample.vue')
          },
          {
            path: 'confirmClosable',
            name: 'ComponentModalModalConfirmClosable',
            component: () => import('@/views/modal/modal/confirmClosable/CodeExample.vue')
          },
          {
            path: 'cancelClosable',
            name: 'ComponentModalModalCancelClosable',
            component: () => import('@/views/modal/modal/cancelClosable/CodeExample.vue')
          },
          {
            path: 'maximize',
            name: 'ComponentModalModalMaximize',
            component: () => import('@/views/modal/modal/maximize/CodeExample.vue')
          },
          {
            path: 'minimize',
            name: 'ComponentModalModalMinimize',
            component: () => import('@/views/modal/modal/minimize/CodeExample.vue')
          },
          {
            path: 'zoom',
            name: 'ComponentModalModalZoom',
            component: () => import('@/views/modal/modal/zoom/CodeExample.vue')
          },
          {
            path: 'minimizeLayout',
            name: 'ComponentModalModalMinimizeLayout',
            component: () => import('@/views/modal/modal/minimizeLayout/CodeExample.vue')
          },
          {
            path: 'fullscreen',
            name: 'ComponentModalModalFullscreen',
            component: () => import('@/views/modal/modal/fullscreen/CodeExample.vue')
          },
          {
            path: 'remember',
            name: 'ComponentModalModalRemember',
            component: () => import('@/views/modal/modal/remember/CodeExample.vue')
          },
          {
            path: 'storage',
            name: 'ComponentModalModalStorage',
            component: () => import('@/views/modal/modal/storage/CodeExample.vue')
          },
          {
            path: 'iframe',
            name: 'ComponentModalModalIframe',
            component: () => import('@/views/modal/modal/iframe/CodeExample.vue')
          },
          {
            path: 'full',
            name: 'ComponentModalModalFull',
            component: () => import('@/views/modal/modal/full/CodeExample.vue')
          },
          {
            path: 'other',
            component: RouteLayout,
            children: [
              { path: 'form', name: 'ComponentModalModalOtherForm', component: () => import('@/views/modal/other/form/CodeExample.vue') },
              { path: 'table', name: 'ComponentModalModalOtherTable', component: () => import('@/views/modal/other/table/CodeExample.vue') }
            ]
          }
        ]
      },
      {
        path: 'tooltip',
        component: RouteLayout,
        children: [
          {
            path: 'trigger',
            name: 'ComponentTooltipTrigger',
            component: () => import('@/views/tooltip/trigger/CodeExample.vue')
          },
          {
            path: 'enterable',
            name: 'ComponentTooltipEnterable',
            component: () => import('@/views/tooltip/enterable/CodeExample.vue')
          },
          {
            path: 'manual',
            name: 'ComponentTooltipManual',
            component: () => import('@/views/tooltip/manual/CodeExample.vue')
          },
          {
            path: 'single',
            name: 'ComponentTooltipSingle',
            component: () => import('@/views/tooltip/single/CodeExample.vue')
          },
          {
            path: 'table',
            name: 'ComponentTooltipTable',
            component: () => import('@/views/tooltip/table/CodeExample.vue')
          }
        ]
      },
      {
        path: 'switch',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentSwitchSize',
            component: () => import('@/views/switch/size/CodeExample.vue')
          },
          {
            path: 'disabled',
            name: 'ComponentSwitchDisabled',
            component: () => import('@/views/switch/disabled/CodeExample.vue')
          },
          {
            path: 'label',
            name: 'ComponentSwitchLabel',
            component: () => import('@/views/switch/label/CodeExample.vue')
          },
          {
            path: 'value',
            name: 'ComponentSwitchValue',
            component: () => import('@/views/switch/value/CodeExample.vue')
          },
          {
            path: 'icon',
            name: 'ComponentSwitchIcon',
            component: () => import('@/views/switch/icon/CodeExample.vue')
          }
        ]
      },
      {
        path: 'list',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'ComponentListBase',
            component: () => import('@/views/list/base/CodeExample.vue')
          },
          {
            path: 'autoResize',
            name: 'ComponentListAutoResize',
            component: () => import('@/views/list/autoResize/CodeExample.vue')
          },
          {
            path: 'table',
            name: 'ComponentListTable',
            component: () => import('@/views/list/table/CodeExample.vue')
          }
        ]
      },
      {
        path: 'pulldown',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'ComponentPulldownBase',
            component: () => import('@/views/pulldown/base/CodeExample.vue')
          },
          {
            path: 'options',
            name: 'ComponentPulldownOptions',
            component: () => import('@/views/pulldown/options/CodeExample.vue')
          },
          {
            path: 'template',
            name: 'ComponentPulldownTemplate',
            component: () => import('@/views/pulldown/template/CodeExample.vue')
          },
          {
            path: 'select',
            name: 'ComponentPulldownSelect',
            component: () => import('@/views/pulldown/select/CodeExample.vue')
          },
          {
            path: 'table',
            name: 'ComponentPulldownTable',
            component: () => import('@/views/pulldown/table/CodeExample.vue')
          }
        ]
      },
      {
        path: 'collapse',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'ComponentCollapseBase',
            component: () => import('@/views/collapse/base/CodeExample.vue')
          },
          {
            path: 'icon',
            name: 'ComponentCollapseIon',
            component: () => import('@/views/collapse/icon/CodeExample.vue')
          },
          {
            path: 'options',
            name: 'ComponentCollapseOptions',
            component: () => import('@/views/collapse/options/CodeExample.vue')
          },
          {
            path: 'template',
            component: RouteLayout,
            children: [
              {
                path: 'default',
                name: 'ComponentCollapseTemplateDefault',
                component: () => import('@/views/collapse/template/default/CodeExample.vue')
              },
              {
                path: 'title',
                name: 'ComponentCollapseTemplateTitle',
                component: () => import('@/views/collapse/template/title/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'tabs',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'ComponentTabsBase',
            component: () => import('@/views/tabs/base/CodeExample.vue')
          },
          {
            path: 'borderCard',
            name: 'ComponentTabsBorderCard',
            component: () => import('@/views/tabs/borderCard/CodeExample.vue')
          },
          {
            path: 'card',
            name: 'ComponentTabsCard',
            component: () => import('@/views/tabs/card/CodeExample.vue')
          },
          {
            path: 'height',
            name: 'ComponentTabsHeight',
            component: () => import('@/views/tabs/height/CodeExample.vue')
          },
          {
            path: 'roundCard',
            name: 'ComponentTabsRoundCard',
            component: () => import('@/views/tabs/roundCard/CodeExample.vue')
          },
          {
            path: 'options',
            name: 'ComponentTabsOptions',
            component: () => import('@/views/tabs/options/CodeExample.vue')
          },
          {
            path: 'icon',
            name: 'ComponentTabsIcon',
            component: () => import('@/views/tabs/icon/CodeExample.vue')
          },
          {
            path: 'trigger',
            name: 'ComponentTabsRoundTrigger',
            component: () => import('@/views/tabs/trigger/CodeExample.vue')
          },
          {
            path: 'preload',
            name: 'ComponentTabsRoundPreload',
            component: () => import('@/views/tabs/preload/CodeExample.vue')
          },
          {
            path: 'over',
            name: 'ComponentTabsOver',
            component: () => import('@/views/tabs/over/CodeExample.vue')
          },
          {
            path: 'extra',
            name: 'ComponentTabsExtra',
            component: () => import('@/views/tabs/extra/CodeExample.vue')
          },
          {
            path: 'beforeChangeMethod',
            name: 'ComponentTabsBeforeChangeMethod',
            component: () => import('@/views/tabs/beforeChangeMethod/CodeExample.vue')
          },
          {
            path: 'closeConfig',
            name: 'ComponentTabsCloseConfig',
            component: () => import('@/views/tabs/closeConfig/CodeExample.vue')
          },
          {
            path: 'beforeClose',
            name: 'ComponentTabsBeforeClose',
            component: () => import('@/views/tabs/beforeClose/CodeExample.vue')
          },
          {
            path: 'refreshConfig',
            name: 'ComponentTabsRefreshConfig',
            component: () => import('@/views/tabs/refreshConfig/CodeExample.vue')
          },
          {
            path: 'permissionCode',
            name: 'ComponentTabsPermissionCode',
            component: () => import('@/views/tabs/permissionCode/CodeExample.vue')
          }
        ]
      },
      {
        path: 'drawer',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentDrawerSize',
            component: () => import('@/views/drawer/size/CodeExample.vue')
          },
          {
            path: 'base',
            name: 'ComponentDrawerBase',
            component: () => import('@/views/drawer/base/CodeExample.vue')
          },
          {
            path: 'wh',
            name: 'ComponentDrawerWH',
            component: () => import('@/views/drawer/wh/CodeExample.vue')
          },
          {
            path: 'maskClosable',
            name: 'ComponentDrawerMaskClosable',
            component: () => import('@/views/drawer/maskClosable/CodeExample.vue')
          },
          {
            path: 'padding',
            name: 'ComponentDrawerPadding',
            component: () => import('@/views/drawer/padding/CodeExample.vue')
          },
          {
            path: 'loading',
            name: 'ComponentDrawerLoading',
            component: () => import('@/views/drawer/loading/CodeExample.vue')
          },
          {
            path: 'button',
            name: 'ComponentDrawerButton',
            component: () => import('@/views/drawer/button/CodeExample.vue')
          },
          {
            path: 'confirmClosable',
            name: 'ComponentDrawerConfirmClosable',
            component: () => import('@/views/drawer/confirmClosable/CodeExample.vue')
          },
          {
            path: 'cancelClosable',
            name: 'ComponentDrawerCancelClosable',
            component: () => import('@/views/drawer/cancelClosable/CodeExample.vue')
          },
          {
            path: 'multiple',
            name: 'ComponentDrawerMultiple',
            component: () => import('@/views/drawer/multiple/CodeExample.vue')
          },
          {
            path: 'resize',
            name: 'ComponentDrawerEscResize',
            component: () => import('@/views/drawer/resize/CodeExample.vue')
          },
          {
            path: 'escClosable',
            name: 'ComponentDrawerEscClosable',
            component: () => import('@/views/drawer/escClosable/CodeExample.vue')
          },
          {
            path: 'beforeHide',
            name: 'ComponentDrawerBeforeHide',
            component: () => import('@/views/drawer/beforeHide/CodeExample.vue')
          },
          {
            path: 'template',
            component: RouteLayout,
            children: [
              {
                path: 'layout',
                name: 'ComponentDrawerTemplateLayout',
                component: () => import('@/views/drawer/template/layout/CodeExample.vue')
              },
              {
                path: 'footer',
                name: 'ComponentDrawerTemplateFooter',
                component: () => import('@/views/drawer/template/footer/CodeExample.vue')
              }
            ]
          },
          {
            path: 'iframe',
            name: 'ComponentDrawerIframe',
            component: () => import('@/views/drawer/iframe/CodeExample.vue')
          }
        ]
      },
      {
        path: 'loading',
        component: RouteLayout,
        children: [
          {
            path: 'global',
            name: 'ComponentLoadingGlobalLoading',
            component: () => import('@/views/loading/global/loading/CodeExample.vue')
          },
          {
            path: 'base',
            name: 'ComponentLoadingBase',
            component: () => import('@/views/loading/base/CodeExample.vue')
          },
          {
            path: 'status',
            name: 'ComponentLoadingStatus',
            component: () => import('@/views/loading/status/CodeExample.vue')
          },
          {
            path: 'icon',
            name: 'ComponentLoadingIcon',
            component: () => import('@/views/loading/icon/CodeExample.vue')
          },
          {
            path: 'text',
            name: 'ComponentLoadingText',
            component: () => import('@/views/loading/text/CodeExample.vue')
          },
          {
            path: 'template',
            name: 'ComponentLoadingTemplate',
            component: () => import('@/views/loading/template/CodeExample.vue')
          }
        ]
      },
      {
        path: 'tip',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'ComponentTipBase',
            component: () => import('@/views/tip/base/CodeExample.vue')
          },
          {
            path: 'icon',
            name: 'ComponentTipIcon',
            component: () => import('@/views/tip/icon/CodeExample.vue')
          },
          {
            path: 'title',
            name: 'ComponentTipTitle',
            component: () => import('@/views/tip/title/CodeExample.vue')
          }
        ]
      },
      {
        path: 'alert',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'ComponentAlertBase',
            component: () => import('@/views/alert/base/CodeExample.vue')
          },
          {
            path: 'icon',
            name: 'ComponentAlertIcon',
            component: () => import('@/views/alert/icon/CodeExample.vue')
          },
          {
            path: 'title',
            name: 'ComponentAlertTitle',
            component: () => import('@/views/alert/title/CodeExample.vue')
          },
          {
            path: 'close',
            name: 'ComponentAlertClose',
            component: () => import('@/views/alert/close/CodeExample.vue')
          }
        ]
      },
      {
        path: 'card',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'ComponentCardBase',
            component: () => import('@/views/card/base/CodeExample.vue')
          },
          {
            path: 'width',
            name: 'ComponentCardWidth',
            component: () => import('@/views/card/width/CodeExample.vue')
          },
          {
            path: 'height',
            name: 'ComponentCardHeight',
            component: () => import('@/views/card/height/CodeExample.vue')
          },
          {
            path: 'loading',
            name: 'ComponentCardLoading',
            component: () => import('@/views/card/loading/CodeExample.vue')
          },
          {
            path: 'border',
            name: 'ComponentCardBorder',
            component: () => import('@/views/card/border/CodeExample.vue')
          },
          {
            path: 'padding',
            name: 'ComponentCardPadding',
            component: () => import('@/views/card/padding/CodeExample.vue')
          },
          {
            path: 'shadow',
            name: 'ComponentCardShadow',
            component: () => import('@/views/card/shadow/CodeExample.vue')
          },
          {
            path: 'template',
            name: 'ComponentCardTemplate',
            component: () => import('@/views/card/template/CodeExample.vue')
          },
          {
            path: 'refresh',
            name: 'ComponentCardRefresh',
            component: () => import('@/views/card/refresh/CodeExample.vue')
          }
        ]
      },
      {
        path: 'carousel',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'ComponentCarouselBase',
            component: () => import('@/views/carousel/base/CodeExample.vue')
          },
          {
            path: 'height',
            name: 'ComponentCarouselHeight',
            component: () => import('@/views/carousel/height/CodeExample.vue')
          },
          {
            path: 'autoPlay',
            name: 'ComponentCarouselAutoPlay',
            component: () => import('@/views/carousel/autoPlay/CodeExample.vue')
          },
          {
            path: 'showIndicators',
            name: 'ComponentCarouselShowIndicators',
            component: () => import('@/views/carousel/showIndicators/CodeExample.vue')
          },
          {
            path: 'vertical',
            name: 'ComponentCarouselVertical',
            component: () => import('@/views/carousel/vertical/CodeExample.vue')
          },
          {
            path: 'options',
            name: 'ComponentCarouselOptions',
            component: () => import('@/views/carousel/options/CodeExample.vue')
          },
          {
            path: 'template',
            name: 'ComponentCarouselTemplate',
            component: () => import('@/views/carousel/template/CodeExample.vue')
          }
        ]
      },
      {
        path: 'calendar',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentCalendarSize',
            component: () => import('@/views/calendar/size/CodeExample.vue')
          },
          {
            path: 'height',
            name: 'ComponentCalendarHeight',
            component: () => import('@/views/calendar/height/CodeExample.vue')
          },
          {
            path: 'date',
            name: 'ComponentCalendarDate',
            component: () => import('@/views/calendar/date/CodeExample.vue')
          },
          {
            path: 'week',
            name: 'ComponentCalendarWeek',
            component: () => import('@/views/calendar/week/CodeExample.vue')
          },
          {
            path: 'month',
            name: 'ComponentCalendarMonth',
            component: () => import('@/views/calendar/month/CodeExample.vue')
          },
          {
            path: 'quarter',
            name: 'ComponentCalendarQuarter',
            component: () => import('@/views/calendar/quarter/CodeExample.vue')
          },
          {
            path: 'year',
            name: 'ComponentCalendarYear',
            component: () => import('@/views/calendar/year/CodeExample.vue')
          },
          {
            path: 'festivalMethod',
            name: 'ComponentCalendarFestivalMethod',
            component: () => import('@/views/calendar/festivalMethod/CodeExample.vue')
          },
          {
            path: 'events',
            name: 'ComponentCalendarFestivalEvents',
            component: () => import('@/views/calendar/events/CodeExample.vue')
          }
        ]
      },
      {
        path: 'print',
        component: RouteLayout,
        children: [
          {
            path: 'global',
            name: 'ComponentPrintGlobalPrint',
            component: () => import('@/views/print/global/print/CodeExample.vue')
          },
          {
            path: 'base',
            component: RouteLayout,
            children: [
              {
                path: 'html',
                name: 'ComponentPrintBaseHtml',
                component: () => import('@/views/print/base/html/CodeExample.vue')
              },
              {
                path: 'base',
                name: 'ComponentPrintBaseImg',
                component: () => import('@/views/print/base/img/CodeExample.vue')
              },
              {
                path: 'table',
                name: 'ComponentPrintBaseTable',
                component: () => import('@/views/print/base/table/CodeExample.vue')
              }
            ]
          },
          {
            path: 'page',
            component: RouteLayout,
            children: [
              {
                path: 'basics',
                name: 'ComponentPrintPageBasics',
                component: () => import('@/views/print/page/basics/CodeExample.vue')
              },
              {
                path: 'header',
                name: 'ComponentPrintPageHeader',
                component: () => import('@/views/print/page/header/CodeExample.vue')
              },
              {
                path: 'footer',
                name: 'ComponentPrintPageFooter',
                component: () => import('@/views/print/page/footer/CodeExample.vue')
              },
              {
                path: 'image',
                name: 'ComponentPrintPageImage',
                component: () => import('@/views/print/page/image/CodeExample.vue')
              },
              {
                path: 'table',
                name: 'ComponentPrintPageTable',
                component: () => import('@/views/print/page/table/CodeExample.vue')
              },
              {
                path: 'template',
                name: 'ComponentPrintPageTemplate',
                component: () => import('@/views/print/page/template/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'watermark',
        component: RouteLayout,
        children: [
          {
            path: 'global',
            name: 'ComponentWatermarkGlobal',
            component: () => import('@/views/watermark/global/watermark/CodeExample.vue')
          },
          {
            path: 'base',
            name: 'ComponentWatermarkBase',
            component: () => import('@/views/watermark/base/CodeExample.vue')
          },
          {
            path: 'color',
            name: 'ComponentWatermarkColor',
            component: () => import('@/views/watermark/color/CodeExample.vue')
          },
          {
            path: 'fontSize',
            name: 'ComponentWatermarkFontSize',
            component: () => import('@/views/watermark/fontSize/CodeExample.vue')
          },
          {
            path: 'table',
            name: 'ComponentWatermarkTable',
            component: () => import('@/views/watermark/table/CodeExample.vue')
          },
          {
            path: 'form',
            name: 'ComponentWatermarkForm',
            component: () => import('@/views/watermark/form/CodeExample.vue')
          }
        ]
      },
      {
        path: 'countdown',
        component: RouteLayout,
        children: [
          {
            path: 'size',
            name: 'ComponentCountdownSize',
            component: () => import('@/views/countdown/size/CodeExample.vue')
          },
          {
            path: 'base',
            name: 'ComponentCountdownBase',
            component: () => import('@/views/countdown/base/CodeExample.vue')
          },
          {
            path: 'format',
            name: 'ComponentCountdownFormat',
            component: () => import('@/views/countdown/format/CodeExample.vue')
          },
          {
            path: 'template',
            name: 'ComponentCountdownTemplate',
            component: () => import('@/views/countdown/template/CodeExample.vue')
          }
        ]
      },
      {
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
                path: 'template',
                name: 'ComponentTreeBaseTemplate',
                component: () => import('@/views/tree/base/template/CodeExample.vue')
              }
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
                path: 'highlight',
                name: 'ComponentTreeCheckboxHighlight',
                component: () => import('@/views/tree/checkbox/highlight/CodeExample.vue')
              },
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
                path: 'highlight',
                name: 'ComponentTreeRadioHighlight',
                component: () => import('@/views/tree/radio/highlight/CodeExample.vue')
              },
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
          }
        ]
      },
      {
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
              {
                path: 'popupWH',
                name: 'ComponentTreeSelectBasePopupWH',
                component: () => import('@/views/tree-select/base/popupWH/CodeExample.vue')
              },
              {
                path: 'showLine',
                name: 'ComponentTreeSelectBaseShowLine',
                component: () => import('@/views/tree-select/base/showLine/CodeExample.vue')
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
              {
                path: 'trigger',
                name: 'ComponentTreeSelectCheckboxTrigger',
                component: () => import('@/views/tree-select/checkbox/trigger/CodeExample.vue')
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
              }
            ]
          }
        ]
      },
      {
        path: 'table-select',
        component: RouteLayout,
        children: [
          {
            path: 'basics',
            component: RouteLayout,
            children: [
              {
                path: 'size',
                name: 'ComponentTableSelectBaseSize',
                component: () => import('@/views/table-select/base/size/CodeExample.vue')
              },
              {
                path: 'loading',
                name: 'ComponentTableSelectBaseLoading',
                component: () => import('@/views/table-select/base/loading/CodeExample.vue')
              },
              {
                path: 'border',
                name: 'ComponentTableSelectBaseBorder',
                component: () => import('@/views/table-select/base/border/CodeExample.vue')
              },
              {
                path: 'optionProps',
                name: 'ComponentTableSelectBaseOptionProps',
                component: () => import('@/views/table-select/base/optionProps/CodeExample.vue')
              },
              {
                path: 'popupWH',
                name: 'ComponentTableSelectBasePopupWH',
                component: () => import('@/views/table-select/base/popupWH/CodeExample.vue')
              },
              {
                path: 'footer',
                name: 'ComponentTableSelectBaseFooter',
                component: () => import('@/views/table-select/base/footer/CodeExample.vue')
              }
            ]
          },
          {
            path: 'checkbox',
            component: RouteLayout,
            children: [
              {
                path: 'base',
                name: 'ComponentTableSelectCheckboxBase',
                component: () => import('@/views/table-select/checkbox/base/CodeExample.vue')
              },
              {
                path: 'trigger',
                name: 'ComponentTableSelectCheckboxTrigger',
                component: () => import('@/views/table-select/checkbox/trigger/CodeExample.vue')
              }
            ]
          },
          {
            path: 'form',
            component: RouteLayout,
            children: [
              {
                path: 'search',
                name: 'ComponentTableSelectFormSearch',
                component: () => import('@/views/table-select/form/search/CodeExample.vue')
              },
              {
                path: 'collapse',
                name: 'ComponentTableSelectFormCollapse',
                component: () => import('@/views/table-select/form/collapse/CodeExample.vue')
              }
            ]
          },
          {
            path: 'pager',
            component: RouteLayout,
            children: [
              {
                path: 'page',
                name: 'ComponentTableSelectPagerPage',
                component: () => import('@/views/table-select/pager/page/CodeExample.vue')
              }
            ]
          },
          {
            path: 'scroll',
            component: RouteLayout,
            children: [
              {
                path: 'vertical',
                name: 'ComponentTableSelectScrollVertical',
                component: () => import('@/views/table-select/scroll/vertical/CodeExample.vue')
              },
              {
                path: 'horizontal',
                name: 'ComponentTableSelectScrollHorizontal',
                component: () => import('@/views/table-select/scroll/horizontal/CodeExample.vue')
              },
              {
                path: 'hv',
                name: 'ComponentTableSelectScrollHV',
                component: () => import('@/views/table-select/scroll/hv/CodeExample.vue')
              },
              {
                path: 'group',
                name: 'ComponentTableSelectScrollGroup',
                component: () => import('@/views/table-select/scroll/group/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'form',
        component: RouteLayout,
        children: [
          {
            path: 'basics',
            component: RouteLayout,
            children: [
              {
                path: 'base',
                name: 'ComponentFormBasicsBase',
                component: () => import('@/views/form/basics/base/CodeExample.vue')
              },
              {
                path: 'size',
                name: 'ComponentFormBasicsSize',
                component: () => import('@/views/form/basics/size/CodeExample.vue')
              },
              {
                path: 'field',
                name: 'ComponentFormBasicsField',
                component: () => import('@/views/form/basics/field/CodeExample.vue')
              },
              {
                path: 'colon',
                name: 'ComponentFormBasicsColon',
                component: () => import('@/views/form/basics/colon/CodeExample.vue')
              },
              {
                path: 'padding',
                name: 'ComponentFormBasicsPadding',
                component: () => import('@/views/form/basics/padding/CodeExample.vue')
              },
              {
                path: 'bold',
                name: 'ComponentFormBasicsBold',
                component: () => import('@/views/form/basics/bold/CodeExample.vue')
              },
              {
                path: 'titleAlign',
                name: 'ComponentFormBasicsTitleAlign',
                component: () => import('@/views/form/basics/titleAlign/CodeExample.vue')
              },
              {
                path: 'align',
                name: 'ComponentFormBasicsAlign',
                component: () => import('@/views/form/basics/align/CodeExample.vue')
              },
              {
                path: 'titlePrefix',
                name: 'ComponentFormBasicsTitlePrefix',
                component: () => import('@/views/form/basics/titlePrefix/CodeExample.vue')
              },
              {
                path: 'titleSuffix',
                name: 'ComponentFormBasicsTitleSuffix',
                component: () => import('@/views/form/basics/titleSuffix/CodeExample.vue')
              },
              {
                path: 'width',
                name: 'ComponentFormBasicsWidth',
                component: () => import('@/views/form/basics/width/CodeExample.vue')
              },
              {
                path: 'overflow',
                name: 'ComponentFormBasicsOverflow',
                component: () => import('@/views/form/basics/overflow/CodeExample.vue')
              },
              {
                path: 'border',
                name: 'ComponentFormBasicsBorder',
                component: () => import('@/views/form/basics/border/CodeExample.vue')
              },
              {
                path: 'titleBackground',
                name: 'ComponentFormBasicsTitleBackground',
                component: () => import('@/views/form/basics/titleBackground/CodeExample.vue')
              },
              {
                path: 'group',
                name: 'ComponentFormBasicsGroup',
                component: () => import('@/views/form/basics/group/CodeExample.vue')
              },
              {
                path: 'customLayout',
                name: 'ComponentFormBasicsCustomLayout',
                component: () => import('@/views/form/basics/customLayout/CodeExample.vue')
              },
              {
                path: 'horizontal',
                name: 'ComponentFormBasicsHorizontal',
                component: () => import('@/views/form/basics/horizontal/CodeExample.vue')
              },
              {
                path: 'vertical',
                name: 'ComponentFormBasicsVertical',
                component: () => import('@/views/form/basics/vertical/CodeExample.vue')
              },
              {
                path: 'collapse',
                component: RouteLayout,
                children: [
                  {
                    path: 'base',
                    name: 'ComponentFormBasicsCollapseBase',
                    component: () => import('@/views/form/basics/collapse/base/CodeExample.vue')
                  },
                  {
                    path: 'buttonText',
                    name: 'ComponentFormBasicsCollapseButtonText',
                    component: () => import('@/views/form/basics/collapse/buttonText/CodeExample.vue')
                  },
                  {
                    path: 'buttonIcon',
                    name: 'ComponentFormBasicsCollapseButtonIcon',
                    component: () => import('@/views/form/basics/collapse/buttonIcon/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'validate',
                component: RouteLayout,
                children: [
                  {
                    path: 'rules',
                    name: 'ComponentFormBasicsValidateRules',
                    component: () => import('@/views/form/basics/validate/rules/CodeExample.vue')
                  },
                  {
                    path: 'string',
                    name: 'ComponentFormBasicsValidateString',
                    component: () => import('@/views/form/basics/validate/string/CodeExample.vue')
                  },
                  {
                    path: 'number',
                    name: 'ComponentFormBasicsValidateNumber',
                    component: () => import('@/views/form/basics/validate/number/CodeExample.vue')
                  },
                  {
                    path: 'regexp',
                    name: 'ComponentFormBasicsValidateRegexp',
                    component: () => import('@/views/form/basics/validate/regexp/CodeExample.vue')
                  },
                  {
                    path: 'array',
                    name: 'ComponentFormBasicsValidateArray',
                    component: () => import('@/views/form/basics/validate/array/CodeExample.vue')
                  },
                  {
                    path: 'custom',
                    name: 'ComponentFormBasicsValidateCustom',
                    component: () => import('@/views/form/basics/validate/custom/CodeExample.vue')
                  },
                  {
                    path: 'theme',
                    name: 'ComponentFormBasicsValidateTheme',
                    component: () => import('@/views/form/basics/validate/theme/CodeExample.vue')
                  },
                  {
                    path: 'manual',
                    name: 'ComponentFormBasicsValidateManual',
                    component: () => import('@/views/form/basics/validate/manual/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'itemRender',
                component: RouteLayout,
                children: [
                  {
                    path: 'input',
                    name: 'ComponentFormBasicsItemRenderInput',
                    component: () => import('@/views/form/basics/itemRender/input/CodeExample.vue')
                  },
                  {
                    path: 'textarea',
                    name: 'ComponentFormBasicsItemRenderTextarea',
                    component: () => import('@/views/form/basics/itemRender/textarea/CodeExample.vue')
                  },
                  {
                    path: 'select',
                    name: 'ComponentFormBasicsItemRenderSelect',
                    component: () => import('@/views/form/basics/itemRender/select/CodeExample.vue')
                  },
                  {
                    path: 'vxe-button-group',
                    name: 'ComponentFormBasicsItemRenderVxeButtonGroup',
                    component: () => import('@/views/form/basics/itemRender/vxe-button-group/CodeExample.vue')
                  },
                  {
                    path: 'vxe-input',
                    name: 'ComponentFormBasicsItemRenderVxeInput',
                    component: () => import('@/views/form/basics/itemRender/vxe-input/CodeExample.vue')
                  },
                  {
                    path: 'vxe-number-input',
                    name: 'ComponentFormBasicsItemRenderVxeNumberInput',
                    component: () => import('@/views/form/basics/itemRender/vxe-number-input/CodeExample.vue')
                  },
                  {
                    path: 'vxe-textarea',
                    name: 'ComponentFormBasicsItemRenderVxeTextarea',
                    component: () => import('@/views/form/basics/itemRender/vxe-textarea/CodeExample.vue')
                  },
                  {
                    path: 'vxe-select',
                    name: 'ComponentFormBasicsItemRenderVxeSelect',
                    component: () => import('@/views/form/basics/itemRender/vxe-select/CodeExample.vue')
                  },
                  {
                    path: 'vxe-date-picker',
                    name: 'ComponentFormBasicsItemRenderVxeDatePicker',
                    component: () => import('@/views/form/basics/itemRender/vxe-date-picker/CodeExample.vue')
                  },
                  {
                    path: 'vxe-tree-select',
                    name: 'ComponentFormBasicsItemRenderVxeTreeSelect',
                    component: () => import('@/views/form/basics/itemRender/vxe-tree-select/CodeExample.vue')
                  },
                  {
                    path: 'vxe-table-select',
                    name: 'ComponentFormBasicsItemRenderVxeTableSelect',
                    component: () => import('@/views/form/basics/itemRender/vxe-table-select/CodeExample.vue')
                  },
                  {
                    path: 'vxe-switch',
                    name: 'ComponentFormBasicsItemRenderVxeSwitch',
                    component: () => import('@/views/form/basics/itemRender/vxe-switch/CodeExample.vue')
                  },
                  {
                    path: 'vxe-radio-group',
                    name: 'ComponentFormBasicsItemRenderVxeRadioGroup',
                    component: () => import('@/views/form/basics/itemRender/vxe-radio-group/CodeExample.vue')
                  },
                  {
                    path: 'vxe-checkbox-group',
                    name: 'ComponentFormBasicsItemRenderVxeCheckboxGroup',
                    component: () => import('@/views/form/basics/itemRender/vxe-checkbox-group/CodeExample.vue')
                  },
                  {
                    path: 'vxe-rate',
                    name: 'ComponentFormBasicsItemRenderVxeRate',
                    component: () => import('@/views/form/basics/itemRender/vxe-rate/CodeExample.vue')
                  },
                  {
                    path: 'vxe-slider',
                    name: 'ComponentFormBasicsItemRenderVxeSlider',
                    component: () => import('@/views/form/basics/itemRender/vxe-slider/CodeExample.vue')
                  },
                  {
                    path: 'vxe-upload',
                    name: 'ComponentFormBasicsItemRenderVxeUpload',
                    component: () => import('@/views/form/basics/itemRender/vxe-upload/CodeExample.vue')
                  },
                  {
                    path: 'readonly',
                    name: 'ComponentFormBasicsItemRenderReadonly',
                    component: () => import('@/views/form/basics/itemRender/readonly/CodeExample.vue')
                  },
                  {
                    path: 'disabled',
                    name: 'ComponentFormBasicsItemRenderDisabled',
                    component: () => import('@/views/form/basics/itemRender/disabled/CodeExample.vue')
                  },
                  {
                    path: 'linkageDisabled',
                    name: 'ComponentFormBasicsItemRenderLinkageDisabled',
                    component: () => import('@/views/form/basics/itemRender/linkageDisabled/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'itemTemplate',
                component: RouteLayout,
                children: [
                  {
                    path: 'vxe-button',
                    name: 'ComponentFormBasicsItemTemplateVxeButton',
                    component: () => import('@/views/form/basics/itemTemplate/vxe-button/CodeExample.vue')
                  },
                  {
                    path: 'vxe-input',
                    name: 'ComponentFormBasicsItemTemplateVxeInput',
                    component: () => import('@/views/form/basics/itemTemplate/vxe-input/CodeExample.vue')
                  },
                  {
                    path: 'vxe-number-input',
                    name: 'ComponentFormBasicsItemTemplateVxeNumberInput',
                    component: () => import('@/views/form/basics/itemTemplate/vxe-number-input/CodeExample.vue')
                  },
                  {
                    path: 'vxe-textarea',
                    name: 'ComponentFormBasicsItemTemplateVxeTextarea',
                    component: () => import('@/views/form/basics/itemTemplate/vxe-textarea/CodeExample.vue')
                  },
                  {
                    path: 'vxe-select',
                    name: 'ComponentFormBasicsItemTemplateVxeSelect',
                    component: () => import('@/views/form/basics/itemTemplate/vxe-select/CodeExample.vue')
                  },
                  {
                    path: 'vxe-date-picker',
                    name: 'ComponentFormBasicsItemTemplateVxeDatePicker',
                    component: () => import('@/views/form/basics/itemTemplate/vxe-date-picker/CodeExample.vue')
                  },
                  {
                    path: 'vxe-tree-select',
                    name: 'ComponentFormBasicsItemTemplateVxeTreeSelect',
                    component: () => import('@/views/form/basics/itemTemplate/vxe-tree-select/CodeExample.vue')
                  },
                  {
                    path: 'vxe-switch',
                    name: 'ComponentFormBasicsItemTemplateVxeSwitch',
                    component: () => import('@/views/form/basics/itemTemplate/vxe-switch/CodeExample.vue')
                  },
                  {
                    path: 'vxe-radio-group',
                    name: 'ComponentFormBasicsItemTemplateVxeRadioGroup',
                    component: () => import('@/views/form/basics/itemTemplate/vxe-radio-group/CodeExample.vue')
                  },
                  {
                    path: 'vxe-checkbox-group',
                    name: 'ComponentFormBasicsItemTemplateVxeCheckboxGroup',
                    component: () => import('@/views/form/basics/itemTemplate/vxe-checkbox-group/CodeExample.vue')
                  },
                  {
                    path: 'vxe-rate',
                    name: 'ComponentFormBasicsItemTemplateVxeRate',
                    component: () => import('@/views/form/basics/itemTemplate/vxe-rate/CodeExample.vue')
                  },
                  {
                    path: 'vxe-slider',
                    name: 'ComponentFormBasicsItemTemplateVxeSlider',
                    component: () => import('@/views/form/basics/itemTemplate/vxe-slider/CodeExample.vue')
                  },
                  {
                    path: 'vxe-upload',
                    name: 'ComponentFormBasicsItemTemplateVxeUpload',
                    component: () => import('@/views/form/basics/itemTemplate/vxe-upload/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'template',
                component: RouteLayout,
                children: [
                  {
                    path: 'title',
                    name: 'ComponentFormBasicsTemplateTitle',
                    component: () => import('@/views/form/basics/template/title/CodeExample.vue')
                  },
                  {
                    path: 'extra',
                    name: 'ComponentFormBasicsTemplateExtra',
                    component: () => import('@/views/form/basics/template/extra/CodeExample.vue')
                  },
                  {
                    path: 'content',
                    name: 'ComponentFormBasicsTemplateContent',
                    component: () => import('@/views/form/basics/template/content/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'tabs',
                name: 'ComponentFormBasicsTabs',
                component: () => import('@/views/form/basics/tabs/CodeExample.vue')
              },
              {
                path: 'resumeTemplate',
                name: 'ComponentFormBasicsResumeTemplate',
                component: () => import('@/views/form/basics/resumeTemplate/CodeExample.vue')
              }
            ]
          },
          {
            path: 'config',
            component: RouteLayout,
            children: [
              {
                path: 'base',
                name: 'ComponentFormConfigBase',
                component: () => import('@/views/form/config/base/CodeExample.vue')
              },
              {
                path: 'field',
                name: 'ComponentFormConfigField',
                component: () => import('@/views/form/config/field/CodeExample.vue')
              },
              {
                path: 'padding',
                name: 'ComponentFormConfigPadding',
                component: () => import('@/views/form/config/padding/CodeExample.vue')
              },
              {
                path: 'colon',
                name: 'ComponentFormConfigColon',
                component: () => import('@/views/form/config/colon/CodeExample.vue')
              },
              {
                path: 'bold',
                name: 'ComponentFormConfigBold',
                component: () => import('@/views/form/config/bold/CodeExample.vue')
              },
              {
                path: 'tooltip',
                name: 'ComponentFormConfigTooltip',
                component: () => import('@/views/form/config/tooltip/CodeExample.vue')
              },
              {
                path: 'border',
                name: 'ComponentFormConfigBorder',
                component: () => import('@/views/form/config/border/CodeExample.vue')
              },
              {
                path: 'titleBackground',
                name: 'ComponentFormConfigTitleBackground',
                component: () => import('@/views/form/config/titleBackground/CodeExample.vue')
              },
              {
                path: 'group',
                name: 'ComponentFormConfigGroup',
                component: () => import('@/views/form/config/group/CodeExample.vue')
              },
              {
                path: 'horizontal',
                name: 'ComponentFormConfigHorizontal',
                component: () => import('@/views/form/config/horizontal/CodeExample.vue')
              },
              {
                path: 'vertical',
                name: 'ComponentFormConfigVertical',
                component: () => import('@/views/form/config/vertical/CodeExample.vue')
              },
              {
                path: 'collapse',
                component: RouteLayout,
                children: [
                  {
                    path: 'base',
                    name: 'ComponentFormConfigCollapseBase',
                    component: () => import('@/views/form/config/collapse/base/CodeExample.vue')
                  },
                  {
                    path: 'buttonText',
                    name: 'ComponentFormConfigCollapseButtonText',
                    component: () => import('@/views/form/config/collapse/buttonText/CodeExample.vue')
                  },
                  {
                    path: 'buttonIcon',
                    name: 'ComponentFormConfigCollapseButtonIcon',
                    component: () => import('@/views/form/config/collapse/buttonIcon/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'validate',
                component: RouteLayout,
                children: [
                  {
                    path: 'rules',
                    name: 'ComponentFormConfigValidateRules',
                    component: () => import('@/views/form/config/validate/rules/CodeExample.vue')
                  },
                  {
                    path: 'string',
                    name: 'ComponentFormConfigValidateString',
                    component: () => import('@/views/form/config/validate/string/CodeExample.vue')
                  },
                  {
                    path: 'number',
                    name: 'ComponentFormConfigValidateNumber',
                    component: () => import('@/views/form/config/validate/number/CodeExample.vue')
                  },
                  {
                    path: 'regexp',
                    name: 'ComponentFormConfigValidateRegexp',
                    component: () => import('@/views/form/config/validate/regexp/CodeExample.vue')
                  },
                  {
                    path: 'array',
                    name: 'ComponentFormConfigValidateArray',
                    component: () => import('@/views/form/config/validate/array/CodeExample.vue')
                  },
                  {
                    path: 'custom',
                    name: 'ComponentFormConfigValidateCustom',
                    component: () => import('@/views/form/config/validate/custom/CodeExample.vue')
                  },
                  {
                    path: 'theme',
                    name: 'ComponentFormConfigValidateTheme',
                    component: () => import('@/views/form/config/validate/theme/CodeExample.vue')
                  },
                  {
                    path: 'manual',
                    name: 'ComponentFormConfigValidateManual',
                    component: () => import('@/views/form/config/validate/manual/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'itemRender',
                component: RouteLayout,
                children: [
                  {
                    path: 'input',
                    name: 'ComponentFormConfigItemRenderInput',
                    component: () => import('@/views/form/config/itemRender/input/CodeExample.vue')
                  },
                  {
                    path: 'textarea',
                    name: 'ComponentFormConfigItemRenderTextarea',
                    component: () => import('@/views/form/config/itemRender/textarea/CodeExample.vue')
                  },
                  {
                    path: 'select',
                    name: 'ComponentFormConfigItemRenderSelect',
                    component: () => import('@/views/form/config/itemRender/select/CodeExample.vue')
                  },
                  {
                    path: 'vxe-button-group',
                    name: 'ComponentFormConfigItemRenderVxeButtonGroup',
                    component: () => import('@/views/form/config/itemRender/vxe-button-group/CodeExample.vue')
                  },
                  {
                    path: 'vxe-input',
                    name: 'ComponentFormConfigItemRenderVxeInput',
                    component: () => import('@/views/form/config/itemRender/vxe-input/CodeExample.vue')
                  },
                  {
                    path: 'vxe-textarea',
                    name: 'ComponentFormConfigItemRenderVxeTextarea',
                    component: () => import('@/views/form/config/itemRender/vxe-textarea/CodeExample.vue')
                  },
                  {
                    path: 'vxe-number-input',
                    name: 'ComponentFormConfigItemRenderVxeNumberInput',
                    component: () => import('@/views/form/config/itemRender/vxe-number-input/CodeExample.vue')
                  },
                  {
                    path: 'vxe-select',
                    name: 'ComponentFormConfigItemRenderVxeSelect',
                    component: () => import('@/views/form/config/itemRender/vxe-select/CodeExample.vue')
                  },
                  {
                    path: 'vxe-date-picker',
                    name: 'ComponentFormConfigItemRenderVxeDatePicker',
                    component: () => import('@/views/form/config/itemRender/vxe-date-picker/CodeExample.vue')
                  },
                  {
                    path: 'vxe-tree-select',
                    name: 'ComponentFormConfigItemRenderVxeTreeSelect',
                    component: () => import('@/views/form/config/itemRender/vxe-tree-select/CodeExample.vue')
                  },
                  {
                    path: 'vxe-table-select',
                    name: 'ComponentFormConfigItemRenderVxeTableSelect',
                    component: () => import('@/views/form/config/itemRender/vxe-table-select/CodeExample.vue')
                  },
                  {
                    path: 'vxe-switch',
                    name: 'ComponentFormConfigItemRenderVxeSwitch',
                    component: () => import('@/views/form/config/itemRender/vxe-switch/CodeExample.vue')
                  },
                  {
                    path: 'vxe-radio-group',
                    name: 'ComponentFormConfigItemRenderVxeRadioGroup',
                    component: () => import('@/views/form/config/itemRender/vxe-radio-group/CodeExample.vue')
                  },
                  {
                    path: 'vxe-checkbox-group',
                    name: 'ComponentFormConfigItemRenderVxeCheckboxGroup',
                    component: () => import('@/views/form/config/itemRender/vxe-checkbox-group/CodeExample.vue')
                  },
                  {
                    path: 'vxe-rate',
                    name: 'ComponentFormConfigItemRenderVxeRate',
                    component: () => import('@/views/form/config/itemRender/vxe-rate/CodeExample.vue')
                  },
                  {
                    path: 'vxe-slider',
                    name: 'ComponentFormConfigItemRenderVxeSlider',
                    component: () => import('@/views/form/config/itemRender/vxe-slider/CodeExample.vue')
                  },
                  {
                    path: 'vxe-image',
                    name: 'ComponentFormConfigItemRenderVxeImage',
                    component: () => import('@/views/form/config/itemRender/vxe-image/CodeExample.vue')
                  },
                  {
                    path: 'vxe-image-group',
                    name: 'ComponentFormConfigItemRenderVxeImageGroup',
                    component: () => import('@/views/form/config/itemRender/vxe-image-group/CodeExample.vue')
                  },
                  {
                    path: 'vxe-upload',
                    name: 'ComponentFormConfigItemRenderVxeUpload',
                    component: () => import('@/views/form/config/itemRender/vxe-upload/CodeExample.vue')
                  },
                  {
                    path: 'readonly',
                    name: 'ComponentFormConfigItemRenderReadonly',
                    component: () => import('@/views/form/config/itemRender/readonly/CodeExample.vue')
                  },
                  {
                    path: 'disabled',
                    name: 'ComponentFormConfigItemRenderDisabled',
                    component: () => import('@/views/form/config/itemRender/disabled/CodeExample.vue')
                  },
                  {
                    path: 'linkageDisabled',
                    name: 'ComponentFormConfigItemRenderLinkageDisabled',
                    component: () => import('@/views/form/config/itemRender/linkageDisabled/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'itemTemplate',
                component: RouteLayout,
                children: [
                  {
                    path: 'vxe-button',
                    name: 'ComponentFormConfigItemTemplateVxeButton',
                    component: () => import('@/views/form/config/itemTemplate/vxe-button/CodeExample.vue')
                  },
                  {
                    path: 'vxe-input',
                    name: 'ComponentFormConfigItemTemplateVxeInput',
                    component: () => import('@/views/form/config/itemTemplate/vxe-input/CodeExample.vue')
                  },
                  {
                    path: 'vxe-textarea',
                    name: 'ComponentFormConfigItemTemplateVxeTextarea',
                    component: () => import('@/views/form/config/itemTemplate/vxe-textarea/CodeExample.vue')
                  },
                  {
                    path: 'vxe-number-input',
                    name: 'ComponentFormConfigItemTemplateVxeNumberInput',
                    component: () => import('@/views/form/config/itemTemplate/vxe-number-input/CodeExample.vue')
                  },
                  {
                    path: 'vxe-select',
                    name: 'ComponentFormConfigItemTemplateVxeSelect',
                    component: () => import('@/views/form/config/itemTemplate/vxe-select/CodeExample.vue')
                  },
                  {
                    path: 'vxe-date-picker',
                    name: 'ComponentFormConfigItemTemplateVxeDatePicker',
                    component: () => import('@/views/form/config/itemTemplate/vxe-date-picker/CodeExample.vue')
                  },
                  {
                    path: 'vxe-tree-select',
                    name: 'ComponentFormConfigItemTemplateVxeTreeSelect',
                    component: () => import('@/views/form/config/itemTemplate/vxe-tree-select/CodeExample.vue')
                  },
                  {
                    path: 'vxe-switch',
                    name: 'ComponentFormConfigItemTemplateVxeSwitch',
                    component: () => import('@/views/form/config/itemTemplate/vxe-switch/CodeExample.vue')
                  },
                  {
                    path: 'vxe-radio-group',
                    name: 'ComponentFormConfigItemTemplateVxeRadioGroup',
                    component: () => import('@/views/form/config/itemTemplate/vxe-radio-group/CodeExample.vue')
                  },
                  {
                    path: 'vxe-checkbox-group',
                    name: 'ComponentFormConfigItemTemplateVxeCheckboxGroup',
                    component: () => import('@/views/form/config/itemTemplate/vxe-checkbox-group/CodeExample.vue')
                  },
                  {
                    path: 'vxe-rate',
                    name: 'ComponentFormConfigItemTemplateVxeRate',
                    component: () => import('@/views/form/config/itemTemplate/vxe-rate/CodeExample.vue')
                  },
                  {
                    path: 'vxe-slider',
                    name: 'ComponentFormConfigItemTemplateVxeSlider',
                    component: () => import('@/views/form/config/itemTemplate/vxe-slider/CodeExample.vue')
                  },
                  {
                    path: 'vxe-image',
                    name: 'ComponentFormConfigItemTemplateVxeImage',
                    component: () => import('@/views/form/config/itemTemplate/vxe-image/CodeExample.vue')
                  },
                  {
                    path: 'vxe-image-group',
                    name: 'ComponentFormConfigItemTemplateVxeImageGroup',
                    component: () => import('@/views/form/config/itemTemplate/vxe-image-group/CodeExample.vue')
                  },
                  {
                    path: 'vxe-upload',
                    name: 'ComponentFormConfigItemTemplateVxeUpload',
                    component: () => import('@/views/form/config/itemTemplate/vxe-upload/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'tabs',
                name: 'ComponentFormConfigTabs',
                component: () => import('@/views/form/config/tabs/CodeExample.vue')
              },
              {
                path: 'resumeTemplate',
                name: 'ComponentFormConfigResumeTemplate',
                component: () => import('@/views/form/config/resumeTemplate/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'form-design',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'ComponentFormDesignBase',
            component: () => import('@/views/form-design/base/CodeExample.vue')
          },
          {
            path: 'customGroup',
            name: 'ComponentFormDesignCustomGroup',
            component: () => import('@/views/form-design/customGroup/CodeExample.vue')
          },
          {
            path: 'mobile',
            name: 'ComponentFormDesignMobile',
            component: () => import('@/views/form-design/mobile/CodeExample.vue')
          },
          {
            path: 'pcAndMobile',
            name: 'ComponentFormDesignPcAndMobile',
            component: () => import('@/views/form-design/pcAndMobile/CodeExample.vue')
          },
          {
            path: 'renderView',
            name: 'ComponentFormDesignRenderView',
            component: () => import('@/views/form-design/renderView/CodeExample.vue')
          }
        ]
      },
      {
        path: 'list-design',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'ComponentListDesignBase',
            component: () => import('@/views/list-design/base/CodeExample.vue')
          },
          {
            path: 'mobile',
            name: 'ComponentListDesignMobile',
            component: () => import('@/views/list-design/mobile/CodeExample.vue')
          },
          {
            path: 'pcAndMobile',
            name: 'ComponentListDesignPcAndMobile',
            component: () => import('@/views/list-design/pcAndMobile/CodeExample.vue')
          },
          {
            path: 'formAndList',
            name: 'ComponentListDesignFormAndList',
            component: () => import('@/views/list-design/formAndList/CodeExample.vue')
          }
        ]
      },
      {
        path: 'upload',
        component: RouteLayout,
        children: [
          {
            path: 'global',
            component: RouteLayout,
            children: [
              {
                path: 'readFile',
                name: 'ComponentUploadGlobalReadFile',
                component: () => import('@/views/upload/global/readFile/CodeExample.vue')
              },
              {
                path: 'saveFile',
                name: 'ComponentUploadGlobalSaveFile',
                component: () => import('@/views/upload/global/saveFile/CodeExample.vue')
              }
            ]
          },
          {
            path: 'file',
            component: RouteLayout,
            children: [
              {
                path: 'size',
                name: 'ComponentUploadFileSize',
                component: () => import('@/views/upload/file/size/CodeExample.vue')
              },
              {
                path: 'base',
                name: 'ComponentUploadFileBase',
                component: () => import('@/views/upload/file/base/CodeExample.vue')
              },
              {
                path: 'readonly',
                name: 'ComponentUploadFileReadonly',
                component: () => import('@/views/upload/file/readonly/CodeExample.vue')
              },
              {
                path: 'disabled',
                name: 'ComponentUploadFileDisabled',
                component: () => import('@/views/upload/file/disabled/CodeExample.vue')
              },
              {
                path: 'multiple',
                name: 'ComponentUploadFileMultiple',
                component: () => import('@/views/upload/file/multiple/CodeExample.vue')
              },
              {
                path: 'uploadMethod',
                name: 'ComponentUploadFileUploadMethod',
                component: () => import('@/views/upload/file/uploadMethod/CodeExample.vue')
              },
              {
                path: 'downloadMethod',
                name: 'ComponentUploadFileDownloadMethod',
                component: () => import('@/views/upload/file/downloadMethod/CodeExample.vue')
              },
              {
                path: 'beforeDownloadMethod',
                name: 'ComponentUploadFileBeforeDownloadMethod',
                component: () => import('@/views/upload/file/beforeDownloadMethod/CodeExample.vue')
              },
              {
                path: 'singleMode',
                name: 'ComponentUploadFileSingleMode',
                component: () => import('@/views/upload/file/singleMode/CodeExample.vue')
              },
              {
                path: 'urlMode',
                name: 'ComponentUploadFileUrlMode',
                component: () => import('@/views/upload/file/urlMode/CodeExample.vue')
              },
              {
                path: 'tip',
                name: 'ComponentUploadFileTip',
                component: () => import('@/views/upload/file/tip/CodeExample.vue')
              },
              {
                path: 'dragToUpload',
                name: 'ComponentUploadFileDragToUpload',
                component: () => import('@/views/upload/file/dragToUpload/CodeExample.vue')
              },
              {
                path: 'pasteToUpload',
                name: 'ComponentUploadFilePasteToUpload',
                component: () => import('@/views/upload/file/pasteToUpload/CodeExample.vue')
              },
              {
                path: 'progress',
                name: 'ComponentUploadFileProgress',
                component: () => import('@/views/upload/file/progress/CodeExample.vue')
              },
              {
                path: 'types',
                name: 'ComponentUploadFileTypes',
                component: () => import('@/views/upload/file/types/CodeExample.vue')
              },
              {
                path: 'limitCount',
                name: 'ComponentUploadFileLimitCount',
                component: () => import('@/views/upload/file/limitCount/CodeExample.vue')
              },
              {
                path: 'limitSize',
                name: 'ComponentUploadFileLimitSize',
                component: () => import('@/views/upload/file/limitSize/CodeExample.vue')
              },
              {
                path: 'removeMethod',
                name: 'ComponentUploadFileRemoveMethod',
                component: () => import('@/views/upload/file/removeMethod/CodeExample.vue')
              },
              {
                path: 'beforeRemoveMethod',
                name: 'ComponentUploadFileBeforeRemoveMethod',
                component: () => import('@/views/upload/file/beforeRemoveMethod/CodeExample.vue')
              },
              {
                path: 'showUploadButton',
                name: 'ComponentUploadFileShowUploadButton',
                component: () => import('@/views/upload/file/showUploadButton/CodeExample.vue')
              },
              {
                path: 'autoHidden',
                name: 'ComponentUploadFileAutoHidden',
                component: () => import('@/views/upload/file/autoHidden/CodeExample.vue')
              },
              {
                path: 'moreBtn',
                name: 'ComponentUploadFileMoreBtn',
                component: () => import('@/views/upload/file/moreBtn/CodeExample.vue')
              },
              {
                path: 'dragSort',
                name: 'ComponentUploadFileDragSort',
                component: () => import('@/views/upload/file/dragSort/CodeExample.vue')
              },
              {
                path: 'showError',
                name: 'ComponentUploadFileShowError',
                component: () => import('@/views/upload/file/showError/CodeExample.vue')
              },
              {
                path: 'corner',
                name: 'ComponentUploadFileCorner',
                component: () => import('@/views/upload/file/corner/CodeExample.vue')
              }
            ]
          },
          {
            path: 'image',
            component: RouteLayout,
            children: [
              {
                path: 'size',
                name: 'ComponentUploadImageSize',
                component: () => import('@/views/upload/image/size/CodeExample.vue')
              },
              {
                path: 'base',
                name: 'ComponentUploadImageBase',
                component: () => import('@/views/upload/image/base/CodeExample.vue')
              },
              {
                path: 'imgStyle',
                name: 'ComponentUploadImageImgStyle',
                component: () => import('@/views/upload/image/imgStyle/CodeExample.vue')
              },
              {
                path: 'circle',
                name: 'ComponentUploadImageCircle',
                component: () => import('@/views/upload/image/circle/CodeExample.vue')
              },
              {
                path: 'readonly',
                name: 'ComponentUploadImageReadonly',
                component: () => import('@/views/upload/image/readonly/CodeExample.vue')
              },
              {
                path: 'disabled',
                name: 'ComponentUploadImageDisabled',
                component: () => import('@/views/upload/image/disabled/CodeExample.vue')
              },
              {
                path: 'multiple',
                name: 'ComponentUploadImageMultiple',
                component: () => import('@/views/upload/image/multiple/CodeExample.vue')
              },
              {
                path: 'uploadMethod',
                name: 'ComponentUploadImageUploadMethod',
                component: () => import('@/views/upload/image/uploadMethod/CodeExample.vue')
              },
              {
                path: 'downloadMethod',
                name: 'ComponentUploadImageDownloadMethod',
                component: () => import('@/views/upload/image/downloadMethod/CodeExample.vue')
              },
              {
                path: 'beforeDownloadMethod',
                name: 'ComponentUploadImageBeforeDownloadMethod',
                component: () => import('@/views/upload/image/beforeDownloadMethod/CodeExample.vue')
              },
              {
                path: 'singleMode',
                name: 'ComponentUploadImageSingleMode',
                component: () => import('@/views/upload/image/singleMode/CodeExample.vue')
              },
              {
                path: 'urlMode',
                name: 'ComponentUploadImageUrlMode',
                component: () => import('@/views/upload/image/urlMode/CodeExample.vue')
              },
              {
                path: 'thumbnailUrl',
                name: 'ComponentUploadImageThumbnailUrl',
                component: () => import('@/views/upload/image/thumbnailUrl/CodeExample.vue')
              },
              {
                path: 'tip',
                name: 'ComponentUploadImageTip',
                component: () => import('@/views/upload/image/tip/CodeExample.vue')
              },
              {
                path: 'dragToUpload',
                name: 'ComponentUploadImageDragToUpload',
                component: () => import('@/views/upload/image/dragToUpload/CodeExample.vue')
              },
              {
                path: 'pasteToUpload',
                name: 'ComponentUploadImagePasteToUpload',
                component: () => import('@/views/upload/image/pasteToUpload/CodeExample.vue')
              },
              {
                path: 'progress',
                name: 'ComponentUploadImageProgress',
                component: () => import('@/views/upload/image/progress/CodeExample.vue')
              },
              {
                path: 'types',
                name: 'ComponentUploadImageTypes',
                component: () => import('@/views/upload/image/types/CodeExample.vue')
              },
              {
                path: 'limitCount',
                name: 'ComponentUploadImageLimitCount',
                component: () => import('@/views/upload/image/limitCount/CodeExample.vue')
              },
              {
                path: 'limitSize',
                name: 'ComponentUploadImageLimitSize',
                component: () => import('@/views/upload/image/limitSize/CodeExample.vue')
              },
              {
                path: 'removeMethod',
                name: 'ComponentUploadImageRemoveMethod',
                component: () => import('@/views/upload/image/removeMethod/CodeExample.vue')
              },
              {
                path: 'beforeRemoveMethod',
                name: 'ComponentUploadImageBeforeRemoveMethod',
                component: () => import('@/views/upload/image/beforeRemoveMethod/CodeExample.vue')
              },
              {
                path: 'showUploadButton',
                name: 'ComponentUploadImageShowUploadButton',
                component: () => import('@/views/upload/image/showUploadButton/CodeExample.vue')
              },
              {
                path: 'autoHidden',
                name: 'ComponentUploadImageAutoHidden',
                component: () => import('@/views/upload/image/autoHidden/CodeExample.vue')
              },
              {
                path: 'moreBtn',
                name: 'ComponentUploadImageMoreBtn',
                component: () => import('@/views/upload/image/moreBtn/CodeExample.vue')
              },
              {
                path: 'dragSort',
                name: 'ComponentUploadImageDragSort',
                component: () => import('@/views/upload/image/dragSort/CodeExample.vue')
              },
              {
                path: 'showError',
                name: 'ComponentUploadImageShowError',
                component: () => import('@/views/upload/image/showError/CodeExample.vue')
              },
              {
                path: 'corner',
                name: 'ComponentUploadImageCorner',
                component: () => import('@/views/upload/image/corner/CodeExample.vue')
              }
            ]
          }
        ]
      },
      tableRouteConfig,
      gridRouteConfig
    ]
  },
  {
    path: '/',
    component: PageLayout,
    children: [
      {
        path: ':name/api',
        name: 'DocsApi',
        component: () => import('@/views/api/DocsApi.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
