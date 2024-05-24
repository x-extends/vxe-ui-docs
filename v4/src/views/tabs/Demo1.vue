<template>
  <div>
    <vxe-tabs v-model="selectTab" >
      <vxe-tab-pane title="xxx1" name="1">xxxx</vxe-tab-pane>
      <vxe-tab-pane title="xxx2" name="2">cccc</vxe-tab-pane>
      <vxe-tab-pane title="xxx3" name="3">vvvv</vxe-tab-pane>
      <vxe-tab-pane title="xxx4" name="4">ggg</vxe-tab-pane>
      <vxe-tab-pane title="xxx5" name="5">ooo</vxe-tab-pane>
    </vxe-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selectTab = ref('1')
</script>
