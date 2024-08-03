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

const tableNavConfig: NavVO & { children: NavVO[] } = {
  i18nKey: 'app.aside.menu.tableTitle',
  children: [
    {
      i18nKey: 'app.aside.menu.tableTableTitle',
      children: [
        { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'table' } } },
        {
          title: '基础功能',
          children: [
            { title: '基础', routerLink: { name: 'ComponentTableBaseBasic' } },
            { title: '尺寸大小', routerLink: { name: 'ComponentTableBaseSize' } },
            { title: '数据类型', routerLink: { name: 'ComponentTableBaseData' } },
            { title: '空数据提示', routerLink: { name: 'ComponentTableBaseEmpty' } },
            { title: '边框', routerLink: { name: 'ComponentTableBaseBorder' } },
            { title: '圆角', routerLink: { name: 'ComponentTableBaseRound' } },
            { title: '对齐方式', routerLink: { name: 'ComponentTableBaseAlign' } },
            { title: '列宽', routerLink: { name: 'ComponentTableBaseWidth' } },
            { title: '自动换行', routerLink: { name: 'ComponentTableBaseAutoBreak' } },
            { title: '溢出隐藏', routerLink: { name: 'ComponentTableBaseOverflow' } },
            { title: '文本提示', routerLink: { name: 'ComponentTableBaseTooltip' } },
            { title: '滚动条样式', routerLink: { name: 'ComponentTableBaseScrollStyle' } },
            { title: '斑马线样式', routerLink: { name: 'ComponentTableBaseStripe' } },
            { title: '单元格样式', routerLink: { name: 'ComponentTableBaseStyle' } },
            { title: '动态样式', routerLink: { name: 'ComponentTableBaseDynamicStyle' } },
            { title: '隐藏表头', routerLink: { name: 'ComponentTableBaseHeader' } },
            { title: '高亮列', routerLink: { name: 'ComponentTableBaseCurrentColumn' } },
            { title: '高亮行', routerLink: { name: 'ComponentTableBaseCurrentRow' } },
            { title: '拖拽调整列宽', routerLink: { name: 'ComponentTableBaseHeaderResizable' } },
            { title: '表格最小高度', routerLink: { name: 'ComponentTableBaseHeaderMinHeight' } },
            { title: '表格高度', routerLink: { name: 'ComponentTableBaseHeight' } },
            { title: '表格最大高度', routerLink: { name: 'ComponentTableBaseMaxHeight' } },
            { title: '表格响应式高度', routerLink: { name: 'ComponentTableBaseAutoHeight' } },
            { title: '设置行度', routerLink: { name: 'ComponentTableBaseRowHeight' } },
            { title: '冻结列', routerLink: { name: 'ComponentTableBaseFixed' } },
            { title: '冻结表头和列', routerLink: { name: 'ComponentTableBaseFixedFull' } },
            { title: '分组表头', routerLink: { name: 'ComponentTableBaseGroup' } },
            { title: '排序', routerLink: { name: 'ComponentTableBaseSort' } },
            { title: '筛选', routerLink: { name: 'ComponentTableBaseFilter' } },
            { title: '加载中', routerLink: { name: 'ComponentTableBaseLoading' } },
            { title: '格式化内容', routerLink: { name: 'ComponentTableBaseFormat' } },
            { title: '序号', routerLink: { name: 'ComponentTableBaseSeq' } },
            { title: '单选框', routerLink: { name: 'ComponentTableBaseRadio' } },
            { title: '复选框', routerLink: { name: 'ComponentTableBaseSelection' } },
            { title: '标题前缀图标', routerLink: { name: 'ComponentTableBaseTitlePrefix' } },
            { title: '标题后缀图标', routerLink: { name: 'ComponentTableBaseTitleSuffix' } },
            { title: 'HTML 类型', routerLink: { name: 'ComponentTableBaseHtml' } },
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
            { title: '实现横向树', routerLink: { name: 'ComponentTableMergeHorizontal' } }
          ]
        },
        {
          title: '表尾数据',
          children: [
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
            { title: '显示隐藏', routerLink: { name: 'ComponentTableRadioVisibleMethod' } }
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
            { title: '范围选择与单元格选取', isEnterprise: true, linkUrl: 'https://vxetable.cn/pluginDocs/table/#/extendCellArea/grid/areaCheckbox' }
          ]
        },
        {
          title: '排序',
          children: [
            { title: '多字段排序', routerLink: { name: 'ComponentTableSortMultiple' } },
            { title: '触发方式', routerLink: { name: 'ComponentTableSortTrigger' } },
            { title: '自定义轮询', routerLink: { name: 'ComponentTableSortOrders' } },
            { title: '设置默认排序', routerLink: { name: 'ComponentTableSortDefaultSort' } },
            { title: '服务端排序', routerLink: { name: 'ComponentTableSortRemote' } },
            { title: '设置值的类型', routerLink: { name: 'ComponentTableSortSortType' } },
            { title: '自定义排序方法', routerLink: { name: 'ComponentTableSortSortMethod' } }
          ]
        },
        {
          title: '筛选',
          children: [
            { title: '修改筛选选项', routerLink: { name: 'ComponentTableFilterOptions' } },
            { title: '服务端筛选', routerLink: { name: 'ComponentTableFilterRemote' } },
            { title: '实现列头筛选', routerLink: { name: 'ComponentTableFilterHeader' } },
            { title: '手动操作筛选', routerLink: { name: 'ComponentTableFilterManual' } }
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
            { title: '展开与关闭的控制', routerLink: { name: 'ComponentTableExpandToggleMethod' } }
          ]
        },
        {
          title: '右键菜单',
          children: [
            { title: '表头菜单', routerLink: { name: 'ComponentTableMenuHeader' } },
            { title: '单元格菜单', routerLink: { name: 'ComponentTableMenuBody' } },
            { title: '表尾菜单', routerLink: { name: 'ComponentTableMenuFooter' } },
            { title: '完整右键菜单', routerLink: { name: 'ComponentTableMenuFull' } },
            { title: '菜单权限控制', routerLink: { name: 'ComponentTableMenuPrivilege' } }
          ]
        },
        {
          title: '工具栏',
          children: [
            { title: '工具栏布局', routerLink: { name: 'ComponentTableToolbarBasic' } },
            { title: '自定义列功能', routerLink: { name: 'ComponentTableToolbarCustom' } },
            { title: '打印功能', routerLink: { name: 'ComponentTableToolbarPrint' } },
            { title: '导入功能', routerLink: { name: 'ComponentTableToolbarImport' } },
            { title: '导出功能', routerLink: { name: 'ComponentTableToolbarExport' } }
          ]
        },
        {
          title: '自定义列',
          children: [
            { title: '关联工具栏', routerLink: { name: 'ComponentTableCustomToolbar' } },
            { title: '窗口模式', routerLink: { name: 'ComponentTableCustomModal' } },
            { title: '抽屉模式', routerLink: { name: 'ComponentTableCustomDrawer' } },
            { title: '允许调整列显示隐藏', routerLink: { name: 'ComponentTableCustomVisible' } },
            { title: '允许调整列冻结', routerLink: { name: 'ComponentTableCustomFixed' } },
            { title: '允许调整列宽', routerLink: { name: 'ComponentTableCustomResizable' } },
            { title: '允许拖拽列顺序', routerLink: { name: 'ComponentTableCustomSort' } },
            { title: '冻结列最大数量限制', routerLink: { name: 'ComponentTableCustomFixedMax' } },
            { title: '自定义触发弹出设置', routerLink: { name: 'ComponentTableCustomTemplate' } },
            { title: '自定义弹出位置', routerLink: { name: 'ComponentTableCustomPlacement' } },
            { title: '事件监听', routerLink: { name: 'ComponentTableCustomEvents' } },
            { title: '本地保存列设置', routerLink: { name: 'ComponentTableCustomStorage' } },
            { title: '自定义服务端保存', routerLink: { name: 'ComponentTableCustomRemote' } },
            { title: '实现服务端保存与恢复', routerLink: { name: 'ComponentTableCustomRemoteFull' } },
            { title: '实现显示/隐藏列', routerLink: { name: 'ComponentTableCustomManual' } },
            { title: '实现折叠列', routerLink: { name: 'ComponentTableCustomCollapseColumn' } }
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
            { title: '自定义图标', routerLink: { name: 'ComponentTableTreeIcon' } },
            { title: '显示连接线', routerLink: { name: 'ComponentTableTreeLine' } },
            { title: '最大高度', routerLink: { name: 'ComponentTableTreeMaxHeight' } },
            { title: '手风琴效果', routerLink: { name: 'ComponentTableTreeAccordion' } },
            { title: '单选框', routerLink: { name: 'ComponentTableTreeRadio' } },
            { title: '复选框', routerLink: { name: 'ComponentTableTreeCheckbox' } },
            { title: '树形排序', routerLink: { name: 'ComponentTableTreeSort' } },
            { title: '树形筛选', routerLink: { name: 'ComponentTableTreeFilter' } },
            { title: '冻结列', routerLink: { name: 'ComponentTableTreeFixed' } },
            { title: '右键菜单', routerLink: { name: 'ComponentTableTreeMenu' } },
            { title: '懒加载', routerLink: { name: 'ComponentTableTreeLazy' } },
            { title: '懒加载 - 可编辑', routerLink: { name: 'ComponentTableTreeLazyEdit' } },
            { title: '同时使用展开行', routerLink: { name: 'ComponentTableTreeExpand' } },
            { title: '同时使用展开行 - 懒加载', routerLink: { name: 'ComponentTableTreeExpandLazy' } }
          ]
        },
        {
          title: '单元格 - 渲染 - 配置式',
          children: [
            { title: 'VxeSwitch', routerLink: { name: 'ComponentTableCellRenderVxeSwitch' } },
            { title: 'VxeRadioGroup', routerLink: { name: 'ComponentTableCellRenderVxeRadioGroup' } },
            { title: 'VxeCheckboxGroup', routerLink: { name: 'ComponentTableCellRenderVxeCheckboxGroup' } },
            { title: 'VxeButtonGroup', routerLink: { name: 'ComponentTableCellRenderVxeButtonGroup' } },
            { title: 'VxeUpload', routerLink: { name: 'ComponentTableCellRenderVxeUpload' } },
            { title: '使用第三方组件', isPlugin: true, linkUrl: 'https://vxeui.com/other4/#/plugin-render-element/table/cell/el-switch' }
          ]
        },
        {
          title: '可编辑',
          children: [
            { title: '手动编辑', routerLink: { name: 'ComponentTableEditManual' } },
            { title: '单击编辑', routerLink: { name: 'ComponentTableEditClick' } },
            { title: '双击编辑', routerLink: { name: 'ComponentTableEditDblclick' } },
            { title: '关闭自动清除编辑状态', routerLink: { name: 'ComponentTableEditAutoClear' } },
            { title: '编辑状态', routerLink: { name: 'ComponentTableEditStatus' } },
            { title: '空值占位符', routerLink: { name: 'ComponentTableEditCellPlaceholder' } },
            { title: '插入数据', routerLink: { name: 'ComponentTableEditInsert' } },
            { title: '删除数据', routerLink: { name: 'ComponentTableEditRemove' } },
            { title: '标记为删除', routerLink: { name: 'ComponentTableEditPending' } },
            { title: '还原数据', routerLink: { name: 'ComponentTableEditRevert' } },
            { title: '禁用单元格编辑', routerLink: { name: 'ComponentTableEditCellDisable' } },
            { title: '禁用行编辑', routerLink: { name: 'ComponentTableEditRowDisable' } },
            { title: '单元格校验', routerLink: { name: 'ComponentTableEditCellValid' } },
            { title: '行校验', routerLink: { name: 'ComponentTableEditRowValid' } },
            { title: '树结构', routerLink: { name: 'ComponentTableEditTree' } },
            { title: '使用合并行与列', routerLink: { name: 'ComponentTableEditSpan' } },
            { title: '使用右键菜单', routerLink: { name: 'ComponentTableEditMenu' } },
            { title: '实现附件列表', routerLink: { name: 'ComponentTableEditFileList' } },
            { title: '实现弹窗编辑表单', routerLink: { name: 'ComponentTableEditModalForm' } },
            { title: '实现抽屉编辑表单', routerLink: { name: 'ComponentTableEditDrawerForm' } },
            { title: '实现唯一下拉选项', routerLink: { name: 'ComponentTableEditUniqueSelect' } },
            { title: '实现多列下拉联动', routerLink: { name: 'ComponentTableEditCascadingSelect' } },
            { title: '实现表尾实时合计', routerLink: { name: 'ComponentTableEditFooterImmediately' } },
            { title: '实现单元格实时保存', routerLink: { name: 'ComponentTableEditRealtimeSave' } }
          ]
        },
        {
          title: '可编辑 - 渲染 - 配置式',
          children: [
            { title: 'input', routerLink: { name: 'ComponentTableEditRenderInput' } },
            { title: 'select', routerLink: { name: 'ComponentTableEditRenderSelect' } },
            { title: 'VxeInput', routerLink: { name: 'ComponentTableEditRenderVxeInput' } },
            { title: 'VxeNumberInput', routerLink: { name: 'ComponentTableEditRenderVxeNumberInput' } },
            { title: 'VxeDatePicker', routerLink: { name: 'ComponentTableEditRenderVxeDatePicker' } },
            { title: 'VxeSelect', routerLink: { name: 'ComponentTableEditRenderVxeSelect' } },
            { title: 'VxeTreeSelect', routerLink: { name: 'ComponentTableEditRenderVxeTreeSelect' } },
            { title: '使用第三方组件', isPlugin: true, linkUrl: 'https://vxeui.com/other4/#/plugin-render-element/table/edit/el-input' }
          ]
        },
        {
          title: '可编辑 - 渲染 - 插槽式',
          children: [
            { title: 'VxeInput', routerLink: { name: 'ComponentTableEditTemplateVxeInput' } },
            { title: 'VxeNumberInput', routerLink: { name: 'ComponentTableEditTemplateVxeNumberInput' } },
            { title: 'VxeDatePicker', routerLink: { name: 'ComponentTableEditTemplateVxeDatePicker' } },
            { title: 'VxeSelect', routerLink: { name: 'ComponentTableEditTemplateVxeSelect' } },
            { title: '使用第三方组件', isPlugin: true, linkUrl: 'https://vxeui.com/other4/#/plugin-render-element/table/edit/el-input' }
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
            { title: '可编辑按键操作', routerLink: { name: 'ComponentTableKeyboardEdit' } },
            { title: '树结构按键操作', routerLink: { name: 'ComponentTableKeyboardTree' } },
            { title: '树结构可编辑', routerLink: { name: 'ComponentTableKeyboardTreeEdit' } },
            { title: 'Excel 单元格选取', isEnterprise: true, linkUrl: 'https://vxetable.cn/pluginDocs/table/#/extendCellArea/table/singleArea' },
            { title: 'Excel 复制与粘贴', isEnterprise: true, linkUrl: 'https://vxetable.cn/pluginDocs/table/#/extendCellArea/table/areaClip' }
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
            { title: '导出 XLSX 格式', isPlugin: true, linkUrl: 'https://vxeui.com/other4/#/plugin-export-xlsx/table/export' },
            { title: '格式化单元格内容', routerLink: { name: 'ComponentTableExportExportMethod' } },
            { title: '高级导出', routerLink: { name: 'ComponentTableExportAdvanced' } }
          ]
        },
        {
          title: '导入数据',
          children: [
            { title: '导入数据', routerLink: { name: 'ComponentTableImportBase' } },
            { title: '导入 XLSX 格式', isPlugin: true, linkUrl: 'https://vxeui.com/other4/#/plugin-export-xlsx/table/import' },
            { title: '高级导入', routerLink: { name: 'ComponentTableImportAdvanced' } }
          ]
        },
        {
          title: '打印表格',
          children: [
            { title: '打印表格', routerLink: { name: 'ComponentTablePrintBase' } },
            { title: '高级打印', routerLink: { name: 'ComponentTablePrintAdvanced' } },
            { title: '实现将表格切割为多页打印', routerLink: { name: 'ComponentTablePrintPage' } },
            { title: '实现打印多张表格', routerLink: { name: 'ComponentTablePrintMultilist' } }
          ]
        },
        {
          title: '虚拟滚动（超大数据量表格）',
          children: [
            { title: '纵向虚拟滚动', routerLink: { name: 'ComponentTableScrollVertical' } },
            { title: '横向虚拟滚动', routerLink: { name: 'ComponentTableScrollHorizontal' } },
            { title: '纵向和横向虚拟滚动', routerLink: { name: 'ComponentTableScrollHV' } },
            { title: '函数式加载数据', routerLink: { name: 'ComponentTableScrollLoadData' } },
            { title: '设置行高', routerLink: { name: 'ComponentTableScrollRowHeight' } },
            { title: '使用分组表头', routerLink: { name: 'ComponentTableScrollGroup' } },
            { title: '按键导航', routerLink: { name: 'ComponentTableScrollKeyboard' } },
            { title: '单元格合并', routerLink: { name: 'ComponentTableScrollMerge' } },
            { title: '树形虚拟滚动', routerLink: { name: 'ComponentTableScrollTree' } }
          ]
        },
        {
          title: '表格搜索',
          children: [
            { title: '实现表格搜索', routerLink: { name: 'ComponentTableSearchList' } },
            { title: '实现树形表格搜索', routerLink: { name: 'ComponentTableSearchTree' } },
            { title: '查找与替换', isEnterprise: true, linkUrl: 'https://vxetable.cn/pluginDocs/table/#/extendCellArea/table/areaFNR' }
          ]
        },
        {
          title: '事件监听',
          children: [
            { title: '点击/双击事件', routerLink: { name: 'ComponentTableEventsClick' } },
            { title: '滚动事件', routerLink: { name: 'ComponentTableEventsScroll' } }
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
            // { title: '尺寸大小', routerLink: { name: 'ComponentGridBaseSize' } },
            { title: '数据类型', routerLink: { name: 'ComponentGridBaseData' } },
            { title: '空数据提示', routerLink: { name: 'ComponentGridBaseEmpty' } },
            { title: '边框', routerLink: { name: 'ComponentGridBaseBorder' } },
            { title: '圆角', routerLink: { name: 'ComponentGridBaseRound' } },
            { title: '对齐方式', routerLink: { name: 'ComponentGridBaseAlign' } },
            { title: '列宽', routerLink: { name: 'ComponentGridBaseWidth' } },
            { title: '自动换行', routerLink: { name: 'ComponentGridBaseAutoBreak' } },
            // { title: '溢出隐藏', routerLink: { name: 'ComponentGridBaseOverflow' } },
            // { title: '文本提示', routerLink: { name: 'ComponentGridBaseTooltip' } },
            // { title: '斑马线样式', routerLink: { name: 'ComponentGridBaseStripe' } },
            // { title: '单元格样式', routerLink: { name: 'ComponentGridBaseStyle' } },
            { title: '动态样式', routerLink: { name: 'ComponentGridBaseDynamicStyle' } },
            // { title: '隐藏表头', routerLink: { name: 'ComponentGridBaseHeader' } },
            // { title: '高亮列', routerLink: { name: 'ComponentGridBaseCurrentColumn' } },
            { title: '高亮行', routerLink: { name: 'ComponentGridBaseCurrentRow' } },
            { title: '拖拽调整列宽', routerLink: { name: 'ComponentGridBaseHeaderResizable' } },
            // { title: '表格最小高度', routerLink: { name: 'ComponentGridBaseHeaderMinHeight' } },
            // { title: '表格高度', routerLink: { name: 'ComponentGridBaseHeight' } },
            // { title: '表格最大高度', routerLink: { name: 'ComponentGridBaseMaxHeight' } },
            { title: '表格响应式高度', routerLink: { name: 'ComponentGridBaseAutoHeight' } },
            // { title: '设置行度', routerLink: { name: 'ComponentGridBaseRowHeight' } },
            // { title: '冻结列', routerLink: { name: 'ComponentGridBaseFixed' } },
            // { title: '冻结表头和列', routerLink: { name: 'ComponentGridBaseFixedFull' } },
            { title: '表尾', routerLink: { name: 'ComponentGridBaseFooter' } },
            { title: '分组表头', routerLink: { name: 'ComponentGridBaseGroup' } },
            // { title: '排序', routerLink: { name: 'ComponentGridBaseSort' } },
            { title: '筛选', routerLink: { name: 'ComponentGridBaseFilter' } },
            // { title: '加载中', routerLink: { name: 'ComponentGridBaseLoading' } },
            // { title: '格式化内容', routerLink: { name: 'ComponentGridBaseFormat' } },
            { title: '序号', routerLink: { name: 'ComponentGridBaseSeq' } },
            // { title: '单选框', routerLink: { name: 'ComponentGridBaseRadio' } },
            // { title: '复选框', routerLink: { name: 'ComponentGridBaseSelection' } },
            { title: 'HTML 类型', routerLink: { name: 'ComponentGridBaseHtml' } },
            { title: '完整案例', routerLink: { name: 'ComponentGridBaseFull' } }
          ]
        },
        {
          title: '单元格合并',
          children: [
            { title: '将多行进行合并', routerLink: { name: 'ComponentGridMergeRow' } },
            { title: '将多列进行合并', routerLink: { name: 'ComponentGridMergeColumn' } },
            { title: '合并行与列', routerLink: { name: 'ComponentGridMergeAll' } }
          ]
        },
        {
          title: '表尾数据',
          children: [
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
            { title: '显示隐藏', routerLink: { name: 'ComponentGridRadioVisibleMethod' } }
          ]
        },
        {
          title: '复选框',
          children: [
            { title: '高亮选择行', routerLink: { name: 'ComponentGridCheckboxHighlight' } },
            { title: '绑定字段', routerLink: { name: 'ComponentGridCheckboxField' } },
            { title: '禁用', routerLink: { name: 'ComponentGridCheckboxCheckMethod' } },
            { title: '显示隐藏', routerLink: { name: 'ComponentGridCheckboxVisibleMethod' } },
            { title: '鼠标滑动范围选择', routerLink: { name: 'ComponentGridCheckboxRange' } },
            { title: '范围选择与单元格选取', isEnterprise: true, linkUrl: 'https://vxetable.cn/pluginDocs/table/#/extendCellArea/grid/areaCheckbox' }
          ]
        },
        {
          title: '排序',
          children: [
            { title: '多字段排序', routerLink: { name: 'ComponentGridSortMultiple' } },
            { title: '服务端排序', routerLink: { name: 'ComponentGridSortRemote' } }
          ]
        },
        {
          title: '展开行',
          children: [
            { title: '基础使用', routerLink: { name: 'ComponentGridExpandBasic' } },
            { title: '展开容器内间距', routerLink: { name: 'ComponentGridExpandPadding' } },
            { title: '展开容器高度', routerLink: { name: 'ComponentGridExpandHeight' } },
            { title: '使用冻结列', routerLink: { name: 'ComponentGridExpandFixed' } }
          ]
        },
        {
          title: '筛选',
          children: [
            { title: '修改筛选选项', routerLink: { name: 'ComponentGridFilterOptions' } },
            { title: '服务端筛选', routerLink: { name: 'ComponentGridFilterRemote' } },
            { title: '实现列头中自定义筛选', routerLink: { name: 'ComponentGridFilterHeaderFilter' } }
          ]
        },
        {
          title: '筛选 - 渲染 - 配置式',
          children: [
            { title: 'VxeInput', routerLink: { name: 'ComponentGridFilterRenderVxeInput' } },
            { title: 'VxeNumberInput', routerLink: { name: 'ComponentGridFilterRenderVxeNumberInput' } },
            { title: 'VxeSelect', routerLink: { name: 'ComponentGridFilterRenderVxeSelect' } },
            { title: 'VxeDatePicker', routerLink: { name: 'ComponentGridFilterRenderVxeDatePicker' } }
          ]
        },
        {
          title: '筛选 - 渲染 - 插槽式',
          children: [
            { title: 'VxeInput', routerLink: { name: 'ComponentGridFilterTemplateVxeInput' } },
            { title: 'VxeSelect', routerLink: { name: 'ComponentGridFilterTemplateVxeSelect' } }
          ]
        },
        {
          title: '右键菜单',
          children: [
            { title: '完整右键菜单', routerLink: { name: 'ComponentGridMenuFull' } },
            { title: '菜单权限控制', routerLink: { name: 'ComponentGridMenuPrivilege' } }
          ]
        },
        {
          title: '查询表单',
          children: [
            { title: '查询表单', routerLink: { name: 'ComponentGridFormSearch' } },
            { title: '绑定表单数据', routerLink: { name: 'ComponentGridFormFormData' } },
            { title: '带折叠的查询表单', routerLink: { name: 'ComponentGridFormCollapse' } },
            { title: '自定义表单插槽模板', routerLink: { name: 'ComponentGridFormTemplate' } }
          ]
        },
        {
          title: '工具栏',
          children: [
            { title: '左侧按钮', routerLink: { name: 'ComponentGridToolbarButtons' } },
            { title: '右侧按钮', routerLink: { name: 'ComponentGridToolbarTools' } },
            { title: '自定义列功能', routerLink: { name: 'ComponentGridToolbarCustom' } },
            { title: '打印功能', routerLink: { name: 'ComponentGridToolbarPrint' } },
            { title: '最大化显示', routerLink: { name: 'ComponentGridToolbarZoom' } },
            { title: '导入数据', routerLink: { name: 'ComponentGridToolbarImport' } },
            { title: '导出数据', routerLink: { name: 'ComponentGridToolbarExport' } },
            { title: '刷新列表', routerLink: { name: 'ComponentGridToolbarRefresh' } },
            { title: '自定义图标', routerLink: { name: 'ComponentGridToolbarIcon' } }
          ]
        },
        {
          title: '自定义列',
          children: [
            { title: '窗口模式', routerLink: { name: 'ComponentGridCustomModal' } },
            { title: '抽屉模式', routerLink: { name: 'ComponentGridCustomDrawer' } },
            // { title: '允许调整列显示隐藏', routerLink: { name: 'ComponentGridCustomVisible' } },
            // { title: '允许调整列冻结', routerLink: { name: 'ComponentGridCustomFixed' } },
            // { title: '允许调整列宽', routerLink: { name: 'ComponentGridCustomResizable' } },
            // { title: '允许拖拽列顺序', routerLink: { name: 'ComponentGridCustomSort' } },
            // { title: '自定义触发弹出设置', routerLink: { name: 'ComponentGridCustomTemplate' } },
            { title: '自定义弹出位置', routerLink: { name: 'ComponentGridCustomPlacement' } },
            { title: '事件监听', routerLink: { name: 'ComponentGridCustomEvents' } },
            { title: '本地保存列设置', routerLink: { name: 'ComponentGridCustomStorage' } },
            { title: '自定义服务端保存', routerLink: { name: 'ComponentGridCustomRemote' } },
            { title: '实现服务端保存与恢复', routerLink: { name: 'ComponentGridCustomRemoteFull' } }
          ]
        },
        {
          title: '数据分页',
          children: [
            { title: '实现前端分页', routerLink: { name: 'ComponentGridPagerMockPage' } },
            { title: '自定义布局', routerLink: { name: 'ComponentGridPagerLayouts' } },
            { title: '自定义序号', routerLink: { name: 'ComponentGridPagerStart' } },
            { title: '自定义插槽模板', routerLink: { name: 'ComponentGridPagerTemplate' } }
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
            { title: '显示连接线', routerLink: { name: 'ComponentGridTreeLine' } },
            { title: '单选框', routerLink: { name: 'ComponentGridTreeRadio' } },
            { title: '复选框', routerLink: { name: 'ComponentGridTreeCheckbox' } }
          ]
        },
        {
          title: '单元格 - 渲染 - 配置式',
          children: [
            { title: 'VxeSwitch', routerLink: { name: 'ComponentGridCellRenderVxeSwitch' } },
            { title: 'VxeRadioGroup', routerLink: { name: 'ComponentGridCellRenderVxeRadioGroup' } },
            { title: 'VxeCheckboxGroup', routerLink: { name: 'ComponentGridCellRenderVxeCheckboxGroup' } },
            { title: 'VxeButtonGroup', routerLink: { name: 'ComponentGridCellRenderVxeButtonGroup' } },
            { title: 'VxeImage', routerLink: { name: 'ComponentGridCellRenderVxeImage' } },
            { title: 'VxeImageGroup', routerLink: { name: 'ComponentGridCellRenderVxeImageGroup' } },
            { title: 'VxeUpload', routerLink: { name: 'ComponentGridCellRenderVxeUpload' } },
            { title: '使用第三方组件', isPlugin: true, linkUrl: 'https://vxeui.com/other4/#/plugin-render-element/grid/cell/el-switch' }
          ]
        },
        {
          title: '单元格 - 渲染 - 插槽式',
          children: [
            { title: 'VxeSwitch', routerLink: { name: 'ComponentGridCellTemplateVxeSwitch' } },
            { title: 'VxeButtonGroup', routerLink: { name: 'ComponentGridCellTemplateVxeButtonGroup' } },
            { title: 'VxeButton', routerLink: { name: 'ComponentGridCellTemplateVxeButton' } },
            { title: 'VxeImage', routerLink: { name: 'ComponentGridCellTemplateVxeImage' } },
            { title: 'VxeUpload', routerLink: { name: 'ComponentGridCellTemplateVxeUpload' } },
            { title: '使用第三方组件', isPlugin: true, linkUrl: 'https://vxeui.com/other4/#/plugin-render-element/grid/cell/el-switch' }
          ]
        },
        {
          title: '可编辑',
          children: [
            { title: '单击编辑', routerLink: { name: 'ComponentGridEditClick' } },
            { title: '双击编辑', routerLink: { name: 'ComponentGridEditDblclick' } },
            { title: '禁用单元格编辑', routerLink: { name: 'ComponentGridEditCellDisable' } },
            { title: '禁用行编辑', routerLink: { name: 'ComponentGridEditRowDisable' } }
          ]
        },
        {
          title: '可编辑 - 渲染 - 配置式',
          children: [
            { title: 'input', routerLink: { name: 'ComponentGridEditRenderInput' } },
            { title: 'select', routerLink: { name: 'ComponentGridEditRenderSelect' } },
            { title: 'VxeInput', routerLink: { name: 'ComponentGridEditRenderVxeInput' } },
            { title: 'VxeNumberInput', routerLink: { name: 'ComponentGridEditRenderVxeNumberInput' } },
            { title: 'VxeDatePicker', routerLink: { name: 'ComponentGridEditRenderVxeDatePicker' } },
            { title: 'VxeSelect', routerLink: { name: 'ComponentGridEditRenderVxeSelect' } },
            { title: 'VxeTreeSelect', routerLink: { name: 'ComponentGridEditRenderVxeTreeSelect' } },
            { title: '禁用单元格编辑', routerLink: { name: 'ComponentGridEditRenderCellDisable' } },
            { title: '禁用行编辑', routerLink: { name: 'ComponentGridEditRenderRowDisable' } },
            { title: '使用第三方组件', isPlugin: true, linkUrl: 'https://vxeui.com/other4/#/plugin-render-element/grid/edit/el-input' }
          ]
        },
        {
          title: '可编辑 - 渲染 - 插槽式',
          children: [
            { title: 'VxeInput', routerLink: { name: 'ComponentGridEditTemplateVxeInput' } },
            { title: 'VxeNumberInput', routerLink: { name: 'ComponentGridEditTemplateVxeNumberInput' } },
            { title: 'VxeDatePicker', routerLink: { name: 'ComponentGridEditTemplateVxeDatePicker' } },
            { title: 'VxeSelect', routerLink: { name: 'ComponentGridEditTemplateVxeSelect' } },
            { title: '使用第三方组件', isPlugin: true, linkUrl: 'https://vxeui.com/other4/#/plugin-render-element/grid/edit/el-input' }
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
            { title: '可编辑按键操作', routerLink: { name: 'ComponentGridKeyboardEdit' } },
            { title: '树结构按键操作', routerLink: { name: 'ComponentGridKeyboardTree' } },
            { title: '树结构可编辑', routerLink: { name: 'ComponentGridKeyboardTreeEdit' } },
            { title: 'Excel 单元格选取', isEnterprise: true, linkUrl: 'https://vxetable.cn/pluginDocs/table/#/extendCellArea/grid/singleArea' },
            { title: 'Excel 复制与粘贴', isEnterprise: true, linkUrl: 'https://vxetable.cn/pluginDocs/table/#/extendCellArea/grid/areaClip' }
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
            { title: '导出 XLSX 格式', isPlugin: true, linkUrl: 'https://vxeui.com/other4/#/plugin-export-xlsx/grid/export' },
            { title: '导出 PDF 格式', isPlugin: true, linkUrl: 'https://vxeui.com/other4/#/plugin-export-pdf/grid/export' },
            { title: '自定义数据', routerLink: { name: 'ComponentGridExportData' } },
            { title: '格式化导出内容', routerLink: { name: 'ComponentGridExportExportMethod' } },
            { title: '高级导出', routerLink: { name: 'ComponentGridExportAdvanced' } },
            { title: '自定义导出类型', routerLink: { name: 'ComponentGridExportTypes' } },
            { title: '服务端导出', routerLink: { name: 'ComponentGridExportRemote' } },
            { title: '自定义导出模式', routerLink: { name: 'ComponentGridExportModes' } }
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
            { title: '导入 XLSX 格式', isPlugin: true, linkUrl: 'https://vxeui.com/other4/#/plugin-export-xlsx/grid/import' },
            { title: '高级导入', routerLink: { name: 'ComponentGridImportAdvanced' } }
          ]
        },
        {
          title: '打印表格',
          children: [
            { title: '打印表格', routerLink: { name: 'ComponentGridPrintBase' } },
            { title: '自定义顶部和底部', routerLink: { name: 'ComponentGridPrintBeforeMethod' } },
            { title: '高级打印', routerLink: { name: 'ComponentGridPrintAdvanced' } },
            { title: '自定义页眉/标题', routerLink: { name: 'ComponentGridPrintHeader' } },
            { title: '自定义页尾/页码', routerLink: { name: 'ComponentGridPrintFooter' } },
            { title: '实现将表格切割为多页打印', routerLink: { name: 'ComponentGridPrintPage' } },
            { title: '实现打印多张表格', routerLink: { name: 'ComponentGridPrintMultilist' } }
          ]
        },
        {
          title: '虚拟滚动（超大数据量表格）',
          children: [
            { title: '纵向虚拟滚动', routerLink: { name: 'ComponentGridScrollVertical' } },
            { title: '横向虚拟滚动', routerLink: { name: 'ComponentGridScrollHorizontal' } },
            { title: '纵向和横向虚拟滚动', routerLink: { name: 'ComponentGridScrollHV' } },
            { title: '函数式加载数据', routerLink: { name: 'ComponentGridScrollLoadData' } },
            { title: '设置行高', routerLink: { name: 'ComponentGridScrollRowHeight' } },
            { title: '使用分组表头', routerLink: { name: 'ComponentGridScrollGroup' } },
            { title: '使用表尾', routerLink: { name: 'ComponentGridScrollFooter' } },
            { title: '树形虚拟滚动', routerLink: { name: 'ComponentGridScrollTree' } }
          ]
        },
        {
          title: '数据代理',
          children: [
            { title: '查询接口', routerLink: { name: 'ComponentGridProxyQuery' } },
            { title: '分页查询接口', routerLink: { name: 'ComponentGridProxyPager' } },
            { title: '工具栏 - 查询', routerLink: { name: 'ComponentGridProxyToolbarQuery' } },
            { title: '手动调用 - 查询', routerLink: { name: 'ComponentGridProxyManualQuery' } },
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
            { title: '查找与替换', isEnterprise: true, linkUrl: 'https://vxetable.cn/pluginDocs/table/#/extendCellArea/grid/areaFNR' }
          ]
        },
        {
          title: '事件监听',
          children: [
            { title: '点击/双击事件', routerLink: { name: 'ComponentGridEventsClick' } },
            { title: '滚动事件', routerLink: { name: 'ComponentGridEventsScroll' } }
          ]
        }
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
        { title: '右键菜单', routerLink: { name: 'GlobalMenusTableBase' } }
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
        { title: '单元格校验', routerLink: { name: 'GlobalValidatorsTableBase' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.tableGlobalRenderer',
      children: [
        { title: 'API', routerLink: { name: 'GlobalRendererTableAPI' } },
        {
          title: '单元格',
          children: [
            { title: '实现一个超链接', routerLink: { name: 'GlobalRendererTableDefaultMyLink' } },
            { title: '实现一个图片预览', routerLink: { name: 'GlobalRendererTableDefaultMyImg' } }
          ]
        },
        {
          title: '可编辑',
          children: [
            { title: '实现一个金额输入', routerLink: { name: 'GlobalRendererTableEditMyEditAmount' } },
            { title: '实现一个下拉表格', routerLink: { name: 'GlobalRendererTableEditMyEditPulldown' } }
          ]
        },
        {
          title: '展开行',
          children: [
            { title: '实现一个展开列表', routerLink: { name: 'GlobalRendererTableExpandMyExpandList' } },
            { title: '实现一个展开表格', routerLink: { name: 'GlobalRendererTableExpandMyExpandTable' } }
          ]
        },
        {
          title: '工具栏',
          children: [
            { title: '实现左侧操作按钮', routerLink: { name: 'GlobalRendererTableToolbarBtn' } },
            { title: '实现右侧工具按钮', routerLink: { name: 'GlobalRendererTableToolbarTool' } }
          ]
        },
        {
          title: '筛选',
          children: [
            { title: '实现一个输入筛选', routerLink: { name: 'GlobalRendererTableFilterMyFilterInput' } },
            { title: '实现一个多条件筛选', routerLink: { name: 'GlobalRendererTableFilterMyFilterComplex' } },
            { title: '实现一个显示列表的筛选', routerLink: { name: 'GlobalRendererTableFilterMyFilterContent' } },
            { title: '更多筛选插件', isEnterprise: true, linkUrl: 'https://vxetable.cn/plugins/' }
          ]
        },
        {
          title: '空数据提示',
          children: [
            { title: '实现一个空数据显示文字', routerLink: { name: 'GlobalRendererTableMyEmptyImg' } },
            { title: '实现一个空数据显示图片', routerLink: { name: 'GlobalRendererTableMyEmptyText' } }
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

export const navConfigList: NavVO[] = [
  {
    i18nKey: 'app.aside.menu.guide',
    isExpand: true,
    children: [
      { i18nKey: 'app.aside.menu.globalInstall', routerLink: { name: 'StartInstall' } },
      { i18nKey: 'app.aside.menu.lazyUseGlobal', routerLink: { name: 'StartUseGlobal' } },
      { i18nKey: 'app.aside.menu.lazyUseImport', routerLink: { name: 'StartUseImport' } },
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
      // { title: '函数库' },
      { i18nKey: 'app.aside.menu.clipboard', routerLink: { name: 'ToolClipboard' } }
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
          { title: '图标', routerLink: { name: 'ComponentTextIcon' } }
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
          { title: '图标', routerLink: { name: 'ComponentButtonIcon' } },
          { title: '圆形', routerLink: { name: 'ComponentButtonCircle' } },
          { title: '加载中', routerLink: { name: 'ComponentButtonLoading' } },
          { title: '触发方式', routerLink: { name: 'ComponentButtonTrigger' } },
          { title: '按钮组', routerLink: { name: 'ComponentButtonGroup' } },
          { title: '下拉按钮', routerLink: { name: 'ComponentButtonDropdown' } },
          { title: '权限码', routerLink: { name: 'ComponentButtonPermissionCode' } }
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
          { title: '显示/隐藏边框', routerLink: { name: 'ComponentCardBorder' } },
          { title: '显示/隐藏边距', routerLink: { name: 'ComponentCardPadding' } },
          { title: '边框阴影', routerLink: { name: 'ComponentCardShadow' } },
          { title: '自定义模板', routerLink: { name: 'ComponentCardTemplate' } }
        ]
      },
      {
        title: 'Image 图片',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'image' } } },
          { title: '设置宽高', routerLink: { name: 'ComponentImageBase' } },
          { title: '预览多选图片', routerLink: { name: 'ComponentImageMultiple' } },
          { title: '懒加载', routerLink: { name: 'ComponentImageLazy' } }
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
        title: 'Tabs 页签',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tabs' } } },
          { title: '基础', routerLink: { name: 'ComponentTabsBase' } },
          { title: '卡片风格', routerLink: { name: 'ComponentTabsCard' } },
          { title: '边框背景的卡片', routerLink: { name: 'ComponentTabsBorderCard' } },
          { title: '设置高度', routerLink: { name: 'ComponentTabsHeight' } },
          { title: '圆角边框背景的卡片', routerLink: { name: 'ComponentTabsRoundCard' } },
          { title: '配置式', routerLink: { name: 'ComponentTabsOptions' } },
          { title: '可关闭', routerLink: { name: 'ComponentTabsShowClose' } },
          { title: '权限码', routerLink: { name: 'ComponentTabsPermissionCode' } }
        ]
      },
      {
        title: 'Pulldown 下拉容器',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'pulldown' } } },
          { title: '基础', routerLink: { name: 'ComponentPulldownBase' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentPulldownTemplate' } },
          { title: '可搜索的下拉框', routerLink: { name: 'ComponentPulldownSelect' } },
          { title: '实现下拉表格', routerLink: { name: 'ComponentPulldownTable' } }
        ]
      },
      // { title: 'Carousel 走马灯' },
      // { title: 'Calendar 日历' },
      // { title: 'Collapse 折叠面板' },
      {
        title: 'List 虚拟列表',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'list' } } },
          { title: '实现大量数据列表', routerLink: { name: 'ComponentListBase' } },
          { title: '实现大量数据表格', routerLink: { name: 'ComponentListTable' } }
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
          { title: '图标', routerLink: { name: 'ComponentMenuIcon' } },
          { title: '路由模式', routerLink: { name: 'ComponentMenuRouterLink' } },
          { title: '权限码', routerLink: { name: 'ComponentMenuPermissionCode' } }
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
          { title: '自定义模板', routerLink: { name: 'ComponentPagerTemplate' } }
        ]
      }
    ]
  },
  {
    i18nKey: 'app.aside.menu.formTitle',
    children: [
      { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'form' } } },
      {
        i18nKey: 'app.aside.menu.formBaseTitle',
        children: [
          { title: '基础功能', routerLink: { name: 'ComponentFormBasicsBase' } },
          { title: '尺寸大小', routerLink: { name: 'ComponentFormBasicsSize' } },
          { title: '数据类型', routerLink: { name: 'ComponentFormBasicsField' } },
          { title: '横向排列', routerLink: { name: 'ComponentFormBasicsHorizontal' } },
          { title: '上下布局', routerLink: { name: 'ComponentFormBasicsVertical' } },
          { title: '标题冒号', routerLink: { name: 'ComponentFormBasicsColon' } },
          { title: '标题加粗', routerLink: { name: 'ComponentFormBasicsBold' } },
          { title: '标题宽度', routerLink: { name: 'ComponentFormBasicsWidth' } },
          { title: '对齐方式', routerLink: { name: 'ComponentFormBasicsAlign' } },
          { title: '溢出隐藏', routerLink: { name: 'ComponentFormBasicsOverflow' } },
          { title: '标题前缀图标', routerLink: { name: 'ComponentFormBasicsTitlePrefix' } },
          { title: '标题后缀图标', routerLink: { name: 'ComponentFormBasicsTitleSuffix' } },
          { title: '分行/分列', routerLink: { name: 'ComponentFormBasicsGather' } },
          { title: '自定义布局', routerLink: { name: 'ComponentFormBasicsCustomLayout' } },
          { title: '折叠表单', routerLink: { name: 'ComponentFormBasicsCollapse' } },
          { title: '表单校验', routerLink: { name: 'ComponentFormBasicsValid' } },
          {
            title: '渲染 - 配置式',
            children: [
              { title: 'input', routerLink: { name: 'ComponentFormBasicsItemRenderInput' } },
              { title: 'textarea', routerLink: { name: 'ComponentFormBasicsItemRenderTextarea' } },
              { title: 'select', routerLink: { name: 'ComponentFormBasicsItemRenderSelect' } },
              { title: 'VxeInput', routerLink: { name: 'ComponentFormBasicsItemRenderVxeInput' } },
              { title: 'VxeNumberInput', routerLink: { name: 'ComponentFormBasicsItemRenderVxeNumberInput' } },
              { title: 'VxeTextarea', routerLink: { name: 'ComponentFormBasicsItemRenderVxeTextarea' } },
              { title: 'VxeSelect', routerLink: { name: 'ComponentFormBasicsItemRenderVxeSelect' } },
              { title: 'VxeDatePicker', routerLink: { name: 'ComponentFormBasicsItemRenderVxeDatePicker' } },
              { title: 'VxeSwitch', routerLink: { name: 'ComponentFormBasicsItemRenderVxeSwitch' } },
              { title: 'VxeRadioGroup', routerLink: { name: 'ComponentFormBasicsItemRenderVxeRadioGroup' } },
              { title: 'VxeCheckboxGroup', routerLink: { name: 'ComponentFormBasicsItemRenderVxeCheckboxGroup' } },
              { title: 'VxeUpload', routerLink: { name: 'ComponentFormBasicsItemRenderVxeUpload' } },
              { title: '只读模式', routerLink: { name: 'ComponentFormBasicsItemRenderReadonly' } },
              { title: '禁用模式', routerLink: { name: 'ComponentFormBasicsItemRenderDisabled' } },
              { title: '使用第三方组件', isPlugin: true, linkUrl: 'https://vxeui.com/other4/#/plugin-render-element/form/itemTemplate/el-input' }
            ]
          },
          {
            title: '渲染 - 插槽式',
            children: [
              { title: 'VxeInput', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeInput' } },
              { title: 'VxeNumberInput', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeNumberInput' } },
              { title: 'VxeSelect', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeSelect' } },
              { title: 'VxeDatePicker', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeDatePicker' } },
              { title: 'VxeSwitch', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeSwitch' } },
              { title: 'VxeRadioGroup', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeRadioGroup' } },
              { title: 'VxeCheckboxGroup', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeCheckboxGroup' } },
              { title: 'VxeUpload', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeUpload' } },
              { title: '使用第三方组件', isPlugin: true, linkUrl: 'https://vxeui.com/other4/#/plugin-render-element/form/itemTemplate/el-input' }
            ]
          },
          {
            title: '自定义插槽模板',
            children: [
              { title: '自定义项标题模板', routerLink: { name: 'ComponentFormBasicsTemplateTitle' } },
              { title: '自定义项内容模板', routerLink: { name: 'ComponentFormBasicsTemplateContent' } }
            ]
          }
        ]
      },
      {
        i18nKey: 'app.aside.menu.formConfigTitle',
        children: [
          { title: '基础功能', routerLink: { name: 'ComponentFormConfigBase' } },
          { title: '数据类型', routerLink: { name: 'ComponentFormConfigField' } },
          { title: '横向排列', routerLink: { name: 'ComponentFormConfigHorizontal' } },
          { title: '上下布局', routerLink: { name: 'ComponentFormConfigVertical' } },
          { title: '标题冒号', routerLink: { name: 'ComponentFormConfigColon' } },
          { title: '标题加粗', routerLink: { name: 'ComponentFormConfigBold' } },
          { title: '文字提示', routerLink: { name: 'ComponentFormConfigTooltip' } },
          { title: '分行/分列', routerLink: { name: 'ComponentFormConfigGather' } },
          { title: '折叠表单', routerLink: { name: 'ComponentFormConfigCollapse' } },
          { title: '表单校验', routerLink: { name: 'ComponentFormConfigValid' } },
          {
            title: '渲染 - 配置式',
            children: [
              { title: 'input', routerLink: { name: 'ComponentFormConfigItemRenderInput' } },
              { title: 'textarea', routerLink: { name: 'ComponentFormConfigItemRenderTextarea' } },
              { title: 'select', routerLink: { name: 'ComponentFormConfigItemRenderSelect' } },
              { title: 'VxeInput', routerLink: { name: 'ComponentFormConfigItemRenderVxeInput' } },
              { title: 'VxeTextarea', routerLink: { name: 'ComponentFormConfigItemRenderVxeTextarea' } },
              { title: 'VxeNumberInput', routerLink: { name: 'ComponentFormConfigItemRenderVxeNumberInput' } },
              { title: 'VxeSelect', routerLink: { name: 'ComponentFormConfigItemRenderVxeSelect' } },
              { title: 'VxeDatePicker', routerLink: { name: 'ComponentFormConfigItemRenderVxeDatePicker' } },
              { title: 'VxeSwitch', routerLink: { name: 'ComponentFormConfigItemRenderVxeSwitch' } },
              { title: 'VxeRadioGroup', routerLink: { name: 'ComponentFormConfigItemRenderVxeRadioGroup' } },
              { title: 'VxeCheckboxGroup', routerLink: { name: 'ComponentFormConfigItemRenderVxeCheckboxGroup' } },
              { title: 'VxeImage', routerLink: { name: 'ComponentFormConfigItemRenderVxeImage' } },
              { title: 'VxeImageGroup', routerLink: { name: 'ComponentFormConfigItemRenderVxeImageGroup' } },
              { title: 'VxeUpload', routerLink: { name: 'ComponentFormConfigItemRenderVxeUpload' } },
              { title: '只读模式', routerLink: { name: 'ComponentFormConfigItemRenderReadonly' } },
              { title: '禁用模式', routerLink: { name: 'ComponentFormConfigItemRenderDisabled' } },
              { title: '使用第三方组件', isPlugin: true, linkUrl: 'https://vxeui.com/other4/#/plugin-render-element/form/itemRender/el-input' }
            ]
          },
          {
            title: '渲染 - 插槽式',
            children: [
              { title: 'VxeInput', routerLink: { name: 'ComponentFormConfigItemTemplateVxeInput' } },
              { title: 'VxeNumberInput', routerLink: { name: 'ComponentFormConfigItemTemplateVxeNumberInput' } },
              { title: 'VxeSelect', routerLink: { name: 'ComponentFormConfigItemTemplateVxeSelect' } },
              { title: 'VxeDatePicker', routerLink: { name: 'ComponentFormConfigItemTemplateVxeDatePicker' } },
              { title: 'VxeSwitch', routerLink: { name: 'ComponentFormConfigItemTemplateVxeSwitch' } },
              { title: 'VxeRadioGroup', routerLink: { name: 'ComponentFormConfigItemTemplateVxeRadioGroup' } },
              { title: 'VxeCheckboxGroup', routerLink: { name: 'ComponentFormConfigItemTemplateVxeCheckboxGroup' } },
              { title: 'VxeUpload', routerLink: { name: 'ComponentFormConfigItemTemplateVxeUpload' } },
              { title: '使用第三方组件', isPlugin: true, linkUrl: 'https://vxeui.com/other4/#/plugin-render-element/form/itemRender/el-input' }
            ]
          }
        ]
      },
      {
        i18nKey: 'app.aside.menu.formGlobalValidators',
        children: [
          { title: 'API', routerLink: { name: 'GlobalValidatorsFormAPI' } },
          { title: '表单项校验', routerLink: { name: 'GlobalValidatorsFormBase' } }
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
              { title: '实现一个附件上传', routerLink: { name: 'GlobalRendererFormItemMyItemUpload' } }
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
          { title: '限制最大数量', routerLink: { name: 'ComponentCheckboxMax' } }
        ]
      },
      {
        title: 'Input 输入框',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'input' } } },
          { title: '文本类型', routerLink: { name: 'ComponentInputText' } },
          { title: '搜索类型', routerLink: { name: 'ComponentInputSearch' } },
          { title: '密码类型', routerLink: { name: 'ComponentInputPassword' } },
          { title: '时间类型', routerLink: { name: 'ComponentInputTime' } },
          { title: '日期类型', routerLink: { name: 'ComponentInputDate' } },
          { title: '日期带时间类型', routerLink: { name: 'ComponentInputDatetime' } },
          { title: '周类型', routerLink: { name: 'ComponentInputWeek' } },
          { title: '月度类型', routerLink: { name: 'ComponentInputMonth' } },
          { title: '季度类型', routerLink: { name: 'ComponentInputQuarter' } },
          { title: '年度类型', routerLink: { name: 'ComponentInputYear' } },
          { title: '数值类型', routerLink: { name: 'ComponentInputNumber' } },
          { title: '整数类型', routerLink: { name: 'ComponentInputInteger' } },
          { title: '小数类型', routerLink: { name: 'ComponentInputFloat' } },
          { title: '显示字数统计', routerLink: { name: 'ComponentInputCount' } },
          { title: '自定义前缀图标', routerLink: { name: 'ComponentInputPrefix' } },
          { title: '自定义后缀图标', routerLink: { name: 'ComponentInputSuffix' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentInputTemplate' } }
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
              { title: '设置步数', routerLink: { name: 'ComponentNumberInputNumberStep' } },
              { title: '控制按钮', routerLink: { name: 'ComponentNumberInputNumberControls' } }
            ]
          },
          {
            title: '整数',
            children: [
              { title: '基础', routerLink: { name: 'ComponentNumberInputIntegerBase' } },
              { title: '可清除', routerLink: { name: 'ComponentNumberInputIntegerClearable' } },
              { title: '设置步数', routerLink: { name: 'ComponentNumberInputIntegerStep' } },
              { title: '控制按钮', routerLink: { name: 'ComponentNumberInputIntegerControls' } }
            ]
          },
          {
            title: '小数',
            children: [
              { title: '基础', routerLink: { name: 'ComponentNumberInputFloatBase' } },
              { title: '可清除', routerLink: { name: 'ComponentNumberInputFloatClearable' } },
              { title: '设置步数', routerLink: { name: 'ComponentNumberInputFloatStep' } },
              { title: '小数位数', routerLink: { name: 'ComponentNumberInputFloatDigits' } },
              { title: '控制按钮', routerLink: { name: 'ComponentNumberInputFloatControls' } }
            ]
          }
        ]
      },
      {
        title: 'PasswordInput 密码输入',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'password-input' } } },
          { title: '密码输入', routerLink: { name: 'ComponentPasswordInput' } }
        ]
      },
      {
        title: 'DatePicker 日期选择',
        children: [
          { title: '日期类型', routerLink: { name: 'ComponentDatePickerDate' } },
          { title: '时间类型', routerLink: { name: 'ComponentDatePickerTime' } },
          { title: '日期带时间类型', routerLink: { name: 'ComponentDatePickerDatetime' } },
          { title: '周类型', routerLink: { name: 'ComponentDatePickerWeek' } },
          { title: '月度类型', routerLink: { name: 'ComponentDatePickerMonth' } },
          { title: '季度类型', routerLink: { name: 'ComponentDatePickerQuarter' } },
          { title: '年度类型', routerLink: { name: 'ComponentDatePickerYear' } }
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
              { title: '可筛选', routerLink: { name: 'ComponentSelectBaseFilterable' } },
              { title: '分组', routerLink: { name: 'ComponentSelectBaseGroup' } },
              { title: '多选', routerLink: { name: 'ComponentSelectBaseMultiple' } },
              { title: '限制最大数量', routerLink: { name: 'ComponentSelectBaseMax' } },
              { title: '自定义插槽模板', routerLink: { name: 'ComponentSelectBaseTemplate' } }
            ]
          },
          {
            title: '配置式',
            children: [
              { title: '可清除', routerLink: { name: 'ComponentSelectConfigClearable' } },
              { title: '禁用', routerLink: { name: 'ComponentSelectConfigDisabled' } },
              { title: '加载中', routerLink: { name: 'ComponentSelectConfigLoading' } },
              { title: '可筛选', routerLink: { name: 'ComponentSelectConfigFilterable' } },
              { title: '分组', routerLink: { name: 'ComponentSelectConfigGroup' } },
              { title: '多选', routerLink: { name: 'ComponentSelectConfigMultiple' } },
              { title: '自定义插槽模板', routerLink: { name: 'ComponentSelectConfigTemplate' } }
            ]
          }
        ]
      },
      {
        title: 'TreeSelect 树形下拉框',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'treeSelect' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentTreeSelectSize' } },
          { title: '基础', routerLink: { name: 'ComponentTreeSelectBase' } },
          { title: '多选', routerLink: { name: 'ComponentTreeSelectMultiple' } },
          { title: '自定义图标', routerLink: { name: 'ComponentTreeSelectIcon' } },
          { title: '单选框', routerLink: { name: 'ComponentTreeSelectRadio' } },
          { title: '复选框', routerLink: { name: 'ComponentTreeSelectCheckbox' } },
          { title: '连接线', routerLink: { name: 'ComponentTreeSelectShowLine' } },
          { title: '懒加载子节点', routerLink: { name: 'ComponentTreeSelectLazy' } }
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
              { title: '多选模式', routerLink: { name: 'ComponentUploadFileMultiple' } },
              { title: '提示', routerLink: { name: 'ComponentUploadFileTip' } },
              { title: '上传进度', routerLink: { name: 'ComponentUploadFileProgress' } },
              { title: '唯一值模式', routerLink: { name: 'ComponentUploadFileSingleMode' } },
              { title: 'URL 模式', routerLink: { name: 'ComponentUploadFileUrlMode' } },
              { title: '指定文件类型', routerLink: { name: 'ComponentUploadFileTypes' } },
              { title: '限制上传数量', routerLink: { name: 'ComponentUploadFileLimitCount' } },
              { title: '限制附件大小', routerLink: { name: 'ComponentUploadFileLimitSize' } },
              { title: '自动隐藏按钮', routerLink: { name: 'ComponentUploadFileAutoHidden' } },
              { title: '失败重新上传', routerLink: { name: 'ComponentUploadFileShowError' } }
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
              { title: '多选模式', routerLink: { name: 'ComponentUploadImageMultiple' } },
              { title: '提示', routerLink: { name: 'ComponentUploadImageTip' } },
              { title: '上传进度', routerLink: { name: 'ComponentUploadImageProgress' } },
              { title: '唯一值模式', routerLink: { name: 'ComponentUploadImageSingleMode' } },
              { title: 'URL 模式', routerLink: { name: 'ComponentUploadImageUrlMode' } },
              { title: '缩略图链接地址', routerLink: { name: 'ComponentUploadImageThumbnailUrl' } },
              { title: '指定文件类型', routerLink: { name: 'ComponentUploadImageTypes' } },
              { title: '限制上传数量', routerLink: { name: 'ComponentUploadImageLimitCount' } },
              { title: '限制附件大小', routerLink: { name: 'ComponentUploadImageLimitSize' } },
              { title: '自动隐藏按钮', routerLink: { name: 'ComponentUploadImageAutoHidden' } },
              { title: '失败重新上传', routerLink: { name: 'ComponentUploadImageShowError' } }
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
          { title: '尺寸大小', routerLink: { name: 'ComponentTreeBaseSize' } },
          { title: '层级结构', routerLink: { name: 'ComponentTreeBaseHierarchy' } },
          { title: '平级结构', routerLink: { name: 'ComponentTreeBaseLeveling' } },
          { title: '高度', routerLink: { name: 'ComponentTreeBaseHeight' } },
          { title: '加载中', routerLink: { name: 'ComponentTreeBaseLoading' } },
          { title: '自定义字段', routerLink: { name: 'ComponentTreeBaseField' } },
          { title: '触发方式', routerLink: { name: 'ComponentTreeBaseTrigger' } },
          { title: '高亮当前节点', routerLink: { name: 'ComponentTreeBaseCurrent' } },
          { title: '隐藏图标', routerLink: { name: 'ComponentTreeBaseShowIcon' } },
          { title: '自定义图标', routerLink: { name: 'ComponentTreeBaseIcon' } },
          { title: '手风琴展开效果', routerLink: { name: 'ComponentTreeBaseAccordion' } },
          { title: '连接线', routerLink: { name: 'ComponentTreeBaseShowLine' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentTreeBaseTemplate' } }
        ]
      },
      {
        title: '单选框',
        children: [
          { title: '单选', routerLink: { name: 'ComponentTreeRadioBase' } },
          { title: '高亮选中节点', routerLink: { name: 'ComponentTreeRadioHighlight' } },
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
          { title: '节点不关联', routerLink: { name: 'ComponentTreeCheckboxCheckStrictly' } },
          { title: '禁用', routerLink: { name: 'ComponentTreeCheckboxCheckMethod' } },
          { title: '显示隐藏', routerLink: { name: 'ComponentTreeCheckboxVisibleMethod' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentTreeCheckboxTemplate' } }
        ]
      },
      {
        title: '懒加载',
        children: [
          { title: '懒加载子节点', routerLink: { name: 'ComponentTreeLazyLoadMethod' } },
          { title: '加载失败', routerLink: { name: 'ComponentTreeLazyError' } },
          { title: '显示连接线', routerLink: { name: 'ComponentTreeLazyShowLine' } }
        ]
      }
    ]
  },
  {
    i18nKey: 'app.aside.menu.feedbackTitle',
    children: [
      {
        title: 'Loading 加载中',
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
          { title: '内边距', routerLink: { name: 'ComponentDrawerPadding' } },
          { title: '加载中', routerLink: { name: 'ComponentDrawerLoading' } },
          { title: '点击遮罩层关闭', routerLink: { name: 'ComponentDrawerMaskClosable' } },
          { title: '操作按钮', routerLink: { name: 'ComponentDrawerButton' } },
          { title: '同时弹出多个抽屉', routerLink: { name: 'ComponentDrawerMultiple' } },
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
          { title: '文字提示', routerLink: { name: 'ComponentTooltip' } }
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
          { title: '锁定页面', routerLink: { name: 'ComponentModalModalLockView' } },
          { title: '拖动窗口', routerLink: { name: 'ComponentModalModalDraggable' } },
          { title: '同时弹出多个窗口', routerLink: { name: 'ComponentModalModalMultiple' } },
          { title: '按 Esc 键可关闭', routerLink: { name: 'ComponentModalModalEscClosable' } },
          { title: '拦截关闭', routerLink: { name: 'ComponentModalModalBeforeHide' } },
          { title: '操作按钮', routerLink: { name: 'ComponentModalModalButton' } },
          { title: '拖动调整宽高', routerLink: { name: 'ComponentModalModalResize' } },
          { title: '全屏展示', routerLink: { name: 'ComponentModalModalFullscreen' } },
          { title: '窗口最大化', routerLink: { name: 'ComponentModalModalMaximize' } },
          { title: '窗口最小化', routerLink: { name: 'ComponentModalModalMinimize' } },
          { title: '最大化与最小化', routerLink: { name: 'ComponentModalModalZoom' } },
          { title: '自定义窗口最小化的排列方式', routerLink: { name: 'ComponentModalModalMinimizeLayout' } },
          { title: '记忆功能', routerLink: { name: 'ComponentModalModalRemember' } },
          { title: '嵌入 iframe', routerLink: { name: 'ComponentModalModalIframe' } },
          { title: '完整功能', routerLink: { name: 'ComponentModalModalFull' } }
        ]
      }
    ]
  },
  {
    i18nKey: 'app.aside.menu.otherTitle',
    children: [
      // { title: 'Watermark 水印' },
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
              { title: '批量打印图片', routerLink: { name: 'ComponentPrintPageImage' } },
              { title: '分页打印表格', routerLink: { name: 'ComponentPrintPageTable' } },
              { title: '自定义模板', routerLink: { name: 'ComponentPrintPageTemplate' } }
            ]
          }
        ]
      }
    ]
  },
  {
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
              { title: '使用第三方组件', isPlugin: true, linkUrl: 'https://vxeui.com/other4/#/plugin-render-element/form-design/renderView' }
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
      }
      // { title: 'FlowDesign 流程设计器' },
      // { title: 'PrintDesign 打印设计器' }
    ]
  },
  {
    title: 'API',
    isExpand: true,
    children: []
  }
]
