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
  isTemplate?: boolean
  routerLink?: {
    name: string
    params?: Record<string, string | number>
    query?: Record<string, string | number>
  }
  linkUrl?: string
  linkTarget?: '_self' | '_blank'
  linkStatus?: 'warning' | 'success' | 'error'
  isBack?: boolean
  keywords?: string
  children?: NavVO[]
}

export const otherUrl = `${process.env.VUE_APP_SITE_PLUGIN_URL}/other${process.env.VUE_APP_VXE_VERSION}`
export const tablePluginDocsUrl = `${process.env.VUE_APP_SITE_PLUGIN_URL}/pluginDocs/table${process.env.VUE_APP_VXE_VERSION}`

const tableNavConfig: NavVO & { children: NavVO[] } = {
  i18nKey: 'app.aside.menu.tableTitle',
  children: [
    {
      i18nKey: 'app.aside.menu.tableTableTitle',
      children: [
        { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'table' } } },
        { title: 'Column API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'column' } } },
        {
          title: '基础功能',
          children: [
            { title: '基础', routerLink: { name: 'ComponentTableBaseBasic' } },
            { title: '尺寸大小', routerLink: { name: 'ComponentTableBaseSize' }, keywords: 'size' },
            { title: '数据类型', routerLink: { name: 'ComponentTableBaseData' }, keywords: 'data' },
            { title: '表尾数据', routerLink: { name: 'ComponentTableBaseFooter' }, keywords: 'show-footer,footer-data' },
            { title: '空数据提示', routerLink: { name: 'ComponentTableBaseEmpty' }, keywords: 'empty-text' },
            { title: '边框', routerLink: { name: 'ComponentTableBaseBorder' }, keywords: 'border' },
            { title: '圆角', routerLink: { name: 'ComponentTableBaseRound' }, keywords: 'round' },
            // { title: '边距', routerLink: { name: 'ComponentTableBasePadding' } },
            { title: '对齐方式', routerLink: { name: 'ComponentTableBaseAlign' }, keywords: '对齐,align' },
            { title: '列可视', routerLink: { name: 'ComponentTableBaseVisible' }, keywords: '显示,隐藏,visible' },
            { title: '设置列宽', routerLink: { name: 'ComponentTableBaseWidth' }, keywords: '宽度,列宽' },
            { title: '自适应列宽', routerLink: { name: 'ComponentTableBaseAutoWidth' }, keywords: '宽度,自适应列宽,width,auto' },
            { title: '自动换行', routerLink: { name: 'ComponentTableBaseAutoBreak' } },
            { title: '溢出隐藏', routerLink: { name: 'ComponentTableBaseOverflow' }, keywords: 'show-overflow,show-header-overflow,show-footer-overflow' },
            { title: '文本提示', routerLink: { name: 'ComponentTableBaseTooltip' }, keywords: 'tooltip' },
            // { title: '滚动条样式', routerLink: { name: 'ComponentTableBaseScrollStyle' } },
            { title: '斑马线样式', routerLink: { name: 'ComponentTableBaseStripe' }, keywords: 'stripe' },
            { title: '单元格样式', routerLink: { name: 'ComponentTableBaseStyle' }, keywords: 'cell-class-name,row-class-name' },
            { title: '动态样式', routerLink: { name: 'ComponentTableBaseDynamicStyle' }, keywords: 'cell-style,row-style' },
            { title: '隐藏表头', routerLink: { name: 'ComponentTableBaseHeader' }, keywords: 'show-header' },
            { title: '高亮列', routerLink: { name: 'ComponentTableBaseCurrentColumn' }, keywords: 'isCurrent' },
            { title: '高亮行', routerLink: { name: 'ComponentTableBaseCurrentRow' }, keywords: 'isCurrent' },
            { title: '拖拽调整列宽', routerLink: { name: 'ComponentTableBaseHeaderResizable' }, keywords: 'resizable' },
            { title: '表格最小高度', routerLink: { name: 'ComponentTableBaseHeaderMinHeight' }, keywords: 'min-height' },
            { title: '表格高度', routerLink: { name: 'ComponentTableBaseHeight' }, keywords: 'height' },
            { title: '表格最大高度', routerLink: { name: 'ComponentTableBaseMaxHeight' }, keywords: 'max-height' },
            { title: '表格响应式高度', routerLink: { name: 'ComponentTableBaseAutoHeight' }, keywords: '自适应高度,sync-resize,auto-resize' },
            { title: '设置列高', routerLink: { name: 'ComponentTableBaseColumnHeight' }, keywords: 'height' },
            { title: '设置行高', routerLink: { name: 'ComponentTableBaseRowHeight' }, keywords: 'height' },
            { title: '冻结列', routerLink: { name: 'ComponentTableBaseFixed' }, keywords: 'fixed' },
            { title: '冻结表头和列', routerLink: { name: 'ComponentTableBaseFixedFull' }, keywords: 'fixed,height' },
            { title: '分组表头', routerLink: { name: 'ComponentTableBaseGroup' }, keywords: 'colgroup' },
            { title: '排序', routerLink: { name: 'ComponentTableBaseSort' }, keywords: 'sortable' },
            { title: '筛选', routerLink: { name: 'ComponentTableBaseFilter' }, keywords: 'filters' },
            { title: '加载中', routerLink: { name: 'ComponentTableBaseLoading' }, keywords: 'loading' },
            { title: '格式化内容', routerLink: { name: 'ComponentTableBaseFormat' }, keywords: 'formatter' },
            { title: '序号', routerLink: { name: 'ComponentTableBaseSeq' }, keywords: 'seq' },
            { title: '单选框', routerLink: { name: 'ComponentTableBaseRadio' }, keywords: 'radio' },
            { title: '复选框', routerLink: { name: 'ComponentTableBaseSelection' }, keywords: 'checkbox' },
            { title: '标题前缀图标', routerLink: { name: 'ComponentTableBaseTitlePrefix' }, keywords: 'title-prefix' },
            { title: '标题后缀图标', routerLink: { name: 'ComponentTableBaseTitleSuffix' }, keywords: 'title-suffix' },
            { title: 'HTML 类型', routerLink: { name: 'ComponentTableBaseHtml' }, keywords: 'html' },
            { title: '完整案例', routerLink: { name: 'ComponentTableBaseFull' } }
          ]
        },
        {
          title: '单元格合并',
          children: [
            { title: '将多行进行合并', routerLink: { name: 'ComponentTableMergeRow' } },
            { title: '将多列进行合并', routerLink: { name: 'ComponentTableMergeColumn' } },
            { title: '合并行与列', routerLink: { name: 'ComponentTableMergeAll' } },
            { title: '表尾合并', routerLink: { name: 'ComponentTableMergeFooter' } },
            { title: '实现横向合并树', routerLink: { name: 'ComponentTableMergeHorizontal' } },
            { title: '快捷键合并', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_merge' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaMerge' } } }
          ]
        },
        {
          title: '表尾数据',
          children: [
            { title: '是否启用表尾', routerLink: { name: 'ComponentTableFooterShowFooter' } },
            { title: '标准结构', routerLink: { name: 'ComponentTableFooterFooterData' } },
            { title: '自定义数据方法', routerLink: { name: 'ComponentTableFooterFooterMethod' } },
            { title: '格式化表尾内容', routerLink: { name: 'ComponentTableFooterFooterFormat' } },
            { title: '自定义插槽模板', routerLink: { name: 'ComponentTableFooterTemplate' } }
          ]
        },
        {
          title: '单选框',
          children: [
            { title: '高亮选择行', routerLink: { name: 'ComponentTableRadioHighlight' } },
            { title: '禁用', routerLink: { name: 'ComponentTableRadioCheckMethod' } },
            { title: '显示隐藏', routerLink: { name: 'ComponentTableRadioVisibleMethod' } },
            { title: '自定义模板', routerLink: { name: 'ComponentTableRadioTemplate' } }
          ]
        },
        {
          title: '复选框',
          children: [
            { title: '高亮选择行', routerLink: { name: 'ComponentTableCheckboxHighlight' } },
            { title: '绑定字段', routerLink: { name: 'ComponentTableCheckboxField' } },
            { title: '禁用', routerLink: { name: 'ComponentTableCheckboxCheckMethod' } },
            { title: '显示隐藏', routerLink: { name: 'ComponentTableCheckboxVisibleMethod' } },
            { title: '鼠标滑动范围选择', routerLink: { name: 'ComponentTableCheckboxRange' } },
            { title: '单元格选择-复选框', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_checkbox' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaCheckbox' } } },
            { title: '自定义模板', routerLink: { name: 'ComponentTableCheckboxTemplate' } }
          ]
        },
        {
          title: '排序',
          children: [
            { title: '数据排序', routerLink: { name: 'ComponentTableSortBase' } },
            { title: '多字段排序', routerLink: { name: 'ComponentTableSortMultiple' } },
            { title: '触发方式', routerLink: { name: 'ComponentTableSortTrigger' } },
            { title: '自定义轮询', routerLink: { name: 'ComponentTableSortOrders' } },
            { title: '按钮控制', routerLink: { name: 'ComponentTableSortAllowBtn' } },
            { title: '设置默认排序', routerLink: { name: 'ComponentTableSortDefaultSort' } },
            { title: '设置值的类型', routerLink: { name: 'ComponentTableSortSortType' } },
            { title: '自定义排序方法', routerLink: { name: 'ComponentTableSortSortMethod' } },
            { title: '服务端排序', routerLink: { name: 'ComponentTableSortRemote' } },
            { title: '手动操作排序', routerLink: { name: 'ComponentTableSortSetSort' } }
          ]
        },
        {
          title: '列宽调整',
          children: [
            { title: '拖拽模式', routerLink: { name: 'ComponentTableColResizableMode' } },
            { title: '分组列头', routerLink: { name: 'ComponentTableColResizableGroup' } },
            { title: '冻结列', routerLink: { name: 'ComponentTableColResizableFixed' } }
          ]
        },
        {
          title: '列拖拽',
          children: [
            { title: '拖拽调整列顺序', routerLink: { name: 'ComponentTableColDragSort' } },
            { title: '冻结列', routerLink: { name: 'ComponentTableColDragFixed' } },
            { title: '自定义图标', routerLink: { name: 'ComponentTableColDragIcon' } },
            { title: '拖拽辅助样式', routerLink: { name: 'ComponentTableColDragShowGuidesStatus' } },
            { title: '分组表头', routerLink: { name: 'ComponentTableColDragGroup' } },
            { title: '触发方式', routerLink: { name: 'ComponentTableColDragTrigger' } },
            { title: '拖拽事件', routerLink: { name: 'ComponentTableColDragEvents' } },
            { title: '禁用按钮', routerLink: { name: 'ComponentTableColDragDisabledMethod' } },
            { title: '按钮可视', routerLink: { name: 'ComponentTableColDragVisibleMethod' } },
            { title: '拖拽拦截', routerLink: { name: 'ComponentTableColDragDragMethod' } }
          ]
        },
        {
          title: '行高调整',
          children: [
            { title: '行高拖拽', routerLink: { name: 'ComponentTableRowResizableBase' } },
            { title: '冻结列', routerLink: { name: 'ComponentTableRowResizableFixed' } },
            { title: '树结构', routerLink: { name: 'ComponentTableRowResizableTree' } },
            { title: '拖拽按钮位置', routerLink: { name: 'ComponentTableRowResizableRowResize' } },
            { title: '手动操作行高', routerLink: { name: 'ComponentTableRowResizableManual' } }
          ]
        },
        {
          title: '行拖拽',
          children: [
            { title: '拖拽调整行顺序', routerLink: { name: 'ComponentTableRowDragSort' } },
            { title: '冻结列', routerLink: { name: 'ComponentTableRowDragFixed' } },
            { title: '自定义图标', routerLink: { name: 'ComponentTableRowDragIcon' } },
            { title: '拖拽辅助样式', routerLink: { name: 'ComponentTableRowDragShowGuidesStatus' } },
            { title: '触发方式', routerLink: { name: 'ComponentTableRowDragTrigger' } },
            {
              title: '树结构',
              children: [
                { title: '树拖拽', routerLink: { name: 'ComponentTableRowDragTreeBase' } },
                { title: '跨层级拖拽', routerLink: { name: 'ComponentTableRowDragTreeCossDrag' } },
                { title: '自己拖拽给自己子级', routerLink: { name: 'ComponentTableRowDragTreeSelfToChildDrag' } },
                { title: '拖拽成子级', routerLink: { name: 'ComponentTableRowDragTreeToChildDrag' } },
                { title: '拖拽辅助样式', routerLink: { name: 'ComponentTableRowDragTreeShowGuidesStatus' } },
                { title: '拖拽二次确认', routerLink: { name: 'ComponentTableRowDragTreeDragMethod' } },
                { title: '懒加载', routerLink: { name: 'ComponentTableRowDragTreeLazy' } }
              ]
            },
            { title: '拖拽事件', routerLink: { name: 'ComponentTableRowDragEvents' } },
            { title: '禁用按钮', routerLink: { name: 'ComponentTableRowDragDisabledMethod' } },
            { title: '按钮可视', routerLink: { name: 'ComponentTableRowDragVisibleMethod' } },
            { title: '拖拽拦截', routerLink: { name: 'ComponentTableRowDragDragMethod' } }
          ]
        },
        {
          title: '筛选',
          children: [
            { title: '数据筛选', routerLink: { name: 'ComponentTableFilterBase' } },
            { title: '服务端筛选', routerLink: { name: 'ComponentTableFilterRemote' } },
            { title: '树结构', routerLink: { name: 'ComponentTableFilterTree' } },
            { title: '手动弹出', routerLink: { name: 'ComponentTableFilterManual' } },
            { title: '手动筛选', routerLink: { name: 'ComponentTableFilterSetFilter' } },
            { title: '实现列头筛选', routerLink: { name: 'ComponentTableFilterHeaderFilter' } },
            { title: '输入筛选', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'filters_complex_input_table_complex_string_filter' }, query: { previewPath: '%2FfiltersComplexInput%2Ftable%2Fcomplex%2FstringFilter' } } },
            { title: '组合筛选', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'filters_combination_table_combination_string_filter' }, query: { previewPath: '%2FfiltersCombination%2Ftable%2Fcombination%2FstringFilter' } } }
          ]
        },
        {
          title: '行分组',
          children: [
            { title: '行分组', routerLink: { name: 'ComponentTableRowGroupBasic' } },
            { title: '按多字段分组', routerLink: { name: 'ComponentTableRowGroupGroupFields' } },
            { title: '显示分组统计', routerLink: { name: 'ComponentTableRowGroupTotal' } },
            { title: '手动操作', routerLink: { name: 'ComponentTableRowGroupHandleSet' } },
            { title: '分组汇总', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_aggregation_row_group_summary' }, query: { previewPath: '%2FextendPivotTable%2Ftable%2Faggregation%2FrowGroupSummary' } } },
            { title: '拖拽与数据汇总', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_custom_agg_drag_values' }, query: { previewPath: '%2FextendPivotTable%2Ftable%2Fcustom%2FaggDragValues' } } }
          ]
        },
        {
          title: '展开行',
          children: [
            { title: '基础使用', routerLink: { name: 'ComponentTableExpandBasic' } },
            { title: '展开容器内间距', routerLink: { name: 'ComponentTableExpandPadding' } },
            { title: '自定义图标', routerLink: { name: 'ComponentTableExpandIcon' } },
            { title: '展开容器高度', routerLink: { name: 'ComponentTableExpandHeight' } },
            { title: '使用冻结列', routerLink: { name: 'ComponentTableExpandFixed' } },
            { title: '触发方式', routerLink: { name: 'ComponentTableExpandTrigger' } },
            { title: '懒加载', routerLink: { name: 'ComponentTableExpandLazy' } },
            { title: '展开按钮的显示隐藏', routerLink: { name: 'ComponentTableExpandVisibleMethod' } },
            { title: '展开与关闭的控制', routerLink: { name: 'ComponentTableExpandToggleMethod' } },
            { title: '实现展开子表格', routerLink: { name: 'ComponentTableExpandChildTable' } }
          ]
        },
        {
          title: '右键菜单',
          children: [
            { title: '表头菜单', routerLink: { name: 'ComponentTableMenuHeader' } },
            { title: '单元格菜单', routerLink: { name: 'ComponentTableMenuBody' } },
            { title: '表尾菜单', routerLink: { name: 'ComponentTableMenuFooter' } },
            { title: '自定义前缀', routerLink: { name: 'ComponentTableMenuPrefixConfig' } },
            { title: '自定义后缀', routerLink: { name: 'ComponentTableMenuSuffixConfig' } },
            { title: '完整右键菜单', routerLink: { name: 'ComponentTableMenuFull' } },
            { title: '菜单权限控制', routerLink: { name: 'ComponentTableMenuPrivilege' } },
            { title: '便捷配置 Code 插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-menu/table/full` }
          ]
        },
        {
          title: '查询表单',
          children: [
            { title: '集成表单', routerLink: { name: 'ComponentTableFormFormData' } },
            { title: '带折叠的查询表单', routerLink: { name: 'ComponentTableFormCollapse' } }
          ]
        },
        {
          title: '工具栏',
          children: [
            { title: '左侧按钮', routerLink: { name: 'ComponentTableToolbarButtons' } },
            { title: '右侧按钮', routerLink: { name: 'ComponentTableToolbarTools' } },
            { title: '个性化列功能', routerLink: { name: 'ComponentTableToolbarCustom' } },
            { title: '刷新功能', routerLink: { name: 'ComponentTableToolbarRefresh' } },
            { title: '打印功能', routerLink: { name: 'ComponentTableToolbarPrint' } },
            { title: '导入功能', routerLink: { name: 'ComponentTableToolbarImport' } },
            { title: '导出功能', routerLink: { name: 'ComponentTableToolbarExport' } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义左侧模板', routerLink: { name: 'ComponentTableToolbarTemplateButtons' } },
                { title: '自定义左侧前缀模板', routerLink: { name: 'ComponentTableToolbarTemplateButtonPrefix' } },
                { title: '自定义左侧后缀模板', routerLink: { name: 'ComponentTableToolbarTemplateButtonSuffix' } },
                { title: '自定义右侧模板', routerLink: { name: 'ComponentTableToolbarTemplateTools' } },
                { title: '自定义右侧前缀模板', routerLink: { name: 'ComponentTableToolbarTemplateToolPrefix' } },
                { title: '自定义右侧后缀模板', routerLink: { name: 'ComponentTableToolbarTemplateToolSuffix' } }
              ]
            }
          ]
        },
        {
          title: '个性化列',
          children: [
            { title: '关联工具栏', routerLink: { name: 'ComponentTableCustomToolbar' } },
            { title: '窗口模式', routerLink: { name: 'ComponentTableCustomModal' } },
            { title: '抽屉模式', routerLink: { name: 'ComponentTableCustomDrawer' } },
            { title: '默认隐藏列', routerLink: { name: 'ComponentTableCustomDefHide' } },
            { title: '禁用操作操作', routerLink: { name: 'ComponentTableCustomCheckMethod' } },
            { title: '显示/隐藏操作列', routerLink: { name: 'ComponentTableCustomVisibleMethod' } },
            { title: '允许调整列显示隐藏', routerLink: { name: 'ComponentTableCustomVisible' } },
            { title: '允许调整列冻结', routerLink: { name: 'ComponentTableCustomFixed' } },
            { title: '允许调整列宽', routerLink: { name: 'ComponentTableCustomResizable' } },
            { title: '允许拖拽列顺序', routerLink: { name: 'ComponentTableCustomSort' } },
            { title: '冻结列最大数量限制', routerLink: { name: 'ComponentTableCustomFixedMax' } },
            { title: '自定义触发按钮', routerLink: { name: 'ComponentTableCustomCustomBtn' } },
            { title: '自定义弹出位置', routerLink: { name: 'ComponentTableCustomPlacement' } },
            { title: '事件监听', routerLink: { name: 'ComponentTableCustomEvents' } },
            { title: '实时更新', routerLink: { name: 'ComponentTableCustomImmediate' } },
            { title: '本地保存列设置', routerLink: { name: 'ComponentTableCustomStorage' } },
            { title: '自定义服务端保存', routerLink: { name: 'ComponentTableCustomRemote' } },
            { title: '实现服务端保存与恢复', routerLink: { name: 'ComponentTableCustomRemoteFull' } },
            { title: '实现显示/隐藏列', routerLink: { name: 'ComponentTableCustomManual' } },
            { title: '实现折叠列', routerLink: { name: 'ComponentTableCustomCollapseColumn' } },
            { title: '拖拽与数据汇总', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_custom_agg_drag_values' }, query: { previewPath: '%2FextendPivotTable%2Ftable%2Fcustom%2FaggDragValues' } } }
          ]
        },
        {
          title: '数据分页',
          children: [
            { title: '实现前端分页', routerLink: { name: 'ComponentTablePagerMockPage' } },
            { title: '自定义布局', routerLink: { name: 'ComponentTablePagerLayouts' } },
            { title: '自定义序号', routerLink: { name: 'ComponentTablePagerStart' } }
          ]
        },
        {
          title: '树形',
          children: [
            { title: '基础使用', routerLink: { name: 'ComponentTableTreeBasic' } },
            { title: '平级结构', routerLink: { name: 'ComponentTableTreeLeveling' } },
            { title: '层级结构', routerLink: { name: 'ComponentTableTreeHierarchy' } },
            { title: '斑马线条纹', routerLink: { name: 'ComponentTableTreeStripe' } },
            { title: '序号模式', routerLink: { name: 'ComponentTableTreeSeqMode' } },
            { title: '自定义图标', routerLink: { name: 'ComponentTableTreeIcon' } },
            { title: '显示连接线', routerLink: { name: 'ComponentTableTreeLine' } },
            { title: '最大高度', routerLink: { name: 'ComponentTableTreeMaxHeight' } },
            { title: '手风琴效果', routerLink: { name: 'ComponentTableTreeAccordion' } },
            { title: '高亮行', routerLink: { name: 'ComponentTableTreeCurrentRow' } },
            { title: '高亮列', routerLink: { name: 'ComponentTableTreeCurrentColumn' } },
            { title: '单选框', routerLink: { name: 'ComponentTableTreeRadio' } },
            { title: '复选框', routerLink: { name: 'ComponentTableTreeCheckbox' } },
            { title: '树形排序', routerLink: { name: 'ComponentTableTreeSort' } },
            { title: '树形筛选', routerLink: { name: 'ComponentTableTreeFilter' } },
            { title: '冻结列', routerLink: { name: 'ComponentTableTreeFixed' } },
            { title: '右键菜单', routerLink: { name: 'ComponentTableTreeMenu' } },
            { title: '懒加载', routerLink: { name: 'ComponentTableTreeLazy' } },
            { title: '懒加载 - 可编辑', routerLink: { name: 'ComponentTableTreeLazyEdit' } },
            { title: '同时使用展开行', routerLink: { name: 'ComponentTableTreeExpand' } },
            { title: '同时使用展开行 - 懒加载', routerLink: { name: 'ComponentTableTreeExpandLazy' } },
            // { title: '实现数据分组', routerLink: { name: 'ComponentTableTreeGroup' } },
            { title: '单元格选取', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_tree' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaTree' } } }
          ]
        },
        {
          title: '单元格 - 渲染 - 配置式',
          children: [
            { title: 'VxeSwitch 开关', routerLink: { name: 'ComponentTableCellRenderVxeSwitch' } },
            { title: 'VxeRadioGroup 单选组', routerLink: { name: 'ComponentTableCellRenderVxeRadioGroup' } },
            { title: 'VxeCheckbox 复选框', routerLink: { name: 'ComponentTableCellRenderVxeCheckbox' } },
            { title: 'VxeCheckboxGroup 复选组', routerLink: { name: 'ComponentTableCellRenderVxeCheckboxGroup' } },
            { title: 'VxeButtonGroup 按钮组', routerLink: { name: 'ComponentTableCellRenderVxeButtonGroup' } },
            { title: 'VxeImage 图片', routerLink: { name: 'ComponentTableCellRenderVxeImage' } },
            { title: 'VxeImageGroup 图片组', routerLink: { name: 'ComponentTableCellRenderVxeImageGroup' } },
            { title: 'VxeTextEllipsis 文本溢出省略', routerLink: { name: 'ComponentTableCellRenderVxeTextEllipsis' } },
            { title: 'VxeRate 评分', routerLink: { name: 'ComponentTableCellRenderVxeRate' } },
            { title: 'VxeSlider 滑块', routerLink: { name: 'ComponentTableCellRenderVxeSlider' } },
            { title: 'VxeUpload 上传', routerLink: { name: 'ComponentTableCellRenderVxeUpload' } },
            { title: 'FormatNumberInput 格式化数值', routerLink: { name: 'ComponentTableCellRenderFormatNumberInput' } },
            { title: 'FormatSelect 格式化列表选项', routerLink: { name: 'ComponentTableCellRenderFormatOption' } },
            { title: 'FormatTreeSelect 格式化树选项', routerLink: { name: 'ComponentTableCellRenderFormatTree' } },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/table/cell/el-switch` }
          ]
        },
        {
          title: '单元格 - 渲染 - 插槽式',
          children: [
            { title: 'VxeTag 标签', routerLink: { name: 'ComponentTableCellTemplateVxeTag' } },
            { title: 'VxeSwitch 开关', routerLink: { name: 'ComponentTableCellTemplateVxeSwitch' } },
            { title: 'VxeRadioGroup 单选组', routerLink: { name: 'ComponentTableCellTemplateVxeRadioGroup' } },
            { title: 'VxeCheckbox 复选框', routerLink: { name: 'ComponentTableCellTemplateVxeCheckbox' } },
            { title: 'VxeCheckboxGroup 复选组', routerLink: { name: 'ComponentTableCellTemplateVxeCheckboxGroup' } },
            { title: 'VxeButton 按钮', routerLink: { name: 'ComponentTableCellTemplateVxeButton' } },
            { title: 'VxeImage 图片', routerLink: { name: 'ComponentTableCellTemplateVxeImage' } },
            { title: 'VxeImageGroup 图片组', routerLink: { name: 'ComponentTableCellTemplateVxeImageGroup' } },
            { title: 'VxeTextEllipsis 文本溢出省略', routerLink: { name: 'ComponentTableCellTemplateVxeTextEllipsis' } },
            { title: 'VxeInput 输入框', routerLink: { name: 'ComponentTableCellTemplateVxeInput' } },
            { title: 'VxeTextarea 文本域', routerLink: { name: 'ComponentTableCellTemplateVxeTextarea' } },
            { title: 'VxeRate 评分', routerLink: { name: 'ComponentTableCellTemplateVxeRate' } },
            { title: 'VxeSlider 滑块', routerLink: { name: 'ComponentTableCellTemplateVxeSlider' } },
            { title: 'VxeUpload 上传', routerLink: { name: 'ComponentTableCellTemplateVxeUpload' } },
            { title: 'VxeModal 弹窗', routerLink: { name: 'ComponentTableCellTemplateVxeModal' } },
            { title: 'VxeDrawer 抽屉', routerLink: { name: 'ComponentTableCellTemplateVxeDrawer' } },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/table/cell/el-switch` },
            { title: '实现全部单元格可编辑', routerLink: { name: 'ComponentTableCellTemplateAllEdit' } }
          ]
        },
        {
          title: '可编辑',
          children: [
            { title: '手动编辑', routerLink: { name: 'ComponentTableEditManual' } },
            { title: '单击编辑', routerLink: { name: 'ComponentTableEditClick' } },
            { title: '双击编辑', routerLink: { name: 'ComponentTableEditDblclick' } },
            { title: '编辑与聚焦', routerLink: { name: 'ComponentTableEditAutoFocus' } },
            { title: '关闭自动清除编辑状态', routerLink: { name: 'ComponentTableEditAutoClear' } },
            { title: '编辑状态', routerLink: { name: 'ComponentTableEditStatus' } },
            { title: '空值占位符', routerLink: { name: 'ComponentTableEditCellPlaceholder' } },
            // { title: '修改数据', routerLink: { name: 'ComponentTableEditUpdate' } },
            // { title: '插入数据', routerLink: { name: 'ComponentTableEditInsert' } },
            // { title: '删除数据', routerLink: { name: 'ComponentTableEditRemove' } },
            // { title: '标记为删除', routerLink: { name: 'ComponentTableEditPending' } },
            // { title: '还原数据', routerLink: { name: 'ComponentTableEditRevert' } },
            {
              title: '临时数据 - 内置增删改',
              children: [
                { title: '新增', routerLink: { name: 'ComponentTableEditHandleTempInsert' } },
                { title: '删除', routerLink: { name: 'ComponentTableEditHandleTempRemove' } },
                { title: '标记', routerLink: { name: 'ComponentTableEditHandleTempPending' } },
                { title: '修改', routerLink: { name: 'ComponentTableEditHandleTempUpdate' } },
                { title: '恢复', routerLink: { name: 'ComponentTableEditHandleTempRevert' } }
              ]
            },
            {
              title: '同步数据源 - 实现增删改',
              children: [
                { title: '新增', routerLink: { name: 'ComponentTableEditHandleOriginalInsert' } },
                { title: '删除', routerLink: { name: 'ComponentTableEditHandleOriginalRemove' } },
                { title: '修改', routerLink: { name: 'ComponentTableEditHandleOriginalUpdate' } }
              ]
            },
            { title: '禁用单元格编辑', routerLink: { name: 'ComponentTableEditCellDisable' } },
            { title: '禁用行编辑', routerLink: { name: 'ComponentTableEditRowDisable' } },
            { title: '单元格校验', routerLink: { name: 'ComponentTableEditCellValid' } },
            { title: '行校验', routerLink: { name: 'ComponentTableEditRowValid' } },
            { title: '树结构', routerLink: { name: 'ComponentTableEditTree' } },
            { title: '使用合并行与列', routerLink: { name: 'ComponentTableEditSpan' } },
            { title: '使用右键菜单', routerLink: { name: 'ComponentTableEditMenu' } },
            { title: '设置行高', routerLink: { name: 'ComponentTableEditRowHeight' } },
            { title: '负数自动标红', routerLink: { name: 'ComponentTableEditShowNegativeStatus' } },
            { title: '实现附件列表', routerLink: { name: 'ComponentTableEditFileList' } },
            { title: '实现弹窗编辑表单', routerLink: { name: 'ComponentTableEditModalForm' } },
            { title: '实现弹窗选择数据', routerLink: { name: 'ComponentTableEditModalSelect' } },
            { title: '实现抽屉编辑表单', routerLink: { name: 'ComponentTableEditDrawerForm' } },
            { title: '实现抽屉选择数据', routerLink: { name: 'ComponentTableEditDrawerSelect' } },
            { title: '实现唯一下拉选项', routerLink: { name: 'ComponentTableEditUniqueSelect' } },
            { title: '实现多行文本编辑', routerLink: { name: 'ComponentTableEditMultiLineText' } },
            { title: '实现联动禁用', routerLink: { name: 'ComponentTableEditLinkageDisabled' } },
            { title: '实现多列下拉联动', routerLink: { name: 'ComponentTableEditCascadingSelect' } },
            { title: '实现行字段的合计', routerLink: { name: 'ComponentTableEditRowImmediately' } },
            { title: '实现表尾实时合计', routerLink: { name: 'ComponentTableEditFooterImmediately' } },
            { title: '实现单元格实时保存', routerLink: { name: 'ComponentTableEditRealtimeSave' } },
            { title: '复制与粘贴', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_clip' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaClip' } } },
            { title: '渲染图表', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_echarts' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaBasicsEchart' } } }
          ]
        },
        {
          title: '可编辑 - 渲染 - 配置式',
          children: [
            { title: 'input 原生-输入框', routerLink: { name: 'ComponentTableEditRenderInput' } },
            { title: 'select 原生-下拉框', routerLink: { name: 'ComponentTableEditRenderSelect' } },
            { title: 'VxeInput 输入框', routerLink: { name: 'ComponentTableEditRenderVxeInput' } },
            { title: 'VxeNumberInput 数值输入', routerLink: { name: 'ComponentTableEditRenderVxeNumberInput' } },
            { title: 'VxeIconPicker 图标选择', routerLink: { name: 'ComponentTableEditRenderVxeIconPicker' } },
            { title: 'VxeColorPicker 颜色选择', routerLink: { name: 'ComponentTableEditRenderVxeColorPicker' } },
            { title: 'VxeDatePicker 日期选择', routerLink: { name: 'ComponentTableEditRenderVxeDatePicker' } },
            { title: 'VxeDateRangePicker 日期范围选择', routerLink: { name: 'ComponentTableEditRenderVxeDateRangePicker' } },
            { title: 'VxeSelect 下拉选择', routerLink: { name: 'ComponentTableEditRenderVxeSelect' } },
            { title: 'VxeTreeSelect 下拉树选择', routerLink: { name: 'ComponentTableEditRenderVxeTreeSelect' } },
            { title: 'VxeTableSelect 下拉表格选择', routerLink: { name: 'ComponentTableEditRenderVxeTableSelect' } },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/table/edit/el-input` },
            { title: '事件监听', routerLink: { name: 'ComponentTableEditRenderEvents' } }

          ]
        },
        {
          title: '可编辑 - 渲染 - 插槽式',
          children: [
            { title: 'VxeButton 按钮', routerLink: { name: 'ComponentTableEditTemplateVxeButton' } },
            { title: 'VxeInput 输入框', routerLink: { name: 'ComponentTableEditTemplateVxeInput' } },
            { title: 'VxeNumberInput 数值输入', routerLink: { name: 'ComponentTableEditTemplateVxeNumberInput' } },
            { title: 'VxeIconPicker 图标选择', routerLink: { name: 'ComponentTableEditTemplateVxeIconPicker' } },
            { title: 'VxeDatePicker 日期选择', routerLink: { name: 'ComponentTableEditTemplateVxeDatePicker' } },
            { title: 'VxeDateRangePicker 日期范围选择', routerLink: { name: 'ComponentTableEditTemplateVxeDateRangePicker' } },
            { title: 'VxeSelect 下拉选择', routerLink: { name: 'ComponentTableEditTemplateVxeSelect' } },
            { title: 'VxeTreeSelect 下拉树选择', routerLink: { name: 'ComponentTableEditTemplateVxeTreeSelect' } },
            { title: 'VxeTableSelect 下拉表格选择', routerLink: { name: 'ComponentTableEditTemplateVxeTableSelect' } },
            { title: 'VxePulldown 下拉容器', routerLink: { name: 'ComponentTableEditTemplateVxePulldown' } },
            { title: 'VxeModal 弹窗', routerLink: { name: 'ComponentTableEditTemplateVxeModal' } },
            { title: 'VxeDrawer 抽屉', routerLink: { name: 'ComponentTableEditTemplateVxeDrawer' } },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/table/edit/el-input` }
          ]
        },
        {
          title: '数据校验',
          children: [
            { title: '校验规则配置', routerLink: { name: 'ComponentTableValidateRules' } },
            { title: '字符串校验规则', routerLink: { name: 'ComponentTableValidateString' } },
            { title: '数值校验规则', routerLink: { name: 'ComponentTableValidateNumber' } },
            { title: '正则校验规则', routerLink: { name: 'ComponentTableValidateRegexp' } },
            { title: '数组校验规则', routerLink: { name: 'ComponentTableValidateArray' } },
            { title: '自定义校验规则', routerLink: { name: 'ComponentTableValidateCustom' } },
            { title: '校验模式', routerLink: { name: 'ComponentTableValidateMode' } },
            { title: '错误提示样式', routerLink: { name: 'ComponentTableValidateTheme' } },
            { title: '复制粘贴与数据校验', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_edit_valid' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaEditValid' } } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义编辑模板', routerLink: { name: 'ComponentTableValidateTemplateEdit' } },
                { title: '自定义错误提示模板', routerLink: { name: 'ComponentTableValidateTemplateValid' } }
              ]
            }
          ]
        },
        {
          title: '自定义插槽模板',
          children: [
            { title: '自定义单元格模板', routerLink: { name: 'ComponentTableTemplateDefault' } },
            { title: '自定义表头模板', routerLink: { name: 'ComponentTableTemplateHeader' } },
            { title: '自定义表尾模板', routerLink: { name: 'ComponentTableTemplateFooter' } },
            { title: '自定义复选框模板', routerLink: { name: 'ComponentTableTemplateCheckbox' } },
            { title: '自定义单选框模板', routerLink: { name: 'ComponentTableTemplateRadio' } },
            { title: '自定义展开行模板', routerLink: { name: 'ComponentTableTemplateContent' } },
            { title: '自定义筛选模板', routerLink: { name: 'ComponentTableTemplateFilter' } },
            { title: '自定义编辑模板', routerLink: { name: 'ComponentTableTemplateEdit' } }
          ]
        },
        {
          title: '按键导航',
          children: [
            { title: '单元格选中', routerLink: { name: 'ComponentTableKeyboardSelected' } },
            { title: '按键操作', routerLink: { name: 'ComponentTableKeyboardKeyboard' } },
            { title: '回车自动新增一行', routerLink: { name: 'ComponentTableKeyboardEnterAppend' } },
            { title: '可编辑按键操作', routerLink: { name: 'ComponentTableKeyboardEdit' } },
            { title: '设置为追加式编辑', routerLink: { name: 'ComponentTableKeyboardEditMethod' } },
            { title: '树结构按键操作', routerLink: { name: 'ComponentTableKeyboardTree' } },
            { title: '树结构可编辑', routerLink: { name: 'ComponentTableKeyboardTreeEdit' } },
            { title: '树结构-全键盘', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_tree' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaTree' } } },
            { title: '右键菜单-全键盘', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_menu' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaMenu' } } },
            { title: '单元格选择-全键盘', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_keypad' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaKeypad' } } }
          ]
        },
        {
          title: '导出数据',
          children: [
            { title: '导出数据', routerLink: { name: 'ComponentTableExportBase' } },
            { title: '导出 TXT 格式', routerLink: { name: 'ComponentTableExportTxt' } },
            { title: '导出 XML 格式', routerLink: { name: 'ComponentTableExportXml' } },
            { title: '导出 HTML 格式', routerLink: { name: 'ComponentTableExportHtml' } },
            { title: '导出 CSV 格式', routerLink: { name: 'ComponentTableExportCsv' } },
            { title: '导出 XLSX 格式', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-export-xlsx/table/export` },
            { title: '导出 PDF 格式', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-export-pdf/table/export` },
            { title: '格式化单元格内容', routerLink: { name: 'ComponentTableExportExportMethod' } },
            { title: '高级导出', routerLink: { name: 'ComponentTableExportAdvanced' } },
            { title: '指定默认列', routerLink: { name: 'ComponentTableExportColumns' } }
          ]
        },
        {
          title: '导入数据',
          children: [
            { title: '导入数据', routerLink: { name: 'ComponentTableImportBase' } },
            { title: '导入 XLSX 格式', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-export-xlsx/table/import` },
            { title: '高级导入', routerLink: { name: 'ComponentTableImportAdvanced' } }
          ]
        },
        {
          title: '打印表格',
          children: [
            { title: '打印表格', routerLink: { name: 'ComponentTablePrintBase' } },
            { title: '高级打印', routerLink: { name: 'ComponentTablePrintAdvanced' } },
            { title: '实现将表格切割为多页打印', routerLink: { name: 'ComponentTablePrintPage' } },
            { title: '实现打印多张表格', routerLink: { name: 'ComponentTablePrintMultilist' } },
            { title: '实现打印出货单', routerLink: { name: 'ComponentTablePrintOrder' } }
          ]
        },
        {
          title: '虚拟滚动（超大数据量表格）',
          children: [
            { title: '纵向虚拟滚动', routerLink: { name: 'ComponentTableScrollVertical' } },
            { title: '横向虚拟滚动', routerLink: { name: 'ComponentTableScrollHorizontal' } },
            { title: '纵向和横向', routerLink: { name: 'ComponentTableScrollHV' } },
            { title: '函数式加载数据', routerLink: { name: 'ComponentTableScrollLoadData' } },
            { title: '冻结列 + 复杂渲染', routerLink: { name: 'ComponentTableScrollFixed' } },
            // { title: '滚动模式 + 复杂渲染', routerLink: { name: 'ComponentTableScrollMode' } },
            { title: '设置行高', routerLink: { name: 'ComponentTableScrollRowHeight' } },
            { title: '自适应行高', routerLink: { name: 'ComponentTableScrollAutoRowHeight' } },
            { title: '自适应行高 + 纵向和横向', routerLink: { name: 'ComponentTableScrollAutoRowVH' } },
            { title: '自适应行高 + 复杂渲染', routerLink: { name: 'ComponentTableScrollAutoRowFixed' } },
            { title: '使用分组表头', routerLink: { name: 'ComponentTableScrollGroup' } },
            { title: '按键导航', routerLink: { name: 'ComponentTableScrollKeyboard' } },
            { title: '单元格合并', routerLink: { name: 'ComponentTableScrollMerge' } },
            { title: '树形 + 纵向', routerLink: { name: 'ComponentTableScrollTree' } },
            { title: '可编辑 + 横向', routerLink: { name: 'ComponentTableScrollEdit' } },
            { title: '可编辑 + 纵向和横向', routerLink: { name: 'ComponentTableScrollHVEdit' } }
          ]
        },
        {
          title: '表格搜索',
          children: [
            { title: '实现表格搜索', routerLink: { name: 'ComponentTableSearchList' } },
            { title: '实现树形表格搜索', routerLink: { name: 'ComponentTableSearchTree' } },
            { title: '查找与替换', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_fnr' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaFNR' } } }
          ]
        },
        {
          title: '事件监听',
          children: [
            { title: '点击/双击事件', routerLink: { name: 'ComponentTableEventsClick' } },
            { title: '滚动事件', routerLink: { name: 'ComponentTableEventsScroll' } }
          ]
        },
        {
          title: '可视化图表',
          children: [
            { title: '单元格图表', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_echarts' }, query: { previewPath: '%2FextendCellArea%2Ftable%2FareaBasicsEchart' } } }
          ]
        },
        {
          title: '功能示例',
          children: [
            { title: '在页签中使用', routerLink: { name: 'ComponentTableOtherTabs' } },
            { title: '实现多行文本溢出省略', routerLink: { name: 'ComponentTableOtherLineEllipsis' } },
            { title: '实现记账凭证', routerLink: { name: 'ComponentTableOtherBookkeepingVoucher' } },
            { title: '实现左边树和右边表格', routerLink: { name: 'ComponentTableOtherLeftRight' } }
          ]
        }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableGridTitle',
      children: [
        { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'grid' } } },
        {
          title: '基础功能',
          children: [
            { title: '基础', routerLink: { name: 'ComponentGridBaseBasic' } },
            { title: '尺寸大小', routerLink: { name: 'ComponentGridBaseSize' } },
            { title: '数据类型', routerLink: { name: 'ComponentGridBaseData' } },
            { title: '表尾数据', routerLink: { name: 'ComponentGridBaseFooter' } },
            { title: '空数据提示', routerLink: { name: 'ComponentGridBaseEmpty' } },
            { title: '边框', routerLink: { name: 'ComponentGridBaseBorder' } },
            { title: '圆角', routerLink: { name: 'ComponentGridBaseRound' } },
            // { title: '边距', routerLink: { name: 'ComponentGridBasePadding' } },
            { title: '对齐方式', routerLink: { name: 'ComponentGridBaseAlign' } },
            { title: '列可视', routerLink: { name: 'ComponentGridBaseVisible' } },
            { title: '设置列宽', routerLink: { name: 'ComponentGridBaseWidth' }, keywords: '宽度,列宽' },
            { title: '自适应列宽', routerLink: { name: 'ComponentGridBaseAutoWidth' }, keywords: '宽度,根据内容,自适应列宽,width,auto' },
            { title: '自动换行', routerLink: { name: 'ComponentGridBaseAutoBreak' } },
            { title: '溢出隐藏', routerLink: { name: 'ComponentGridBaseOverflow' } },
            { title: '文本提示', routerLink: { name: 'ComponentGridBaseTooltip' } },
            // { title: '滚动条样式', routerLink: { name: 'ComponentGridBaseScrollStyle' } },
            { title: '斑马线样式', routerLink: { name: 'ComponentGridBaseStripe' } },
            { title: '单元格样式', routerLink: { name: 'ComponentGridBaseStyle' } },
            { title: '动态样式', routerLink: { name: 'ComponentGridBaseDynamicStyle' } },
            { title: '隐藏表头', routerLink: { name: 'ComponentGridBaseHeader' } },
            { title: '高亮列', routerLink: { name: 'ComponentGridBaseCurrentColumn' } },
            { title: '高亮行', routerLink: { name: 'ComponentGridBaseCurrentRow' } },
            { title: '拖拽调整列宽', routerLink: { name: 'ComponentGridBaseHeaderResizableWidth' } },
            { title: '拖拽调整行高', routerLink: { name: 'ComponentGridBaseHeaderResizableHeight' } },
            { title: '表格最小高度', routerLink: { name: 'ComponentGridBaseHeaderMinHeight' } },
            { title: '表格高度', routerLink: { name: 'ComponentGridBaseHeight' } },
            { title: '表格最大高度', routerLink: { name: 'ComponentGridBaseMaxHeight' } },
            { title: '表格响应式高度', routerLink: { name: 'ComponentGridBaseAutoHeight' } },
            { title: '设置列高', routerLink: { name: 'ComponentGridBaseColumnHeight' } },
            { title: '设置行高', routerLink: { name: 'ComponentGridBaseRowHeight' } },
            { title: '冻结列', routerLink: { name: 'ComponentGridBaseFixed' } },
            { title: '冻结表头和列', routerLink: { name: 'ComponentGridBaseFixedFull' } },
            { title: '分组表头', routerLink: { name: 'ComponentGridBaseGroup' } },
            { title: '排序', routerLink: { name: 'ComponentGridBaseSort' } },
            { title: '筛选', routerLink: { name: 'ComponentGridBaseFilter' } },
            { title: '加载中', routerLink: { name: 'ComponentGridBaseLoading' } },
            { title: '格式化内容', routerLink: { name: 'ComponentGridBaseFormat' } },
            { title: '序号', routerLink: { name: 'ComponentGridBaseSeq' } },
            { title: '单选框', routerLink: { name: 'ComponentGridBaseRadio' } },
            { title: '复选框', routerLink: { name: 'ComponentGridBaseSelection' } },
            { title: '标题前缀图标', routerLink: { name: 'ComponentGridBaseTitlePrefix' }, keywords: 'title-prefix' },
            { title: '标题后缀图标', routerLink: { name: 'ComponentGridBaseTitleSuffix' }, keywords: 'title-suffix' },
            { title: 'HTML 类型', routerLink: { name: 'ComponentGridBaseHtml' } },
            { title: '列配置', routerLink: { name: 'ComponentGridBaseColumns' } },
            { title: '完整案例', routerLink: { name: 'ComponentGridBaseFull' } }
          ]
        },
        {
          title: '单元格配置',
          children: [
            { title: '宽度', routerLink: { name: 'ComponentGridCellWidth' } },
            { title: '边距', routerLink: { name: 'ComponentGridCellPadding' } },
            { title: '高度', routerLink: { name: 'ComponentGridCellHeight' } },
            { title: '垂直对齐', routerLink: { name: 'ComponentGridCellVerticalAlign' } }
          ]
        },
        {
          title: '单元格合并',
          children: [
            { title: '将多行进行合并', routerLink: { name: 'ComponentGridMergeRow' } },
            { title: '将多列进行合并', routerLink: { name: 'ComponentGridMergeColumn' } },
            { title: '合并行与列', routerLink: { name: 'ComponentGridMergeAll' } },
            { title: '自定义合并行与列', routerLink: { name: 'ComponentGridMergeSpanMethod' } },
            { title: '表尾合并', routerLink: { name: 'ComponentGridMergeFooter' } },
            { title: '实现横向合并树', routerLink: { name: 'ComponentGridMergeHorizontal' } },
            { title: '快捷键合并', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_merge' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaMerge' } } }
          ]
        },
        {
          title: '表尾数据',
          children: [
            { title: '是否启用表尾', routerLink: { name: 'ComponentGridFooterShowFooter' } },
            { title: '标准结构', routerLink: { name: 'ComponentGridFooterFooterData' } },
            { title: '自定义数据方法', routerLink: { name: 'ComponentGridFooterFooterMethod' } },
            { title: '格式化表尾内容', routerLink: { name: 'ComponentGridFooterFooterFormat' } },
            { title: '自定义插槽模板', routerLink: { name: 'ComponentGridFooterTemplate' } }
          ]
        },
        {
          title: '单选框',
          children: [
            { title: '高亮选择行', routerLink: { name: 'ComponentGridRadioHighlight' } },
            { title: '禁用', routerLink: { name: 'ComponentGridRadioCheckMethod' } },
            { title: '显示隐藏', routerLink: { name: 'ComponentGridRadioVisibleMethod' } },
            { title: '触发方式', routerLink: { name: 'ComponentGridRadioTrigger' } },
            { title: '个性化列头按钮', routerLink: { name: 'ComponentGridRadioHeaderBtn' } },
            { title: '自定义模板', routerLink: { name: 'ComponentGridRadioTemplate' } }
          ]
        },
        {
          title: '复选框',
          children: [
            { title: '高亮选择行', routerLink: { name: 'ComponentGridCheckboxHighlight' } },
            { title: '绑定字段', routerLink: { name: 'ComponentGridCheckboxField' } },
            { title: '禁用', routerLink: { name: 'ComponentGridCheckboxCheckMethod' } },
            { title: '显示隐藏', routerLink: { name: 'ComponentGridCheckboxVisibleMethod' } },
            { title: '触发方式', routerLink: { name: 'ComponentGridCheckboxTrigger' } },
            { title: '分页保留选中状态', routerLink: { name: 'ComponentGridCheckboxReserve' } },
            { title: '分页显示保留选中状态', routerLink: { name: 'ComponentGridCheckboxShowReserveStatus' } },
            { title: '按键批量范围选择', routerLink: { name: 'ComponentGridCheckboxBatch' } },
            { title: '鼠标滑动范围选择', routerLink: { name: 'ComponentGridCheckboxRange' } },
            { title: '单元格选择-复选框', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_checkbox' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaCheckbox' } } },
            { title: '自定义模板', routerLink: { name: 'ComponentGridCheckboxTemplate' } }
          ]
        },
        {
          title: '排序',
          children: [
            { title: '数据排序', routerLink: { name: 'ComponentGridSortBase' } },
            { title: '多字段排序', routerLink: { name: 'ComponentGridSortMultiple' } },
            { title: '树结构排序', routerLink: { name: 'ComponentGridSortTree' } },
            { title: '服务端排序', routerLink: { name: 'ComponentGridSortRemote' } },
            { title: '手动排序', routerLink: { name: 'ComponentGridSortSetSort' } },
            { title: '排序图标', routerLink: { name: 'ComponentGridSortIconVisibleMethod' } }
          ]
        },
        {
          title: '高亮列',
          children: [
            { title: '当前列', routerLink: { name: 'ComponentGridCurrentColumnBase' } },
            { title: '拦截选中', routerLink: { name: 'ComponentGridCurrentColumnBeforeSelectMethod' } },
            { title: '手动触发', routerLink: { name: 'ComponentGridCurrentColumnTrigger' } }
          ]
        },
        {
          title: '列宽调整',
          children: [
            { title: '拖拽模式', routerLink: { name: 'ComponentGridColResizableMode' } },
            { title: '分组列头', routerLink: { name: 'ComponentGridColResizableGroup' } },
            { title: '冻结列', routerLink: { name: 'ComponentGridColResizableFixed' } },
            { title: '双击自适应列宽', routerLink: { name: 'ComponentGridColResizableDblclickAutoWidth' } },
            { title: '所有单元格可拖拽', routerLink: { name: 'ComponentGridColResizableAllColumnDrag' } },
            { title: '限制拖拽最小列宽', routerLink: { name: 'ComponentGridColResizableMinWidth' } },
            { title: '手动操作列宽', routerLink: { name: 'ComponentGridColResizableManual' } }
          ]
        },
        {
          title: '列拖拽',
          children: [
            { title: '拖拽调整列顺序', routerLink: { name: 'ComponentGridColDragSort' } },
            { title: '冻结列', routerLink: { name: 'ComponentGridColDragFixed' } },
            { title: '自定义图标', routerLink: { name: 'ComponentGridColDragIcon' } },
            { title: '拖拽辅助样式', routerLink: { name: 'ComponentGridColDragShowGuidesStatus' } },
            {
              title: '分组表头',
              children: [
                { title: '分组拖拽', routerLink: { name: 'ComponentGridColDragGroup' } },
                { title: '同层级拖拽', routerLink: { name: 'ComponentGridColDragPeerDrag' } },
                { title: '跨层级拖拽', routerLink: { name: 'ComponentGridColDragCrossDrag' } },
                { title: '自己拖拽给自己子级', routerLink: { name: 'ComponentGridColDragSelfToChildDrag' } },
                { title: '拖拽成子级', routerLink: { name: 'ComponentGridColDragToChildDrag' } }
              ]
            },
            { title: '触发方式', routerLink: { name: 'ComponentGridColDragTrigger' } },
            { title: '拖拽事件', routerLink: { name: 'ComponentGridColDragEvents' } },
            { title: '自定义提示', routerLink: { name: 'ComponentGridColDragTooltipMethod' } },
            { title: '禁用按钮', routerLink: { name: 'ComponentGridColDragDisabledMethod' } },
            { title: '按钮可视', routerLink: { name: 'ComponentGridColDragVisibleMethod' } },
            { title: '拖拽拦截', routerLink: { name: 'ComponentGridColDragDragMethod' } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义提示模板', routerLink: { name: 'ComponentGridColDragTemplateTip' } }
              ]
            },
            { title: '手动移动', routerLink: { name: 'ComponentGridColDragManual' } },
            { title: '同时行与列拖拽', routerLink: { name: 'ComponentGridColDragRowCol' } }
          ]
        },
        {
          title: '高亮行',
          children: [
            { title: '当前行', routerLink: { name: 'ComponentGridCurrentRowBase' } },
            { title: '拦截选中', routerLink: { name: 'ComponentGridCurrentRowBeforeSelectMethod' } },
            { title: '手动触发', routerLink: { name: 'ComponentGridCurrentRowTrigger' } }
          ]
        },
        {
          title: '行高调整',
          children: [
            { title: '行高拖拽', routerLink: { name: 'ComponentGridRowResizableBase' } },
            { title: '冻结列', routerLink: { name: 'ComponentGridRowResizableFixed' } },
            { title: '树结构', routerLink: { name: 'ComponentGridRowResizableTree' } },
            { title: '拖拽按钮位置', routerLink: { name: 'ComponentGridRowResizableRowResize' } },
            { title: '双击自适应行高', routerLink: { name: 'ComponentGridRowResizableDblclickAutoHeight' } },
            { title: '所有单元格可拖拽', routerLink: { name: 'ComponentGridRowResizableAllRowDrag' } },
            { title: '手动操作行高', routerLink: { name: 'ComponentGridRowResizableManual' } }
          ]
        },
        {
          title: '行拖拽',
          children: [
            { title: '拖拽调整行顺序', routerLink: { name: 'ComponentGridRowDragSort' } },
            { title: '冻结列', routerLink: { name: 'ComponentGridRowDragFixed' } },
            { title: '自定义图标', routerLink: { name: 'ComponentGridRowDragIcon' } },
            { title: '拖拽辅助样式', routerLink: { name: 'ComponentGridRowDragShowGuidesStatus' } },
            {
              title: '树结构',
              children: [
                { title: '树拖拽', routerLink: { name: 'ComponentGridRowDragTreeBase' } },
                { title: '同层级拖拽', routerLink: { name: 'ComponentGridRowDragTreePeerDrag' } },
                { title: '跨层级拖拽', routerLink: { name: 'ComponentGridRowDragTreeCossDrag' } },
                { title: '自己拖拽给自己子级', routerLink: { name: 'ComponentGridRowDragTreeSelfToChildDrag' } },
                { title: '拖拽成子级', routerLink: { name: 'ComponentGridRowDragTreeToChildDrag' } },
                { title: '拖拽辅助样式', routerLink: { name: 'ComponentGridRowDragTreeShowGuidesStatus' } },
                { title: '拖拽二次确认', routerLink: { name: 'ComponentGridRowDragTreeDragMethod' } },
                { title: '懒加载', routerLink: { name: 'ComponentGridRowDragTreeLazy' } },
                { title: '手动移动', routerLink: { name: 'ComponentGridRowDragTreeManual' } }
              ]
            },
            { title: '触发方式', routerLink: { name: 'ComponentGridRowDragTrigger' } },
            { title: '拖拽事件', routerLink: { name: 'ComponentGridRowDragEvents' } },
            { title: '自定义提示', routerLink: { name: 'ComponentGridRowDragTooltipMethod' } },
            { title: '禁用按钮', routerLink: { name: 'ComponentGridRowDragDisabledMethod' } },
            { title: '按钮可视', routerLink: { name: 'ComponentGridRowDragVisibleMethod' } },
            { title: '拖拽拦截', routerLink: { name: 'ComponentGridRowDragDragMethod' } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义提示模板', routerLink: { name: 'ComponentGridRowDragTemplateTip' } }
              ]
            },
            { title: '手动移动', routerLink: { name: 'ComponentGridRowDragManual' } }
          ]
        },
        {
          title: '行分组',
          children: [
            { title: '行分组', routerLink: { name: 'ComponentGridRowGroupBasic' } },
            { title: '按多字段分组', routerLink: { name: 'ComponentGridRowGroupGroupFields' } },
            {
              title: '单选框',
              children: [
                { title: '单选框', routerLink: { name: 'ComponentGridRowGroupRadioBse' } },
                { title: '限制选中', routerLink: { name: 'ComponentGridRowGroupRadioChecked' } }
              ]
            },
            {
              title: '复选框',
              children: [
                { title: '复选框', routerLink: { name: 'ComponentGridRowGroupCheckboxBase' } },
                { title: '分组不关联', routerLink: { name: 'ComponentGridRowGroupCheckboxCheckStrictly' } },
                { title: '分组不关联与全选', routerLink: { name: 'ComponentGridRowGroupCheckboxStrictlyHeader' } },
                { title: '限制选中', routerLink: { name: 'ComponentGridRowGroupCheckboxChecked' } }
              ]
            },
            { title: '手风琴效果', routerLink: { name: 'ComponentGridRowGroupAccordion' } },
            { title: '冻结列', routerLink: { name: 'ComponentGridRowGroupFixed' } },
            { title: '分组排序', routerLink: { name: 'ComponentGridRowGroupSort' } },
            { title: '同时使用展开行', routerLink: { name: 'ComponentGridRowGroupExpand' } },
            { title: '显示分组统计', routerLink: { name: 'ComponentGridRowGroupTotal' } },
            { title: '显示多列合计', routerLink: { name: 'ComponentGridRowGroupCount' } },
            { title: '自定义分组内容', routerLink: { name: 'ComponentGridRowGroupContentMethod' } },
            { title: '自定义合并', routerLink: { name: 'ComponentGridRowGroupSpanMethod' } },
            { title: '展示方式', routerLink: { name: 'ComponentGridRowGroupGroupMode' } },
            { title: '触发方式', routerLink: { name: 'ComponentGridRowGroupTrigger' } },
            { title: '手动操作', routerLink: { name: 'ComponentGridRowGroupHandleSet' } },
            { title: '分组汇总', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_aggregation_row_group_summary' }, query: { previewPath: '%2FextendPivotTable%2Fgrid%2Faggregation%2FrowGroupSummary' } } },
            { title: '拖拽与数据汇总', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_custom_agg_drag_values' }, query: { previewPath: '%2FextendPivotTable%2Fgrid%2Fcustom%2FaggDragValues' } } }
          ]
        },
        {
          title: '展开行',
          children: [
            { title: '基础使用', routerLink: { name: 'ComponentGridExpandBasic' } },
            { title: '展开容器内间距', routerLink: { name: 'ComponentGridExpandPadding' } },
            { title: '展开容器高度', routerLink: { name: 'ComponentGridExpandHeight' } },
            { title: '使用冻结列', routerLink: { name: 'ComponentGridExpandFixed' } },
            { title: '实现展开子表格', routerLink: { name: 'ComponentGridExpandChildTable' } },
            { title: '展开模式', routerLink: { name: 'ComponentGridExpandMode' } },
            { title: '实现弹窗选择到子表格', routerLink: { name: 'ComponentGridExpandSelectModalTable' } }
          ]
        },
        {
          title: '筛选',
          children: [
            { title: '数据筛选', routerLink: { name: 'ComponentGridFilterBase' } },
            { title: '自定义图标', routerLink: { name: 'ComponentGridFilterIcon' } },
            { title: '服务端筛选', routerLink: { name: 'ComponentGridFilterRemote' } },
            { title: '树结构', routerLink: { name: 'ComponentGridFilterTree' } },
            { title: '手动弹出', routerLink: { name: 'ComponentGridFilterManual' } },
            { title: '手动筛选', routerLink: { name: 'ComponentGridFilterSetFilter' } },
            { title: '实现列头筛选', routerLink: { name: 'ComponentGridFilterHeaderFilter' } },
            { title: '筛选图表', routerLink: { name: 'ComponentGridFilterIconVisibleMethod' } },
            { title: '输入筛选', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'filters_complex_input_table_complex_string_filter' }, query: { previewPath: '%2FfiltersComplexInput%2Fgrid%2Fcomplex%2FstringFilter' } } },
            { title: '组合筛选', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'filters_combination_table_combination_string_filter' }, query: { previewPath: '%2FfiltersCombination%2Fgrid%2Fcombination%2FstringFilter' } } }
          ]
        },
        {
          title: '筛选 - 渲染 - 配置式',
          children: [
            { title: 'VxeInput', routerLink: { name: 'ComponentGridFilterRenderVxeInput' } },
            { title: 'VxeNumberInput', routerLink: { name: 'ComponentGridFilterRenderVxeNumberInput' } },
            { title: 'VxeSelect', routerLink: { name: 'ComponentGridFilterRenderVxeSelect' } },
            { title: 'VxeDatePicker', routerLink: { name: 'ComponentGridFilterRenderVxeDatePicker' } },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/grid/filter/el-input` }
          ]
        },
        {
          title: '筛选 - 渲染 - 插槽式',
          children: [
            { title: 'VxeInput', routerLink: { name: 'ComponentGridFilterTemplateVxeInput' } },
            { title: 'VxeSelect', routerLink: { name: 'ComponentGridFilterTemplateVxeSelect' } },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/grid/filter/el-input` }
          ]
        },
        {
          title: '右键菜单',
          children: [
            { title: '自定义前缀', routerLink: { name: 'ComponentGridMenuPrefixConfig' } },
            { title: '自定义后缀', routerLink: { name: 'ComponentGridMenuSuffixConfig' } },
            { title: '完整右键菜单', routerLink: { name: 'ComponentGridMenuFull' } },
            { title: '菜单权限控制', routerLink: { name: 'ComponentGridMenuPrivilege' } },
            { title: '便捷配置 Code 插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-menu/grid/full` }

          ]
        },
        {
          title: '查询表单',
          children: [
            { title: '查询表单', routerLink: { name: 'ComponentGridFormSearch' } },
            { title: '表单的默认值', routerLink: { name: 'ComponentGridFormFormData' } },
            { title: '带折叠的查询表单', routerLink: { name: 'ComponentGridFormCollapse' } },
            { title: '自定义项插槽模板', routerLink: { name: 'ComponentGridFormItemTemplate' } },
            { title: '自定义表单插槽模板', routerLink: { name: 'ComponentGridFormTemplate' } }
          ]
        },
        {
          title: '工具栏',
          children: [
            { title: '左侧按钮', routerLink: { name: 'ComponentGridToolbarButtons' } },
            { title: '右侧按钮', routerLink: { name: 'ComponentGridToolbarTools' } },
            { title: '个性化列功能', routerLink: { name: 'ComponentGridToolbarCustom' } },
            { title: '打印功能', routerLink: { name: 'ComponentGridToolbarPrint' } },
            { title: '最大化显示', routerLink: { name: 'ComponentGridToolbarZoom' } },
            { title: '导入数据', routerLink: { name: 'ComponentGridToolbarImport' } },
            { title: '导出数据', routerLink: { name: 'ComponentGridToolbarExport' } },
            { title: '刷新列表', routerLink: { name: 'ComponentGridToolbarRefresh' } },
            { title: '完整功能', routerLink: { name: 'ComponentGridToolbarFull' } },
            { title: '自定义图标', routerLink: { name: 'ComponentGridToolbarIcon' } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义左侧模板', routerLink: { name: 'ComponentGridToolbarTemplateButtons' } },
                { title: '自定义左侧前缀模板', routerLink: { name: 'ComponentGridToolbarTemplateButtonPrefix' } },
                { title: '自定义左侧后缀模板', routerLink: { name: 'ComponentGridToolbarTemplateButtonSuffix' } },
                { title: '自定义右侧模板', routerLink: { name: 'ComponentGridToolbarTemplateTools' } },
                { title: '自定义右侧前缀模板', routerLink: { name: 'ComponentGridToolbarTemplateToolPrefix' } },
                { title: '自定义右侧后缀模板', routerLink: { name: 'ComponentGridToolbarTemplateToolSuffix' } }
              ]
            }
          ]
        },
        {
          title: '个性化列',
          children: [
            { title: '使用工具栏', routerLink: { name: 'ComponentGridCustomToolbar' } },
            { title: '窗口模式', routerLink: { name: 'ComponentGridCustomModal' } },
            { title: '抽屉模式', routerLink: { name: 'ComponentGridCustomDrawer' } },
            { title: '默认隐藏列', routerLink: { name: 'ComponentGridCustomDefHide' } },
            { title: '禁用操作操作', routerLink: { name: 'ComponentGridCustomCheckMethod' } },
            { title: '显示/隐藏操作列', routerLink: { name: 'ComponentGridCustomVisibleMethod' } },
            { title: '列宽限制', routerLink: { name: 'ComponentGridCustomResizableWidth' } },
            // { title: '允许调整列显示隐藏', routerLink: { name: 'ComponentGridCustomVisible' } },
            // { title: '允许调整列冻结', routerLink: { name: 'ComponentGridCustomFixed' } },
            // { title: '允许调整列宽', routerLink: { name: 'ComponentGridCustomResizable' } },
            // { title: '允许拖拽列顺序', routerLink: { name: 'ComponentGridCustomSort' } },
            // { title: '自定义触发弹出设置', routerLink: { name: 'ComponentGridCustomTemplate' } },
            { title: '自定义触发按钮', routerLink: { name: 'ComponentGridCustomCustomBtn' } },
            { title: '自定义弹出位置', routerLink: { name: 'ComponentGridCustomPlacement' } },
            { title: '事件监听', routerLink: { name: 'ComponentGridCustomEvents' } },
            { title: '实时更新', routerLink: { name: 'ComponentGridCustomImmediate' } },
            { title: '本地保存列设置', routerLink: { name: 'ComponentGridCustomStorage' } },
            { title: '自定义服务端保存', routerLink: { name: 'ComponentGridCustomRemote' } },
            { title: '实现服务端保存与恢复', routerLink: { name: 'ComponentGridCustomRemoteFull' } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义顶部模板', routerLink: { name: 'ComponentGridCustomTemplateTop' } },
                { title: '自定义底部模板', routerLink: { name: 'ComponentGridCustomTemplateBottom' } },
                { title: '自定义头部模板', routerLink: { name: 'ComponentGridCustomTemplateHeader' } },
                { title: '自定义尾部模板', routerLink: { name: 'ComponentGridCustomTemplateFooter' } },
                { title: '自定义默认模板', routerLink: { name: 'ComponentGridCustomTemplateDefault' } }
              ]
            },
            { title: '拖拽与数据汇总', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_pivot_table_table_custom_agg_drag_values' }, query: { previewPath: '%2FextendPivotTable%2Fgrid%2Fcustom%2FaggDragValues' } } }
          ]
        },
        {
          title: '数据分页',
          children: [
            { title: '实现前端分页', routerLink: { name: 'ComponentGridPagerMockPage' } },
            { title: '自定义布局', routerLink: { name: 'ComponentGridPagerLayouts' } },
            { title: '自定义序号', routerLink: { name: 'ComponentGridPagerStart' } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义分页模板', routerLink: { name: 'ComponentGridPagerTemplatePager' } },
                { title: '自定义左侧模板', routerLink: { name: 'ComponentGridPagerTemplateLeft' } },
                { title: '自定义右侧模板', routerLink: { name: 'ComponentGridPagerTemplateRight' } },
                { title: '自定义功能模板', routerLink: { name: 'ComponentGridPagerTemplateFunc' } }
              ]
            }
          ]
        },
        {
          title: '功能布局',
          children: [
            { title: '调整分页位置', routerLink: { name: 'ComponentGridLayoutPager' } },
            { title: '调整工具栏位置', routerLink: { name: 'ComponentGridLayoutToolbar' } }
          ]
        },
        {
          title: '树形',
          children: [
            { title: '平级结构', routerLink: { name: 'ComponentGridTreeLeveling' } },
            { title: '层级结构', routerLink: { name: 'ComponentGridTreeHierarchy' } },
            { title: '斑马线条纹', routerLink: { name: 'ComponentGridTreeStripe' } },
            { title: '序号模式', routerLink: { name: 'ComponentGridTreeSeqMode' } },
            { title: '显示连接线', routerLink: { name: 'ComponentGridTreeLine' } },
            { title: '单选框', routerLink: { name: 'ComponentGridTreeRadio' } },
            {
              title: '复选框',
              children: [
                { title: '基础', routerLink: { name: 'ComponentGridTreeCheckboxBase' } },
                { title: '显示字段内容', routerLink: { name: 'ComponentGridTreeCheckboxLabelField' } },
                { title: '父子不关联', routerLink: { name: 'ComponentGridTreeCheckboxCheckStrictly' } },
                { title: '父子不关联与全选', routerLink: { name: 'ComponentGridTreeCheckboxStrictlyHeader' } }
              ]
            },
            { title: '冻结列', routerLink: { name: 'ComponentGridTreeFixed' } },
            { title: '排序', routerLink: { name: 'ComponentGridTreeSort' } },
            { title: '筛选', routerLink: { name: 'ComponentGridTreeFilter' } },
            { title: '默认展开节点', routerLink: { name: 'ComponentGridTreeExpandRowKeys' } },
            { title: '同时使用展开行', routerLink: { name: 'ComponentGridTreeExpandRow' } },
            // { title: '实现多字段分组', routerLink: { name: 'ComponentGridTreeGroupFields' } },
            { title: '自定义合并', routerLink: { name: 'ComponentGridTreeSpanMethod' } },
            { title: '懒加载', routerLink: { name: 'ComponentGridTreeLazy' } },
            { title: '单元格选取', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_tree' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaTree' } } }
          ]
        },
        {
          title: '单元格 - 渲染 - 配置式',
          children: [
            { title: 'VxeSwitch 开关', routerLink: { name: 'ComponentGridCellRenderVxeSwitch' } },
            { title: 'VxeRadioGroup 单选组', routerLink: { name: 'ComponentGridCellRenderVxeRadioGroup' } },
            { title: 'VxeCheckbox 复选框', routerLink: { name: 'ComponentGridCellRenderVxeCheckbox' } },
            { title: 'VxeCheckboxGroup 复选组', routerLink: { name: 'ComponentGridCellRenderVxeCheckboxGroup' } },
            { title: 'VxeButtonGroup 按钮组', routerLink: { name: 'ComponentGridCellRenderVxeButtonGroup' } },
            { title: 'VxeImage 图片', routerLink: { name: 'ComponentGridCellRenderVxeImage' } },
            { title: 'VxeImageGroup 图片组', routerLink: { name: 'ComponentGridCellRenderVxeImageGroup' } },
            { title: 'VxeTextEllipsis 多行文本溢出省略', routerLink: { name: 'ComponentGridCellRenderVxeTextEllipsis' } },
            { title: 'VxeRate 评分', routerLink: { name: 'ComponentGridCellRenderVxeRate' } },
            { title: 'VxeUpload 上传', routerLink: { name: 'ComponentGridCellRenderVxeUpload' } },
            { title: 'FormatNumberInput 格式化数值', routerLink: { name: 'ComponentGridCellRenderFormatNumberInput' } },
            { title: 'FormatSelect 格式化列表选项', routerLink: { name: 'ComponentGridCellRenderFormatOption' } },
            { title: 'FormatTreeSelect 格式化树选项', routerLink: { name: 'ComponentGridCellRenderFormatTree' } },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/grid/cell/el-switch` }
          ]
        },
        {
          title: '单元格 - 渲染 - 插槽式',
          children: [
            { title: 'VxeTag 标签', routerLink: { name: 'ComponentGridCellTemplateVxeTag' } },
            { title: 'VxeCheckbox 复选框', routerLink: { name: 'ComponentGridCellTemplateVxeCheckbox' } },
            { title: 'VxeCheckboxGroup 复选组', routerLink: { name: 'ComponentGridCellTemplateVxeCheckboxGroup' } },
            { title: 'VxeSwitch 开关', routerLink: { name: 'ComponentGridCellTemplateVxeSwitch' } },
            { title: 'VxeButtonGroup 按钮组', routerLink: { name: 'ComponentGridCellTemplateVxeButtonGroup' } },
            { title: 'VxeButton 按钮', routerLink: { name: 'ComponentGridCellTemplateVxeButton' } },
            { title: 'VxeImage 图片', routerLink: { name: 'ComponentGridCellTemplateVxeImage' } },
            { title: 'VxeInput 输入框', routerLink: { name: 'ComponentGridCellTemplateVxeInput' } },
            { title: 'VxeTextarea 文本域', routerLink: { name: 'ComponentGridCellTemplateVxeTextarea' } },
            { title: 'VxeUpload 上传', routerLink: { name: 'ComponentGridCellTemplateVxeUpload' } },
            { title: 'VxeModal 弹窗', routerLink: { name: 'ComponentGridCellTemplateVxeModal' } },
            { title: 'VxeDrawer 抽屉', routerLink: { name: 'ComponentGridCellTemplateVxeDrawer' } },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/grid/cell/el-switch` },
            { title: '实现全部单元格可编辑', routerLink: { name: 'ComponentGridCellTemplateAllEdit' } }
          ]
        },
        {
          title: '可编辑',
          children: [
            { title: '手动编辑', routerLink: { name: 'ComponentGridEditManual' } },
            { title: '单击编辑', routerLink: { name: 'ComponentGridEditClick' } },
            { title: '双击编辑', routerLink: { name: 'ComponentGridEditDblclick' } },
            { title: '编辑模式', routerLink: { name: 'ComponentGridEditMode' } },
            {
              title: '临时数据 - 内置增删改',
              children: [
                { title: '新增', routerLink: { name: 'ComponentGridEditHandleTempInsert' } },
                { title: '删除', routerLink: { name: 'ComponentGridEditHandleTempRemove' } },
                { title: '标记', routerLink: { name: 'ComponentGridEditHandleTempPending' } },
                { title: '修改', routerLink: { name: 'ComponentGridEditHandleTempUpdate' } },
                { title: '恢复', routerLink: { name: 'ComponentGridEditHandleTempRevert' } }
              ]
            },
            {
              title: '同步数据源 - 实现增删改',
              children: [
                { title: '新增', routerLink: { name: 'ComponentGridEditHandleOriginalInsert' } },
                { title: '删除', routerLink: { name: 'ComponentGridEditHandleOriginalRemove' } },
                { title: '修改', routerLink: { name: 'ComponentGridEditHandleOriginalUpdate' } }
              ]
            },
            { title: '行校验', routerLink: { name: 'ComponentGridEditRowValid' } },
            { title: '禁用行编辑', routerLink: { name: 'ComponentGridEditRowDisable' } },
            { title: '禁用单元格编辑', routerLink: { name: 'ComponentGridEditCellDisable' } },
            { title: '单元格校验', routerLink: { name: 'ComponentGridEditCellValid' } },
            { title: '负数自动标红', routerLink: { name: 'ComponentGridEditShowNegativeStatus' } },
            { title: '实现行字段的合计', routerLink: { name: 'ComponentGridEditRowImmediately' } },
            { title: '实现表尾实时合计', routerLink: { name: 'ComponentGridEditFooterImmediately' } },
            { title: '实现弹窗编辑表单', routerLink: { name: 'ComponentGridEditModalForm' } },
            { title: '实现弹窗选择数据', routerLink: { name: 'ComponentGridEditModalSelect' } },
            { title: '实现抽屉编辑表单', routerLink: { name: 'ComponentGridEditDrawerForm' } },
            { title: '实现抽屉选择数据', routerLink: { name: 'ComponentGridEditDrawerSelect' } },
            { title: '实现行保存功能', routerLink: { name: 'ComponentGridEditRowSave' } },
            { title: '复制与粘贴', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_clip' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaClip' } } },
            { title: '渲染图表', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_echarts' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaBasicsEchart' } } }
          ]
        },
        {
          title: '可编辑 - 渲染 - 配置式',
          children: [
            { title: 'input 原生-输入框', routerLink: { name: 'ComponentGridEditRenderInput' } },
            { title: 'select 原生-下拉框', routerLink: { name: 'ComponentGridEditRenderSelect' } },
            { title: 'VxeInput 输入框', routerLink: { name: 'ComponentGridEditRenderVxeInput' } },
            { title: 'VxeNumberInput 数值输入框', routerLink: { name: 'ComponentGridEditRenderVxeNumberInput' } },
            { title: 'VxeIconPicker 图标选择', routerLink: { name: 'ComponentGridEditRenderVxeIconPicker' } },
            { title: 'VxeColorPicker 颜色选择', routerLink: { name: 'ComponentGridEditRenderVxeColorPicker' } },
            { title: 'VxeDatePicker 日期选择', routerLink: { name: 'ComponentGridEditRenderVxeDatePicker' } },
            { title: 'VxeDateRangePicker 日期范围选择', routerLink: { name: 'ComponentGridEditRenderVxeDateRangePicker' } },
            { title: 'VxeSelect 下拉选择', routerLink: { name: 'ComponentGridEditRenderVxeSelect' } },
            { title: 'VxeTreeSelect 下拉树选择', routerLink: { name: 'ComponentGridEditRenderVxeTreeSelect' } },
            { title: 'VxeTableSelect 下拉表格选择', routerLink: { name: 'ComponentGridEditRenderVxeTableSelect' } },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/grid/edit/el-input` },
            { title: '事件监听', routerLink: { name: 'ComponentGridEditRenderEvents' } },
            { title: '阻止激活编辑', routerLink: { name: 'ComponentGridEditRenderBeforeEdit' } },
            { title: '禁用编辑', routerLink: { name: 'ComponentGridEditRenderDisableEdit' } },
            { title: '切换编辑与只读', routerLink: { name: 'ComponentGridEditRenderReadonly' } }
          ]
        },
        {
          title: '可编辑 - 渲染 - 插槽式',
          children: [
            { title: 'input 原生-输入框', routerLink: { name: 'ComponentGridEditTemplateInput' } },
            { title: 'select 原生-下拉框', routerLink: { name: 'ComponentGridEditTemplateSelect' } },
            { title: 'VxeButton 按钮', routerLink: { name: 'ComponentGridEditTemplateVxeButton' } },
            { title: 'VxeInput 输入框', routerLink: { name: 'ComponentGridEditTemplateVxeInput' } },
            { title: 'VxeNumberInput 数值输入框', routerLink: { name: 'ComponentGridEditTemplateVxeNumberInput' } },
            { title: 'VxeIconPicker 图标选择', routerLink: { name: 'ComponentGridEditTemplateVxeIconPicker' } },
            { title: 'VxeDatePicker 日期选择', routerLink: { name: 'ComponentGridEditTemplateVxeDatePicker' } },
            { title: 'VxeDateRangePicker 日期范围选择', routerLink: { name: 'ComponentGridEditTemplateVxeDateRangePicker' } },
            { title: 'VxeSelect 下拉框', routerLink: { name: 'ComponentGridEditTemplateVxeSelect' } },
            { title: 'VxeTreeSelect 下拉选择', routerLink: { name: 'ComponentGridEditTemplateVxeTreeSelect' } },
            { title: 'VxeTableSelect 下拉表格选择', routerLink: { name: 'ComponentGridEditTemplateVxeTableSelect' } },
            { title: 'VxePulldown 下拉容器', routerLink: { name: 'ComponentGridEditTemplateVxePulldown' } },
            { title: 'VxeModal 弹窗', routerLink: { name: 'ComponentGridEditTemplateVxeModal' } },
            { title: 'VxeDrawer 抽屉', routerLink: { name: 'ComponentGridEditTemplateVxeDrawer' } },
            { title: '阻止激活编辑', routerLink: { name: 'ComponentGridEditTemplateBeforeEdit' } },
            { title: '禁用编辑', routerLink: { name: 'ComponentGridEditTemplateDisableEdit' } },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/grid/edit/el-input` }
          ]
        },
        {
          title: '数据校验',
          children: [
            { title: '校验规则配置', routerLink: { name: 'ComponentGridValidateRules' } },
            { title: '字符串校验规则', routerLink: { name: 'ComponentGridValidateString' } },
            { title: '数值校验规则', routerLink: { name: 'ComponentGridValidateNumber' } },
            { title: '正则校验规则', routerLink: { name: 'ComponentGridValidateRegexp' } },
            { title: '数组校验规则', routerLink: { name: 'ComponentGridValidateArray' } },
            { title: '自定义校验规则', routerLink: { name: 'ComponentGridValidateCustom' } },
            { title: '校验模式', routerLink: { name: 'ComponentGridValidateMode' } },
            { title: '校验指定单元格', routerLink: { name: 'ComponentGridValidateValidateField' } },
            { title: '错误提示样式', routerLink: { name: 'ComponentGridValidateTheme' } },
            { title: '复制粘贴与数据校验', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_edit_valid' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaEditValid' } } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义编辑模板', routerLink: { name: 'ComponentGridValidateTemplateEdit' } },
                { title: '自定义错误提示模板', routerLink: { name: 'ComponentGridValidateTemplateValid' } }
              ]
            }
          ]
        },
        {
          title: '自定义插槽模板',
          children: [
            { title: '自定义布局模板', routerLink: { name: 'ComponentGridTemplateLayout' } },
            { title: '自定义单元格模板', routerLink: { name: 'ComponentGridTemplateDefault' } },
            { title: '自定义表头模板', routerLink: { name: 'ComponentGridTemplateHeader' } },
            { title: '自定义表尾模板', routerLink: { name: 'ComponentGridTemplateFooter' } },
            { title: '自定义复选框模板', routerLink: { name: 'ComponentGridTemplateCheckbox' } },
            { title: '自定义单选框模板', routerLink: { name: 'ComponentGridTemplateRadio' } },
            { title: '自定义展开行模板', routerLink: { name: 'ComponentGridTemplateContent' } },
            { title: '自定义筛选模板', routerLink: { name: 'ComponentGridTemplateFilter' } },
            { title: '自定义编辑模板', routerLink: { name: 'ComponentGridTemplateEdit' } },
            { title: '自定义单元格校验模板', routerLink: { name: 'ComponentGridTemplateValid' } }
          ]
        },
        {
          title: '按键导航',
          children: [
            { title: '单元格选中', routerLink: { name: 'ComponentGridKeyboardSelected' } },
            { title: '按键操作', routerLink: { name: 'ComponentGridKeyboardKeyboard' } },
            { title: '高亮行', routerLink: { name: 'ComponentGridKeyboardCurrRow' } },
            { title: '高亮列', routerLink: { name: 'ComponentGridKeyboardCurrColumn' } },
            { title: '高亮行与列', routerLink: { name: 'ComponentGridKeyboardCurrRowCol' } },
            { title: '回车自动新增一行', routerLink: { name: 'ComponentGridKeyboardEnterAppend' } },
            { title: '可编辑按键操作', routerLink: { name: 'ComponentGridKeyboardEdit' } },
            { title: '设置为追加式编辑', routerLink: { name: 'ComponentGridKeyboardEditMethod' } },
            { title: '树结构按键操作', routerLink: { name: 'ComponentGridKeyboardTree' } },
            { title: '树结构可编辑', routerLink: { name: 'ComponentGridKeyboardTreeEdit' } },
            { title: '树结构-全键盘', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_tree' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaTree' } } },
            { title: '右键菜单-全键盘', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_menu' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaMenu' } } },
            { title: '单元格选择-全键盘', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_keypad' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaKeypad' } } }
          ]
        },
        {
          title: '导出数据',
          children: [
            { title: '导出数据', routerLink: { name: 'ComponentGridExportBase' } },
            { title: '导出 TXT 格式', routerLink: { name: 'ComponentGridExportTxt' } },
            { title: '导出 XML 格式', routerLink: { name: 'ComponentGridExportXml' } },
            { title: '导出 HTML 格式', routerLink: { name: 'ComponentGridExportHtml' } },
            { title: '导出 CSV 格式', routerLink: { name: 'ComponentGridExportCsv' } },
            { title: '导出 XLSX 格式', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-export-xlsx/grid/export` },
            { title: '导出 PDF 格式', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-export-pdf/grid/export` },
            { title: '自定义数据', routerLink: { name: 'ComponentGridExportData' } },
            { title: '格式化导出内容', routerLink: { name: 'ComponentGridExportExportMethod' } },
            { title: '高级导出', routerLink: { name: 'ComponentGridExportAdvanced' } },
            { title: '排除列', routerLink: { name: 'ComponentGridExportExcludeFields' } },
            { title: '指定列', routerLink: { name: 'ComponentGridExportIncludeFields' } },
            { title: '自定义列', routerLink: { name: 'ComponentGridExportColumns' } },
            { title: '自定义导出类型', routerLink: { name: 'ComponentGridExportTypes' } },
            { title: '服务端导出', routerLink: { name: 'ComponentGridExportRemote' } },
            { title: '自定义导出模式', routerLink: { name: 'ComponentGridExportModes' } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义顶部模板', routerLink: { name: 'ComponentGridExportTemplateTop' } },
                { title: '自定义底部模板', routerLink: { name: 'ComponentGridExportTemplateBottom' } },
                { title: '自定义参数设置模板', routerLink: { name: 'ComponentGridExportTemplateParameter' } },
                { title: '自定义尾部模板', routerLink: { name: 'ComponentGridExportTemplateFooter' } },
                { title: '自定义默认模板', routerLink: { name: 'ComponentGridExportTemplateDefault' } }
              ]
            }
          ]
        },
        {
          title: '导入数据',
          children: [
            { title: '导入数据', routerLink: { name: 'ComponentGridImportBase' } },
            { title: '导入 TXT 格式', routerLink: { name: 'ComponentGridImportTxt' } },
            { title: '导入 XML 格式', routerLink: { name: 'ComponentGridImportXml' } },
            { title: '导入 HTML 格式', routerLink: { name: 'ComponentGridImportHtml' } },
            { title: '导入 CSV 格式', routerLink: { name: 'ComponentGridImportCsv' } },
            { title: '导入 XLSX 格式', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-export-xlsx/grid/import` },
            { title: '高级导入', routerLink: { name: 'ComponentGridImportAdvanced' } },
            { title: '服务端导入', routerLink: { name: 'ComponentGridImportRemote' } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义顶部模板', routerLink: { name: 'ComponentGridImportTemplateTop' } },
                { title: '自定义底部模板', routerLink: { name: 'ComponentGridImportTemplateBottom' } },
                { title: '自定义尾部模板', routerLink: { name: 'ComponentGridImportTemplateFooter' } },
                { title: '自定义默认模板', routerLink: { name: 'ComponentGridImportTemplateDefault' } }
              ]
            }
          ]
        },
        {
          title: '打印表格',
          children: [
            { title: '打印表格', routerLink: { name: 'ComponentGridPrintBase' } },
            { title: '自定义顶部和底部', routerLink: { name: 'ComponentGridPrintBeforeMethod' } },
            { title: '高级打印', routerLink: { name: 'ComponentGridPrintAdvanced' } },
            { title: '指定列', routerLink: { name: 'ComponentGridPrintColumns' } },
            { title: '自定义页眉/标题', routerLink: { name: 'ComponentGridPrintHeader' } },
            { title: '自定义页尾/页码', routerLink: { name: 'ComponentGridPrintFooter' } },
            { title: '设置边距', routerLink: { name: 'ComponentGridPrintMargin' } },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义顶部模板', routerLink: { name: 'ComponentGridPrintTemplateTop' } },
                { title: '自定义底部模板', routerLink: { name: 'ComponentGridPrintTemplateBottom' } },
                { title: '自定义参数设置模板', routerLink: { name: 'ComponentGridPrintTemplateParameter' } },
                { title: '自定义尾部模板', routerLink: { name: 'ComponentGridPrintTemplateFooter' } },
                { title: '自定义默认模板', routerLink: { name: 'ComponentGridPrintTemplateDefault' } }
              ]
            },
            { title: '实现将表格切割为多页打印', routerLink: { name: 'ComponentGridPrintPage' } },
            { title: '实现打印多张表格', routerLink: { name: 'ComponentGridPrintMultilist' } },
            { title: '实现打印出货单', routerLink: { name: 'ComponentGridPrintOrder' } }
          ]
        },
        {
          title: '虚拟滚动（超大数据量表格）',
          children: [
            { title: '纵向虚拟滚动', routerLink: { name: 'ComponentGridScrollVertical' } },
            { title: '横向虚拟滚动', routerLink: { name: 'ComponentGridScrollHorizontal' } },
            { title: '列头自适应换行', routerLink: { name: 'ComponentGridScrollColBreak' } },
            { title: '纵向和横向', routerLink: { name: 'ComponentGridScrollHV' } },
            { title: '排序与筛选', routerLink: { name: 'ComponentGridScrollHFull' } },
            { title: '函数式加载数据', routerLink: { name: 'ComponentGridScrollLoadData' } },
            { title: '冻结列 + 复杂渲染', routerLink: { name: 'ComponentGridScrollFixed' } },
            // { title: '滚动模式 + 复杂渲染', routerLink: { name: 'ComponentGridScrollMode' } },
            { title: '设置行高', routerLink: { name: 'ComponentGridScrollRowHeight' } },
            { title: '自适应行高', routerLink: { name: 'ComponentGridScrollAutoRowHeight' } },
            { title: '自适应行高 + 纵向和横向', routerLink: { name: 'ComponentGridScrollAutoRowVH' } },
            { title: '自适应行高 + 复杂渲染', routerLink: { name: 'ComponentGridScrollAutoRowFixed' } },
            { title: '拖拽调整行顺序', routerLink: { name: 'ComponentGridScrollDragRow' } },
            { title: '拖拽调整列顺序', routerLink: { name: 'ComponentGridScrollDragCol' } },
            { title: '使用分组表头', routerLink: { name: 'ComponentGridScrollGroup' } },
            { title: '使用表尾', routerLink: { name: 'ComponentGridScrollFooter' } },
            { title: '合并行与列', routerLink: { name: 'ComponentGridScrollMerge' } },
            { title: '合并与复杂功能', routerLink: { name: 'ComponentGridScrollMergeFixed' } },
            { title: '树形 + 纵向', routerLink: { name: 'ComponentGridScrollTree' } },
            { title: '树形 + 纵向和横向', routerLink: { name: 'ComponentGridScrollHVTree' } },
            { title: '树拖拽 + 纵向', routerLink: { name: 'ComponentGridScrollDragTree' } },
            { title: '展开行', routerLink: { name: 'ComponentGridScrollExpand' } },
            { title: '展开行 + 复杂子表渲染', routerLink: { name: 'ComponentGridScrollExpandFixed' } },
            { title: '可编辑 + 纵向', routerLink: { name: 'ComponentGridScrollEdit' } },
            { title: '可编辑 + 纵向和横向', routerLink: { name: 'ComponentGridScrollHVEdit' } },
            { title: '百万级数据量', routerLink: { name: 'ComponentGridScrollBigData' } }
          ]
        },
        {
          title: '数据代理',
          children: [
            { title: '查询接口', routerLink: { name: 'ComponentGridProxyQuery' } },
            { title: '分页查询接口', routerLink: { name: 'ComponentGridProxyPager' } },
            { title: '工具栏 - 查询', routerLink: { name: 'ComponentGridProxyToolbarQuery' } },
            { title: '手动调用 - 查询', routerLink: { name: 'ComponentGridProxyManualQuery' } },
            { title: '集成排序查询', routerLink: { name: 'ComponentGridProxySort' } },
            { title: '集成筛选查询', routerLink: { name: 'ComponentGridProxyFilter' } },
            { title: '集成表单查询', routerLink: { name: 'ComponentGridProxyForm' } },
            { title: '集成分页序号', routerLink: { name: 'ComponentGridProxySeq' } },
            { title: '工具栏 - 全量数据导出', routerLink: { name: 'ComponentGridProxyToolbarExport' } },
            { title: '工具栏 - 服务端导出', routerLink: { name: 'ComponentGridProxyToolbarRemoteExport' } },
            { title: '工具栏 - 删除已选', routerLink: { name: 'ComponentGridProxyToolbarDelete' } },
            { title: '手动调用 - 删除已选', routerLink: { name: 'ComponentGridProxyManualDelete' } },
            { title: '工具栏 - 批量标记删除', routerLink: { name: 'ComponentGridProxyToolbarMark' } },
            { title: '手动调用 - 标记删除状态', routerLink: { name: 'ComponentGridProxyManualMark' } },
            { title: '工具栏 - 增删改查', routerLink: { name: 'ComponentGridProxyToolbarSave' } },
            { title: '手动调用 - 增删改查', routerLink: { name: 'ComponentGridProxyManualSave' } }
          ]
        },
        {
          title: '表格搜索',
          children: [
            { title: '实现表格搜索', routerLink: { name: 'ComponentGridSearchList' } },
            { title: '实现树形表格搜索', routerLink: { name: 'ComponentGridSearchTree' } },
            { title: '查找与替换', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_fnr' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaFNR' } } }
          ]
        },
        {
          title: '滚动条',
          children: [
            { title: '滚动条样式', routerLink: { name: 'ComponentGridScrollbarBarStyle' } },
            { title: '滚动条位置', routerLink: { name: 'ComponentGridScrollbarBarPos' } }
          ]
        },
        {
          title: '事件监听',
          children: [
            { title: '点击/双击事件', routerLink: { name: 'ComponentGridEventsClick' } },
            { title: '滚动事件', routerLink: { name: 'ComponentGridEventsScroll' } }
          ]
        },
        {
          title: '无限加载',
          children: [
            { title: '实现加载行', routerLink: { name: 'ComponentGridLoadMoreVertical' } },
            { title: '实现加载列', routerLink: { name: 'ComponentGridLoadMoreHorizontal' } },
            { title: '实现同时加载行与列', routerLink: { name: 'ComponentGridLoadMoreVH' } },
            { title: '指定阈值加载行', routerLink: { name: 'ComponentGridLoadMoreBoundaryY' } },
            { title: '指定阈值加载列', routerLink: { name: 'ComponentGridLoadMoreBoundaryX' } },
            { title: '指定阈值同时加载行与列', routerLink: { name: 'ComponentGridLoadMoreBoundaryXY' } }
          ]
        },
        {
          title: '可视化图表',
          children: [
            { title: '单元格图表', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'table_extend_cell_area_echarts' }, query: { previewPath: '%2FextendCellArea%2Fgrid%2FareaBasicsEchart' } } }
          ]
        },
        {
          title: '功能示例',
          children: [
            { title: '操作列的显示隐藏', routerLink: { name: 'ComponentGridOtherVisibleColumn' } },
            { title: '在页签中使用', routerLink: { name: 'ComponentGridOtherTabs' } },
            { title: '定位行、定位列的使用', routerLink: { name: 'ComponentGridOtherScrollTo' } },
            { title: '实现反转列与行', routerLink: { name: 'ComponentGridOtherReverse' } },
            { title: '实现上传文件列表', routerLink: { name: 'ComponentGridOtherFileList' } },
            { title: '实现多行文本溢出省略', routerLink: { name: 'ComponentGridOtherLineEllipsis' } },
            { title: '实现动态生成月份表头', routerLink: { name: 'ComponentGridOtherYearMonth' } },
            { title: '实现分页复选框选择', routerLink: { name: 'ComponentGridOtherPageCheckbox' } },
            { title: '实现记账凭证', routerLink: { name: 'ComponentGridOtherBookkeepingVoucher' } },
            { title: '单元格可拖拽调整宽高', routerLink: { name: 'ComponentGridOtherAllRowColDrag' } },
            { title: '实现粘贴上传', routerLink: { name: 'ComponentGridOtherPasteToUpload' } },
            { title: '实现左边树和右边表格', routerLink: { name: 'ComponentGridOtherLeftRight' } }
          ]
        }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableOtherPlugin',
      children: [
        { title: '单元格图表插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-chart/grid/bar` },
        { title: '右键菜单插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-menu/table/full` },
        { title: '数据校验插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-validator/table/base` },
        { title: '导出 XLSX 插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-export-xlsx/table/export` },
        { title: '导出 PDF 插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-export-pdf/table/export` },
        { title: '更多第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}` }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableCssVar',
      children: [
        { title: '字体大小', routerLink: { name: 'CssVarTableFontSize' } },
        { title: '字体颜色', routerLink: { name: 'CssVarTableFontColor' } },
        { title: '单元格边框', routerLink: { name: 'CssVarTableBorder' } },
        { title: '表格背景色', routerLink: { name: 'CssVarTableBackground' } },
        { title: '行与列上移背景色', routerLink: { name: 'CssVarTableRowColHover' } },
        { title: '当前行与列背景色', routerLink: { name: 'CssVarTableRowColCurrent' } },
        { title: '单元格高度', routerLink: { name: 'CssVarTableRowHeight' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableGlobalFormats',
      children: [
        { title: 'API', routerLink: { name: 'GlobalFormatsTableAPI' } },
        { title: '单元格', routerLink: { name: 'GlobalFormatsTableBase' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableGlobalMenus',
      children: [
        { title: 'API', routerLink: { name: 'GlobalMenusTableAPI' } },
        { title: '右键菜单', routerLink: { name: 'GlobalMenusTableBase' } },
        { title: '便捷配置 Code 插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-menu/table/full` }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableGlobalCommands',
      children: [
        { title: 'API', routerLink: { name: 'GlobalCommandsTableAPI' } },
        { title: '工具栏', routerLink: { name: 'GlobalCommandsTableBase' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableGlobalValidators',
      children: [
        { title: 'API', routerLink: { name: 'GlobalValidatorsTableAPI' } },
        { title: '单元格校验', routerLink: { name: 'GlobalValidatorsTableBase' } },
        { title: '便捷校验配置插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-validator/table/base` }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableGlobalRenderer',
      children: [
        { title: 'API', routerLink: { name: 'GlobalRendererTableAPI' } },
        {
          title: '单元格',
          children: [
            { title: '实现单元格超链接', routerLink: { name: 'GlobalRendererTableDefaultMyLink' }, keywords: 'cell-render' },
            { title: '实现单元格图片预览', routerLink: { name: 'GlobalRendererTableDefaultMyImg' }, keywords: 'cell-render' },
            { title: '实现单元格金额格式化', routerLink: { name: 'GlobalRendererTableDefaultMyAmount' }, keywords: 'cell-render' },
            { title: '实现表头超链接', routerLink: { name: 'GlobalRendererTableDefaultMyHeaderLink' }, keywords: 'cell-render' },
            { title: '实现表尾金额格式化', routerLink: { name: 'GlobalRendererTableDefaultMyFooterAmount' }, keywords: 'cell-render' },
            { title: '实现完整金额格式化', routerLink: { name: 'GlobalRendererTableDefaultMyFullAmount' }, keywords: 'cell-render' },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/table/cell/el-switch` }
          ]
        },
        {
          title: '可编辑',
          children: [
            { title: '实现一个金额输入', routerLink: { name: 'GlobalRendererTableEditMyEditAmount' }, keywords: 'edit-render' },
            { title: '实现一个下拉表格', routerLink: { name: 'GlobalRendererTableEditMyEditPulldown' }, keywords: 'edit-render' },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/table/edit/el-input` }
          ]
        },
        {
          title: '展开行',
          children: [
            { title: '实现一个展开列表', routerLink: { name: 'GlobalRendererTableExpandMyExpandList' }, keywords: 'content-render' },
            { title: '实现一个展开表格', routerLink: { name: 'GlobalRendererTableExpandMyExpandTable' }, keywords: 'content-render' }
          ]
        },
        {
          title: '工具栏',
          children: [
            { title: '实现左侧操作按钮', routerLink: { name: 'GlobalRendererTableToolbarBtn' }, keywords: 'button-render' },
            { title: '实现右侧工具按钮', routerLink: { name: 'GlobalRendererTableToolbarTool' }, keywords: 'tool-render' }
          ]
        },
        {
          title: '筛选',
          children: [
            { title: '实现一个输入筛选', routerLink: { name: 'GlobalRendererTableFilterMyFilterInput' }, keywords: 'filter-render' },
            { title: '实现一个多条件筛选', routerLink: { name: 'GlobalRendererTableFilterMyFilterComplex' }, keywords: 'filter-render' },
            { title: '实现一个显示列表的筛选', routerLink: { name: 'GlobalRendererTableFilterMyFilterContent' }, keywords: 'filter-render' },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/table/filter/el-input`, keywords: 'filter-render' },
            { title: '更多筛选插件', isEnterprise: true, linkUrl: 'https://vxetable.cn/plugins/' }
          ]
        },
        {
          title: '空数据提示',
          children: [
            { title: '实现一个空数据显示文字', routerLink: { name: 'GlobalRendererTableMyEmptyImg' }, keywords: 'empty-render' },
            { title: '实现一个空数据显示图片', routerLink: { name: 'GlobalRendererTableMyEmptyText' }, keywords: 'empty-render' }
          ]
        }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableGlobalInterceptor',
      children: [
        { title: 'API', routerLink: { name: 'GlobalInterceptorTableAPI' } },
        { title: '可编辑 - 兼容性处理', routerLink: { name: 'GlobalInterceptorTableBase' } }
      ]
    }
  ]
}

const designNavConfig: NavVO & { children: NavVO[] } = {
  i18nKey: 'app.aside.menu.designTitle',
  children: [
    {
      i18nKey: 'app.aside.menu.formDesignTitle',
      children: [
        { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'form-design' } } },
        {
          i18nKey: 'app.aside.menu.formDesignUse',
          children: [
            { title: '基础功能', routerLink: { name: 'ComponentFormDesignBase' } },
            { title: '自定义控件分组', routerLink: { name: 'ComponentFormDesignCustomGroup' } },
            { title: '移动端设计器', routerLink: { name: 'ComponentFormDesignMobile' } },
            { title: 'PC 端和移动端设计器', routerLink: { name: 'ComponentFormDesignPcAndMobile' } },
            { title: '渲染视图', routerLink: { name: 'ComponentFormDesignRenderView' } },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/form-design/renderView` }
          ]
        },
        {
          i18nKey: 'app.aside.menu.formDesignGlobalRenderer',
          children: [
            { title: 'API', routerLink: { name: 'GlobalRendererFormDesignAPI' } },
            {
              title: '控件',
              children: [
                { title: '实现一个单行输入控件', routerLink: { name: 'GlobalRendererFormDesignWidgetMyInputWidget' } },
                { title: '实现一个多行输入控件', routerLink: { name: 'GlobalRendererFormDesignWidgetMyTextareaWidget' } }
              ]
            }
          ]
        }
      ]
    },
    {
      i18nKey: 'app.aside.menu.listDesignTitle',
      children: [
        { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'list-design' } } },
        {
          i18nKey: 'app.aside.menu.listDesignUse',
          children: [
            { title: '基础功能', routerLink: { name: 'ComponentListDesignBase' } },
            { title: '移动端设计器', routerLink: { name: 'ComponentListDesignMobile' } },
            { title: 'PC 端和移动端设计器', routerLink: { name: 'ComponentListDesignPcAndMobile' } },
            { title: '集成表单设计器', routerLink: { name: 'ComponentListDesignFormAndList' } }
          ]
        }
      ]
    },
    // { title: 'FlowDesign 流程设计器' },
    // { title: 'PrintDesign 打印设计器' },
    { title: '可视化设计器模板', isTemplate: true, linkUrl: 'https://vxeui.com/design-template/' },
    { title: '零代码平台模板', isEnterprise: true, linkUrl: 'https://vxeui.com/zero-code/' }
  ]
}

export const navConfigList: NavVO[] = [
  {
    i18nKey: 'app.aside.menu.guide',
    isExpand: true,
    children: [
      { i18nKey: 'app.aside.menu.globalInstall', routerLink: { name: 'StartInstall' } },
      { i18nKey: 'app.aside.menu.lazyUseGlobal', routerLink: { name: 'StartUseGlobal' } },
      { i18nKey: 'app.aside.menu.lazyUseImport', routerLink: { name: 'StartUseImport' } },
      { i18nKey: 'app.aside.menu.useCDN', routerLink: { name: 'StartCDN' } },
      { i18nKey: 'app.aside.menu.globalConfig', routerLink: { name: 'StartConfig' } },
      { i18nKey: 'app.aside.menu.globalTheme', routerLink: { name: 'StartTheme' } },
      { i18nKey: 'app.aside.menu.globalIcon', routerLink: { name: 'StartIcons' } },
      { i18nKey: 'app.aside.menu.globalZIndex', routerLink: { name: 'StartUseZIndex' } },
      { i18nKey: 'app.aside.menu.i18n', routerLink: { name: 'StartI18n' } },
      { i18nKey: 'app.aside.menu.globalPermission', routerLink: { name: 'StartPermission' } }
    ]
  },
  {
    i18nKey: 'app.aside.menu.tools',
    children: [
      { i18nKey: 'app.aside.menu.clipboard', routerLink: { name: 'ToolClipboard' } },
      { i18nKey: 'app.aside.menu.functions', linkUrl: 'https://vxeui.com/xe-utils/' }
    ]
  },
  {
    i18nKey: 'app.aside.menu.baseTitle',
    children: [
      {
        i18nKey: 'app.aside.menu.iconTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'icon' } } },
          { title: '图标列表', routerLink: { name: 'ComponentIconBase' } },
          { title: '尺寸大小', routerLink: { name: 'ComponentIconSize' } },
          { title: '效果', routerLink: { name: 'ComponentIconAnimation' } },
          { title: '状态颜色', routerLink: { name: 'ComponentIconStatus' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.textTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'text' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentTextSize' } },
          { title: '状态颜色', routerLink: { name: 'ComponentTextStatus' } },
          { title: '图标', routerLink: { name: 'ComponentTextIcon' } },
          { title: '点击复制内容', routerLink: { name: 'ComponentTextClickToCopy' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.linkTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'link' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentLinkSize' } },
          { title: '状态颜色', routerLink: { name: 'ComponentLinkStatus' } },
          { title: '图标', routerLink: { name: 'ComponentLinkIcon' } },
          { title: '下划线', routerLink: { name: 'ComponentLinkUnderline' } },
          { title: '禁用', routerLink: { name: 'ComponentLinkDisabled' } },
          { title: '超链接', routerLink: { name: 'ComponentLinkHref' } },
          { title: '路由模式', routerLink: { name: 'ComponentLinkRouter' } },
          { title: '权限码', routerLink: { name: 'ComponentLinkPermissionCode' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.tagTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tag' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentTagSize' } },
          { title: '状态', routerLink: { name: 'ComponentTagStatus' } },
          { title: '图标', routerLink: { name: 'ComponentTagIcon' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.buttonTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'button' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentButtonSize' } },
          { title: '状态', routerLink: { name: 'ComponentButtonStatus' } },
          { title: '圆角', routerLink: { name: 'ComponentButtonRound' } },
          { title: '圆形', routerLink: { name: 'ComponentButtonCircle' } },
          { title: '图标', routerLink: { name: 'ComponentButtonIcon' } },
          { title: '提示图标', routerLink: { name: 'ComponentButtonTipIcon' } },
          { title: '加载中', routerLink: { name: 'ComponentButtonLoading' } },
          { title: '按钮组', routerLink: { name: 'ComponentButtonGroup' } },
          { title: '排版方式', routerLink: { name: 'ComponentButtonVertical' } },
          {
            title: '下拉按钮',
            children: [
              { title: '下拉按钮', routerLink: { name: 'ComponentButtonDropdownOptions' } },
              { title: '状态颜色', routerLink: { name: 'ComponentButtonDropdownStatus' } },
              { title: '触发方式', routerLink: { name: 'ComponentButtonDropdownTrigger' } },
              { title: '固定方向', routerLink: { name: 'ComponentButtonDropdownPlacement' } },
              { title: '下拉面板挂载 Body', routerLink: { name: 'ComponentButtonDropdownTeleportTo' } },
              { title: '自定义插槽模板', routerLink: { name: 'ComponentButtonDropdownTemplate' } },
              { title: '权限码', routerLink: { name: 'ComponentButtonDropdownPermissionCode' } }
            ]
          },
          { title: '禁用', routerLink: { name: 'ComponentButtonDisabled' } },
          { title: '权限码', routerLink: { name: 'ComponentButtonPermissionCode' } },
          {
            i18nKey: 'app.aside.menu.buttonGlobalRenderer',
            children: [
              { title: 'API', routerLink: { name: 'GlobalRendererButtonAPI' } },
              { title: '前缀图标', routerLink: { name: 'GlobalRendererButtonPrefix' } },
              { title: '后缀图标', routerLink: { name: 'GlobalRendererButtonSuffix' } }
            ]
          },
          { title: '使用第三方图标', isPlugin: true, linkUrl: `${otherUrl}/#/other-iconfont/symbol/button/icon` }
        ]
      }
    ]
  },
  {
    i18nKey: 'app.aside.menu.layoutTitle',
    children: [
      {
        title: 'Layout 页面布局',
        children: [
          { title: 'Layout Container API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'layout-container' } } },
          { title: 'Layout Aside API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'layout-aside' } } },
          { title: 'Layout Header API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'layout-header' } } },
          { title: 'Layout Body API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'layout-body' } } },
          { title: 'Layout Footer API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'layout-footer' } } },
          { title: '基础布局', routerLink: { name: 'ComponentLayoutBase' } },
          { title: '固定头部和底部', routerLink: { name: 'ComponentLayoutFixed' } },
          { title: '侧边栏，内容区滚动条', routerLink: { name: 'ComponentLayoutAside' } },
          { title: '头部固定，中间内容区滚动', routerLink: { name: 'ComponentLayoutHeader' } },
          { title: '左侧与内容区滚动', routerLink: { name: 'ComponentLayoutBody' } }
        ]
      },
      {
        title: 'Row 行与列',
        children: [
          { title: 'Row API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'row' } } },
          { title: 'Col API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'col' } } },
          { title: '占比', routerLink: { name: 'ComponentRowBase' } },
          { title: '垂直布局', routerLink: { name: 'ComponentRowVertical' } },
          { title: '自动换行', routerLink: { name: 'ComponentRowWrap' } },
          { title: '间距', routerLink: { name: 'ComponentRowGutter' } },
          { title: '固定宽度', routerLink: { name: 'ComponentRowColWidth' } },
          { title: '铺满宽度', routerLink: { name: 'ComponentRowColFill' } },
          { title: '对齐方式', routerLink: { name: 'ComponentRowColAlign' } },
          { title: '溢出隐藏', routerLink: { name: 'ComponentRowColEllipsis' } }
        ]
      },
      // { title: 'Progress 进度条' },
      {
        title: 'Card 卡片',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'card' } } },
          { title: '基础', routerLink: { name: 'ComponentCardBase' } },
          { title: '宽度', routerLink: { name: 'ComponentCardWidth' } },
          { title: '高度', routerLink: { name: 'ComponentCardHeight' } },
          { title: '加载中', routerLink: { name: 'ComponentCardLoading' } },
          { title: '显示/隐藏边框', routerLink: { name: 'ComponentCardBorder' } },
          { title: '显示/隐藏边距', routerLink: { name: 'ComponentCardPadding' } },
          { title: '边框阴影', routerLink: { name: 'ComponentCardShadow' } },
          { title: '自定义模板', routerLink: { name: 'ComponentCardTemplate' } },
          { title: '实现可刷新', routerLink: { name: 'ComponentCardRefresh' } }
        ]
      },
      {
        title: 'Carousel 轮播图',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'carousel' } } },
          { title: '基础', routerLink: { name: 'ComponentCarouselBase' } },
          { title: '高度', routerLink: { name: 'ComponentCarouselHeight' } },
          { title: '纵向排版', routerLink: { name: 'ComponentCarouselVertical' } },
          { title: '配置式', routerLink: { name: 'ComponentCarouselOptions' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentCarouselTemplate' } },
          { title: '自动切换', routerLink: { name: 'ComponentCarouselAutoPlay' } },
          { title: '指示器', routerLink: { name: 'ComponentCarouselShowIndicators' } }
        ]
      },
      {
        title: 'Collapse 折叠面板',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'collapse' } } },
          { title: '基础', routerLink: { name: 'ComponentCollapseBase' } },
          { title: '图标', routerLink: { name: 'ComponentCollapseIon' } },
          { title: '配置式', routerLink: { name: 'ComponentCollapseOptions' } },
          { title: '自定义标题模板', routerLink: { name: 'ComponentCollapseTemplateTitle' } },
          { title: '自定义内容模板', routerLink: { name: 'ComponentCollapseTemplateDefault' } }
        ]
      },
      {
        title: 'Split 分割面板',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'split' } } },
          { title: 'Item API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'split-pane' } } },
          {
            title: '基础',
            children: [
              { title: '基础', routerLink: { name: 'ComponentSplitBasicsBase' } },
              { title: '高度', routerLink: { name: 'ComponentSplitBasicsHeight' } },
              { title: '边框', routerLink: { name: 'ComponentSplitBasicsBorder' } },
              { title: '边距', routerLink: { name: 'ComponentSplitBasicsPadding' } },
              { title: '垂直布局', routerLink: { name: 'ComponentSplitBasicsVertical' } },
              { title: '折叠按钮', routerLink: { name: 'ComponentSplitBasicsAction' } },
              { title: '组合布局', routerLink: { name: 'ComponentSplitBasicsLayout' } }
            ]
          },
          {
            title: '配置式',
            children: [
              { title: '基础', routerLink: { name: 'ComponentSplitConfigBase' } },
              { title: '高度', routerLink: { name: 'ComponentSplitConfigHeight' } },
              { title: '边框', routerLink: { name: 'ComponentSplitConfigBorder' } },
              { title: '边距', routerLink: { name: 'ComponentSplitConfigPadding' } },
              { title: '垂直布局', routerLink: { name: 'ComponentSplitConfigVertical' } },
              { title: '折叠按钮', routerLink: { name: 'ComponentSplitConfigAction' } },
              { title: '组合布局', routerLink: { name: 'ComponentSplitConfigLayout' } }
            ]
          }
        ]
      },
      {
        title: 'Tabs 页签',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tabs' } } },
          { title: '基础', routerLink: { name: 'ComponentTabsBase' } },
          { title: '样式 - 卡片风格', routerLink: { name: 'ComponentTabsCard' } },
          { title: '样式 - 边框背景', routerLink: { name: 'ComponentTabsBorderCard' } },
          { title: '样式 - 圆角边框背景', routerLink: { name: 'ComponentTabsRoundCard' } },
          { title: '设置高度', routerLink: { name: 'ComponentTabsHeight' } },
          { title: '配置式', routerLink: { name: 'ComponentTabsOptions' } },
          { title: '页签图标', routerLink: { name: 'ComponentTabsIcon' } },
          { title: '页签触发方式', routerLink: { name: 'ComponentTabsRoundTrigger' } },
          { title: '页签显示位置', routerLink: { name: 'ComponentTabsRoundPosition' } },
          { title: '是否显示面板内容', routerLink: { name: 'ComponentTabsRoundShowContent' } },
          { title: '预加载页签', routerLink: { name: 'ComponentTabsRoundPreload' } },
          { title: '页签超出可滚动', routerLink: { name: 'ComponentTabsOver' } },
          { title: '拦截页签切换', routerLink: { name: 'ComponentTabsBeforeChangeMethod' } },
          { title: '可关闭', routerLink: { name: 'ComponentTabsCloseConfig' } },
          { title: '拦截页签关闭', routerLink: { name: 'ComponentTabsBeforeClose' } },
          { title: '可刷新', routerLink: { name: 'ComponentTabsRefreshConfig' } },
          {
            title: '自定义插槽模板',
            children: [
              { title: '自定义标题', routerLink: { name: 'ComponentTabsTemplateTitle' } },
              { title: '自定义标题前缀', routerLink: { name: 'ComponentTabsTemplateTitlePrefix' } },
              { title: '自定义标题后缀', routerLink: { name: 'ComponentTabsTemplateTitleSuffix' } },
              { title: '自定义页签前缀', routerLink: { name: 'ComponentTabsTemplatePrefix' } },
              { title: '自定义页签后缀', routerLink: { name: 'ComponentTabsTemplateSuffix' } },
              { title: '自定义面板头部模板', routerLink: { name: 'ComponentTabsTemplateHeader' } },
              { title: '自定义面板底部模板', routerLink: { name: 'ComponentTabsTemplateFooter' } }
            ]
          },
          { title: '权限码', routerLink: { name: 'ComponentTabsPermissionCode' } }
        ]
      },
      {
        title: 'Pulldown 下拉容器',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'pulldown' } } },
          { title: '基础', routerLink: { name: 'ComponentPulldownBase' } },
          { title: '配置列表', routerLink: { name: 'ComponentPulldownOptions' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentPulldownTemplate' } },
          { title: '可搜索的下拉框', routerLink: { name: 'ComponentPulldownSelect' } },
          { title: '实现下拉表格', routerLink: { name: 'ComponentPulldownTable' } }
        ]
      },
      {
        title: 'List 虚拟列表',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'list' } } },
          { title: '纵向虚拟列表', routerLink: { name: 'ComponentListBase' } },
          { title: '响应式高度', routerLink: { name: 'ComponentListAutoResize' } },
          { title: '实现轻量级虚拟表格', routerLink: { name: 'ComponentListTable' } }
        ]
      }
    ]
  },
  {
    i18nKey: 'app.aside.menu.displayTitle',
    children: [
      {
        title: 'Avatar 头像',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'avatar' } } },
          { title: '基础', routerLink: { name: 'ComponentAvatarBase' } },
          { title: '尺寸大小', routerLink: { name: 'ComponentAvatarSize' } },
          { title: '图标', routerLink: { name: 'ComponentAvatarIcon' } },
          { title: '圆形', routerLink: { name: 'ComponentAvatarCircle' } },
          { title: '状态颜色', routerLink: { name: 'ComponentAvatarStatus' } },
          { title: '小圆点', routerLink: { name: 'ComponentAvatarDot' } },
          { title: '微标数量', routerLink: { name: 'ComponentAvatarCount' } }
        ]
      },
      {
        title: 'Badge 微标',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'badge' } } },
          { title: '基础', routerLink: { name: 'ComponentBadgeBase' } },
          { title: '尺寸大小', routerLink: { name: 'ComponentBadgerSize' } },
          { title: '小圆点', routerLink: { name: 'ComponentBadgerDot' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.textEllipsisTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'text-ellipsis' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentTextEllipsisSize' } },
          { title: '状态颜色', routerLink: { name: 'ComponentTextEllipsisStatus' } },
          { title: '单行溢出省略', routerLink: { name: 'ComponentTextEllipsisIconLineSingle' } },
          { title: '多行溢出省略', routerLink: { name: 'ComponentTextEllipsisLineClamp' } }
        ]
      },
      {
        title: 'Image 图片',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'image' } } },
          { title: '设置宽高', routerLink: { name: 'ComponentImageBase' } },
          { title: '圆形图片', routerLink: { name: 'ComponentImageCircle' } },
          { title: '预览链接', routerLink: { name: 'ComponentImageThumbnail' } },
          { title: '预览多张图片', routerLink: { name: 'ComponentImageMultiple' } },
          { title: '懒加载', routerLink: { name: 'ComponentImageLazy' } },
          { title: '预览', routerLink: { name: 'ComponentImageShowPreview' } },
          { title: '点击遮罩层关闭', routerLink: { name: 'ComponentImageMaskClosable' } },
          // { title: '打印按钮', routerLink: { name: 'ComponentImageShowPrintButton' } },
          { title: '工具栏按钮', routerLink: { name: 'ComponentImageToolBtn' } },
          { title: '工具栏图标', routerLink: { name: 'ComponentImageToolIcon' } },
          { title: '事件监听', routerLink: { name: 'ComponentImageEvents' } }
        ]
      },
      {
        title: 'ImageGroup 图片组',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'image-group' } } },
          { title: '设置宽高', routerLink: { name: 'ComponentImageGroupBase' } },
          { title: '预览', routerLink: { name: 'ComponentImageGroupShowPreview' } },
          { title: '打印按钮', routerLink: { name: 'ComponentImageGroupShowPrintButton' } },
          { title: '下载按钮', routerLink: { name: 'ComponentImageGroupShowDownloadButton' } }
        ]
      },
      {
        title: 'ImagePreview 图片预览',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'image-preview' } } },
          { title: '打开预览', routerLink: { name: 'ComponentImagePreview' } }
        ]
      },
      {
        title: 'Calendar 日历',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'calendar' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentCalendarSize' } },
          { title: '高度', routerLink: { name: 'ComponentCalendarHeight' } },
          { title: '日期视图', routerLink: { name: 'ComponentCalendarDate' } },
          { title: '周视图', routerLink: { name: 'ComponentCalendarWeek' } },
          { title: '月度图', routerLink: { name: 'ComponentCalendarMonth' } },
          { title: '季度图', routerLink: { name: 'ComponentCalendarQuarter' } },
          { title: '年度视图', routerLink: { name: 'ComponentCalendarYear' } },
          { title: '显示节假日', routerLink: { name: 'ComponentCalendarFestivalMethod' } },
          { title: '事件监听', routerLink: { name: 'ComponentCalendarFestivalEvents' } }
        ]
      }
    ]
  },
  {
    i18nKey: 'app.aside.menu.navigationTitle',
    children: [
      {
        title: 'Breadcrumb 面包屑',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'breadcrumb' } } },
          { title: '基础', routerLink: { name: 'ComponentBreadcrumb' } }
        ]
      },
      {
        title: 'Menu 菜单',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'menu' } } },
          { title: '基础', routerLink: { name: 'ComponentMenuBase' } },
          { title: '加载中', routerLink: { name: 'ComponentMenuLoading' } },
          { title: '图标', routerLink: { name: 'ComponentMenuIcon' } },
          { title: '手风琴效果', routerLink: { name: 'ComponentMenuAccordion' } },
          { title: '可折叠', routerLink: { name: 'ComponentMenuCollapsed' } },
          { title: '路由模式', routerLink: { name: 'ComponentMenuRouterLink' } },
          { title: '权限码', routerLink: { name: 'ComponentMenuPermissionCode' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentMenuTemplate' } }
        ]
      },
      {
        title: 'Anchor 锚点',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'anchor' } } },
          { title: '自定义容器', routerLink: { name: 'ComponentAnchor' } }
        ]
      },
      {
        title: 'Pager 分页',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'pager' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentPagerSize' } },
          { title: '对齐方式', routerLink: { name: 'ComponentPagerAlign' } },
          { title: '自定义页大小列表', routerLink: { name: 'ComponentPagerPageSize' } },
          { title: '自定义布局', routerLink: { name: 'ComponentPagerLayout' } },
          {
            title: '自定义模板',
            children: [
              { title: '左侧区域', routerLink: { name: 'ComponentPagerTemplateLeft' } },
              { title: '右侧区域', routerLink: { name: 'ComponentPagerTemplateRight' } },
              { title: '功能区', routerLink: { name: 'ComponentPagerTemplateFunc' } }
            ]
          }
        ]
      }
    ]
  },
  {
    i18nKey: 'app.aside.menu.formTitle',
    children: [
      { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'form' } } },
      { title: 'Item API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'form-item' } } },
      {
        i18nKey: 'app.aside.menu.formBaseTitle',
        children: [
          { title: '基础功能', routerLink: { name: 'ComponentFormBasicsBase' } },
          { title: '尺寸大小', routerLink: { name: 'ComponentFormBasicsSize' } },
          { title: '数据类型', routerLink: { name: 'ComponentFormBasicsField' } },
          { title: '横向排列', routerLink: { name: 'ComponentFormBasicsHorizontal' } },
          { title: '上下布局', routerLink: { name: 'ComponentFormBasicsVertical' } },
          { title: '边距', routerLink: { name: 'ComponentFormBasicsPadding' } },
          { title: '标题冒号', routerLink: { name: 'ComponentFormBasicsColon' } },
          { title: '标题加粗', routerLink: { name: 'ComponentFormBasicsBold' } },
          { title: '标题宽度', routerLink: { name: 'ComponentFormBasicsWidth' } },
          { title: '标题对齐方式', routerLink: { name: 'ComponentFormBasicsTitleAlign' } },
          { title: '内容对齐方式', routerLink: { name: 'ComponentFormBasicsAlign' } },
          { title: '溢出隐藏', routerLink: { name: 'ComponentFormBasicsOverflow' } },
          { title: '标题前缀图标', routerLink: { name: 'ComponentFormBasicsTitlePrefix' } },
          { title: '标题后缀图标', routerLink: { name: 'ComponentFormBasicsTitleSuffix' } },
          { title: '边框', routerLink: { name: 'ComponentFormBasicsBorder' } },
          { title: '标题背景', routerLink: { name: 'ComponentFormBasicsTitleBackground' } },
          { title: '格式化内容', routerLink: { name: 'ComponentFormBasicsFormat' } },
          { title: '分组/分行/分列', routerLink: { name: 'ComponentFormBasicsGroup' } },
          { title: '自定义布局', routerLink: { name: 'ComponentFormBasicsCustomLayout' } },
          {
            title: '折叠表单',
            children: [
              { title: '展开与收起', routerLink: { name: 'ComponentFormBasicsCollapseBase' } },
              { title: '自定义按钮文字', routerLink: { name: 'ComponentFormBasicsCollapseButtonText' } },
              { title: '自定义按钮图标', routerLink: { name: 'ComponentFormBasicsCollapseButtonIcon' } }
            ]
          },
          {
            title: '数据校验',
            children: [
              { title: '校验规则配置', routerLink: { name: 'ComponentFormBasicsValidateRules' } },
              { title: '字符串校验规则', routerLink: { name: 'ComponentFormBasicsValidateString' } },
              { title: '数值校验规则', routerLink: { name: 'ComponentFormBasicsValidateNumber' } },
              { title: '正则校验规则', routerLink: { name: 'ComponentFormBasicsValidateRegexp' } },
              { title: '数组校验规则', routerLink: { name: 'ComponentFormBasicsValidateArray' } },
              { title: '自定义校验规则', routerLink: { name: 'ComponentFormBasicsValidateCustom' } },
              { title: '错误提示样式', routerLink: { name: 'ComponentFormBasicsValidateTheme' } },
              { title: '手动调用', routerLink: { name: 'ComponentFormBasicsValidateManual' } }
            ]
          },
          {
            title: '渲染 - 配置式',
            children: [
              { title: 'input 原生-输入框', routerLink: { name: 'ComponentFormBasicsItemRenderInput' } },
              { title: 'textarea 原生-文本域', routerLink: { name: 'ComponentFormBasicsItemRenderTextarea' } },
              { title: 'select 原生-下拉框', routerLink: { name: 'ComponentFormBasicsItemRenderSelect' } },
              { title: 'VxeButtonGroup 按钮组', routerLink: { name: 'ComponentFormBasicsItemRenderVxeButtonGroup' } },
              { title: 'VxeInput 输入框', routerLink: { name: 'ComponentFormBasicsItemRenderVxeInput' } },
              { title: 'VxeNumberInput 数值输入框', routerLink: { name: 'ComponentFormBasicsItemRenderVxeNumberInput' } },
              { title: 'VxeTextarea 文本域', routerLink: { name: 'ComponentFormBasicsItemRenderVxeTextarea' } },
              { title: 'VxeSelect 下拉框', routerLink: { name: 'ComponentFormBasicsItemRenderVxeSelect' } },
              { title: 'VxeDatePicker 日期选择', routerLink: { name: 'ComponentFormBasicsItemRenderVxeDatePicker' } },
              { title: 'VxeDateRangePicker 日期范围选择', routerLink: { name: 'ComponentFormBasicsItemRenderVxeDateRangePicker' } },
              { title: 'VxeTreeSelect 下拉树选择', routerLink: { name: 'ComponentFormBasicsItemRenderVxeTreeSelect' } },
              { title: 'VxeTableSelect 下拉表格选择', routerLink: { name: 'ComponentFormBasicsItemRenderVxeTableSelect' } },
              { title: 'VxeSwitch 开关', routerLink: { name: 'ComponentFormBasicsItemRenderVxeSwitch' } },
              { title: 'VxeRadioGroup 单选组', routerLink: { name: 'ComponentFormBasicsItemRenderVxeRadioGroup' } },
              { title: 'VxeCheckboxGroup 复选组', routerLink: { name: 'ComponentFormBasicsItemRenderVxeCheckboxGroup' } },
              { title: 'VxeRate 评分', routerLink: { name: 'ComponentFormBasicsItemRenderVxeRate' } },
              { title: 'VxeSlider 滑块', routerLink: { name: 'ComponentFormBasicsItemRenderVxeSlider' } },
              { title: 'VxeUpload 上传', routerLink: { name: 'ComponentFormBasicsItemRenderVxeUpload' } },
              // { title: 'WangEditor 第三方扩展-富文本', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-wangeditor/form/itemTemplate/wang-editor` },
              { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/form/itemTemplate/el-input` },
              { title: '只读模式', routerLink: { name: 'ComponentFormBasicsItemRenderReadonly' } },
              { title: '禁用模式', routerLink: { name: 'ComponentFormBasicsItemRenderDisabled' } },
              { title: '实现联动禁用', routerLink: { name: 'ComponentFormBasicsItemRenderLinkageDisabled' } }
            ]
          },
          {
            title: '渲染 - 插槽式',
            children: [
              { title: 'VxeButton 按钮', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeButton' } },
              { title: 'VxeInput 输入框', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeInput' } },
              { title: 'VxeNumberInput 数值输入框', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeNumberInput' } },
              { title: 'VxeTextarea 文本域', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeTextarea' } },
              { title: 'VxeSelect 下拉框', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeSelect' } },
              { title: 'VxeDatePicker 日期选择', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeDatePicker' } },
              { title: 'VxeDateRangePicker 日期范围选择', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeDateRangePicker' } },
              { title: 'VxeTreeSelect 下拉树选择', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeTreeSelect' } },
              { title: 'VxeSwitch 开关', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeSwitch' } },
              { title: 'VxeRadioGroup 单选组', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeRadioGroup' } },
              { title: 'VxeCheckboxGroup 复选组', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeCheckboxGroup' } },
              { title: 'VxeRate 评分', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeRate' } },
              { title: 'VxeSlider 滑块', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeSlider' } },
              { title: 'VxeUpload 上传', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeUpload' } },
              // { title: 'WangEditor 第三方扩展-富文本', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-wangeditor/form/itemTemplate/wang-editor` },
              { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/form/itemTemplate/el-input` }
            ]
          },
          {
            title: '自定义插槽模板',
            children: [
              { title: '自定义标题模板', routerLink: { name: 'ComponentFormBasicsTemplateTitle' } },
              { title: '自定义标题右侧模板', routerLink: { name: 'ComponentFormBasicsTemplateExtra' } },
              { title: '自定义内容模板', routerLink: { name: 'ComponentFormBasicsTemplateContent' } }
            ]
          },
          { title: '在页签中使用', routerLink: { name: 'ComponentFormBasicsTabs' } },
          { title: '实现简历模板', routerLink: { name: 'ComponentFormBasicsResumeTemplate' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.formConfigTitle',
        children: [
          { title: '基础功能', routerLink: { name: 'ComponentFormConfigBase' } },
          { title: '数据类型', routerLink: { name: 'ComponentFormConfigField' } },
          { title: '横向排列', routerLink: { name: 'ComponentFormConfigHorizontal' } },
          { title: '上下布局', routerLink: { name: 'ComponentFormConfigVertical' } },
          { title: '边距', routerLink: { name: 'ComponentFormConfigPadding' } },
          { title: '标题冒号', routerLink: { name: 'ComponentFormConfigColon' } },
          { title: '标题加粗', routerLink: { name: 'ComponentFormConfigBold' } },
          { title: '文字提示', routerLink: { name: 'ComponentFormConfigTooltip' } },
          { title: '边框', routerLink: { name: 'ComponentFormConfigBorder' } },
          { title: '标题背景', routerLink: { name: 'ComponentFormConfigTitleBackground' } },
          { title: '格式化内容', routerLink: { name: 'ComponentFormConfigFormat' } },
          { title: '分组/分行/分列', routerLink: { name: 'ComponentFormConfigGroup' } },
          {
            title: '折叠表单',
            children: [
              { title: '展开与收起', routerLink: { name: 'ComponentFormConfigCollapseBase' } },
              { title: '自定义按钮文字', routerLink: { name: 'ComponentFormConfigCollapseButtonText' } },
              { title: '自定义按钮图标', routerLink: { name: 'ComponentFormConfigCollapseButtonIcon' } }
            ]
          },
          {
            title: '数据校验',
            children: [
              { title: '校验规则配置', routerLink: { name: 'ComponentFormConfigValidateRules' } },
              { title: '字符串校验规则', routerLink: { name: 'ComponentFormConfigValidateString' } },
              { title: '数值校验规则', routerLink: { name: 'ComponentFormConfigValidateNumber' } },
              { title: '正则校验规则', routerLink: { name: 'ComponentFormConfigValidateRegexp' } },
              { title: '数组校验规则', routerLink: { name: 'ComponentFormConfigValidateArray' } },
              { title: '自定义校验规则', routerLink: { name: 'ComponentFormConfigValidateCustom' } },
              { title: '错误提示样式', routerLink: { name: 'ComponentFormConfigValidateTheme' } },
              { title: '手动调用', routerLink: { name: 'ComponentFormConfigValidateManual' } }
            ]
          },
          {
            title: '渲染 - 配置式',
            children: [
              { title: 'input 原生-输入框', routerLink: { name: 'ComponentFormConfigItemRenderInput' } },
              { title: 'textarea 原生-文本域', routerLink: { name: 'ComponentFormConfigItemRenderTextarea' } },
              { title: 'select 原生-下拉框', routerLink: { name: 'ComponentFormConfigItemRenderSelect' } },
              { title: 'VxeInput 输入框', routerLink: { name: 'ComponentFormConfigItemRenderVxeInput' } },
              { title: 'VxeButtonGroup 按钮组', routerLink: { name: 'ComponentFormConfigItemRenderVxeButtonGroup' } },
              { title: 'VxeTextarea 文本域', routerLink: { name: 'ComponentFormConfigItemRenderVxeTextarea' } },
              { title: 'VxeNumberInput 数值输入', routerLink: { name: 'ComponentFormConfigItemRenderVxeNumberInput' } },
              { title: 'VxeSelect 下拉框', routerLink: { name: 'ComponentFormConfigItemRenderVxeSelect' } },
              { title: 'VxeDatePicker 日期选择', routerLink: { name: 'ComponentFormConfigItemRenderVxeDatePicker' } },
              { title: 'VxeDateRangePicker 日期范围选择', routerLink: { name: 'ComponentFormConfigItemRenderVxeDateRangePicker' } },
              { title: 'VxeTreeSelect 下拉树选择', routerLink: { name: 'ComponentFormConfigItemRenderVxeTreeSelect' } },
              { title: 'VxeTableSelect 下拉表格选择', routerLink: { name: 'ComponentFormConfigItemRenderVxeTableSelect' } },
              { title: 'VxeSwitch 开关', routerLink: { name: 'ComponentFormConfigItemRenderVxeSwitch' } },
              { title: 'VxeRadioGroup 单选组件', routerLink: { name: 'ComponentFormConfigItemRenderVxeRadioGroup' } },
              { title: 'VxeCheckboxGroup 复选组', routerLink: { name: 'ComponentFormConfigItemRenderVxeCheckboxGroup' } },
              { title: 'VxeRate 评分', routerLink: { name: 'ComponentFormConfigItemRenderVxeRate' } },
              { title: 'VxeRate 滑块', routerLink: { name: 'ComponentFormConfigItemRenderVxeSlider' } },
              { title: 'VxeImage 图片', routerLink: { name: 'ComponentFormConfigItemRenderVxeImage' } },
              { title: 'VxeImageGroup 图片组', routerLink: { name: 'ComponentFormConfigItemRenderVxeImageGroup' } },
              { title: 'VxeUpload 上传', routerLink: { name: 'ComponentFormConfigItemRenderVxeUpload' } },
              // { title: 'WangEditor 第三方扩展-富文本', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-wangeditor/form/itemRender/wang-editor` },
              { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/form/itemRender/el-input` },
              { title: '只读模式', routerLink: { name: 'ComponentFormConfigItemRenderReadonly' } },
              { title: '禁用模式', routerLink: { name: 'ComponentFormConfigItemRenderDisabled' } },
              { title: '实现联动禁用', routerLink: { name: 'ComponentFormConfigItemRenderLinkageDisabled' } }
            ]
          },
          {
            title: '渲染 - 插槽式',
            children: [
              { title: 'VxeButton 按钮', routerLink: { name: 'ComponentFormConfigItemTemplateVxeButton' } },
              { title: 'VxeInput 输入框', routerLink: { name: 'ComponentFormConfigItemTemplateVxeInput' } },
              { title: 'VxeTextarea 文本域', routerLink: { name: 'ComponentFormConfigItemTemplateVxeTextarea' } },
              { title: 'VxeNumberInput 数值输入', routerLink: { name: 'ComponentFormConfigItemTemplateVxeNumberInput' } },
              { title: 'VxeSelect 下拉框', routerLink: { name: 'ComponentFormConfigItemTemplateVxeSelect' } },
              { title: 'VxeDatePicker 日期选择', routerLink: { name: 'ComponentFormConfigItemTemplateVxeDatePicker' } },
              { title: 'VxeDateRangePicker 日期范围选择', routerLink: { name: 'ComponentFormConfigItemTemplateVxeDateRangePicker' } },
              { title: 'VxeTreeSelect 下拉树选择', routerLink: { name: 'ComponentFormConfigItemTemplateVxeTreeSelect' } },
              { title: 'VxeSwitch 开关', routerLink: { name: 'ComponentFormConfigItemTemplateVxeSwitch' } },
              { title: 'VxeRadioGroup 单选组', routerLink: { name: 'ComponentFormConfigItemTemplateVxeRadioGroup' } },
              { title: 'VxeCheckboxGroup 复选组', routerLink: { name: 'ComponentFormConfigItemTemplateVxeCheckboxGroup' } },
              { title: 'VxeRate 评分', routerLink: { name: 'ComponentFormConfigItemTemplateVxeRate' } },
              { title: 'VxeRate 滑块', routerLink: { name: 'ComponentFormConfigItemTemplateVxeSlider' } },
              { title: 'VxeImage 图片', routerLink: { name: 'ComponentFormConfigItemTemplateVxeImage' } },
              { title: 'VxeImageGroup 图片组', routerLink: { name: 'ComponentFormConfigItemTemplateVxeImageGroup' } },
              { title: 'VxeUpload 上传', routerLink: { name: 'ComponentFormConfigItemTemplateVxeUpload' } },
              // { title: 'WangEditor 第三方扩展-富文本', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-wangeditor/form/itemRender/wang-editor` },
              { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/form/itemRender/el-input` }
            ]
          },
          {
            title: '自定义插槽模板',
            children: [
              { title: '自定义标题模板', routerLink: { name: 'ComponentFormConfigTemplateTitle' } },
              { title: '自定义标题右侧模板', routerLink: { name: 'ComponentFormConfigTemplateExtra' } },
              { title: '自定义内容模板', routerLink: { name: 'ComponentFormConfigTemplateContent' } }
            ]
          },
          { title: '在页签中使用', routerLink: { name: 'ComponentFormConfigTabs' } },
          { title: '实现简历模板', routerLink: { name: 'ComponentFormConfigResumeTemplate' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.formGlobalValidators',
        children: [
          { title: 'API', routerLink: { name: 'GlobalValidatorsFormAPI' } },
          { title: '表单项校验', routerLink: { name: 'GlobalValidatorsFormBase' } },
          { title: '便捷校验配置插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-validator/form/base` }
        ]
      },
      {
        i18nKey: 'app.aside.menu.formGlobalFormats',
        children: [
          { title: 'API', routerLink: { name: 'GlobalFormatsFormAPI' } },
          { title: '表单项', routerLink: { name: 'GlobalFormatsFormBase' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.formGlobalRenderer',
        children: [
          { title: 'API', routerLink: { name: 'GlobalRendererFormAPI' } },
          {
            title: '表单项',
            children: [
              { title: '实现一个金额输入', routerLink: { name: 'GlobalRendererFormItemMyItemAmount' } },
              { title: '实现一个附件上传', routerLink: { name: 'GlobalRendererFormItemMyItemUpload' } },
              { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/form/itemRender/el-input` }
            ]
          }
        ]
      }
    ]
  },
  {
    i18nKey: 'app.aside.menu.dataTitle',
    children: [
      {
        title: 'Switch 开关',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'switch' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentSwitchSize' } },
          { title: '禁用状态', routerLink: { name: 'ComponentSwitchDisabled' } },
          { title: '自定义显示值', routerLink: { name: 'ComponentSwitchLabel' } },
          { title: '自定义实际值', routerLink: { name: 'ComponentSwitchValue' } },
          { title: '自定义图标', routerLink: { name: 'ComponentSwitchIcon' } }
        ]
      },
      {
        title: 'Radio 单选框',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'radio' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentRadioSize' } },
          { title: '禁用状态', routerLink: { name: 'ComponentRadioDisabled' } },
          { title: '允许取消', routerLink: { name: 'ComponentRadioStrict' } },
          { title: '单选组', routerLink: { name: 'ComponentRadioGroup' } },
          { title: '单选按钮', routerLink: { name: 'ComponentRadioButton' } }
        ]
      },
      {
        title: 'Checkbox 复选框',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'checkbox' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentCheckboxSize' } },
          { title: '半选状态', routerLink: { name: 'ComponentCheckboxIndeterminate' } },
          { title: '禁用状态', routerLink: { name: 'ComponentCheckboxDisabled' } },
          { title: '自定义值', routerLink: { name: 'ComponentCheckboxValue' } },
          { title: '复选组', routerLink: { name: 'ComponentCheckboxGroup' } },
          { title: '复选按钮', routerLink: { name: 'ComponentCheckboxButton' } },
          { title: '限制最大数量', routerLink: { name: 'ComponentCheckboxMax' } }
        ]
      },
      {
        title: 'Rate 评分',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'rate' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentRateSize' } },
          { title: '状态颜色', routerLink: { name: 'ComponentRateStatus' } },
          { title: '禁用状态', routerLink: { name: 'ComponentRateDisabled' } }
        ]
      },
      {
        title: 'Slider 滑块',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'slider' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentSliderSize' } },
          { title: '基础', routerLink: { name: 'ComponentSliderBase' } },
          { title: '范围滑动', routerLink: { name: 'ComponentSliderRange' } },
          { title: '只读', routerLink: { name: 'ComponentSliderReadonly' } },
          { title: '禁用', routerLink: { name: 'ComponentSliderDisabled' } }
        ]
      },
      {
        title: 'Input 输入框',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'input' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentInputSize' } },
          { title: '文本类型', routerLink: { name: 'ComponentInputText' } },
          { title: '搜索类型', routerLink: { name: 'ComponentInputSearch' } },
          // { title: '密码类型', routerLink: { name: 'ComponentInputPassword' } },
          // { title: '时间类型', routerLink: { name: 'ComponentInputTime' } },
          // { title: '日期类型', routerLink: { name: 'ComponentInputDate' } },
          // { title: '日期带时间类型', routerLink: { name: 'ComponentInputDatetime' } },
          // { title: '周类型', routerLink: { name: 'ComponentInputWeek' } },
          // { title: '月度类型', routerLink: { name: 'ComponentInputMonth' } },
          // { title: '季度类型', routerLink: { name: 'ComponentInputQuarter' } },
          // { title: '年度类型', routerLink: { name: 'ComponentInputYear' } },
          // { title: '数值类型', routerLink: { name: 'ComponentInputNumber' } },
          // { title: '整数类型', routerLink: { name: 'ComponentInputInteger' } },
          // { title: '小数类型', routerLink: { name: 'ComponentInputFloat' } },
          { title: '显示字数统计', routerLink: { name: 'ComponentInputCount' } },
          { title: '前缀图标', routerLink: { name: 'ComponentInputPrefix' } },
          { title: '后缀图标', routerLink: { name: 'ComponentInputSuffix' } },
          {
            title: '自定义插槽模板',
            children: [
              { title: '前缀插槽模板', routerLink: { name: 'ComponentInputTemplatePrefix' } },
              { title: '后缀插槽模板', routerLink: { name: 'ComponentInputTemplateSuffix' } }
            ]
          }
        ]
      },
      // { title: 'TextInput 单行文本输入' },
      {
        title: 'Textarea 多行文本输入',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'textarea' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentTextareaSize' } },
          { title: '禁用状态', routerLink: { name: 'ComponentTextareaDisabled' } },
          { title: '只读状态', routerLink: { name: 'ComponentTextareaReadonly' } },
          { title: '字数统计', routerLink: { name: 'ComponentTextareaCount' } },
          { title: '自适应高度', routerLink: { name: 'ComponentTextareaAutosize' } },
          { title: '可调节高度', routerLink: { name: 'ComponentTextareaResize' } }
        ]
      },
      {
        title: 'NumberInput 数值输入',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'number-input' } } },
          {
            title: '数值',
            children: [
              { title: '基础', routerLink: { name: 'ComponentNumberInputNumberBase' } },
              { title: '可清除', routerLink: { name: 'ComponentNumberInputNumberClearable' } },
              { title: '只读模式', routerLink: { name: 'ComponentNumberInputNumberReadonly' } },
              { title: '设置步数', routerLink: { name: 'ComponentNumberInputNumberStep' } },
              { title: '最小值与最大值', routerLink: { name: 'ComponentNumberInputNumberRange' } },
              { title: '控制按钮', routerLink: { name: 'ComponentNumberInputNumberControls' } },
              { title: '按钮布局', routerLink: { name: 'ComponentNumberInputNumberLayout' } },
              { title: '自定义按钮图标', routerLink: { name: 'ComponentNumberInputNumberControlIcon' } },
              { title: '前缀后缀图标', routerLink: { name: 'ComponentNumberInputNumberIcon' } },
              { title: '自定义模板', routerLink: { name: 'ComponentNumberInputNumberTemplate' } }
            ]
          },
          {
            title: '整数',
            children: [
              { title: '基础', routerLink: { name: 'ComponentNumberInputIntegerBase' } },
              { title: '可清除', routerLink: { name: 'ComponentNumberInputIntegerClearable' } },
              { title: '只读模式', routerLink: { name: 'ComponentNumberInputIntegerReadonly' } },
              { title: '设置步数', routerLink: { name: 'ComponentNumberInputIntegerStep' } },
              { title: '最小值与最大值', routerLink: { name: 'ComponentNumberInputIntegerRange' } },
              { title: '控制按钮', routerLink: { name: 'ComponentNumberInputIntegerControls' } }
            ]
          },
          {
            title: '小数',
            children: [
              { title: '基础', routerLink: { name: 'ComponentNumberInputFloatBase' } },
              { title: '可清除', routerLink: { name: 'ComponentNumberInputFloatClearable' } },
              { title: '只读模式', routerLink: { name: 'ComponentNumberInputFloatReadonly' } },
              { title: '设置步数', routerLink: { name: 'ComponentNumberInputFloatStep' } },
              { title: '小数位数', routerLink: { name: 'ComponentNumberInputFloatDigits' } },
              { title: '最小值与最大值', routerLink: { name: 'ComponentNumberInputFloatRange' } },
              { title: '自动补0', routerLink: { name: 'ComponentNumberInputFloatAutoFill' } },
              { title: '控制按钮', routerLink: { name: 'ComponentNumberInputFloatControls' } }
            ]
          },
          {
            title: '金额',
            children: [
              { title: '基础', routerLink: { name: 'ComponentNumberInputAmountBase' } },
              { title: '对其方式', routerLink: { name: 'ComponentNumberInputAmountAlign' } },
              { title: '可清除', routerLink: { name: 'ComponentNumberInputAmountClearable' } },
              { title: '只读模式', routerLink: { name: 'ComponentNumberInputAmountReadonly' } },
              { title: '设置步数', routerLink: { name: 'ComponentNumberInputAmountStep' } },
              { title: '小数位数', routerLink: { name: 'ComponentNumberInputAmountDigits' } },
              { title: '最小值与最大值', routerLink: { name: 'ComponentNumberInputAmountRange' } },
              { title: '自动补0', routerLink: { name: 'ComponentNumberInputAmountAutoFill' } },
              { title: '显示货币符号', routerLink: { name: 'ComponentNumberInputAmountShowCurrency' } },
              { title: '控制按钮', routerLink: { name: 'ComponentNumberInputAmountControls' } },
              { title: '按钮布局', routerLink: { name: 'ComponentNumberInputAmountLayout' } },
              { title: '自定义按钮图标', routerLink: { name: 'ComponentNumberInputAmountControlIcon' } },
              { title: '前缀后缀图标', routerLink: { name: 'ComponentNumberInputAmountIcon' } },
              { title: '自定义模板', routerLink: { name: 'ComponentNumberInputAmountTemplate' } }
            ]
          }
        ]
      },
      {
        title: 'PasswordInput 密码输入',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'password-input' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentPasswordInputSize' } },
          { title: '可清除', routerLink: { name: 'ComponentPasswordInputClearable' } },
          { title: '控制按钮', routerLink: { name: 'ComponentPasswordInputControls' } }
        ]
      },
      {
        title: 'ColorPicker 颜色选择',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'color-picker' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentColorPickerSize' } },
          { title: '可清除', routerLink: { name: 'ComponentColorPickerClearable' } },
          { title: '快捷颜色', routerLink: { name: 'ComponentColorPickerColors' } },
          { title: 'RGB 色值', routerLink: { name: 'ComponentColorPickerType' } },
          { title: '取色器', routerLink: { name: 'ComponentColorPickerShowEyeDropper' } }
        ]
      },
      {
        title: 'IconPicker 图标选择',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'icon-picker' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentIconPickerSize' } },
          { title: '可清除', routerLink: { name: 'ComponentIconPickerClearable' } },
          { title: '内置图标', routerLink: { name: 'ComponentIconPickerIcons' } },
          { title: '自定义图标', routerLink: { name: 'ComponentIconPickerCustomIcon' } },
          { title: '图标颜色', routerLink: { name: 'ComponentIconPickerColor' } },
          {
            i18nKey: 'app.aside.menu.iconPickerGlobalRenderer',
            children: [
              { title: 'API', routerLink: { name: 'GlobalRendererIconPickerAPI' } },
              { title: '选项图标', routerLink: { name: 'GlobalRendererIconPickerIcon' } }
            ]
          },
          { title: '使用第三方图标', isPlugin: true, linkUrl: `${otherUrl}/#/other-iconfont/symbol/icon-picker/icons` }
        ]
      },
      {
        title: 'DatePicker 日期选择',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'date-picker' } } },
          {
            title: '日期类型',
            children: [
              { title: '尺寸大小', routerLink: { name: 'ComponentDatePickerDateSize' } },
              { title: '绑定值', routerLink: { name: 'ComponentDatePickerDateBase' } },
              { title: '可清除', routerLink: { name: 'ComponentDatePickerDateClearable' } },
              { title: '禁用', routerLink: { name: 'ComponentDatePickerDateDisabled' } },
              { title: '查看模式', routerLink: { name: 'ComponentDatePickerDateReadonly' } },
              { title: '多选', routerLink: { name: 'ComponentDatePickerDateMultiple' } },
              { title: '自动关闭', routerLink: { name: 'ComponentDatePickerDateAutoClose' } },
              {
                title: '快捷按钮',
                children: [
                  { title: '内置 Code', routerLink: { name: 'ComponentDatePickerDateShortcutCode' } },
                  { title: '按钮状态颜色', routerLink: { name: 'ComponentDatePickerDateShortcutStatus' } },
                  { title: '显示位置', routerLink: { name: 'ComponentDatePickerDateShortcutPosition' } },
                  { title: '自定义按钮', routerLink: { name: 'ComponentDatePickerDateShortcutCustom' } }
                ]
              },
              { title: '限制日期范围', routerLink: { name: 'ComponentDatePickerDateMinMax' } },
              { title: '限制指定日期', routerLink: { name: 'ComponentDatePickerDateDisabledMethod' } },
              { title: '前缀图标', routerLink: { name: 'ComponentDatePickerDatePrefixIcon' } },
              { title: '后缀图标', routerLink: { name: 'ComponentDatePickerDateSuffixIcon' } },
              {
                title: '自定义插槽模板',
                children: [
                  { title: '自定义顶部模板', routerLink: { name: 'ComponentDatePickerDateTemplateTop' } },
                  { title: '自定义底部模板', routerLink: { name: 'ComponentDatePickerDateTemplateBottom' } },
                  { title: '自定义左侧模板', routerLink: { name: 'ComponentDatePickerDateTemplateLeft' } },
                  { title: '自定义右侧模板', routerLink: { name: 'ComponentDatePickerDateTemplateRight' } }
                ]
              }
            ]
          },
          {
            title: '时间类型',
            children: [
              { title: '尺寸大小', routerLink: { name: 'ComponentDatePickerTimeSize' } },
              { title: '绑定值', routerLink: { name: 'ComponentDatePickerTimeBase' } },
              { title: '禁用', routerLink: { name: 'ComponentDatePickerTimeDisabled' } },
              { title: '自定义格式', routerLink: { name: 'ComponentDatePickerTimeValueFormat' } },
              {
                title: '快捷按钮',
                children: [
                  // { title: '内置 Code', routerLink: { name: 'ComponentDatePickerTimeShortcutCode' } },
                  // { title: '按钮状态颜色', routerLink: { name: 'ComponentDatePickerTimeShortcutStatus' } },
                  // { title: '显示位置', routerLink: { name: 'ComponentDatePickerTimeShortcutPosition' } },
                  { title: '自定义按钮', routerLink: { name: 'ComponentDatePickerTimeShortcutCustom' } }
                ]
              },
              {
                title: '自定义插槽模板',
                children: [
                  { title: '自定义顶部模板', routerLink: { name: 'ComponentDatePickerTimeTemplateTop' } },
                  { title: '自定义底部模板', routerLink: { name: 'ComponentDatePickerTimeTemplateBottom' } },
                  { title: '自定义左侧模板', routerLink: { name: 'ComponentDatePickerTimeTemplateLeft' } },
                  { title: '自定义右侧模板', routerLink: { name: 'ComponentDatePickerTimeTemplateRight' } }
                ]
              }
            ]
          },
          {
            title: '日期带时间类型',
            children: [
              { title: '绑定值', routerLink: { name: 'ComponentDatePickerDatetimeBase' } },
              { title: '禁用', routerLink: { name: 'ComponentDatePickerDatetimeDisabled' } },
              { title: '多选', routerLink: { name: 'ComponentDatePickerDatetimeMultiple' } },
              { title: '自定义格式', routerLink: { name: 'ComponentDatePickerDatetimeValueFormat' } },
              {
                title: '快捷按钮',
                children: [
                  { title: '内置 Code', routerLink: { name: 'ComponentDatePickerDatetimeShortcutCode' } },
                  { title: '按钮状态颜色', routerLink: { name: 'ComponentDatePickerDatetimeShortcutStatus' } },
                  { title: '显示位置', routerLink: { name: 'ComponentDatePickerDatetimeShortcutPosition' } },
                  { title: '自定义按钮', routerLink: { name: 'ComponentDatePickerDatetimeShortcutCustom' } }
                ]
              },
              {
                title: '自定义插槽模板',
                children: [
                  { title: '自定义顶部模板', routerLink: { name: 'ComponentDatePickerDatetimeTemplateTop' } },
                  { title: '自定义底部模板', routerLink: { name: 'ComponentDatePickerDatetimeTemplateBottom' } },
                  { title: '自定义左侧模板', routerLink: { name: 'ComponentDatePickerDatetimeTemplateLeft' } },
                  { title: '自定义右侧模板', routerLink: { name: 'ComponentDatePickerDatetimeTemplateRight' } }
                ]
              }
            ]
          },
          {
            title: '周类型',
            children: [
              { title: '绑定值', routerLink: { name: 'ComponentDatePickerWeekBase' } },
              { title: '禁用', routerLink: { name: 'ComponentDatePickerWeekDisabled' } },
              { title: '多选', routerLink: { name: 'ComponentDatePickerWeekMultiple' } },
              { title: '自定义开始日', routerLink: { name: 'ComponentDatePickerWeekStartDay' } },
              { title: '自定义返回值', routerLink: { name: 'ComponentDatePickerWeekSelectDay' } },
              {
                title: '快捷按钮',
                children: [
                  { title: '内置 Code', routerLink: { name: 'ComponentDatePickerWeekShortcutCode' } },
                  { title: '按钮状态颜色', routerLink: { name: 'ComponentDatePickerWeekShortcutStatus' } },
                  { title: '显示位置', routerLink: { name: 'ComponentDatePickerWeekShortcutPosition' } },
                  { title: '自定义按钮', routerLink: { name: 'ComponentDatePickerWeekShortcutCustom' } }
                ]
              },
              {
                title: '自定义插槽模板',
                children: [
                  { title: '自定义顶部模板', routerLink: { name: 'ComponentDatePickerWeekTemplateTop' } },
                  { title: '自定义底部模板', routerLink: { name: 'ComponentDatePickerWeekTemplateBottom' } },
                  { title: '自定义左侧模板', routerLink: { name: 'ComponentDatePickerWeekTemplateLeft' } },
                  { title: '自定义右侧模板', routerLink: { name: 'ComponentDatePickerWeekTemplateRight' } }
                ]
              }
            ]
          },
          {
            title: '月度类型',
            children: [
              { title: '绑定值', routerLink: { name: 'ComponentDatePickerMonthBase' } },
              { title: '多选', routerLink: { name: 'ComponentDatePickerMonthMultiple' } },
              {
                title: '快捷按钮',
                children: [
                  { title: '内置 Code', routerLink: { name: 'ComponentDatePickerMonthShortcutCode' } },
                  { title: '按钮状态颜色', routerLink: { name: 'ComponentDatePickerMonthShortcutStatus' } },
                  { title: '显示位置', routerLink: { name: 'ComponentDatePickerMonthShortcutPosition' } },
                  { title: '自定义按钮', routerLink: { name: 'ComponentDatePickerMonthShortcutCustom' } }
                ]
              }
            ]
          },
          {
            title: '季度类型',
            children: [
              { title: '绑定值', routerLink: { name: 'ComponentDatePickerQuarterBase' } },
              { title: '多选', routerLink: { name: 'ComponentDatePickerQuarterMultiple' } },
              {
                title: '快捷按钮',
                children: [
                  { title: '内置 Code', routerLink: { name: 'ComponentDatePickerQuarterShortcutCode' } },
                  { title: '按钮状态颜色', routerLink: { name: 'ComponentDatePickerQuarterShortcutStatus' } },
                  { title: '显示位置', routerLink: { name: 'ComponentDatePickerQuarterShortcutPosition' } },
                  { title: '自定义按钮', routerLink: { name: 'ComponentDatePickerQuarterShortcutCustom' } }
                ]
              }
            ]
          },
          {
            title: '年度类型',
            children: [
              { title: '绑定值', routerLink: { name: 'ComponentDatePickerYearBase' } },
              { title: '多选', routerLink: { name: 'ComponentDatePickerYearMultiple' } },
              {
                title: '快捷按钮',
                children: [
                  { title: '内置 Code', routerLink: { name: 'ComponentDatePickerYearShortcutCode' } },
                  { title: '按钮状态颜色', routerLink: { name: 'ComponentDatePickerYearShortcutStatus' } },
                  { title: '显示位置', routerLink: { name: 'ComponentDatePickerYearShortcutPosition' } },
                  { title: '自定义按钮', routerLink: { name: 'ComponentDatePickerYearShortcutCustom' } }
                ]
              }
            ]
          },
          {
            title: '功能示例',
            children: [
              { title: '实现日期带小圆点', routerLink: { name: 'ComponentDatePickerFestivalMethod' } },
              { title: '实现农历及节假日', routerLink: { name: 'ComponentDatePickerHolidays' } }
            ]
          },
          {
            title: '快捷按钮指令（全局复用）',
            children: [
              { title: 'API', routerLink: { name: 'GlobalCommandsDatePickerAPI' } },
              { title: '快捷按钮', routerLink: { name: 'GlobalCommandsDatePickerBase' } }
            ]
          }
        ]
      },
      {
        title: 'DateRangePicker 日期范围选择',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'date-range-picker' } } },
          {
            title: '日期类型',
            children: [
              { title: '尺寸大小', routerLink: { name: 'ComponentDateRangePickerDateSize' } },
              { title: '绑定值', routerLink: { name: 'ComponentDateRangePickerDateBase' } },
              { title: '可清除', routerLink: { name: 'ComponentDateRangePickerDateClearable' } },
              { title: '禁用', routerLink: { name: 'ComponentDateRangePickerDateDisabled' } },
              { title: '自动关闭', routerLink: { name: 'ComponentDateRangePickerDateAutoClose' } },
              {
                title: '快捷按钮',
                children: [
                  { title: '内置 Code', routerLink: { name: 'ComponentDateRangePickerDateShortcutCode' } },
                  { title: '按钮状态颜色', routerLink: { name: 'ComponentDateRangePickerDateShortcutStatus' } },
                  { title: '显示位置', routerLink: { name: 'ComponentDateRangePickerDateShortcutPosition' } },
                  { title: '自定义按钮', routerLink: { name: 'ComponentDateRangePickerDateShortcutCustom' } }
                ]
              },
              { title: '前缀图标', routerLink: { name: 'ComponentDateRangePickerDatePrefixIcon' } },
              { title: '后缀图标', routerLink: { name: 'ComponentDateRangePickerDateSuffixIcon' } },
              {
                title: '自定义插槽模板',
                children: [
                  { title: '自定义顶部模板', routerLink: { name: 'ComponentDateRangePickerDateTemplateTop' } },
                  { title: '自定义底部模板', routerLink: { name: 'ComponentDateRangePickerDateTemplateBottom' } },
                  { title: '自定义左侧模板', routerLink: { name: 'ComponentDateRangePickerDateTemplateLeft' } },
                  { title: '自定义右侧模板', routerLink: { name: 'ComponentDateRangePickerDateTemplateRight' } }
                ]
              }
            ]
          },
          {
            title: '时间类型',
            children: [
              { title: '尺寸大小', routerLink: { name: 'ComponentDateRangePickerTimeSize' } },
              { title: '绑定值', routerLink: { name: 'ComponentDateRangePickerTimeBase' } },
              { title: '禁用', routerLink: { name: 'ComponentDateRangePickerTimeDisabled' } },
              { title: '自定义格式', routerLink: { name: 'ComponentDateRangePickerTimeValueFormat' } },
              {
                title: '快捷按钮',
                children: [
                  // { title: '内置 Code', routerLink: { name: 'ComponentDateRangePickerTimeShortcutCode' } },
                  // { title: '按钮状态颜色', routerLink: { name: 'ComponentDateRangePickerTimeShortcutStatus' } },
                  // { title: '显示位置', routerLink: { name: 'ComponentDateRangePickerTimeShortcutPosition' } },
                  { title: '自定义按钮', routerLink: { name: 'ComponentDateRangePickerTimeShortcutCustom' } }
                ]
              },
              {
                title: '自定义插槽模板',
                children: [
                  { title: '自定义顶部模板', routerLink: { name: 'ComponentDateRangePickerTimeTemplateTop' } },
                  { title: '自定义底部模板', routerLink: { name: 'ComponentDateRangePickerTimeTemplateBottom' } },
                  { title: '自定义左侧模板', routerLink: { name: 'ComponentDateRangePickerTimeTemplateLeft' } },
                  { title: '自定义右侧模板', routerLink: { name: 'ComponentDateRangePickerTimeTemplateRight' } }
                ]
              }
            ]
          },
          {
            title: '日期带时间类型',
            children: [
              { title: '绑定值', routerLink: { name: 'ComponentDateRangePickerDatetimeBase' } },
              { title: '禁用', routerLink: { name: 'ComponentDateRangePickerDatetimeDisabled' } },
              { title: '自定义格式', routerLink: { name: 'ComponentDateRangePickerDatetimeValueFormat' } },
              {
                title: '快捷按钮',
                children: [
                  { title: '内置 Code', routerLink: { name: 'ComponentDateRangePickerDatetimeShortcutCode' } },
                  { title: '按钮状态颜色', routerLink: { name: 'ComponentDateRangePickerDatetimeShortcutStatus' } },
                  { title: '显示位置', routerLink: { name: 'ComponentDateRangePickerDatetimeShortcutPosition' } },
                  { title: '自定义按钮', routerLink: { name: 'ComponentDateRangePickerDatetimeShortcutCustom' } }
                ]
              },
              {
                title: '自定义插槽模板',
                children: [
                  { title: '自定义顶部模板', routerLink: { name: 'ComponentDateRangePickerDatetimeTemplateTop' } },
                  { title: '自定义底部模板', routerLink: { name: 'ComponentDateRangePickerDatetimeTemplateBottom' } },
                  { title: '自定义左侧模板', routerLink: { name: 'ComponentDateRangePickerDatetimeTemplateLeft' } },
                  { title: '自定义右侧模板', routerLink: { name: 'ComponentDateRangePickerDatetimeTemplateRight' } }
                ]
              }
            ]
          },
          {
            title: '周类型',
            children: [
              { title: '绑定值', routerLink: { name: 'ComponentDateRangePickerWeekBase' } },
              { title: '禁用', routerLink: { name: 'ComponentDateRangePickerWeekDisabled' } },
              { title: '自定义开始日', routerLink: { name: 'ComponentDateRangePickerWeekStartDay' } },
              { title: '自定义返回值', routerLink: { name: 'ComponentDateRangePickerWeekSelectDay' } },
              {
                title: '快捷按钮',
                children: [
                  { title: '内置 Code', routerLink: { name: 'ComponentDateRangePickerWeekShortcutCode' } },
                  { title: '按钮状态颜色', routerLink: { name: 'ComponentDateRangePickerWeekShortcutStatus' } },
                  { title: '显示位置', routerLink: { name: 'ComponentDateRangePickerWeekShortcutPosition' } },
                  { title: '自定义按钮', routerLink: { name: 'ComponentDateRangePickerWeekShortcutCustom' } }
                ]
              },
              {
                title: '自定义插槽模板',
                children: [
                  { title: '自定义顶部模板', routerLink: { name: 'ComponentDateRangePickerWeekTemplateTop' } },
                  { title: '自定义底部模板', routerLink: { name: 'ComponentDateRangePickerWeekTemplateBottom' } },
                  { title: '自定义左侧模板', routerLink: { name: 'ComponentDateRangePickerWeekTemplateLeft' } },
                  { title: '自定义右侧模板', routerLink: { name: 'ComponentDateRangePickerWeekTemplateRight' } }
                ]
              }
            ]
          },
          {
            title: '月度类型',
            children: [
              { title: '绑定值', routerLink: { name: 'ComponentDateRangePickerMonthBase' } },
              {
                title: '快捷按钮',
                children: [
                  { title: '内置 Code', routerLink: { name: 'ComponentDateRangePickerMonthShortcutCode' } },
                  { title: '按钮状态颜色', routerLink: { name: 'ComponentDateRangePickerMonthShortcutStatus' } },
                  { title: '显示位置', routerLink: { name: 'ComponentDateRangePickerMonthShortcutPosition' } },
                  { title: '自定义按钮', routerLink: { name: 'ComponentDateRangePickerMonthShortcutCustom' } }
                ]
              }
            ]
          },
          {
            title: '季度类型',
            children: [
              { title: '绑定值', routerLink: { name: 'ComponentDateRangePickerQuarterBase' } },
              {
                title: '快捷按钮',
                children: [
                  { title: '内置 Code', routerLink: { name: 'ComponentDateRangePickerQuarterShortcutCode' } },
                  { title: '按钮状态颜色', routerLink: { name: 'ComponentDateRangePickerQuarterShortcutStatus' } },
                  { title: '显示位置', routerLink: { name: 'ComponentDateRangePickerQuarterShortcutPosition' } },
                  { title: '自定义按钮', routerLink: { name: 'ComponentDateRangePickerQuarterShortcutCustom' } }
                ]
              }
            ]
          },
          {
            title: '年度类型',
            children: [
              { title: '绑定值', routerLink: { name: 'ComponentDateRangePickerYearBase' } },
              {
                title: '快捷按钮',
                children: [
                  { title: '内置 Code', routerLink: { name: 'ComponentDateRangePickerYearShortcutCode' } },
                  { title: '按钮状态颜色', routerLink: { name: 'ComponentDateRangePickerYearShortcutStatus' } },
                  { title: '显示位置', routerLink: { name: 'ComponentDateRangePickerYearShortcutPosition' } },
                  { title: '自定义按钮', routerLink: { name: 'ComponentDateRangePickerYearShortcutCustom' } }
                ]
              }
            ]
          },
          {
            title: '功能示例',
            children: [
              { title: '实现日期带小圆点', routerLink: { name: 'ComponentDateRangePickerFestivalMethod' } },
              { title: '实现农历及节假日', routerLink: { name: 'ComponentDateRangePickerHolidays' } }
            ]
          },
          {
            title: '快捷按钮指令（全局复用）',
            children: [
              { title: 'API', routerLink: { name: 'GlobalCommandsDateRangePickerAPI' } },
              { title: '快捷按钮', routerLink: { name: 'GlobalCommandsDateRangePickerBase' } }
            ]
          }
        ]
      },
      {
        title: 'Select 下拉框',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'select' } } },
          {
            title: '基础',
            children: [
              { title: '尺寸大小', routerLink: { name: 'ComponentSelectBaseSize' } },
              { title: '可清除', routerLink: { name: 'ComponentSelectBaseClearable' } },
              { title: '禁用', routerLink: { name: 'ComponentSelectBaseDisabled' } },
              { title: '自定义图标', routerLink: { name: 'ComponentSelectBaseIcon' } },
              { title: '加载中', routerLink: { name: 'ComponentSelectBaseLoading' } },
              { title: '本地搜索', routerLink: { name: 'ComponentSelectBaseFilterable' } },
              { title: '远程搜索', routerLink: { name: 'ComponentSelectBaseRemote' } },
              { title: '分组', routerLink: { name: 'ComponentSelectBaseGroup' } },
              { title: '默认值', routerLink: { name: 'ComponentSelectBaseDefaultValue' } },
              { title: '多选', routerLink: { name: 'ComponentSelectBaseMultiple' } },
              { title: '限制最大数量', routerLink: { name: 'ComponentSelectBaseMax' } },
              { title: '可新增', routerLink: { name: 'ComponentSelectBaseAllowCreate' } },
              { title: '操作按钮', routerLink: { name: 'ComponentSelectBaseOperBtn' } },
              { title: '自定义插槽模板', routerLink: { name: 'ComponentSelectBaseTemplate' } },
              { title: '虚拟滚动（大量数据选项）', routerLink: { name: 'ComponentSelectBaseScroll' } }
            ]
          },
          {
            title: '配置式',
            children: [
              { title: '可清除', routerLink: { name: 'ComponentSelectConfigClearable' } },
              { title: '禁用', routerLink: { name: 'ComponentSelectConfigDisabled' } },
              { title: '加载中', routerLink: { name: 'ComponentSelectConfigLoading' } },
              { title: '本地搜索', routerLink: { name: 'ComponentSelectConfigFilterable' } },
              { title: '远程搜索', routerLink: { name: 'ComponentSelectConfigRemote' } },
              { title: '分组', routerLink: { name: 'ComponentSelectConfigGroup' } },
              { title: '默认值', routerLink: { name: 'ComponentSelectConfigDefaultValue' } },
              { title: '多选', routerLink: { name: 'ComponentSelectConfigMultiple' } },
              { title: '限制最大数量', routerLink: { name: 'ComponentSelectConfigMax' } },
              { title: '可新增', routerLink: { name: 'ComponentSelectConfigAllowCreate' } },
              { title: '操作按钮', routerLink: { name: 'ComponentSelectConfigOperBtn' } },
              { title: '自定义插槽模板', routerLink: { name: 'ComponentSelectConfigTemplate' } },
              { title: '虚拟滚动（大量数据选项）', routerLink: { name: 'ComponentSelectConfigScroll' } }
            ]
          }
        ]
      },
      {
        title: 'TreeSelect 下拉树选择',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tree-select' } } },
          {
            title: '基础',
            children: [
              { title: '尺寸大小', routerLink: { name: 'ComponentTreeSelectBaseSize' } },
              { title: '层级结构', routerLink: { name: 'ComponentTreeSelectBaseHierarchy' } },
              { title: '平级结构', routerLink: { name: 'ComponentTreeSelectBaseLeveling' } },
              { title: '多选', routerLink: { name: 'ComponentTreeSelectBaseMultiple' } },
              { title: '自定义图标', routerLink: { name: 'ComponentTreeSelectBaseIcon' } },
              { title: '自定义字段', routerLink: { name: 'ComponentTreeSelectBaseOptionProps' } },
              { title: '自定义宽高', routerLink: { name: 'ComponentTreeSelectBasePopupWH' } },
              { title: '连接线', routerLink: { name: 'ComponentTreeSelectBaseShowLine' } },
              { title: '默认展开', routerLink: { name: 'ComponentTreeSelectBaseExpandAll' } },
              { title: '选中子节点', routerLink: { name: 'ComponentTreeSelectBaseTrigger' } }
            ]
          },
          {
            title: '单选框',
            children: [
              { title: '显示单选框', routerLink: { name: 'ComponentTreeSelectRadioBase' } },
              { title: '选中子节点', routerLink: { name: 'ComponentTreeSelectRadioTrigger' } }
            ]
          },
          {
            title: '复选框',
            children: [
              { title: '显示复选框', routerLink: { name: 'ComponentTreeSelectCheckboxBase' } },
              { title: '节点不关联', routerLink: { name: 'ComponentTreeSelectCheckboxCheckStrictly' } },
              { title: '选中子节点', routerLink: { name: 'ComponentTreeSelectCheckboxTrigger' } }
            ]
          },
          {
            title: '搜索',
            children: [
              { title: '过滤节点', routerLink: { name: 'ComponentTreeSelectSearchFilterValue' } },
              { title: '自定义过滤方法', routerLink: { name: 'ComponentTreeSelectSearchFilterMethod' } }
            ]
          },
          {
            title: '操作按钮',
            children: [
              { title: '多选按钮', routerLink: { name: 'ComponentTreeSelectOperBtnChecked' } },
              { title: '展开收起按钮', routerLink: { name: 'ComponentTreeSelectOperBtnAll' } }
            ]
          },
          {
            title: '懒加载',
            children: [
              { title: '加载子节点', routerLink: { name: 'ComponentTreeSelectLazyBase' } },
              { title: '多选', routerLink: { name: 'ComponentTreeSelectLazyMultiple' } }
            ]
          },
          {
            title: '虚拟滚动',
            children: [
              { title: '纵向虚拟滚动', routerLink: { name: 'ComponentTreeSelectScrollBasics' } },
              { title: '可过滤', routerLink: { name: 'ComponentTreeSelectScrollFilter' } }
            ]
          }
        ]
      },
      {
        title: 'TableSelect 下拉表格选择',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'table-select' } } },
          {
            title: '基础',
            children: [
              { title: '尺寸大小', routerLink: { name: 'ComponentTableSelectBaseSize' } },
              { title: '加载中', routerLink: { name: 'ComponentTableSelectBaseLoading' } },
              { title: '边框', routerLink: { name: 'ComponentTableSelectBaseBorder' } },
              { title: '自定义字段', routerLink: { name: 'ComponentTableSelectBaseOptionProps' } },
              { title: '自定义宽高', routerLink: { name: 'ComponentTableSelectBasePopupWH' } },
              { title: '表尾数据', routerLink: { name: 'ComponentTableSelectBaseFooter' } }
            ]
          },
          {
            title: '复选框',
            children: [
              { title: '显示复选框', routerLink: { name: 'ComponentTableSelectCheckboxBase' } },
              { title: '选中子节点', routerLink: { name: 'ComponentTableSelectCheckboxTrigger' } }
            ]
          },
          {
            title: '查询表单',
            children: [
              { title: '查询表单', routerLink: { name: 'ComponentTableSelectFormSearch' } },
              { title: '折叠表单', routerLink: { name: 'ComponentTableSelectFormCollapse' } }
            ]
          },
          {
            title: '分页',
            children: [
              { title: '数据分页', routerLink: { name: 'ComponentTableSelectPagerPage' } }
            ]
          },
          {
            title: '虚拟滚动（大量数据选项）',
            children: [
              { title: '纵向虚拟滚动', routerLink: { name: 'ComponentTableSelectScrollVertical' } },
              { title: '横向虚拟滚动', routerLink: { name: 'ComponentTableSelectScrollHorizontal' } },
              { title: '纵向和横向虚拟滚动', routerLink: { name: 'ComponentTableSelectScrollHV' } },
              { title: '使用分组表头', routerLink: { name: 'ComponentTableSelectScrollGroup' } }
            ]
          }
        ]
      },
      {
        title: 'Upload 上传',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'upload' } } },
          {
            title: '全局调用',
            children: [
              { title: '读取文件', routerLink: { name: 'ComponentUploadGlobalReadFile' } },
              { title: '下载文件', routerLink: { name: 'ComponentUploadGlobalSaveFile' } }
            ]
          },
          {
            title: '文件上传',
            children: [
              { title: '尺寸大小', routerLink: { name: 'ComponentUploadFileSize' } },
              { title: '单选模式', routerLink: { name: 'ComponentUploadFileBase' } },
              { title: '只读状态', routerLink: { name: 'ComponentUploadFileReadonly' } },
              { title: '禁用状态', routerLink: { name: 'ComponentUploadFileDisabled' } },
              { title: '上传方法', routerLink: { name: 'ComponentUploadFileUploadMethod' } },
              { title: '下载文件', routerLink: { name: 'ComponentUploadFileDownloadMethod' } },
              { title: '阻止下载', routerLink: { name: 'ComponentUploadFileBeforeDownloadMethod' } },
              { title: '多选模式', routerLink: { name: 'ComponentUploadFileMultiple' } },
              { title: '提示', routerLink: { name: 'ComponentUploadFileTip' } },
              { title: '拖拽上传', routerLink: { name: 'ComponentUploadFileDragToUpload' } },
              { title: '粘贴上传', routerLink: { name: 'ComponentUploadFilePasteToUpload' } },
              { title: '上传进度', routerLink: { name: 'ComponentUploadFileProgress' } },
              { title: '唯一值模式', routerLink: { name: 'ComponentUploadFileSingleMode' } },
              { title: 'URL 模式', routerLink: { name: 'ComponentUploadFileUrlMode' } },
              { title: '指定文件类型', routerLink: { name: 'ComponentUploadFileTypes' } },
              { title: '限制上传数量', routerLink: { name: 'ComponentUploadFileLimitCount' } },
              { title: '限制附件大小', routerLink: { name: 'ComponentUploadFileLimitSize' } },
              { title: '删除文件', routerLink: { name: 'ComponentUploadFileRemoveMethod' } },
              { title: '阻止删除', routerLink: { name: 'ComponentUploadFileBeforeRemoveMethod' } },
              { title: '自定义上传按钮', routerLink: { name: 'ComponentUploadFileShowUploadButton' } },
              { title: '自动隐藏上传按钮', routerLink: { name: 'ComponentUploadFileAutoHidden' } },
              { title: '显示更多', routerLink: { name: 'ComponentUploadFileMoreBtn' } },
              { title: '拖拽调整顺序', routerLink: { name: 'ComponentUploadFileDragSort' } },
              { title: '失败重新上传', routerLink: { name: 'ComponentUploadFileShowError' } },
              { title: '手动上传', routerLink: { name: 'ComponentUploadFileManualSubmit' } },
              { title: '自定义操作按钮', routerLink: { name: 'ComponentUploadFileCorner' } }
            ]
          },
          {
            title: '图片上传',
            children: [
              { title: '尺寸大小', routerLink: { name: 'ComponentUploadImageSize' } },
              { title: '单选模式', routerLink: { name: 'ComponentUploadImageBase' } },
              { title: '只读状态', routerLink: { name: 'ComponentUploadImageReadonly' } },
              { title: '禁用状态', routerLink: { name: 'ComponentUploadImageDisabled' } },
              { title: '自定义图片宽高', routerLink: { name: 'ComponentUploadImageImgStyle' } },
              { title: '圆形图片', routerLink: { name: 'ComponentUploadImageCircle' } },
              { title: '下载文件', routerLink: { name: 'ComponentUploadImageDownloadMethod' } },
              { title: '上传方法', routerLink: { name: 'ComponentUploadImageUploadMethod' } },
              { title: '阻止下载', routerLink: { name: 'ComponentUploadImageBeforeDownloadMethod' } },
              { title: '多选模式', routerLink: { name: 'ComponentUploadImageMultiple' } },
              { title: '提示', routerLink: { name: 'ComponentUploadImageTip' } },
              { title: '拖拽上传', routerLink: { name: 'ComponentUploadImageDragToUpload' } },
              { title: '粘贴上传', routerLink: { name: 'ComponentUploadImagePasteToUpload' } },
              { title: '上传进度', routerLink: { name: 'ComponentUploadImageProgress' } },
              { title: '唯一值模式', routerLink: { name: 'ComponentUploadImageSingleMode' } },
              { title: 'URL 模式', routerLink: { name: 'ComponentUploadImageUrlMode' } },
              { title: '缩略图链接地址', routerLink: { name: 'ComponentUploadImageThumbnailUrl' } },
              { title: '指定文件类型', routerLink: { name: 'ComponentUploadImageTypes' } },
              { title: '限制上传数量', routerLink: { name: 'ComponentUploadImageLimitCount' } },
              { title: '限制附件大小', routerLink: { name: 'ComponentUploadImageLimitSize' } },
              { title: '删除图片', routerLink: { name: 'ComponentUploadImageRemoveMethod' } },
              { title: '阻止删除', routerLink: { name: 'ComponentUploadImageBeforeRemoveMethod' } },
              { title: '自定义上传按钮', routerLink: { name: 'ComponentUploadImageShowUploadButton' } },
              { title: '自动隐藏按钮', routerLink: { name: 'ComponentUploadImageAutoHidden' } },
              { title: '显示更多', routerLink: { name: 'ComponentUploadImageMoreBtn' } },
              { title: '拖拽调整顺序', routerLink: { name: 'ComponentUploadImageDragSort' } },
              { title: '失败重新上传', routerLink: { name: 'ComponentUploadImageShowError' } },
              { title: '手动上传', routerLink: { name: 'ComponentUploadImageManualSubmit' } },
              { title: '自定义操作按钮', routerLink: { name: 'ComponentUploadImageCorner' } }
            ]
          }
        ]
      }
      // { title: 'Transfer 穿梭框' }
    ]
  },
  tableNavConfig,
  {
    i18nKey: 'app.aside.menu.treeTitle',
    children: [
      { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tree' } } },
      {
        title: '基础',
        children: [
          { title: '基础', routerLink: { name: 'ComponentTreeBaseBasics' } },
          { title: '尺寸大小', routerLink: { name: 'ComponentTreeBaseSize' } },
          { title: '层级结构', routerLink: { name: 'ComponentTreeBaseHierarchy' } },
          { title: '平级结构', routerLink: { name: 'ComponentTreeBaseLeveling' } },
          { title: '高度', routerLink: { name: 'ComponentTreeBaseHeight' } },
          { title: '加载中', routerLink: { name: 'ComponentTreeBaseLoading' } },
          { title: '自定义字段', routerLink: { name: 'ComponentTreeBaseField' } },
          { title: '触发方式', routerLink: { name: 'ComponentTreeBaseTrigger' } },
          { title: '隐藏图标', routerLink: { name: 'ComponentTreeBaseShowIcon' } },
          { title: '自定义图标', routerLink: { name: 'ComponentTreeBaseIcon' } },
          { title: '手风琴展开效果', routerLink: { name: 'ComponentTreeBaseAccordion' } },
          { title: '连接线', routerLink: { name: 'ComponentTreeBaseShowLine' } },
          { title: '默认展开', routerLink: { name: 'ComponentTreeBaseExpandAll' } }
        ]
      },
      {
        title: '高亮节点',
        children: [
          { title: '当前节点', routerLink: { name: 'ComponentTreeCurrentBase' } },
          { title: '触发方式', routerLink: { name: 'ComponentTreeCurrentTrigger' } },
          { title: '禁用', routerLink: { name: 'ComponentTreeCurrentCurrentMethod' } }
        ]
      },
      {
        title: '单选框',
        children: [
          { title: '单选', routerLink: { name: 'ComponentTreeRadioBase' } },
          { title: '高亮选中节点', routerLink: { name: 'ComponentTreeRadioHighlight' } },
          { title: '默认选中', routerLink: { name: 'ComponentTreeRadioDefaultSelect' } },
          { title: '禁用', routerLink: { name: 'ComponentTreeRadioCheckMethod' } },
          { title: '显示隐藏', routerLink: { name: 'ComponentTreeRadioVisibleMethod' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentTreeRadioTemplate' } }
        ]
      },
      {
        title: '复选框',
        children: [
          { title: '多选', routerLink: { name: 'ComponentTreeCheckboxBase' } },
          { title: '高亮选中节点', routerLink: { name: 'ComponentTreeCheckboxHighlight' } },
          { title: '默认选中', routerLink: { name: 'ComponentTreeCheckboxDefaultSelect' } },
          { title: '节点不关联', routerLink: { name: 'ComponentTreeCheckboxCheckStrictly' } },
          { title: '禁用', routerLink: { name: 'ComponentTreeCheckboxCheckMethod' } },
          { title: '显示隐藏', routerLink: { name: 'ComponentTreeCheckboxVisibleMethod' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentTreeCheckboxTemplate' } }
        ]
      },
      {
        title: '搜索',
        children: [
          { title: '过滤节点', routerLink: { name: 'ComponentTreeSearchFilterValue' } },
          { title: '自定义过滤方法', routerLink: { name: 'ComponentTreeSearchFilterMethod' } },
          { title: '实现关键字高亮', routerLink: { name: 'ComponentTreeSearchLight' } }
        ]
      },
      {
        title: '懒加载',
        children: [
          { title: '懒加载子节点', routerLink: { name: 'ComponentTreeLazyLoadMethod' } },
          { title: '加载失败', routerLink: { name: 'ComponentTreeLazyError' } },
          { title: '显示连接线', routerLink: { name: 'ComponentTreeLazyShowLine' } }
        ]
      },
      {
        title: '虚拟滚动',
        children: [
          { title: '纵向虚拟滚动', routerLink: { name: 'ComponentTreeScrollBasics' } },
          { title: '函数式加载', routerLink: { name: 'ComponentTreeScrollLoadData' } }
        ]
      },
      {
        title: '自定义插槽模板',
        children: [
          { title: '自定义标题模板', routerLink: { name: 'ComponentTreeTemplateTitle' } },
          { title: '自定义图标模板', routerLink: { name: 'ComponentTreeTemplateIcon' } },
          { title: '自定义右侧模板', routerLink: { name: 'ComponentTreeTemplateExtra' } },
          { title: '自定义头部模板', routerLink: { name: 'ComponentTreeTemplateHeader' } },
          { title: '自定义尾部模板', routerLink: { name: 'ComponentTreeTemplateFooter' } }
        ]
      }
    ]
  },
  {
    i18nKey: 'app.aside.menu.feedbackTitle',
    children: [
      {
        i18nKey: 'app.aside.menu.emptyTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'empty' } } },
          { title: '基础', routerLink: { name: 'ComponentEmptyBase' } },
          { title: '自定义图标', routerLink: { name: 'ComponentEmptyIcon' } },
          { title: '状态颜色', routerLink: { name: 'ComponentEmptyStatus' } },
          { title: '自定义图片', routerLink: { name: 'ComponentEmptyImageUrl' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.resultTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'result' } } },
          { title: '基础', routerLink: { name: 'ComponentResultBase' } },
          { title: '自定义图标', routerLink: { name: 'ComponentResultIcon' } },
          { title: '状态颜色', routerLink: { name: 'ComponentResultStatus' } },
          { title: '自定义图片', routerLink: { name: 'ComponentResultImageUrl' } },
          { title: '自定义操作按钮', routerLink: { name: 'ComponentResultExtra' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.noticeBarTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'notice-bar' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentNoticeBarSize' } },
          { title: '横向滚动', routerLink: { name: 'ComponentNoticeBarHorizontal' } },
          { title: '滚动方向', routerLink: { name: 'ComponentNoticeBarDirection' } },
          { title: '滚动速度', routerLink: { name: 'ComponentNoticeBarSpeed' } },
          { title: '动画时间', routerLink: { name: 'ComponentNoticeBarDuration' } },
          {
            title: '自定义插槽模板',
            children: [
              { title: '自定义内容模板', routerLink: { name: 'ComponentNoticeBarTemplateDefault' } },
              { title: '自定义前缀模板', routerLink: { name: 'ComponentNoticeBarTemplatePrefix' } },
              { title: '自定义后缀模板', routerLink: { name: 'ComponentNoticeBarTemplateSuffix' } }
            ]
          }
        ]
      },
      {
        i18nKey: 'app.aside.menu.loadingTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'loading' } } },
          { title: '全局调用', routerLink: { name: 'ComponentLoadingGlobalLoading' } },
          { title: '加载中', routerLink: { name: 'ComponentLoadingBase' } },
          { title: '状态', routerLink: { name: 'ComponentLoadingStatus' } },
          { title: '自定义图标', routerLink: { name: 'ComponentLoadingIcon' } },
          { title: '自定义提示', routerLink: { name: 'ComponentLoadingText' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentLoadingTemplate' } }
        ]
      },
      {
        title: 'Tip 提示',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tip' } } },
          { title: '状态', routerLink: { name: 'ComponentTipBase' } },
          { title: '图标', routerLink: { name: 'ComponentTipIcon' } },
          { title: '带标题', routerLink: { name: 'ComponentTipTitle' } }
        ]
      },
      {
        title: 'Alert 警告提示',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'alert' } } },
          { title: '状态', routerLink: { name: 'ComponentAlertBase' } },
          { title: '图标', routerLink: { name: 'ComponentAlertIcon' } },
          { title: '带标题', routerLink: { name: 'ComponentAlertTitle' } },
          { title: '可关闭', routerLink: { name: 'ComponentAlertClose' } }
        ]
      },
      {
        title: 'Drawer 抽屉',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'drawer' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentDrawerSize' } },
          { title: '自定义弹出方向', routerLink: { name: 'ComponentDrawerBase' } },
          { title: '宽度与高度', routerLink: { name: 'ComponentDrawerWH' } },
          { title: '内边距', routerLink: { name: 'ComponentDrawerPadding' } },
          { title: '加载中', routerLink: { name: 'ComponentDrawerLoading' } },
          { title: '点击遮罩层关闭', routerLink: { name: 'ComponentDrawerMaskClosable' } },
          { title: '操作按钮', routerLink: { name: 'ComponentDrawerButton' } },
          { title: '点击确认按钮不可关闭', routerLink: { name: 'ComponentDrawerConfirmClosable' } },
          { title: '点击取消按钮不可关闭', routerLink: { name: 'ComponentDrawerCancelClosable' } },
          { title: '同时弹出多个抽屉', routerLink: { name: 'ComponentDrawerMultiple' } },
          { title: '拖拽调整大小', routerLink: { name: 'ComponentDrawerEscResize' } },
          { title: '按 Esc 键可关闭', routerLink: { name: 'ComponentDrawerEscClosable' } },
          { title: '拦截关闭', routerLink: { name: 'ComponentDrawerBeforeHide' } },
          { title: '自定义模板', routerLink: { name: 'ComponentDrawerTemplateFooter' } },
          { title: '完整插槽模板', routerLink: { name: 'ComponentDrawerTemplateLayout' } },
          { title: '嵌入 iframe', routerLink: { name: 'ComponentDrawerIframe' } }
        ]
      },
      // { title: 'Popover 气泡提示框' },
      {
        title: 'Tooltip 文字提示',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tooltip' } } },
          { title: '触发方式', routerLink: { name: 'ComponentTooltipTrigger' } },
          { title: '可操作', routerLink: { name: 'ComponentTooltipEnterable' } },
          { title: '手动模式', routerLink: { name: 'ComponentTooltipManual' } },
          { title: '单例模式', routerLink: { name: 'ComponentTooltipSingle' } },
          { title: '在表格中使用', routerLink: { name: 'ComponentTooltipTable' } }
        ]
      }
    ]
  },
  {
    i18nKey: 'app.aside.menu.modalTitle',
    children: [
      { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'modal' } } },
      {
        i18nKey: 'app.aside.menu.modalMessageTitle',
        children: [
          { title: '全局调用', routerLink: { name: 'ComponentModalMessageGlobal' } },
          { title: '唯一', routerLink: { name: 'ComponentModalMessageMultiple' } },
          { title: '状态提示', routerLink: { name: 'ComponentModalMessageStatus' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentModalMessageTemplate' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.modalNotificationTitle',
        children: [
          { title: '全局调用', routerLink: { name: 'ComponentModalNotificationGlobal' } },
          { title: '唯一', routerLink: { name: 'ComponentModalNotificationMultiple' } },
          { title: '状态提示', routerLink: { name: 'ComponentModalNotificationStatus' } },
          { title: '带操作按钮', routerLink: { name: 'ComponentModalNotificationFooter' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentModalNotificationTemplate' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.modalAlertTitle',
        children: [
          { title: '全局调用', routerLink: { name: 'ComponentModalAlertGlobal' } },
          { title: '弹出多个', routerLink: { name: 'ComponentModalAlertMultiple' } },
          { title: '禁止拖动', routerLink: { name: 'ComponentModalAlertDraggable' } },
          { title: '按 Esc 键可关闭', routerLink: { name: 'ComponentModalAlertEscClosable' } },
          { title: '状态提示', routerLink: { name: 'ComponentModalAlertStatus' } },
          { title: '手动关闭', routerLink: { name: 'ComponentModalAlertManual' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentModalAlertTemplate' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.modalConfirmTitle',
        children: [
          { title: '全局调用', routerLink: { name: 'ComponentModalConfirmGlobal' } },
          { title: '弹出多个', routerLink: { name: 'ComponentModalConfirmMultiple' } },
          { title: '禁止拖动', routerLink: { name: 'ComponentModalConfirmDraggable' } },
          { title: '按 Esc 键可关闭', routerLink: { name: 'ComponentModalConfirmEscClosable' } },
          { title: '手动关闭', routerLink: { name: 'ComponentModalConfirmManual' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentModalConfirmTemplate' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.modalModalTitle',
        children: [
          { title: '全局调用', routerLink: { name: 'ComponentModalModalGlobal' } },
          { title: '弹窗', routerLink: { name: 'ComponentModalModalBase' } },
          { title: '尺寸大小', routerLink: { name: 'ComponentModalModalSize' } },
          { title: '自定义模板', routerLink: { name: 'ComponentModalModalTemplateFooter' } },
          { title: '完整插槽模板', routerLink: { name: 'ComponentModalModalTemplateLayout' } },
          { title: '内边距', routerLink: { name: 'ComponentModalModalPadding' } },
          { title: '加载中', routerLink: { name: 'ComponentModalModalLoading' } },
          { title: '遮罩层', routerLink: { name: 'ComponentModalModalMask' } },
          { title: '锁页面滚动条', routerLink: { name: 'ComponentModalModalLockScroll' } },
          { title: '锁定页面操作', routerLink: { name: 'ComponentModalModalLockView' } },
          { title: '拖动窗口', routerLink: { name: 'ComponentModalModalDraggable' } },
          { title: '同时弹出多个窗口', routerLink: { name: 'ComponentModalModalMultiple' } },
          { title: '按 Esc 键可关闭', routerLink: { name: 'ComponentModalModalEscClosable' } },
          { title: '拦截关闭', routerLink: { name: 'ComponentModalModalBeforeHide' } },
          { title: '操作按钮', routerLink: { name: 'ComponentModalModalButton' } },
          { title: '点击确认按钮不可关闭', routerLink: { name: 'ComponentModalModalConfirmClosable' } },
          { title: '点击取消按钮不可关闭', routerLink: { name: 'ComponentModalModalCancelClosable' } },
          { title: '拖动调整宽高', routerLink: { name: 'ComponentModalModalResize' } },
          { title: '全屏展示', routerLink: { name: 'ComponentModalModalFullscreen' } },
          { title: '窗口最大化', routerLink: { name: 'ComponentModalModalMaximize' } },
          { title: '窗口最小化', routerLink: { name: 'ComponentModalModalMinimize' } },
          { title: '最大化与最小化', routerLink: { name: 'ComponentModalModalZoom' } },
          { title: '自定义窗口最小化的排列方式', routerLink: { name: 'ComponentModalModalMinimizeLayout' } },
          { title: '保留状态', routerLink: { name: 'ComponentModalModalRemember' } },
          { title: '记忆功能', routerLink: { name: 'ComponentModalModalStorage' } },
          { title: '嵌入 iframe', routerLink: { name: 'ComponentModalModalIframe' } },
          { title: '手动操作', routerLink: { name: 'ComponentModalModalManual' } },
          { title: '完整功能', routerLink: { name: 'ComponentModalModalFull' } }
        ]
      },
      {
        title: '功能示例',
        children: [
          { title: '弹窗与表单', routerLink: { name: 'ComponentModalModalOtherForm' } },
          { title: '弹窗与表格', routerLink: { name: 'ComponentModalModalOtherTable' } },
          { title: '弹窗中实现左边树和右边表格', routerLink: { name: 'ComponentModalModalOtherLeftRight' } }
        ]
      }
    ]
  },
  {
    i18nKey: 'app.aside.menu.otherTitle',
    children: [
      {
        title: 'Watermark 水印',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'watermark' } } },
          { title: '全局调用', routerLink: { name: 'ComponentWatermarkGlobal' } },
          { title: '基础', routerLink: { name: 'ComponentWatermarkBase' } },
          { title: '字体颜色', routerLink: { name: 'ComponentWatermarkColor' } },
          { title: '字体大小', routerLink: { name: 'ComponentWatermarkFontSize' } },
          { title: '表格水印', routerLink: { name: 'ComponentWatermarkTable' } },
          { title: '表单水印', routerLink: { name: 'ComponentWatermarkForm' } }
        ]
      },
      {
        title: 'Countdown 倒计时',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'countdown' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentCountdownSize' } },
          { title: '基础', routerLink: { name: 'ComponentCountdownBase' } },
          { title: '格式化', routerLink: { name: 'ComponentCountdownFormat' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentCountdownTemplate' } }
        ]
      },
      {
        i18nKey: 'app.aside.menu.printTitle',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'print' } } },
          {
            title: '全局调用',
            children: [
              { title: '打印', routerLink: { name: 'ComponentPrintGlobalPrint' } }
            ]
          },
          {
            title: '常规打印',
            children: [
              { title: '打印 HTML', routerLink: { name: 'ComponentPrintBaseHtml' } },
              { title: '打印图片', routerLink: { name: 'ComponentPrintBaseImg' } },
              { title: '打印表格', routerLink: { name: 'ComponentPrintBaseTable' } }
            ]
          },
          {
            title: '分页打印',
            children: [
              { title: '基础', routerLink: { name: 'ComponentPrintPageBasics' } },
              { title: '页眉/标题', routerLink: { name: 'ComponentPrintPageHeader' } },
              { title: '页尾/页码', routerLink: { name: 'ComponentPrintPageFooter' } },
              { title: '设置边距', routerLink: { name: 'ComponentPrintPageMargin' } },
              { title: '批量打印图片', routerLink: { name: 'ComponentPrintPageImage' } },
              { title: '分页打印表格', routerLink: { name: 'ComponentPrintPageTable' } },
              { title: '自定义模板', routerLink: { name: 'ComponentPrintPageTemplate' } }
            ]
          }
        ]
      }
    ]
  },
  designNavConfig,
  {
    title: 'API',
    isExpand: true,
    children: []
  }
]
