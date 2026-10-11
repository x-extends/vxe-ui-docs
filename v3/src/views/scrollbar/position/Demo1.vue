<template>
  <div>
    X：<vxe-radio-group v-model="xConfig.position">
      <vxe-radio-button checked-value="top" content="top"></vxe-radio-button>
      <vxe-radio-button checked-value="bottom" content="bottom"></vxe-radio-button>
    </vxe-radio-group>
    Y：<vxe-radio-group v-model="yConfig.position">
      <vxe-radio-button checked-value="left" content="left"></vxe-radio-button>
      <vxe-radio-button checked-value="right" content="right"></vxe-radio-button>
    </vxe-radio-group>

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
      position: 'top'
    }

    const yConfig: VxeScrollbarPropTypes.YConfig = {
      position: 'left'
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
