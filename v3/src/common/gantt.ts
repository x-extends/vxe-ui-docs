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
        { title: '边框', routerLink: { name: 'ComponentGanttBaseBorder' } },
        { title: '显示进度', routerLink: { name: 'ComponentGanttBaseShowProgress' } },
        { title: '显示内容', routerLink: { name: 'ComponentGanttBaseShowContent' } },
        { title: '拖拽调整视图宽度', routerLink: { name: 'ComponentGanttBaseResize' } }
      ]
    },
    {
      title: '样式',
      children: [
        { title: '表格宽度', routerLink: { name: 'ComponentGanttStyleTableWidth' } },
        { title: '颜色', routerLink: { name: 'ComponentGanttStyleBarColor' } },
        { title: '圆角', routerLink: { name: 'ComponentGanttStyleRound' } }
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
        { title: '斑马线条纹', routerLink: { name: 'ComponentGanttTreeStripe' } },
        { title: '序号', routerLink: { name: 'ComponentGanttTreeSeqMode' } },
        { title: '连接线', routerLink: { name: 'ComponentGanttTreeLine' } }
      ]
    },
    {
      title: '可编辑',
      children: [
        { title: '编辑表格单元格', routerLink: { name: 'ComponentGanttEditTableCell' } },
        { title: '编辑任务条', routerLink: { name: 'ComponentGanttEditTaskBar' } }
      ]
    },
    {
      title: '行拖拽',
      children: [
        { title: '拖拽调整行顺序', routerLink: { name: 'ComponentGanttRowDragSort' } },
        {
          title: '子任务',
          children: [
            { title: '树拖拽', routerLink: { name: 'ComponentGanttRowDragTreeBase' } },
            { title: '同层级拖拽', routerLink: { name: 'ComponentGanttRowDragTreePeerDrag' } },
            { title: '跨层级拖拽', routerLink: { name: 'ComponentGanttRowDragTreeCossDrag' } },
            { title: '自己拖拽给自己子级', routerLink: { name: 'ComponentGanttRowDragTreeSelfToChildDrag' } },
            { title: '拖拽成子级', routerLink: { name: 'ComponentGanttRowDragTreeToChildDrag' } }
          ]
        }
      ]
    }
  ]
}
