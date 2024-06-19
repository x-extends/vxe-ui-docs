import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import StartInstall from '@/views/start/install/CodeExample.vue'
import StartUseGlobal from '@/views/start/useGlobal/CodeExample.vue'
import StartUseImport from '@/views/start/useImport/CodeExample.vue'
import StartIcons from '@/views/start/icon/CodeExample.vue'
import StartConfig from '@/views/start/config/CodeExample.vue'
import StartTheme from '@/views/start/theme/CodeExample.vue'
import StartI18n from '@/views/start/i18n/CodeExample.vue'
import StartUseZIndex from '@/views/start/z-index/CodeExample.vue'
import FreeDonation from '@/views/start/FreeDonation.vue'
import JoinSponsor from '@/views/start/JoinSponsor.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/*',
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
    path: '/plugin-render-chart',
    children: [
      {
        path: 'install',
        name: 'PluginRenderChartInstall',
        component: () => import('@/views/plugin-render-chart/install/CodeExample.vue')
      },
      {
        path: 'table',
        children: [
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
        children: [
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
    path: '/plugin-export-xlsx',
    children: [
      {
        path: 'install',
        name: 'PluginExportXlsxInstall',
        component: () => import('@/views/plugin-export-xlsx/install/CodeExample.vue')
      },
      {
        path: 'table',
        children: [
          {
            path: 'export',
            name: 'PluginExportXlsxTableExport',
            component: () => import('@/views/plugin-export-xlsx/table/export/CodeExample.vue')
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
          }
        ]
      },
      {
        path: 'grid',
        children: [
          {
            path: 'export',
            name: 'PluginExportXlsxGridExport',
            component: () => import('@/views/plugin-export-xlsx/grid/export/CodeExample.vue')
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
          }
        ]
      }
    ]
  },
  {
    path: '/plugin-export-pdf',
    children: [
      {
        path: 'install',
        name: 'PluginExportPdfInstall',
        component: () => import('@/views/plugin-export-pdf/install/CodeExample.vue')
      },
      {
        path: 'table',
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
