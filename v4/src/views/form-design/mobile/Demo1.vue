<template>
  <div>
    <div class="row-wrapper">
      <vxe-button status="primary" @click="clickEvent">获取json</vxe-button>
      <vxe-form-design ref="formDesignRef" :widgets="formDesignWidgets" :height="800" :show-pc="false" show-mobile />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeFormDesignPropTypes, VxeFormDesignInstance } from 'vxe-design'

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
      'VxeInput'
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
