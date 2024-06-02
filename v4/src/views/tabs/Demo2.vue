<template>
  <div>
    <vxe-tabs v-model="selectTab" type="card">
      <vxe-tab-pane title="标题1" name="1">内容1</vxe-tab-pane>
      <vxe-tab-pane title="标题2" name="2">内容2</vxe-tab-pane>
      <vxe-tab-pane title="标题3" name="3">内容3</vxe-tab-pane>
      <vxe-tab-pane title="标题4" name="4">内容4</vxe-tab-pane>
      <vxe-tab-pane title="标题5" name="5">内容5</vxe-tab-pane>
    </vxe-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selectTab = ref('1')
</script>
