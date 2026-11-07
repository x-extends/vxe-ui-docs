import { NavVO } from './nav'

export const stepsNavConfig: NavVO = {
  i18nKey: 'app.aside.menu.stepsTitle',
  children: [
    { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'steps' } } },
    { i18nKey: 'app.aside.menu.stepsSize', routerLink: { name: 'ComponentStepsSize' } },
    { i18nKey: 'app.aside.menu.stepsValue', routerLink: { name: 'ComponentStepsValue' } },
    { i18nKey: 'app.aside.menu.stepsShowNum', routerLink: { name: 'ComponentStepsShowNum' } },
    { i18nKey: 'app.aside.menu.stepsShowIcon', routerLink: { name: 'ComponentStepsShowIcon' } },
    { i18nKey: 'app.aside.menu.stepsLayout', routerLink: { name: 'ComponentStepsVertical' } },
    { i18nKey: 'app.aside.menu.stepsOptions', routerLink: { name: 'ComponentStepsOptions' } },
    { i18nKey: 'app.aside.menu.stepsStatus', routerLink: { name: 'ComponentStepsStatus' } },
    { i18nKey: 'app.aside.menu.stepsType', routerLink: { name: 'ComponentStepsType' } }
  ]
}
