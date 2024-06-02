export interface NavVO {
  title: string
  isExpand?: boolean
  isNew?: boolean
  isUnpublished?: boolean
  routerLink?: any
  linkUrl?: string
  children?: NavVO[]
}

const componentList = [
  'anchor',
  'anchor-link',
  'breadcrumb',
  'breadcrumb-item',
  'button',
  'button-group',
  'calendar',
  'card',
  'checkbox',
  'checkbox-group',
  'col',
  'collapse',
  'collapse-pane',
  'date-input',
  'drawer',
  'form',
  'form-design',
  'form-gather',
  'form-item',
  'form-view',
  'icon',
  'input',
  'layout-aside',
  'layout-body',
  'layout-container',
  'layout-footer',
  'layout-header',
  'link',
  'list-design',
  'list-view',
  'list',
  'loading',
  'menu',
  'modal',
  'number-input',
  'optgroup',
  'option',
  'pager',
  'password-input',
  'print',
  'pulldown',
  'radio',
  'radio-button',
  'radio-group',
  'row',
  'select',
  'switch',
  'tab-pane',
  'tabs',
  'textarea',
  'tips',
  'tooltip',
  'tree',
  'tree-select',
  'upload'
]

export const navConfigList: NavVO[] = [
  {
    title: '开发指南',
    isExpand: true,
    children: [
      { title: '全局安装', routerLink: { name: 'StartInstall' } },
      { title: '按需加载', routerLink: { name: 'StartUse' } },
      { title: '全局参数', routerLink: { name: 'StartConfig' } },
      { title: '全局主题', routerLink: { name: 'StartTheme' } },
      { title: '全局图标', routerLink: { name: 'StartIcons' } },
      { title: '全局 z-index', routerLink: { name: 'StartUseZIndex' } },
      { title: '国际化', routerLink: { name: 'StartI18n' } }
    ]
  },
  {
    title: '工具类',
    children: [
      // { title: '函数库' },
      { title: '剪贴板', routerLink: { name: 'ToolClipboard' } }
    ]
  },
  {
    title: '基础组件',
    children: [
      { title: 'Icon 图标', routerLink: { name: 'ComponentIcon' } },
      { title: 'Layout 布局', routerLink: { name: 'ComponentLayout' } },
      { title: 'Row 栅格', routerLink: { name: 'ComponentRow' } },
      { title: 'Text 文本', routerLink: { name: 'ComponentText' } },
      { title: 'Link 链接', routerLink: { name: 'ComponentLink' } },
      { title: 'Tag 标签', routerLink: { name: 'ComponentTag' } },
      { title: 'Button 按钮', routerLink: { name: 'ComponentButton' } }
    ]
  },
  {
    title: '导航组件',
    children: [
      { title: 'Breadcrumb 面包屑', routerLink: { name: 'ComponentBreadcrumb' } },
      { title: 'Menu 菜单', routerLink: { name: 'ComponentMenu' } },
      { title: 'Anchor 锚点', routerLink: { name: 'ComponentAnchor' } },
      { title: 'Pager 分页', routerLink: { name: 'ComponentPager' } }
    ]
  },
  {
    title: '展示组件',
    children: [
      { title: 'Image 图片', routerLink: { name: 'ComponentImage' } },
      { title: 'ImagePreview 图片预览', routerLink: { name: 'ComponentImagePreview' } },
      { title: 'Tabs 页签', routerLink: { name: 'ComponentTabs' } },
      // { title: 'Progress 进度条' },
      // { title: 'Card 卡片' },
      { title: 'Pulldown 下拉容器', routerLink: { name: 'ComponentPulldown' } },
      // { title: 'Carousel 走马灯' },
      // { title: 'Image 图片' },
      // { title: 'Calendar 日历' },
      // { title: 'Collapse 折叠面板' },
      { title: 'List 虚拟列表', routerLink: { name: 'ComponentList' } }
    ]
  },
  {
    title: '表单组件',
    children: [
      {
        title: '基础表单',
        children: [
          { title: '基础功能', routerLink: { name: 'ComponentFormBasicsBase' } },
          { title: '自定义布局', routerLink: { name: 'ComponentFormBasicsCustomLayout' } },
          { title: '上下布局', routerLink: { name: 'ComponentFormBasicsVertical' } },
          { title: '表单校验', routerLink: { name: 'ComponentFormBasicsValid' } }
        ]
      },
      {
        title: '配置式表单',
        children: [
          { title: '基础功能', routerLink: { name: 'ComponentFormConfigBase' } }
        ]
      }
      // { title: '校验器（全局）' }
    ]
  },
  {
    title: '表格组件',
    children: [
      { title: '查看文档', linkUrl: 'https://vxetable.cn/v4.7/' }
      // { title: '基础表格' },
      // { title: '配置式表格' },
      // { title: '格式化（全局）' },
      // { title: '右键菜单（全局）' },
      // { title: '校验器（全局）' },
      // { title: '指令注册（全局）' },
      // { title: '事件拦截（高级）' }
    ]
  },
  {
    title: '数据组件',
    children: [
      { title: 'Switch 开关', routerLink: { name: 'ComponentSwitch' } },
      { title: 'Radio 单选框', routerLink: { name: 'ComponentRadio' } },
      { title: 'Checkbox 复选框', routerLink: { name: 'ComponentCheckbox' } },
      {
        title: 'Input 输入框',
        children: [
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
          { title: '自定义插槽模板', routerLink: { name: 'ComponentInputTemplate' } }
        ]
      },
      // { title: 'TextInput 单行文本输入' },
      { title: 'Textarea 多行文本输入', routerLink: { name: 'ComponentTextarea' } },
      // { title: 'NumberInput 数值输入' },
      { title: 'PasswordInput 密码输入', routerLink: { name: 'ComponentPasswordInput' } },
      // { title: 'DatePicker 日期选择器' },
      // { title: 'WeekPicker 周选择器' },
      // { title: 'MonthPicker 月选择器' },
      // { title: 'QuarterPicker 季度选择' },
      // { title: 'YearPicker 年选择器' },
      // { title: 'TimePicker 时间选择器' },
      // { title: 'DateTimePicker日期带时间选择器' },
      { title: 'Select 下拉框', routerLink: { name: 'ComponentSelect' } },
      // { title: 'Tree 树形控件' },
      // { title: 'TreeSelect 树形下拉框' },
      {
        title: 'Upload 上传',
        children: [
          { title: '文件上传', routerLink: { name: 'ComponentUploadFile' } },
          { title: '图片上传', routerLink: { name: 'ComponentUploadImage' } }
        ]
      }
      // { title: 'Transfer 穿梭框' }
    ]
  },
  {
    title: '反馈组件',
    children: [
      // { title: 'Loading 加载中' },
      { title: 'Tips 小贴士', routerLink: { name: 'ComponentTips' } },
      { title: 'Alert 警告提示', routerLink: { name: 'ComponentAlert' } },
      // { title: 'Notification 通知提示框' },
      {
        title: 'Modal 模态窗',
        children: [
          { title: '轻提示框', routerLink: { name: 'ComponentModalMessage' } },
          { title: '提示框', routerLink: { name: 'ComponentModalAlert' } },
          { title: '确认框', routerLink: { name: 'ComponentModalConfirm' } },
          { title: '弹出窗口', routerLink: { name: 'ComponentModalOpen' } }
        ]
      },
      { title: 'Drawer 抽屉', routerLink: { name: 'ComponentDrawer' } },
      // { title: 'Popover 气泡提示框' },
      { title: 'Tooltip 文字提示', routerLink: { name: 'ComponentTooltip' } }
    ]
  },
  {
    title: '其他组件',
    children: [
      // { title: 'Watermark 水印' },
      { title: 'Print 打印', routerLink: { name: 'ComponentPrint' } }
    ]
  },
  {
    title: '可视化组件',
    children: [
      {
        title: 'FormDesign 表单设计器',
        children: [
          { title: '基础功能', routerLink: { name: 'ComponentFormDesignBase' } },
          { title: '自定义控件分组', routerLink: { name: 'ComponentFormDesignCustomGroup' } },
          { title: '移动端设计器', routerLink: { name: 'ComponentFormDesignMobile' } },
          { title: 'PC 端和移动端设计器', routerLink: { name: 'ComponentFormDesignPcAndMobile' } },
          { title: '渲染视图', routerLink: { name: 'ComponentFormDesignRenderView' } }
          // { title: 'API' }
        ]
        // },
        // {
        //   title: 'ListDesign 列表设计器',
        //   children: [
        //     { title: '基础功能', routerLink: { name: 'ComponentListDesignBase' } },
        //     { title: '移动端设计器', routerLink: { name: 'ComponentListDesignMobile' } },
        //     { title: 'PC 端和移动端设计器', routerLink: { name: 'ComponentListDesignPcAndMobile' } }

      //   ]
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
    children: componentList.map(name => {
      return {
        title: `${name}`,
        routerLink: { name: 'DocsApi', params: { name } }
      }
    })
  }
]
