<template>
  <div>
    X：<vxe-slider v-model="xConfig.height" immediate show-tooltip></vxe-slider>
    Y：<vxe-slider v-model="yConfig.width" immediate show-tooltip></vxe-slider>

    <vxe-scrollbar height="300" :x-config="xConfig" :y-config="yConfig">
      <div v-for="item in 20" :key="item" class="my-scrollbar-item">
        <div>{{ item }}这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容这是一段很长的内容</div>
      </div>
    </vxe-scrollbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeScrollbarPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const xConfig: VxeScrollbarPropTypes.XConfig = {
      height: 6
    }

    const yConfig: VxeScrollbarPropTypes.YConfig = {
      width: 6
    }

    return {
      xConfig,
      yConfig
    }
  }
})
</script>

<style lang="scss" scoped>
.my-scrollbar-item {
  margin: 10px 0;
  line-height: 30px;
  width: 6000px;
}
</style>
