import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import StartInstall from '@/views/start/install/CodeExample.vue'
import StartUseGlobal from '@/views/start/useGlobal/CodeExample.vue'
import StartUseImport from '@/views/start/useImport/CodeExample.vue'
import StartIcons from '@/views/start/icon/CodeExample.vue'
import StartConfig from '@/views/start/config/CodeExample.vue'
import StartTheme from '@/views/start/theme/CodeExample.vue'
import StartI18n from '@/views/start/i18n/CodeExample.vue'
import StartUseZIndex from '@/views/start/z-index/CodeExample.vue'
import StartPermission from '@/views/start/permission/CodeExample.vue'
import FreeDonation from '@/views/start/FreeDonation.vue'
import JoinSponsor from '@/views/start/JoinSponsor.vue'

const tableRouteConfig: RouteRecordRaw = {
  path: 'table',
  children: [
    {
      path: 'base',
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
          path: 'headerHighlight',
          name: 'ComponentTableBaseHeaderHighlight',
          component: () => import('@/views/table/base/headerHighlight/CodeExample.vue')
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
          path: 'current',
          name: 'ComponentTableBaseCurrent',
          component: () => import('@/views/table/base/current/CodeExample.vue')
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
          path: 'template',
          name: 'ComponentTableFooterTemplate',
          component: () => import('@/views/table/footer/template/CodeExample.vue')
        }
      ]
    },
    {
      path: 'sort',
      children: [
        {
          path: 'multiple',
          name: 'ComponentTableSortMultiple',
          component: () => import('@/views/table/sort/multiple/CodeExample.vue')
        },
        {
          path: 'remote',
          name: 'ComponentTableSortRemote',
          component: () => import('@/views/table/sort/remote/CodeExample.vue')
        }
      ]
    },
    {
      path: 'filter',
      children: [
        {
          path: 'options',
          name: 'ComponentTableFilterOptions',
          component: () => import('@/views/table/filter/options/CodeExample.vue')
        },
        {
          path: 'remote',
          name: 'ComponentTableFilterRemote',
          component: () => import('@/views/table/filter/remote/CodeExample.vue')
        },
        {
          path: 'header',
          name: 'ComponentTableFilterHeader',
          component: () => import('@/views/table/filter/header/CodeExample.vue')
        },
        {
          path: 'manual',
          name: 'ComponentTableFilterManual',
          component: () => import('@/views/table/filter/manual/CodeExample.vue')
        }
      ]
    },
    {
      path: 'merge',
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
        }
      ]
    },
    {
      path: 'menu',
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
      path: 'toolbar',
      children: [
        {
          path: 'basic',
          name: 'ComponentTableToolbarBasic',
          component: () => import('@/views/table/toolbar/basic/CodeExample.vue')
        },
        {
          path: 'custom',
          name: 'ComponentTableToolbarCustom',
          component: () => import('@/views/table/toolbar/custom/CodeExample.vue')
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
        }
      ]
    },
    {
      path: 'custom',
      children: [
        {
          path: 'toolbar',
          name: 'ComponentTableCustomToolbar',
          component: () => import('@/views/table/custom/toolbar/CodeExample.vue')
        },
        {
          path: 'popup',
          name: 'ComponentTableCustomPopup',
          component: () => import('@/views/table/custom/popup/CodeExample.vue')
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
          path: 'template',
          name: 'ComponentTableCustomTemplate',
          component: () => import('@/views/table/custom/template/CodeExample.vue')
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
      path: 'tree',
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
        }
      ]
    },
    {
      path: 'keyboard',
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
          path: 'edit',
          name: 'ComponentTableKeyboardEdit',
          component: () => import('@/views/table/keyboard/edit/CodeExample.vue')
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
        {
          path: 'insert',
          name: 'ComponentTableEditInsert',
          component: () => import('@/views/table/edit/insert/CodeExample.vue')
        },
        {
          path: 'remove',
          name: 'ComponentTableEditRemove',
          component: () => import('@/views/table/edit/remove/CodeExample.vue')
        },
        {
          path: 'pending',
          name: 'ComponentTableEditPending',
          component: () => import('@/views/table/edit/pending/CodeExample.vue')
        },
        {
          path: 'revert',
          name: 'ComponentTableEditRevert',
          component: () => import('@/views/table/edit/revert/CodeExample.vue')
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
          path: 'drawerForm',
          name: 'ComponentTableEditDrawerForm',
          component: () => import('@/views/table/edit/drawerForm/CodeExample.vue')
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
      path: 'editRender',
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
          path: 'vxe-date-picker',
          name: 'ComponentTableEditRenderVxeDatePicker',
          component: () => import('@/views/table/editRender/vxe-date-picker/CodeExample.vue')
        },
        {
          path: 'vxe-select',
          name: 'ComponentTableEditRenderVxeSelect',
          component: () => import('@/views/table/editRender/vxe-select/CodeExample.vue')
        }
      ]
    },
    {
      path: 'editTemplate',
      children: [
        {
          path: 'vxe-input',
          name: 'ComponentTableEditTemplateVxeInput',
          component: () => import('@/views/table/editTemplate/vxe-input/CodeExample.vue')
        },
        {
          path: 'vxe-select',
          name: 'ComponentTableEditTemplateVxeSelect',
          component: () => import('@/views/table/editTemplate/vxe-select/CodeExample.vue')
        }
      ]
    },
    {
      path: 'template',
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
          path: 'advanced',
          name: 'ComponentTableExportAdvanced',
          component: () => import('@/views/table/export/advanced/CodeExample.vue')
        }
      ]
    },
    {
      path: 'print',
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
        }
      ]
    },
    {
      path: 'scroll',
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
          path: 'rowHeight',
          name: 'ComponentTableScrollRowHeight',
          component: () => import('@/views/table/scroll/rowHeight/CodeExample.vue')
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
        }
      ]
    },
    {
      path: 'search',
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
    }
  ]
}

