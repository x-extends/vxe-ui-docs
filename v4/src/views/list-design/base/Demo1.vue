<template>
  <div>
    <div class="row-wrapper">
      <vxe-button status="primary" @click="clickEvent">设置表单设计器的json</vxe-button>
      <vxe-list-design ref="listDesignRef" :height="800" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeListDesignInstance } from 'vxe-pc-ui'

const listDesignRef = ref<VxeListDesignInstance>()

const clickEvent = () => {
  const $listDesign = listDesignRef.value
  if ($listDesign) {
    $listDesign.loadFormDesignConfig(
      { formConfig: { title: '', pcVisible: true, pcVertical: true, pcTitleBold: false, pcTitleColon: false, pcTitleAlign: '', pcTitleWidth: '', pcTitleWidthUnit: '', mobileVisible: true, mobileVertical: true, mobileTitleBold: false, mobileTitleColon: false, mobileTitleAlign: '', mobileTitleWidth: '', mobileTitleWidthUnit: '' }, widgetData: [{ id: 100138, field: 'VxeInput100138', title: '输入框', name: 'VxeInput', required: false, hidden: false, options: { placeholder: '' }, children: [], model: { update: false, value: null } }, { id: 100139, field: 'VxeTextarea100139', title: '文本域', name: 'VxeTextarea', required: false, hidden: false, options: { placeholder: '' }, children: [], model: { update: false, value: null } }, { id: 100140, field: 'VxeSelect100140', title: '下拉框', name: 'VxeSelect', required: false, hidden: false, options: { placeholder: '', options: [{ value: '选项1', _X_OPTION_KEY: 'opt_431' }, { value: '选项2', _X_OPTION_KEY: 'opt_432' }, { value: '选项3', _X_OPTION_KEY: 'opt_433' }] }, children: [], model: { update: false, value: null } }] }
    )
  }
}
</script>
