import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import RouteLayout from '@/components/RouteLayout.vue'
import PageLayout from '@/components/PageLayout.vue'

import FreeDonation from '@/views/start/FreeDonation.vue'
import JoinSponsor from '@/views/start/JoinSponsor.vue'
import EnterprisePreview from '@/views/start/EnterprisePreview.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'PluginRenderChartGridBar'
    }
  },
  {
    path: '/',
    redirect: {
      name: 'PluginRenderChartGridBar'
    }
  },
  {
    path: '/start',
    component: PageLayout,
    children: [
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
    path: '/plugin-render-chart',
    component: PageLayout,
    children: [
      {
        path: 'install',
        name: 'PluginRenderChartInstall',
        component: () => import('@/views/plugin-render-chart/install/CodeExample.vue')
      },
      {
        path: 'table',
        component: RouteLayout,
        children: [
          {
            path: 'rate',
            name: 'PluginRenderChartTableRate',
            component: () => import('@/views/plugin-render-chart/table/rate/CodeExample.vue')
          },
          {
            path: 'bar',
            name: 'PluginRenderChartTableBar',
            component: () => import('@/views/plugin-render-chart/table/bar/CodeExample.vue')
          },
          {
            path: 'pie',
            name: 'PluginRenderChartTablePie',
            component: () => import('@/views/plugin-render-chart/table/pie/CodeExample.vue')
          }
        ]
      },
      {
        path: 'grid',
        component: RouteLayout,
        children: [
          {
            path: 'rate',
            name: 'PluginRenderChartGridRate',
            component: () => import('@/views/plugin-render-chart/grid/rate/CodeExample.vue')
          },
          {
            path: 'bar',
            name: 'PluginRenderChartGridBar',
            component: () => import('@/views/plugin-render-chart/grid/bar/CodeExample.vue')
          },
          {
            path: 'pie',
            name: 'PluginRenderChartGridPie',
            component: () => import('@/views/plugin-render-chart/grid/pie/CodeExample.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/plugin-menu',
    component: PageLayout,
    children: [
      {
        path: 'install',
        name: 'PluginMenuInstall',
        component: () => import('@/views/plugin-menu/install/CodeExample.vue')
      },
      {
        path: 'table',
        component: RouteLayout,
        children: [
          {
            path: 'header',
            name: 'PluginMenuTableHeader',
            component: () => import('@/views/plugin-menu/table/header/CodeExample.vue')
          },
          {
            path: 'body',
            name: 'PluginMenuTableBody',
            component: () => import('@/views/plugin-menu/table/body/CodeExample.vue')
          },
          {
            path: 'footer',
            name: 'PluginMenuTableFooter',
            component: () => import('@/views/plugin-menu/table/footer/CodeExample.vue')
          },
          {
            path: 'full',
            name: 'PluginMenuTableFull',
            component: () => import('@/views/plugin-menu/table/full/CodeExample.vue')
          }
        ]
      },
      {
        path: 'grid',
        component: RouteLayout,
        children: [
          {
            path: 'header',
            name: 'PluginMenuGridHeader',
            component: () => import('@/views/plugin-menu/grid/header/CodeExample.vue')
          },
          {
            path: 'body',
            name: 'PluginMenuGridBody',
            component: () => import('@/views/plugin-menu/grid/body/CodeExample.vue')
          },
          {
            path: 'footer',
            name: 'PluginMenuGridFooter',
            component: () => import('@/views/plugin-menu/grid/footer/CodeExample.vue')
          },
          {
            path: 'full',
            name: 'PluginMenuGridFull',
            component: () => import('@/views/plugin-menu/grid/full/CodeExample.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/plugin-export-xlsx',
    component: PageLayout,
    children: [
      {
        path: 'install',
        name: 'PluginExportXlsxInstall',
        component: () => import('@/views/plugin-export-xlsx/install/CodeExample.vue')
      },
      {
        path: 'table',
        component: RouteLayout,
        children: [
          {
            path: 'export',
            name: 'PluginExportXlsxTableExport',
            component: () => import('@/views/plugin-export-xlsx/table/export/CodeExample.vue')
          },
          {
            path: 'import',
            name: 'PluginExportXlsxTableImport',
            component: () => import('@/views/plugin-export-xlsx/table/import/CodeExample.vue')
          },
          {
            path: 'toolbar',
            name: 'PluginExportXlsxTableToolbar',
            component: () => import('@/views/plugin-export-xlsx/table/toolbar/CodeExample.vue')
          },
          {
            path: 'advanced',
            name: 'PluginExportXlsxTableAdvanced',
            component: () => import('@/views/plugin-export-xlsx/table/advanced/CodeExample.vue')
          },
          {
            path: 'sheetMethod',
            component: RouteLayout,
            children: [
              {
                path: 'border',
                name: 'PluginExportXlsxTableSheetMethodBorder',
                component: () => import('@/views/plugin-export-xlsx/table/sheetMethod/border/CodeExample.vue')
              },
              {
                path: 'font',
                name: 'PluginExportXlsxTableSheetMethodFont',
                component: () => import('@/views/plugin-export-xlsx/table/sheetMethod/font/CodeExample.vue')
              },
              {
                path: 'headerBackground',
                name: 'PluginExportXlsxTableSheetMethodHeaderBackground',
                component: () => import('@/views/plugin-export-xlsx/table/sheetMethod/headerBackground/CodeExample.vue')
              },
              {
                path: 'cellWidth',
                name: 'PluginExportXlsxTableSheetMethodCellWidth',
                component: () => import('@/views/plugin-export-xlsx/table/sheetMethod/cellWidth/CodeExample.vue')
              },
              {
                path: 'cellHeight',
                name: 'PluginExportXlsxTableSheetMethodCellHeight',
                component: () => import('@/views/plugin-export-xlsx/table/sheetMethod/cellHeight/CodeExample.vue')
              },
              {
                path: 'hyperlink',
                name: 'PluginExportXlsxTableSheetMethodHyperlink',
                component: () => import('@/views/plugin-export-xlsx/table/sheetMethod/hyperlink/CodeExample.vue')
              },
              {
                path: 'image',
                name: 'PluginExportXlsxTableSheetMethodImage',
                component: () => import('@/views/plugin-export-xlsx/table/sheetMethod/image/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'grid',
        component: RouteLayout,
        children: [
          {
            path: 'export',
            name: 'PluginExportXlsxGridExport',
            component: () => import('@/views/plugin-export-xlsx/grid/export/CodeExample.vue')
          },
          {
            path: 'import',
            name: 'PluginExportXlsxGridImport',
            component: () => import('@/views/plugin-export-xlsx/grid/import/CodeExample.vue')
          },
          {
            path: 'toolbar',
            name: 'PluginExportXlsxGridToolbar',
            component: () => import('@/views/plugin-export-xlsx/grid/toolbar/CodeExample.vue')
          },
          {
            path: 'advanced',
            name: 'PluginExportXlsxGridAdvanced',
            component: () => import('@/views/plugin-export-xlsx/grid/advanced/CodeExample.vue')
          },
          {
            path: 'scroll',
            name: 'PluginExportXlsxGridScroll',
            component: () => import('@/views/plugin-export-xlsx/grid/scroll/CodeExample.vue')
          },
          {
            path: 'sheetMethod',
            component: RouteLayout,
            children: [
              {
                path: 'border',
                name: 'PluginExportXlsxGridSheetMethodBorder',
                component: () => import('@/views/plugin-export-xlsx/grid/sheetMethod/border/CodeExample.vue')
              },
              {
                path: 'font',
                name: 'PluginExportXlsxGridSheetMethodFont',
                component: () => import('@/views/plugin-export-xlsx/grid/sheetMethod/font/CodeExample.vue')
              },
              {
                path: 'headerBackground',
                name: 'PluginExportXlsxGridSheetMethodHeaderBackground',
                component: () => import('@/views/plugin-export-xlsx/grid/sheetMethod/headerBackground/CodeExample.vue')
              },
              {
                path: 'cellWidth',
                name: 'PluginExportXlsxGridSheetMethodCellWidth',
                component: () => import('@/views/plugin-export-xlsx/grid/sheetMethod/cellWidth/CodeExample.vue')
              },
              {
                path: 'cellHeight',
                name: 'PluginExportXlsxGridSheetMethodCellHeight',
                component: () => import('@/views/plugin-export-xlsx/grid/sheetMethod/cellHeight/CodeExample.vue')
              },
              {
                path: 'hyperlink',
                name: 'PluginExportXlsxGridSheetMethodHyperlink',
                component: () => import('@/views/plugin-export-xlsx/grid/sheetMethod/hyperlink/CodeExample.vue')
              },
              {
                path: 'image',
                name: 'PluginExportXlsxGridSheetMethodImage',
                component: () => import('@/views/plugin-export-xlsx/grid/sheetMethod/image/CodeExample.vue')
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/plugin-export-pdf',
    component: PageLayout,
    children: [
      {
        path: 'install',
        name: 'PluginExportPdfInstall',
        component: () => import('@/views/plugin-export-pdf/install/CodeExample.vue')
      },
      {
        path: 'table',
        component: RouteLayout,
        children: [
          {
            path: 'export',
            name: 'PluginExportPdfTableExport',
            component: () => import('@/views/plugin-export-pdf/table/export/CodeExample.vue')
          },
          {
            path: 'toolbar',
            name: 'PluginExportPdfTableToolbar',
            component: () => import('@/views/plugin-export-pdf/table/toolbar/CodeExample.vue')
          },
          {
            path: 'advanced',
            name: 'PluginExportPdfTableAdvanced',
            component: () => import('@/views/plugin-export-pdf/table/advanced/CodeExample.vue')
          }
        ]
      },
      {
        path: 'grid',
        component: RouteLayout,
        children: [
          {
            path: 'export',
            name: 'PluginExportPdfGridExport',
            component: () => import('@/views/plugin-export-pdf/grid/export/CodeExample.vue')
          },
          {
            path: 'toolbar',
            name: 'PluginExportPdfGridToolbar',
            component: () => import('@/views/plugin-export-pdf/grid/toolbar/CodeExample.vue')
          },
          {
            path: 'advanced',
            name: 'PluginExportPdfGridAdvanced',
            component: () => import('@/views/plugin-export-pdf/grid/advanced/CodeExample.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/plugin-render-element',
    component: PageLayout,
    children: [
      {
        path: 'install',
        name: 'PluginRenderElementInstall',
        component: () => import('@/views/plugin-render-element/install/CodeExample.vue')
      },
      {
        path: 'form',
        component: RouteLayout,
        children: [
          {
            path: 'itemTemplate',
            component: RouteLayout,
            children: [
              {
                path: 'el-input',
                name: 'PluginRenderElementFormItemTemplateElInput',
                component: () => import('@/views/plugin-render-element/form/itemTemplate/el-input/CodeExample.vue')
              },
              {
                path: 'el-select',
                name: 'PluginRenderElementFormItemTemplateElSelect',
                component: () => import('@/views/plugin-render-element/form/itemTemplate/el-select/CodeExample.vue')
              },
              {
                path: 'el-switch',
                name: 'PluginRenderElementFormItemTemplateElSwitch',
                component: () => import('@/views/plugin-render-element/form/itemTemplate/el-switch/CodeExample.vue')
              },
              {
                path: 'el-rate',
                name: 'PluginRenderElementFormItemTemplateElRate',
                component: () => import('@/views/plugin-render-element/form/itemTemplate/el-rate/CodeExample.vue')
              }
            ]
          },
          {
            path: 'itemRender',
            component: RouteLayout,
            children: [
              {
                path: 'el-autocomplete',
                name: 'PluginRenderElementFormItemRenderElAutocomplete',
                component: () => import('@/views/plugin-render-element/form/itemRender/el-autocomplete/CodeExample.vue')
              },
              {
                path: 'el-input',
                name: 'PluginRenderElementFormItemRenderElInput',
                component: () => import('@/views/plugin-render-element/form/itemRender/el-input/CodeExample.vue')
              },
              {
                path: 'el-input-number',
                name: 'PluginRenderElementFormItemRenderElInputNumber',
                component: () => import('@/views/plugin-render-element/form/itemRender/el-input-number/CodeExample.vue')
              },
              {
                path: 'el-select',
                name: 'PluginRenderElementFormItemRenderElSelect',
                component: () => import('@/views/plugin-render-element/form/itemRender/el-select/CodeExample.vue')
              },
              {
                path: 'el-date-picker',
                name: 'PluginRenderElementFormItemRenderElDatePicker',
                component: () => import('@/views/plugin-render-element/form/itemRender/el-date-picker/CodeExample.vue')
              },
              {
                path: 'el-time-select',
                name: 'PluginRenderElementFormItemRenderElTimePicker',
                component: () => import('@/views/plugin-render-element/form/itemRender/el-time-select/CodeExample.vue')
              },
              {
                path: 'el-cascader',
                name: 'PluginRenderElementFormItemRenderElCascader',
                component: () => import('@/views/plugin-render-element/form/itemRender/el-cascader/CodeExample.vue')
              },
              {
                path: 'el-switch',
                name: 'PluginRenderElementFormItemRenderElSwitch',
                component: () => import('@/views/plugin-render-element/form/itemRender/el-switch/CodeExample.vue')
              },
              {
                path: 'el-radio-group',
                name: 'PluginRenderElementFormItemRenderElRadioGroup',
                component: () => import('@/views/plugin-render-element/form/itemRender/el-radio-group/CodeExample.vue')
              },
              {
                path: 'el-checkbox-group',
                name: 'PluginRenderElementFormItemRenderElCheckboxGroup',
                component: () => import('@/views/plugin-render-element/form/itemRender/el-checkbox-group/CodeExample.vue')
              },
              {
                path: 'el-rate',
                name: 'PluginRenderElementFormItemRenderElRate',
                component: () => import('@/views/plugin-render-element/form/itemRender/el-rate/CodeExample.vue')
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
            path: 'filter',
            component: RouteLayout,
            children: [
              {
                path: 'el-input',
                name: 'PluginRenderElementTableFilterElInput',
                component: () => import('@/views/plugin-render-element/table/filter/el-input/CodeExample.vue')
              },
              {
                path: 'el-date-picker',
                name: 'PluginRenderElementTableFilterElDatePicker',
                component: () => import('@/views/plugin-render-element/table/filter/el-date-picker/CodeExample.vue')
              }
            ]
          },
          {
            path: 'cell',
            component: RouteLayout,
            children: [
              {
                path: 'el-switch',
                name: 'PluginRenderElementTableCellElSwitch',
                component: () => import('@/views/plugin-render-element/table/cell/el-switch/CodeExample.vue')
              },
              {
                path: 'el-rate',
                name: 'PluginRenderElementTableCellElRate',
                component: () => import('@/views/plugin-render-element/table/cell/el-rate/CodeExample.vue')
              }
            ]
          },
          {
            path: 'edit',
            component: RouteLayout,
            children: [
              {
                path: 'el-input',
                name: 'PluginRenderElementTableEditElInput',
                component: () => import('@/views/plugin-render-element/table/edit/el-input/CodeExample.vue')
              },
              {
                path: 'el-input-number',
                name: 'PluginRenderElementTableEditElInputNumber',
                component: () => import('@/views/plugin-render-element/table/edit/el-input-number/CodeExample.vue')
              },
              {
                path: 'el-autocomplete',
                name: 'PluginRenderElementTableEditElAutocomplete',
                component: () => import('@/views/plugin-render-element/table/edit/el-autocomplete/CodeExample.vue')
              },
              {
                path: 'el-select',
                name: 'PluginRenderElementTableEditElSelect',
                component: () => import('@/views/plugin-render-element/table/edit/el-select/CodeExample.vue')
              },
              {
                path: 'el-cascader',
                name: 'PluginRenderElementTableEditElCascader',
                component: () => import('@/views/plugin-render-element/table/edit/el-cascader/CodeExample.vue')
              },
              {
                path: 'el-date-picker',
                name: 'PluginRenderElementTableEditElDatePicker',
                component: () => import('@/views/plugin-render-element/table/edit/el-date-picker/CodeExample.vue')
              },
              {
                path: 'el-time-select',
                name: 'PluginRenderElementTableEditElTimeSelect',
                component: () => import('@/views/plugin-render-element/table/edit/el-time-select/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'grid',
        component: RouteLayout,
        children: [
          {
            path: 'filter',
            component: RouteLayout,
            children: [
              {
                path: 'el-input',
                name: 'PluginRenderElementGridFilterElInput',
                component: () => import('@/views/plugin-render-element/grid/filter/el-input/CodeExample.vue')
              },
              {
                path: 'el-date-picker',
                name: 'PluginRenderElementGridFilterElDatePicker',
                component: () => import('@/views/plugin-render-element/grid/filter/el-date-picker/CodeExample.vue')
              }
            ]
          },
          {
            path: 'cell',
            component: RouteLayout,
            children: [
              {
                path: 'el-switch',
                name: 'PluginRenderElementGridCellElSwitch',
                component: () => import('@/views/plugin-render-element/grid/cell/el-switch/CodeExample.vue')
              },
              {
                path: 'el-rate',
                name: 'PluginRenderElementGridCellElRate',
                component: () => import('@/views/plugin-render-element/grid/cell/el-rate/CodeExample.vue')
              }
            ]
          },
          {
            path: 'edit',
            component: RouteLayout,
            children: [
              {
                path: 'el-input',
                name: 'PluginRenderElementGridEditElInput',
                component: () => import('@/views/plugin-render-element/grid/edit/el-input/CodeExample.vue')
              },
              {
                path: 'el-input-number',
                name: 'PluginRenderElementGridEditElInputNumber',
                component: () => import('@/views/plugin-render-element/grid/edit/el-input-number/CodeExample.vue')
              },
              {
                path: 'el-autocomplete',
                name: 'PluginRenderElementGridEditElAutocomplete',
                component: () => import('@/views/plugin-render-element/grid/edit/el-autocomplete/CodeExample.vue')
              },
              {
                path: 'el-select',
                name: 'PluginRenderElementGridEditElSelect',
                component: () => import('@/views/plugin-render-element/grid/edit/el-select/CodeExample.vue')
              },
              {
                path: 'el-cascader',
                name: 'PluginRenderElementGridEditElCascader',
                component: () => import('@/views/plugin-render-element/grid/edit/el-cascader/CodeExample.vue')
              },
              {
                path: 'el-date-picker',
                name: 'PluginRenderElementGridEditElDatePicker',
                component: () => import('@/views/plugin-render-element/grid/edit/el-date-picker/CodeExample.vue')
              },
              {
                path: 'el-time-select',
                name: 'PluginRenderElementGridEditElTimeSelect',
                component: () => import('@/views/plugin-render-element/grid/edit/el-time-select/CodeExample.vue')
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
            path: 'renderView',
            name: 'PluginRenderElementFormDesignRenderView',
            component: () => import('@/views/plugin-render-element/form-design/renderView/CodeExample.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/plugin-render-antd',
    component: PageLayout,
    children: [
      {
        path: 'install',
        name: 'PluginRenderAntdInstall',
        component: () => import('@/views/plugin-render-antd/install/CodeExample.vue')
      },
      {
        path: 'form',
        component: RouteLayout,
        children: [
          {
            path: 'itemTemplate',
            component: RouteLayout,
            children: [
              {
                path: 'a-input',
                name: 'PluginRenderAntdFormItemTemplateAInput',
                component: () => import('@/views/plugin-render-antd/form/itemTemplate/a-input/CodeExample.vue')
              },
              {
                path: 'a-select',
                name: 'PluginRenderAntdFormItemTemplateASelect',
                component: () => import('@/views/plugin-render-antd/form/itemTemplate/a-select/CodeExample.vue')
              },
              {
                path: 'a-switch',
                name: 'PluginRenderAntdFormItemTemplateASwitch',
                component: () => import('@/views/plugin-render-antd/form/itemTemplate/a-switch/CodeExample.vue')
              }
            ]
          },
          {
            path: 'itemRender',
            component: RouteLayout,
            children: [
              {
                path: 'a-input',
                name: 'PluginRenderAntdFormItemRenderAInput',
                component: () => import('@/views/plugin-render-antd/form/itemRender/a-input/CodeExample.vue')
              },
              {
                path: 'a-select',
                name: 'PluginRenderAntdFormItemRenderASelect',
                component: () => import('@/views/plugin-render-antd/form/itemRender/a-select/CodeExample.vue')
              },
              {
                path: 'a-switch',
                name: 'PluginRenderAntdFormItemRenderASwitch',
                component: () => import('@/views/plugin-render-antd/form/itemRender/a-switch/CodeExample.vue')
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
            path: 'cell',
            component: RouteLayout,
            children: [
              {
                path: 'a-switch',
                name: 'PluginRenderAntdTableCellElSwitch',
                component: () => import('@/views/plugin-render-antd/table/cell/a-switch/CodeExample.vue')
              },
              {
                path: 'a-rate',
                name: 'PluginRenderAntdTableCellElRate',
                component: () => import('@/views/plugin-render-antd/table/cell/a-rate/CodeExample.vue')
              }
            ]
          },
          {
            path: 'edit',
            component: RouteLayout,
            children: [
              {
                path: 'a-input',
                name: 'PluginRenderAntdTableEditElInput',
                component: () => import('@/views/plugin-render-antd/table/edit/a-input/CodeExample.vue')
              },
              {
                path: 'a-input-number',
                name: 'PluginRenderAntdTableEditElInputNumber',
                component: () => import('@/views/plugin-render-antd/table/edit/a-input-number/CodeExample.vue')
              },
              {
                path: 'a-autocomplete',
                name: 'PluginRenderAntdTableEditElAutocomplete',
                component: () => import('@/views/plugin-render-antd/table/edit/a-autocomplete/CodeExample.vue')
              },
              {
                path: 'a-select',
                name: 'PluginRenderAntdTableEditElSelect',
                component: () => import('@/views/plugin-render-antd/table/edit/a-select/CodeExample.vue')
              },
              {
                path: 'a-cascader',
                name: 'PluginRenderAntdTableEditElCascader',
                component: () => import('@/views/plugin-render-antd/table/edit/a-cascader/CodeExample.vue')
              },
              {
                path: 'a-date-picker',
                name: 'PluginRenderAntdTableEditElDatePicker',
                component: () => import('@/views/plugin-render-antd/table/edit/a-date-picker/CodeExample.vue')
              },
              {
                path: 'a-time-picker',
                name: 'PluginRenderAntdTableEditElTimePicker',
                component: () => import('@/views/plugin-render-antd/table/edit/a-time-picker/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'grid',
        component: RouteLayout,
        children: [
          {
            path: 'cell',
            component: RouteLayout,
            children: [
              {
                path: 'a-switch',
                name: 'PluginRenderAntdGridCellElSwitch',
                component: () => import('@/views/plugin-render-antd/grid/cell/a-switch/CodeExample.vue')
              },
              {
                path: 'a-rate',
                name: 'PluginRenderAntdGridCellElRate',
                component: () => import('@/views/plugin-render-antd/grid/cell/a-rate/CodeExample.vue')
              }
            ]
          },
          {
            path: 'edit',
            component: RouteLayout,
            children: [
              {
                path: 'a-input',
                name: 'PluginRenderAntdGridEditElInput',
                component: () => import('@/views/plugin-render-antd/grid/edit/a-input/CodeExample.vue')
              },
              {
                path: 'a-input-number',
                name: 'PluginRenderAntdGridEditElInputNumber',
                component: () => import('@/views/plugin-render-antd/grid/edit/a-input-number/CodeExample.vue')
              },
              {
                path: 'a-autocomplete',
                name: 'PluginRenderAntdGridEditElAutocomplete',
                component: () => import('@/views/plugin-render-antd/grid/edit/a-autocomplete/CodeExample.vue')
              },
              {
                path: 'a-select',
                name: 'PluginRenderAntdGridEditElSelect',
                component: () => import('@/views/plugin-render-antd/grid/edit/a-select/CodeExample.vue')
              },
              {
                path: 'a-cascader',
                name: 'PluginRenderAntdGridEditElCascader',
                component: () => import('@/views/plugin-render-antd/grid/edit/a-cascader/CodeExample.vue')
              },
              {
                path: 'a-date-picker',
                name: 'PluginRenderAntdGridEditElDatePicker',
                component: () => import('@/views/plugin-render-antd/grid/edit/a-date-picker/CodeExample.vue')
              },
              {
                path: 'a-time-picker',
                name: 'PluginRenderAntdGridEditElTimePicker',
                component: () => import('@/views/plugin-render-antd/grid/edit/a-time-picker/CodeExample.vue')
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
            path: 'renderView',
            name: 'PluginRenderAntdFormDesignRenderView',
            component: () => import('@/views/plugin-render-antd/form-design/renderView/CodeExample.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/plugin-render-iview',
    component: PageLayout,
    children: [
      {
        path: 'install',
        name: 'PluginRenderIViewInstall',
        component: () => import('@/views/plugin-render-iview/install/CodeExample.vue')
      }
    ]
  },
  {
    path: '/plugin-render-naive',
    component: PageLayout,
    children: [
      {
        path: 'install',
        name: 'PluginRenderNaiveInstall',
        component: () => import('@/views/plugin-render-naive/install/CodeExample.vue')
      }
    ]
  },
  {
    path: '/plugin-render-wangeditor',
    component: PageLayout,
    children: [
      {
        path: 'install',
        name: 'PluginRenderWangEditorInstall',
        component: () => import('@/views/plugin-render-wangeditor/install/CodeExample.vue')
      },
      {
        path: 'form',
        component: RouteLayout,
        children: [
          {
            path: 'itemTemplate',
            component: RouteLayout,
            children: [
              {
                path: 'wang-editor',
                name: 'PluginRenderWangEditorFormItemTemplateWangEditor',
                component: () => import('@/views/plugin-render-wangeditor/form/itemTemplate/wang-editor/CodeExample.vue')
              }
            ]
          },
          {
            path: 'itemRender',
            component: RouteLayout,
            children: [
              {
                path: 'wang-editor',
                name: 'PluginRenderWangEditorFormItemRenderWangEditor',
                component: () => import('@/views/plugin-render-wangeditor/form/itemRender/wang-editor/CodeExample.vue')
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
            path: 'renderView',
            name: 'PluginRenderWangEditorFormDesignRenderView',
            component: () => import('@/views/plugin-render-wangeditor/form-design/renderView/CodeExample.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/plugin-render-echarts',
    component: PageLayout,
    children: [
      {
        path: 'install',
        name: 'PluginRenderEcharts',
        component: () => import('@/views/plugin-render-echarts/install/CodeExample.vue')
      }
    ]
  },
  {
    path: '/plugin-validator',
    component: PageLayout,
    children: [
      {
        path: 'install',
        name: 'PluginValidator',
        component: () => import('@/views/plugin-validator/install/CodeExample.vue')
      },
      {
        path: 'form',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'PluginValidatorFormBase',
            component: () => import('@/views/plugin-validator/form/base/CodeExample.vue')
          }
        ]
      },
      {
        path: 'table',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'PluginValidatorTableBase',
            component: () => import('@/views/plugin-validator/table/base/CodeExample.vue')
          }
        ]
      },
      {
        path: 'grid',
        component: RouteLayout,
        children: [
          {
            path: 'base',
            name: 'PluginValidatorGridBase',
            component: () => import('@/views/plugin-validator/grid/base/CodeExample.vue')
          }
        ]
      }
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
