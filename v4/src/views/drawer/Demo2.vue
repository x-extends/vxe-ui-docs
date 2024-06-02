<template>
  <div>
    <vxe-button content="左侧打开" @click="demo1.value1 = true"></vxe-button>
    <vxe-drawer v-model="demo1.value1" position="left" maskClosable>
      <template #default>
        <div>默认尺寸</div>
        <div>xxxxxxxxx</div>
        <div>xxxxxxxxxx</div>
      </template>
    </vxe-drawer>

    <vxe-button content="右侧打开" @click="demo1.value2 = true"></vxe-button>
    <vxe-drawer v-model="demo1.value2" position="right" maskClosable>
      <template #default>
        <div>默认尺寸</div>
        <div>xxxxxxxxx</div>
        <div>xxxxxxxxxx</div>
      </template>
    </vxe-drawer>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const demo1 = reactive({
  value1: false,
  value2: false
})
</script>
