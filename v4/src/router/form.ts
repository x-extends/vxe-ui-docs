import { RouteRecordRaw } from 'vue-router'

import RouteLayout from '@/components/RouteLayout.vue'

export const formRouteConfig: RouteRecordRaw = {
  path: 'form',
  component: RouteLayout,
  children: [
    {
      path: 'basics',
      component: RouteLayout,
      children: [
        {
          path: 'base',
          name: 'ComponentFormBasicsBase',
          component: () => import('@/views/form/basics/base/CodeExample.vue')
        },
        {
          path: 'size',
          name: 'ComponentFormBasicsSize',
          component: () => import('@/views/form/basics/size/CodeExample.vue')
        },
        {
          path: 'field',
          name: 'ComponentFormBasicsField',
          component: () => import('@/views/form/basics/field/CodeExample.vue')
        },
        {
          path: 'colon',
          name: 'ComponentFormBasicsColon',
          component: () => import('@/views/form/basics/colon/CodeExample.vue')
        },
        {
          path: 'padding',
          name: 'ComponentFormBasicsPadding',
          component: () => import('@/views/form/basics/padding/CodeExample.vue')
        },
        {
          path: 'bold',
          name: 'ComponentFormBasicsBold',
          component: () => import('@/views/form/basics/bold/CodeExample.vue')
        },
        {
          path: 'titleAlign',
          name: 'ComponentFormBasicsTitleAlign',
          component: () => import('@/views/form/basics/titleAlign/CodeExample.vue')
        },
        {
          path: 'align',
          name: 'ComponentFormBasicsAlign',
          component: () => import('@/views/form/basics/align/CodeExample.vue')
        },
        {
          path: 'titlePrefix',
          name: 'ComponentFormBasicsTitlePrefix',
          component: () => import('@/views/form/basics/titlePrefix/CodeExample.vue')
        },
        {
          path: 'titleSuffix',
          name: 'ComponentFormBasicsTitleSuffix',
          component: () => import('@/views/form/basics/titleSuffix/CodeExample.vue')
        },
        {
          path: 'width',
          name: 'ComponentFormBasicsWidth',
          component: () => import('@/views/form/basics/width/CodeExample.vue')
        },
        {
          path: 'overflow',
          name: 'ComponentFormBasicsOverflow',
          component: () => import('@/views/form/basics/overflow/CodeExample.vue')
        },
        {
          path: 'border',
          name: 'ComponentFormBasicsBorder',
          component: () => import('@/views/form/basics/border/CodeExample.vue')
        },
        {
          path: 'titleBackground',
          name: 'ComponentFormBasicsTitleBackground',
          component: () => import('@/views/form/basics/titleBackground/CodeExample.vue')
        },
        {
          path: 'children',
          name: 'ComponentFormBasicsChildren',
          component: () => import('@/views/form/basics/children/CodeExample.vue')
        },
        {
          path: 'group',
          name: 'ComponentFormBasicsGroup',
          component: () => import('@/views/form/basics/group/CodeExample.vue')
        },
        {
          path: 'customLayout',
          name: 'ComponentFormBasicsCustomLayout',
          component: () => import('@/views/form/basics/customLayout/CodeExample.vue')
        },
        {
          path: 'horizontal',
          name: 'ComponentFormBasicsHorizontal',
          component: () => import('@/views/form/basics/horizontal/CodeExample.vue')
        },
        {
          path: 'vertical',
          name: 'ComponentFormBasicsVertical',
          component: () => import('@/views/form/basics/vertical/CodeExample.vue')
        },
        {
          path: 'format',
          name: 'ComponentFormBasicsFormat',
          component: () => import('@/views/form/basics/format/CodeExample.vue')
        },
        { path: 'visible', name: 'ComponentFormBasicsVisible', component: () => import('@/views/form/basics/visible/CodeExample.vue') },
        {
          path: 'collapse',
          component: RouteLayout,
          children: [
            {
              path: 'base',
              name: 'ComponentFormBasicsCollapseBase',
              component: () => import('@/views/form/basics/collapse/base/CodeExample.vue')
            },
            {
              path: 'buttonText',
              name: 'ComponentFormBasicsCollapseButtonText',
              component: () => import('@/views/form/basics/collapse/buttonText/CodeExample.vue')
            },
            {
              path: 'buttonIcon',
              name: 'ComponentFormBasicsCollapseButtonIcon',
              component: () => import('@/views/form/basics/collapse/buttonIcon/CodeExample.vue')
            }
          ]
        },
        {
          path: 'validate',
          component: RouteLayout,
          children: [
            {
              path: 'rules',
              name: 'ComponentFormBasicsValidateRules',
              component: () => import('@/views/form/basics/validate/rules/CodeExample.vue')
            },
            {
              path: 'string',
              name: 'ComponentFormBasicsValidateString',
              component: () => import('@/views/form/basics/validate/string/CodeExample.vue')
            },
            {
              path: 'number',
              name: 'ComponentFormBasicsValidateNumber',
              component: () => import('@/views/form/basics/validate/number/CodeExample.vue')
            },
            {
              path: 'regexp',
              name: 'ComponentFormBasicsValidateRegexp',
              component: () => import('@/views/form/basics/validate/regexp/CodeExample.vue')
            },
            {
              path: 'array',
              name: 'ComponentFormBasicsValidateArray',
              component: () => import('@/views/form/basics/validate/array/CodeExample.vue')
            },
            { path: 'field', name: 'ComponentFormBasicsValidateField', component: () => import('@/views/form/basics/validate/field/CodeExample.vue') },
            {
              path: 'custom',
              name: 'ComponentFormBasicsValidateCustom',
              component: () => import('@/views/form/basics/validate/custom/CodeExample.vue')
            },
            {
              path: 'showMessage',
              name: 'ComponentFormBasicsValidateShowMessage',
              component: () => import('@/views/form/basics/validate/showMessage/CodeExample.vue')
            },
            {
              path: 'showErrorIcon',
              name: 'ComponentFormBasicsValidateShowErrorIcon',
              component: () => import('@/views/form/basics/validate/showErrorIcon/CodeExample.vue')
            },
            {
              path: 'theme',
              name: 'ComponentFormBasicsValidateTheme',
              component: () => import('@/views/form/basics/validate/theme/CodeExample.vue')
            },
            {
              path: 'changeToSubmit',
              name: 'ComponentFormBasicsValidateChangeToSubmit',
              component: () => import('@/views/form/basics/validate/changeToSubmit/CodeExample.vue')
            },
            {
              path: 'manual',
              name: 'ComponentFormBasicsValidateManual',
              component: () => import('@/views/form/basics/validate/manual/CodeExample.vue')
            }
          ]
        },
        {
          path: 'itemRender',
          component: RouteLayout,
          children: [
            {
              path: 'input',
              name: 'ComponentFormBasicsItemRenderInput',
              component: () => import('@/views/form/basics/itemRender/input/CodeExample.vue')
            },
            {
              path: 'textarea',
              name: 'ComponentFormBasicsItemRenderTextarea',
              component: () => import('@/views/form/basics/itemRender/textarea/CodeExample.vue')
            },
            {
              path: 'select',
              name: 'ComponentFormBasicsItemRenderSelect',
              component: () => import('@/views/form/basics/itemRender/select/CodeExample.vue')
            },
            {
              path: 'vxe-button-group',
              name: 'ComponentFormBasicsItemRenderVxeButtonGroup',
              component: () => import('@/views/form/basics/itemRender/vxe-button-group/CodeExample.vue')
            },
            {
              path: 'vxe-input',
              name: 'ComponentFormBasicsItemRenderVxeInput',
              component: () => import('@/views/form/basics/itemRender/vxe-input/CodeExample.vue')
            },
            {
              path: 'vxe-number-input',
              name: 'ComponentFormBasicsItemRenderVxeNumberInput',
              component: () => import('@/views/form/basics/itemRender/vxe-number-input/CodeExample.vue')
            },
            {
              path: 'vxe-textarea',
              name: 'ComponentFormBasicsItemRenderVxeTextarea',
              component: () => import('@/views/form/basics/itemRender/vxe-textarea/CodeExample.vue')
            },
            {
              path: 'vxe-select',
              name: 'ComponentFormBasicsItemRenderVxeSelect',
              component: () => import('@/views/form/basics/itemRender/vxe-select/CodeExample.vue')
            },
            {
              path: 'vxe-date-picker',
              name: 'ComponentFormBasicsItemRenderVxeDatePicker',
              component: () => import('@/views/form/basics/itemRender/vxe-date-picker/CodeExample.vue')
            },
            {
              path: 'vxe-date-range-picker',
              name: 'ComponentFormBasicsItemRenderVxeDateRangePicker',
              component: () => import('@/views/form/basics/itemRender/vxe-date-range-picker/CodeExample.vue')
            },
            {
              path: 'vxe-tree-select',
              name: 'ComponentFormBasicsItemRenderVxeTreeSelect',
              component: () => import('@/views/form/basics/itemRender/vxe-tree-select/CodeExample.vue')
            },
            {
              path: 'vxe-table-select',
              name: 'ComponentFormBasicsItemRenderVxeTableSelect',
              component: () => import('@/views/form/basics/itemRender/vxe-table-select/CodeExample.vue')
            },
            {
              path: 'vxe-switch',
              name: 'ComponentFormBasicsItemRenderVxeSwitch',
              component: () => import('@/views/form/basics/itemRender/vxe-switch/CodeExample.vue')
            },
            {
              path: 'vxe-radio-group',
              name: 'ComponentFormBasicsItemRenderVxeRadioGroup',
              component: () => import('@/views/form/basics/itemRender/vxe-radio-group/CodeExample.vue')
            },
            {
              path: 'vxe-checkbox-group',
              name: 'ComponentFormBasicsItemRenderVxeCheckboxGroup',
              component: () => import('@/views/form/basics/itemRender/vxe-checkbox-group/CodeExample.vue')
            },
            {
              path: 'vxe-rate',
              name: 'ComponentFormBasicsItemRenderVxeRate',
              component: () => import('@/views/form/basics/itemRender/vxe-rate/CodeExample.vue')
            },
            {
              path: 'vxe-slider',
              name: 'ComponentFormBasicsItemRenderVxeSlider',
              component: () => import('@/views/form/basics/itemRender/vxe-slider/CodeExample.vue')
            },
            {
              path: 'vxe-upload',
              name: 'ComponentFormBasicsItemRenderVxeUpload',
              component: () => import('@/views/form/basics/itemRender/vxe-upload/CodeExample.vue')
            },
            {
              path: 'readonly',
              name: 'ComponentFormBasicsItemRenderReadonly',
              component: () => import('@/views/form/basics/itemRender/readonly/CodeExample.vue')
            },
            {
              path: 'disabled',
              name: 'ComponentFormBasicsItemRenderDisabled',
              component: () => import('@/views/form/basics/itemRender/disabled/CodeExample.vue')
            },
            {
              path: 'linkageDisabled',
              name: 'ComponentFormBasicsItemRenderLinkageDisabled',
              component: () => import('@/views/form/basics/itemRender/linkageDisabled/CodeExample.vue')
            }
          ]
        },
        {
          path: 'itemTemplate',
          component: RouteLayout,
          children: [
            {
              path: 'vxe-button',
              name: 'ComponentFormBasicsItemTemplateVxeButton',
              component: () => import('@/views/form/basics/itemTemplate/vxe-button/CodeExample.vue')
            },
            {
              path: 'vxe-input',
              name: 'ComponentFormBasicsItemTemplateVxeInput',
              component: () => import('@/views/form/basics/itemTemplate/vxe-input/CodeExample.vue')
            },
            {
              path: 'vxe-number-input',
              name: 'ComponentFormBasicsItemTemplateVxeNumberInput',
              component: () => import('@/views/form/basics/itemTemplate/vxe-number-input/CodeExample.vue')
            },
            {
              path: 'vxe-textarea',
              name: 'ComponentFormBasicsItemTemplateVxeTextarea',
              component: () => import('@/views/form/basics/itemTemplate/vxe-textarea/CodeExample.vue')
            },
            {
              path: 'vxe-select',
              name: 'ComponentFormBasicsItemTemplateVxeSelect',
              component: () => import('@/views/form/basics/itemTemplate/vxe-select/CodeExample.vue')
            },
            {
              path: 'vxe-date-picker',
              name: 'ComponentFormBasicsItemTemplateVxeDatePicker',
              component: () => import('@/views/form/basics/itemTemplate/vxe-date-picker/CodeExample.vue')
            },
            {
              path: 'vxe-date-range-picker',
              name: 'ComponentFormBasicsItemTemplateVxeDateRangePicker',
              component: () => import('@/views/form/basics/itemTemplate/vxe-date-range-picker/CodeExample.vue')
            },
            {
              path: 'vxe-tree-select',
              name: 'ComponentFormBasicsItemTemplateVxeTreeSelect',
              component: () => import('@/views/form/basics/itemTemplate/vxe-tree-select/CodeExample.vue')
            },
            {
              path: 'vxe-switch',
              name: 'ComponentFormBasicsItemTemplateVxeSwitch',
              component: () => import('@/views/form/basics/itemTemplate/vxe-switch/CodeExample.vue')
            },
            {
              path: 'vxe-radio-group',
              name: 'ComponentFormBasicsItemTemplateVxeRadioGroup',
              component: () => import('@/views/form/basics/itemTemplate/vxe-radio-group/CodeExample.vue')
            },
            {
              path: 'vxe-checkbox-group',
              name: 'ComponentFormBasicsItemTemplateVxeCheckboxGroup',
              component: () => import('@/views/form/basics/itemTemplate/vxe-checkbox-group/CodeExample.vue')
            },
            {
              path: 'vxe-rate',
              name: 'ComponentFormBasicsItemTemplateVxeRate',
              component: () => import('@/views/form/basics/itemTemplate/vxe-rate/CodeExample.vue')
            },
            {
              path: 'vxe-slider',
              name: 'ComponentFormBasicsItemTemplateVxeSlider',
              component: () => import('@/views/form/basics/itemTemplate/vxe-slider/CodeExample.vue')
            },
            {
              path: 'vxe-upload',
              name: 'ComponentFormBasicsItemTemplateVxeUpload',
              component: () => import('@/views/form/basics/itemTemplate/vxe-upload/CodeExample.vue')
            }
          ]
        },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            {
              path: 'title',
              name: 'ComponentFormBasicsTemplateTitle',
              component: () => import('@/views/form/basics/template/title/CodeExample.vue')
            },
            {
              path: 'prefix',
              name: 'ComponentFormBasicsTemplatePrefix',
              component: () => import('@/views/form/basics/template/prefix/CodeExample.vue')
            },
            {
              path: 'suffix',
              name: 'ComponentFormBasicsTemplateSuffix',
              component: () => import('@/views/form/basics/template/suffix/CodeExample.vue')
            },
            {
              path: 'content',
              name: 'ComponentFormBasicsTemplateContent',
              component: () => import('@/views/form/basics/template/content/CodeExample.vue')
            }
          ]
        },
        {
          path: 'tabs',
          name: 'ComponentFormBasicsTabs',
          component: () => import('@/views/form/basics/tabs/CodeExample.vue')
        },
        {
          path: 'resumeTemplate',
          name: 'ComponentFormBasicsResumeTemplate',
          component: () => import('@/views/form/basics/resumeTemplate/CodeExample.vue')
        }
      ]
    },
    {
      path: 'config',
      component: RouteLayout,
      children: [
        {
          path: 'base',
          name: 'ComponentFormConfigBase',
          component: () => import('@/views/form/config/base/CodeExample.vue')
        },
        {
          path: 'field',
          name: 'ComponentFormConfigField',
          component: () => import('@/views/form/config/field/CodeExample.vue')
        },
        {
          path: 'colon',
          name: 'ComponentFormConfigColon',
          component: () => import('@/views/form/config/colon/CodeExample.vue')
        },
        {
          path: 'padding',
          name: 'ComponentFormConfigPadding',
          component: () => import('@/views/form/config/padding/CodeExample.vue')
        },
        {
          path: 'bold',
          name: 'ComponentFormConfigBold',
          component: () => import('@/views/form/config/bold/CodeExample.vue')
        },
        {
          path: 'titleAlign',
          name: 'ComponentFormConfigTitleAlign',
          component: () => import('@/views/form/config/titleAlign/CodeExample.vue')
        },
        {
          path: 'align',
          name: 'ComponentFormConfigAlign',
          component: () => import('@/views/form/config/align/CodeExample.vue')
        },
        {
          path: 'titlePrefix',
          name: 'ComponentFormConfigTitlePrefix',
          component: () => import('@/views/form/config/titlePrefix/CodeExample.vue')
        },
        {
          path: 'titleSuffix',
          name: 'ComponentFormConfigTitleSuffix',
          component: () => import('@/views/form/config/titleSuffix/CodeExample.vue')
        },
        {
          path: 'width',
          name: 'ComponentFormConfigWidth',
          component: () => import('@/views/form/config/width/CodeExample.vue')
        },
        {
          path: 'overflow',
          name: 'ComponentFormConfigOverflow',
          component: () => import('@/views/form/config/overflow/CodeExample.vue')
        },
        {
          path: 'border',
          name: 'ComponentFormConfigBorder',
          component: () => import('@/views/form/config/border/CodeExample.vue')
        },
        {
          path: 'titleBackground',
          name: 'ComponentFormConfigTitleBackground',
          component: () => import('@/views/form/config/titleBackground/CodeExample.vue')
        },
        {
          path: 'children',
          name: 'ComponentFormConfigChildren',
          component: () => import('@/views/form/config/children/CodeExample.vue')
        },
        {
          path: 'group',
          name: 'ComponentFormConfigGroup',
          component: () => import('@/views/form/config/group/CodeExample.vue')
        },
        {
          path: 'horizontal',
          name: 'ComponentFormConfigHorizontal',
          component: () => import('@/views/form/config/horizontal/CodeExample.vue')
        },
        {
          path: 'vertical',
          name: 'ComponentFormConfigVertical',
          component: () => import('@/views/form/config/vertical/CodeExample.vue')
        },
        {
          path: 'format',
          name: 'ComponentFormConfigFormat',
          component: () => import('@/views/form/config/format/CodeExample.vue')
        },
        { path: 'visible', name: 'ComponentFormConfigVisible', component: () => import('@/views/form/config/visible/CodeExample.vue') },
        {
          path: 'collapse',
          component: RouteLayout,
          children: [
            {
              path: 'base',
              name: 'ComponentFormConfigCollapseBase',
              component: () => import('@/views/form/config/collapse/base/CodeExample.vue')
            },
            {
              path: 'buttonText',
              name: 'ComponentFormConfigCollapseButtonText',
              component: () => import('@/views/form/config/collapse/buttonText/CodeExample.vue')
            },
            {
              path: 'buttonIcon',
              name: 'ComponentFormConfigCollapseButtonIcon',
              component: () => import('@/views/form/config/collapse/buttonIcon/CodeExample.vue')
            }
          ]
        },
        {
          path: 'validate',
          component: RouteLayout,
          children: [
            {
              path: 'rules',
              name: 'ComponentFormConfigValidateRules',
              component: () => import('@/views/form/config/validate/rules/CodeExample.vue')
            },
            {
              path: 'string',
              name: 'ComponentFormConfigValidateString',
              component: () => import('@/views/form/config/validate/string/CodeExample.vue')
            },
            {
              path: 'number',
              name: 'ComponentFormConfigValidateNumber',
              component: () => import('@/views/form/config/validate/number/CodeExample.vue')
            },
            {
              path: 'regexp',
              name: 'ComponentFormConfigValidateRegexp',
              component: () => import('@/views/form/config/validate/regexp/CodeExample.vue')
            },
            {
              path: 'array',
              name: 'ComponentFormConfigValidateArray',
              component: () => import('@/views/form/config/validate/array/CodeExample.vue')
            },
            { path: 'field', name: 'ComponentFormConfigValidateField', component: () => import('@/views/form/config/validate/field/CodeExample.vue') },
            {
              path: 'custom',
              name: 'ComponentFormConfigValidateCustom',
              component: () => import('@/views/form/config/validate/custom/CodeExample.vue')
            },
            {
              path: 'showMessage',
              name: 'ComponentFormConfigValidateShowMessage',
              component: () => import('@/views/form/config/validate/showMessage/CodeExample.vue')
            },
            {
              path: 'showErrorIcon',
              name: 'ComponentFormConfigValidateShowErrorIcon',
              component: () => import('@/views/form/config/validate/showErrorIcon/CodeExample.vue')
            },
            {
              path: 'theme',
              name: 'ComponentFormConfigValidateTheme',
              component: () => import('@/views/form/config/validate/theme/CodeExample.vue')
            },
            {
              path: 'changeToSubmit',
              name: 'ComponentFormConfigValidateChangeToSubmit',
              component: () => import('@/views/form/config/validate/changeToSubmit/CodeExample.vue')
            },
            {
              path: 'manual',
              name: 'ComponentFormConfigValidateManual',
              component: () => import('@/views/form/config/validate/manual/CodeExample.vue')
            }
          ]
        },
        {
          path: 'itemRender',
          component: RouteLayout,
          children: [
            {
              path: 'input',
              name: 'ComponentFormConfigItemRenderInput',
              component: () => import('@/views/form/config/itemRender/input/CodeExample.vue')
            },
            {
              path: 'textarea',
              name: 'ComponentFormConfigItemRenderTextarea',
              component: () => import('@/views/form/config/itemRender/textarea/CodeExample.vue')
            },
            {
              path: 'select',
              name: 'ComponentFormConfigItemRenderSelect',
              component: () => import('@/views/form/config/itemRender/select/CodeExample.vue')
            },
            {
              path: 'vxe-button-group',
              name: 'ComponentFormConfigItemRenderVxeButtonGroup',
              component: () => import('@/views/form/config/itemRender/vxe-button-group/CodeExample.vue')
            },
            {
              path: 'vxe-input',
              name: 'ComponentFormConfigItemRenderVxeInput',
              component: () => import('@/views/form/config/itemRender/vxe-input/CodeExample.vue')
            },
            {
              path: 'vxe-textarea',
              name: 'ComponentFormConfigItemRenderVxeTextarea',
              component: () => import('@/views/form/config/itemRender/vxe-textarea/CodeExample.vue')
            },
            {
              path: 'vxe-number-input',
              name: 'ComponentFormConfigItemRenderVxeNumberInput',
              component: () => import('@/views/form/config/itemRender/vxe-number-input/CodeExample.vue')
            },
            {
              path: 'vxe-select',
              name: 'ComponentFormConfigItemRenderVxeSelect',
              component: () => import('@/views/form/config/itemRender/vxe-select/CodeExample.vue')
            },
            {
              path: 'vxe-date-picker',
              name: 'ComponentFormConfigItemRenderVxeDatePicker',
              component: () => import('@/views/form/config/itemRender/vxe-date-picker/CodeExample.vue')
            },
            {
              path: 'vxe-date-range-picker',
              name: 'ComponentFormConfigItemRenderVxeDateRangePicker',
              component: () => import('@/views/form/config/itemRender/vxe-date-range-picker/CodeExample.vue')
            },
            {
              path: 'vxe-tree-select',
              name: 'ComponentFormConfigItemRenderVxeTreeSelect',
              component: () => import('@/views/form/config/itemRender/vxe-tree-select/CodeExample.vue')
            },
            {
              path: 'vxe-table-select',
              name: 'ComponentFormConfigItemRenderVxeTableSelect',
              component: () => import('@/views/form/config/itemRender/vxe-table-select/CodeExample.vue')
            },
            {
              path: 'vxe-switch',
              name: 'ComponentFormConfigItemRenderVxeSwitch',
              component: () => import('@/views/form/config/itemRender/vxe-switch/CodeExample.vue')
            },
            {
              path: 'vxe-radio-group',
              name: 'ComponentFormConfigItemRenderVxeRadioGroup',
              component: () => import('@/views/form/config/itemRender/vxe-radio-group/CodeExample.vue')
            },
            {
              path: 'vxe-checkbox-group',
              name: 'ComponentFormConfigItemRenderVxeCheckboxGroup',
              component: () => import('@/views/form/config/itemRender/vxe-checkbox-group/CodeExample.vue')
            },
            {
              path: 'vxe-rate',
              name: 'ComponentFormConfigItemRenderVxeRate',
              component: () => import('@/views/form/config/itemRender/vxe-rate/CodeExample.vue')
            },
            {
              path: 'vxe-slider',
              name: 'ComponentFormConfigItemRenderVxeSlider',
              component: () => import('@/views/form/config/itemRender/vxe-slider/CodeExample.vue')
            },
            {
              path: 'vxe-image',
              name: 'ComponentFormConfigItemRenderVxeImage',
              component: () => import('@/views/form/config/itemRender/vxe-image/CodeExample.vue')
            },
            {
              path: 'vxe-image-group',
              name: 'ComponentFormConfigItemRenderVxeImageGroup',
              component: () => import('@/views/form/config/itemRender/vxe-image-group/CodeExample.vue')
            },
            {
              path: 'vxe-upload',
              name: 'ComponentFormConfigItemRenderVxeUpload',
              component: () => import('@/views/form/config/itemRender/vxe-upload/CodeExample.vue')
            },
            {
              path: 'readonly',
              name: 'ComponentFormConfigItemRenderReadonly',
              component: () => import('@/views/form/config/itemRender/readonly/CodeExample.vue')
            },
            {
              path: 'disabled',
              name: 'ComponentFormConfigItemRenderDisabled',
              component: () => import('@/views/form/config/itemRender/disabled/CodeExample.vue')
            },
            {
              path: 'linkageDisabled',
              name: 'ComponentFormConfigItemRenderLinkageDisabled',
              component: () => import('@/views/form/config/itemRender/linkageDisabled/CodeExample.vue')
            }
          ]
        },
        {
          path: 'itemTemplate',
          component: RouteLayout,
          children: [
            {
              path: 'vxe-button',
              name: 'ComponentFormConfigItemTemplateVxeButton',
              component: () => import('@/views/form/config/itemTemplate/vxe-button/CodeExample.vue')
            },
            {
              path: 'vxe-input',
              name: 'ComponentFormConfigItemTemplateVxeInput',
              component: () => import('@/views/form/config/itemTemplate/vxe-input/CodeExample.vue')
            },
            {
              path: 'vxe-textarea',
              name: 'ComponentFormConfigItemTemplateVxeTextarea',
              component: () => import('@/views/form/config/itemTemplate/vxe-textarea/CodeExample.vue')
            },
            {
              path: 'vxe-number-input',
              name: 'ComponentFormConfigItemTemplateVxeNumberInput',
              component: () => import('@/views/form/config/itemTemplate/vxe-number-input/CodeExample.vue')
            },
            {
              path: 'vxe-select',
              name: 'ComponentFormConfigItemTemplateVxeSelect',
              component: () => import('@/views/form/config/itemTemplate/vxe-select/CodeExample.vue')
            },
            {
              path: 'vxe-date-picker',
              name: 'ComponentFormConfigItemTemplateVxeDatePicker',
              component: () => import('@/views/form/config/itemTemplate/vxe-date-picker/CodeExample.vue')
            },
            {
              path: 'vxe-date-range-picker',
              name: 'ComponentFormConfigItemTemplateVxeDateRangePicker',
              component: () => import('@/views/form/config/itemTemplate/vxe-date-range-picker/CodeExample.vue')
            },
            {
              path: 'vxe-tree-select',
              name: 'ComponentFormConfigItemTemplateVxeTreeSelect',
              component: () => import('@/views/form/config/itemTemplate/vxe-tree-select/CodeExample.vue')
            },
            {
              path: 'vxe-switch',
              name: 'ComponentFormConfigItemTemplateVxeSwitch',
              component: () => import('@/views/form/config/itemTemplate/vxe-switch/CodeExample.vue')
            },
            {
              path: 'vxe-radio-group',
              name: 'ComponentFormConfigItemTemplateVxeRadioGroup',
              component: () => import('@/views/form/config/itemTemplate/vxe-radio-group/CodeExample.vue')
            },
            {
              path: 'vxe-checkbox-group',
              name: 'ComponentFormConfigItemTemplateVxeCheckboxGroup',
              component: () => import('@/views/form/config/itemTemplate/vxe-checkbox-group/CodeExample.vue')
            },
            {
              path: 'vxe-rate',
              name: 'ComponentFormConfigItemTemplateVxeRate',
              component: () => import('@/views/form/config/itemTemplate/vxe-rate/CodeExample.vue')
            },
            {
              path: 'vxe-slider',
              name: 'ComponentFormConfigItemTemplateVxeSlider',
              component: () => import('@/views/form/config/itemTemplate/vxe-slider/CodeExample.vue')
            },
            {
              path: 'vxe-image',
              name: 'ComponentFormConfigItemTemplateVxeImage',
              component: () => import('@/views/form/config/itemTemplate/vxe-image/CodeExample.vue')
            },
            {
              path: 'vxe-image-group',
              name: 'ComponentFormConfigItemTemplateVxeImageGroup',
              component: () => import('@/views/form/config/itemTemplate/vxe-image-group/CodeExample.vue')
            },
            {
              path: 'vxe-upload',
              name: 'ComponentFormConfigItemTemplateVxeUpload',
              component: () => import('@/views/form/config/itemTemplate/vxe-upload/CodeExample.vue')
            }
          ]
        },
        {
          path: 'template',
          component: RouteLayout,
          children: [
            {
              path: 'title',
              name: 'ComponentFormConfigTemplateTitle',
              component: () => import('@/views/form/config/template/title/CodeExample.vue')
            },
            {
              path: 'prefix',
              name: 'ComponentFormConfigTemplatePrefix',
              component: () => import('@/views/form/config/template/prefix/CodeExample.vue')
            },
            {
              path: 'suffix',
              name: 'ComponentFormConfigTemplateSuffix',
              component: () => import('@/views/form/config/template/suffix/CodeExample.vue')
            },
            {
              path: 'content',
              name: 'ComponentFormConfigTemplateContent',
              component: () => import('@/views/form/config/template/content/CodeExample.vue')
            }
          ]
        },
        {
          path: 'tabs',
          name: 'ComponentFormConfigTabs',
          component: () => import('@/views/form/config/tabs/CodeExample.vue')
        },
        {
          path: 'resumeTemplate',
          name: 'ComponentFormConfigResumeTemplate',
          component: () => import('@/views/form/config/resumeTemplate/CodeExample.vue')
        }
      ]
    }
  ]
}
