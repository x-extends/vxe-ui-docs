import { NavVO } from './nav'

export const designNavConfig: NavVO & { children: NavVO[] } = {
  i18nKey: 'app.aside.menu.designTitle',
  children: [
    {
      i18nKey: 'app.aside.menu.formDesignTitle',
      children: [
        { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'form-design' } } }
        // {
        //   i18nKey: 'app.aside.menu.formDesignUse',
        //   children: [
        //     { title: '基础功能', routerLink: { name: 'ComponentFormDesignBase' } },
        //     { title: '自定义控件分组', routerLink: { name: 'ComponentFormDesignCustomGroup' } },
        //     { title: '移动端设计器', routerLink: { name: 'ComponentFormDesignMobile' } },
        //     { title: 'PC 端和移动端设计器', routerLink: { name: 'ComponentFormDesignPcAndMobile' } },
        //     { title: '渲染视图', routerLink: { name: 'ComponentFormDesignRenderView' } },
        //     { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/form-design/renderView` }
        //   ]
        // },
        // {
        //   i18nKey: 'app.aside.menu.formDesignGlobalRenderer',
        //   children: [
        //     { title: 'API', routerLink: { name: 'GlobalRendererFormDesignAPI' } },
        //     {
        //       title: '控件',
        //       children: [
        //         { title: '实现一个单行输入控件', routerLink: { name: 'GlobalRendererFormDesignWidgetMyInputWidget' } },
        //         { title: '实现一个多行输入控件', routerLink: { name: 'GlobalRendererFormDesignWidgetMyTextareaWidget' } }
        //       ]
        //     }
        //   ]
        // }
      ]
    },
    {
      i18nKey: 'app.aside.menu.listDesignTitle',
      children: [
        { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'list-design' } } }
        // {
        //   i18nKey: 'app.aside.menu.listDesignUse',
        //   children: [
        //     { title: '基础功能', routerLink: { name: 'ComponentListDesignBase' } },
        //     { title: '移动端设计器', routerLink: { name: 'ComponentListDesignMobile' } },
        //     { title: 'PC 端和移动端设计器', routerLink: { name: 'ComponentListDesignPcAndMobile' } },
        //     { title: '集成表单设计器', routerLink: { name: 'ComponentListDesignFormAndList' } }
        //   ]
        // }
      ]
    }
    // { title: 'FlowDesign 流程设计器' },
    // { title: 'PrintDesign 打印设计器' },
    // { title: '可视化设计器模板', isTemplate: true, linkUrl: 'https://vxeui.com/design-template/' },
    // { title: '零代码平台模板', isEnterprise: true, linkUrl: 'https://vxeui.com/zero-code/' }
  ]
}
