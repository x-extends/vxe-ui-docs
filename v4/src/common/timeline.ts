import { NavVO } from './nav'

export const timelineNavConfig: NavVO = {
  title: 'Timeline 时间轴',
  children: [
    { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'timeline' } } },
    { title: '尺寸大小', routerLink: { name: 'ComponentTimelineSize' } },
    { title: '布局方式', routerLink: { name: 'ComponentTimelineVertical' } },
    { title: '逆序排序', routerLink: { name: 'ComponentTimelineReverse' } },
    { title: '配置式', routerLink: { name: 'ComponentTimelineOptions' } }
  ]
}
