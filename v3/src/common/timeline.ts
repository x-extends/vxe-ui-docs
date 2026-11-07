import { NavVO } from './nav'

export const timelineNavConfig: NavVO = {
  // Timeline 时间轴
  i18nKey: 'app.aside.menu.timelineTitle',
  children: [
    { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'timeline' } } },
    // 尺寸大小
    { i18nKey: 'app.aside.menu.timelineSize', routerLink: { name: 'ComponentTimelineSize' } },
    // 布局方式
    { i18nKey: 'app.aside.menu.timelineLayout', routerLink: { name: 'ComponentTimelineVertical' } },
    // 逆序排序
    { i18nKey: 'app.aside.menu.timelineReverse', routerLink: { name: 'ComponentTimelineReverse' } },
    // 配置式
    { i18nKey: 'app.aside.menu.timelineOptions', routerLink: { name: 'ComponentTimelineOptions' } }
  ]
}
