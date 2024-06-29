export interface NavVO {
  title?: string
  name?: string
  i18nKey?: string
  isAllAPI?: boolean
  isSelfAPI?: boolean
  isExpand?: boolean
  isNew?: boolean
  isUnpublished?: boolean
  isEnterprise?: boolean
  isPlugin?: boolean
  routerLink?: {
    name: string
    params?: Record<string, string | number>
    query?: Record<string, string | number>
  }
  linkUrl?: string
  linkTarget?: '_self' | '_blank'
  linkStatus?: 'warning' | 'success' | 'error'
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
          { title: '导出 XLSX 文件', routerLink: { name: 'PluginExportXlsxTableExport' } },
          { title: '导入 XLSX 格式', routerLink: { name: 'PluginExportXlsxTableImport' } },
          { title: '使用工具栏', routerLink: { name: 'PluginExportXlsxTableToolbar' } },
          { title: '高级导出', routerLink: { name: 'PluginExportXlsxTableAdvanced' } }
        ]
      },
      {
        title: 'Grid 配置式表格',
        children: [
          { title: '导出 XLSX 文件', routerLink: { name: 'PluginExportXlsxGridExport' } },
          { title: '导入 XLSX 格式', routerLink: { name: 'PluginExportXlsxGridImport' } },
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
          { title: '导出 PDF 文件', routerLink: { name: 'PluginExportPdfTableExport' } },
          { title: '使用工具栏', routerLink: { name: 'PluginExportPdfTableToolbar' } },
          { title: '高级导出', routerLink: { name: 'PluginExportPdfTableAdvanced' } }
        ]
      },
      {
        title: 'Grid 配置式表格',
        children: [
          { title: '导出 PDF 文件', routerLink: { name: 'PluginExportPdfGridExport' } },
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
      {
        title: 'Form 表单',
        children: [
          {
            title: '基础表单',
            children: [
              { title: 'el-input', routerLink: { name: 'PluginRenderElementFormItemTemplateElInput' } },
              { title: 'el-select', routerLink: { name: 'PluginRenderElementFormItemTemplateElSelect' } }
            ]
          },
          {
            title: '配置式表单',
            children: [
              { title: 'el-input', routerLink: { name: 'PluginRenderElementFormItemRenderElInput' } },
              { title: 'el-select', routerLink: { name: 'PluginRenderElementFormItemRenderElSelect' } }
            ]
          }
        ]
      },
      {
        title: 'Table 基础表格',
        children: [
          {
            title: '单元格 - 渲染',
            children: [
              { title: 'el-switch', routerLink: { name: 'PluginRenderElementTableCellElSwitch' } },
              { title: 'el-rate', routerLink: { name: 'PluginRenderElementTableCellElRate' } }
            ]
          },
          {
            title: '可编辑 - 渲染',
            children: [
              { title: 'el-input', routerLink: { name: 'PluginRenderElementTableEditElInput' } },
              { title: 'el-input-number', routerLink: { name: 'PluginRenderElementTableEditElInputNumber' } },
              { title: 'el-autocomplete', routerLink: { name: 'PluginRenderElementTableEditElAutocomplete' } },
              { title: 'el-select', routerLink: { name: 'PluginRenderElementTableEditElSelect' } },
              { title: 'el-cascader', routerLink: { name: 'PluginRenderElementTableEditElCascader' } },
              { title: 'el-date-picker', routerLink: { name: 'PluginRenderElementTableEditElDatePicker' } },
              { title: 'el-time-picker', routerLink: { name: 'PluginRenderElementTableEditElTimeSelect' } }
            ]
          }
        ]
      },
      {
        title: 'Grid 配置式表格',
        children: [
          {
            title: '单元格 - 渲染',
            children: [
              { title: 'el-switch', routerLink: { name: 'PluginRenderElementGridCellElSwitch' } },
              { title: 'el-rate', routerLink: { name: 'PluginRenderElementGridCellElRate' } }
            ]
          },
          {
            title: '可编辑 - 渲染',
            children: [
              { title: 'el-input', routerLink: { name: 'PluginRenderElementGridEditElInput' } },
              { title: 'el-input-number', routerLink: { name: 'PluginRenderElementGridEditElInputNumber' } },
              { title: 'el-autocomplete', routerLink: { name: 'PluginRenderElementGridEditElAutocomplete' } },
              { title: 'el-select', routerLink: { name: 'PluginRenderElementGridEditElSelect' } },
              { title: 'el-cascader', routerLink: { name: 'PluginRenderElementGridEditElCascader' } },
              { title: 'el-date-picker', routerLink: { name: 'PluginRenderElementGridEditElDatePicker' } },
              { title: 'el-time-picker', routerLink: { name: 'PluginRenderElementGridEditElTimeSelect' } }
            ]
          }
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
      {
        title: 'Table 基础表格',
        children: [
          {
            title: '单元格 - 渲染',
            children: [
              { title: 'a-switch', routerLink: { name: 'PluginRenderAntdTableCellElSwitch' } },
              { title: 'a-rate', routerLink: { name: 'PluginRenderAntdTableCellElRate' } }
            ]
          },
          {
            title: '可编辑 - 渲染',
            children: [
              { title: 'a-input', routerLink: { name: 'PluginRenderAntdTableEditElInput' } },
              { title: 'a-input-number', routerLink: { name: 'PluginRenderAntdTableEditElInputNumber' } },
              { title: 'a-autocomplete', routerLink: { name: 'PluginRenderAntdTableEditElAutocomplete' } },
              { title: 'a-select', routerLink: { name: 'PluginRenderAntdTableEditElSelect' } },
              { title: 'a-cascader', routerLink: { name: 'PluginRenderAntdTableEditElCascader' } },
              { title: 'a-date-picker', routerLink: { name: 'PluginRenderAntdTableEditElDatePicker' } },
              { title: 'a-time-picker', routerLink: { name: 'PluginRenderAntdTableEditElTimePicker' } }
            ]
          }
        ]
      },
      {
        title: 'Grid 配置式表格',
        children: [
          {
            title: '单元格 - 渲染',
            children: [
              { title: 'a-switch', routerLink: { name: 'PluginRenderAntdGridCellElSwitch' } },
              { title: 'a-rate', routerLink: { name: 'PluginRenderAntdGridCellElRate' } }
            ]
          },
          {
            title: '可编辑 - 渲染',
            children: [
              { title: 'a-input', routerLink: { name: 'PluginRenderAntdGridEditElInput' } },
              { title: 'a-input-number', routerLink: { name: 'PluginRenderAntdGridEditElInputNumber' } },
              { title: 'a-autocomplete', routerLink: { name: 'PluginRenderAntdGridEditElAutocomplete' } },
              { title: 'a-select', routerLink: { name: 'PluginRenderAntdGridEditElSelect' } },
              { title: 'a-cascader', routerLink: { name: 'PluginRenderAntdGridEditElCascader' } },
              { title: 'a-date-picker', routerLink: { name: 'PluginRenderAntdGridEditElDatePicker' } },
              { title: 'a-time-picker', routerLink: { name: 'PluginRenderAntdGridEditElTimePicker' } }
            ]
          }
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
