export interface NavVO {
  title?: string
  name?: string
  i18nKey?: string
  isAllAPI?: boolean
  isSelfAPI?: boolean
  isExpand?: boolean
  isNew?: boolean
  isUnpublished?: boolean
  routerLink?: {
    name: string
    params?: Record<string, string | number>
    query?: Record<string, string | number>
  }
  linkUrl?: string
  linkTarget?: '_self' | '_blank'
  keywords?: string[]
  children?: NavVO[]
}

export const navConfigList: NavVO[] = [
  {
    title: '轻量级图表',
    isExpand: false,
    children: [
      {
        title: '开发指南',
        children: [
          { title: '安装插件', routerLink: { name: 'PluginRenderChartInstall' } }
        ]
      },
      {
        title: 'Table 基础表格',
        children: [
          { title: '评分', routerLink: { name: 'PluginRenderChartTableRate' } },
          { title: '柱状图', routerLink: { name: 'PluginRenderChartTableBar' } },
          { title: '饼图', routerLink: { name: 'PluginRenderChartTablePie' } }
        ]
      },
      {
        title: 'Grid 配置式表格',
        children: [
          { title: '评分', routerLink: { name: 'PluginRenderChartGridRate' } },
          { title: '柱状图', routerLink: { name: 'PluginRenderChartGridBar' } },
          { title: '饼图', routerLink: { name: 'PluginRenderChartGridPie' } }
        ]
      }
    ]
  },
  {
    title: '导入/导出 XLSX',
    isExpand: false,
    children: [
      {
        title: '开发指南',
        children: [
          { title: '安装插件', routerLink: { name: 'PluginExportXlsxInstall' } }
        ]
      },
      {
        title: 'Table 基础表格',
        children: [
          { title: '导出 xlsx', routerLink: { name: 'PluginExportXlsxTableExport' } },
          { title: '使用工具栏', routerLink: { name: 'PluginExportXlsxTableToolbar' } },
          { title: '高级导出', routerLink: { name: 'PluginExportXlsxTableAdvanced' } }
        ]
      },
      {
        title: 'Grid 配置式表格',
        children: [
          { title: '导出 xlsx', routerLink: { name: 'PluginExportXlsxGridExport' } },
          { title: '使用工具栏', routerLink: { name: 'PluginExportXlsxGridToolbar' } },
          { title: '高级导出', routerLink: { name: 'PluginExportXlsxGridAdvanced' } }
        ]
      }
    ]
  },
  {
    title: '导出 PDF',
    isExpand: false,
    children: [
      {
        title: '开发指南',
        children: [
          { title: '安装插件', routerLink: { name: 'PluginExportPdfInstall' } }
        ]
      },
      {
        title: 'Table 基础表格',
        children: [
          { title: '导出 pdf', routerLink: { name: 'PluginExportPdfTableExport' } },
          { title: '使用工具栏', routerLink: { name: 'PluginExportPdfTableToolbar' } },
          { title: '高级导出', routerLink: { name: 'PluginExportPdfTableAdvanced' } }
        ]
      },
      {
        title: 'Grid 配置式表格',
        children: [
          { title: '导出 pdf', routerLink: { name: 'PluginExportPdfGridExport' } },
          { title: '使用工具栏', routerLink: { name: 'PluginExportPdfGridToolbar' } },
          { title: '高级导出', routerLink: { name: 'PluginExportPdfGridAdvanced' } }
        ]
      }
    ]
  },
  {
    title: '渲染 element-plus 组件',
    isExpand: false,
    children: [
      {
        title: '开发指南',
        children: [
          { title: '安装插件', routerLink: { name: 'PluginRenderElementInstall' } }
        ]
      },
      // {
      //   title: 'Table 基础表格',
      //   children: [
      //     // { title: '单元格可编辑', routerLink: { name: 'PluginRenderElementTableEdit' } }
      //   ]
      // },
      {
        title: 'Grid 配置式表格',
        children: [
          { title: '单元格可编辑', routerLink: { name: 'PluginRenderElementGridEdit' } }
        ]
      },
      {
        title: 'FormDesign 表单设计器',
        children: [
          { title: '渲染视图', routerLink: { name: 'PluginRenderElementFormDesignRenderView' } }
        ]
      }
    ]
  },
  {
    title: '渲染 ant-design-vue 组件',
    isExpand: false,
    children: [
      {
        title: '开发指南',
        children: [
          { title: '安装插件', routerLink: { name: 'PluginRenderAntdInstall' } }
        ]
      },
      // {
      //   title: 'Table 基础表格',
      //   children: [
      //     // { title: '单元格可编辑', routerLink: { name: 'PluginRenderAntdTableEdit' } }
      //   ]
      // },
      {
        title: 'Grid 配置式表格',
        children: [
          { title: '单元格可编辑', routerLink: { name: 'PluginRenderAntdGridEdit' } }
        ]
      },
      {
        title: 'FormDesign 表单设计器',
        children: [
          { title: '渲染视图', routerLink: { name: 'PluginRenderAntdFormDesignRenderView' } }
        ]
      }
    ]
  },
  {
    title: 'API',
    isExpand: false,
    children: []
  }
]
