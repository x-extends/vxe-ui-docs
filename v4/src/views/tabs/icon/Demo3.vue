<template>
  <div>
    <vxe-tabs :height="140" :options="tabList" type="border-card">
      <template #default1>
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
        <div>内容1</div>
      </template>

      <template #default2>
        <div>内容2</div>
        <div>内容2</div>
        <div>内容2</div>
        <div>内容2</div>
        <div>内容2</div>
        <div>内容2</div>
      </template>

      <template #default3>
        <div>内容3</div>
        <div>内容3</div>
        <div>内容3</div>
        <div>内容3</div>
        <div>内容3</div>
        <div>内容3</div>
      </template>
    </vxe-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTabsPropTypes } from 'vxe-pc-ui'

const tabList = ref<VxeTabsPropTypes.Options>([
  { name: '1', title: '标题1', icon: 'vxe-icon-home', slots: { default: 'default1' } },
  { name: '2', title: '标题2', icon: 'vxe-icon-envelope', slots: { default: 'default2' } },
  { name: '3', title: '标题3', icon: 'vxe-icon-setting', slots: { default: 'default3' } }
])
</script>
