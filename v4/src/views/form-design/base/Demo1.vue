<template>
  <div>
    <div class="row-wrapper">
      <VxeFormDesign :widgets="formDesignWidgets" :height="800" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeFormDesignPropTypes } from 'vxe-pc-ui'

const formDesignWidgets = ref<VxeFormDesignPropTypes.Widgets>([
  {
    customGroup: '自定义分组名称',
    children: [
      'input',
      'textarea',
      'select'
    ]
  },
  {
    group: 'layout',
    children: [
      'row'
    ]
  }
])
</script>
