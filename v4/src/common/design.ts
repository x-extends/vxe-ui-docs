import { NavVO, otherUrl } from './nav'

export const designNavConfig: NavVO & { children: NavVO[] } = {
  i18nKey: 'app.aside.menu.designTitle',
  children: [
    {
      i18nKey: 'app.aside.menu.formDesignTitle',
      children: [
        { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'form-design' } }, keywords: 'vxe-design' },
        {
          i18nKey: 'app.aside.menu.formDesignUse',
          children: [
            {
              title: '基础配置',
              children: [
                { title: '内置控件配置', routerLink: { name: 'ComponentFormDesignBasicsBase' } },
                { title: '自定义控件分组', routerLink: { name: 'ComponentFormDesignBasicsCustomGroup' } },
                { title: '显示样式配置', routerLink: { name: 'ComponentFormDesignBasicsStyleSetting' } }
              ]
            },
            {
              title: '右键菜单',
              children: [
                { title: '生成表单视图', routerLink: { name: 'ComponentFormDesignMenuBasics' } }
              ]
            },
            {
              title: '多端配置',
              children: [
                { title: '仅移动端', routerLink: { name: 'ComponentFormDesignMobile' } },
                { title: '同时配置 PC 端和移动端', routerLink: { name: 'ComponentFormDesignPcAndMobile' } }
              ]
            },
            {
              title: '视图转换',
              children: [
                { title: '生成表单视图', routerLink: { name: 'ComponentFormDesignRenderView' } }
              ]
            },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义标题模板', routerLink: { name: 'ComponentFormDesignTemplateTitle' } },
                { title: '自定义标题前缀模板', routerLink: { name: 'ComponentFormDesignTemplateTitlePrefix' } },
                { title: '自定义标题后缀模板', routerLink: { name: 'ComponentFormDesignTemplateTitleSuffix' } },
                { title: '自定义头部模板', routerLink: { name: 'ComponentFormDesignTemplateHeader' } }
              ]
            },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/form-design/renderView` }
          ]
        },
        {
          title: '设计器模板',
          children: [
            { title: '可视化设计器模板', isTemplate: true, linkUrl: 'https://vxeui.com/design-template/' },
            { title: '零代码平台模板', isEnterprise: true, linkUrl: 'https://vxeui.com/zero-code/' }
          ]
        },
        {
          i18nKey: 'app.aside.menu.formDesignGlobalRenderer',
          children: [
            { title: 'API', routerLink: { name: 'GlobalRendererFormDesignAPI' } },
            {
              title: '创建控件',
              children: [
                { title: '单行输入', routerLink: { name: 'GlobalRendererFormDesignWidgetMyInputWidget' } },
                { title: '多行输入', routerLink: { name: 'GlobalRendererFormDesignWidgetMyTextareaWidget' } },
                { title: '下拉框', routerLink: { name: 'GlobalRendererFormDesignWidgetMySelectWidget' } },
                { title: '日期选择', routerLink: { name: 'GlobalRendererFormDesignWidgetMyDatePickerWidget' } },
                { title: '数值输入', routerLink: { name: 'GlobalRendererFormDesignWidgetMyNumberInputWidget' } },
                { title: '金额输入', routerLink: { name: 'GlobalRendererFormDesignWidgetMyAmountInputWidget' } },
                { title: '上传附件', routerLink: { name: 'GlobalRendererFormDesignWidgetMyUploadFileWidget' } },
                { title: '上传图片', routerLink: { name: 'GlobalRendererFormDesignWidgetMyUploadImageWidget' } }
              ]
            },
            {
              title: '创建表单',
              children: [
                { title: '自定义表单1', routerLink: { name: 'GlobalRendererFormDesignMyform1' } },
                { title: '自定义表单2', routerLink: { name: 'GlobalRendererFormDesignMyform2' } }
              ]
            }
          ]
        }
      ]
    },
    {
      i18nKey: 'app.aside.menu.listDesignTitle',
      children: [
        { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'list-design' } } },
        {
          i18nKey: 'app.aside.menu.listDesignUse',
          children: [
            { title: '基础功能', routerLink: { name: 'ComponentListDesignBase' } },
            { title: '移动端设计器', routerLink: { name: 'ComponentListDesignMobile' } },
            { title: 'PC 端和移动端设计器', routerLink: { name: 'ComponentListDesignPcAndMobile' } },
            { title: '集成表单设计器', routerLink: { name: 'ComponentListDesignFormAndList' } }
          ]
        }
      ]
    }
    // { title: 'FlowDesign 流程设计器' },
    // { title: 'PrintDesign 打印设计器' },
  ]
}
