<template>
  <div>
    <vxe-space :fill="isFill" wrap>
      <vxe-card title="卡片1" width="100%" border>
        <vxe-image src="https://vxeui.com/resource/img/fj843.jpg" width="160"></vxe-image>
      </vxe-card>

      <vxe-card title="卡片2" width="100%" border>
        <vxe-image src="https://vxeui.com/resource/img/fj843.jpg" width="160"></vxe-image>
      </vxe-card>

      <vxe-card title="卡片3" width="100%" border>
        <vxe-image src="https://vxeui.com/resource/img/fj843.jpg" width="160"></vxe-image>
      </vxe-card>
    </vxe-space>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isFill = ref(true)
</script>
