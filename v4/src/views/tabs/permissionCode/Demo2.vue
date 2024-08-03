<template>
  <div>
    <vxe-tabs v-model="selectTab" :options="tabList">
      <template #default1>
        <div>内容1</div>
      </template>

      <template #default2>
        <div>内容2</div>
      </template>

      <template #default3>
        <div>内容3</div>
      </template>
    </vxe-tabs>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTabsPropTypes } from 'vxe-pc-ui'

const selectTab = ref('1')

const tabList = ref<VxeTabsPropTypes.Options>([
  { name: '1', title: '标题1', permissionCode: 'xxx', slots: { default: 'default1' } },
  { name: '2', title: '标题2', permissionCode: 'xxx', slots: { default: 'default2' } },
  { name: '3', title: '标题3', permissionCode: 'xxx', slots: { default: 'default3' } }
])
</script>
