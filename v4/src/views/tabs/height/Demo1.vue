<template>
  <div>
    <vxe-tabs v-model="selectTab" type="border-card" :height="140" padding>
      <vxe-tab-pane title="标题1" name="1">
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
      </vxe-tab-pane>
      <vxe-tab-pane title="标题2" name="2">
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
      </vxe-tab-pane>
      <vxe-tab-pane title="标题3" name="3">
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
      </vxe-tab-pane>
    </vxe-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selectTab = ref('1')
</script>
