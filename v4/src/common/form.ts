import { NavVO, otherUrl } from './nav'

export const formNavConfig: NavVO = {
  // Form 表单
  i18nKey: 'app.aside.menu.formTitle',
  showCount: true,
  children: [
    { title: 'Form API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'form' } }, keywords: 'vxe-form' },
    { title: 'Form Group API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'form-group' } }, keywords: 'vxe-form-group' },
    { title: 'Form Item API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'form-item' } }, keywords: 'vxe-form-item' },
    {
      // 基础表单
      i18nKey: 'app.aside.menu.formBaseTitle',
      children: [
        // 基础功能
        { i18nKey: 'app.aside.menu.formBasicFeatures', routerLink: { name: 'ComponentFormBasicsBase' } },
        // 尺寸大小
        { i18nKey: 'app.aside.menu.formSize', routerLink: { name: 'ComponentFormBasicsSize' } },
        // 数据类型
        { i18nKey: 'app.aside.menu.formDataType', routerLink: { name: 'ComponentFormBasicsField' } },
        // 横向排列
        { i18nKey: 'app.aside.menu.formHorizontal', routerLink: { name: 'ComponentFormBasicsHorizontal' } },
        // 上下布局
        { i18nKey: 'app.aside.menu.formVertical', routerLink: { name: 'ComponentFormBasicsVertical' } },
        // 边距
        { i18nKey: 'app.aside.menu.formPadding', routerLink: { name: 'ComponentFormBasicsPadding' } },
        // 标题冒号
        { i18nKey: 'app.aside.menu.formColon', routerLink: { name: 'ComponentFormBasicsColon' } },
        // 标题加粗
        { i18nKey: 'app.aside.menu.formBold', routerLink: { name: 'ComponentFormBasicsBold' } },
        // 标题宽度
        { i18nKey: 'app.aside.menu.formTitleWidth', routerLink: { name: 'ComponentFormBasicsWidth' } },
        // 标题对齐方式
        { i18nKey: 'app.aside.menu.formTitleAlign', routerLink: { name: 'ComponentFormBasicsTitleAlign' } },
        // 内容对齐方式
        { i18nKey: 'app.aside.menu.formContentAlign', routerLink: { name: 'ComponentFormBasicsAlign' } },
        // 溢出隐藏
        { i18nKey: 'app.aside.menu.formOverflowHidden', routerLink: { name: 'ComponentFormBasicsOverflow' } },
        // 标题前缀图标
        { i18nKey: 'app.aside.menu.formTitlePrefixIcon', routerLink: { name: 'ComponentFormBasicsTitlePrefix' } },
        // 标题后缀图标
        { i18nKey: 'app.aside.menu.formTitleSuffixIcon', routerLink: { name: 'ComponentFormBasicsTitleSuffix' } },
        // 边框
        { i18nKey: 'app.aside.menu.formBorder', routerLink: { name: 'ComponentFormBasicsBorder' } },
        // 标题背景
        { i18nKey: 'app.aside.menu.formTitleBackground', routerLink: { name: 'ComponentFormBasicsTitleBackground' } },
        // 格式化内容
        { i18nKey: 'app.aside.menu.formFormatContent', routerLink: { name: 'ComponentFormBasicsFormat' } },
        // 分行/分列
        { i18nKey: 'app.aside.menu.formSplitRowColumn', routerLink: { name: 'ComponentFormBasicsChildren' } },
        // 分组
        { i18nKey: 'app.aside.menu.formGroup', routerLink: { name: 'ComponentFormBasicsGroup' } },
        // 显示与隐藏项
        { i18nKey: 'app.aside.menu.formShowHideItem', routerLink: { name: 'ComponentFormBasicsVisible' } },
        // 自定义布局
        { i18nKey: 'app.aside.menu.formCustomLayout', routerLink: { name: 'ComponentFormBasicsCustomLayout' } },
        {
          // 折叠表单
          i18nKey: 'app.aside.menu.formCollapseForm',
          children: [
            // 展开与收起
            { i18nKey: 'app.aside.menu.formExpandCollapse', routerLink: { name: 'ComponentFormBasicsCollapseBase' } },
            // 自定义按钮文字
            { i18nKey: 'app.aside.menu.formCustomButtonText', routerLink: { name: 'ComponentFormBasicsCollapseButtonText' } },
            // 自定义按钮图标
            { i18nKey: 'app.aside.menu.formCustomButtonIcon', routerLink: { name: 'ComponentFormBasicsCollapseButtonIcon' } }
          ]
        },
        {
          // 数据校验
          i18nKey: 'app.aside.menu.formDataValidation',
          children: [
            // 校验规则配置
            { i18nKey: 'app.aside.menu.formValidationRulesConfig', routerLink: { name: 'ComponentFormBasicsValidateRules' } },
            // 字符串校验规则
            { i18nKey: 'app.aside.menu.formStringValidationRule', routerLink: { name: 'ComponentFormBasicsValidateString' } },
            // 数值校验规则
            { i18nKey: 'app.aside.menu.formNumberValidationRule', routerLink: { name: 'ComponentFormBasicsValidateNumber' } },
            // 正则校验规则
            { i18nKey: 'app.aside.menu.formRegexpValidationRule', routerLink: { name: 'ComponentFormBasicsValidateRegexp' } },
            // 数组校验规则
            { i18nKey: 'app.aside.menu.formArrayValidationRule', routerLink: { name: 'ComponentFormBasicsValidateArray' } },
            // 多关联字段校验规则
            { i18nKey: 'app.aside.menu.formMultiFieldValidationRule', routerLink: { name: 'ComponentFormBasicsValidateField' } },
            // 自定义校验规则
            { i18nKey: 'app.aside.menu.formCustomValidationRule', routerLink: { name: 'ComponentFormBasicsValidateCustom' } },
            // 显示提示消息
            { i18nKey: 'app.aside.menu.formShowTipMessage', routerLink: { name: 'ComponentFormBasicsValidateShowMessage' } },
            // 显示提示图标
            { i18nKey: 'app.aside.menu.formShowTipIcon', routerLink: { name: 'ComponentFormBasicsValidateShowErrorIcon' } },
            // 错误提示样式
            { i18nKey: 'app.aside.menu.formErrorTipStyle', routerLink: { name: 'ComponentFormBasicsValidateTheme' } },
            // { title: '值改变时自动提交', routerLink: { name: 'ComponentFormBasicsValidateChangeToSubmit' } },
            // 手动调用
            { i18nKey: 'app.aside.menu.formManualCall', routerLink: { name: 'ComponentFormBasicsValidateManual' } }
          ]
        },
        {
          // 渲染 - 配置式
          i18nKey: 'app.aside.menu.formRenderConfig',
          children: [
            // input 原生-输入框
            { i18nKey: 'app.aside.menu.formNativeInput', routerLink: { name: 'ComponentFormBasicsItemRenderInput' } },
            // textarea 原生-文本域
            { i18nKey: 'app.aside.menu.formNativeTextarea', routerLink: { name: 'ComponentFormBasicsItemRenderTextarea' } },
            // select 原生-下拉框
            { i18nKey: 'app.aside.menu.formNativeSelect', routerLink: { name: 'ComponentFormBasicsItemRenderSelect' } },
            // VxeButtonGroup 按钮组
            { i18nKey: 'app.aside.menu.formVxeButtonGroup', routerLink: { name: 'ComponentFormBasicsItemRenderVxeButtonGroup' } },
            // VxeInput 单行输入框
            { i18nKey: 'app.aside.menu.formVxeInput', routerLink: { name: 'ComponentFormBasicsItemRenderVxeInput' } },
            // VxeNumberInput 数值输入框
            { i18nKey: 'app.aside.menu.formVxeNumberInput', routerLink: { name: 'ComponentFormBasicsItemRenderVxeNumberInput' } },
            // VxeTextarea 文本域
            { i18nKey: 'app.aside.menu.formVxeTextarea', routerLink: { name: 'ComponentFormBasicsItemRenderVxeTextarea' } },
            // VxeSelect 下拉框
            { i18nKey: 'app.aside.menu.formVxeSelect', routerLink: { name: 'ComponentFormBasicsItemRenderVxeSelect' } },
            // VxeDatePicker 日期选择
            { i18nKey: 'app.aside.menu.formVxeDatePicker', routerLink: { name: 'ComponentFormBasicsItemRenderVxeDatePicker' } },
            // VxeDateRangePicker 日期范围选择
            { i18nKey: 'app.aside.menu.formVxeDateRangePicker', routerLink: { name: 'ComponentFormBasicsItemRenderVxeDateRangePicker' } },
            // VxeCascader 级联选择
            { i18nKey: 'app.aside.menu.formVxeCascader', routerLink: { name: 'ComponentFormBasicsItemRenderVxeCascader' } },
            // VxeTreeSelect 下拉树选择
            { i18nKey: 'app.aside.menu.formVxeTreeSelect', routerLink: { name: 'ComponentFormBasicsItemRenderVxeTreeSelect' } },
            // VxeTableSelect 下拉表格选择
            { i18nKey: 'app.aside.menu.formVxeTableSelect', routerLink: { name: 'ComponentFormBasicsItemRenderVxeTableSelect' } },
            // VxeSwitch 开关
            { i18nKey: 'app.aside.menu.formVxeSwitch', routerLink: { name: 'ComponentFormBasicsItemRenderVxeSwitch' } },
            // VxeRadioGroup 单选组
            { i18nKey: 'app.aside.menu.formVxeRadioGroup', routerLink: { name: 'ComponentFormBasicsItemRenderVxeRadioGroup' } },
            // VxeCheckboxGroup 复选组
            { i18nKey: 'app.aside.menu.formVxeCheckboxGroup', routerLink: { name: 'ComponentFormBasicsItemRenderVxeCheckboxGroup' } },
            // VxeRate 评分
            { i18nKey: 'app.aside.menu.formVxeRate', routerLink: { name: 'ComponentFormBasicsItemRenderVxeRate' } },
            // VxeSlider 滑块
            { i18nKey: 'app.aside.menu.formVxeSlider', routerLink: { name: 'ComponentFormBasicsItemRenderVxeSlider' } },
            // VxeUpload 上传
            { i18nKey: 'app.aside.menu.formVxeUpload', routerLink: { name: 'ComponentFormBasicsItemRenderVxeUpload' } },
            // { title: 'WangEditor 第三方扩展-富文本', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-wangeditor/form/itemTemplate/wang-editor`, linkTarget: '_blank' },
            // 集成第三方扩展插件
            { i18nKey: 'app.aside.menu.formIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/form/itemTemplate/el-input`, linkTarget: '_blank' },
            // 只读模式
            { i18nKey: 'app.aside.menu.formReadonlyMode', routerLink: { name: 'ComponentFormBasicsItemRenderReadonly' } },
            // 禁用模式
            { i18nKey: 'app.aside.menu.formDisabledMode', routerLink: { name: 'ComponentFormBasicsItemRenderDisabled' } },
            // 实现联动禁用
            { i18nKey: 'app.aside.menu.formLinkageDisabled', routerLink: { name: 'ComponentFormBasicsItemRenderLinkageDisabled' } }
          ]
        },
        {
          // 渲染 - 插槽式
          i18nKey: 'app.aside.menu.formRenderSlot',
          children: [
            // VxeButton 按钮
            { i18nKey: 'app.aside.menu.formVxeButton', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeButton' } },
            // VxeInput 单行输入框
            { i18nKey: 'app.aside.menu.formVxeInput', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeInput' } },
            // VxeNumberInput 数值输入框
            { i18nKey: 'app.aside.menu.formVxeNumberInput', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeNumberInput' } },
            // VxeTextarea 文本域
            { i18nKey: 'app.aside.menu.formVxeTextarea', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeTextarea' } },
            // VxeSelect 下拉框
            { i18nKey: 'app.aside.menu.formVxeSelect', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeSelect' } },
            // VxeDatePicker 日期选择
            { i18nKey: 'app.aside.menu.formVxeDatePicker', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeDatePicker' } },
            // VxeDateRangePicker 日期范围选择
            { i18nKey: 'app.aside.menu.formVxeDateRangePicker', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeDateRangePicker' } },
            // VxeCascader 级联选择
            { i18nKey: 'app.aside.menu.formVxeCascader', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeCascader' } },
            // VxeTreeSelect 下拉树选择
            { i18nKey: 'app.aside.menu.formVxeTreeSelect', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeTreeSelect' } },
            // VxeSwitch 开关
            { i18nKey: 'app.aside.menu.formVxeSwitch', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeSwitch' } },
            // VxeRadioGroup 单选组
            { i18nKey: 'app.aside.menu.formVxeRadioGroup', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeRadioGroup' } },
            // VxeCheckboxGroup 复选组
            { i18nKey: 'app.aside.menu.formVxeCheckboxGroup', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeCheckboxGroup' } },
            // VxeRate 评分
            { i18nKey: 'app.aside.menu.formVxeRate', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeRate' } },
            // VxeSlider 滑块
            { i18nKey: 'app.aside.menu.formVxeSlider', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeSlider' } },
            // VxeUpload 上传
            { i18nKey: 'app.aside.menu.formVxeUpload', routerLink: { name: 'ComponentFormBasicsItemTemplateVxeUpload' } },
            // 只读模式
            { i18nKey: 'app.aside.menu.formReadonlyMode', routerLink: { name: 'ComponentFormBasicsItemTemplateReadonly' } },
            // { title: 'WangEditor 第三方扩展-富文本', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-wangeditor/form/itemTemplate/wang-editor`, linkTarget: '_blank' },
            // 集成第三方扩展插件
            { i18nKey: 'app.aside.menu.formIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/form/itemTemplate/el-input`, linkTarget: '_blank' }
          ]
        },
        {
          // 自定义插槽模板
          i18nKey: 'app.aside.menu.formCustomSlotTemplate',
          children: [
            // 自定义标题模板
            { i18nKey: 'app.aside.menu.formCustomTitleTemplate', routerLink: { name: 'ComponentFormBasicsTemplateTitle' } },
            // 自定义标题前缀模板
            { i18nKey: 'app.aside.menu.formCustomTitlePrefixTemplate', routerLink: { name: 'ComponentFormBasicsTemplatePrefix' } },
            // 自定义标题后缀模板
            { i18nKey: 'app.aside.menu.formCustomTitleSuffixTemplate', routerLink: { name: 'ComponentFormBasicsTemplateSuffix' } },
            // 自定义内容模板
            { i18nKey: 'app.aside.menu.formCustomContentTemplate', routerLink: { name: 'ComponentFormBasicsTemplateContent' } }
          ]
        },
        // 在页签中使用
        { i18nKey: 'app.aside.menu.formUseInTabs', routerLink: { name: 'ComponentFormBasicsTabs' } },
        // 实现简历模板
        { i18nKey: 'app.aside.menu.formResumeTemplate', routerLink: { name: 'ComponentFormBasicsResumeTemplate' } }
      ]
    },
    {
      // 配置式表单
      i18nKey: 'app.aside.menu.formConfigTitle',
      children: [
        // 基础功能
        { i18nKey: 'app.aside.menu.formBasicFeatures', routerLink: { name: 'ComponentFormConfigBase' } },
        // 数据类型
        { i18nKey: 'app.aside.menu.formDataType', routerLink: { name: 'ComponentFormConfigField' } },
        // 横向排列
        { i18nKey: 'app.aside.menu.formHorizontal', routerLink: { name: 'ComponentFormConfigHorizontal' } },
        // 上下布局
        { i18nKey: 'app.aside.menu.formVertical', routerLink: { name: 'ComponentFormConfigVertical' } },
        // 边距
        { i18nKey: 'app.aside.menu.formPadding', routerLink: { name: 'ComponentFormConfigPadding' } },
        // 标题冒号
        { i18nKey: 'app.aside.menu.formColon', routerLink: { name: 'ComponentFormConfigColon' } },
        // 标题加粗
        { i18nKey: 'app.aside.menu.formBold', routerLink: { name: 'ComponentFormConfigBold' } },
        // 标题宽度
        { i18nKey: 'app.aside.menu.formTitleWidth', routerLink: { name: 'ComponentFormConfigWidth' } },
        // 标题对齐方式
        { i18nKey: 'app.aside.menu.formTitleAlign', routerLink: { name: 'ComponentFormConfigTitleAlign' } },
        // 内容对齐方式
        { i18nKey: 'app.aside.menu.formContentAlign', routerLink: { name: 'ComponentFormConfigAlign' } },
        // 溢出隐藏
        { i18nKey: 'app.aside.menu.formOverflowHidden', routerLink: { name: 'ComponentFormConfigOverflow' } },
        // 标题前缀图标
        { i18nKey: 'app.aside.menu.formTitlePrefixIcon', routerLink: { name: 'ComponentFormConfigTitlePrefix' } },
        // 标题后缀图标
        { i18nKey: 'app.aside.menu.formTitleSuffixIcon', routerLink: { name: 'ComponentFormConfigTitleSuffix' } },
        // 边框
        { i18nKey: 'app.aside.menu.formBorder', routerLink: { name: 'ComponentFormConfigBorder' } },
        // 标题背景
        { i18nKey: 'app.aside.menu.formTitleBackground', routerLink: { name: 'ComponentFormConfigTitleBackground' } },
        // 格式化内容
        { i18nKey: 'app.aside.menu.formFormatContent', routerLink: { name: 'ComponentFormConfigFormat' } },
        // 分行/分列
        { i18nKey: 'app.aside.menu.formSplitRowColumn', routerLink: { name: 'ComponentFormConfigChildren' } },
        // 分组
        { i18nKey: 'app.aside.menu.formGroup', routerLink: { name: 'ComponentFormConfigGroup' } },
        // 显示与隐藏项
        { i18nKey: 'app.aside.menu.formShowHideItem', routerLink: { name: 'ComponentFormConfigVisible' } },
        // 重置表单值
        { i18nKey: 'app.aside.menu.formResetFormValue', routerLink: { name: 'ComponentFormConfigReset' } },
        {
          // 折叠表单
          i18nKey: 'app.aside.menu.formCollapseForm',
          children: [
            // 展开与收起
            { i18nKey: 'app.aside.menu.formExpandCollapse', routerLink: { name: 'ComponentFormConfigCollapseBase' } },
            // 自定义按钮文字
            { i18nKey: 'app.aside.menu.formCustomButtonText', routerLink: { name: 'ComponentFormConfigCollapseButtonText' } },
            // 自定义按钮图标
            { i18nKey: 'app.aside.menu.formCustomButtonIcon', routerLink: { name: 'ComponentFormConfigCollapseButtonIcon' } }
          ]
        },
        {
          // 数据校验
          i18nKey: 'app.aside.menu.formDataValidation',
          children: [
            // 校验规则配置
            { i18nKey: 'app.aside.menu.formValidationRulesConfig', routerLink: { name: 'ComponentFormConfigValidateRules' } },
            // 字符串校验规则
            { i18nKey: 'app.aside.menu.formStringValidationRule', routerLink: { name: 'ComponentFormConfigValidateString' } },
            // 数值校验规则
            { i18nKey: 'app.aside.menu.formNumberValidationRule', routerLink: { name: 'ComponentFormConfigValidateNumber' } },
            // 正则校验规则
            { i18nKey: 'app.aside.menu.formRegexpValidationRule', routerLink: { name: 'ComponentFormConfigValidateRegexp' } },
            // 数组校验规则
            { i18nKey: 'app.aside.menu.formArrayValidationRule', routerLink: { name: 'ComponentFormConfigValidateArray' } },
            // 多关联字段校验规则
            { i18nKey: 'app.aside.menu.formMultiFieldValidationRule', routerLink: { name: 'ComponentFormConfigValidateField' } },
            // 自定义校验规则
            { i18nKey: 'app.aside.menu.formCustomValidationRule', routerLink: { name: 'ComponentFormConfigValidateCustom' } },
            // 显示提示消息
            { i18nKey: 'app.aside.menu.formShowTipMessage', routerLink: { name: 'ComponentFormConfigValidateShowMessage' } },
            // 显示提示图标
            { i18nKey: 'app.aside.menu.formShowTipIcon', routerLink: { name: 'ComponentFormConfigValidateShowErrorIcon' } },
            // 错误提示样式
            { i18nKey: 'app.aside.menu.formErrorTipStyle', routerLink: { name: 'ComponentFormConfigValidateTheme' } },
            // 值改变时自动提交
            { i18nKey: 'app.aside.menu.formAutoSubmitOnChange', routerLink: { name: 'ComponentFormConfigValidateChangeToSubmit' } },
            // 手动调用
            { i18nKey: 'app.aside.menu.formManualCall', routerLink: { name: 'ComponentFormConfigValidateManual' } }
          ]
        },
        {
          // 渲染 - 配置式
          i18nKey: 'app.aside.menu.formRenderConfig',
          children: [
            // input 原生-输入框
            { i18nKey: 'app.aside.menu.formNativeInput', routerLink: { name: 'ComponentFormConfigItemRenderInput' } },
            // textarea 原生-文本域
            { i18nKey: 'app.aside.menu.formNativeTextarea', routerLink: { name: 'ComponentFormConfigItemRenderTextarea' } },
            // select 原生-下拉框
            { i18nKey: 'app.aside.menu.formNativeSelect', routerLink: { name: 'ComponentFormConfigItemRenderSelect' } },
            // VxeInput 单行输入框
            { i18nKey: 'app.aside.menu.formVxeInput', routerLink: { name: 'ComponentFormConfigItemRenderVxeInput' } },
            // VxeButtonGroup 按钮组
            { i18nKey: 'app.aside.menu.formVxeButtonGroup', routerLink: { name: 'ComponentFormConfigItemRenderVxeButtonGroup' } },
            // VxeTextarea 文本域
            { i18nKey: 'app.aside.menu.formVxeTextarea', routerLink: { name: 'ComponentFormConfigItemRenderVxeTextarea' } },
            // VxeNumberInput 数值输入
            { i18nKey: 'app.aside.menu.formVxeNumberInputValue', routerLink: { name: 'ComponentFormConfigItemRenderVxeNumberInput' } },
            // VxeSelect 下拉框
            { i18nKey: 'app.aside.menu.formVxeSelect', routerLink: { name: 'ComponentFormConfigItemRenderVxeSelect' } },
            // VxeDatePicker 日期选择
            { i18nKey: 'app.aside.menu.formVxeDatePicker', routerLink: { name: 'ComponentFormConfigItemRenderVxeDatePicker' } },
            // VxeDateRangePicker 日期范围选择
            { i18nKey: 'app.aside.menu.formVxeDateRangePicker', routerLink: { name: 'ComponentFormConfigItemRenderVxeDateRangePicker' } },
            // VxeCascader 级联选择
            { i18nKey: 'app.aside.menu.formVxeCascader', routerLink: { name: 'ComponentFormConfigItemRenderVxeCascader' } },
            // VxeTreeSelect 下拉树选择
            { i18nKey: 'app.aside.menu.formVxeTreeSelect', routerLink: { name: 'ComponentFormConfigItemRenderVxeTreeSelect' } },
            // VxeTableSelect 下拉表格选择
            { i18nKey: 'app.aside.menu.formVxeTableSelect', routerLink: { name: 'ComponentFormConfigItemRenderVxeTableSelect' } },
            // VxeSwitch 开关
            { i18nKey: 'app.aside.menu.formVxeSwitch', routerLink: { name: 'ComponentFormConfigItemRenderVxeSwitch' } },
            // VxeRadioGroup 单选组件
            { i18nKey: 'app.aside.menu.formVxeRadioGroupComponent', routerLink: { name: 'ComponentFormConfigItemRenderVxeRadioGroup' } },
            // VxeCheckboxGroup 复选组
            { i18nKey: 'app.aside.menu.formVxeCheckboxGroup', routerLink: { name: 'ComponentFormConfigItemRenderVxeCheckboxGroup' } },
            // VxeRate 评分
            { i18nKey: 'app.aside.menu.formVxeRate', routerLink: { name: 'ComponentFormConfigItemRenderVxeRate' } },
            // VxeRate 滑块
            { i18nKey: 'app.aside.menu.formVxeRateSlider', routerLink: { name: 'ComponentFormConfigItemRenderVxeSlider' } },
            // VxeImage 图片
            { i18nKey: 'app.aside.menu.formVxeImage', routerLink: { name: 'ComponentFormConfigItemRenderVxeImage' } },
            // VxeImageGroup 图片组
            { i18nKey: 'app.aside.menu.formVxeImageGroup', routerLink: { name: 'ComponentFormConfigItemRenderVxeImageGroup' } },
            // VxeUpload 上传
            { i18nKey: 'app.aside.menu.formVxeUpload', routerLink: { name: 'ComponentFormConfigItemRenderVxeUpload' } },
            // { title: 'WangEditor 第三方扩展-富文本', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-wangeditor/form/itemRender/wang-editor`, linkTarget: '_blank' },
            // 集成第三方扩展插件
            { i18nKey: 'app.aside.menu.formIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/form/itemRender/el-input`, linkTarget: '_blank' },
            // 只读模式
            { i18nKey: 'app.aside.menu.formReadonlyMode', routerLink: { name: 'ComponentFormConfigItemRenderReadonly' } },
            // 禁用模式
            { i18nKey: 'app.aside.menu.formDisabledMode', routerLink: { name: 'ComponentFormConfigItemRenderDisabled' } },
            // 实现联动禁用
            { i18nKey: 'app.aside.menu.formLinkageDisabled', routerLink: { name: 'ComponentFormConfigItemRenderLinkageDisabled' } }
          ]
        },
        {
          // 渲染 - 插槽式
          i18nKey: 'app.aside.menu.formRenderSlot',
          children: [
            // VxeButton 按钮
            { i18nKey: 'app.aside.menu.formVxeButton', routerLink: { name: 'ComponentFormConfigItemTemplateVxeButton' } },
            // VxeInput 单行输入框
            { i18nKey: 'app.aside.menu.formVxeInput', routerLink: { name: 'ComponentFormConfigItemTemplateVxeInput' } },
            // VxeTextarea 文本域
            { i18nKey: 'app.aside.menu.formVxeTextarea', routerLink: { name: 'ComponentFormConfigItemTemplateVxeTextarea' } },
            // VxeNumberInput 数值输入
            { i18nKey: 'app.aside.menu.formVxeNumberInputValue', routerLink: { name: 'ComponentFormConfigItemTemplateVxeNumberInput' } },
            // VxeSelect 下拉框
            { i18nKey: 'app.aside.menu.formVxeSelect', routerLink: { name: 'ComponentFormConfigItemTemplateVxeSelect' } },
            // VxeDatePicker 日期选择
            { i18nKey: 'app.aside.menu.formVxeDatePicker', routerLink: { name: 'ComponentFormConfigItemTemplateVxeDatePicker' } },
            // VxeDateRangePicker 日期范围选择
            { i18nKey: 'app.aside.menu.formVxeDateRangePicker', routerLink: { name: 'ComponentFormConfigItemTemplateVxeDateRangePicker' } },
            // VxeCascader 级联选择
            { i18nKey: 'app.aside.menu.formVxeCascader', routerLink: { name: 'ComponentFormConfigItemTemplateVxeCascader' } },
            // VxeTreeSelect 下拉树选择
            { i18nKey: 'app.aside.menu.formVxeTreeSelect', routerLink: { name: 'ComponentFormConfigItemTemplateVxeTreeSelect' } },
            // VxeSwitch 开关
            { i18nKey: 'app.aside.menu.formVxeSwitch', routerLink: { name: 'ComponentFormConfigItemTemplateVxeSwitch' } },
            // VxeRadioGroup 单选组
            { i18nKey: 'app.aside.menu.formVxeRadioGroup', routerLink: { name: 'ComponentFormConfigItemTemplateVxeRadioGroup' } },
            // VxeCheckboxGroup 复选组
            { i18nKey: 'app.aside.menu.formVxeCheckboxGroup', routerLink: { name: 'ComponentFormConfigItemTemplateVxeCheckboxGroup' } },
            // VxeRate 评分
            { i18nKey: 'app.aside.menu.formVxeRate', routerLink: { name: 'ComponentFormConfigItemTemplateVxeRate' } },
            // VxeRate 滑块
            { i18nKey: 'app.aside.menu.formVxeRateSlider', routerLink: { name: 'ComponentFormConfigItemTemplateVxeSlider' } },
            // VxeImage 图片
            { i18nKey: 'app.aside.menu.formVxeImage', routerLink: { name: 'ComponentFormConfigItemTemplateVxeImage' } },
            // VxeImageGroup 图片组
            { i18nKey: 'app.aside.menu.formVxeImageGroup', routerLink: { name: 'ComponentFormConfigItemTemplateVxeImageGroup' } },
            // VxeUpload 上传
            { i18nKey: 'app.aside.menu.formVxeUpload', routerLink: { name: 'ComponentFormConfigItemTemplateVxeUpload' } },
            // 只读模式
            { i18nKey: 'app.aside.menu.formReadonlyMode', routerLink: { name: 'ComponentFormConfigItemTemplateReadonly' } },
            // { title: 'WangEditor 第三方扩展-富文本', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-wangeditor/form/itemRender/wang-editor`, linkTarget: '_blank' },
            // 集成第三方扩展插件
            { i18nKey: 'app.aside.menu.formIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/form/itemRender/el-input`, linkTarget: '_blank' }
          ]
        },
        {
          // 自定义插槽模板
          i18nKey: 'app.aside.menu.formCustomSlotTemplate',
          children: [
            // 自定义标题模板
            { i18nKey: 'app.aside.menu.formCustomTitleTemplate', routerLink: { name: 'ComponentFormConfigTemplateTitle' } },
            // 自定义标题前缀模板
            { i18nKey: 'app.aside.menu.formCustomTitlePrefixTemplate', routerLink: { name: 'ComponentFormConfigTemplatePrefix' } },
            // 自定义标题后缀模板
            { i18nKey: 'app.aside.menu.formCustomTitleSuffixTemplate', routerLink: { name: 'ComponentFormConfigTemplateSuffix' } },
            // 自定义内容模板
            { i18nKey: 'app.aside.menu.formCustomContentTemplate', routerLink: { name: 'ComponentFormConfigTemplateContent' } }
          ]
        },
        // 在页签中使用
        { i18nKey: 'app.aside.menu.formUseInTabs', routerLink: { name: 'ComponentFormConfigTabs' } },
        // 实现简历模板
        { i18nKey: 'app.aside.menu.formResumeTemplate', routerLink: { name: 'ComponentFormConfigResumeTemplate' } }
      ]
    },
    {
      // Css 变量
      i18nKey: 'app.aside.menu.cssVar',
      children: [
        // 校验提示框
        { i18nKey: 'app.aside.menu.formValidationTipBox', routerLink: { name: 'CssVarFormValid' } }
      ]
    },
    {
      // 校验（全局复用）
      i18nKey: 'app.aside.menu.formGlobalValidators',
      children: [
        { title: 'API', routerLink: { name: 'GlobalValidatorsFormAPI' } },
        // 表单项校验
        { i18nKey: 'app.aside.menu.formFormItemValidation', routerLink: { name: 'GlobalValidatorsFormBase' } },
        // 便捷校验配置插件
        { i18nKey: 'app.aside.menu.formConvenientValidationConfigPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-validator/form/base`, linkTarget: '_blank' }
      ]
    },
    {
      // 表单项 - 格式化（全局复用）
      i18nKey: 'app.aside.menu.formGlobalFormats',
      children: [
        { title: 'API', routerLink: { name: 'GlobalFormatsFormAPI' } },
        // 表单项
        { i18nKey: 'app.aside.menu.formFormItem', routerLink: { name: 'GlobalFormatsFormBase' } }
      ]
    },
    {
      // 渲染器（高阶复用）
      i18nKey: 'app.aside.menu.formGlobalRenderer',
      children: [
        { title: 'API', routerLink: { name: 'GlobalRendererFormAPI' } },
        {
          // 表单项
          i18nKey: 'app.aside.menu.formFormItem',
          children: [
            // 实现一个金额输入
            { i18nKey: 'app.aside.menu.formAmountInputExample', routerLink: { name: 'GlobalRendererFormItemMyItemAmount' } },
            // 实现一个附件上传
            { i18nKey: 'app.aside.menu.formAttachmentUploadExample', routerLink: { name: 'GlobalRendererFormItemMyItemUpload' } },
            // 集成第三方扩展插件
            { i18nKey: 'app.aside.menu.formIntegrateThirdPartyPlugin', isPlugin: true, linkUrl: `${otherUrl}#/plugin-render-element/form/itemRender/el-input`, linkTarget: '_blank' }
          ]
        }
      ]
    }
  ]
}
