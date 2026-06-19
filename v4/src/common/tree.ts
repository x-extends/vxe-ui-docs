import { NavVO } from './nav'

export const treeNavConfig: NavVO = {
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
        { title: '默认展开全部节点', routerLink: { name: 'ComponentTreeBaseExpandAll' } },
        { title: '默认展开指定节点', routerLink: { name: 'ComponentTreeBaseExpandNodeKeys' } }
      ]
    },
    {
      title: '自定义根节点',
      children: [
        { title: '指定根节点的父级节点', routerLink: { name: 'ComponentTreeRootNodeRootParentValue' } },
        { title: '指定根节点', routerLink: { name: 'ComponentTreeRootNodeRootValues' } }
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
        { title: '手动操作', routerLink: { name: 'ComponentTreeRadioHandleManual' } },
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
        { title: '手动操作', routerLink: { name: 'ComponentTreeCheckboxHandleManual' } },
        { title: '高亮选中节点', routerLink: { name: 'ComponentTreeCheckboxHighlight' } },
        { title: '默认选中', routerLink: { name: 'ComponentTreeCheckboxDefaultSelect' } },
        { title: '节点不关联', routerLink: { name: 'ComponentTreeCheckboxCheckStrictly' } },
        { title: '禁用', routerLink: { name: 'ComponentTreeCheckboxCheckMethod' } },
        { title: '显示隐藏', routerLink: { name: 'ComponentTreeCheckboxVisibleMethod' } },
        { title: '自定义节点字体颜色', routerLink: { name: 'ComponentTreeCheckboxColor' } },
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
      title: '右键菜单',
      children: [
        { title: '配置菜单', routerLink: { name: 'ComponentTreeMenuBasics' } },
        { title: '前缀与后缀', routerLink: { name: 'ComponentTreeMenuIcon' } },
        { title: '是否禁用', routerLink: { name: 'ComponentTreeMenuDisabled' } },
        { title: '是否显示', routerLink: { name: 'ComponentTreeMenuVisible' } },
        { title: '异步加载中', routerLink: { name: 'ComponentTreeMenuLoading' } },
        { title: '权限控制', routerLink: { name: 'ComponentTreeMenuVisibleMethod' } }
      ]
    },
    {
      title: '拖拽',
      children: [
        { title: '拖拽调整节点顺序', routerLink: { name: 'ComponentTreeDragSort' } },
        { title: '自定义图标', routerLink: { name: 'ComponentTreeDragIcon' } },
        { title: '拖拽辅助样式', routerLink: { name: 'ComponentTreeDragShowGuidesStatus' } },
        { title: '触发方式', routerLink: { name: 'ComponentTreeDragTrigger' } },
        { title: '拖拽事件', routerLink: { name: 'ComponentTreeDragEvents' } },
        { title: '自定义提示', routerLink: { name: 'ComponentTreeDragTooltipMethod' } },
        { title: '禁用拖拽按钮', routerLink: { name: 'ComponentTreeDragDisabledMethod' } },
        { title: '拖拽按钮可视', routerLink: { name: 'ComponentTreeDragVisibleMethod' } },
        { title: '同层级拖拽', routerLink: { name: 'ComponentTreeDragPeerDrag' } },
        { title: '跨层级拖拽', routerLink: { name: 'ComponentTreeDragCossDrag' } },
        { title: '自己拖拽给自己子级', routerLink: { name: 'ComponentTreeDragSelfToChildDrag' } },
        { title: '拖拽转成子节点', routerLink: { name: 'ComponentTreeDragToChildDrag' } },
        { title: '拖拽拦截', routerLink: { name: 'ComponentTreeDragDragMethod' } }
        // { title: '跨树拖拽', routerLink: { name: 'ComponentTreeDragCossTree' } }
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
        { title: '函数式加载', routerLink: { name: 'ComponentTreeScrollLoadData' } },
        { title: '滚动到指定位置', routerLink: { name: 'ComponentTreeScrollScrollTo' } }
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
    },
    {
      title: '功能示例',
      children: [
        { title: '实现右侧下拉按钮', routerLink: { name: 'ComponentTreeOtherExtra' } },
        { title: '滚动到节点', routerLink: { name: 'ComponentTreeOtherScrollTo' } }
      ]
    }
  ]
}
