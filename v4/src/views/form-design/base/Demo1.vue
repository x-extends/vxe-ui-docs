<template>
  <div>
    <div class="row-wrapper">
      <VxeFormDesign :widgets="formDesignWidgets" :height="600" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeFormDesignPropTypes } from 'vxe-pc-ui'

const formDesignWidgets = ref<VxeFormDesignPropTypes.Widgets>([
  {
    title: '基础控件',
    children: [
      'input',
      'textarea',
      'select'
    ]
  },
  {
    title: '布局控件',
    children: [
      'row'
    ]
  }
])
</script>
