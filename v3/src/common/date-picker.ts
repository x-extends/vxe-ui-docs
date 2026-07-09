import { NavVO } from './nav'

export const datePickerNavConfig: NavVO = {
  title: 'DatePicker 日期选择',
  children: [
    { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'date-picker' } } },
    {
      title: '日期类型',
      children: [
        { title: '尺寸大小', routerLink: { name: 'ComponentDatePickerDateSize' } },
        { title: '绑定值格式', routerLink: { name: 'ComponentDatePickerDateBase' } },
        { title: '显示值格式', routerLink: { name: 'ComponentDatePickerDateLabelFormat' } },
        { title: '可清除', routerLink: { name: 'ComponentDatePickerDateClearable' } },
        { title: '禁用', routerLink: { name: 'ComponentDatePickerDateDisabled' } },
        { title: '查看模式', routerLink: { name: 'ComponentDatePickerDateReadonly' } },
        { title: '禁用输入', routerLink: { name: 'ComponentDatePickerDateEditable' } },
        { title: '多选', routerLink: { name: 'ComponentDatePickerDateMultiple' } },
        { title: '自动关闭', routerLink: { name: 'ComponentDatePickerDateAutoClose' } },
        {
          title: '掩码输入',
          children: [
            { title: '掩码输入', routerLink: { name: 'ComponentDatePickerDateMaskedIsMasked' } },
            { title: '方向键操作', routerLink: { name: 'ComponentDatePickerDateMaskedIsArrow' } },
            { title: '掩码格式', routerLink: { name: 'ComponentDatePickerDateMaskedFormat' } },
            { title: '自定义占位符', routerLink: { name: 'ComponentDatePickerDateMaskedMaskPlaceholder' } },
            { title: '对齐方式', routerLink: { name: 'ComponentDatePickerDateMaskedAlign' } }
          ]
        },
        {
          title: '快捷按钮',
          children: [
            { title: '内置 Code', routerLink: { name: 'ComponentDatePickerDateShortcutCode' } },
            { title: '按钮状态颜色', routerLink: { name: 'ComponentDatePickerDateShortcutStatus' } },
            { title: '显示位置', routerLink: { name: 'ComponentDatePickerDateShortcutPosition' } },
            { title: '自定义按钮', routerLink: { name: 'ComponentDatePickerDateShortcutCustom' } }
          ]
        },
        { title: '限制日期范围', routerLink: { name: 'ComponentDatePickerDateMinMax' } },
        { title: '限制指定日期', routerLink: { name: 'ComponentDatePickerDateDisabledMethod' } },
        { title: '前缀图标', routerLink: { name: 'ComponentDatePickerDatePrefixIcon' } },
        { title: '后缀图标', routerLink: { name: 'ComponentDatePickerDateSuffixIcon' } },
        { title: '面板的默认日期', routerLink: { name: 'ComponentDatePickerDateDefVal' } },
        { title: '面板的触发方式', routerLink: { name: 'ComponentDatePickerDateTrigger' } },
        { title: '小圆点', routerLink: { name: 'ComponentDatePickerDateDot' } },
        { title: '农历及节假日', routerLink: { name: 'ComponentDatePickerDateHolidays' } },
        {
          title: '自定义插槽模板',
          children: [
            { title: '自定义顶部模板', routerLink: { name: 'ComponentDatePickerDateTemplateTop' } },
            { title: '自定义底部模板', routerLink: { name: 'ComponentDatePickerDateTemplateBottom' } },
            { title: '自定义左侧模板', routerLink: { name: 'ComponentDatePickerDateTemplateLeft' } },
            { title: '自定义右侧模板', routerLink: { name: 'ComponentDatePickerDateTemplateRight' } }
          ]
        }
      ]
    },
    {
      title: '时间类型',
      children: [
        { title: '尺寸大小', routerLink: { name: 'ComponentDatePickerTimeSize' } },
        { title: '绑定值格式', routerLink: { name: 'ComponentDatePickerTimeBase' } },
        { title: '可清除', routerLink: { name: 'ComponentDatePickerTimeClearable' } },
        { title: '禁用', routerLink: { name: 'ComponentDatePickerTimeDisabled' } },
        { title: '自定义格式', routerLink: { name: 'ComponentDatePickerTimeValueFormat' } },
        {
          title: '掩码输入',
          children: [
            { title: '掩码输入', routerLink: { name: 'ComponentDatePickerTimeMaskedIsMasked' } },
            { title: '方向键操作', routerLink: { name: 'ComponentDatePickerTimeMaskedIsArrow' } },
            { title: '掩码格式', routerLink: { name: 'ComponentDatePickerTimeMaskedFormat' } },
            { title: '自定义占位符', routerLink: { name: 'ComponentDatePickerTimeMaskedMaskPlaceholder' } },
            { title: '对齐方式', routerLink: { name: 'ComponentDatePickerTimeMaskedAlign' } }
          ]
        },
        {
          title: '快捷按钮',
          children: [
            // { title: '内置 Code', routerLink: { name: 'ComponentDatePickerTimeShortcutCode' } },
            // { title: '按钮状态颜色', routerLink: { name: 'ComponentDatePickerTimeShortcutStatus' } },
            // { title: '显示位置', routerLink: { name: 'ComponentDatePickerTimeShortcutPosition' } },
            { title: '自定义按钮', routerLink: { name: 'ComponentDatePickerTimeShortcutCustom' } }
          ]
        },
        { title: '面板的默认日期', routerLink: { name: 'ComponentDatePickerTimeDefVal' } },
        { title: '禁用时间选项', routerLink: { name: 'ComponentDatePickerTimeDisabledOpt' } },
        { title: '自定义时间选项', routerLink: { name: 'ComponentDatePickerTimeOpts' } },
        {
          title: '自定义插槽模板',
          children: [
            { title: '自定义顶部模板', routerLink: { name: 'ComponentDatePickerTimeTemplateTop' } },
            { title: '自定义底部模板', routerLink: { name: 'ComponentDatePickerTimeTemplateBottom' } },
            { title: '自定义左侧模板', routerLink: { name: 'ComponentDatePickerTimeTemplateLeft' } },
            { title: '自定义右侧模板', routerLink: { name: 'ComponentDatePickerTimeTemplateRight' } }
          ]
        }
      ]
    },
    {
      title: '日期带时间类型',
      children: [
        { title: '绑定值格式', routerLink: { name: 'ComponentDatePickerDatetimeBase' } },
        { title: '可清除', routerLink: { name: 'ComponentDatePickerDatetimeClearable' } },
        { title: '禁用', routerLink: { name: 'ComponentDatePickerDatetimeDisabled' } },
        { title: '禁止输入', routerLink: { name: 'ComponentDatePickerDatetimeEditable' } },
        { title: '多选', routerLink: { name: 'ComponentDatePickerDatetimeMultiple' } },
        { title: '自定义格式', routerLink: { name: 'ComponentDatePickerDatetimeValueFormat' } },
        {
          title: '掩码输入',
          children: [
            { title: '掩码输入', routerLink: { name: 'ComponentDatePickerDatetimeMaskedIsMasked' } },
            { title: '方向键操作', routerLink: { name: 'ComponentDatePickerDatetimeMaskedIsArrow' } },
            { title: '掩码格式', routerLink: { name: 'ComponentDatePickerDatetimeMaskedFormat' } },
            { title: '自定义占位符', routerLink: { name: 'ComponentDatePickerDatetimeMaskedMaskPlaceholder' } },
            { title: '对齐方式', routerLink: { name: 'ComponentDatePickerDatetimeMaskedAlign' } }
          ]
        },
        {
          title: '快捷按钮',
          children: [
            { title: '内置 Code', routerLink: { name: 'ComponentDatePickerDatetimeShortcutCode' } },
            { title: '按钮状态颜色', routerLink: { name: 'ComponentDatePickerDatetimeShortcutStatus' } },
            { title: '显示位置', routerLink: { name: 'ComponentDatePickerDatetimeShortcutPosition' } },
            { title: '自定义按钮', routerLink: { name: 'ComponentDatePickerDatetimeShortcutCustom' } }
          ]
        },
        { title: '面板的默认日期', routerLink: { name: 'ComponentDatePickerDatetimeDefVal' } },
        { title: '禁用时间选项', routerLink: { name: 'ComponentDatePickerDatetimeDisabledOpt' } },
        { title: '自定义时间选项', routerLink: { name: 'ComponentDatePickerDatetimeOpts' } },
        { title: '小圆点', routerLink: { name: 'ComponentDatePickerDatetimeDot' } },
        { title: '农历及节假日', routerLink: { name: 'ComponentDatePickerDatetimeHolidays' } },
        {
          title: '自定义插槽模板',
          children: [
            { title: '自定义顶部模板', routerLink: { name: 'ComponentDatePickerDatetimeTemplateTop' } },
            { title: '自定义底部模板', routerLink: { name: 'ComponentDatePickerDatetimeTemplateBottom' } },
            { title: '自定义左侧模板', routerLink: { name: 'ComponentDatePickerDatetimeTemplateLeft' } },
            { title: '自定义右侧模板', routerLink: { name: 'ComponentDatePickerDatetimeTemplateRight' } }
          ]
        }
      ]
    },
    {
      title: '周类型',
      children: [
        { title: '绑定值格式', routerLink: { name: 'ComponentDatePickerWeekBase' } },
        { title: '可清除', routerLink: { name: 'ComponentDatePickerWeekClearable' } },
        { title: '禁用', routerLink: { name: 'ComponentDatePickerWeekDisabled' } },
        { title: '多选', routerLink: { name: 'ComponentDatePickerWeekMultiple' } },
        { title: '自定义周的开始日', routerLink: { name: 'ComponentDatePickerWeekStartDay' } },
        { title: '自定义返回值', routerLink: { name: 'ComponentDatePickerWeekSelectDay' } },
        {
          title: '快捷按钮',
          children: [
            { title: '内置 Code', routerLink: { name: 'ComponentDatePickerWeekShortcutCode' } },
            { title: '按钮状态颜色', routerLink: { name: 'ComponentDatePickerWeekShortcutStatus' } },
            { title: '显示位置', routerLink: { name: 'ComponentDatePickerWeekShortcutPosition' } },
            { title: '自定义按钮', routerLink: { name: 'ComponentDatePickerWeekShortcutCustom' } }
          ]
        },
        { title: '面板的默认日期', routerLink: { name: 'ComponentDatePickerWeekDefVal' } },
        {
          title: '自定义插槽模板',
          children: [
            { title: '自定义顶部模板', routerLink: { name: 'ComponentDatePickerWeekTemplateTop' } },
            { title: '自定义底部模板', routerLink: { name: 'ComponentDatePickerWeekTemplateBottom' } },
            { title: '自定义左侧模板', routerLink: { name: 'ComponentDatePickerWeekTemplateLeft' } },
            { title: '自定义右侧模板', routerLink: { name: 'ComponentDatePickerWeekTemplateRight' } }
          ]
        }
      ]
    },
    {
      title: '月度类型',
      children: [
        { title: '绑定值格式', routerLink: { name: 'ComponentDatePickerMonthBase' } },
        { title: '可清除', routerLink: { name: 'ComponentDatePickerMonthClearable' } },
        { title: '多选', routerLink: { name: 'ComponentDatePickerMonthMultiple' } },
        {
          title: '掩码输入',
          children: [
            { title: '掩码输入', routerLink: { name: 'ComponentDatePickerMonthMaskedIsMasked' } },
            { title: '方向键操作', routerLink: { name: 'ComponentDatePickerMonthMaskedIsArrow' } },
            { title: '掩码格式', routerLink: { name: 'ComponentDatePickerMonthMaskedFormat' } },
            { title: '自定义占位符', routerLink: { name: 'ComponentDatePickerMonthMaskedMaskPlaceholder' } },
            { title: '对齐方式', routerLink: { name: 'ComponentDatePickerMonthMaskedAlign' } }
          ]
        },
        {
          title: '快捷按钮',
          children: [
            { title: '内置 Code', routerLink: { name: 'ComponentDatePickerMonthShortcutCode' } },
            { title: '按钮状态颜色', routerLink: { name: 'ComponentDatePickerMonthShortcutStatus' } },
            { title: '显示位置', routerLink: { name: 'ComponentDatePickerMonthShortcutPosition' } },
            { title: '自定义按钮', routerLink: { name: 'ComponentDatePickerMonthShortcutCustom' } }
          ]
        },
        { title: '面板的默认日期', routerLink: { name: 'ComponentDatePickerMonthDefVal' } }
      ]
    },
    {
      title: '季度类型',
      children: [
        { title: '绑定值格式', routerLink: { name: 'ComponentDatePickerQuarterBase' } },
        { title: '可清除', routerLink: { name: 'ComponentDatePickerQuarterClearable' } },
        { title: '多选', routerLink: { name: 'ComponentDatePickerQuarterMultiple' } },
        {
          title: '快捷按钮',
          children: [
            { title: '内置 Code', routerLink: { name: 'ComponentDatePickerQuarterShortcutCode' } },
            { title: '按钮状态颜色', routerLink: { name: 'ComponentDatePickerQuarterShortcutStatus' } },
            { title: '显示位置', routerLink: { name: 'ComponentDatePickerQuarterShortcutPosition' } },
            { title: '自定义按钮', routerLink: { name: 'ComponentDatePickerQuarterShortcutCustom' } }
          ]
        },
        { title: '面板的默认日期', routerLink: { name: 'ComponentDatePickerQuarterDefVal' } }
      ]
    },
    {
      title: '年度类型',
      children: [
        { title: '绑定值格式', routerLink: { name: 'ComponentDatePickerYearBase' } },
        { title: '可清除', routerLink: { name: 'ComponentDatePickerYearClearable' } },
        { title: '多选', routerLink: { name: 'ComponentDatePickerYearMultiple' } },
        {
          title: '掩码输入',
          children: [
            { title: '掩码输入', routerLink: { name: 'ComponentDatePickerYearMaskedIsMasked' } },
            { title: '方向键操作', routerLink: { name: 'ComponentDatePickerYearMaskedIsArrow' } },
            { title: '掩码格式', routerLink: { name: 'ComponentDatePickerYearMaskedFormat' } },
            { title: '自定义占位符', routerLink: { name: 'ComponentDatePickerYearMaskedMaskPlaceholder' } },
            { title: '对齐方式', routerLink: { name: 'ComponentDatePickerYearMaskedAlign' } }
          ]
        },
        {
          title: '快捷按钮',
          children: [
            { title: '内置 Code', routerLink: { name: 'ComponentDatePickerYearShortcutCode' } },
            { title: '按钮状态颜色', routerLink: { name: 'ComponentDatePickerYearShortcutStatus' } },
            { title: '显示位置', routerLink: { name: 'ComponentDatePickerYearShortcutPosition' } },
            { title: '自定义按钮', routerLink: { name: 'ComponentDatePickerYearShortcutCustom' } }
          ]
        },
        { title: '面板的默认日期', routerLink: { name: 'ComponentDatePickerYearDefVal' } }
      ]
    },
    {
      title: '功能示例',
      children: [
        { title: '实现日期带小圆点', routerLink: { name: 'ComponentDatePickerFestivalMethod' } },
        { title: '实现农历及节假日', routerLink: { name: 'ComponentDatePickerHolidays' } }
      ]
    },
    {
      title: '快捷按钮指令（全局复用）',
      children: [
        { title: 'API', routerLink: { name: 'GlobalCommandsDatePickerAPI' } },
        { title: '快捷按钮', routerLink: { name: 'GlobalCommandsDatePickerBase' } }
      ]
    }
  ]
}
