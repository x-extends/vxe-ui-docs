import { NavVO, otherUrl } from './nav'

export const designNavConfig: NavVO = {
  i18nKey: 'app.aside.menu.designTitle',
  icon: 'vxe-icon-pc',
  showCount: true,
  keywords: 'vxe-design',
  children: [
    {
      i18nKey: 'app.aside.menu.formDesignTitle',
      icon: 'vxe-icon-association-form',
      children: [
        { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'form-design' } }, keywords: 'vxe-design' },
        {
          i18nKey: 'app.aside.menu.formDesignUse',
          children: [
            {
              i18nKey: 'app.aside.menu.designBasicConfig',
              children: [
                { i18nKey: 'app.aside.menu.designBuiltinWidgetConfig', routerLink: { name: 'ComponentFormDesignBasicsBase' } },
                { i18nKey: 'app.aside.menu.designCustomWidgetGroup', routerLink: { name: 'ComponentFormDesignBasicsCustomGroup' } },
                { i18nKey: 'app.aside.menu.designDisplayStyleConfig', routerLink: { name: 'ComponentFormDesignBasicsStyleSetting' } }
              ]
            },
            {
              i18nKey: 'app.aside.menu.designContextMenu',
              children: [
                { i18nKey: 'app.aside.menu.designGenerateFormView', routerLink: { name: 'ComponentFormDesignMenuBasics' } }
              ]
            },
            {
              i18nKey: 'app.aside.menu.designMultiPlatformConfig',
              children: [
                { i18nKey: 'app.aside.menu.designMobileOnly', routerLink: { name: 'ComponentFormDesignMobile' } },
                { i18nKey: 'app.aside.menu.designPcAndMobileConfig', routerLink: { name: 'ComponentFormDesignPcAndMobile' } }
              ]
            },
            {
              i18nKey: 'app.aside.menu.designViewTransform',
              children: [
                { i18nKey: 'app.aside.menu.designGenerateFormView', routerLink: { name: 'ComponentFormDesignRenderView' } }
              ]
            },
            {
              i18nKey: 'app.aside.menu.designCustomSlotTemplate',
              children: [
                { i18nKey: 'app.aside.menu.designCustomTitleTemplate', routerLink: { name: 'ComponentFormDesignTemplateTitle' } },
                { i18nKey: 'app.aside.menu.designCustomTitlePrefixTemplate', routerLink: { name: 'ComponentFormDesignTemplateTitlePrefix' } },
                { i18nKey: 'app.aside.menu.designCustomTitleSuffixTemplate', routerLink: { name: 'ComponentFormDesignTemplateTitleSuffix' } },
                { i18nKey: 'app.aside.menu.designCustomHeaderTemplate', routerLink: { name: 'ComponentFormDesignTemplateHeader' } }
              ]
            },
            { i18nKey: 'app.aside.menu.designThirdPartyPluginIntegration', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/form-design/renderView`, linkTarget: '_blank' }
          ]
        },
        {
          i18nKey: 'app.aside.menu.designDesignerTemplate',
          children: [
            { i18nKey: 'app.aside.menu.designVisualDesignerTemplate', isTemplate: true, linkUrl: 'https://vxeui.com/design-template/', linkTarget: '_blank' },
            { i18nKey: 'app.aside.menu.designZeroCodePlatformTemplate', isEnterprise: true, linkUrl: 'https://vxeui.com/zero-code/', linkTarget: '_blank' }
          ]
        },
        {
          i18nKey: 'app.aside.menu.formDesignGlobalRenderer',
          children: [
            { title: 'API', routerLink: { name: 'GlobalRendererFormDesignAPI' } },
            {
              i18nKey: 'app.aside.menu.designCreateWidget',
              children: [
                { i18nKey: 'app.aside.menu.designSingleLineInput', routerLink: { name: 'GlobalRendererFormDesignWidgetMyInputWidget' } },
                { i18nKey: 'app.aside.menu.designMultilineInput', routerLink: { name: 'GlobalRendererFormDesignWidgetMyTextareaWidget' } },
                { i18nKey: 'app.aside.menu.designSelect', routerLink: { name: 'GlobalRendererFormDesignWidgetMySelectWidget' } },
                { i18nKey: 'app.aside.menu.designDatePicker', routerLink: { name: 'GlobalRendererFormDesignWidgetMyDatePickerWidget' } },
                { i18nKey: 'app.aside.menu.designNumberInput', routerLink: { name: 'GlobalRendererFormDesignWidgetMyNumberInputWidget' } },
                { i18nKey: 'app.aside.menu.designAmountInput', routerLink: { name: 'GlobalRendererFormDesignWidgetMyAmountInputWidget' } },
                { i18nKey: 'app.aside.menu.designUploadFile', routerLink: { name: 'GlobalRendererFormDesignWidgetMyUploadFileWidget' } },
                { i18nKey: 'app.aside.menu.designUploadImage', routerLink: { name: 'GlobalRendererFormDesignWidgetMyUploadImageWidget' } }
              ]
            },
            {
              i18nKey: 'app.aside.menu.designCreateForm',
              children: [
                { i18nKey: 'app.aside.menu.designCustomForm1', routerLink: { name: 'GlobalRendererFormDesignMyform1' } },
                { i18nKey: 'app.aside.menu.designCustomForm2', routerLink: { name: 'GlobalRendererFormDesignMyform2' } }
              ]
            }
          ]
        }
      ]
    },
    {
      i18nKey: 'app.aside.menu.listDesignTitle',
      icon: 'vxe-icon-num-list',
      children: [
        { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'list-design' } } },
        {
          i18nKey: 'app.aside.menu.listDesignUse',
          children: [
            { i18nKey: 'app.aside.menu.designBasicFeatures', routerLink: { name: 'ComponentListDesignBase' } },
            { i18nKey: 'app.aside.menu.designMobileDesigner', routerLink: { name: 'ComponentListDesignMobile' } },
            { i18nKey: 'app.aside.menu.designPcAndMobileDesigner', routerLink: { name: 'ComponentListDesignPcAndMobile' } },
            { i18nKey: 'app.aside.menu.designFormDesignerIntegration', routerLink: { name: 'ComponentListDesignFormAndList' } }
          ]
        }
      ]
    }
    // { title: 'FlowDesign 流程设计器' },
    // { title: 'PrintDesign 打印设计器' },
  ]
}
