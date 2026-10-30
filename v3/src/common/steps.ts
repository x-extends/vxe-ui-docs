import { NavVO } from './nav'

export const stepsNavConfig: NavVO = {
  title: 'Steps 步骤条',
  children: [
    { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'steps' } } },
    { title: '尺寸大小', routerLink: { name: 'ComponentStepsSize' } },
    { title: '绑定值', routerLink: { name: 'ComponentStepsValue' } },
    { title: '显示步骤序号', routerLink: { name: 'ComponentStepsShowNum' } },
    { title: '显示状态图标', routerLink: { name: 'ComponentStepsShowIcon' } },
    { title: '布局方式', routerLink: { name: 'ComponentStepsVertical' } },
    { title: '配置式', routerLink: { name: 'ComponentStepsOptions' } },
    { title: '状态颜色', routerLink: { name: 'ComponentStepsStatus' } },
    { title: '简化样式', routerLink: { name: 'ComponentStepsType' } }
  ]
}
