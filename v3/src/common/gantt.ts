import { NavVO } from './nav'

export const ganttNavConfig: NavVO = {
  // Gantt 甘特图
  i18nKey: 'app.aside.menu.ganttTitle',
  icon: 'vxe-icon-chart-gantt',
  children: [
    { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'gantt' } }, keywords: 'vxe-gantt' },
    {
      // 基础
      i18nKey: 'app.aside.menu.ganttBase',
      children: [
        // 尺寸大小
        { i18nKey: 'app.aside.menu.ganttSize', routerLink: { name: 'ComponentGanttBaseSize' } },
        // 自定义字段
        { i18nKey: 'app.aside.menu.ganttCustomField', routerLink: { name: 'ComponentGanttBaseField' } },
        // 数据格式
        { i18nKey: 'app.aside.menu.ganttDataFormat', routerLink: { name: 'ComponentGanttBaseData' } },
        // 日期解析格式
        { i18nKey: 'app.aside.menu.ganttDateFormat', routerLink: { name: 'ComponentGanttBaseDate' } },
        // 表格宽度
        { i18nKey: 'app.aside.menu.ganttTableWidth', routerLink: { name: 'ComponentGanttBaseTableWidth' } },
        // 边框
        { i18nKey: 'app.aside.menu.ganttBorder', routerLink: { name: 'ComponentGanttBaseBorder' } },
        // 斑马线样式
        { i18nKey: 'app.aside.menu.ganttStripe', routerLink: { name: 'ComponentGanttBaseStripe' } },
        // 拖拽调整列宽
        { i18nKey: 'app.aside.menu.ganttResizeColumnWidth', routerLink: { name: 'ComponentGanttBaseResizable' } },
        // 拖拽调整行高
        { i18nKey: 'app.aside.menu.ganttResizeRowHeight', routerLink: { name: 'ComponentGanttBaseResizableHeight' } },
        // 表格响应式高度
        { i18nKey: 'app.aside.menu.ganttResponsiveHeight', routerLink: { name: 'ComponentGanttBaseAutoHeight' } },
        // 冻结列
        { i18nKey: 'app.aside.menu.ganttFixedColumn', routerLink: { name: 'ComponentGanttBaseFixed' } },
        // 分组表头
        { i18nKey: 'app.aside.menu.ganttGroupHeader', routerLink: { name: 'ComponentGanttBaseGroup' } },
        // 排序
        { i18nKey: 'app.aside.menu.ganttSort', routerLink: { name: 'ComponentGanttBaseSort' } },
        // 筛选
        { i18nKey: 'app.aside.menu.ganttFilter', routerLink: { name: 'ComponentGanttBaseFilter' } },
        // 加载中
        { i18nKey: 'app.aside.menu.ganttLoading', routerLink: { name: 'ComponentGanttBaseLoading' } },
        // 拖拽调整视图宽度
        { i18nKey: 'app.aside.menu.ganttResizeViewWidth', routerLink: { name: 'ComponentGanttBaseResize' } }
      ]
    },
    {
      // 此刻线
      i18nKey: 'app.aside.menu.ganttNowLine',
      children: [
        // 高亮此刻线
        { i18nKey: 'app.aside.menu.ganttHighlightNowLine', routerLink: { name: 'ComponentGanttNowLineShowNowLine' } },
        // 线颜色
        { i18nKey: 'app.aside.menu.ganttLineColor', routerLink: { name: 'ComponentGanttNowLineColor' } },
        // 线宽度
        { i18nKey: 'app.aside.menu.ganttLineWidth', routerLink: { name: 'ComponentGanttNowLineWidth' } },
        // 显示方式
        { i18nKey: 'app.aside.menu.ganttDisplayMode', routerLink: { name: 'ComponentGanttNowLineMode' } }
      ]
    },
    {
      // 任务条
      i18nKey: 'app.aside.menu.ganttTaskBar',
      children: [
        // 显示进度
        { i18nKey: 'app.aside.menu.ganttShowProgress', routerLink: { name: 'ComponentGanttTaskBarShowProgress' } },
        // 显示标题
        { i18nKey: 'app.aside.menu.ganttShowTitle', routerLink: { name: 'ComponentGanttTaskBarShowContent' } },
        // 圆角
        { i18nKey: 'app.aside.menu.ganttRound', routerLink: { name: 'ComponentGanttTaskBarRound' } },
        // 颜色
        { i18nKey: 'app.aside.menu.ganttColor', routerLink: { name: 'ComponentGanttTaskBarBarColor' } },
        // 提示信息
        { i18nKey: 'app.aside.menu.ganttTooltipInfo', routerLink: { name: 'ComponentGanttTaskBarShowTooltip' } },
        {
          // 自定义插槽模板
          i18nKey: 'app.aside.menu.ganttCustomSlotTemplate',
          children: [
            // 自定义任务条内容
            { i18nKey: 'app.aside.menu.ganttCustomTaskBarContent', routerLink: { name: 'ComponentGanttTaskBarTemplateTaskBar' } },
            // 自定义任务条提示
            { i18nKey: 'app.aside.menu.ganttCustomTaskBarTip', routerLink: { name: 'ComponentGanttTaskBarTemplateTaskBarTip' } }
          ]
        }
      ]
    },
    {
      // 任务视图
      i18nKey: 'app.aside.menu.ganttTaskView',
      children: [
        // 网格样式
        { i18nKey: 'app.aside.menu.ganttGridStyle', routerLink: { name: 'ComponentGanttTaskViewGridding' } },
        // 边框
        { i18nKey: 'app.aside.menu.ganttBorder', routerLink: { name: 'ComponentGanttTaskViewBorder' } },
        // 单元格宽度
        { i18nKey: 'app.aside.menu.ganttCellWidth', routerLink: { name: 'ComponentGanttTaskViewCellWidth' } },
        // 行样式
        { i18nKey: 'app.aside.menu.ganttRowStyle', routerLink: { name: 'ComponentGanttTaskViewRowStyle' } },
        // 行附加 className
        { i18nKey: 'app.aside.menu.ganttRowClass', routerLink: { name: 'ComponentGanttTaskViewRowClass' } },
        // 单元格样式
        { i18nKey: 'app.aside.menu.ganttCellStyle', routerLink: { name: 'ComponentGanttTaskViewCellStyle' } },
        // 单元格附加 className
        { i18nKey: 'app.aside.menu.ganttCellClass', routerLink: { name: 'ComponentGanttTaskViewCellClass' } }
      ]
    },
    {
      // 折叠面板
      i18nKey: 'app.aside.menu.ganttCollapsePanel',
      children: [
        // 允许折叠面板
        { i18nKey: 'app.aside.menu.ganttAllowCollapse', routerLink: { name: 'ComponentGanttTaskSplitShowCollapse' } },
        // 拖拽调整宽度
        { i18nKey: 'app.aside.menu.ganttResizeWidth', routerLink: { name: 'ComponentGanttTaskSplitResize' } },
        // 显示折叠按钮
        { i18nKey: 'app.aside.menu.ganttShowCollapseButton', routerLink: { name: 'ComponentGanttTaskSplitCollapseBtn' } },
        // 显示动画效果
        { i18nKey: 'app.aside.menu.ganttShowAnimation', routerLink: { name: 'ComponentGanttTaskSplitAnimation' } }
      ]
    },
    {
      // 单元格配置
      i18nKey: 'app.aside.menu.ganttCellConfig',
      children: [
        // 设置单元格边距
        { i18nKey: 'app.aside.menu.ganttSetCellPadding', routerLink: { name: 'ComponentGanttCellPadding' } },
        // 设置行高
        { i18nKey: 'app.aside.menu.ganttSetRowHeight', routerLink: { name: 'ComponentGanttCellHeight' } }
      ]
    },
    {
      // 单元格合并
      i18nKey: 'app.aside.menu.ganttCellMerge',
      children: [
        // 将多行进行合并
        { i18nKey: 'app.aside.menu.ganttMergeRows', routerLink: { name: 'ComponentGanttMergeRow' } },
        // 将多列进行合并
        { i18nKey: 'app.aside.menu.ganttMergeColumns', routerLink: { name: 'ComponentGanttMergeColumn' } },
        // 表头合并
        { i18nKey: 'app.aside.menu.ganttMergeHeader', routerLink: { name: 'ComponentGanttMergeHeader' } }
      ]
    },
    {
      // 表尾数据
      i18nKey: 'app.aside.menu.ganttFooterData',
      children: [
        // 是否启用表尾
        { i18nKey: 'app.aside.menu.ganttEnableFooter', routerLink: { name: 'ComponentGanttFooterShowFooter' } },
        // 标准结构
        { i18nKey: 'app.aside.menu.ganttStandardStructure', routerLink: { name: 'ComponentGanttFooterFooterData' } }
      ]
    },
    {
      // 单选框
      i18nKey: 'app.aside.menu.ganttRadio',
      children: [
        // 高亮选择行
        { i18nKey: 'app.aside.menu.ganttHighlightSelectedRow', routerLink: { name: 'ComponentGanttRadioHighlight' } },
        // 禁用
        { i18nKey: 'app.aside.menu.ganttDisabled', routerLink: { name: 'ComponentGanttRadioCheckMethod' } },
        // 显示隐藏
        { i18nKey: 'app.aside.menu.ganttShowHide', routerLink: { name: 'ComponentGanttRadioTrigger' } },
        // 触发方式
        { i18nKey: 'app.aside.menu.ganttTriggerMode', routerLink: { name: 'ComponentGanttRadioVisibleMethod' } }
      ]
    },
    {
      // 复选框
      i18nKey: 'app.aside.menu.ganttCheckbox',
      children: [
        // 高亮选择行
        { i18nKey: 'app.aside.menu.ganttHighlightSelectedRow', routerLink: { name: 'ComponentGanttCheckboxHighlight' } },
        // 绑定字段
        { i18nKey: 'app.aside.menu.ganttBindField', routerLink: { name: 'ComponentGanttCheckboxField' } },
        // 禁用
        { i18nKey: 'app.aside.menu.ganttDisabled', routerLink: { name: 'ComponentGanttCheckboxCheckMethod' } },
        // 显示隐藏
        { i18nKey: 'app.aside.menu.ganttShowHide', routerLink: { name: 'ComponentGanttCheckboxVisibleMethod' } },
        // 触发方式
        { i18nKey: 'app.aside.menu.ganttTriggerMode', routerLink: { name: 'ComponentGanttCheckboxTrigger' } },
        // 分页保留选中状态
        { i18nKey: 'app.aside.menu.ganttPaginationKeepSelected', routerLink: { name: 'ComponentGanttCheckboxReserve' } },
        // 分页显示保留选中状态
        { i18nKey: 'app.aside.menu.ganttPaginationShowKeepSelected', routerLink: { name: 'ComponentGanttCheckboxShowReserveStatus' } },
        // 鼠标滑动范围选择
        { i18nKey: 'app.aside.menu.ganttMouseDragRangeSelect', routerLink: { name: 'ComponentGanttCheckboxRange' } },
        // 按键批量范围选择
        { i18nKey: 'app.aside.menu.ganttKeyboardBatchRangeSelect', routerLink: { name: 'ComponentGanttCheckboxBatch' } }
      ]
    },
    {
      // 高亮行
      i18nKey: 'app.aside.menu.ganttHighlightRow',
      children: [
        // 当前行
        { i18nKey: 'app.aside.menu.ganttCurrentRow', routerLink: { name: 'ComponentGanttCurrentRowBase' } },
        // 手动触发
        { i18nKey: 'app.aside.menu.ganttManualTrigger', routerLink: { name: 'ComponentGanttCurrentTrigger' } }
      ]
    },
    {
      // 子任务
      i18nKey: 'app.aside.menu.ganttSubTask',
      children: [
        // 平级结构
        { i18nKey: 'app.aside.menu.ganttLeveling', routerLink: { name: 'ComponentGanttTreeLeveling' } },
        // 层级结构
        { i18nKey: 'app.aside.menu.ganttHierarchy', routerLink: { name: 'ComponentGanttTreeHierarchy' } },
        // 斑马线样式
        { i18nKey: 'app.aside.menu.ganttStripe', routerLink: { name: 'ComponentGanttTreeStripe' } },
        // 序号
        { i18nKey: 'app.aside.menu.ganttSeq', routerLink: { name: 'ComponentGanttTreeSeqMode' } },
        // 树展开按钮
        { i18nKey: 'app.aside.menu.ganttTreeExpandButton', routerLink: { name: 'ComponentGanttTreeIcon' } },
        // 连接线
        { i18nKey: 'app.aside.menu.ganttConnectionLine', routerLink: { name: 'ComponentGanttTreeLine' } }
      ]
    },
    {
      // 行内展示子任务
      i18nKey: 'app.aside.menu.ganttInlineSubTask',
      children: [
        // 父级行内展示子任务
        { i18nKey: 'app.aside.menu.ganttParentInlineSubTask', routerLink: { name: 'ComponentGanttTreeSubviewInline' } },
        // 是否显示总览任务
        { i18nKey: 'app.aside.menu.ganttShowOverview', routerLink: { name: 'ComponentGanttTreeSubviewShowOverview' } },
        // 总览任务条样式
        { i18nKey: 'app.aside.menu.ganttOverviewBarStyle', routerLink: { name: 'ComponentGanttTreeSubviewBarColor' } },
        {
          // 自定义插槽模板
          i18nKey: 'app.aside.menu.ganttCustomSlotTemplate',
          children: [
            // 任务条模板
            { i18nKey: 'app.aside.menu.ganttTaskBarTemplate', routerLink: { name: 'ComponentGanttTreeSubviewTemplateTaskBar' } },
            // 任务条总览模板
            { i18nKey: 'app.aside.menu.ganttTaskBarOverviewTemplate', routerLink: { name: 'ComponentGanttTreeSubviewTemplateTaskBarOverview' } }
          ]
        },
        // 任务条可拖拽
        { i18nKey: 'app.aside.menu.ganttTaskBarDraggable', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_gantt_chart_gantt_subview_drag' }, query: { previewPath: '%2FextendGanttChart%2Fgantt%2Fsubview%2Fdrag' } } },
        // 连接线
        { i18nKey: 'app.aside.menu.ganttConnectionLine', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_gantt_chart_gantt_subview_links' }, query: { previewPath: '%2FextendGanttChart%2Fgantt%2Fsubview%2Flinks' } } }
      ]
    },
    {
      // 可编辑
      i18nKey: 'app.aside.menu.ganttEditable',
      children: [
        // 编辑表格单元格
        { i18nKey: 'app.aside.menu.ganttEditTableCell', routerLink: { name: 'ComponentGanttEditTableCell' } },
        // 编辑表格行
        { i18nKey: 'app.aside.menu.ganttEditTableRow', routerLink: { name: 'ComponentGanttEditTableRow' } },
        // 编辑任务条
        { i18nKey: 'app.aside.menu.ganttEditTaskBar', routerLink: { name: 'ComponentGanttEditTaskBar' } }
      ]
    },
    {
      // 数据校验
      i18nKey: 'app.aside.menu.ganttDataValidation',
      children: [
        // 校验模式
        { i18nKey: 'app.aside.menu.ganttValidationMode', routerLink: { name: 'ComponentGanttValidateMode' } },
        // 校验指定单元格
        { i18nKey: 'app.aside.menu.ganttValidateSpecifiedCell', routerLink: { name: 'ComponentGanttValidateValidateField' } },
        // 错误提示样式
        { i18nKey: 'app.aside.menu.ganttErrorTipStyle', routerLink: { name: 'ComponentGanttValidateTheme' } }
      ]
    },
    {
      // 行高调整
      i18nKey: 'app.aside.menu.ganttRowHeightResize',
      children: [
        // 行高拖拽
        { i18nKey: 'app.aside.menu.ganttRowHeightDrag', routerLink: { name: 'ComponentGanttRowResizableBase' } },
        // 冻结列
        { i18nKey: 'app.aside.menu.ganttFixedColumn', routerLink: { name: 'ComponentGanttRowResizableFixed' } },
        // 双击自适应行高
        { i18nKey: 'app.aside.menu.ganttDblclickAutoRowHeight', routerLink: { name: 'ComponentGanttRowResizableDblclickAutoHeight' } },
        // 所有单元格可拖拽
        { i18nKey: 'app.aside.menu.ganttAllCellsDraggable', routerLink: { name: 'ComponentGanttRowResizableAllRowDrag' } },
        // 手动操作行高
        { i18nKey: 'app.aside.menu.ganttManualRowHeight', routerLink: { name: 'ComponentGanttRowResizableManual' } }
      ]
    },
    {
      // 行拖拽
      i18nKey: 'app.aside.menu.ganttRowDrag',
      children: [
        // 拖拽调整行顺序
        { i18nKey: 'app.aside.menu.ganttDragReorderRow', routerLink: { name: 'ComponentGanttRowDragSort' } },
        // 冻结列
        { i18nKey: 'app.aside.menu.ganttFixedColumn', routerLink: { name: 'ComponentGanttRowDragFixed' } },
        // 自定义图标
        { i18nKey: 'app.aside.menu.ganttCustomIcon', routerLink: { name: 'ComponentGanttRowDragIcon' } },
        {
          // 子任务
          i18nKey: 'app.aside.menu.ganttSubTask',
          children: [
            // 树拖拽
            { i18nKey: 'app.aside.menu.ganttTreeDrag', routerLink: { name: 'ComponentGanttRowDragTreeBase' } },
            // 同层级拖拽
            { i18nKey: 'app.aside.menu.ganttPeerLevelDrag', routerLink: { name: 'ComponentGanttRowDragTreePeerDrag' } },
            // 跨层级拖拽
            { i18nKey: 'app.aside.menu.ganttCrossLevelDrag', routerLink: { name: 'ComponentGanttRowDragTreeCossDrag' } },
            // 自己拖拽给自己子级
            { i18nKey: 'app.aside.menu.ganttDragSelfToChild', routerLink: { name: 'ComponentGanttRowDragTreeSelfToChildDrag' } },
            // 拖拽成子级
            { i18nKey: 'app.aside.menu.ganttDragToChild', routerLink: { name: 'ComponentGanttRowDragTreeToChildDrag' } },
            // 跨表拖拽
            { i18nKey: 'app.aside.menu.ganttCrossTableDrag', routerLink: { name: 'ComponentGanttRowDragTreeCossTable' } }
          ]
        },
        // 拖拽事件
        { i18nKey: 'app.aside.menu.ganttDragEvents', routerLink: { name: 'ComponentGanttRowDragEvents' } },
        // 拖拽拦截
        { i18nKey: 'app.aside.menu.ganttDragIntercept', routerLink: { name: 'ComponentGanttRowDragDragMethod' } },
        // 手动移动
        { i18nKey: 'app.aside.menu.ganttManualMove', routerLink: { name: 'ComponentGanttRowDragManual' } },
        // 跨表拖拽
        { i18nKey: 'app.aside.menu.ganttCrossTableDrag', routerLink: { name: 'ComponentGanttRowDragCossTable' } }
      ]
    },
    {
      // 行分组
      i18nKey: 'app.aside.menu.ganttRowGroup',
      children: [
        // 行分组
        { i18nKey: 'app.aside.menu.ganttRowGroup', routerLink: { name: 'ComponentGanttRowGroupBasic' } },
        // 按多字段分组
        { i18nKey: 'app.aside.menu.ganttGroupByMultipleFields', routerLink: { name: 'ComponentGanttRowGroupGroupFields' } },
        // 手动操作
        { i18nKey: 'app.aside.menu.ganttManualOperation', routerLink: { name: 'ComponentGanttRowGroupHandleSet' } }
      ]
    },
    {
      // 右键菜单
      i18nKey: 'app.aside.menu.ganttContextMenu',
      children: [
        // 自定义前缀
        { i18nKey: 'app.aside.menu.ganttCustomPrefix', routerLink: { name: 'ComponentGanttMenuPrefixConfig' } },
        // 自定义后缀
        { i18nKey: 'app.aside.menu.ganttCustomSuffix', routerLink: { name: 'ComponentGanttMenuSuffixConfig' } },
        // 完整右键菜单
        { i18nKey: 'app.aside.menu.ganttFullContextMenu', routerLink: { name: 'ComponentGanttMenuFull' } },
        // 菜单权限控制
        { i18nKey: 'app.aside.menu.ganttMenuPermissionControl', routerLink: { name: 'ComponentGanttMenuPrivilege' } }
      ]
    },
    {
      // 查询表单
      i18nKey: 'app.aside.menu.ganttQueryForm',
      children: [
        // 查询表单
        { i18nKey: 'app.aside.menu.ganttQueryForm', routerLink: { name: 'ComponentGanttFormSearch' } },
        // 带折叠的查询表单
        { i18nKey: 'app.aside.menu.ganttCollapsibleQueryForm', routerLink: { name: 'ComponentGanttFormCollapse' } }
      ]
    },
    {
      // 工具栏
      i18nKey: 'app.aside.menu.ganttToolbar',
      children: [
        // 左侧按钮
        { i18nKey: 'app.aside.menu.ganttLeftButtons', routerLink: { name: 'ComponentGanttToolbarButtons' } },
        // 右侧按钮
        { i18nKey: 'app.aside.menu.ganttRightButtons', routerLink: { name: 'ComponentGanttToolbarTools' } },
        // 最大化显示
        { i18nKey: 'app.aside.menu.ganttMaximizeDisplay', routerLink: { name: 'ComponentGanttToolbarZoom' } },
        // 刷新列表
        { i18nKey: 'app.aside.menu.ganttRefreshList', routerLink: { name: 'ComponentGanttToolbarRefresh' } }
      ]
    },
    {
      // 个性化设置
      i18nKey: 'app.aside.menu.ganttPersonalization',
      children: [
        // 使用工具栏
        { i18nKey: 'app.aside.menu.ganttUseToolbar', routerLink: { name: 'ComponentGanttCustomsToolbar' } },
        // 窗口模式
        { i18nKey: 'app.aside.menu.ganttWindowMode', routerLink: { name: 'ComponentGanttCustomsModal' } },
        // 抽屉模式
        { i18nKey: 'app.aside.menu.ganttDrawerMode', routerLink: { name: 'ComponentGanttCustomsDrawer' } }
      ]
    },
    {
      // 数据分页
      i18nKey: 'app.aside.menu.ganttDataPagination',
      children: [
        // 实现前端分页
        { i18nKey: 'app.aside.menu.ganttFrontendPagination', routerLink: { name: 'ComponentGanttPagerMockPage' } },
        // 自定义布局
        { i18nKey: 'app.aside.menu.ganttCustomLayout', routerLink: { name: 'ComponentGanttPagerLayouts' } },
        // 自定义序号
        { i18nKey: 'app.aside.menu.ganttCustomSeq', routerLink: { name: 'ComponentGanttPagerStart' } }
      ]
    },
    {
      // 日期轴
      i18nKey: 'app.aside.menu.ganttDateAxis',
      children: [
        {
          // 基础配置
          i18nKey: 'app.aside.menu.ganttBasicConfig',
          children: [
            // 年视图
            { i18nKey: 'app.aside.menu.ganttYearView', routerLink: { name: 'ComponentGanttScalesYear' } },
            // 季视图
            { i18nKey: 'app.aside.menu.ganttQuarterView', routerLink: { name: 'ComponentGanttScalesYearQuartery' } },
            // 月视图
            { i18nKey: 'app.aside.menu.ganttMonthView', routerLink: { name: 'ComponentGanttScalesYearMonth' } },
            // 周视图
            { i18nKey: 'app.aside.menu.ganttWeekView', routerLink: { name: 'ComponentGanttScalesMonthWeek' } },
            // 天视图
            { i18nKey: 'app.aside.menu.ganttDayView', routerLink: { name: 'ComponentGanttScalesMonthDate' } },
            // 星期视图
            { i18nKey: 'app.aside.menu.ganttWeekdayView', routerLink: { name: 'ComponentGanttScalesMonthDayDate' } },
            // 小时视图
            { i18nKey: 'app.aside.menu.ganttHourView', routerLink: { name: 'ComponentGanttScalesDateHour' } },
            // 分钟视图
            { i18nKey: 'app.aside.menu.ganttMinuteView', routerLink: { name: 'ComponentGanttScalesHourMinute' } },
            // 秒视图
            { i18nKey: 'app.aside.menu.ganttSecondView', routerLink: { name: 'ComponentGanttScalesMinuteSecond' } }
          ]
        },
        {
          // 设置跨度
          i18nKey: 'app.aside.menu.ganttSetStep',
          children: [
            // 年视图
            { i18nKey: 'app.aside.menu.ganttYearView', routerLink: { name: 'ComponentGanttScalesStepYear' } },
            // 季视图
            { i18nKey: 'app.aside.menu.ganttQuarterView', routerLink: { name: 'ComponentGanttScalesStepYearQuartery' } },
            // 月视图
            { i18nKey: 'app.aside.menu.ganttMonthView', routerLink: { name: 'ComponentGanttScalesStepYearMonth' } },
            // 周视图
            { i18nKey: 'app.aside.menu.ganttWeekView', routerLink: { name: 'ComponentGanttScalesStepMonthWeek' } },
            // 天视图
            { i18nKey: 'app.aside.menu.ganttDayView', routerLink: { name: 'ComponentGanttScalesStepMonthDate' } },
            // 星期视图
            { i18nKey: 'app.aside.menu.ganttWeekdayView', routerLink: { name: 'ComponentGanttScalesStepMonthDayDate' } },
            // 小时视图
            { i18nKey: 'app.aside.menu.ganttHourView', routerLink: { name: 'ComponentGanttScalesStepDateHour' } },
            // 分钟视图
            { i18nKey: 'app.aside.menu.ganttMinuteView', routerLink: { name: 'ComponentGanttScalesStepHourMinute' } },
            // 秒视图
            { i18nKey: 'app.aside.menu.ganttSecondView', routerLink: { name: 'ComponentGanttScalesStepMinuteSecond' } }
          ]
        },
        // 自定义日期轴
        { i18nKey: 'app.aside.menu.ganttCustomDateAxis', routerLink: { name: 'ComponentGanttScalesDefault' } },
        // { title: '日', routerLink: { name: 'ComponentGanttScalesDate' } },
        // { title: '年-月-日', routerLink: { name: 'ComponentGanttScalesYearMonthDate' } },
        // { title: '年-周-日', routerLink: { name: 'ComponentGanttScalesYearWeekDate' } },
        // { title: '季-月-日', routerLink: { name: 'ComponentGanttScalesQuarterMonthDate' } },
        // 自定义周的开始日
        { i18nKey: 'app.aside.menu.ganttCustomWeekStartDay', routerLink: { name: 'ComponentGanttScalesWeekDayDate' } },
        // { title: '按天来显示小时', routerLink: { name: 'ComponentGanttScalesHourToDate' } },
        // 格式化列头标题
        { i18nKey: 'app.aside.menu.ganttFormatHeaderTitle', routerLink: { name: 'ComponentGanttScalesTitleFormat' } },
        // 自定义列头标题
        { i18nKey: 'app.aside.menu.ganttCustomHeaderTitle', routerLink: { name: 'ComponentGanttScalesTitleMethod' } },
        // 自定义列头样式
        { i18nKey: 'app.aside.menu.ganttCustomHeaderStyle', routerLink: { name: 'ComponentGanttScalesHeaderCellStyle' } },
        {
          // 自定义插槽模板
          i18nKey: 'app.aside.menu.ganttCustomSlotTemplate',
          children: [
            // 自定义标题模板
            { i18nKey: 'app.aside.menu.ganttCustomTitleTemplate', routerLink: { name: 'ComponentGanttScalesTemplateTitle' } }
          ]
        }
      ]
    },
    {
      // 多维度显示
      i18nKey: 'app.aside.menu.ganttMultiDimension',
      children: [
        // 日期多维度切换
        { i18nKey: 'app.aside.menu.ganttDateDimensionSwitch', routerLink: { name: 'ComponentGanttDimensionDate' } },
        // 时间多维度切换
        { i18nKey: 'app.aside.menu.ganttTimeDimensionSwitch', routerLink: { name: 'ComponentGanttDimensionTime' } }
      ]
    },
    {
      // 里程碑
      i18nKey: 'app.aside.menu.ganttMilestone',
      children: [
        // 里程碑配置
        { i18nKey: 'app.aside.menu.ganttMilestoneConfig', routerLink: { name: 'ComponentGanttMilestoneType' } },
        // 自定义图标
        { i18nKey: 'app.aside.menu.ganttCustomIcon', routerLink: { name: 'ComponentGanttMilestoneIcon' } },
        // 图标状态颜色
        { i18nKey: 'app.aside.menu.ganttIconStatusColor', routerLink: { name: 'ComponentGanttMilestoneIconStatus' } },
        // 图标状态样式
        { i18nKey: 'app.aside.menu.ganttIconStatusStyle', routerLink: { name: 'ComponentGanttMilestoneIconStyle' } }
      ]
    },
    {
      // 任务可拖拽
      i18nKey: 'app.aside.menu.ganttTaskDraggable',
      children: [
        // 任务拖拽自动移动日期
        { i18nKey: 'app.aside.menu.ganttTaskDragAutoMoveDate', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_gantt_chart_gantt_task_drag_drag' }, query: { previewPath: '%2FextendGanttChart%2Fgantt%2FtaskDrag%2Fdrag' } } },
        // 任务拖拽自动调整日期
        { i18nKey: 'app.aside.menu.ganttTaskDragAutoResizeDate', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_gantt_chart_gantt_task_drag_resize' }, query: { previewPath: '%2FextendGanttChart%2Fgantt%2FtaskDrag%2Fresize' } } },
        // 拖拽后识别依赖自动排期
        { i18nKey: 'app.aside.menu.ganttAutoScheduleAfterDrag', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_gantt_chart_gantt_dependency_move_update' }, query: { previewPath: '%2FextendGanttChart%2Fgantt%2Fdependency%2FmoveUpdate' } } }
      ]
    },
    {
      // 依赖线
      i18nKey: 'app.aside.menu.ganttDependencyLine',
      children: [
        // 配置连接线
        { i18nKey: 'app.aside.menu.ganttConfigConnectionLine', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_gantt_chart_gantt_dependency_links' }, query: { previewPath: '%2FextendGanttChart%2Fgantt%2Fdependency%2Flinks' } } },
        // 可视化创建线
        { i18nKey: 'app.aside.menu.ganttVisualCreateLine', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_gantt_chart_gantt_dependency_create_link' }, query: { previewPath: '%2FextendGanttChart%2Fgantt%2Fdependency%2FcreateLink' } } }
      ]
    },
    {
      // 关键路径
      i18nKey: 'app.aside.menu.ganttCriticalPath',
      children: [
        // 自动计算关键路径
        { i18nKey: 'app.aside.menu.ganttAutoCalculateCriticalPath', isEnterprise: true, routerLink: { name: 'EnterprisePreview', params: { previewCode: 'extend_gantt_chart_gantt_critical_path_show_critical_path' }, query: { previewPath: '%2FextendGanttChart%2Fgantt%2FcriticalPath%2Flinks' } } }
      ]
    },
    {
      // 数据代理
      i18nKey: 'app.aside.menu.ganttDataProxy',
      children: [
        // 查询接口
        { i18nKey: 'app.aside.menu.ganttQueryApi', routerLink: { name: 'ComponentGanttProxyQuery' } },
        // 分页查询接口
        { i18nKey: 'app.aside.menu.ganttPaginationQueryApi', routerLink: { name: 'ComponentGanttProxyPager' } }
      ]
    },
    {
      // 虚拟滚动（超大数据量表格）
      i18nKey: 'app.aside.menu.ganttVirtualScrollLargeData',
      children: [
        // 纵向虚拟滚动
        { i18nKey: 'app.aside.menu.ganttVerticalVirtualScroll', routerLink: { name: 'ComponentGanttScrollVertical' } },
        // 子任务纵向虚拟滚动
        { i18nKey: 'app.aside.menu.ganttSubTaskVerticalVirtualScroll', routerLink: { name: 'ComponentGanttScrollTree' } }
      ]
    },
    {
      // 滚动条
      i18nKey: 'app.aside.menu.ganttScrollbar',
      children: [
        {
          // 原生滚动条
          i18nKey: 'app.aside.menu.ganttNativeScrollbar',
          children: [
            // 滚动条样式
            { i18nKey: 'app.aside.menu.ganttScrollbarStyle', routerLink: { name: 'ComponentGantScrollbarNativeBarStyle' } },
            // 滚动条位置
            { i18nKey: 'app.aside.menu.ganttScrollbarPosition', routerLink: { name: 'ComponentGantScrollbarNativeBarPos' } }
          ]
        },
        {
          // 虚拟滚动条
          i18nKey: 'app.aside.menu.ganttVirtualScrollbar',
          children: [
            // 使用滚动条
            { i18nKey: 'app.aside.menu.ganttUseScrollbar', routerLink: { name: 'ComponentGanttScrollbarUseScrollbarScrollbar' } },
            // 滚动条宽度
            { i18nKey: 'app.aside.menu.ganttScrollbarWidth', routerLink: { name: 'ComponentGanttScrollbarUseScrollbarBarWidth' } },
            // 滚动条颜色
            { i18nKey: 'app.aside.menu.ganttScrollbarColor', routerLink: { name: 'ComponentGanttScrollbarUseScrollbarBarColor' } },
            // 显示位置
            { i18nKey: 'app.aside.menu.ganttDisplayPosition', routerLink: { name: 'ComponentGanttScrollbarUseScrollbarPosition' } },
            // 自动隐藏
            { i18nKey: 'app.aside.menu.ganttAutoHide', routerLink: { name: 'ComponentGanttScrollbarUseScrollbarAutoHide' } },
            // 悬浮滚动条
            { i18nKey: 'app.aside.menu.ganttFloatingScrollbar', routerLink: { name: 'ComponentGanttScrollbarUseScrollbarFluentOverlay' } }
          ]
        }
      ]
    },
    {
      // 自定义插槽模板
      i18nKey: 'app.aside.menu.ganttCustomSlotTemplate',
      children: [
        // 自定义布局模板
        { i18nKey: 'app.aside.menu.ganttCustomLayoutTemplate', routerLink: { name: 'ComponentGantTemplateLayout' } },
        // 自定义表单模板
        { i18nKey: 'app.aside.menu.ganttCustomFormTemplate', routerLink: { name: 'ComponentGantTemplateForm' } },
        // 自定义单元格模板
        { i18nKey: 'app.aside.menu.ganttCustomCellTemplate', routerLink: { name: 'ComponentGantTemplateDefault' } },
        // 自定义表头模板
        { i18nKey: 'app.aside.menu.ganttCustomHeaderTemplate', routerLink: { name: 'ComponentGantTemplateHeader' } },
        // 自定义表尾模板
        { i18nKey: 'app.aside.menu.ganttCustomFooterTemplate', routerLink: { name: 'ComponentGantTemplateFooter' } },
        // 自定义单元格提示模板
        { i18nKey: 'app.aside.menu.ganttCustomCellTipTemplate', routerLink: { name: 'ComponentGantTemplateTooltip' } },
        // 自定义分页模板
        { i18nKey: 'app.aside.menu.ganttCustomPagerTemplate', routerLink: { name: 'ComponentGantTemplatePager' } },
        // 自定义此刻线模板
        { i18nKey: 'app.aside.menu.ganttCustomNowLineTemplate', routerLink: { name: 'ComponentGantTemplateTaskNowLine' } },
        // 自定义任务条模板
        { i18nKey: 'app.aside.menu.ganttCustomTaskBarTemplate', routerLink: { name: 'ComponentGantTemplateTaskBar' } },
        // 自定义任务视图标题模板
        { i18nKey: 'app.aside.menu.ganttCustomTaskViewTitleTemplate', routerLink: { name: 'ComponentGantTemplateTaskCellTitle' } },
        // 自定义任务条提示模板
        { i18nKey: 'app.aside.menu.ganttCustomTaskBarTipTemplate', routerLink: { name: 'ComponentGantTemplateTaskBarTip' } },
        // 自定义复选框模板
        { i18nKey: 'app.aside.menu.ganttCustomCheckboxTemplate', routerLink: { name: 'ComponentGantTemplateCheckbox' } },
        // 自定义单选框模板
        { i18nKey: 'app.aside.menu.ganttCustomRadioTemplate', routerLink: { name: 'ComponentGantTemplateRadio' } },
        // 自定义筛选模板
        { i18nKey: 'app.aside.menu.ganttCustomFilterTemplate', routerLink: { name: 'ComponentGantTemplateFilter' } },
        // 自定义编辑模板
        { i18nKey: 'app.aside.menu.ganttCustomEditTemplate', routerLink: { name: 'ComponentGantTemplateEdit' } },
        // 自定义单元格校验模板
        { i18nKey: 'app.aside.menu.ganttCustomCellValidationTemplate', routerLink: { name: 'ComponentGantTemplateValid' } }
      ]
    },
    {
      // 功能示例
      i18nKey: 'app.aside.menu.ganttFeatureExamples',
      children: [
        // 商品计划进度
        { i18nKey: 'app.aside.menu.ganttProductPlanProgress', routerLink: { name: 'ComponentGanttOtherProductPlan' } },
        // 实现拆分多个任务条
        { i18nKey: 'app.aside.menu.ganttSplitMultipleTaskBars', routerLink: { name: 'ComponentGanttOtherMultiBar' } },
        // 定位行、定位列、定位任务
        { i18nKey: 'app.aside.menu.ganttScrollToRowColumnTask', routerLink: { name: 'ComponentGanttOtherScrollTo' } }
      ]
    }
  ]
}
