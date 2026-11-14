import { NavVO } from './nav'

export const treeNavConfig: NavVO = {
  // Tree 树
  i18nKey: 'app.aside.menu.treeTitle',
  icon: 'vxe-icon-grouping',
  children: [
    { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tree' } } },
    {
      // 基础
      i18nKey: 'app.aside.menu.treeBase',
      children: [
        // 基础
        { i18nKey: 'app.aside.menu.treeBase', routerLink: { name: 'ComponentTreeBaseBasics' } },
        // 尺寸大小
        { i18nKey: 'app.aside.menu.treeSize', routerLink: { name: 'ComponentTreeBaseSize' } },
        // 层级结构
        { i18nKey: 'app.aside.menu.treeHierarchy', routerLink: { name: 'ComponentTreeBaseHierarchy' } },
        // 平级结构
        { i18nKey: 'app.aside.menu.treeLeveling', routerLink: { name: 'ComponentTreeBaseLeveling' } },
        // 空数据
        { i18nKey: 'app.aside.menu.treeEmptyText', routerLink: { name: 'ComponentTreeBaseEmptyText' } },
        // 高度
        { i18nKey: 'app.aside.menu.treeHeight', routerLink: { name: 'ComponentTreeBaseHeight' } },
        // 加载中
        { i18nKey: 'app.aside.menu.treeLoading', routerLink: { name: 'ComponentTreeBaseLoading' } },
        // 自定义字段
        { i18nKey: 'app.aside.menu.treeCustomField', routerLink: { name: 'ComponentTreeBaseField' } },
        // 触发方式
        { i18nKey: 'app.aside.menu.treeTriggerMode', routerLink: { name: 'ComponentTreeBaseTrigger' } },
        // 隐藏图标
        { i18nKey: 'app.aside.menu.treeHideIcon', routerLink: { name: 'ComponentTreeBaseShowIcon' } },
        // 自定义图标
        { i18nKey: 'app.aside.menu.treeCustomIcon', routerLink: { name: 'ComponentTreeBaseIcon' } },
        // 手风琴展开效果
        { i18nKey: 'app.aside.menu.treeAccordion', routerLink: { name: 'ComponentTreeBaseAccordion' } },
        // 默认展开全部节点
        { i18nKey: 'app.aside.menu.treeExpandAllNodes', routerLink: { name: 'ComponentTreeBaseExpandAll' } },
        // 默认展开指定节点
        { i18nKey: 'app.aside.menu.treeExpandSpecifiedNodes', routerLink: { name: 'ComponentTreeBaseExpandNodeKeys' } }
      ]
    },
    {
      // 溢出隐藏
      i18nKey: 'app.aside.menu.treeOverflowHidden',
      children: [
        // 文本超出提示
        { i18nKey: 'app.aside.menu.treeTextOverflowTip', routerLink: { name: 'ComponentTreeTooltipBasics' } },
        // 鼠标可进入
        { i18nKey: 'app.aside.menu.treeMouseEnterable', routerLink: { name: 'ComponentTreeTooltipEnterable' } },
        // 显示全部提示
        { i18nKey: 'app.aside.menu.treeShowAllTip', routerLink: { name: 'ComponentTreeTooltipShowAll' } },
        // 自定义显示内容
        { i18nKey: 'app.aside.menu.treeCustomDisplayContent', routerLink: { name: 'ComponentTreeTooltipContentMethod' } }
      ]
    },
    {
      // 自定义根节点
      i18nKey: 'app.aside.menu.treeCustomRootNode',
      children: [
        // 指定根节点的父级节点
        { i18nKey: 'app.aside.menu.treeRootParentValue', routerLink: { name: 'ComponentTreeRootNodeRootParentValue' } },
        // 指定根节点
        { i18nKey: 'app.aside.menu.treeRootValues', routerLink: { name: 'ComponentTreeRootNodeRootValues' } }
      ]
    },
    {
      // 高亮节点
      i18nKey: 'app.aside.menu.treeHighlightNode',
      children: [
        // 当前节点
        { i18nKey: 'app.aside.menu.treeCurrentNode', routerLink: { name: 'ComponentTreeCurrentBase' } },
        // 触发方式
        { i18nKey: 'app.aside.menu.treeTriggerMode', routerLink: { name: 'ComponentTreeCurrentTrigger' } },
        // 禁用
        { i18nKey: 'app.aside.menu.treeDisabled', routerLink: { name: 'ComponentTreeCurrentCurrentMethod' } }
      ]
    },
    {
      // 单选框
      i18nKey: 'app.aside.menu.treeRadio',
      children: [
        // 单选
        { i18nKey: 'app.aside.menu.treeSingleSelect', routerLink: { name: 'ComponentTreeRadioBase' } },
        // 手动操作
        { i18nKey: 'app.aside.menu.treeManualOperation', routerLink: { name: 'ComponentTreeRadioHandleManual' } },
        // 高亮选中节点
        { i18nKey: 'app.aside.menu.treeHighlightSelectedNode', routerLink: { name: 'ComponentTreeRadioHighlight' } },
        // 默认选中
        { i18nKey: 'app.aside.menu.treeDefaultSelected', routerLink: { name: 'ComponentTreeRadioDefaultSelect' } },
        // 禁用
        { i18nKey: 'app.aside.menu.treeDisabled', routerLink: { name: 'ComponentTreeRadioCheckMethod' } },
        // 显示隐藏
        { i18nKey: 'app.aside.menu.treeShowHide', routerLink: { name: 'ComponentTreeRadioVisibleMethod' } },
        // 自定义插槽模板
        { i18nKey: 'app.aside.menu.treeCustomSlotTemplate', routerLink: { name: 'ComponentTreeRadioTemplate' } }
      ]
    },
    {
      // 复选框
      i18nKey: 'app.aside.menu.treeCheckbox',
      children: [
        // 多选
        { i18nKey: 'app.aside.menu.treeMultiSelect', routerLink: { name: 'ComponentTreeCheckboxBase' } },
        // 手动操作
        { i18nKey: 'app.aside.menu.treeManualOperation', routerLink: { name: 'ComponentTreeCheckboxHandleManual' } },
        // 高亮选中节点
        { i18nKey: 'app.aside.menu.treeHighlightSelectedNode', routerLink: { name: 'ComponentTreeCheckboxHighlight' } },
        // 默认选中
        { i18nKey: 'app.aside.menu.treeDefaultSelected', routerLink: { name: 'ComponentTreeCheckboxDefaultSelect' } },
        // 节点不关联
        { i18nKey: 'app.aside.menu.treeCheckStrictly', routerLink: { name: 'ComponentTreeCheckboxCheckStrictly' } },
        // 禁用
        { i18nKey: 'app.aside.menu.treeDisabled', routerLink: { name: 'ComponentTreeCheckboxCheckMethod' } },
        // 显示隐藏
        { i18nKey: 'app.aside.menu.treeShowHide', routerLink: { name: 'ComponentTreeCheckboxVisibleMethod' } },
        // 自定义节点字体颜色
        { i18nKey: 'app.aside.menu.treeNodeFontColor', routerLink: { name: 'ComponentTreeCheckboxColor' } },
        // 自定义插槽模板
        { i18nKey: 'app.aside.menu.treeCustomSlotTemplate', routerLink: { name: 'ComponentTreeCheckboxTemplate' } }
      ]
    },
    {
      // 连接线
      i18nKey: 'app.aside.menu.treeConnectionLine',
      children: [
        // 连接线
        { i18nKey: 'app.aside.menu.treeShowLine', routerLink: { name: 'ComponentTreeLineShowLine' } },
        // 节点缩进
        { i18nKey: 'app.aside.menu.treeShowIndent', routerLink: { name: 'ComponentTreeLineIndent' } },
        // 线类型
        { i18nKey: 'app.aside.menu.treeLineType', routerLink: { name: 'ComponentTreeLineType' } },
        // 线颜色
        { i18nKey: 'app.aside.menu.treeLineColor', routerLink: { name: 'ComponentTreeLineColor' } }
      ]
    },
    {
      // 排序
      i18nKey: 'app.aside.menu.treeSort',
      children: [
        // 排序
        { i18nKey: 'app.aside.menu.treeSort', routerLink: { name: 'ComponentTreeSortDefaultSort' } },
        // 多字段排序
        { i18nKey: 'app.aside.menu.treeMultiFieldSort', routerLink: { name: 'ComponentTreeSortMultiSort' } },
        // 自定义排序方法
        { i18nKey: 'app.aside.menu.treeCustomSortMethod', routerLink: { name: 'ComponentTreeSortSortMethod' } }
      ]
    },
    {
      // 搜索
      i18nKey: 'app.aside.menu.treeSearch',
      children: [
        // 过滤节点
        { i18nKey: 'app.aside.menu.treeFilterNode', routerLink: { name: 'ComponentTreeSearchFilterValue' } },
        // 自定义过滤方法
        { i18nKey: 'app.aside.menu.treeCustomFilterMethod', routerLink: { name: 'ComponentTreeSearchFilterMethod' } },
        // 实现关键字高亮
        { i18nKey: 'app.aside.menu.treeKeywordHighlight', routerLink: { name: 'ComponentTreeSearchLight' } }
      ]
    },
    {
      // 右键菜单
      i18nKey: 'app.aside.menu.treeContextMenu',
      children: [
        // 配置菜单
        { i18nKey: 'app.aside.menu.treeConfigMenu', routerLink: { name: 'ComponentTreeMenuBasics' } },
        // 前缀与后缀
        { i18nKey: 'app.aside.menu.treePrefixAndSuffix', routerLink: { name: 'ComponentTreeMenuIcon' } },
        // 是否禁用
        { i18nKey: 'app.aside.menu.treeIsDisabled', routerLink: { name: 'ComponentTreeMenuDisabled' } },
        // 是否显示
        { i18nKey: 'app.aside.menu.treeIsVisible', routerLink: { name: 'ComponentTreeMenuVisible' } },
        // 异步加载中
        { i18nKey: 'app.aside.menu.treeAsyncLoading', routerLink: { name: 'ComponentTreeMenuLoading' } },
        // 权限控制
        { i18nKey: 'app.aside.menu.treePermissionControl', routerLink: { name: 'ComponentTreeMenuVisibleMethod' } }
      ]
    },
    {
      // 拖拽
      i18nKey: 'app.aside.menu.treeDrag',
      children: [
        // 拖拽调整节点顺序
        { i18nKey: 'app.aside.menu.treeDragReorderNode', routerLink: { name: 'ComponentTreeDragSort' } },
        // 自定义图标
        { i18nKey: 'app.aside.menu.treeCustomIcon', routerLink: { name: 'ComponentTreeDragIcon' } },
        // 拖拽辅助样式
        { i18nKey: 'app.aside.menu.treeDragGuideStyle', routerLink: { name: 'ComponentTreeDragShowGuidesStatus' } },
        // 触发方式
        { i18nKey: 'app.aside.menu.treeTriggerMode', routerLink: { name: 'ComponentTreeDragTrigger' } },
        // 拖拽事件
        { i18nKey: 'app.aside.menu.treeDragEvents', routerLink: { name: 'ComponentTreeDragEvents' } },
        // 自定义提示
        { i18nKey: 'app.aside.menu.treeCustomTip', routerLink: { name: 'ComponentTreeDragTooltipMethod' } },
        // 禁用拖拽按钮
        { i18nKey: 'app.aside.menu.treeDisableDragButton', routerLink: { name: 'ComponentTreeDragDisabledMethod' } },
        // 拖拽按钮可视
        { i18nKey: 'app.aside.menu.treeDragButtonVisible', routerLink: { name: 'ComponentTreeDragVisibleMethod' } },
        // 同层级拖拽
        { i18nKey: 'app.aside.menu.treePeerLevelDrag', routerLink: { name: 'ComponentTreeDragPeerDrag' } },
        // 跨层级拖拽
        { i18nKey: 'app.aside.menu.treeCrossLevelDrag', routerLink: { name: 'ComponentTreeDragCossDrag' } },
        // 自己拖拽给自己子级
        { i18nKey: 'app.aside.menu.treeDragSelfToChild', routerLink: { name: 'ComponentTreeDragSelfToChildDrag' } },
        // 拖拽转成子节点
        { i18nKey: 'app.aside.menu.treeDragToChild', routerLink: { name: 'ComponentTreeDragToChildDrag' } },
        // 拖拽拦截
        { i18nKey: 'app.aside.menu.treeDragIntercept', routerLink: { name: 'ComponentTreeDragDragMethod' } },
        // 跨树拖拽
        { i18nKey: 'app.aside.menu.treeCrossTreeDrag', routerLink: { name: 'ComponentTreeDragCossTree' } }
      ]
    },
    {
      // 懒加载
      i18nKey: 'app.aside.menu.treeLazyLoad',
      children: [
        // 懒加载子节点
        { i18nKey: 'app.aside.menu.treeLazyLoadChildNode', routerLink: { name: 'ComponentTreeLazyLoadMethod' } },
        // 加载失败
        { i18nKey: 'app.aside.menu.treeLoadFailed', routerLink: { name: 'ComponentTreeLazyError' } },
        // 显示连接线
        { i18nKey: 'app.aside.menu.treeShowConnectionLine', routerLink: { name: 'ComponentTreeLazyShowLine' } }
      ]
    },
    {
      // 增删节点
      i18nKey: 'app.aside.menu.treeAddRemoveNode',
      children: [
        // 新增节点
        { i18nKey: 'app.aside.menu.treeInsertNode', routerLink: { name: 'ComponentTreeEditInsert' } },
        // 删除节点
        { i18nKey: 'app.aside.menu.treeRemoveNode', routerLink: { name: 'ComponentTreeEditRemove' } },
        // 增删操作
        { i18nKey: 'app.aside.menu.treeAddRemoveOperation', routerLink: { name: 'ComponentTreeEditFull' } }
      ]
    },
    {
      // 滚动条
      i18nKey: 'app.aside.menu.treeScrollbar',
      children: [
        {
          // 原生滚动条
          i18nKey: 'app.aside.menu.treeNativeScrollbar',
          children: [
            // 使用滚动条
            { i18nKey: 'app.aside.menu.treeUseScrollbar', routerLink: { name: 'ComponentTreeScrollbarNativeScrollbar' } }
          ]
        },
        {
          // 虚拟滚动条
          i18nKey: 'app.aside.menu.treeVirtualScrollbar',
          children: [
            // 使用滚动条
            { i18nKey: 'app.aside.menu.treeUseScrollbar', routerLink: { name: 'ComponentTreeScrollbarUseScrollbarScrollbar' } },
            // 滚动条宽度
            { i18nKey: 'app.aside.menu.treeScrollbarWidth', routerLink: { name: 'ComponentTreeScrollbarUseScrollbarBarWidth' } },
            // 滚动条颜色
            { i18nKey: 'app.aside.menu.treeScrollbarColor', routerLink: { name: 'ComponentTreeScrollbarUseScrollbarBarColor' } },
            // 显示位置
            { i18nKey: 'app.aside.menu.treeDisplayPosition', routerLink: { name: 'ComponentTreeScrollbarUseScrollbarPosition' } },
            // 自动隐藏
            { i18nKey: 'app.aside.menu.treeAutoHide', routerLink: { name: 'ComponentTreeScrollbarUseScrollbarAutoHide' } },
            // 悬浮滚动条
            { i18nKey: 'app.aside.menu.treeFloatingScrollbar', routerLink: { name: 'ComponentTreeScrollbarUseScrollbarFluentOverlay' } }
          ]
        }
      ]
    },
    {
      // 虚拟滚动 - 海量数据
      i18nKey: 'app.aside.menu.treeVirtualScrollLargeData',
      children: [
        // 纵向虚拟滚动
        { i18nKey: 'app.aside.menu.treeVerticalVirtualScroll', routerLink: { name: 'ComponentTreeScrollBasics' } },
        // 连接线
        { i18nKey: 'app.aside.menu.treeShowLine', routerLink: { name: 'ComponentTreeScrollLine' } },
        // 函数式加载
        { i18nKey: 'app.aside.menu.treeFunctionalLoad', routerLink: { name: 'ComponentTreeScrollLoadData' } },
        // 滚动到指定位置
        { i18nKey: 'app.aside.menu.treeScrollToPosition', routerLink: { name: 'ComponentTreeScrollScrollTo' } }
      ]
    },
    {
      // 自定义插槽模板
      i18nKey: 'app.aside.menu.treeCustomSlotTemplate',
      children: [
        // 自定义标题模板
        { i18nKey: 'app.aside.menu.treeCustomTitleTemplate', routerLink: { name: 'ComponentTreeTemplateTitle' } },
        // 自定义图标模板
        { i18nKey: 'app.aside.menu.treeCustomIconTemplate', routerLink: { name: 'ComponentTreeTemplateIcon' } },
        // 自定义右侧模板
        { i18nKey: 'app.aside.menu.treeCustomRightTemplate', routerLink: { name: 'ComponentTreeTemplateExtra' } },
        // 自定义头部模板
        { i18nKey: 'app.aside.menu.treeCustomHeaderTemplate', routerLink: { name: 'ComponentTreeTemplateHeader' } },
        // 自定义尾部模板
        { i18nKey: 'app.aside.menu.treeCustomFooterTemplate', routerLink: { name: 'ComponentTreeTemplateFooter' } },
        // 自定义空数据模板
        { i18nKey: 'app.aside.menu.treeCustomEmptyTemplate', routerLink: { name: 'ComponentTreeTemplateEmpty' } }
      ]
    },
    {
      // 功能示例
      i18nKey: 'app.aside.menu.treeFeatureExamples',
      children: [
        // 实现右侧下拉按钮
        { i18nKey: 'app.aside.menu.treeRightDropdownButton', routerLink: { name: 'ComponentTreeOtherExtra' } },
        // 滚动到节点
        { i18nKey: 'app.aside.menu.treeScrollToNode', routerLink: { name: 'ComponentTreeOtherScrollTo' } },
        // 实现树穿梭框选择
        { i18nKey: 'app.aside.menu.treeTreeTransferSelection', routerLink: { name: 'ComponentTreeOtherTreeTransfer' } }
      ]
    }
  ]
}