const gridRouteConfig: RouteRecordRaw = {
  path: 'grid',
  children: [
    {
      path: 'base',
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
          path: 'headerHighlight',
          name: 'ComponentGridBaseHeaderHighlight',
          component: () => import('@/views/grid/base/headerHighlight/CodeExample.vue')
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
          path: 'current',
          name: 'ComponentGridBaseCurrent',
          component: () => import('@/views/grid/base/current/CodeExample.vue')
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
          path: 'full',
          name: 'ComponentGridBaseFull',
          component: () => import('@/views/grid/base/full/CodeExample.vue')
        }
      ]
    },
    {
      path: 'layout',
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
        }
      ]
    },
    {
      path: 'merge',
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
        }
      ]
    },
    {
      path: 'expand',
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
        }
      ]
    },
    {
      path: 'menu',
      children: [
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
          path: 'template',
          name: 'ComponentGridFormTemplate',
          component: () => import('@/views/grid/form/template/CodeExample.vue')
        }
      ]
    },
    {
      path: 'toolbar',
      children: [
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
          path: 'icon',
          name: 'ComponentGridToolbarIcon',
          component: () => import('@/views/grid/toolbar/icon/CodeExample.vue')
        }
      ]
    },
    {
      path: 'custom',
      children: [
        {
          path: 'popup',
          name: 'ComponentGridCustomPopup',
          component: () => import('@/views/grid/custom/popup/CodeExample.vue')
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
        // {
        //   path: 'events',
        //   name: 'ComponentGridCustomEvents',
        //   component: () => import('@/views/grid/custom/events/CodeExample.vue')
        // },
        {
          path: 'remote',
          name: 'ComponentGridCustomRemote',
          component: () => import('@/views/grid/custom/remote/CodeExample.vue')
        },
        {
          path: 'remoteFull',
          name: 'ComponentGridCustomRemoteFull',
          component: () => import('@/views/grid/custom/remoteFull/CodeExample.vue')
        }
      ]
    },
    {
      path: 'pager',
      children: [
        {
          path: 'base',
          name: 'ComponentGridPagerBase',
          component: () => import('@/views/grid/pager/base/CodeExample.vue')
        },
        {
          path: 'pageSize',
          name: 'ComponentGridPagerPageSize',
          component: () => import('@/views/grid/pager/pageSize/CodeExample.vue')
        }
      ]
    },
    {
      path: 'tree',
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
          path: 'checkbox',
          name: 'ComponentGridTreeCheckbox',
          component: () => import('@/views/grid/tree/checkbox/CodeExample.vue')
        }
      ]
    },
    {
      path: 'cellRender',
      children: [
        {
          path: 'vxe-switch',
          name: 'ComponentGridCellRenderVxeSwitch',
          component: () => import('@/views/grid/cellRender/vxe-switch/CodeExample.vue')
        },
        {
          path: 'vxe-button-group',
          name: 'ComponentGridCellRenderVxeButtonGroup',
          component: () => import('@/views/grid/cellRender/vxe-button-group/CodeExample.vue')
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
      children: [
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
          path: 'vxe-upload',
          name: 'ComponentGridCellTemplateVxeUpload',
          component: () => import('@/views/grid/cellTemplate/vxe-upload/CodeExample.vue')
        }
      ]
    },
    {
      path: 'edit',
      children: [
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
          path: 'rowDisable',
          name: 'ComponentGridEditRowDisable',
          component: () => import('@/views/grid/edit/rowDisable/CodeExample.vue')
        }
      ]
    },
    {
      path: 'editRender',
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
          path: 'vxe-date-picker',
          name: 'ComponentGridEditRenderVxeDatePicker',
          component: () => import('@/views/grid/editRender/vxe-date-picker/CodeExample.vue')
        },
        {
          path: 'vxe-select',
          name: 'ComponentGridEditRenderVxeSelect',
          component: () => import('@/views/grid/editRender/vxe-select/CodeExample.vue')
        }
      ]
    },
    {
      path: 'editTemplate',
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
          path: 'vxe-date-picker',
          name: 'ComponentGridEditTemplateVxeDatePicker',
          component: () => import('@/views/grid/editTemplate/vxe-date-picker/CodeExample.vue')
        },
        {
          path: 'vxe-select',
          name: 'ComponentGridEditTemplateVxeSelect',
          component: () => import('@/views/grid/editTemplate/vxe-select/CodeExample.vue')
        }
      ]
    },
    {
      path: 'template',
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
        }
      ]
    },
    {
      path: 'export',
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
          path: 'advanced',
          name: 'ComponentGridExportAdvanced',
          component: () => import('@/views/grid/export/advanced/CodeExample.vue')
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
        }
      ]
    },
    {
      path: 'print',
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
        }
      ]
    },
    {
      path: 'scroll',
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
          path: 'rowHeight',
          name: 'ComponentGridScrollRowHeight',
          component: () => import('@/views/grid/scroll/rowHeight/CodeExample.vue')
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
          path: 'tree',
          name: 'ComponentGridScrollTree',
          component: () => import('@/views/grid/scroll/tree/CodeExample.vue')
        }
      ]
    },
    {
      path: 'proxy',
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
      path: 'events',
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
    }
  ]
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/*',
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
    path: '/tool',
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
    children: [
      {
        path: 'formats',
        children: [
          {
            path: 'table',
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
        children: [
          {
            path: 'table',
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
        children: [
          {
            path: 'table',
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
        children: [
          {
            path: 'form',
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
        children: [
          {
            path: 'table',
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
        children: [
          {
            path: 'form',
            children: [
              {
                path: 'api',
                name: 'GlobalRendererFormAPI',
                component: () => import('@/views/global/renderer/form/api/CodeExample.vue')
              },
              {
                path: 'item',
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
            children: [
              {
                path: 'api',
                name: 'GlobalRendererTableAPI',
                component: () => import('@/views/global/renderer/table/api/CodeExample.vue')
              },
              {
                path: 'default',
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
                  }
                ]
              },
              {
                path: 'edit',
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
            children: [
              {
                path: 'api',
                name: 'GlobalRendererFormDesignAPI',
                component: () => import('@/views/global/renderer/form-design/api/CodeExample.vue')
              },
              {
                path: 'widget',
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
    path: '/component',
    children: [
      {
        path: 'icon',
        children: [
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
        name: 'ComponentLayout',
        component: () => import('@/views/layout/CodeExample.vue')
      },
      {
        path: 'row',
        name: 'ComponentRow',
        component: () => import('@/views/row/CodeExample.vue')
      },
      {
        path: 'breadcrumb',
        name: 'ComponentBreadcrumb',
        component: () => import('@/views/breadcrumb/CodeExample.vue')
      },
      {
        path: 'menu',
        name: 'ComponentMenu',
        component: () => import('@/views/menu/CodeExample.vue')
      },
      {
        path: 'image',
        children: [
          {
            path: 'base',
            name: 'ComponentImageBase',
            component: () => import('@/views/image/base/CodeExample.vue')
          },
          {
            path: 'lazy',
            name: 'ComponentImageLazy',
            component: () => import('@/views/image/lazy/CodeExample.vue')
          }
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
          }
        ]
      },
      {
        path: 'link',
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
            path: 'router',
            name: 'ComponentLinkRouter',
            component: () => import('@/views/link/router/CodeExample.vue')
          }
        ]
      },
      {
        path: 'tag',
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
            path: 'dropdown',
            name: 'ComponentButtonDropdown',
            component: () => import('@/views/button/dropdown/CodeExample.vue')
          }
        ]
      },
      {
        path: 'radio',
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
        path: 'input',
        children: [
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
        name: 'ComponentPasswordInput',
        component: () => import('@/views/password-input/CodeExample.vue')
      },
      {
        path: 'number-input',
        children: [
          {
            path: 'number',
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
                path: 'step',
                name: 'ComponentNumberInputNumberStep',
                component: () => import('@/views/number-input/number/step/CodeExample.vue')
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
                path: 'step',
                name: 'ComponentNumberInputIntegerStep',
                component: () => import('@/views/number-input/integer/step/CodeExample.vue')
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
                path: 'controls',
                name: 'ComponentNumberInputFloatControls',
                component: () => import('@/views/number-input/float/controls/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'textarea',
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
        path: 'date-picker',
        children: [
          {
            path: 'date',
            name: 'ComponentDatePickerDate',
            component: () => import('@/views/date-picker/date/CodeExample.vue')
          },
          {
            path: 'week',
            name: 'ComponentDatePickerWeek',
            component: () => import('@/views/date-picker/week/CodeExample.vue')
          },
          {
            path: 'month',
            name: 'ComponentDatePickerMonth',
            component: () => import('@/views/date-picker/month/CodeExample.vue')
          },
          {
            path: 'quarter',
            name: 'ComponentDatePickerQuarter',
            component: () => import('@/views/date-picker/quarter/CodeExample.vue')
          },
          {
            path: 'year',
            name: 'ComponentDatePickerYear',
            component: () => import('@/views/date-picker/year/CodeExample.vue')
          },
          {
            path: 'time',
            name: 'ComponentDatePickerTime',
            component: () => import('@/views/date-picker/time/CodeExample.vue')
          },
          {
            path: 'datetime',
            name: 'ComponentDatePickerDatetime',
            component: () => import('@/views/date-picker/datetime/CodeExample.vue')
          }
        ]
      },
      {
        path: 'select',
        children: [
          {
            path: 'base',
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
                path: 'group',
                name: 'ComponentSelectBaseGroup',
                component: () => import('@/views/select/base/group/CodeExample.vue')
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
                path: 'template',
                name: 'ComponentSelectBaseTemplate',
                component: () => import('@/views/select/base/template/CodeExample.vue')
              }
            ]
          },
          {
            path: 'config',
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
                path: 'group',
                name: 'ComponentSelectConfigGroup',
                component: () => import('@/views/select/config/group/CodeExample.vue')
              },
              {
                path: 'multiple',
                name: 'ComponentSelectConfigMultiple',
                component: () => import('@/views/select/config/multiple/CodeExample.vue')
              },
              {
                path: 'template',
                name: 'ComponentSelectConfigTemplate',
                component: () => import('@/views/select/config/template/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'pager',
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
            name: 'ComponentPagerTemplate',
            component: () => import('@/views/pager/template/CodeExample.vue')
          }
        ]
      },
      {
        path: 'alert',
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
            name: 'ComponentModalModalTemplate',
            component: () => import('@/views/modal/modal/template/CodeExample.vue')
          },
          {
            path: 'button',
            name: 'ComponentModalModalButton',
            component: () => import('@/views/modal/modal/button/CodeExample.vue')
          },
          {
            path: 'zoom',
            name: 'ComponentModalModalZoom',
            component: () => import('@/views/modal/modal/zoom/CodeExample.vue')
          },
          {
            path: 'remember',
            name: 'ComponentModalModalRemember',
            component: () => import('@/views/modal/modal/remember/CodeExample.vue')
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
          }
        ]
      },
      {
        path: 'tooltip',
        name: 'ComponentTooltip',
        component: () => import('@/views/tooltip/CodeExample.vue')
      },
      {
        path: 'switch',
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
        children: [
          {
            path: 'base',
            name: 'ComponentListBase',
            component: () => import('@/views/list/base/CodeExample.vue')
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
        children: [
          {
            path: 'base',
            name: 'ComponentPulldownBase',
            component: () => import('@/views/pulldown/base/CodeExample.vue')
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
        path: 'tabs',
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
          }
        ]
      },
      {
        path: 'drawer',
        name: 'ComponentDrawer',
        children: [
          {
            path: 'base',
            name: 'ComponentDrawerBase',
            component: () => import('@/views/drawer/base/CodeExample.vue')
          },
          {
            path: 'maskClosable',
            name: 'ComponentDrawerMaskClosable',
            component: () => import('@/views/drawer/maskClosable/CodeExample.vue')
          },
          {
            path: 'template',
            name: 'ComponentDrawerTemplate',
            component: () => import('@/views/drawer/template/CodeExample.vue')
          }
        ]
      },
      {
        path: 'tip',
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
          }
        ]
      },
      {
        path: 'print',
        children: [
          {
            path: 'base',
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
        path: 'tree',
        children: [
          {
            path: 'base',
            name: 'ComponentTreeBase',
            component: () => import('@/views/tree/base/CodeExample.vue')
          },
          {
            path: 'current',
            name: 'ComponentTreeCurrent',
            component: () => import('@/views/tree/current/CodeExample.vue')
          },
          {
            path: 'radio',
            name: 'ComponentTreeRadio',
            component: () => import('@/views/tree/radio/CodeExample.vue')
          },
          {
            path: 'checkbox',
            name: 'ComponentTreeCheckbox',
            component: () => import('@/views/tree/checkbox/CodeExample.vue')
          }
        ]
      },
      {
        path: 'form',
        children: [
          {
            path: 'basics',
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
                path: 'colon',
                name: 'ComponentFormBasicsColon',
                component: () => import('@/views/form/basics/colon/CodeExample.vue')
              },
              {
                path: 'bold',
                name: 'ComponentFormBasicsBold',
                component: () => import('@/views/form/basics/bold/CodeExample.vue')
              },
              {
                path: 'align',
                name: 'ComponentFormBasicsAlign',
                component: () => import('@/views/form/basics/align/CodeExample.vue')
              },
              {
                path: 'tooltip',
                name: 'ComponentFormBasicsTooltip',
                component: () => import('@/views/form/basics/tooltip/CodeExample.vue')
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
                path: 'gather',
                name: 'ComponentFormBasicsGather',
                component: () => import('@/views/form/basics/gather/CodeExample.vue')
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
                name: 'ComponentFormBasicsCollapse',
                component: () => import('@/views/form/basics/collapse/CodeExample.vue')
              },
              {
                path: 'valid',
                name: 'ComponentFormBasicsValid',
                component: () => import('@/views/form/basics/valid/CodeExample.vue')
              },
              {
                path: 'itemRender',
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
                    path: 'vxe-input',
                    name: 'ComponentFormBasicsItemRenderVxeInput',
                    component: () => import('@/views/form/basics/itemRender/vxe-input/CodeExample.vue')
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
                    path: 'vxe-upload',
                    name: 'ComponentFormBasicsItemRenderVxeUpload',
                    component: () => import('@/views/form/basics/itemRender/vxe-upload/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'itemTemplate',
                children: [
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
                    path: 'vxe-select',
                    name: 'ComponentFormBasicsItemTemplateVxeSelect',
                    component: () => import('@/views/form/basics/itemTemplate/vxe-select/CodeExample.vue')
                  },
                  {
                    path: 'vxe-date-picker',
                    name: 'ComponentFormBasicsItemTemplateVxeDatePicker',
                    component: () => import('@/views/form/basics/itemTemplate/vxe-date-picker/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'template',
                children: [
                  {
                    path: 'title',
                    name: 'ComponentFormBasicsTemplateTitle',
                    component: () => import('@/views/form/basics/template/title/CodeExample.vue')
                  },
                  {
                    path: 'content',
                    name: 'ComponentFormBasicsTemplateContent',
                    component: () => import('@/views/form/basics/template/content/CodeExample.vue')
                  }
                ]
              }
            ]
          },
          {
            path: 'config',
            children: [
              {
                path: 'base',
                name: 'ComponentFormConfigBase',
                component: () => import('@/views/form/config/base/CodeExample.vue')
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
                path: 'gather',
                name: 'ComponentFormConfigGather',
                component: () => import('@/views/form/config/gather/CodeExample.vue')
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
                name: 'ComponentFormConfigCollapse',
                component: () => import('@/views/form/config/collapse/CodeExample.vue')
              },
              {
                path: 'valid',
                name: 'ComponentFormConfigValid',
                component: () => import('@/views/form/config/valid/CodeExample.vue')
              },
              {
                path: 'itemRender',
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
                    path: 'vxe-upload',
                    name: 'ComponentFormConfigItemRenderVxeUpload',
                    component: () => import('@/views/form/config/itemRender/vxe-upload/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'itemTemplate',
                children: [
                  {
                    path: 'vxe-input',
                    name: 'ComponentFormConfigItemTemplateVxeInput',
                    component: () => import('@/views/form/config/itemTemplate/vxe-input/CodeExample.vue')
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
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        path: 'form-design',
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
        children: [
          {
            path: 'file',
            children: [
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
                path: 'tip',
                name: 'ComponentUploadFileTip',
                component: () => import('@/views/upload/file/tip/CodeExample.vue')
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
                path: 'autoHidden',
                name: 'ComponentUploadFileAutoHidden',
                component: () => import('@/views/upload/file/autoHidden/CodeExample.vue')
              },
              {
                path: 'showError',
                name: 'ComponentUploadFileShowError',
                component: () => import('@/views/upload/file/showError/CodeExample.vue')
              }
            ]
          },
          {
            path: 'image',
            children: [
              {
                path: 'base',
                name: 'ComponentUploadImageBase',
                component: () => import('@/views/upload/image/base/CodeExample.vue')
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
                path: 'tip',
                name: 'ComponentUploadImageTip',
                component: () => import('@/views/upload/image/tip/CodeExample.vue')
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
                path: 'autoHidden',
                name: 'ComponentUploadImageAutoHidden',
                component: () => import('@/views/upload/image/autoHidden/CodeExample.vue')
              },
              {
                path: 'showError',
                name: 'ComponentUploadImageShowError',
                component: () => import('@/views/upload/image/showError/CodeExample.vue')
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
    path: '/:name/api',
    name: 'DocsApi',
    component: () => import('@/views/api/DocsApi.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
