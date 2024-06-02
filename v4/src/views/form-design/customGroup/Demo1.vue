<template>
  <div>
    <div class="row-wrapper">
      <vxe-button status="primary" @click="clickEvent">获取json</vxe-button>
      <vxe-form-design ref="formDesignRef" :widgets="formDesignWidgets" :height="800" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeFormDesignPropTypes, VxeFormDesignInstance } from 'vxe-pc-ui'

const formDesignRef = ref<VxeFormDesignInstance>()

const formDesignWidgets = ref<VxeFormDesignPropTypes.Widgets>([
  {
    customGroup: '输入控件',
    children: [
      'VxeInput',
      'VxeTextarea'
    ]
  },
  {
    customGroup: '下拉控件',
    children: [
      'VxeSelect'
    ]
  },
  {
    customGroup: '开关控件',
    children: [
      'VxeSwitch'
    ]
  },
  {
    customGroup: '其他控件',
    children: [
      'VxeRadioGroup',
      'VxeCheckboxGroup'
    ]
  }
])

const clickEvent = () => {
  const $formDesign = formDesignRef.value
  if ($formDesign) {
    console.log(JSON.stringify($formDesign.getConfig()))
  }
}
</script>
