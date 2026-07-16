import { NavVO, otherUrl } from './nav'

export const formNavConfig: NavVO = {
  i18nKey: 'app.aside.menu.formTitle',
  showCount: true,
  children: [
    { title: 'Form API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'form' } }, keywords: 'vxe-form' },
    { title: 'Form Group API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'form-group' } }, keywords: 'vxe-form-group' },
    { title: 'Form Item API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'form-item' } }, keywords: 'vxe-form-item' },
    {
      i18nKey: 'app.aside.menu.formBaseTitle',
      children: [
        { title: '基础功能', routerLink: { name: 'ComponentFormBasicsBase' } },
        { title: '尺寸大小', routerLink: { name: 'ComponentFormBasicsSize' } },
        { title: '数据类型', routerLink: { name: 'ComponentFormBasicsField' } },
        { title: '横向排列', routerLink: { name: 'ComponentFormBasicsHorizontal' } },
        { title: '上下布局', routerLink: { name: 'ComponentFormBasicsVertical' } },
        { title: '边距', routerLink: { name: 'ComponentFormBasicsPadding' } },
        { title: '标题冒号', routerLink: { name: 'ComponentFormBasicsColon' } },
        { title: '标题加粗', routerLink: { name: 'ComponentFormBasicsBold' } },
        { title: '标题宽度', routerLink: { name: 'ComponentFormBasicsWidth' } },
        { title: '标题对齐方式', routerLink: { name: 'ComponentFormBasicsTitleAlign' } },
        { title: '内容对齐方式', routerLink: { name: 'ComponentFormBasicsAlign' } },
        { title: '溢出隐藏', routerLink: { name: 'ComponentFormBasicsOverflow' } },
        { title: '标题前缀图标', routerLink: { name: 'ComponentFormBasicsTitlePrefix' } },
        { title: '标题后缀图标', routerLink: { name: 'ComponentFormBasicsTitleSuffix' } },
        { title: '边框', routerLink: { name: 'ComponentFormBasicsBorder' } },
        { title: '标题背景', routerLink: { name: 'ComponentFormBasicsTitleBackground' } },
        { title: '格式化内容', routerLink: { name: 'ComponentFormBasicsFormat' } },
        { title: '分行/分列', routerLink: { name: 'ComponentFormBasicsChildren' } },
        { title: '分组', routerLink: { name: 'ComponentFormBasicsGroup' } },
        { title: '显示与隐藏项', routerLink: { name: 'ComponentFormBasicsVisible' } },
        { title: '自定义布局', routerLink: { name: 'ComponentFormBasicsCustomLayout' } },
        {
          title: '折叠表单',
          children: [
            { title: '展开与收起', routerLink: { name: 'ComponentFormBasicsCollapseBase' } },
            { title: '自定义按钮文字', routerLink: { name: 'ComponentFormBasicsCollapseButtonText' } },
            { title: '自定义按钮图标', routerLink: { name: 'ComponentFormBasicsCollapseButtonIcon' } }
          ]
        },
        {
          title: '数据校验',
          children: [
            { title: '校验规则配置', routerLink: { name: 'ComponentFormBasicsValidateRules' } },
            { title: '字符串校验规则', routerLink: { name: 'ComponentFormBasicsValidateString' } },
            { title: '数值校验规则', routerLink: { name: 'ComponentFormBasicsValidateNumber' } },
            { title: '正则校验规则', routerLink: { name: 'ComponentFormBasicsValidateRegexp' } },
            { title: '数组校验规则', routerLink: { name: 'ComponentFormBasicsValidateArray' } },
            { title: '多关联字段校验规则', routerLink: { name: 'ComponentFormBasicsValidateField' } },
            { title: '自定义校验规则', routerLink: { name: 'ComponentFormBasicsValidateCustom' } },
            { title: '显示提示消息', routerLink: { name: 'ComponentFormBasicsValidateShowMessage' } },
            { title: '显示提示图标', routerLink: { name: 'ComponentFormBasicsValidateShowErrorIcon' } },
            { title: '错误提示样式', routerLink: { name: 'ComponentFormBasicsValidateTheme' } },
            // { title: '值改变时自动提交', routerLink: { name: 'ComponentFormBasicsValidateChangeToSubmit' } },
            { title: '手动调用', routerLink: { name: 'ComponentFormBasicsValidateManual' } }
          ]
        },
        {
          title: '渲染 - 配置式',
          children: [
            { title: 'input 原生-输入框', routerLink: { name: 'ComponentFormBasicsItemRenderInput' } },
            { title: 'textarea 原生-文本域', routerLink: { name: 'ComponentFormBasicsItemRenderTextarea' } },
            { title: 'select 原生-下拉框', routerLink: { name: 'ComponentFormBasicsItemRenderSelect' } },
            { title: 'VxeButtonGroup 按钮组', routerLink: { name: 'ComponentFormBasicsItemRenderVxeButtonGroup' } },
            { title: 'VxeInput 单行输入框', routerLink: { name: 'ComponentFormBasicsItemRenderVxeInput' } },
            { title: 'VxeNumberInput 数值输入框', routerLink: { name: 'ComponentFormBasicsItemRenderVxeNumberInput' } },
            { title: 'VxeTextarea 文本域', routerLink: { name: 'ComponentFormBasicsItemRenderVxeTextarea' } },
            { title: 'VxeSelect 下拉框', routerLink: { name: 'ComponentFormBasicsItemRenderVxeSelect' } },
            { title: 'VxeDatePicker 日期选择', routerLink: { name: 'ComponentFormBasicsItemRenderVxeDatePicker' } },
            { title: 'VxeDateRangePicker 日期范围选择', routerLink: { name: 'ComponentFormBasicsItemRenderVxeDateRangePicker' } },
            { title: 'VxeCascader 级联选择', routerLink: { name: 'ComponentFormBasicsItemRenderVxeCascader' } },
            { title: 'VxeTreeSelect 下拉树选择', routerLink: { name: 'ComponentFormBasicsItemRenderVxeTreeSelect' } },
            { title: 'VxeTableSelect 下拉表格选择', routerLink: { name: 'ComponentFormBasicsItemRenderVxeTableSelect' } },
            { title: 'VxeSwitch 开关', routerLink: { name: 'ComponentFormBasicsItemRenderVxeSwitch' } },
            { title: 'VxeRadioGroup 单选组', routerLink: { name: 'ComponentFormBasicsItemRenderVxeRadioGroup' } },
            { title: 'VxeCheckboxGroup 复选组', routerLink: { name: 'ComponentFormBasicsItemRenderVxeCheckboxGroup' } },
            { title: 'VxeRate 评分', routerLink: { name: 'ComponentFormBasicsItemRenderVxeRate' } },
            { title: 'VxeSlider 滑块', routerLink: { name: 'ComponentFormBasicsItemRenderVxeSlider' } },
            { title: 'VxeUpload 上传', routerLink: { name: 'ComponentFormBasicsItemRenderVxeUpload' } },
            // { title: 'WangEditor 第三方扩展-富文本', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-wangeditor/form/itemTemplate/wang-editor`, linkTarget: '_blank' },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/form/itemTemplate/el-input`, linkTarget: '_blank' },
            { title: '只读模式', routerLink: { name: 'ComponentFormBasicsItemRenderReadonly' } },
            { title: '禁用模式', routerLink: { name: 'ComponentFormBasicsItemRenderDisabled' } },
            { title: '实现联动禁用', routerLink: { name: 'ComponentFormBasicsItemRenderLinkageDisabled' } }
          ]
        },
        {
          title: '渲染 - 插槽式',
          children: [
            { title: 'VxeButton 按钮', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeButton' } },
            { title: 'VxeInput 单行输入框', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeInput' } },
            { title: 'VxeNumberInput 数值输入框', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeNumberInput' } },
            { title: 'VxeTextarea 文本域', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeTextarea' } },
            { title: 'VxeSelect 下拉框', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeSelect' } },
            { title: 'VxeDatePicker 日期选择', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeDatePicker' } },
            { title: 'VxeDateRangePicker 日期范围选择', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeDateRangePicker' } },
            { title: 'VxeCascader 级联选择', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeCascader' } },
            { title: 'VxeTreeSelect 下拉树选择', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeTreeSelect' } },
            { title: 'VxeSwitch 开关', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeSwitch' } },
            { title: 'VxeRadioGroup 单选组', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeRadioGroup' } },
            { title: 'VxeCheckboxGroup 复选组', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeCheckboxGroup' } },
            { title: 'VxeRate 评分', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeRate' } },
            { title: 'VxeSlider 滑块', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeSlider' } },
            { title: 'VxeUpload 上传', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeUpload' } },
            // { title: 'WangEditor 第三方扩展-富文本', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-wangeditor/form/itemTemplate/wang-editor`, linkTarget: '_blank' },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/form/itemTemplate/el-input`, linkTarget: '_blank' }
          ]
        },
        {
          title: '自定义插槽模板',
          children: [
            { title: '自定义标题模板', routerLink: { name: 'ComponentFormBasicsTemplateTitle' } },
            { title: '自定义标题前缀模板', routerLink: { name: 'ComponentFormBasicsTemplatePrefix' } },
            { title: '自定义标题后缀模板', routerLink: { name: 'ComponentFormBasicsTemplateSuffix' } },
            { title: '自定义内容模板', routerLink: { name: 'ComponentFormBasicsTemplateContent' } }
          ]
        },
        { title: '在页签中使用', routerLink: { name: 'ComponentFormBasicsTabs' } },
        { title: '实现简历模板', routerLink: { name: 'ComponentFormBasicsResumeTemplate' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.formConfigTitle',
      children: [
        { title: '基础功能', routerLink: { name: 'ComponentFormConfigBase' } },
        { title: '数据类型', routerLink: { name: 'ComponentFormConfigField' } },
        { title: '横向排列', routerLink: { name: 'ComponentFormConfigHorizontal' } },
        { title: '上下布局', routerLink: { name: 'ComponentFormConfigVertical' } },
        { title: '边距', routerLink: { name: 'ComponentFormConfigPadding' } },
        { title: '标题冒号', routerLink: { name: 'ComponentFormConfigColon' } },
        { title: '标题加粗', routerLink: { name: 'ComponentFormConfigBold' } },
        { title: '标题宽度', routerLink: { name: 'ComponentFormConfigWidth' } },
        { title: '标题对齐方式', routerLink: { name: 'ComponentFormConfigTitleAlign' } },
        { title: '内容对齐方式', routerLink: { name: 'ComponentFormConfigAlign' } },
        { title: '溢出隐藏', routerLink: { name: 'ComponentFormConfigOverflow' } },
        { title: '标题前缀图标', routerLink: { name: 'ComponentFormConfigTitlePrefix' } },
        { title: '标题后缀图标', routerLink: { name: 'ComponentFormConfigTitleSuffix' } },
        { title: '边框', routerLink: { name: 'ComponentFormConfigBorder' } },
        { title: '标题背景', routerLink: { name: 'ComponentFormConfigTitleBackground' } },
        { title: '格式化内容', routerLink: { name: 'ComponentFormConfigFormat' } },
        { title: '分行/分列', routerLink: { name: 'ComponentFormConfigChildren' } },
        { title: '分组', routerLink: { name: 'ComponentFormConfigGroup' } },
        { title: '显示与隐藏项', routerLink: { name: 'ComponentFormConfigVisible' } },
        {
          title: '折叠表单',
          children: [
            { title: '展开与收起', routerLink: { name: 'ComponentFormConfigCollapseBase' } },
            { title: '自定义按钮文字', routerLink: { name: 'ComponentFormConfigCollapseButtonText' } },
            { title: '自定义按钮图标', routerLink: { name: 'ComponentFormConfigCollapseButtonIcon' } }
          ]
        },
        {
          title: '数据校验',
          children: [
            { title: '校验规则配置', routerLink: { name: 'ComponentFormConfigValidateRules' } },
            { title: '字符串校验规则', routerLink: { name: 'ComponentFormConfigValidateString' } },
            { title: '数值校验规则', routerLink: { name: 'ComponentFormConfigValidateNumber' } },
            { title: '正则校验规则', routerLink: { name: 'ComponentFormConfigValidateRegexp' } },
            { title: '数组校验规则', routerLink: { name: 'ComponentFormConfigValidateArray' } },
            { title: '多关联字段校验规则', routerLink: { name: 'ComponentFormConfigValidateField' } },
            { title: '自定义校验规则', routerLink: { name: 'ComponentFormConfigValidateCustom' } },
            { title: '显示提示消息', routerLink: { name: 'ComponentFormConfigValidateShowMessage' } },
            { title: '显示提示图标', routerLink: { name: 'ComponentFormConfigValidateShowErrorIcon' } },
            { title: '错误提示样式', routerLink: { name: 'ComponentFormConfigValidateTheme' } },
            { title: '值改变时自动提交', routerLink: { name: 'ComponentFormConfigValidateChangeToSubmit' } },
            { title: '手动调用', routerLink: { name: 'ComponentFormConfigValidateManual' } }
          ]
        },
        {
          title: '渲染 - 配置式',
          children: [
            { title: 'input 原生-输入框', routerLink: { name: 'ComponentFormConfigItemRenderInput' } },
            { title: 'textarea 原生-文本域', routerLink: { name: 'ComponentFormConfigItemRenderTextarea' } },
            { title: 'select 原生-下拉框', routerLink: { name: 'ComponentFormConfigItemRenderSelect' } },
            { title: 'VxeInput 单行输入框', routerLink: { name: 'ComponentFormConfigItemRenderVxeInput' } },
            { title: 'VxeButtonGroup 按钮组', routerLink: { name: 'ComponentFormConfigItemRenderVxeButtonGroup' } },
            { title: 'VxeTextarea 文本域', routerLink: { name: 'ComponentFormConfigItemRenderVxeTextarea' } },
            { title: 'VxeNumberInput 数值输入', routerLink: { name: 'ComponentFormConfigItemRenderVxeNumberInput' } },
            { title: 'VxeSelect 下拉框', routerLink: { name: 'ComponentFormConfigItemRenderVxeSelect' } },
            { title: 'VxeDatePicker 日期选择', routerLink: { name: 'ComponentFormConfigItemRenderVxeDatePicker' } },
            { title: 'VxeDateRangePicker 日期范围选择', routerLink: { name: 'ComponentFormConfigItemRenderVxeDateRangePicker' } },
            { title: 'VxeCascader 级联选择', routerLink: { name: 'ComponentFormConfigItemRenderVxeCascader' } },
            { title: 'VxeTreeSelect 下拉树选择', routerLink: { name: 'ComponentFormConfigItemRenderVxeTreeSelect' } },
            { title: 'VxeTableSelect 下拉表格选择', routerLink: { name: 'ComponentFormConfigItemRenderVxeTableSelect' } },
            { title: 'VxeSwitch 开关', routerLink: { name: 'ComponentFormConfigItemRenderVxeSwitch' } },
            { title: 'VxeRadioGroup 单选组件', routerLink: { name: 'ComponentFormConfigItemRenderVxeRadioGroup' } },
            { title: 'VxeCheckboxGroup 复选组', routerLink: { name: 'ComponentFormConfigItemRenderVxeCheckboxGroup' } },
            { title: 'VxeRate 评分', routerLink: { name: 'ComponentFormConfigItemRenderVxeRate' } },
            { title: 'VxeRate 滑块', routerLink: { name: 'ComponentFormConfigItemRenderVxeSlider' } },
            { title: 'VxeImage 图片', routerLink: { name: 'ComponentFormConfigItemRenderVxeImage' } },
            { title: 'VxeImageGroup 图片组', routerLink: { name: 'ComponentFormConfigItemRenderVxeImageGroup' } },
            { title: 'VxeUpload 上传', routerLink: { name: 'ComponentFormConfigItemRenderVxeUpload' } },
            // { title: 'WangEditor 第三方扩展-富文本', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-wangeditor/form/itemRender/wang-editor`, linkTarget: '_blank' },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/form/itemRender/el-input`, linkTarget: '_blank' },
            { title: '只读模式', routerLink: { name: 'ComponentFormConfigItemRenderReadonly' } },
            { title: '禁用模式', routerLink: { name: 'ComponentFormConfigItemRenderDisabled' } },
            { title: '实现联动禁用', routerLink: { name: 'ComponentFormConfigItemRenderLinkageDisabled' } }
          ]
        },
        {
          title: '渲染 - 插槽式',
          children: [
            { title: 'VxeButton 按钮', routerLink: { name: 'ComponentFormConfigItemTemplateVxeButton' } },
            { title: 'VxeInput 单行输入框', routerLink: { name: 'ComponentFormConfigItemTemplateVxeInput' } },
            { title: 'VxeTextarea 文本域', routerLink: { name: 'ComponentFormConfigItemTemplateVxeTextarea' } },
            { title: 'VxeNumberInput 数值输入', routerLink: { name: 'ComponentFormConfigItemTemplateVxeNumberInput' } },
            { title: 'VxeSelect 下拉框', routerLink: { name: 'ComponentFormConfigItemTemplateVxeSelect' } },
            { title: 'VxeDatePicker 日期选择', routerLink: { name: 'ComponentFormConfigItemTemplateVxeDatePicker' } },
            { title: 'VxeDateRangePicker 日期范围选择', routerLink: { name: 'ComponentFormConfigItemTemplateVxeDateRangePicker' } },
            { title: 'VxeCascader 级联选择', routerLink: { name: 'ComponentFormConfigItemTemplateVxeCascader' } },
            { title: 'VxeTreeSelect 下拉树选择', routerLink: { name: 'ComponentFormConfigItemTemplateVxeTreeSelect' } },
            { title: 'VxeSwitch 开关', routerLink: { name: 'ComponentFormConfigItemTemplateVxeSwitch' } },
            { title: 'VxeRadioGroup 单选组', routerLink: { name: 'ComponentFormConfigItemTemplateVxeRadioGroup' } },
            { title: 'VxeCheckboxGroup 复选组', routerLink: { name: 'ComponentFormConfigItemTemplateVxeCheckboxGroup' } },
            { title: 'VxeRate 评分', routerLink: { name: 'ComponentFormConfigItemTemplateVxeRate' } },
            { title: 'VxeRate 滑块', routerLink: { name: 'ComponentFormConfigItemTemplateVxeSlider' } },
            { title: 'VxeImage 图片', routerLink: { name: 'ComponentFormConfigItemTemplateVxeImage' } },
            { title: 'VxeImageGroup 图片组', routerLink: { name: 'ComponentFormConfigItemTemplateVxeImageGroup' } },
            { title: 'VxeUpload 上传', routerLink: { name: 'ComponentFormConfigItemTemplateVxeUpload' } },
            // { title: 'WangEditor 第三方扩展-富文本', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-wangeditor/form/itemRender/wang-editor`, linkTarget: '_blank' },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/form/itemRender/el-input`, linkTarget: '_blank' }
          ]
        },
        {
          title: '自定义插槽模板',
          children: [
            { title: '自定义标题模板', routerLink: { name: 'ComponentFormConfigTemplateTitle' } },
            { title: '自定义标题前缀模板', routerLink: { name: 'ComponentFormConfigTemplatePrefix' } },
            { title: '自定义标题后缀模板', routerLink: { name: 'ComponentFormConfigTemplateSuffix' } },
            { title: '自定义内容模板', routerLink: { name: 'ComponentFormConfigTemplateContent' } }
          ]
        },
        { title: '在页签中使用', routerLink: { name: 'ComponentFormConfigTabs' } },
        { title: '实现简历模板', routerLink: { name: 'ComponentFormConfigResumeTemplate' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.formGlobalValidators',
      children: [
        { title: 'API', routerLink: { name: 'GlobalValidatorsFormAPI' } },
        { title: '表单项校验', routerLink: { name: 'GlobalValidatorsFormBase' } },
        { title: '便捷校验配置插件', isPlugin: true, linkUrl: `${otherUrl}#/plugin-validator/form/base`, linkTarget: '_blank' }
      ]
    },
    {
      i18nKey: 'app.aside.menu.formGlobalFormats',
      children: [
        { title: 'API', routerLink: { name: 'GlobalFormatsFormAPI' } },
        { title: '表单项', routerLink: { name: 'GlobalFormatsFormBase' } }
      ]
    },
    {
      i18nKey: 'app.aside.menu.formGlobalRenderer',
      children: [
        { title: 'API', routerLink: { name: 'GlobalRendererFormAPI' } },
        {
          title: '表单项',
          children: [
            { title: '实现一个金额输入', routerLink: { name: 'GlobalRendererFormItemMyItemAmount' } },
            { title: '实现一个附件上传', routerLink: { name: 'GlobalRendererFormItemMyItemUpload' } },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/form/itemRender/el-input`, linkTarget: '_blank' }
          ]
        }
      ]
    }
  ]
}
