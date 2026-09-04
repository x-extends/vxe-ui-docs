<template>
  <div>
    <vxe-slider v-model="customWidth" show-tooltip immediate></vxe-slider>

    <vxe-space :item-width="customWidth + '%'" wrap fill>
      <vxe-card title="卡片1" border>
        <vxe-image src="https://vxeui.com/resource/img/fj843.jpg" max-width="100%"></vxe-image>
      </vxe-card>

      <vxe-card title="卡片2" border>
        <vxe-image src="https://vxeui.com/resource/img/fj843.jpg" max-width="100%"></vxe-image>
      </vxe-card>

      <vxe-card title="卡片3" border>
        <vxe-image src="https://vxeui.com/resource/img/fj843.jpg" max-width="100%"></vxe-image>
      </vxe-card>

      <vxe-card title="卡片3" border>
        <vxe-image src="https://vxeui.com/resource/img/fj843.jpg" max-width="100%"></vxe-image>
      </vxe-card>
    </vxe-space>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const customWidth = ref(25)
</script>
