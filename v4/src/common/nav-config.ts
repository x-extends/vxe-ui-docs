export interface NavVO {
  title?: string
  name?: string
  i18nKey?: string
  isAllAPI?: boolean
  isSelfAPI?: boolean
  isExpand?: boolean
  isNew?: boolean
  isUnpublished?: boolean
  routerLink?: {
    name: string
    params?: Record<string, string | number>
    query?: Record<string, string | number>
  }
  linkUrl?: string
  keywords?: string[]
  children?: NavVO[]
}

export const navConfigList: NavVO[] = [
  {
    i18nKey: 'app.aside.menu.guide',
    isExpand: true,
    children: [
      { i18nKey: 'app.aside.menu.globalInstall', routerLink: { name: 'StartInstall' } },
      { i18nKey: 'app.aside.menu.lazyUseGlobal', routerLink: { name: 'StartUseGlobal' } },
      { i18nKey: 'app.aside.menu.lazyUseImport', routerLink: { name: 'StartUseImport' } },
      { i18nKey: 'app.aside.menu.globalConfig', routerLink: { name: 'StartConfig' } },
      { i18nKey: 'app.aside.menu.globalTheme', routerLink: { name: 'StartTheme' } },
      { i18nKey: 'app.aside.menu.globalIcon', routerLink: { name: 'StartIcons' } },
      { i18nKey: 'app.aside.menu.GlobalZIndex', routerLink: { name: 'StartUseZIndex' } },
      { i18nKey: 'app.aside.menu.i18n', routerLink: { name: 'StartI18n' } }
    ]
  },
  {
    i18nKey: 'app.aside.menu.tools',
    children: [
      // { title: '函数库' },
      { i18nKey: 'app.aside.menu.clipboard', routerLink: { name: 'ToolClipboard' } }
    ]
  },
  {
    i18nKey: 'app.aside.menu.baseTitle',
    children: [
      {
        title: 'Icon 图标',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'icon' } } },
          { title: '图标列表', routerLink: { name: 'ComponentIconBase' } },
          { title: '效果', routerLink: { name: 'ComponentIconAnimation' } },
          { title: '状态颜色', routerLink: { name: 'ComponentIconStatus' } }
        ]
      },
      {
        title: 'Text 文本',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'text' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentTextSize' } },
          { title: '状态颜色', routerLink: { name: 'ComponentTextStatus' } }
        ]
      },
      {
        title: 'Link 链接',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'link' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentLinkSize' } },
          { title: '状态颜色', routerLink: { name: 'ComponentLinkStatus' } },
          { title: '路由模式', routerLink: { name: 'ComponentLinkRouter' } }
        ]
      },
      {
        title: 'Tag 标签',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tag' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentTagSize' } },
          { title: '状态', routerLink: { name: 'ComponentTagStatus' } },
          { title: '图标', routerLink: { name: 'ComponentTagIcon' } }
        ]
      },
      {
        title: 'Button 按钮',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'button' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentButtonSize' } },
          { title: '状态', routerLink: { name: 'ComponentButtonStatus' } },
          { title: '圆角', routerLink: { name: 'ComponentButtonRound' } },
          { title: '图标', routerLink: { name: 'ComponentButtonIcon' } },
          { title: '圆形', routerLink: { name: 'ComponentButtonCircle' } },
          { title: '加载中', routerLink: { name: 'ComponentButtonLoading' } },
          { title: '按钮组', routerLink: { name: 'ComponentButtonGroup' } },
          { title: '下拉按钮', routerLink: { name: 'ComponentButtonDropdown' } }
        ]
      }
    ]
  },
  {
    i18nKey: 'app.aside.menu.layoutTitle',
    children: [
      {
        title: 'Layout 页面布局',
        children: [
          { title: '页面布局', routerLink: { name: 'ComponentLayout' } }
        ]
      },
      {
        title: 'Row 行与列',
        children: [
          { title: '行列排版', routerLink: { name: 'ComponentRow' } }
        ]
      },
      // { title: 'Progress 进度条' },
      {
        title: 'Card 卡片',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'card' } } },
          { title: '基础', routerLink: { name: 'ComponentCardBase' } },
          { title: '宽度', routerLink: { name: 'ComponentCardWidth' } },
          { title: '高度', routerLink: { name: 'ComponentCardHeight' } },
          { title: '显示/隐藏边框', routerLink: { name: 'ComponentCardBorder' } },
          { title: '显示/隐藏边距', routerLink: { name: 'ComponentCardPadding' } },
          { title: '边框阴影', routerLink: { name: 'ComponentCardShadow' } },
          { title: '自定义模板', routerLink: { name: 'ComponentCardTemplate' } }
        ]
      },
      {
        title: 'Image 图片',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'image' } } },
          { title: '设置宽高', routerLink: { name: 'ComponentImageBase' } },
          { title: '懒加载', routerLink: { name: 'ComponentImageLazy' } }
        ]
      },
      {
        title: 'ImagePreview 图片预览',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'image-preview' } } },
          { title: '打开预览', routerLink: { name: 'ComponentImagePreview' } }
        ]
      },
      {
        title: 'Tabs 页签',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tabs' } } },
          { title: '基础', routerLink: { name: 'ComponentTabsBase' } },
          { title: '卡片风格', routerLink: { name: 'ComponentTabsCard' } },
          { title: '边框背景的卡片', routerLink: { name: 'ComponentTabsBorderCard' } },
          { title: '设置高度', routerLink: { name: 'ComponentTabsHeight' } },
          { title: '圆角边框背景的卡片', routerLink: { name: 'ComponentTabsRoundCard' } }
        ]
      },
      {
        title: 'Pulldown 下拉容器',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'pulldown' } } },
          { title: '基础', routerLink: { name: 'ComponentPulldownBase' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentPulldownTemplate' } },
          { title: '可搜索的下拉框', routerLink: { name: 'ComponentPulldownSelect' } },
          { title: '实现下拉表格', routerLink: { name: 'ComponentPulldownTable' } }
        ]
      },
      // { title: 'Carousel 走马灯' },
      // { title: 'Calendar 日历' },
      // { title: 'Collapse 折叠面板' },
      {
        title: 'List 虚拟列表',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'list' } } },
          { title: '实现大量数据列表', routerLink: { name: 'ComponentListBase' } },
          { title: '实现大量数据表格', routerLink: { name: 'ComponentListTable' } }
        ]
      }
    ]
  },
  {
    i18nKey: 'app.aside.menu.navigationTitle',
    children: [
      {
        title: 'Breadcrumb 面包屑',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'breadcrumb' } } },
          { title: '基础', routerLink: { name: 'ComponentBreadcrumb' } }
        ]
      },
      {
        title: 'Menu 菜单',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'menu' } } },
          { title: '基础', routerLink: { name: 'ComponentMenu' } }
        ]
      },
      {
        title: 'Anchor 锚点',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'anchor' } } },
          { title: '自定义容器', routerLink: { name: 'ComponentAnchor' } }
        ]
      },
      {
        title: 'Pager 分页',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'pager' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentPagerSize' } },
          { title: '对齐方式', routerLink: { name: 'ComponentPagerAlign' } },
          { title: '自定义页大小列表', routerLink: { name: 'ComponentPagerPageSize' } },
          { title: '自定义布局', routerLink: { name: 'ComponentPagerLayout' } },
          { title: '自定义模板', routerLink: { name: 'ComponentPagerTemplate' } }
        ]
      }
    ]
  },
  {
    i18nKey: 'app.aside.menu.formTitle',
    children: [
      { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'form' } } },
      {
        title: '基础表单',
        children: [
          { title: '基础功能', routerLink: { name: 'ComponentFormBasicsBase' } },
          { title: '尺寸大小', routerLink: { name: 'ComponentFormBasicsSize' } },
          { title: '上下布局', routerLink: { name: 'ComponentFormBasicsVertical' } },
          { title: '标题冒号', routerLink: { name: 'ComponentFormBasicsColon' } },
          { title: '标题加粗', routerLink: { name: 'ComponentFormBasicsBold' } },
          { title: '标题宽度', routerLink: { name: 'ComponentFormBasicsWidth' } },
          { title: '对齐方式', routerLink: { name: 'ComponentFormBasicsAlign' } },
          { title: '溢出隐藏', routerLink: { name: 'ComponentFormBasicsOverflow' } },
          { title: '文字提示', routerLink: { name: 'ComponentFormBasicsTooltip' } },
          { title: '分行/分列', routerLink: { name: 'ComponentFormBasicsGather' } },
          { title: '自定义布局', routerLink: { name: 'ComponentFormBasicsCustomLayout' } },
          { title: '折叠表单', routerLink: { name: 'ComponentFormBasicsCollapse' } },
          { title: '表单校验', routerLink: { name: 'ComponentFormBasicsValid' } }
        ]
      },
      {
        title: '配置式表单',
        children: [
          { title: '基础功能', routerLink: { name: 'ComponentFormConfigBase' } },
          { title: '上下布局', routerLink: { name: 'ComponentFormConfigVertical' } },
          { title: '标题冒号', routerLink: { name: 'ComponentFormConfigColon' } },
          { title: '标题加粗', routerLink: { name: 'ComponentFormConfigBold' } },
          { title: '文字提示', routerLink: { name: 'ComponentFormConfigTooltip' } },
          { title: '分行/分列', routerLink: { name: 'ComponentFormConfigGather' } },
          { title: '折叠表单', routerLink: { name: 'ComponentFormConfigCollapse' } },
          { title: '表单校验', routerLink: { name: 'ComponentFormConfigValid' } }
        ]
      },
      {
        title: '渲染器（高阶复用）',
        children: [
          { title: 'API', routerLink: { name: 'GlobalRendererFormAPI' } },
          {
            title: '表单项',
            children: [
              { title: '实现一个输入框', routerLink: { name: 'GlobalRendererFormItemEditInput' } },
              { title: '实现一个附件上传', routerLink: { name: 'GlobalRendererFormItemEditUpload' } }
            ]
          }
        ]
      }
    ]
  },
  {
    i18nKey: 'app.aside.menu.dataTitle',
    children: [
      {
        title: 'Switch 开关',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'switch' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentSwitchSize' } },
          { title: '禁用状态', routerLink: { name: 'ComponentSwitchDisabled' } },
          { title: '自定义显示值', routerLink: { name: 'ComponentSwitchLabel' } },
          { title: '自定义实际值', routerLink: { name: 'ComponentSwitchValue' } },
          { title: '自定义图标', routerLink: { name: 'ComponentSwitchIcon' } }
        ]
      },
      {
        title: 'Radio 单选框',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'radio' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentRadioSize' } },
          { title: '禁用状态', routerLink: { name: 'ComponentRadioDisabled' } },
          { title: '允许取消', routerLink: { name: 'ComponentRadioStrict' } },
          { title: '单选组', routerLink: { name: 'ComponentRadioGroup' } },
          { title: '单选按钮', routerLink: { name: 'ComponentRadioButton' } }
        ]
      },
      {
        title: 'Checkbox 复选框',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'checkbox' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentCheckboxSize' } },
          { title: '半选状态', routerLink: { name: 'ComponentCheckboxIndeterminate' } },
          { title: '禁用状态', routerLink: { name: 'ComponentCheckboxDisabled' } },
          { title: '自定义值', routerLink: { name: 'ComponentCheckboxValue' } },
          { title: '复选组', routerLink: { name: 'ComponentCheckboxGroup' } },
          { title: '限制最大数量', routerLink: { name: 'ComponentCheckboxMax' } }
        ]
      },
      {
        title: 'Input 输入框',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'input' } } },
          { title: '文本类型', routerLink: { name: 'ComponentInputText' } },
          { title: '搜索类型', routerLink: { name: 'ComponentInputSearch' } },
          { title: '密码类型', routerLink: { name: 'ComponentInputPassword' } },
          { title: '时间类型', routerLink: { name: 'ComponentInputTime' } },
          { title: '日期类型', routerLink: { name: 'ComponentInputDate' } },
          { title: '日期带时间类型', routerLink: { name: 'ComponentInputDatetime' } },
          { title: '周类型', routerLink: { name: 'ComponentInputWeek' } },
          { title: '月度类型', routerLink: { name: 'ComponentInputMonth' } },
          { title: '季度类型', routerLink: { name: 'ComponentInputQuarter' } },
          { title: '年度类型', routerLink: { name: 'ComponentInputYear' } },
          { title: '数值类型', routerLink: { name: 'ComponentInputNumber' } },
          { title: '整数类型', routerLink: { name: 'ComponentInputInteger' } },
          { title: '小数类型', routerLink: { name: 'ComponentInputFloat' } },
          { title: '自定义前缀图标', routerLink: { name: 'ComponentInputPrefix' } },
          { title: '自定义后缀图标', routerLink: { name: 'ComponentInputSuffix' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentInputTemplate' } }
        ]
      },
      // { title: 'TextInput 单行文本输入' },
      {
        title: 'Textarea 多行文本输入',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'textarea' } } },
          { title: '尺寸大小', routerLink: { name: 'ComponentTextareaSize' } },
          { title: '禁用状态', routerLink: { name: 'ComponentTextareaDisabled' } },
          { title: '只读状态', routerLink: { name: 'ComponentTextareaReadonly' } },
          { title: '字数统计', routerLink: { name: 'ComponentTextareaCount' } },
          { title: '自适应高度', routerLink: { name: 'ComponentTextareaAutosize' } },
          { title: '可调节高度', routerLink: { name: 'ComponentTextareaResize' } }
        ]
      },
      {
        title: 'NumberInput 数值输入',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'number-input' } } },
          { title: '数值输入', routerLink: { name: 'ComponentNumberInput' } }
        ]
      },
      {
        title: 'PasswordInput 密码输入',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'password-input' } } },
          { title: '密码输入', routerLink: { name: 'ComponentPasswordInput' } }
        ]
      },
      // { title: 'DatePicker 日期选择器' },
      // { title: 'WeekPicker 周选择器' },
      // { title: 'MonthPicker 月选择器' },
      // { title: 'QuarterPicker 季度选择' },
      // { title: 'YearPicker 年选择器' },
      // { title: 'TimePicker 时间选择器' },
      // { title: 'DateTimePicker日期带时间选择器' },
      {
        title: 'Select 下拉框',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'select' } } },
          {
            title: '基础',
            children: [
              { title: '基础', routerLink: { name: 'ComponentSelectBaseSize' } },
              { title: '可清除', routerLink: { name: 'ComponentSelectBaseClearable' } },
              { title: '禁用', routerLink: { name: 'ComponentSelectBaseDisabled' } },
              { title: '可筛选', routerLink: { name: 'ComponentSelectBaseFilterable' } },
              { title: '分组', routerLink: { name: 'ComponentSelectBaseGroup' } },
              { title: '多选', routerLink: { name: 'ComponentSelectBaseMultiple' } },
              { title: '自定义插槽模板', routerLink: { name: 'ComponentSelectBaseTemplate' } }
            ]
          },
          {
            title: '配置式',
            children: [
              { title: '使用', routerLink: { name: 'ComponentSelectBaseBasics' } },
              { title: '自定义插槽模板', routerLink: { name: 'ComponentSelectBaseTemplate' } }
            ]
          }
        ]
      },
      {
        title: 'Tree 树形组件',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tree' } } },
          { title: '基础树', routerLink: { name: 'ComponentTreeBase' } },
          { title: '高亮行', routerLink: { name: 'ComponentTreeCurrent' } },
          { title: '单选框', routerLink: { name: 'ComponentTreeRadio' } },
          { title: '复选框', routerLink: { name: 'ComponentTreeCheckbox' } }
        ]
      },
      // { title: 'TreeSelect 树形下拉框' },
      {
        title: 'Upload 上传',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'upload' } } },
          {
            title: '文件上传',
            children: [
              { title: '基础', routerLink: { name: 'ComponentUploadFileBase' } },
              { title: '只读状态', routerLink: { name: 'ComponentUploadFileReadonly' } },
              { title: '禁用状态', routerLink: { name: 'ComponentUploadFileDisabled' } },
              { title: '上传多个', routerLink: { name: 'ComponentUploadFileMultiple' } },
              { title: '提示', routerLink: { name: 'ComponentUploadFileTip' } },
              { title: '上传进度', routerLink: { name: 'ComponentUploadFileProgress' } },
              { title: '指定文件类型', routerLink: { name: 'ComponentUploadFileTypes' } },
              { title: '限制上传数量', routerLink: { name: 'ComponentUploadFileLimitCount' } },
              { title: '限制附件大小', routerLink: { name: 'ComponentUploadFileLimitSize' } },
              { title: '自动隐藏按钮', routerLink: { name: 'ComponentUploadFileAutoHidden' } },
              { title: '失败重新上传', routerLink: { name: 'ComponentUploadFileShowError' } }
            ]
          },
          {
            title: '图片上传',
            children: [
              { title: '基础', routerLink: { name: 'ComponentUploadImageBase' } },
              { title: '只读状态', routerLink: { name: 'ComponentUploadImageReadonly' } },
              { title: '禁用状态', routerLink: { name: 'ComponentUploadImageDisabled' } },
              { title: '上传多个', routerLink: { name: 'ComponentUploadImageMultiple' } },
              { title: '提示', routerLink: { name: 'ComponentUploadImageTip' } },
              { title: '上传进度', routerLink: { name: 'ComponentUploadImageProgress' } },
              { title: '指定文件类型', routerLink: { name: 'ComponentUploadImageTypes' } },
              { title: '限制上传数量', routerLink: { name: 'ComponentUploadImageLimitCount' } },
              { title: '限制附件大小', routerLink: { name: 'ComponentUploadImageLimitSize' } },
              { title: '自动隐藏按钮', routerLink: { name: 'ComponentUploadImageAutoHidden' } },
              { title: '失败重新上传', routerLink: { name: 'ComponentUploadImageShowError' } }
            ]
          }
        ]
      }
      // { title: 'Transfer 穿梭框' }
    ]
  },
  {
    i18nKey: 'app.aside.menu.tableTitle',
    children: [
      { title: '点击查看完整文档', linkUrl: 'https://vxetable.cn/' },
      {
        i18nKey: 'app.aside.menu.table.name',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'table' } } },
          {
            title: '基础功能',
            children: [
              { title: '基础', routerLink: { name: 'ComponentTableBaseBasic' } },
              { title: '尺寸大小', routerLink: { name: 'ComponentTableBaseSize' } },
              { title: '数据类型', routerLink: { name: 'ComponentTableBaseData' } },
              { title: '空数据提示', routerLink: { name: 'ComponentTableBaseEmpty' } },
              { title: '边框', routerLink: { name: 'ComponentTableBaseBorder' } },
              { title: '圆角', routerLink: { name: 'ComponentTableBaseRound' } },
              { title: '对齐方式', routerLink: { name: 'ComponentTableBaseAlign' } },
              { title: '列宽设置', routerLink: { name: 'ComponentTableBaseWidth' } },
              { title: '自动换行', routerLink: { name: 'ComponentTableBaseAutoBreak' } },
              { title: '溢出隐藏', routerLink: { name: 'ComponentTableBaseOverflow' } },
              { title: '文本提示', routerLink: { name: 'ComponentTableBaseTooltip' } },
              { title: '斑马线样式', routerLink: { name: 'ComponentTableBaseStripe' } },
              { title: '单元格样式', routerLink: { name: 'ComponentTableBaseStyle' } },
              { title: '动态样式', routerLink: { name: 'ComponentTableBaseDynamicStyle' } },
              { title: '隐藏表头', routerLink: { name: 'ComponentTableBaseHeader' } },
              { title: '高亮列', routerLink: { name: 'ComponentTableBaseHeaderHighlight' } },
              { title: '拖拽调整列宽', routerLink: { name: 'ComponentTableBaseHeaderResizable' } },
              { title: '表格最小高度', routerLink: { name: 'ComponentTableBaseHeaderMinHeight' } },
              { title: '表格高度', routerLink: { name: 'ComponentTableBaseHeight' } },
              { title: '表格最大高度', routerLink: { name: 'ComponentTableBaseMaxHeight' } },
              { title: '表格响应式高度', routerLink: { name: 'ComponentTableBaseAutoHeight' } },
              { title: '设置行度', routerLink: { name: 'ComponentTableBaseRowHeight' } },
              { title: '冻结列', routerLink: { name: 'ComponentTableBaseFixed' } },
              { title: '冻结表头和列', routerLink: { name: 'ComponentTableBaseFixedFull' } },
              { title: '分组表头', routerLink: { name: 'ComponentTableBaseGroup' } },
              { title: '高亮行与列', routerLink: { name: 'ComponentTableBaseCurrent' } },
              { title: '排序', routerLink: { name: 'ComponentTableBaseSort' } },
              { title: '筛选', routerLink: { name: 'ComponentTableBaseFilter' } },
              { title: '加载中', routerLink: { name: 'ComponentTableBaseLoading' } },
              { title: '格式化内容', routerLink: { name: 'ComponentTableBaseFormat' } },
              { title: '序号', routerLink: { name: 'ComponentTableBaseSeq' } },
              { title: '单选框', routerLink: { name: 'ComponentTableBaseRadio' } },
              { title: '复选框', routerLink: { name: 'ComponentTableBaseSelection' } },
              { title: 'HTML 类型', routerLink: { name: 'ComponentTableBaseHtml' } },
              { title: '完整案例', routerLink: { name: 'ComponentTableBaseFull' } }
            ]
          },
          {
            title: '单元格合并',
            children: [
              { title: '合并行', routerLink: { name: 'ComponentTableMergeRow' } },
              { title: '合并列', routerLink: { name: 'ComponentTableMergeColumn' } },
              { title: '合并行与列', routerLink: { name: 'ComponentTableMergeAll' } }
            ]
          },
          {
            title: '表尾数据',
            children: [
              { title: '标准结构', routerLink: { name: 'ComponentTableFooterFooterData' } },
              { title: '自定义数据方法', routerLink: { name: 'ComponentTableFooterFooterMethod' } },
              { title: '自定义插槽模板', routerLink: { name: 'ComponentTableFooterTemplate' } }
            ]
          },
          {
            title: '排序',
            children: [
              { title: '多字段排序', routerLink: { name: 'ComponentTableSortMultiple' } },
              { title: '服务端排序', routerLink: { name: 'ComponentTableSortRemote' } }
            ]
          },
          {
            title: '筛选',
            children: [
              { title: '修改筛选选项', routerLink: { name: 'ComponentTableFilterOptions' } },
              { title: '服务端筛选', routerLink: { name: 'ComponentTableFilterRemote' } }
            ]
          },
          {
            title: '展开行',
            children: [
              { title: '基础使用', routerLink: { name: 'ComponentTableExpandBasic' } },
              { title: '展开容器内间距', routerLink: { name: 'ComponentTableExpandPadding' } },
              { title: '展开容器高度', routerLink: { name: 'ComponentTableExpandHeight' } },
              { title: '使用冻结列', routerLink: { name: 'ComponentTableExpandFixed' } }
            ]
          },
          {
            title: '右键菜单',
            children: [
              { title: '表头菜单', routerLink: { name: 'ComponentTableMenuHeader' } },
              { title: '单元格菜单', routerLink: { name: 'ComponentTableMenuBody' } },
              { title: '表尾菜单', routerLink: { name: 'ComponentTableMenuFooter' } },
              { title: '完整右键菜单', routerLink: { name: 'ComponentTableMenuFull' } },
              { title: '菜单权限控制', routerLink: { name: 'ComponentTableMenuPrivilege' } }
            ]
          },
          {
            title: '工具栏',
            children: [
              { title: '工具栏布局', routerLink: { name: 'ComponentTableToolbarBasic' } },
              { title: '自定义列功能', routerLink: { name: 'ComponentTableToolbarCustom' } },
              { title: '打印功能', routerLink: { name: 'ComponentTableToolbarPrint' } }
            ]
          },
          {
            title: '自定义列',
            children: [
              { title: '关联工具栏', routerLink: { name: 'ComponentTableCustomToolbar' } },
              { title: '弹窗模式', routerLink: { name: 'ComponentTableCustomPopup' } },
              { title: '允许调整列显示隐藏', routerLink: { name: 'ComponentTableCustomVisible' } },
              { title: '允许调整列冻结', routerLink: { name: 'ComponentTableCustomFixed' } },
              { title: '允许调整列宽', routerLink: { name: 'ComponentTableCustomResizable' } },
              { title: '允许拖拽列顺序', routerLink: { name: 'ComponentTableCustomSort' } },
              { title: '自定义触发弹出设置', routerLink: { name: 'ComponentTableCustomTemplate' } },
              { title: '自定义弹出位置', routerLink: { name: 'ComponentTableCustomPlacement' } },
              { title: '事件监听', routerLink: { name: 'ComponentTableCustomEvents' } },
              { title: '本地保存列设置', routerLink: { name: 'ComponentTableCustomStorage' } },
              { title: '自定义服务端保存', routerLink: { name: 'ComponentTableCustomRemote' } },
              { title: '实现服务端保存与恢复', routerLink: { name: 'ComponentTableCustomRemoteFull' } }
            ]
          },
          // {
          //   title: '数据分页',
          //   children: []
          // },
          {
            title: '树形',
            children: [
              { title: '平级结构', routerLink: { name: 'ComponentTableTreeLeveling' } },
              { title: '层级结构', routerLink: { name: 'ComponentTableTreeHierarchy' } },
              { title: '自定义图标', routerLink: { name: 'ComponentTableTreeIcon' } },
              { title: '显示连接线', routerLink: { name: 'ComponentTableTreeLine' } },
              { title: '单选框', routerLink: { name: 'ComponentTableTreeRadio' } },
              { title: '复选框', routerLink: { name: 'ComponentTableTreeCheckbox' } },
              { title: '树形排序', routerLink: { name: 'ComponentTableTreeSort' } },
              { title: '右键菜单', routerLink: { name: 'ComponentTableTreeMenu' } },
              { title: '懒加载', routerLink: { name: 'ComponentTableTreeLazy' } },
              { title: '懒加载与可编辑', routerLink: { name: 'ComponentTableTreeLazyEdit' } },
              { title: '展开行', routerLink: { name: 'ComponentTableTreeExpand' } },
              { title: '展开行懒加载', routerLink: { name: 'ComponentTableTreeExpandLazy' } }
            ]
          },
          {
            title: '可编辑',
            children: [
              { title: '手动编辑', routerLink: { name: 'ComponentTableEditManual' } },
              { title: '单击编辑', routerLink: { name: 'ComponentTableEditClick' } },
              { title: '双击编辑', routerLink: { name: 'ComponentTableEditDblclick' } },
              { title: '插入数据', routerLink: { name: 'ComponentTableEditInsert' } },
              { title: '删除数据', routerLink: { name: 'ComponentTableEditRemove' } },
              { title: '标记为删除', routerLink: { name: 'ComponentTableEditPending' } },
              { title: '单元格校验', routerLink: { name: 'ComponentTableEditCellValid' } },
              { title: '行校验', routerLink: { name: 'ComponentTableEditRowValid' } }
            ]
          },
          {
            title: '自定义插槽模板',
            children: [
              { title: '自定义单元格', routerLink: { name: 'ComponentTableTemplateDefault' } },
              { title: '自定义表头', routerLink: { name: 'ComponentTableTemplateHeader' } },
              { title: '自定义表尾', routerLink: { name: 'ComponentTableTemplateFooter' } },
              { title: '自定义复选框', routerLink: { name: 'ComponentTableTemplateCheckbox' } },
              { title: '自定义单选框', routerLink: { name: 'ComponentTableTemplateRadio' } },
              { title: '自定义展开行', routerLink: { name: 'ComponentTableTemplateContent' } },
              { title: '自定义筛选', routerLink: { name: 'ComponentTableTemplateFilter' } },
              { title: '自定义编辑', routerLink: { name: 'ComponentTableTemplateEdit' } }
            ]
          },
          {
            title: '导出数据',
            children: [
              { title: '导出数据', routerLink: { name: 'ComponentTableExportBase' } },
              { title: '导出 TXT', routerLink: { name: 'ComponentTableExportTxt' } },
              { title: '导出 XML', routerLink: { name: 'ComponentTableExportXml' } },
              { title: '导出 HTML', routerLink: { name: 'ComponentTableExportHtml' } },
              { title: '导出 CSV', routerLink: { name: 'ComponentTableExportCsv' } },
              { title: '高级导出', routerLink: { name: 'ComponentTableExportAdvanced' } }
            ]
          },
          {
            title: '导入数据',
            children: [
              { title: '导入数据', routerLink: { name: 'ComponentTableImportBase' } },
              { title: '高级导入', routerLink: { name: 'ComponentTableImportAdvanced' } }
            ]
          },
          {
            title: '打印表格',
            children: [
              { title: '打印表格', routerLink: { name: 'ComponentTablePrintBase' } },
              { title: '高级打印', routerLink: { name: 'ComponentTablePrintAdvanced' } }
            ]
          },
          {
            title: '虚拟滚动',
            children: [
              { title: '纵向虚拟滚动', routerLink: { name: 'ComponentTableScrollVertical' } },
              { title: '横向虚拟滚动', routerLink: { name: 'ComponentTableScrollHorizontal' } },
              { title: '纵向和横向虚拟滚动', routerLink: { name: 'ComponentTableScrollHV' } },
              { title: '设置行高', routerLink: { name: 'ComponentTableScrollRowHeight' } },
              { title: '使用分组表头', routerLink: { name: 'ComponentTableScrollGroup' } },
              { title: '树形虚拟滚动', routerLink: { name: 'ComponentTableScrollTree' } }
            ]
          }
        ]
      },
      {
        i18nKey: 'app.aside.menu.grid.name',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'grid' } } },
          {
            title: '基础功能',
            children: [
              { title: '基础', routerLink: { name: 'ComponentGridBaseBasic' } },
              // { title: '尺寸大小', routerLink: { name: 'ComponentGridBaseSize' } },
              { title: '数据类型', routerLink: { name: 'ComponentGridBaseData' } },
              { title: '空数据提示', routerLink: { name: 'ComponentGridBaseEmpty' } },
              { title: '边框', routerLink: { name: 'ComponentGridBaseBorder' } },
              { title: '圆角', routerLink: { name: 'ComponentGridBaseRound' } },
              { title: '对齐方式', routerLink: { name: 'ComponentGridBaseAlign' } },
              { title: '列宽设置', routerLink: { name: 'ComponentGridBaseWidth' } },
              { title: '自动换行', routerLink: { name: 'ComponentGridBaseAutoBreak' } },
              // { title: '溢出隐藏', routerLink: { name: 'ComponentGridBaseOverflow' } },
              // { title: '文本提示', routerLink: { name: 'ComponentGridBaseTooltip' } },
              // { title: '斑马线样式', routerLink: { name: 'ComponentGridBaseStripe' } },
              // { title: '单元格样式', routerLink: { name: 'ComponentGridBaseStyle' } },
              { title: '动态样式', routerLink: { name: 'ComponentGridBaseDynamicStyle' } },
              // { title: '隐藏表头', routerLink: { name: 'ComponentGridBaseHeader' } },
              // { title: '高亮列', routerLink: { name: 'ComponentGridBaseHeaderHighlight' } },
              // { title: '拖拽调整列宽', routerLink: { name: 'ComponentGridBaseHeaderResizable' } },
              // { title: '表格最小高度', routerLink: { name: 'ComponentGridBaseHeaderMinHeight' } },
              // { title: '表格高度', routerLink: { name: 'ComponentGridBaseHeight' } },
              // { title: '表格最大高度', routerLink: { name: 'ComponentGridBaseMaxHeight' } },
              { title: '表格响应式高度', routerLink: { name: 'ComponentGridBaseAutoHeight' } },
              // { title: '设置行度', routerLink: { name: 'ComponentGridBaseRowHeight' } },
              // { title: '冻结列', routerLink: { name: 'ComponentGridBaseFixed' } },
              // { title: '冻结表头和列', routerLink: { name: 'ComponentGridBaseFixedFull' } },
              // { title: '表尾', routerLink: { name: 'ComponentGridBaseFooter' } },
              // { title: '分组表头', routerLink: { name: 'ComponentGridBaseGroup' } },
              { title: '高亮行与列', routerLink: { name: 'ComponentGridBaseCurrent' } },
              // { title: '排序', routerLink: { name: 'ComponentGridBaseSort' } },
              // { title: '筛选', routerLink: { name: 'ComponentGridBaseFilter' } },
              // { title: '加载中', routerLink: { name: 'ComponentGridBaseLoading' } },
              // { title: '格式化内容', routerLink: { name: 'ComponentGridBaseFormat' } },
              // { title: '序号', routerLink: { name: 'ComponentGridBaseSeq' } },
              // { title: '单选框', routerLink: { name: 'ComponentGridBaseRadio' } },
              // { title: '复选框', routerLink: { name: 'ComponentGridBaseSelection' } },
              // { title: 'HTML 类型', routerLink: { name: 'ComponentGridBaseHtml' } },
              { title: '完整案例', routerLink: { name: 'ComponentGridBaseFull' } }
            ]
          },
          {
            title: '单元格合并',
            children: [
              { title: '合并行', routerLink: { name: 'ComponentGridMergeRow' } },
              { title: '合并列', routerLink: { name: 'ComponentGridMergeColumn' } },
              { title: '合并行与列', routerLink: { name: 'ComponentGridMergeAll' } }
            ]
          },
          {
            title: '表尾数据',
            children: [
              { title: '标准结构', routerLink: { name: 'ComponentGridFooterFooterData' } },
              { title: '自定义数据方法', routerLink: { name: 'ComponentGridFooterFooterMethod' } }
            ]
          },
          {
            title: '展开行',
            children: [
              { title: '基础使用', routerLink: { name: 'ComponentGridExpandBasic' } },
              { title: '展开容器内间距', routerLink: { name: 'ComponentGridExpandPadding' } },
              { title: '展开容器高度', routerLink: { name: 'ComponentGridExpandHeight' } },
              { title: '使用冻结列', routerLink: { name: 'ComponentGridExpandFixed' } }
            ]
          },
          {
            title: '右键菜单',
            children: [
              { title: '完整右键菜单', routerLink: { name: 'ComponentGridMenuFull' } },
              { title: '菜单权限控制', routerLink: { name: 'ComponentGridMenuPrivilege' } }
            ]
          },
          {
            title: '查询表单',
            children: [
              { title: '查询表单', routerLink: { name: 'ComponentGridFormSearch' } },
              { title: '带折叠的查询表单', routerLink: { name: 'ComponentGridFormCollapse' } }
            ]
          },
          {
            title: '工具栏',
            children: [
              { title: '自定义列功能', routerLink: { name: 'ComponentGridToolbarCustom' } },
              { title: '打印功能', routerLink: { name: 'ComponentGridToolbarPrint' } },
              { title: '最大化显示', routerLink: { name: 'ComponentGridToolbarZoom' } },
              { title: '导入数据', routerLink: { name: 'ComponentGridToolbarImport' } },
              { title: '导出数据', routerLink: { name: 'ComponentGridToolbarExport' } },
              { title: '刷新列表', routerLink: { name: 'ComponentGridToolbarRefresh' } },
              { title: '自定义图标', routerLink: { name: 'ComponentGridToolbarIcon' } }
            ]
          },
          {
            title: '自定义列',
            children: [
              { title: '弹窗模式', routerLink: { name: 'ComponentGridCustomPopup' } },
              // { title: '允许调整列显示隐藏', routerLink: { name: 'ComponentGridCustomVisible' } },
              // { title: '允许调整列冻结', routerLink: { name: 'ComponentGridCustomFixed' } },
              // { title: '允许调整列宽', routerLink: { name: 'ComponentGridCustomResizable' } },
              // { title: '允许拖拽列顺序', routerLink: { name: 'ComponentGridCustomSort' } },
              // { title: '自定义触发弹出设置', routerLink: { name: 'ComponentGridCustomTemplate' } },
              { title: '自定义弹出位置', routerLink: { name: 'ComponentGridCustomPlacement' } },
              // { title: '事件监听', routerLink: { name: 'ComponentGridCustomEvents' } },
              { title: '本地保存列设置', routerLink: { name: 'ComponentGridCustomStorage' } },
              { title: '自定义服务端保存', routerLink: { name: 'ComponentGridCustomRemote' } },
              { title: '实现服务端保存与恢复', routerLink: { name: 'ComponentGridCustomRemoteFull' } }
            ]
          },
          {
            title: '分页查询',
            children: [
              { title: '基础', routerLink: { name: 'ComponentGridPagerBase' } },
              { title: '自定义每页大小', routerLink: { name: 'ComponentGridPagerPageSize' } }
            ]
          },
          {
            title: '功能布局',
            children: [
              { title: '调整分页位置', routerLink: { name: 'ComponentGridLayoutPager' } },
              { title: '调整工具栏位置', routerLink: { name: 'ComponentGridLayoutToolbar' } }
            ]
          },
          {
            title: '树形',
            children: [
              { title: '平级结构', routerLink: { name: 'ComponentGridTreeLeveling' } },
              { title: '层级结构', routerLink: { name: 'ComponentGridTreeHierarchy' } }
            ]
          },
          {
            title: '可编辑',
            children: [
              { title: '单击编辑', routerLink: { name: 'ComponentGridEditClick' } },
              { title: '双击编辑', routerLink: { name: 'ComponentGridEditDblclick' } },
              { title: '禁用单元格编辑', routerLink: { name: 'ComponentGridEditCellDisable' } },
              { title: '禁用行编辑', routerLink: { name: 'ComponentGridEditRowDisable' } }
            ]
          },
          {
            title: '自定义插槽模板',
            children: [
              { title: '自定义布局模板', routerLink: { name: 'ComponentGridTemplateLayout' } },
              { title: '自定义单元格', routerLink: { name: 'ComponentGridTemplateDefault' } },
              { title: '自定义表头', routerLink: { name: 'ComponentGridTemplateHeader' } },
              { title: '自定义表尾', routerLink: { name: 'ComponentGridTemplateFooter' } },
              { title: '自定义复选框', routerLink: { name: 'ComponentGridTemplateCheckbox' } },
              { title: '自定义单选框', routerLink: { name: 'ComponentGridTemplateRadio' } },
              { title: '自定义展开行', routerLink: { name: 'ComponentGridTemplateContent' } },
              { title: '自定义筛选', routerLink: { name: 'ComponentGridTemplateFilter' } },
              { title: '自定义编辑', routerLink: { name: 'ComponentGridTemplateEdit' } },
              { title: '自定义单元格校验', routerLink: { name: 'ComponentGridTemplateValid' } }
            ]
          },
          {
            title: '导出数据',
            children: [
              { title: '导出数据', routerLink: { name: 'ComponentGridExportBase' } },
              { title: '高级导出', routerLink: { name: 'ComponentGridExportAdvanced' } }
            ]
          },
          {
            title: '导入数据',
            children: [
              { title: '导入数据', routerLink: { name: 'ComponentGridImportBase' } },
              { title: '高级导入', routerLink: { name: 'ComponentGridImportAdvanced' } }
            ]
          },
          {
            title: '打印表格',
            children: [
              { title: '打印表格', routerLink: { name: 'ComponentGridPrintBase' } },
              { title: '高级打印', routerLink: { name: 'ComponentGridPrintAdvanced' } }
            ]
          },
          {
            title: '虚拟滚动',
            children: [
              { title: '纵向虚拟滚动', routerLink: { name: 'ComponentGridScrollVertical' } },
              { title: '横向虚拟滚动', routerLink: { name: 'ComponentGridScrollHorizontal' } },
              { title: '纵向和横向虚拟滚动', routerLink: { name: 'ComponentGridScrollHV' } },
              { title: '使用分组表头', routerLink: { name: 'ComponentGridScrollGroup' } }
            ]
          },
          {
            title: '数据代理',
            children: [
              { title: '查询接口', routerLink: { name: 'ComponentGridProxyQuery' } },
              { title: '分页查询接口', routerLink: { name: 'ComponentGridProxyPager' } },
              { title: '集成工具栏查询', routerLink: { name: 'ComponentGridProxyToolbarQuery' } },
              { title: '手动调用查询', routerLink: { name: 'ComponentGridProxyManualQuery' } },
              { title: '集成工具栏删除已选', routerLink: { name: 'ComponentGridProxyToolbarDelete' } },
              { title: '手动调用删除已选', routerLink: { name: 'ComponentGridProxyManualDelete' } },
              { title: '集成工具栏批量标记删除', routerLink: { name: 'ComponentGridProxyToolbarMark' } },
              { title: '手动调用标记删除状态', routerLink: { name: 'ComponentGridProxyManualMark' } },
              { title: '集成工具栏增删改查', routerLink: { name: 'ComponentGridProxyToolbarSave' } },
              { title: '手动调用增删改查', routerLink: { name: 'ComponentGridProxyManualSave' } }
            ]
          }
        ]
      },
      {
        title: '格式化（全局复用）',
        children: [
          { title: 'API', routerLink: { name: 'GlobalFormatsTableAPI' } },
          { title: '单元格', routerLink: { name: 'GlobalFormatsTableBase' } }
        ]
      },
      {
        title: '指令注册（全局复用）',
        children: [
          { title: 'API', routerLink: { name: 'GlobalCommandsTableAPI' } },
          { title: '工具栏', routerLink: { name: 'GlobalCommandsTableBase' } }
        ]
      },
      {
        title: '渲染器（高阶复用）',
        children: [
          { title: 'API', routerLink: { name: 'GlobalRendererTableAPI' } },
          {
            title: '单元格',
            children: [
              { title: '实现一个超链接', routerLink: { name: 'GlobalRendererTableDefaultMyLink' } },
              { title: '实现一个图片预览', routerLink: { name: 'GlobalRendererTableDefaultMyImg' } }
            ]
          },
          {
            title: '可编辑',
            children: [
              { title: '实现一个金额输入', routerLink: { name: 'GlobalRendererTableEditEditInput' } },
              { title: '实现一个下拉表格', routerLink: { name: 'GlobalRendererTableEditEditDownTable' } }
            ]
          },
          {
            title: '展开行',
            children: [
              { title: '实现一个展开列表', routerLink: { name: 'GlobalRendererTableExpandMyExpandList' } },
              { title: '实现一个展开表格', routerLink: { name: 'GlobalRendererTableExpandMyExpandTable' } }
            ]
          },
          {
            title: '工具栏',
            children: [
              { title: '实现左侧操作按钮', routerLink: { name: 'GlobalRendererTableToolbarBtn' } },
              { title: '实现右侧工具按钮', routerLink: { name: 'GlobalRendererTableToolbarTool' } }
            ]
          },
          {
            title: '筛选',
            children: [
              { title: '实现一个输入筛选', routerLink: { name: 'GlobalRendererTableFilterFilterInput' } },
              { title: '实现一个多条件筛选', routerLink: { name: 'GlobalRendererTableFilterFilterComplex' } }
            ]
          },
          {
            title: '空数据提示',
            children: [
              { title: '实现空数据提示1', routerLink: { name: 'GlobalRendererTableMyEmpty' } },
              { title: '实现空数据提示2', routerLink: { name: 'GlobalRendererTableMyNotData' } }
            ]
          }
        ]
      }
      // { title: '右键菜单（全局）' },
      // { title: '校验器（全局）' },
      // { title: '事件拦截（高级）' }
    ]
  },
  {
    i18nKey: 'app.aside.menu.feedbackTitle',
    children: [
      // { title: 'Loading 加载中' },
      {
        title: 'Tip 提示',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tip' } } },
          { title: '状态', routerLink: { name: 'ComponentTipBase' } },
          { title: '图标', routerLink: { name: 'ComponentTipIcon' } },
          { title: '带标题', routerLink: { name: 'ComponentTipTitle' } }
        ]
      },
      {
        title: 'Alert 警告提示',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'alert' } } },
          { title: '状态', routerLink: { name: 'ComponentAlertBase' } },
          { title: '图标', routerLink: { name: 'ComponentAlertIcon' } },
          { title: '带标题', routerLink: { name: 'ComponentAlertTitle' } },
          { title: '可关闭', routerLink: { name: 'ComponentAlertClose' } }
        ]
      },
      // { title: 'Notification 通知提示框' },
      {
        title: 'Drawer 抽屉',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'drawer' } } },
          { title: '自定义方向', routerLink: { name: 'ComponentDrawerBase' } },
          { title: '点击遮罩层关闭', routerLink: { name: 'ComponentDrawerMaskClosable' } },
          { title: '自定义模板', routerLink: { name: 'ComponentDrawerTemplate' } }
        ]
      },
      // { title: 'Popover 气泡提示框' },
      {
        title: 'Tooltip 文字提示',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'tooltip' } } },
          { title: '文字提示', routerLink: { name: 'ComponentTooltip' } }
        ]
      }
    ]
  },
  {
    i18nKey: 'app.aside.menu.modalTitle',
    children: [
      { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'modal' } } },
      {
        title: '消息框',
        children: [
          { title: '全局调用', routerLink: { name: 'ComponentModalMessageGlobal' } },
          { title: '唯一', routerLink: { name: 'ComponentModalMessageMultiple' } },
          { title: '状态提示', routerLink: { name: 'ComponentModalMessageStatus' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentModalMessageTemplate' } }
        ]
      },
      {
        title: '通知框',
        children: [
          { title: '全局调用', routerLink: { name: 'ComponentModalNotificationGlobal' } },
          { title: '唯一', routerLink: { name: 'ComponentModalNotificationMultiple' } },
          { title: '状态提示', routerLink: { name: 'ComponentModalNotificationStatus' } },
          { title: '带操作按钮', routerLink: { name: 'ComponentModalNotificationFooter' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentModalNotificationTemplate' } }
        ]
      },
      {
        title: '提示框',
        children: [
          { title: '全局调用', routerLink: { name: 'ComponentModalAlertGlobal' } },
          { title: '弹出多个', routerLink: { name: 'ComponentModalAlertMultiple' } },
          { title: '禁止拖动', routerLink: { name: 'ComponentModalAlertDraggable' } },
          { title: '按 Esc 键可关闭', routerLink: { name: 'ComponentModalAlertEscClosable' } },
          { title: '状态提示', routerLink: { name: 'ComponentModalAlertStatus' } },
          { title: '手动关闭', routerLink: { name: 'ComponentModalAlertManual' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentModalAlertTemplate' } }
        ]
      },
      {
        title: '确认框',
        children: [
          { title: '全局调用', routerLink: { name: 'ComponentModalConfirmGlobal' } },
          { title: '弹出多个', routerLink: { name: 'ComponentModalConfirmMultiple' } },
          { title: '禁止拖动', routerLink: { name: 'ComponentModalConfirmDraggable' } },
          { title: '按 Esc 键可关闭', routerLink: { name: 'ComponentModalConfirmEscClosable' } },
          { title: '手动关闭', routerLink: { name: 'ComponentModalConfirmManual' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentModalConfirmTemplate' } }
        ]
      },
      {
        title: '窗口模式',
        children: [
          { title: '基础', routerLink: { name: 'ComponentModalModalBase' } },
          { title: '尺寸大小', routerLink: { name: 'ComponentModalModalSize' } },
          { title: '自定义插槽模板', routerLink: { name: 'ComponentModalModalTemplate' } },
          { title: '全局调用', routerLink: { name: 'ComponentModalModalGlobal' } },
          { title: '内边距', routerLink: { name: 'ComponentModalModalPadding' } },
          { title: '遮罩层', routerLink: { name: 'ComponentModalModalMask' } },
          { title: '锁定页面', routerLink: { name: 'ComponentModalModalLockView' } },
          { title: '拖动窗口', routerLink: { name: 'ComponentModalModalDraggable' } },
          { title: '多窗口', routerLink: { name: 'ComponentModalModalMultiple' } },
          { title: '按 Esc 键可关闭', routerLink: { name: 'ComponentModalModalEscClosable' } },
          { title: '拦截关闭', routerLink: { name: 'ComponentModalModalBeforeHide' } },
          { title: '操作按钮', routerLink: { name: 'ComponentModalModalButton' } },
          { title: '拖动调整宽高', routerLink: { name: 'ComponentModalModalResize' } },
          { title: '最大化与最小化', routerLink: { name: 'ComponentModalModalZoom' } },
          { title: '记忆功能', routerLink: { name: 'ComponentModalModalRemember' } },
          { title: '嵌入 iframe', routerLink: { name: 'ComponentModalModalIframe' } },
          { title: '完整功能', routerLink: { name: 'ComponentModalModalFull' } }
        ]
      }
    ]
  },
  {
    i18nKey: 'app.aside.menu.otherTitle',
    children: [
      // { title: 'Watermark 水印' },
      {
        title: 'Print 打印',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'print' } } },
          {
            title: '常规打印',
            children: [
              { title: '打印 HTML', routerLink: { name: 'ComponentPrintBaseHtml' } },
              { title: '打印图片', routerLink: { name: 'ComponentPrintBaseImg' } },
              { title: '打印表格', routerLink: { name: 'ComponentPrintBaseTable' } }
            ]
          },
          {
            title: '分页打印',
            children: [
              { title: '基础', routerLink: { name: 'ComponentPrintPageBasics' } },
              { title: '页眉/标题', routerLink: { name: 'ComponentPrintPageHeader' } },
              { title: '页尾/页码', routerLink: { name: 'ComponentPrintPageFooter' } },
              { title: '批量打印图片', routerLink: { name: 'ComponentPrintPageImage' } },
              { title: '分页打印表格', routerLink: { name: 'ComponentPrintPageTable' } },
              { title: '自定义模板', routerLink: { name: 'ComponentPrintPageTemplate' } }
            ]
          }
        ]
      }
    ]
  },
  {
    i18nKey: 'app.aside.menu.designTitle',
    children: [
      {
        title: 'FormDesign 表单设计器',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'form-design' } } },
          { title: '基础功能', routerLink: { name: 'ComponentFormDesignBase' } },
          { title: '自定义控件分组', routerLink: { name: 'ComponentFormDesignCustomGroup' } },
          { title: '移动端设计器', routerLink: { name: 'ComponentFormDesignMobile' } },
          { title: 'PC 端和移动端设计器', routerLink: { name: 'ComponentFormDesignPcAndMobile' } },
          { title: '渲染视图', routerLink: { name: 'ComponentFormDesignRenderView' } }
        ]
      },
      {
        title: 'ListDesign 列表设计器',
        children: [
          { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'list-design' } } },
          { title: '基础功能', routerLink: { name: 'ComponentListDesignBase' } },
          { title: '移动端设计器', routerLink: { name: 'ComponentListDesignMobile' } },
          { title: 'PC 端和移动端设计器', routerLink: { name: 'ComponentListDesignPcAndMobile' } },
          { title: '集成表单设计器', routerLink: { name: 'ComponentListDesignFormAndList' } }
        ]
      }
      // { title: 'FlowDesign 流程设计器' },
      // { title: 'PrintDesign 打印设计器' }
    ]
  },
  // {
  //   title: '渲染器（高级用法）',
  //   children: [
  //     { title: '表格-筛选渲染' },
  //     { title: '表格-单元格渲染' },
  //     { title: '表格-可编辑渲染' },
  //     { title: '表格-工具栏渲染' },
  //     { title: '表格-空数据渲染' },
  //     { title: '表单-项渲染' },
  //     { title: '表单设计器-控件渲染' },
  //     { title: '列表设计器-控件渲染' },
  //     { title: '打印设计器-控件渲染' }
  //   ]
  // },
  // {
  //   title: '扩展插件',
  //   children: [
  //     { title: '集成第三方适配器' }
  //   ]
  // },
  {
    title: 'API',
    isExpand: true,
    children: []
  }
]
