import { RouteRecordRaw } from 'vue-router'

import RouteLayout from '@/components/RouteLayout.vue'

export const datePickerRouteConfig: RouteRecordRaw = {
  path: 'date-picker',
  component: RouteLayout,
  children: [
    {
      path: 'date',
      component: RouteLayout,
      children: [
        { path: 'size', name: 'ComponentDatePickerDateSize', component: () => import('@/views/date-picker/date/size/CodeExample.vue') },
        { path: 'base', name: 'ComponentDatePickerDateBase', component: () => import('@/views/date-picker/date/base/CodeExample.vue') },
        { path: 'labelFormat', name: 'ComponentDatePickerDateLabelFormat', component: () => import('@/views/date-picker/date/labelFormat/CodeExample.vue') },
        { path: 'clearable', name: 'ComponentDatePickerDateClearable', component: () => import('@/views/date-picker/date/clearable/CodeExample.vue') },
        { path: 'disabled', name: 'ComponentDatePickerDateDisabled', component: () => import('@/views/date-picker/date/disabled/CodeExample.vue') },
        { path: 'readonly', name: 'ComponentDatePickerDateReadonly', component: () => import('@/views/date-picker/date/readonly/CodeExample.vue') },
        { path: 'editable', name: 'ComponentDatePickerDateEditable', component: () => import('@/views/date-picker/date/editable/CodeExample.vue') },
        {
          path: 'multiple',
          name: 'ComponentDatePickerDateMultiple',
          component: () => import('@/views/date-picker/date/multiple/CodeExample.vue')
        },
        {
          path: 'autoClose',
          name: 'ComponentDatePickerDateAutoClose',
          component: () => import('@/views/date-picker/date/autoClose/CodeExample.vue')
        },
        {
          path: 'masked',
          component: RouteLayout,
          children: [
            { path: 'isMasked', name: 'ComponentDatePickerDateMaskedIsMasked', component: () => import('@/views/date-picker/date/masked/isMasked/CodeExample.vue') },
            { path: 'isArrow', name: 'ComponentDatePickerDateMaskedIsArrow', component: () => import('@/views/date-picker/date/masked/isArrow/CodeExample.vue') },
            { path: 'format', name: 'ComponentDatePickerDateMaskedFormat', component: () => import('@/views/date-picker/date/masked/format/CodeExample.vue') },
            { path: 'maskPlaceholder', name: 'ComponentDatePickerDateMaskedMaskPlaceholder', component: () => import('@/views/date-picker/date/masked/maskPlaceholder/CodeExample.vue') },
            { path: 'align', name: 'ComponentDatePickerDateMaskedAlign', component: () => import('@/views/date-picker/date/masked/align/CodeExample.vue') }
          ]
        },
        {
          path: 'shortcut',
          component: RouteLayout,
          children: [
            {
              path: 'code',
              name: 'ComponentDatePickerDateShortcutCode',
              component: () => import('@/views/date-picker/date/shortcut/code/CodeExample.vue')
            },
            {
              path: 'status',
              name: 'ComponentDatePickerDateShortcutStatus',
              component: () => import('@/views/date-picker/date/shortcut/status/CodeExample.vue')
            },
            {
              path: 'position',
              name: 'ComponentDatePickerDateShortcutPosition',
              component: () => import('@/views/date-picker/date/shortcut/position/CodeExample.vue')
            },
            {
              path: 'custom',
              name: 'ComponentDatePickerDateShortcutCustom',
              component: () => import('@/views/date-picker/date/shortcut/custom/CodeExample.vue')
            }
          ]
        },
        { path: 'minMax', name: 'ComponentDatePickerDateMinMax', component: () => import('@/views/date-picker/date/minMax/CodeExample.vue') },
        { path: 'disabledMethod', name: 'ComponentDatePickerDateDisabledMethod', component: () => import('@/views/date-picker/date/disabledMethod/CodeExample.vue') },
        { path: 'prefixIcon', name: 'ComponentDatePickerDatePrefixIcon', component: () => import('@/views/date-picker/date/prefixIcon/CodeExample.vue') },
        { path: 'suffixIcon', name: 'ComponentDatePickerDateSuffixIcon', component: () => import('@/views/date-picker/date/suffixIcon/CodeExample.vue') },
        { path: 'defVal', name: 'ComponentDatePickerDateDefVal', component: () => import('@/views/date-picker/date/defVal/CodeExample.vue') },
        { path: 'trigger', name: 'ComponentDatePickerDateTrigger', component: () => import('@/views/date-picker/date/trigger/CodeExample.vue') },
        { path: 'dot', name: 'ComponentDatePickerDateDot', component: () => import('@/views/date-picker/date/dot/CodeExample.vue') },
        { path: 'holidays', name: 'ComponentDatePickerDateHolidays', component: () => import('@/views/date-picker/date/holidays/CodeExample.vue') },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            {
              path: 'top',
              name: 'ComponentDatePickerDateTemplateTop',
              component: () => import('@/views/date-picker/date/template/top/CodeExample.vue')
            },
            {
              path: 'bottom',
              name: 'ComponentDatePickerDateTemplateBottom',
              component: () => import('@/views/date-picker/date/template/bottom/CodeExample.vue')
            },
            {
              path: 'left',
              name: 'ComponentDatePickerDateTemplateLeft',
              component: () => import('@/views/date-picker/date/template/left/CodeExample.vue')
            },
            {
              path: 'right',
              name: 'ComponentDatePickerDateTemplateRight',
              component: () => import('@/views/date-picker/date/template/right/CodeExample.vue')
            }
          ]
        }
      ]
    },
    {
      path: 'week',
      component: RouteLayout,
      children: [
        {
          path: 'base',
          name: 'ComponentDatePickerWeekBase',
          component: () => import('@/views/date-picker/week/base/CodeExample.vue')
        },
        { path: 'clearable', name: 'ComponentDatePickerWeekClearable', component: () => import('@/views/date-picker/week/clearable/CodeExample.vue') },
        {
          path: 'disabled',
          name: 'ComponentDatePickerWeekDisabled',
          component: () => import('@/views/date-picker/week/disabled/CodeExample.vue')
        },
        {
          path: 'multiple',
          name: 'ComponentDatePickerWeekMultiple',
          component: () => import('@/views/date-picker/week/multiple/CodeExample.vue')
        },
        {
          path: 'startDay',
          name: 'ComponentDatePickerWeekStartDay',
          component: () => import('@/views/date-picker/week/startDay/CodeExample.vue')
        },
        {
          path: 'selectDay',
          name: 'ComponentDatePickerWeekSelectDay',
          component: () => import('@/views/date-picker/week/selectDay/CodeExample.vue')
        },
        {
          path: 'shortcut',
          component: RouteLayout,
          children: [
            {
              path: 'code',
              name: 'ComponentDatePickerWeekShortcutCode',
              component: () => import('@/views/date-picker/week/shortcut/code/CodeExample.vue')
            },
            {
              path: 'status',
              name: 'ComponentDatePickerWeekShortcutStatus',
              component: () => import('@/views/date-picker/week/shortcut/status/CodeExample.vue')
            },
            {
              path: 'position',
              name: 'ComponentDatePickerWeekShortcutPosition',
              component: () => import('@/views/date-picker/week/shortcut/position/CodeExample.vue')
            },
            {
              path: 'custom',
              name: 'ComponentDatePickerWeekShortcutCustom',
              component: () => import('@/views/date-picker/week/shortcut/custom/CodeExample.vue')
            }
          ]
        },
        { path: 'defVal', name: 'ComponentDatePickerWeekDefVal', component: () => import('@/views/date-picker/week/defVal/CodeExample.vue') },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            {
              path: 'top',
              name: 'ComponentDatePickerWeekTemplateTop',
              component: () => import('@/views/date-picker/week/template/top/CodeExample.vue')
            },
            {
              path: 'bottom',
              name: 'ComponentDatePickerWeekTemplateBottom',
              component: () => import('@/views/date-picker/week/template/bottom/CodeExample.vue')
            },
            {
              path: 'left',
              name: 'ComponentDatePickerWeekTemplateLeft',
              component: () => import('@/views/date-picker/week/template/left/CodeExample.vue')
            },
            {
              path: 'right',
              name: 'ComponentDatePickerWeekTemplateRight',
              component: () => import('@/views/date-picker/week/template/right/CodeExample.vue')
            }
          ]
        }
      ]
    },
    {
      path: 'month',
      component: RouteLayout,
      children: [
        {
          path: 'base',
          name: 'ComponentDatePickerMonthBase',
          component: () => import('@/views/date-picker/month/base/CodeExample.vue')
        },
        { path: 'clearable', name: 'ComponentDatePickerMonthClearable', component: () => import('@/views/date-picker/month/clearable/CodeExample.vue') },
        {
          path: 'multiple',
          name: 'ComponentDatePickerMonthMultiple',
          component: () => import('@/views/date-picker/month/multiple/CodeExample.vue')
        },
        { path: 'defVal', name: 'ComponentDatePickerMonthDefVal', component: () => import('@/views/date-picker/month/defVal/CodeExample.vue') },
        {
          path: 'masked',
          component: RouteLayout,
          children: [
            { path: 'isMasked', name: 'ComponentDatePickerMonthMaskedIsMasked', component: () => import('@/views/date-picker/month/masked/isMasked/CodeExample.vue') },
            { path: 'isArrow', name: 'ComponentDatePickerMonthMaskedIsArrow', component: () => import('@/views/date-picker/month/masked/isArrow/CodeExample.vue') },
            { path: 'format', name: 'ComponentDatePickerMonthMaskedFormat', component: () => import('@/views/date-picker/month/masked/format/CodeExample.vue') },
            { path: 'maskPlaceholder', name: 'ComponentDatePickerMonthMaskedMaskPlaceholder', component: () => import('@/views/date-picker/month/masked/maskPlaceholder/CodeExample.vue') },
            { path: 'align', name: 'ComponentDatePickerMonthMaskedAlign', component: () => import('@/views/date-picker/month/masked/align/CodeExample.vue') }
          ]
        },
        {
          path: 'shortcut',
          component: RouteLayout,
          children: [
            {
              path: 'code',
              name: 'ComponentDatePickerMonthShortcutCode',
              component: () => import('@/views/date-picker/month/shortcut/code/CodeExample.vue')
            },
            {
              path: 'status',
              name: 'ComponentDatePickerMonthShortcutStatus',
              component: () => import('@/views/date-picker/month/shortcut/status/CodeExample.vue')
            },
            {
              path: 'position',
              name: 'ComponentDatePickerMonthShortcutPosition',
              component: () => import('@/views/date-picker/month/shortcut/position/CodeExample.vue')
            },
            {
              path: 'custom',
              name: 'ComponentDatePickerMonthShortcutCustom',
              component: () => import('@/views/date-picker/month/shortcut/custom/CodeExample.vue')
            }
          ]
        }
      ]
    },
    {
      path: 'quarter',
      component: RouteLayout,
      children: [
        {
          path: 'base',
          name: 'ComponentDatePickerQuarterBase',
          component: () => import('@/views/date-picker/quarter/base/CodeExample.vue')
        },
        { path: 'clearable', name: 'ComponentDatePickerQuarterClearable', component: () => import('@/views/date-picker/quarter/clearable/CodeExample.vue') },
        {
          path: 'multiple',
          name: 'ComponentDatePickerQuarterMultiple',
          component: () => import('@/views/date-picker/quarter/multiple/CodeExample.vue')
        },
        { path: 'defVal', name: 'ComponentDatePickerQuarterDefVal', component: () => import('@/views/date-picker/quarter/defVal/CodeExample.vue') },
        {
          path: 'shortcut',
          component: RouteLayout,
          children: [
            {
              path: 'code',
              name: 'ComponentDatePickerQuarterShortcutCode',
              component: () => import('@/views/date-picker/quarter/shortcut/code/CodeExample.vue')
            },
            {
              path: 'status',
              name: 'ComponentDatePickerQuarterShortcutStatus',
              component: () => import('@/views/date-picker/quarter/shortcut/status/CodeExample.vue')
            },
            {
              path: 'position',
              name: 'ComponentDatePickerQuarterShortcutPosition',
              component: () => import('@/views/date-picker/quarter/shortcut/position/CodeExample.vue')
            },
            {
              path: 'custom',
              name: 'ComponentDatePickerQuarterShortcutCustom',
              component: () => import('@/views/date-picker/quarter/shortcut/custom/CodeExample.vue')
            }
          ]
        }
      ]
    },
    {
      path: 'year',
      component: RouteLayout,
      children: [
        {
          path: 'base',
          name: 'ComponentDatePickerYearBase',
          component: () => import('@/views/date-picker/year/base/CodeExample.vue')
        },
        { path: 'clearable', name: 'ComponentDatePickerYearClearable', component: () => import('@/views/date-picker/year/clearable/CodeExample.vue') },
        {
          path: 'multiple',
          name: 'ComponentDatePickerYearMultiple',
          component: () => import('@/views/date-picker/year/multiple/CodeExample.vue')
        },
        { path: 'defVal', name: 'ComponentDatePickerYearDefVal', component: () => import('@/views/date-picker/year/defVal/CodeExample.vue') },
        {
          path: 'masked',
          component: RouteLayout,
          children: [
            { path: 'isMasked', name: 'ComponentDatePickerYearMaskedIsMasked', component: () => import('@/views/date-picker/year/masked/isMasked/CodeExample.vue') },
            { path: 'isArrow', name: 'ComponentDatePickerYearMaskedIsArrow', component: () => import('@/views/date-picker/year/masked/isArrow/CodeExample.vue') },
            { path: 'format', name: 'ComponentDatePickerYearMaskedFormat', component: () => import('@/views/date-picker/year/masked/format/CodeExample.vue') },
            { path: 'maskPlaceholder', name: 'ComponentDatePickerYearMaskedMaskPlaceholder', component: () => import('@/views/date-picker/year/masked/maskPlaceholder/CodeExample.vue') },
            { path: 'align', name: 'ComponentDatePickerYearMaskedAlign', component: () => import('@/views/date-picker/year/masked/align/CodeExample.vue') }
          ]
        },
        {
          path: 'shortcut',
          component: RouteLayout,
          children: [
            {
              path: 'code',
              name: 'ComponentDatePickerYearShortcutCode',
              component: () => import('@/views/date-picker/year/shortcut/code/CodeExample.vue')
            },
            {
              path: 'status',
              name: 'ComponentDatePickerYearShortcutStatus',
              component: () => import('@/views/date-picker/year/shortcut/status/CodeExample.vue')
            },
            {
              path: 'position',
              name: 'ComponentDatePickerYearShortcutPosition',
              component: () => import('@/views/date-picker/year/shortcut/position/CodeExample.vue')
            },
            {
              path: 'custom',
              name: 'ComponentDatePickerYearShortcutCustom',
              component: () => import('@/views/date-picker/year/shortcut/custom/CodeExample.vue')
            }
          ]
        }
      ]
    },
    {
      path: 'time',
      component: RouteLayout,
      children: [
        { path: 'size', name: 'ComponentDatePickerTimeSize', component: () => import('@/views/date-picker/time/size/CodeExample.vue') },
        {
          path: 'base',
          name: 'ComponentDatePickerTimeBase',
          component: () => import('@/views/date-picker/time/base/CodeExample.vue')
        },
        {
          path: 'disabled',
          name: 'ComponentDatePickerTimeDisabled',
          component: () => import('@/views/date-picker/time/disabled/CodeExample.vue')
        },
        { path: 'clearable', name: 'ComponentDatePickerTimeClearable', component: () => import('@/views/date-picker/time/clearable/CodeExample.vue') },
        {
          path: 'valueFormat',
          name: 'ComponentDatePickerTimeValueFormat',
          component: () => import('@/views/date-picker/time/valueFormat/CodeExample.vue')
        },
        {
          path: 'masked',
          component: RouteLayout,
          children: [
            { path: 'isMasked', name: 'ComponentDatePickerTimeMaskedIsMasked', component: () => import('@/views/date-picker/time/masked/isMasked/CodeExample.vue') },
            { path: 'isArrow', name: 'ComponentDatePickerTimeMaskedIsArrow', component: () => import('@/views/date-picker/time/masked/isArrow/CodeExample.vue') },
            { path: 'format', name: 'ComponentDatePickerTimeMaskedFormat', component: () => import('@/views/date-picker/time/masked/format/CodeExample.vue') },
            { path: 'maskPlaceholder', name: 'ComponentDatePickerTimeMaskedMaskPlaceholder', component: () => import('@/views/date-picker/time/masked/maskPlaceholder/CodeExample.vue') },
            { path: 'align', name: 'ComponentDatePickerTimeMaskedAlign', component: () => import('@/views/date-picker/time/masked/align/CodeExample.vue') }
          ]
        },
        {
          path: 'shortcut',
          component: RouteLayout,
          children: [
            // {
            //   path: 'code',
            //   name: 'ComponentDatePickerTimeShortcutCode',
            //   component: () => import('@/views/date-picker/time/shortcut/code/CodeExample.vue')
            // },
            // {
            //   path: 'status',
            //   name: 'ComponentDatePickerTimeShortcutStatus',
            //   component: () => import('@/views/date-picker/time/shortcut/status/CodeExample.vue')
            // },
            // {
            //   path: 'position',
            //   name: 'ComponentDatePickerTimeShortcutPosition',
            //   component: () => import('@/views/date-picker/time/shortcut/position/CodeExample.vue')
            // },
            {
              path: 'custom',
              name: 'ComponentDatePickerTimeShortcutCustom',
              component: () => import('@/views/date-picker/time/shortcut/custom/CodeExample.vue')
            }
          ]
        },
        { path: 'defVal', name: 'ComponentDatePickerTimeDefVal', component: () => import('@/views/date-picker/time/defVal/CodeExample.vue') },
        { path: 'disabledOpt', name: 'ComponentDatePickerTimeDisabledOpt', component: () => import('@/views/date-picker/time/disabledOpt/CodeExample.vue') },
        { path: 'opts', name: 'ComponentDatePickerTimeOpts', component: () => import('@/views/date-picker/time/opts/CodeExample.vue') },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            {
              path: 'top',
              name: 'ComponentDatePickerTimeTemplateTop',
              component: () => import('@/views/date-picker/time/template/top/CodeExample.vue')
            },
            {
              path: 'bottom',
              name: 'ComponentDatePickerTimeTemplateBottom',
              component: () => import('@/views/date-picker/time/template/bottom/CodeExample.vue')
            },
            {
              path: 'left',
              name: 'ComponentDatePickerTimeTemplateLeft',
              component: () => import('@/views/date-picker/time/template/left/CodeExample.vue')
            },
            {
              path: 'right',
              name: 'ComponentDatePickerTimeTemplateRight',
              component: () => import('@/views/date-picker/time/template/right/CodeExample.vue')
            }
          ]
        }
      ]
    },
    {
      path: 'datetime',
      component: RouteLayout,
      children: [
        {
          path: 'base',
          name: 'ComponentDatePickerDatetimeBase',
          component: () => import('@/views/date-picker/datetime/base/CodeExample.vue')
        },
        {
          path: 'disabled',
          name: 'ComponentDatePickerDatetimeDisabled',
          component: () => import('@/views/date-picker/datetime/disabled/CodeExample.vue')
        },
        { path: 'editable', name: 'ComponentDatePickerDatetimeEditable', component: () => import('@/views/date-picker/datetime/editable/CodeExample.vue') },
        { path: 'clearable', name: 'ComponentDatePickerDatetimeClearable', component: () => import('@/views/date-picker/datetime/clearable/CodeExample.vue') },
        {
          path: 'multiple',
          name: 'ComponentDatePickerDatetimeMultiple',
          component: () => import('@/views/date-picker/datetime/multiple/CodeExample.vue')
        },
        {
          path: 'valueFormat',
          name: 'ComponentDatePickerDatetimeValueFormat',
          component: () => import('@/views/date-picker/datetime/valueFormat/CodeExample.vue')
        },
        {
          path: 'masked',
          component: RouteLayout,
          children: [
            { path: 'isMasked', name: 'ComponentDatePickerDatetimeMaskedIsMasked', component: () => import('@/views/date-picker/datetime/masked/isMasked/CodeExample.vue') },
            { path: 'isArrow', name: 'ComponentDatePickerDatetimeMaskedIsArrow', component: () => import('@/views/date-picker/datetime/masked/isArrow/CodeExample.vue') },
            { path: 'format', name: 'ComponentDatePickerDatetimeMaskedFormat', component: () => import('@/views/date-picker/datetime/masked/format/CodeExample.vue') },
            { path: 'maskPlaceholder', name: 'ComponentDatePickerDatetimeMaskedMaskPlaceholder', component: () => import('@/views/date-picker/datetime/masked/maskPlaceholder/CodeExample.vue') },
            { path: 'align', name: 'ComponentDatePickerDatetimeMaskedAlign', component: () => import('@/views/date-picker/datetime/masked/align/CodeExample.vue') }
          ]
        },
        {
          path: 'shortcut',
          component: RouteLayout,
          children: [
            {
              path: 'code',
              name: 'ComponentDatePickerDatetimeShortcutCode',
              component: () => import('@/views/date-picker/datetime/shortcut/code/CodeExample.vue')
            },
            {
              path: 'status',
              name: 'ComponentDatePickerDatetimeShortcutStatus',
              component: () => import('@/views/date-picker/datetime/shortcut/status/CodeExample.vue')
            },
            {
              path: 'position',
              name: 'ComponentDatePickerDatetimeShortcutPosition',
              component: () => import('@/views/date-picker/datetime/shortcut/position/CodeExample.vue')
            },
            {
              path: 'custom',
              name: 'ComponentDatePickerDatetimeShortcutCustom',
              component: () => import('@/views/date-picker/datetime/shortcut/custom/CodeExample.vue')
            }
          ]
        },
        { path: 'defVal', name: 'ComponentDatePickerDatetimeDefVal', component: () => import('@/views/date-picker/datetime/defVal/CodeExample.vue') },
        { path: 'disabledOpt', name: 'ComponentDatePickerDatetimeDisabledOpt', component: () => import('@/views/date-picker/datetime/disabledOpt/CodeExample.vue') },
        { path: 'opts', name: 'ComponentDatePickerDatetimeOpts', component: () => import('@/views/date-picker/datetime/opts/CodeExample.vue') },
        { path: 'dot', name: 'ComponentDatePickerDatetimeDot', component: () => import('@/views/date-picker/datetime/dot/CodeExample.vue') },
        { path: 'holidays', name: 'ComponentDatePickerDatetimeHolidays', component: () => import('@/views/date-picker/datetime/holidays/CodeExample.vue') },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            {
              path: 'top',
              name: 'ComponentDatePickerDatetimeTemplateTop',
              component: () => import('@/views/date-picker/datetime/template/top/CodeExample.vue')
            },
            {
              path: 'bottom',
              name: 'ComponentDatePickerDatetimeTemplateBottom',
              component: () => import('@/views/date-picker/datetime/template/bottom/CodeExample.vue')
            },
            {
              path: 'left',
              name: 'ComponentDatePickerDatetimeTemplateLeft',
              component: () => import('@/views/date-picker/datetime/template/left/CodeExample.vue')
            },
            {
              path: 'right',
              name: 'ComponentDatePickerDatetimeTemplateRight',
              component: () => import('@/views/date-picker/datetime/template/right/CodeExample.vue')
            }
          ]
        }
      ]
    },
    {
      path: 'festivalMethod',
      name: 'ComponentDatePickerFestivalMethod',
      component: () => import('@/views/date-picker/festivalMethod/CodeExample.vue')
    },
    {
      path: 'holidays',
      name: 'ComponentDatePickerHolidays',
      component: () => import('@/views/date-picker/holidays/CodeExample.vue')
    }
  ]
}
