import { NavVO } from './nav'

export const ganttNavConfig: NavVO & { children: NavVO[] } = {
  i18nKey: 'app.aside.menu.ganttTitle',
  children: [
    { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'gantt' } } },
    {
      title: '基础',
      children: [
        { title: '尺寸大小', routerLink: { name: 'ComponentGanttBaseSize' } },
        { title: '自定义字段', routerLink: { name: 'ComponentGanttBaseField' } },
        { title: '数据格式', routerLink: { name: 'ComponentGanttBaseData' } },
        { title: '表格宽度', routerLink: { name: 'ComponentGanttBaseTableWidth' } },
        { title: '边框', routerLink: { name: 'ComponentGanttBaseBorder' } },
        { title: '斑马线样式', routerLink: { name: 'ComponentGanttBaseStripe' } },
        { title: '高亮此刻线', routerLink: { name: 'ComponentGanttBaseShowNowLine' } },
        { title: '拖拽调整列宽', routerLink: { name: 'ComponentGanttBaseResizable' } },
        { title: '拖拽调整行高', routerLink: { name: 'ComponentGanttBaseResizableHeight' } },
        { title: '表格响应式高度', routerLink: { name: 'ComponentGanttBaseAutoHeight' } },
        { title: '冻结列', routerLink: { name: 'ComponentGanttBaseFixed' } },
        { title: '分组表头', routerLink: { name: 'ComponentGanttBaseGroup' } },
        { title: '排序', routerLink: { name: 'ComponentGanttBaseSort' } },
        { title: '筛选', routerLink: { name: 'ComponentGanttBaseFilter' } },
        { title: '加载中', routerLink: { name: 'ComponentGanttBaseLoading' } },
        { title: '拖拽调整视图宽度', routerLink: { name: 'ComponentGanttBaseResize' } }
      ]
    },
    {
      title: '任务条',
      children: [
        { title: '显示进度', routerLink: { name: 'ComponentGanttTaskBarShowProgress' } },
        { title: '显示标题', routerLink: { name: 'ComponentGanttTaskBarShowContent' } },
        { title: '圆角', routerLink: { name: 'ComponentGanttTaskBarRound' } },
        { title: '颜色', routerLink: { name: 'ComponentGanttTaskBarBarColor' } },
        { title: '提示信息', routerLink: { name: 'ComponentGanttTaskBarShowTooltip' } },
        {
          title: '自定义插槽模板',
          children: [
            { title: '自定义任务条内容', routerLink: { name: 'ComponentGanttTaskBarTemplateTaskBar' } },
            { title: '自定义任务条提示', routerLink: { name: 'ComponentGanttTaskBarTemplateTaskBarTip' } }
          ]
        }
      ]
    },
    {
      title: '任务视图',
      children: [
        { title: '网格样式', routerLink: { name: 'ComponentGanttTaskViewGridding' } },
        { title: '边框', routerLink: { name: 'ComponentGanttTaskViewBorder' } },
        { title: '行样式', routerLink: { name: 'ComponentGanttTaskViewRowStyle' } },
        { title: '行附加 className', routerLink: { name: 'ComponentGanttTaskViewRowClass' } },
        { title: '单元格样式', routerLink: { name: 'ComponentGanttTaskViewCellStyle' } },
        { title: '单元格附加 className', routerLink: { name: 'ComponentGanttTaskViewCellClass' } }
      ]
    },
    {
      title: '单元格配置',
      children: [
        { title: '设置单元格边距', routerLink: { name: 'ComponentGanttCellPadding' } },
        { title: '设置行高', routerLink: { name: 'ComponentGanttCellHeight' } }
      ]
    },
    {
      title: '单元格合并',
      children: [
        { title: '将多行进行合并', routerLink: { name: 'ComponentGanttMergeRow' } },
        { title: '将多列进行合并', routerLink: { name: 'ComponentGanttMergeColumn' } },
        { title: '表头合并', routerLink: { name: 'ComponentGanttMergeHeader' } }
      ]
    },
    {
      title: '表尾数据',
      children: [
        { title: '是否启用表尾', routerLink: { name: 'ComponentGanttFooterShowFooter' } },
        { title: '标准结构', routerLink: { name: 'ComponentGanttFooterFooterData' } }
      ]
    },
    {
      title: '单选框',
      children: [
        { title: '高亮选择行', routerLink: { name: 'ComponentGanttRadioHighlight' } },
        { title: '禁用', routerLink: { name: 'ComponentGanttRadioCheckMethod' } },
        { title: '显示隐藏', routerLink: { name: 'ComponentGanttRadioTrigger' } },
        { title: '触发方式', routerLink: { name: 'ComponentGanttRadioVisibleMethod' } }
      ]
    },
    {
      title: '复选框',
      children: [
        { title: '高亮选择行', routerLink: { name: 'ComponentGanttCheckboxHighlight' } },
        { title: '绑定字段', routerLink: { name: 'ComponentGanttCheckboxField' } },
        { title: '禁用', routerLink: { name: 'ComponentGanttCheckboxCheckMethod' } },
        { title: '显示隐藏', routerLink: { name: 'ComponentGanttCheckboxVisibleMethod' } },
        { title: '触发方式', routerLink: { name: 'ComponentGanttCheckboxTrigger' } },
        { title: '分页保留选中状态', routerLink: { name: 'ComponentGanttCheckboxReserve' } },
        { title: '分页显示保留选中状态', routerLink: { name: 'ComponentGanttCheckboxShowReserveStatus' } },
        { title: '鼠标滑动范围选择', routerLink: { name: 'ComponentGanttCheckboxRange' } },
        { title: '按键批量范围选择', routerLink: { name: 'ComponentGanttCheckboxBatch' } }
      ]
    },
    {
      title: '高亮行',
      children: [
        { title: '当前行', routerLink: { name: 'ComponentGanttCurrentRowBase' } },
        { title: '手动触发', routerLink: { name: 'ComponentGanttCurrentTrigger' } }
      ]
    },
    {
      title: '子任务',
      children: [
        { title: '平级结构', routerLink: { name: 'ComponentGanttTreeLeveling' } },
        { title: '层级结构', routerLink: { name: 'ComponentGanttTreeHierarchy' } },
        { title: '斑马线样式', routerLink: { name: 'ComponentGanttTreeStripe' } },
        { title: '序号', routerLink: { name: 'ComponentGanttTreeSeqMode' } },
        { title: '连接线', routerLink: { name: 'ComponentGanttTreeLine' } }
      ]
    },
    {
      title: '可编辑',
      children: [
        { title: '编辑表格单元格', routerLink: { name: 'ComponentGanttEditTableCell' } },
        { title: '编辑表格行', routerLink: { name: 'ComponentGanttEditTableRow' } },
        { title: '编辑任务条', routerLink: { name: 'ComponentGanttEditTaskBar' } }
      ]
    },
    {
      title: '数据校验',
      children: [
        { title: '校验模式', routerLink: { name: 'ComponentGanttValidateMode' } },
        { title: '校验指定单元格', routerLink: { name: 'ComponentGanttValidateValidateField' } },
        { title: '错误提示样式', routerLink: { name: 'ComponentGanttValidateTheme' } }
      ]
    },
    {
      title: '行高调整',
      children: [
        { title: '行高拖拽', routerLink: { name: 'ComponentGanttRowResizableBase' } },
        { title: '冻结列', routerLink: { name: 'ComponentGanttRowResizableFixed' } },
        { title: '双击自适应行高', routerLink: { name: 'ComponentGanttRowResizableDblclickAutoHeight' } },
        { title: '所有单元格可拖拽', routerLink: { name: 'ComponentGanttRowResizableAllRowDrag' } },
        { title: '手动操作行高', routerLink: { name: 'ComponentGanttRowResizableManual' } }
      ]
    },
    {
      title: '行拖拽',
      children: [
        { title: '拖拽调整行顺序', routerLink: { name: 'ComponentGanttRowDragSort' } },
        { title: '冻结列', routerLink: { name: 'ComponentGanttRowDragFixed' } },
        { title: '自定义图标', routerLink: { name: 'ComponentGanttRowDragIcon' } },
        {
          title: '子任务',
          children: [
            { title: '树拖拽', routerLink: { name: 'ComponentGanttRowDragTreeBase' } },
            { title: '同层级拖拽', routerLink: { name: 'ComponentGanttRowDragTreePeerDrag' } },
            { title: '跨层级拖拽', routerLink: { name: 'ComponentGanttRowDragTreeCossDrag' } },
            { title: '自己拖拽给自己子级', routerLink: { name: 'ComponentGanttRowDragTreeSelfToChildDrag' } },
            { title: '拖拽成子级', routerLink: { name: 'ComponentGanttRowDragTreeToChildDrag' } },
            { title: '跨表拖拽', routerLink: { name: 'ComponentGanttRowDragTreeCossTable' } }
          ]
        },
        { title: '拖拽拦截', routerLink: { name: 'ComponentGanttRowDragDragMethod' } },
        { title: '手动移动', routerLink: { name: 'ComponentGanttRowDragManual' } },
        { title: '跨表拖拽', routerLink: { name: 'ComponentGanttRowDragCossTable' } }
      ]
    },
    {
      title: '行分组',
      children: [
        { title: '行分组', routerLink: { name: 'ComponentGanttRowGroupBasic' } },
        { title: '按多字段分组', routerLink: { name: 'ComponentGanttRowGroupGroupFields' } },
        { title: '手动操作', routerLink: { name: 'ComponentGanttRowGroupHandleSet' } }
      ]
    },
    {
      title: '右键菜单',
      children: [
        { title: '自定义前缀', routerLink: { name: 'ComponentGanttMenuPrefixConfig' } },
        { title: '自定义后缀', routerLink: { name: 'ComponentGanttMenuSuffixConfig' } },
        { title: '完整右键菜单', routerLink: { name: 'ComponentGanttMenuFull' } },
        { title: '菜单权限控制', routerLink: { name: 'ComponentGanttMenuPrivilege' } }

      ]
    },
    {
      title: '查询表单',
      children: [
        { title: '查询表单', routerLink: { name: 'ComponentGanttFormSearch' } },
        { title: '带折叠的查询表单', routerLink: { name: 'ComponentGanttFormCollapse' } }
      ]
    },
    {
      title: '工具栏',
      children: [
        { title: '左侧按钮', routerLink: { name: 'ComponentGanttToolbarButtons' } },
        { title: '右侧按钮', routerLink: { name: 'ComponentGanttToolbarTools' } },
        { title: '最大化显示', routerLink: { name: 'ComponentGanttToolbarZoom' } },
        { title: '刷新列表', routerLink: { name: 'ComponentGanttToolbarRefresh' } }
      ]
    },
    {
      title: '个性化列',
      children: [
        { title: '使用工具栏', routerLink: { name: 'ComponentGanttCustomsToolbar' } },
        { title: '窗口模式', routerLink: { name: 'ComponentGanttCustomsModal' } },
        { title: '抽屉模式', routerLink: { name: 'ComponentGanttCustomsDrawer' } }
      ]
    },
    {
      title: '数据分页',
      children: [
        { title: '实现前端分页', routerLink: { name: 'ComponentGanttPagerMockPage' } },
        { title: '自定义布局', routerLink: { name: 'ComponentGanttPagerLayouts' } },
        { title: '自定义序号', routerLink: { name: 'ComponentGanttPagerStart' } }
      ]
    },
    {
      title: '日期轴',
      children: [
        { title: '自定义日期轴', routerLink: { name: 'ComponentGanttScalesDefault' } },
        { title: '年-月-日', routerLink: { name: 'ComponentGanttScalesYearMonthDate' } },
        { title: '年-周-日', routerLink: { name: 'ComponentGanttScalesYearWeekDate' } },
        { title: '季-月-日', routerLink: { name: 'ComponentGanttScalesQuarterMonthDate' } },
        { title: '周-星期-日', routerLink: { name: 'ComponentGanttScalesMonthDayDate' } },
        { title: '月-日', routerLink: { name: 'ComponentGanttScalesMonthDate' } },
        { title: '天-小时', routerLink: { name: 'ComponentGanttScalesDateHour' } },
        { title: '小时-分钟', routerLink: { name: 'ComponentGanttScalesHourMinute' } },
        { title: '分钟-秒', routerLink: { name: 'ComponentGanttScalesMinuteSecond' } },
        // { title: '日期间隔', routerLink: { name: 'ComponentGanttScalesMinuteStep' } },
        { title: '格式化列头标题', routerLink: { name: 'ComponentGanttScalesTitleFormat' } },
        { title: '自定义列头标题', routerLink: { name: 'ComponentGanttScalesTitleMethod' } },
        { title: '自定义列头样式', routerLink: { name: 'ComponentGanttScalesHeaderCellStyle' } },
        {
          title: '自定义插槽模板',
          children: [
            { title: '自定义标题模板', routerLink: { name: 'ComponentGanttScalesTemplateTitle' } }
          ]
        }
      ]
    },
    {
      title: '里程碑',
      children: [
        { title: '里程碑配置', routerLink: { name: 'ComponentGanttMilestoneType' } },
        { title: '自定义图标', routerLink: { name: 'ComponentGanttMilestoneIcon' } },
        { title: '图标状态颜色', routerLink: { name: 'ComponentGanttMilestoneIconStatus' } },
        { title: '图标状态样式', routerLink: { name: 'ComponentGanttMilestoneIconStyle' } }
      ]
    },
    {
      title: '多维度显示',
      children: [
        { title: '日期多维度切换', routerLink: { name: 'ComponentGanttDimensionDate' } },
        { title: '时间多维度切换', routerLink: { name: 'ComponentGanttDimensionTime' } }
      ]
    },
    {
      title: '任务可拖拽',
      children: [
        { title: '任务拖拽自动移动日期', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_gantt_chart_gantt_task_drag_drag' }, query: { previewPath: '%2FextendGanttChart%2Fgantt%2FtaskDrag%2Fdrag' } } },
        { title: '任务拖拽自动调整日期', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_gantt_chart_gantt_task_drag_resize' }, query: { previewPath: '%2FextendGanttChart%2Fgantt%2FtaskDrag%2Fresize' } } }
      ]
    },
    {
      title: '依赖线',
      children: [
        { title: '配置连接线', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_gantt_chart_gantt_dependency_links' }, query: { previewPath: '%2FextendGanttChart%2Fgantt%2Fdependency%2Flinks' } } },
        { title: '可视化创建线', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_gantt_chart_gantt_dependency_create_link' }, query: { previewPath: '%2FextendGanttChart%2Fgantt%2Fdependency%2FcreateLink' } } }
      ]
    },
    {
      title: '数据代理',
      children: [
        { title: '查询接口', routerLink: { name: 'ComponentGanttProxyQuery' } },
        { title: '分页查询接口', routerLink: { name: 'ComponentGanttProxyPager' } }
      ]
    },
    {
      title: '虚拟滚动（超大数据量表格）',
      children: [
        { title: '纵向虚拟滚动', routerLink: { name: 'ComponentGanttScrollVertical' } },
        { title: '子任务纵向虚拟滚动', routerLink: { name: 'ComponentGanttScrollTree' } }
      ]
    },
    {
      title: '滚动条',
      children: [
        { title: '滚动条样式', routerLink: { name: 'ComponentGantScrollbarBarStyle' } },
        { title: '滚动条位置', routerLink: { name: 'ComponentGantScrollbarBarPos' } }
      ]
    },
    {
      title: '自定义插槽模板',
      children: [
        { title: '自定义布局模板', routerLink: { name: 'ComponentGantTemplateLayout' } },
        { title: '自定义表单模板', routerLink: { name: 'ComponentGantTemplateForm' } },
        { title: '自定义单元格模板', routerLink: { name: 'ComponentGantTemplateDefault' } },
        { title: '自定义表头模板', routerLink: { name: 'ComponentGantTemplateHeader' } },
        { title: '自定义表尾模板', routerLink: { name: 'ComponentGantTemplateFooter' } },
        { title: '自定义单元格提示模板', routerLink: { name: 'ComponentGantTemplateTooltip' } },
        { title: '自定义分页模板', routerLink: { name: 'ComponentGantTemplatePager' } },
        { title: '自定义任务条模板', routerLink: { name: 'ComponentGantTemplateTaskBar' } },
        { title: '自定义任务视图标题模板', routerLink: { name: 'ComponentGantTemplateTaskCellTitle' } },
        { title: '自定义任务条提示模板', routerLink: { name: 'ComponentGantTemplateTaskBarTip' } },
        { title: '自定义复选框模板', routerLink: { name: 'ComponentGantTemplateCheckbox' } },
        { title: '自定义单选框模板', routerLink: { name: 'ComponentGantTemplateRadio' } },
        { title: '自定义筛选模板', routerLink: { name: 'ComponentGantTemplateFilter' } },
        { title: '自定义编辑模板', routerLink: { name: 'ComponentGantTemplateEdit' } },
        { title: '自定义单元格校验模板', routerLink: { name: 'ComponentGantTemplateValid' } }
      ]
    },
    {
      title: '功能示例',
      children: [
        { title: '商品计划进度', routerLink: { name: 'ComponentGanttOtherProductPlan' } }
      ]
    }
  ]
}
