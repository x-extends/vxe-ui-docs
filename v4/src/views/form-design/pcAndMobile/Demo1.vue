<template>
  <div>
    <div class="row-wrapper">
      <vxe-button status="primary" @click="clickEvent">获取json</vxe-button>
      <vxe-form-design ref="formDesignRef" :widgets="formDesignWidgets" :height="800" show-mobile />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeFormDesignPropTypes, VxeFormDesignInstance } from 'vxe-pc-ui'

const formDesignRef = ref<VxeFormDesignInstance>()

const formDesignWidgets = ref<VxeFormDesignPropTypes.Widgets>([
  {
    group: 'layout',
    children: [
      'row'
    ]
  },
  {
    group: 'base',
    children: [
      'VxeInput',
      'VxeTextarea',
      'VxeSelect',
      'VxeSwitch',
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
