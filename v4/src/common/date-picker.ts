import { NavVO } from './nav'

export const datePickerNavConfig: NavVO = {
  // DatePicker 日期选择
  i18nKey: 'app.aside.menu.datePickerTitle',
  children: [
    { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'date-picker' } } },
    {
      // 日期类型
      i18nKey: 'app.aside.menu.datePickerDateType',
      children: [
        // 尺寸大小
        { i18nKey: 'app.aside.menu.datePickerSize', routerLink: { name: 'ComponentDatePickerDateSize' } },
        // 绑定值格式
        { i18nKey: 'app.aside.menu.datePickerValueFormat', routerLink: { name: 'ComponentDatePickerDateBase' } },
        // 显示值格式
        { i18nKey: 'app.aside.menu.datePickerLabelFormat', routerLink: { name: 'ComponentDatePickerDateLabelFormat' } },
        // 自定义解析
        { i18nKey: 'app.aside.menu.datePickerParseMethod', routerLink: { name: 'ComponentDatePickerDateParseMethod' } },
        // 可清除
        { i18nKey: 'app.aside.menu.datePickerClearable', routerLink: { name: 'ComponentDatePickerDateClearable' } },
        // 禁用
        { i18nKey: 'app.aside.menu.datePickerDisabled', routerLink: { name: 'ComponentDatePickerDateDisabled' } },
        // 查看模式
        { i18nKey: 'app.aside.menu.datePickerReadonly', routerLink: { name: 'ComponentDatePickerDateReadonly' } },
        // 禁用输入
        { i18nKey: 'app.aside.menu.datePickerEditable', routerLink: { name: 'ComponentDatePickerDateEditable' } },
        // 多选
        { i18nKey: 'app.aside.menu.datePickerMultiple', routerLink: { name: 'ComponentDatePickerDateMultiple' } },
        // 自动关闭
        { i18nKey: 'app.aside.menu.datePickerAutoClose', routerLink: { name: 'ComponentDatePickerDateAutoClose' } },
        {
          // 掩码输入
          i18nKey: 'app.aside.menu.datePickerMaskedInput',
          children: [
            // 掩码输入
            { i18nKey: 'app.aside.menu.datePickerMaskedInput', routerLink: { name: 'ComponentDatePickerDateMaskedIsMasked' } },
            // 方向键操作
            { i18nKey: 'app.aside.menu.datePickerArrowKey', routerLink: { name: 'ComponentDatePickerDateMaskedIsArrow' } },
            // 掩码格式
            { i18nKey: 'app.aside.menu.datePickerMaskFormat', routerLink: { name: 'ComponentDatePickerDateMaskedFormat' } },
            // 自定义占位符
            { i18nKey: 'app.aside.menu.datePickerMaskPlaceholder', routerLink: { name: 'ComponentDatePickerDateMaskedMaskPlaceholder' } },
            // 对齐方式
            { i18nKey: 'app.aside.menu.datePickerAlign', routerLink: { name: 'ComponentDatePickerDateMaskedAlign' } }
          ]
        },
        {
          // 快捷按钮
          i18nKey: 'app.aside.menu.datePickerShortcut',
          children: [
            // 内置 Code
            { i18nKey: 'app.aside.menu.datePickerShortcutCode', routerLink: { name: 'ComponentDatePickerDateShortcutCode' } },
            // 按钮状态颜色
            { i18nKey: 'app.aside.menu.datePickerShortcutStatus', routerLink: { name: 'ComponentDatePickerDateShortcutStatus' } },
            // 显示位置
            { i18nKey: 'app.aside.menu.datePickerShortcutPosition', routerLink: { name: 'ComponentDatePickerDateShortcutPosition' } },
            // 自定义按钮
            { i18nKey: 'app.aside.menu.datePickerShortcutCustom', routerLink: { name: 'ComponentDatePickerDateShortcutCustom' } }
          ]
        },
        // 限制日期范围
        { i18nKey: 'app.aside.menu.datePickerMinMax', routerLink: { name: 'ComponentDatePickerDateMinMax' } },
        // 限制指定日期
        { i18nKey: 'app.aside.menu.datePickerDisabledMethod', routerLink: { name: 'ComponentDatePickerDateDisabledMethod' } },
        // 前缀图标
        { i18nKey: 'app.aside.menu.datePickerPrefixIcon', routerLink: { name: 'ComponentDatePickerDatePrefixIcon' } },
        // 后缀图标
        { i18nKey: 'app.aside.menu.datePickerSuffixIcon', routerLink: { name: 'ComponentDatePickerDateSuffixIcon' } },
        // 面板的默认日期
        { i18nKey: 'app.aside.menu.datePickerDefVal', routerLink: { name: 'ComponentDatePickerDateDefVal' } },
        // 面板的触发方式
        { i18nKey: 'app.aside.menu.datePickerTrigger', routerLink: { name: 'ComponentDatePickerDateTrigger' } },
        // 小圆点
        { i18nKey: 'app.aside.menu.datePickerDot', routerLink: { name: 'ComponentDatePickerDateDot' } },
        // 农历及节假日
        { i18nKey: 'app.aside.menu.datePickerHolidays', routerLink: { name: 'ComponentDatePickerDateHolidays' } },
        {
          // 自定义插槽模板
          i18nKey: 'app.aside.menu.datePickerCustomSlotTemplate',
          children: [
            // 自定义顶部模板
            { i18nKey: 'app.aside.menu.datePickerCustomTopTemplate', routerLink: { name: 'ComponentDatePickerDateTemplateTop' } },
            // 自定义底部模板
            { i18nKey: 'app.aside.menu.datePickerCustomBottomTemplate', routerLink: { name: 'ComponentDatePickerDateTemplateBottom' } },
            // 自定义左侧模板
            { i18nKey: 'app.aside.menu.datePickerCustomLeftTemplate', routerLink: { name: 'ComponentDatePickerDateTemplateLeft' } },
            // 自定义右侧模板
            { i18nKey: 'app.aside.menu.datePickerCustomRightTemplate', routerLink: { name: 'ComponentDatePickerDateTemplateRight' } }
          ]
        }
      ]
    },
    {
      // 时间类型
      i18nKey: 'app.aside.menu.datePickerTimeType',
      children: [
        // 尺寸大小
        { i18nKey: 'app.aside.menu.datePickerSize', routerLink: { name: 'ComponentDatePickerTimeSize' } },
        // 绑定值格式
        { i18nKey: 'app.aside.menu.datePickerValueFormat', routerLink: { name: 'ComponentDatePickerTimeBase' } },
        // 可清除
        { i18nKey: 'app.aside.menu.datePickerClearable', routerLink: { name: 'ComponentDatePickerTimeClearable' } },
        // 禁用
        { i18nKey: 'app.aside.menu.datePickerDisabled', routerLink: { name: 'ComponentDatePickerTimeDisabled' } },
        // 自定义格式
        { i18nKey: 'app.aside.menu.datePickerCustomFormat', routerLink: { name: 'ComponentDatePickerTimeValueFormat' } },
        {
          // 掩码输入
          i18nKey: 'app.aside.menu.datePickerMaskedInput',
          children: [
            // 掩码输入
            { i18nKey: 'app.aside.menu.datePickerMaskedInput', routerLink: { name: 'ComponentDatePickerTimeMaskedIsMasked' } },
            // 方向键操作
            { i18nKey: 'app.aside.menu.datePickerArrowKey', routerLink: { name: 'ComponentDatePickerTimeMaskedIsArrow' } },
            // 掩码格式
            { i18nKey: 'app.aside.menu.datePickerMaskFormat', routerLink: { name: 'ComponentDatePickerTimeMaskedFormat' } },
            // 自定义占位符
            { i18nKey: 'app.aside.menu.datePickerMaskPlaceholder', routerLink: { name: 'ComponentDatePickerTimeMaskedMaskPlaceholder' } },
            // 对齐方式
            { i18nKey: 'app.aside.menu.datePickerAlign', routerLink: { name: 'ComponentDatePickerTimeMaskedAlign' } }
          ]
        },
        {
          // 快捷按钮
          i18nKey: 'app.aside.menu.datePickerShortcut',
          children: [
            // { title: '内置 Code', routerLink: { name: 'ComponentDatePickerTimeShortcutCode' } },
            // { title: '按钮状态颜色', routerLink: { name: 'ComponentDatePickerTimeShortcutStatus' } },
            // { title: '显示位置', routerLink: { name: 'ComponentDatePickerTimeShortcutPosition' } },
            // 自定义按钮
            { i18nKey: 'app.aside.menu.datePickerShortcutCustom', routerLink: { name: 'ComponentDatePickerTimeShortcutCustom' } }
          ]
        },
        // 面板的默认日期
        { i18nKey: 'app.aside.menu.datePickerDefVal', routerLink: { name: 'ComponentDatePickerTimeDefVal' } },
        // 禁用时间选项
        { i18nKey: 'app.aside.menu.datePickerDisabledOpt', routerLink: { name: 'ComponentDatePickerTimeDisabledOpt' } },
        // 自定义时间选项
        { i18nKey: 'app.aside.menu.datePickerOpts', routerLink: { name: 'ComponentDatePickerTimeOpts' } },
        {
          // 自定义插槽模板
          i18nKey: 'app.aside.menu.datePickerCustomSlotTemplate',
          children: [
            // 自定义顶部模板
            { i18nKey: 'app.aside.menu.datePickerCustomTopTemplate', routerLink: { name: 'ComponentDatePickerTimeTemplateTop' } },
            // 自定义底部模板
            { i18nKey: 'app.aside.menu.datePickerCustomBottomTemplate', routerLink: { name: 'ComponentDatePickerTimeTemplateBottom' } },
            // 自定义左侧模板
            { i18nKey: 'app.aside.menu.datePickerCustomLeftTemplate', routerLink: { name: 'ComponentDatePickerTimeTemplateLeft' } },
            // 自定义右侧模板
            { i18nKey: 'app.aside.menu.datePickerCustomRightTemplate', routerLink: { name: 'ComponentDatePickerTimeTemplateRight' } }
          ]
        }
      ]
    },
    {
      // 日期带时间类型
      i18nKey: 'app.aside.menu.datePickerDatetimeType',
      children: [
        // 绑定值格式
        { i18nKey: 'app.aside.menu.datePickerValueFormat', routerLink: { name: 'ComponentDatePickerDatetimeBase' } },
        // 可清除
        { i18nKey: 'app.aside.menu.datePickerClearable', routerLink: { name: 'ComponentDatePickerDatetimeClearable' } },
        // 禁用
        { i18nKey: 'app.aside.menu.datePickerDisabled', routerLink: { name: 'ComponentDatePickerDatetimeDisabled' } },
        // 禁止输入
        { i18nKey: 'app.aside.menu.datePickerProhibitInput', routerLink: { name: 'ComponentDatePickerDatetimeEditable' } },
        // 多选
        { i18nKey: 'app.aside.menu.datePickerMultiple', routerLink: { name: 'ComponentDatePickerDatetimeMultiple' } },
        // 自定义格式
        { i18nKey: 'app.aside.menu.datePickerCustomFormat', routerLink: { name: 'ComponentDatePickerDatetimeValueFormat' } },
        // 自定义解析
        { i18nKey: 'app.aside.menu.datePickerParseMethod', routerLink: { name: 'ComponentDatePickerDatetimeParseMethod' } },
        {
          // 掩码输入
          i18nKey: 'app.aside.menu.datePickerMaskedInput',
          children: [
            // 掩码输入
            { i18nKey: 'app.aside.menu.datePickerMaskedInput', routerLink: { name: 'ComponentDatePickerDatetimeMaskedIsMasked' } },
            // 方向键操作
            { i18nKey: 'app.aside.menu.datePickerArrowKey', routerLink: { name: 'ComponentDatePickerDatetimeMaskedIsArrow' } },
            // 掩码格式
            { i18nKey: 'app.aside.menu.datePickerMaskFormat', routerLink: { name: 'ComponentDatePickerDatetimeMaskedFormat' } },
            // 自定义占位符
            { i18nKey: 'app.aside.menu.datePickerMaskPlaceholder', routerLink: { name: 'ComponentDatePickerDatetimeMaskedMaskPlaceholder' } },
            // 对齐方式
            { i18nKey: 'app.aside.menu.datePickerAlign', routerLink: { name: 'ComponentDatePickerDatetimeMaskedAlign' } }
          ]
        },
        {
          // 快捷按钮
          i18nKey: 'app.aside.menu.datePickerShortcut',
          children: [
            // 内置 Code
            { i18nKey: 'app.aside.menu.datePickerShortcutCode', routerLink: { name: 'ComponentDatePickerDatetimeShortcutCode' } },
            // 按钮状态颜色
            { i18nKey: 'app.aside.menu.datePickerShortcutStatus', routerLink: { name: 'ComponentDatePickerDatetimeShortcutStatus' } },
            // 显示位置
            { i18nKey: 'app.aside.menu.datePickerShortcutPosition', routerLink: { name: 'ComponentDatePickerDatetimeShortcutPosition' } },
            // 自定义按钮
            { i18nKey: 'app.aside.menu.datePickerShortcutCustom', routerLink: { name: 'ComponentDatePickerDatetimeShortcutCustom' } }
          ]
        },
        // 面板的默认日期
        { i18nKey: 'app.aside.menu.datePickerDefVal', routerLink: { name: 'ComponentDatePickerDatetimeDefVal' } },
        // 禁用时间选项
        { i18nKey: 'app.aside.menu.datePickerDisabledOpt', routerLink: { name: 'ComponentDatePickerDatetimeDisabledOpt' } },
        // 自定义时间选项
        { i18nKey: 'app.aside.menu.datePickerOpts', routerLink: { name: 'ComponentDatePickerDatetimeOpts' } },
        // 小圆点
        { i18nKey: 'app.aside.menu.datePickerDot', routerLink: { name: 'ComponentDatePickerDatetimeDot' } },
        // 农历及节假日
        { i18nKey: 'app.aside.menu.datePickerHolidays', routerLink: { name: 'ComponentDatePickerDatetimeHolidays' } },
        {
          // 自定义插槽模板
          i18nKey: 'app.aside.menu.datePickerCustomSlotTemplate',
          children: [
            // 自定义顶部模板
            { i18nKey: 'app.aside.menu.datePickerCustomTopTemplate', routerLink: { name: 'ComponentDatePickerDatetimeTemplateTop' } },
            // 自定义底部模板
            { i18nKey: 'app.aside.menu.datePickerCustomBottomTemplate', routerLink: { name: 'ComponentDatePickerDatetimeTemplateBottom' } },
            // 自定义左侧模板
            { i18nKey: 'app.aside.menu.datePickerCustomLeftTemplate', routerLink: { name: 'ComponentDatePickerDatetimeTemplateLeft' } },
            // 自定义右侧模板
            { i18nKey: 'app.aside.menu.datePickerCustomRightTemplate', routerLink: { name: 'ComponentDatePickerDatetimeTemplateRight' } }
          ]
        }
      ]
    },
    {
      // 周类型
      i18nKey: 'app.aside.menu.datePickerWeekType',
      children: [
        // 绑定值格式
        { i18nKey: 'app.aside.menu.datePickerValueFormat', routerLink: { name: 'ComponentDatePickerWeekBase' } },
        // 可清除
        { i18nKey: 'app.aside.menu.datePickerClearable', routerLink: { name: 'ComponentDatePickerWeekClearable' } },
        // 禁用
        { i18nKey: 'app.aside.menu.datePickerDisabled', routerLink: { name: 'ComponentDatePickerWeekDisabled' } },
        // 多选
        { i18nKey: 'app.aside.menu.datePickerMultiple', routerLink: { name: 'ComponentDatePickerWeekMultiple' } },
        // 自定义周的开始日
        { i18nKey: 'app.aside.menu.datePickerStartDay', routerLink: { name: 'ComponentDatePickerWeekStartDay' } },
        // 自定义返回值
        { i18nKey: 'app.aside.menu.datePickerSelectDay', routerLink: { name: 'ComponentDatePickerWeekSelectDay' } },
        {
          // 快捷按钮
          i18nKey: 'app.aside.menu.datePickerShortcut',
          children: [
            // 内置 Code
            { i18nKey: 'app.aside.menu.datePickerShortcutCode', routerLink: { name: 'ComponentDatePickerWeekShortcutCode' } },
            // 按钮状态颜色
            { i18nKey: 'app.aside.menu.datePickerShortcutStatus', routerLink: { name: 'ComponentDatePickerWeekShortcutStatus' } },
            // 显示位置
            { i18nKey: 'app.aside.menu.datePickerShortcutPosition', routerLink: { name: 'ComponentDatePickerWeekShortcutPosition' } },
            // 自定义按钮
            { i18nKey: 'app.aside.menu.datePickerShortcutCustom', routerLink: { name: 'ComponentDatePickerWeekShortcutCustom' } }
          ]
        },
        // 面板的默认日期
        { i18nKey: 'app.aside.menu.datePickerDefVal', routerLink: { name: 'ComponentDatePickerWeekDefVal' } },
        {
          // 自定义插槽模板
          i18nKey: 'app.aside.menu.datePickerCustomSlotTemplate',
          children: [
            // 自定义顶部模板
            { i18nKey: 'app.aside.menu.datePickerCustomTopTemplate', routerLink: { name: 'ComponentDatePickerWeekTemplateTop' } },
            // 自定义底部模板
            { i18nKey: 'app.aside.menu.datePickerCustomBottomTemplate', routerLink: { name: 'ComponentDatePickerWeekTemplateBottom' } },
            // 自定义左侧模板
            { i18nKey: 'app.aside.menu.datePickerCustomLeftTemplate', routerLink: { name: 'ComponentDatePickerWeekTemplateLeft' } },
            // 自定义右侧模板
            { i18nKey: 'app.aside.menu.datePickerCustomRightTemplate', routerLink: { name: 'ComponentDatePickerWeekTemplateRight' } }
          ]
        }
      ]
    },
    {
      // 月度类型
      i18nKey: 'app.aside.menu.datePickerMonthType',
      children: [
        // 绑定值格式
        { i18nKey: 'app.aside.menu.datePickerValueFormat', routerLink: { name: 'ComponentDatePickerMonthBase' } },
        // 可清除
        { i18nKey: 'app.aside.menu.datePickerClearable', routerLink: { name: 'ComponentDatePickerMonthClearable' } },
        // 多选
        { i18nKey: 'app.aside.menu.datePickerMultiple', routerLink: { name: 'ComponentDatePickerMonthMultiple' } },
        {
          // 掩码输入
          i18nKey: 'app.aside.menu.datePickerMaskedInput',
          children: [
            // 掩码输入
            { i18nKey: 'app.aside.menu.datePickerMaskedInput', routerLink: { name: 'ComponentDatePickerMonthMaskedIsMasked' } },
            // 方向键操作
            { i18nKey: 'app.aside.menu.datePickerArrowKey', routerLink: { name: 'ComponentDatePickerMonthMaskedIsArrow' } },
            // 掩码格式
            { i18nKey: 'app.aside.menu.datePickerMaskFormat', routerLink: { name: 'ComponentDatePickerMonthMaskedFormat' } },
            // 自定义占位符
            { i18nKey: 'app.aside.menu.datePickerMaskPlaceholder', routerLink: { name: 'ComponentDatePickerMonthMaskedMaskPlaceholder' } },
            // 对齐方式
            { i18nKey: 'app.aside.menu.datePickerAlign', routerLink: { name: 'ComponentDatePickerMonthMaskedAlign' } }
          ]
        },
        {
          // 快捷按钮
          i18nKey: 'app.aside.menu.datePickerShortcut',
          children: [
            // 内置 Code
            { i18nKey: 'app.aside.menu.datePickerShortcutCode', routerLink: { name: 'ComponentDatePickerMonthShortcutCode' } },
            // 按钮状态颜色
            { i18nKey: 'app.aside.menu.datePickerShortcutStatus', routerLink: { name: 'ComponentDatePickerMonthShortcutStatus' } },
            // 显示位置
            { i18nKey: 'app.aside.menu.datePickerShortcutPosition', routerLink: { name: 'ComponentDatePickerMonthShortcutPosition' } },
            // 自定义按钮
            { i18nKey: 'app.aside.menu.datePickerShortcutCustom', routerLink: { name: 'ComponentDatePickerMonthShortcutCustom' } }
          ]
        },
        // 面板的默认日期
        { i18nKey: 'app.aside.menu.datePickerDefVal', routerLink: { name: 'ComponentDatePickerMonthDefVal' } }
      ]
    },
    {
      // 季度类型
      i18nKey: 'app.aside.menu.datePickerQuarterType',
      children: [
        // 绑定值格式
        { i18nKey: 'app.aside.menu.datePickerValueFormat', routerLink: { name: 'ComponentDatePickerQuarterBase' } },
        // 可清除
        { i18nKey: 'app.aside.menu.datePickerClearable', routerLink: { name: 'ComponentDatePickerQuarterClearable' } },
        // 多选
        { i18nKey: 'app.aside.menu.datePickerMultiple', routerLink: { name: 'ComponentDatePickerQuarterMultiple' } },
        {
          // 快捷按钮
          i18nKey: 'app.aside.menu.datePickerShortcut',
          children: [
            // 内置 Code
            { i18nKey: 'app.aside.menu.datePickerShortcutCode', routerLink: { name: 'ComponentDatePickerQuarterShortcutCode' } },
            // 按钮状态颜色
            { i18nKey: 'app.aside.menu.datePickerShortcutStatus', routerLink: { name: 'ComponentDatePickerQuarterShortcutStatus' } },
            // 显示位置
            { i18nKey: 'app.aside.menu.datePickerShortcutPosition', routerLink: { name: 'ComponentDatePickerQuarterShortcutPosition' } },
            // 自定义按钮
            { i18nKey: 'app.aside.menu.datePickerShortcutCustom', routerLink: { name: 'ComponentDatePickerQuarterShortcutCustom' } }
          ]
        },
        // 面板的默认日期
        { i18nKey: 'app.aside.menu.datePickerDefVal', routerLink: { name: 'ComponentDatePickerQuarterDefVal' } }
      ]
    },
    {
      // 年度类型
      i18nKey: 'app.aside.menu.datePickerYearType',
      children: [
        // 绑定值格式
        { i18nKey: 'app.aside.menu.datePickerValueFormat', routerLink: { name: 'ComponentDatePickerYearBase' } },
        // 可清除
        { i18nKey: 'app.aside.menu.datePickerClearable', routerLink: { name: 'ComponentDatePickerYearClearable' } },
        // 多选
        { i18nKey: 'app.aside.menu.datePickerMultiple', routerLink: { name: 'ComponentDatePickerYearMultiple' } },
        {
          // 掩码输入
          i18nKey: 'app.aside.menu.datePickerMaskedInput',
          children: [
            // 掩码输入
            { i18nKey: 'app.aside.menu.datePickerMaskedInput', routerLink: { name: 'ComponentDatePickerYearMaskedIsMasked' } },
            // 方向键操作
            { i18nKey: 'app.aside.menu.datePickerArrowKey', routerLink: { name: 'ComponentDatePickerYearMaskedIsArrow' } },
            // 掩码格式
            { i18nKey: 'app.aside.menu.datePickerMaskFormat', routerLink: { name: 'ComponentDatePickerYearMaskedFormat' } },
            // 自定义占位符
            { i18nKey: 'app.aside.menu.datePickerMaskPlaceholder', routerLink: { name: 'ComponentDatePickerYearMaskedMaskPlaceholder' } },
            // 对齐方式
            { i18nKey: 'app.aside.menu.datePickerAlign', routerLink: { name: 'ComponentDatePickerYearMaskedAlign' } }
          ]
        },
        {
          // 快捷按钮
          i18nKey: 'app.aside.menu.datePickerShortcut',
          children: [
            // 内置 Code
            { i18nKey: 'app.aside.menu.datePickerShortcutCode', routerLink: { name: 'ComponentDatePickerYearShortcutCode' } },
            // 按钮状态颜色
            { i18nKey: 'app.aside.menu.datePickerShortcutStatus', routerLink: { name: 'ComponentDatePickerYearShortcutStatus' } },
            // 显示位置
            { i18nKey: 'app.aside.menu.datePickerShortcutPosition', routerLink: { name: 'ComponentDatePickerYearShortcutPosition' } },
            // 自定义按钮
            { i18nKey: 'app.aside.menu.datePickerShortcutCustom', routerLink: { name: 'ComponentDatePickerYearShortcutCustom' } }
          ]
        },
        // 面板的默认日期
        { i18nKey: 'app.aside.menu.datePickerDefVal', routerLink: { name: 'ComponentDatePickerYearDefVal' } }
      ]
    },
    {
      // 功能示例
      i18nKey: 'app.aside.menu.datePickerFeatureExamples',
      children: [
        // 实现日期带小圆点
        { i18nKey: 'app.aside.menu.datePickerFestivalMethod', routerLink: { name: 'ComponentDatePickerFestivalMethod' } },
        // 实现农历及节假日
        { i18nKey: 'app.aside.menu.datePickerHolidaysExample', routerLink: { name: 'ComponentDatePickerHolidays' } }
      ]
    },
    {
      // 快捷按钮指令（全局复用）
      i18nKey: 'app.aside.menu.datePickerShortcutGlobalCommands',
      children: [
        { title: 'API', routerLink: { name: 'GlobalCommandsDatePickerAPI' } },
        // 快捷按钮
        { i18nKey: 'app.aside.menu.datePickerShortcut', routerLink: { name: 'GlobalCommandsDatePickerBase' } }
      ]
    }
  ]
}
