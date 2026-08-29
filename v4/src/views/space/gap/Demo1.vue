<template>
  <div>
    <vxe-slider v-model="customGap" immediate></vxe-slider>
    <vxe-space :gap="customGap">
      <vxe-card title="卡片1" border>
        <vxe-image src="https://vxeui.com/resource/img/fj843.jpg" width="140"></vxe-image>
      </vxe-card>

      <vxe-card title="卡片2" border>
        <vxe-image src="https://vxeui.com/resource/img/fj843.jpg" width="140"></vxe-image>
      </vxe-card>

      <vxe-card title="卡片3" border>
        <vxe-image src="https://vxeui.com/resource/img/fj843.jpg" width="140"></vxe-image>
      </vxe-card>
    </vxe-space>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const customGap = ref(12)
</script>
