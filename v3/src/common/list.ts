import { NavVO } from './nav'

export const listNavConfig: NavVO = {
  title: 'List 列表',
  icon: 'vxe-icon-num-list',
  children: [
    { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'list' } }, keywords: 'vxe-list' },
    {
      title: '基础',
      children: [
        { title: '基础', routerLink: { name: 'ComponentListBaseBasics' } },
        { title: '高度', routerLink: { name: 'ComponentListBaseAutoResize' } },
        { title: '行高度', routerLink: { name: 'ComponentListBaseItemHeight' } },
        { title: '内边距', routerLink: { name: 'ComponentListBasePadding' } },
        { title: '高亮行', routerLink: { name: 'ComponentListBaseHover' } }
      ]
    },
    {
      title: '当前行',
      children: [
        { title: '高亮当前行', routerLink: { name: 'ComponentListCurrentBase' } },
        { title: '禁用', routerLink: { name: 'ComponentListCurrentCurrentMethod' } }
      ]
    },
    {
      title: '单选框',
      children: [
        { title: '单选', routerLink: { name: 'ComponentListRadioBase' } },
        { title: '手动操作', routerLink: { name: 'ComponentListRadioHandleManual' } },
        { title: '高亮选中节点', routerLink: { name: 'ComponentListRadioHighlight' } },
        { title: '触发方法', routerLink: { name: 'ComponentListRadioTrigger' } },
        { title: '禁用', routerLink: { name: 'ComponentListRadioCheckMethod' } },
        { title: '显示隐藏', routerLink: { name: 'ComponentListRadioVisibleMethod' } }
      ]
    },
    {
      title: '复选框',
      children: [
        { title: '多选', routerLink: { name: 'ComponentListCheckboxBase' } },
        { title: '手动操作', routerLink: { name: 'ComponentListCheckboxHandleManual' } },
        { title: '高亮选中节点', routerLink: { name: 'ComponentListCheckboxHighlight' } },
        { title: '触发方法', routerLink: { name: 'ComponentListCheckboxTrigger' } },
        { title: '禁用', routerLink: { name: 'ComponentListCheckboxCheckMethod' } },
        { title: '显示隐藏', routerLink: { name: 'ComponentListCheckboxVisibleMethod' } }
      ]
    },
    {
      title: '右键菜单',
      children: [
        { title: '配置菜单', routerLink: { name: 'ComponentListMenuBasics' } },
        { title: '前缀与后缀', routerLink: { name: 'ComponentListMenuIcon' } },
        { title: '是否禁用', routerLink: { name: 'ComponentListMenuDisabled' } },
        { title: '是否显示', routerLink: { name: 'ComponentListMenuVisible' } },
        { title: '异步加载中', routerLink: { name: 'ComponentListMenuLoading' } },
        { title: '权限控制', routerLink: { name: 'ComponentListMenuVisibleMethod' } }
      ]
    },
    {
      title: '拖拽',
      children: [
        { title: '拖拽调整节点顺序', routerLink: { name: 'ComponentListDragSort' } },
        { title: '自定义图标', routerLink: { name: 'ComponentListDragIcon' } },
        { title: '拖拽辅助样式', routerLink: { name: 'ComponentListDragShowGuidesStatus' } },
        { title: '触发方式', routerLink: { name: 'ComponentListDragTrigger' } },
        { title: '拖拽事件', routerLink: { name: 'ComponentListDragEvents' } },
        { title: '自定义提示', routerLink: { name: 'ComponentListDragTooltipMethod' } },
        { title: '禁用拖拽按钮', routerLink: { name: 'ComponentListDragDisabledMethod' } },
        { title: '拖拽按钮可视', routerLink: { name: 'ComponentListDragVisibleMethod' } },
        { title: '拖拽拦截', routerLink: { name: 'ComponentListDragDragMethod' } },
        { title: '跨列表拖拽', routerLink: { name: 'ComponentListDragDragCossList' } }
      ]
    },
    {
      title: '增删行',
      children: [
        { title: '新增行', routerLink: { name: 'ComponentListEditInsert' } },
        { title: '删除行', routerLink: { name: 'ComponentListEditRemove' } },
        { title: '增删操作', routerLink: { name: 'ComponentListEditFull' } }
      ]
    },
    {
      title: '虚拟滚动',
      children: [
        { title: '纵向虚拟滚动', routerLink: { name: 'ComponentListScrollBasics' } }
      ]
    },
    {
      title: '自定义插槽模板',
      children: [
        { title: '自定义内顶部插槽模板', routerLink: { name: 'ComponentListTemplateHeader' } },
        { title: '自定义底部插槽模板', routerLink: { name: 'ComponentListTemplateFooter' } },
        { title: '自定义内容插槽模板', routerLink: { name: 'ComponentListTemplateContent' } },
        { title: '自定义列表插槽模板', routerLink: { name: 'ComponentListTemplateDefault' } }
      ]
    },
    {
      title: '功能示例',
      children: [
        { title: '纵向虚拟列表', routerLink: { name: 'ComponentListOtherVn' } },
        { title: '实现轻量级虚拟表格', routerLink: { name: 'ComponentListOtherTable' } },
        { title: '实现列表穿梭框选择', routerLink: { name: 'ComponentListOtherListTransfer' } }
      ]
    }
  ]
}
