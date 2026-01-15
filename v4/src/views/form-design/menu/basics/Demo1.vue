<template>
  <div>
    <div class="row-wrapper">
      <vxe-button status="primary" @click="clickEvent">获取json</vxe-button>
      <vxe-form-design ref="formDesignRef" :widgets="formDesignWidgets" :menu-config="menuConfig" :height="800" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, nextTick } from 'vue'
import { VxeFormDesignPropTypes, VxeFormDesignInstance } from 'vxe-design'

const formDesignRef = ref<VxeFormDesignInstance>()

const formDesignWidgets = ref<VxeFormDesignPropTypes.Widgets>([
  {
    group: 'base',
    children: [
      'VxeInput'
    ]
  }
])

const menuConfig = reactive<VxeFormDesignPropTypes.MenuConfig>({
  options: [
    [
      { code: '1', name: '新增' },
      { code: '2', name: '删除' },
      {
        code: '3',
        name: '审批',
        children: [
          { code: '4', name: '通过' },
          { code: '5', name: '不通过' }
        ]
      },
      { code: '6', name: '查看' }
    ],
    [
      {
        code: '11',
        name: '更多操作',
        children: [
          { code: '13', name: '编辑' },
          { code: '14', name: '取消' }
        ]
      },
      { code: '10', name: '驳回' }
    ]
  ]
})

const clickEvent = () => {
  const $formDesign = formDesignRef.value
  if ($formDesign) {
    console.log(JSON.stringify($formDesign.getConfig()))
  }
}

nextTick(() => {
  const $formDesign = formDesignRef.value
  if ($formDesign) {
    const defaultConfigJSON = { formConfig: { title: '', pcVisible: true, pcVertical: true, pcTitleBold: false, pcTitleColon: false, pcTitleAlign: '', pcTitleWidth: '', pcTitleWidthUnit: '', mobileVisible: true, mobileVertical: true, mobileTitleBold: false, mobileTitleColon: false, mobileTitleAlign: '', mobileTitleWidth: '', mobileTitleWidthUnit: '' }, widgetData: [{ id: 100109, field: 'input100109', title: '输入框', name: 'input', required: false, hidden: false, options: { placeholder: '' }, children: [], model: { update: false, value: null } }, { id: 100110, field: 'textarea100110', title: '文本域', name: 'textarea', required: false, hidden: false, options: { placeholder: '' }, children: [], model: { update: false, value: null } }, { id: 100111, field: 'VxeInput100111', title: '输入框', name: 'VxeInput', required: false, hidden: false, options: { placeholder: '' }, children: [], model: { update: false, value: null } }, { id: 100112, field: 'VxeDatePicker100112', title: '日期', name: 'VxeDatePicker', required: false, hidden: false, options: { placeholder: '', defaultValue: { type: '', value: '' } }, children: [], model: { update: false, value: null } }] }
    $formDesign.loadConfig(defaultConfigJSON)
  }
})
</script>
