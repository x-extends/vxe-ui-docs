import { NavVO, otherUrl } from './nav'

export const designNavConfig: NavVO = {
  // Design 设计器
  i18nKey: 'app.aside.menu.designTitle',
  icon: 'vxe-icon-pc',
  showCount: true,
  keywords: 'vxe-design',
  children: [
    {
      // FormDesign 表单设计器
      i18nKey: 'app.aside.menu.formDesignTitle',
      icon: 'vxe-icon-association-form',
      children: []
    },
    {
      // ListDesign 列表设计器
      i18nKey: 'app.aside.menu.listDesignTitle',
      icon: 'vxe-icon-num-list',
      children: []
    }
    // { title: 'FlowDesign 流程设计器' },
    // { title: 'PrintDesign 打印设计器' },
  ]
}
