<template>
  <div>
    <vxe-button content="自定义JSX模板" @click="openSlotDrawer()"></vxe-button>
  </div>
</template>

<script lang="tsx">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

export default Vue.extend({
  methods: {
    openSlotDrawer () {
      VxeUI.drawer.open({
        title: '标题',
        showFooter: true,
        width: 600,
        slots: {
          title () {
            return <div style="background: turquoise">标题</div>
          },
          default () {
            return <div style="height:1600px;background: beige">内容区</div>
          },
          footer () {
            return <div style="background: burlywood">底部区</div>
          }
        }
      })
    }
  }
})
</script>
