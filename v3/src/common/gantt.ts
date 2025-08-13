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
        { title: '显示进度', routerLink: { name: 'ComponentGanttBaseShowProgress' } },
        { title: '显示内容', routerLink: { name: 'ComponentGanttBaseShowContent' } },
        { title: '拖拽调整视图宽度', routerLink: { name: 'ComponentGanttBaseResize' } }
      ]
    },
    {
      title: '自定义样式',
      children: [
        { title: '表格宽度', routerLink: { name: 'ComponentGanttstyleTableWidth' } },
        { title: '颜色', routerLink: { name: 'ComponentGanttstyleBarColor' } },
        { title: '圆角', routerLink: { name: 'ComponentGanttstyleRound' } }
      ]
    },
    {
      title: '可编辑',
      children: [
        { title: '编辑表格单元格', routerLink: { name: 'ComponentGanttEditTableCell' } },
        { title: '编辑任务条', routerLink: { name: 'ComponentGanttEditTaskBar' } }
      ]
    }
  ]
}
