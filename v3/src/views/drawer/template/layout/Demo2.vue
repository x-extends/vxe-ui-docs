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
    openSlotDrawer  () {
      VxeUI.drawer.open({
        title: '标题',
        showFooter: true,
        width: 600,
        slots: {
          title () {
            return <div style="background: turquoise">标题</div>
          },
          corner () {
            return <div style="background: darkkhaki">标题右侧</div>
          },
          aside () {
            return <div style="height:1400px;background: darkorchid">侧边栏</div>
          },
          default () {
            return <div style="height:1400px;background: burlywood">内容区</div>
          },
          left () {
            return <div style="height:1600px;background: khaki">左侧区</div>
          },
          right () {
            return <div style="height:1000px;background: darkcyan">右侧区</div>
          },
          // footer () {
          //   return <div style="background: red">底部区，覆盖 leftfoot 和 rightfoot</div>
          // },
          leftfoot () {
            return <div style="background: hotpink">自定义底部左侧</div>
          },
          rightfoot () {
            return <div style="background: orange">自定义底部右侧</div>
          }
        }
      })
    }
  }
})
</script>
