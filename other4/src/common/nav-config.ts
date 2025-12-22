import { NavVO } from './nav'

export const navConfigList: NavVO[] = [
  {
    title: '官方插件 - 轻量级图表',
    isExpand: false,
    children: [
      {
        title: '开发指南',
        children: [
          { title: 'NPM 安装插件', routerLink: { name: 'PluginChartStartNpmInstall' } },
          { title: 'CDN 安装插件', routerLink: { name: 'PluginChartStartCdnInstall' } }
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
    title: '官方插件 - 快捷键',
    isExpand: false,
    children: [
      {
        title: '开发指南',
        children: [
          { title: 'NPM 安装插件', routerLink: { name: 'PluginShortcutKeyStartNpmInstall' } },
          { title: 'CDN 安装插件', routerLink: { name: 'PluginShortcutKeyStartCdnInstall' } }
        ]
      }
    ]
  },
  {
    title: '官方插件 - 数据校验',
    isExpand: false,
    children: [
      {
        title: '开发指南',
        children: [
          { title: 'NPM 安装插件', routerLink: { name: 'PluginValidatorStartNpmInstall' } },
          { title: 'CDN 安装插件', routerLink: { name: 'PluginValidatorStartCdnInstall' } }
        ]
      },
      {
        title: 'Form 表单',
        children: [
          { title: '常用校验', routerLink: { name: 'PluginValidatorFormBase' } }
        ]
      },
      {
        title: 'Table 基础表格',
        children: [
          { title: '常用校验', routerLink: { name: 'PluginValidatorTableBase' } }
        ]
      },
      {
        title: 'Grid 配置式表格',
        children: [
          { title: '常用校验', routerLink: { name: 'PluginValidatorGridBase' } }
        ]
      }
    ]
  },
  {
    title: '官方插件 - 右键菜单',
    isExpand: false,
    children: [
      {
        title: '开发指南',
        children: [
          { title: 'NPM 安装插件', routerLink: { name: 'PluginMenuStartNpmInstall' } },
          { title: 'CDN 安装插件', routerLink: { name: 'PluginMenuStartCdnInstall' } }
        ]
      },
      {
        title: 'Table 基础表格',
        children: [
          { title: '表头菜单', routerLink: { name: 'PluginMenuTableHeader' } },
          { title: '单元格菜单', routerLink: { name: 'PluginMenuTableBody' } },
          { title: '表尾菜单', routerLink: { name: 'PluginMenuTableFooter' } },
          { title: '完整右键菜单', routerLink: { name: 'PluginMenuTableFull' } }
        ]
      },
      {
        title: 'Grid 配置式表格',
        children: [
          { title: '表头菜单', routerLink: { name: 'PluginMenuGridHeader' } },
          { title: '单元格菜单', routerLink: { name: 'PluginMenuGridBody' } },
          { title: '表尾菜单', routerLink: { name: 'PluginMenuGridFooter' } },
          { title: '完整右键菜单', routerLink: { name: 'PluginMenuGridFull' } }
        ]
      }
    ]
  },
  {
    title: '第三方插件 - 导入/导出 XLSX',
    isExpand: false,
    children: [
      {
        title: '开发指南',
        children: [
          { title: 'NPM 安装插件', routerLink: { name: 'PluginExportXlsxStartNpmInstall' } },
          { title: 'CDN 安装插件', routerLink: { name: 'PluginExportXlsxStartCdnInstall' } }
        ]
      },
      {
        title: 'Table 基础表格',
        children: [
          { title: '导出 XLSX 文件', routerLink: { name: 'PluginExportXlsxTableExport' } },
          { title: '导入 XLSX 格式', routerLink: { name: 'PluginExportXlsxTableImport' } },
          { title: '使用工具栏', routerLink: { name: 'PluginExportXlsxTableToolbar' } },
          { title: '高级导出', routerLink: { name: 'PluginExportXlsxTableAdvanced' } },
          { title: '大数据量导出', routerLink: { name: 'PluginExportXlsxTableScroll' } },
          {
            title: '自定义样式',
            children: [
              { title: '边框', routerLink: { name: 'PluginExportXlsxTableSheetMethodBorder' } },
              { title: '字体', routerLink: { name: 'PluginExportXlsxTableSheetMethodFont' } },
              { title: '表头背景', routerLink: { name: 'PluginExportXlsxTableSheetMethodHeaderBackground' } },
              { title: '列宽', routerLink: { name: 'PluginExportXlsxTableSheetMethodCellWidth' } },
              { title: '行高', routerLink: { name: 'PluginExportXlsxTableSheetMethodCellHeight' } },
              { title: '超链接', routerLink: { name: 'PluginExportXlsxTableSheetMethodHyperlink' } },
              { title: '添加图片', routerLink: { name: 'PluginExportXlsxTableSheetMethodImage' } }
            ]
          }
        ]
      },
      {
        title: 'Grid 配置式表格',
        children: [
          { title: '导出 XLSX 文件', routerLink: { name: 'PluginExportXlsxGridExport' } },
          { title: '导入 XLSX 格式', routerLink: { name: 'PluginExportXlsxGridImport' } },
          { title: '使用工具栏', routerLink: { name: 'PluginExportXlsxGridToolbar' } },
          { title: '高级导出', routerLink: { name: 'PluginExportXlsxGridAdvanced' } },
          { title: '高级导入', routerLink: { name: 'PluginExportXlsxGridOpenImport' } },
          { title: '大数据量导出', routerLink: { name: 'PluginExportXlsxGridScroll' } },
          {
            title: '自定义样式',
            children: [
              { title: '边框', routerLink: { name: 'PluginExportXlsxGridSheetMethodBorder' } },
              { title: '字体', routerLink: { name: 'PluginExportXlsxGridSheetMethodFont' } },
              { title: '表头背景', routerLink: { name: 'PluginExportXlsxGridSheetMethodHeaderBackground' } },
              { title: '列宽', routerLink: { name: 'PluginExportXlsxGridSheetMethodCellWidth' } },
              { title: '行高', routerLink: { name: 'PluginExportXlsxGridSheetMethodCellHeight' } },
              { title: '超链接', routerLink: { name: 'PluginExportXlsxGridSheetMethodHyperlink' } },
              { title: '添加图片', routerLink: { name: 'PluginExportXlsxGridSheetMethodImage' } }
            ]
          }
        ]
      }
    ]
  },
  {
    title: '第三方插件 - 导出 PDF',
    isExpand: false,
    children: [
      {
        title: '开发指南',
        children: [
          { title: 'NPM 安装插件', routerLink: { name: 'PluginExportPdfStartNpmInstall' } },
          { title: 'CDN 安装插件', routerLink: { name: 'PluginExportPdfStartCdnInstall' } }
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
    title: '第三方插件 - 渲染 wangEditor 富文本',
    isExpand: false,
    children: [
      {
        title: '开发指南',
        children: [
          { title: 'NPM 安装插件', routerLink: { name: 'PluginRenderWangEditorStartNpmInstall' } },
          { title: 'CDN 安装插件', routerLink: { name: 'PluginRenderWangEditorStartCdnInstall' } }
        ]
      },
      {
        title: 'Form 表单',
        children: [
          { title: 'WangEditor 基础表单', routerLink: { name: 'PluginRenderWangEditorFormItemTemplateWangEditor' } },
          { title: 'WangEditor 配置式表单', routerLink: { name: 'PluginRenderWangEditorFormItemRenderWangEditor' } }
        ]
      },
      {
        title: 'FormDesign 表单设计器',
        children: [
          { title: '渲染视图', routerLink: { name: 'PluginRenderWangEditorFormDesignRenderView' } },
          { title: '可视化设计器模板', isTemplate: true, linkUrl: 'https://vxeui.com/design-template/' },
          { title: '零代码平台模板', isEnterprise: true, linkUrl: 'https://vxeui.com/zero-code/' }
        ]
      }
    ]
  },
  // {
  //   title: '第三方插件 - 渲染 echarts 图表',
  //   isExpand: false,
  //   children: [
  //     {
  //       title: '开发指南',
  //       children: [
  //         { title: 'NPM 安装插件', routerLink: { name: 'PluginRenderEchartsStartNpmInstall' } },
  //         { title: 'CDN 安装插件', routerLink: { name: 'PluginRenderEchartsStartCdnInstall' } }
  //       ]
  //     },
  //     {
  //       title: 'Grid 配置式表格',
  //       children: [
  //         { title: '单元格 - 柱状图', isEnterprise: true, linkUrl: 'https://vxetable.cn/pluginDocs/table/#/extendCellArea/grid/areaBasicsEcharts' },
  //         { title: '单元格 - 折线图', isEnterprise: true, linkUrl: 'https://vxetable.cn/pluginDocs/table/#/extendCellArea/grid/areaBasicsEcharts' },
  //         { title: '单元格 - 饼图', isEnterprise: true, linkUrl: 'https://vxetable.cn/pluginDocs/table/#/extendCellArea/grid/areaBasicsEcharts' }
  //       ]
  //     }
  //   ]
  // },
  {
    title: '第三方插件 - 渲染 element-plus 组件',
    isExpand: false,
    children: [
      {
        title: '开发指南',
        children: [
          {
            i18nKey: 'app.aside.menu.fullInsrall',
            children: [
              { title: 'NPM 安装插件', routerLink: { name: 'PluginRenderElementStartFullNpmInstall' } }
              // { title: 'CDN 安装插件', routerLink: { name: 'PluginRenderElementStartFullCdnInstall' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.useTableInsrall',
            children: [
              { title: 'NPM 安装插件', routerLink: { name: 'PluginRenderElementStartTableNpmInstall' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.useDesignInsrall',
            children: [
              { title: 'NPM 安装插件', routerLink: { name: 'PluginRenderElementStartDesignNpmInstall' } }
            ]
          }
        ]
      },
      {
        title: 'Form 表单',
        children: [
          {
            title: '基础表单',
            children: [
              { title: 'ElInput', routerLink: { name: 'PluginRenderElementFormItemTemplateElInput' } },
              { title: 'ElSelect', routerLink: { name: 'PluginRenderElementFormItemTemplateElSelect' } },
              { title: 'ElSwitch', routerLink: { name: 'PluginRenderElementFormItemTemplateElSwitch' } },
              { title: 'ElRate', routerLink: { name: 'PluginRenderElementFormItemTemplateElRate' } }
            ]
          },
          {
            title: '配置式表单',
            children: [
              { title: 'ElAutocomplete', routerLink: { name: 'PluginRenderElementFormItemRenderElAutocomplete' } },
              { title: 'ElInput', routerLink: { name: 'PluginRenderElementFormItemRenderElInput' } },
              { title: 'ElInputNumber', routerLink: { name: 'PluginRenderElementFormItemRenderElInputNumber' } },
              { title: 'ElSelect', routerLink: { name: 'PluginRenderElementFormItemRenderElSelect' } },
              { title: 'ElDatePicker', routerLink: { name: 'PluginRenderElementFormItemRenderElDatePicker' } },
              { title: 'ElTimePicker', routerLink: { name: 'PluginRenderElementFormItemRenderElTimePicker' } },
              { title: 'ElCascader', routerLink: { name: 'PluginRenderElementFormItemRenderElCascader' } },
              { title: 'ElSwitch', routerLink: { name: 'PluginRenderElementFormItemRenderElSwitch' } },
              { title: 'ElRadioGroup', routerLink: { name: 'PluginRenderElementFormItemRenderElRadioGroup' } },
              { title: 'ElCheckboxGroup', routerLink: { name: 'PluginRenderElementFormItemRenderElCheckboxGroup' } },
              { title: 'ElRate', routerLink: { name: 'PluginRenderElementFormItemRenderElRate' } }
            ]
          }
        ]
      },
      {
        title: 'Table 基础表格',
        children: [
          {
            title: '筛选 - 渲染',
            children: [
              { title: 'ElInput', routerLink: { name: 'PluginRenderElementTableFilterElInput' } },
              { title: 'ElDatePicker', routerLink: { name: 'PluginRenderElementTableFilterElDatePicker' } }
            ]
          },
          {
            title: '单元格 - 渲染',
            children: [
              { title: 'ElSwitch', routerLink: { name: 'PluginRenderElementTableCellElSwitch' } },
              { title: 'ElRate', routerLink: { name: 'PluginRenderElementTableCellElRate' } }
            ]
          },
          {
            title: '可编辑 - 渲染',
            children: [
              { title: 'ElInput', routerLink: { name: 'PluginRenderElementTableEditElInput' } },
              { title: 'ElInputNumber', routerLink: { name: 'PluginRenderElementTableEditElInputNumber' } },
              { title: 'ElAutocomplete', routerLink: { name: 'PluginRenderElementTableEditElAutocomplete' } },
              { title: 'ElSelect', routerLink: { name: 'PluginRenderElementTableEditElSelect' } },
              { title: 'ElCascader', routerLink: { name: 'PluginRenderElementTableEditElCascader' } },
              { title: 'ElDatePicker', routerLink: { name: 'PluginRenderElementTableEditElDatePicker' } },
              { title: 'ElTimePicker', routerLink: { name: 'PluginRenderElementTableEditElTimeSelect' } }
            ]
          }
        ]
      },
      {
        title: 'Grid 配置式表格',
        children: [
          {
            title: '筛选 - 渲染',
            children: [
              { title: 'ElInput', routerLink: { name: 'PluginRenderElementGridFilterElInput' } },
              { title: 'ElDatePicker', routerLink: { name: 'PluginRenderElementGridFilterElDatePicker' } },
              {
                title: '浮动筛选',
                children: [
                  { title: 'ElInput', routerLink: { name: 'PluginRenderElementGridFilterFloatingElInput' } },
                  { title: 'ElDatePicker', routerLink: { name: 'PluginRenderElementGridFilterFloatingElDatePicker' } }
                ]
              }
            ]
          },
          {
            title: '单元格 - 渲染',
            children: [
              { title: 'ElSwitch', routerLink: { name: 'PluginRenderElementGridCellElSwitch' } },
              { title: 'ElRate', routerLink: { name: 'PluginRenderElementGridCellElRate' } }
            ]
          },
          {
            title: '可编辑 - 渲染',
            children: [
              { title: 'ElInput', routerLink: { name: 'PluginRenderElementGridEditElInput' } },
              { title: 'ElInputNumber', routerLink: { name: 'PluginRenderElementGridEditElInputNumber' } },
              { title: 'ElAutocomplete', routerLink: { name: 'PluginRenderElementGridEditElAutocomplete' } },
              { title: 'ElSelect', routerLink: { name: 'PluginRenderElementGridEditElSelect' } },
              { title: 'ElCascader', routerLink: { name: 'PluginRenderElementGridEditElCascader' } },
              { title: 'ElDatePicker', routerLink: { name: 'PluginRenderElementGridEditElDatePicker' } },
              { title: 'ElTimePicker', routerLink: { name: 'PluginRenderElementGridEditElTimeSelect' } }
            ]
          }
        ]
      },
      {
        title: 'FormDesign 表单设计器',
        children: [
          { title: '渲染视图', routerLink: { name: 'PluginRenderElementFormDesignRenderView' } },
          { title: '可视化设计器模板', isTemplate: true, linkUrl: 'https://vxeui.com/design-template/' },
          { title: '零代码平台模板', isEnterprise: true, linkUrl: 'https://vxeui.com/zero-code/' }
        ]
      }
    ]
  },
  {
    title: '第三方插件 - 渲染 ant-design-vue 组件',
    isExpand: false,
    children: [
      {
        title: '开发指南',
        children: [
          {
            i18nKey: 'app.aside.menu.fullInsrall',
            children: [
              { title: 'NPM 安装插件', routerLink: { name: 'PluginRenderAntdStartFullNpmInstall' } }
              // { title: 'CDN 安装插件', routerLink: { name: 'PluginRenderAntdStartFullCdnInstall' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.useTableInsrall',
            children: [
              { title: 'NPM 安装插件', routerLink: { name: 'PluginRenderAntdStartTableNpmInstall' } }
            ]
          },
          {
            i18nKey: 'app.aside.menu.useDesignInsrall',
            children: [
              { title: 'NPM 安装插件', routerLink: { name: 'PluginRenderAntdStartDesignNpmInstall' } }
            ]
          }
        ]
      },
      {
        title: 'Form 表单',
        children: [
          {
            title: '基础表单',
            children: [
              { title: 'AInput', routerLink: { name: 'PluginRenderAntdFormItemTemplateAInput' } },
              { title: 'ASelect', routerLink: { name: 'PluginRenderAntdFormItemTemplateASelect' } },
              { title: 'ASwitch', routerLink: { name: 'PluginRenderAntdFormItemTemplateASwitch' } }
            ]
          },
          {
            title: '配置式表单',
            children: [
              { title: 'AInput', routerLink: { name: 'PluginRenderAntdFormItemRenderAInput' } },
              { title: 'ASelect', routerLink: { name: 'PluginRenderAntdFormItemRenderASelect' } },
              { title: 'ASwitch', routerLink: { name: 'PluginRenderAntdFormItemRenderASwitch' } }
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
              { title: 'ASwitch', routerLink: { name: 'PluginRenderAntdTableCellElSwitch' } },
              { title: 'ARate', routerLink: { name: 'PluginRenderAntdTableCellElRate' } }
            ]
          },
          {
            title: '可编辑 - 渲染',
            children: [
              { title: 'AInput', routerLink: { name: 'PluginRenderAntdTableEditElInput' } },
              { title: 'AInputNumber', routerLink: { name: 'PluginRenderAntdTableEditElInputNumber' } },
              { title: 'AAAutocomplete', routerLink: { name: 'PluginRenderAntdTableEditElAutocomplete' } },
              { title: 'ASelect', routerLink: { name: 'PluginRenderAntdTableEditElSelect' } },
              { title: 'ACascader', routerLink: { name: 'PluginRenderAntdTableEditElCascader' } },
              { title: 'ADate-Picker', routerLink: { name: 'PluginRenderAntdTableEditElDatePicker' } },
              { title: 'ATimePicker', routerLink: { name: 'PluginRenderAntdTableEditElTimePicker' } }
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
              { title: 'ASwitch', routerLink: { name: 'PluginRenderAntdGridCellElSwitch' } },
              { title: 'ARate', routerLink: { name: 'PluginRenderAntdGridCellElRate' } }
            ]
          },
          {
            title: '可编辑 - 渲染',
            children: [
              { title: 'AInput', routerLink: { name: 'PluginRenderAntdGridEditElInput' } },
              { title: 'AInputNumber', routerLink: { name: 'PluginRenderAntdGridEditElInputNumber' } },
              { title: 'AAutocomplete', routerLink: { name: 'PluginRenderAntdGridEditElAutocomplete' } },
              { title: 'ASelect', routerLink: { name: 'PluginRenderAntdGridEditElSelect' } },
              { title: 'ACascader', routerLink: { name: 'PluginRenderAntdGridEditElCascader' } },
              { title: 'ADatePicker', routerLink: { name: 'PluginRenderAntdGridEditElDatePicker' } },
              { title: 'ATimePicker', routerLink: { name: 'PluginRenderAntdGridEditElTimePicker' } }
            ]
          }
        ]
      },
      {
        title: 'FormDesign 表单设计器',
        children: [
          { title: '渲染视图', routerLink: { name: 'PluginRenderAntdFormDesignRenderView' } },
          { title: '可视化设计器模板', isTemplate: true, linkUrl: 'https://vxeui.com/design-template/' },
          { title: '零代码平台模板', isEnterprise: true, linkUrl: 'https://vxeui.com/zero-code/' }
        ]
      }
    ]
  },
  {
    title: '第三方插件 - 渲染 view-ui-plus 组件',
    isExpand: false,
    children: [
      {
        title: '开发指南',
        children: [
          { title: '安装插件', routerLink: { name: 'PluginRenderIViewInstall' } }
        ]
      }
    ]
  },
  {
    title: '第三方插件 - 渲染 naive-ui 组件',
    isExpand: false,
    children: [
      {
        title: '开发指南',
        children: [
          { title: '安装插件', routerLink: { name: 'PluginRenderNaiveInstall' } }
        ]
      }
    ]
  },
  {
    title: '第三方插件 - 渲染 arco-design 组件',
    isExpand: false,
    children: [
      {
        title: '开发指南',
        children: [
          { title: '安装插件', routerLink: { name: 'PluginRenderArcoInstall' } }
        ]
      }
    ]
  },
  {
    title: '第三方插件 - 渲染 tdesign-vue-next 组件',
    isExpand: false,
    children: [
      {
        title: '开发指南',
        children: [
          { title: '安装插件', routerLink: { name: 'PluginRenderTDesignInstall' } }
        ]
      }
    ]
  },
  {
    title: '使用第三方 iconfont 图标',
    isExpand: false,
    children: [
      {
        title: 'Font class',
        children: [
          { title: 'button', routerLink: { name: 'OtherIconfontFontClassButtonIcon' } },
          { title: 'icon-picker', routerLink: { name: 'OtherIconfontFontClassIconPickerIcons' } },
          { title: 'toolbar', routerLink: { name: 'OtherIconfontFontClassToolbarIcon' } }
        ]
      },
      {
        title: 'Symbol',
        children: [
          { title: 'button', routerLink: { name: 'OtherIconfontSymbolButtonIcon' } },
          { title: 'icon-picker', routerLink: { name: 'OtherIconfontSymbolIconPickerIcons' } }
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
