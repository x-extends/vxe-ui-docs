<template>
  <div>
    <vxe-slider v-model="customGap" show-tooltip immediate></vxe-slider>
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

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      customGap: 12
    }
  }
})
</script>
