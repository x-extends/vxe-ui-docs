<template>
  <div>
    <vxe-button @mouseenter="mouseenterEvent" @mouseleave="mouseleaveEvent">全局提示1</vxe-button>
    <vxe-button @mouseenter="mouseenterEvent" @mouseleave="mouseleaveEvent">全局提示2</vxe-button>
    <vxe-button @mouseenter="mouseenterEvent" @mouseleave="mouseleaveEvent">全局提示3</vxe-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeButtonDefines } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    return {}
  },
  methods: {
    mouseenterEvent ({ $event }: VxeButtonDefines.MouseenterEventParams) {
      VxeUI.tooltip.open($event.target, {
        content: '提示内容111'
      })
    },
    mouseleaveEvent () {
      VxeUI.tooltip.close()
    }
  }
})
</script>
