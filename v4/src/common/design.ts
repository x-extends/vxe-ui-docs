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
      children: [
        { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'form-design' } }, keywords: 'vxe-design' },
        {
          // 使用设计器
          i18nKey: 'app.aside.menu.formDesignUse',
          children: [
            {
              // 基础配置
              i18nKey: 'app.aside.menu.designBasicConfig',
              children: [
                // 内置控件配置
                { i18nKey: 'app.aside.menu.designBuiltinWidgetConfig', routerLink: { name: 'ComponentFormDesignBasicsBase' } },
                // 自定义控件分组
                { i18nKey: 'app.aside.menu.designCustomWidgetGroup', routerLink: { name: 'ComponentFormDesignBasicsCustomGroup' } },
                // 显示样式配置
                { i18nKey: 'app.aside.menu.designDisplayStyleConfig', routerLink: { name: 'ComponentFormDesignBasicsStyleSetting' } }
              ]
            },
            {
              // 右键菜单
              i18nKey: 'app.aside.menu.designContextMenu',
              children: [
                // 生成表单视图
                { i18nKey: 'app.aside.menu.designGenerateFormView', routerLink: { name: 'ComponentFormDesignMenuBasics' } }
              ]
            },
            {
              // 多端配置
              i18nKey: 'app.aside.menu.designMultiPlatformConfig',
              children: [
                // 仅移动端
                { i18nKey: 'app.aside.menu.designMobileOnly', routerLink: { name: 'ComponentFormDesignMobile' } },
                // 同时配置 PC 端和移动端
                { i18nKey: 'app.aside.menu.designPcAndMobileConfig', routerLink: { name: 'ComponentFormDesignPcAndMobile' } }
              ]
            },
            {
              // 视图转换
              i18nKey: 'app.aside.menu.designViewTransform',
              children: [
                // 生成表单视图
                { i18nKey: 'app.aside.menu.designGenerateFormView', routerLink: { name: 'ComponentFormDesignRenderView' } }
              ]
            },
            {
              // 自定义插槽模板
              i18nKey: 'app.aside.menu.designCustomSlotTemplate',
              children: [
                // 自定义标题模板
                { i18nKey: 'app.aside.menu.designCustomTitleTemplate', routerLink: { name: 'ComponentFormDesignTemplateTitle' } },
                // 自定义标题前缀模板
                { i18nKey: 'app.aside.menu.designCustomTitlePrefixTemplate', routerLink: { name: 'ComponentFormDesignTemplateTitlePrefix' } },
                // 自定义标题后缀模板
                { i18nKey: 'app.aside.menu.designCustomTitleSuffixTemplate', routerLink: { name: 'ComponentFormDesignTemplateTitleSuffix' } },
                // 自定义头部模板
                { i18nKey: 'app.aside.menu.designCustomHeaderTemplate', routerLink: { name: 'ComponentFormDesignTemplateHeader' } }
              ]
            },
            // 集成第三方扩展插件
            { i18nKey: 'app.aside.menu.designThirdPartyPluginIntegration', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/form-design/renderView`, linkTarget: '_blank' }
          ]
        },
        {
          // 设计器模板
          i18nKey: 'app.aside.menu.designDesignerTemplate',
          children: [
            // 可视化设计器模板
            { i18nKey: 'app.aside.menu.designVisualDesignerTemplate', isTemplate: true, linkUrl: 'https://vxeui.com/design-template/', linkTarget: '_blank' },
            // 零代码平台模板
            { i18nKey: 'app.aside.menu.designZeroCodePlatformTemplate', isEnterprise: true, linkUrl: 'https://vxeui.com/zero-code/', linkTarget: '_blank' }
          ]
        },
        {
          // 渲染器（高阶复用）
          i18nKey: 'app.aside.menu.formDesignGlobalRenderer',
          children: [
            { title: 'API', routerLink: { name: 'GlobalRendererFormDesignAPI' } },
            {
              // 创建控件
              i18nKey: 'app.aside.menu.designCreateWidget',
              children: [
                // 单行输入
                { i18nKey: 'app.aside.menu.designSingleLineInput', routerLink: { name: 'GlobalRendererFormDesignWidgetMyInputWidget' } },
                // 多行输入
                { i18nKey: 'app.aside.menu.designMultilineInput', routerLink: { name: 'GlobalRendererFormDesignWidgetMyTextareaWidget' } },
                // 下拉框
                { i18nKey: 'app.aside.menu.designSelect', routerLink: { name: 'GlobalRendererFormDesignWidgetMySelectWidget' } },
                // 日期选择
                { i18nKey: 'app.aside.menu.designDatePicker', routerLink: { name: 'GlobalRendererFormDesignWidgetMyDatePickerWidget' } },
                // 数值输入
                { i18nKey: 'app.aside.menu.designNumberInput', routerLink: { name: 'GlobalRendererFormDesignWidgetMyNumberInputWidget' } },
                // 金额输入
                { i18nKey: 'app.aside.menu.designAmountInput', routerLink: { name: 'GlobalRendererFormDesignWidgetMyAmountInputWidget' } },
                // 上传附件
                { i18nKey: 'app.aside.menu.designUploadFile', routerLink: { name: 'GlobalRendererFormDesignWidgetMyUploadFileWidget' } },
                // 上传图片
                { i18nKey: 'app.aside.menu.designUploadImage', routerLink: { name: 'GlobalRendererFormDesignWidgetMyUploadImageWidget' } }
              ]
            },
            {
              // 创建表单
              i18nKey: 'app.aside.menu.designCreateForm',
              children: [
                // 自定义表单1
                { i18nKey: 'app.aside.menu.designCustomForm1', routerLink: { name: 'GlobalRendererFormDesignMyform1' } },
                // 自定义表单2
                { i18nKey: 'app.aside.menu.designCustomForm2', routerLink: { name: 'GlobalRendererFormDesignMyform2' } }
              ]
            }
          ]
        }
      ]
    },
    {
      // ListDesign 列表设计器
      i18nKey: 'app.aside.menu.listDesignTitle',
      icon: 'vxe-icon-num-list',
      children: [
        { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'list-design' } } },
        {
          // 使用设计器
          i18nKey: 'app.aside.menu.listDesignUse',
          children: [
            // 基础功能
            { i18nKey: 'app.aside.menu.designBasicFeatures', routerLink: { name: 'ComponentListDesignBase' } },
            // 移动端设计器
            { i18nKey: 'app.aside.menu.designMobileDesigner', routerLink: { name: 'ComponentListDesignMobile' } },
            // PC 端和移动端设计器
            { i18nKey: 'app.aside.menu.designPcAndMobileDesigner', routerLink: { name: 'ComponentListDesignPcAndMobile' } },
            // 集成表单设计器
            { i18nKey: 'app.aside.menu.designFormDesignerIntegration', routerLink: { name: 'ComponentListDesignFormAndList' } }
          ]
        }
      ]
    }
    // { title: 'FlowDesign 流程设计器' },
    // { title: 'PrintDesign 打印设计器' },
  ]
}
