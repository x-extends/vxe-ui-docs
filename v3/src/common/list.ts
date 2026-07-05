import { NavVO } from './nav'

export const listNavConfig: NavVO = {
  title: 'List 列表',
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
        { title: '拖拽拦截', routerLink: { name: 'ComponentListDragDragMethod' } }
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
        { title: '实现轻量级虚拟表格', routerLink: { name: 'ComponentListOtherTable' } }
      ]
    }
  ]
}
