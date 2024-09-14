<template>
  <div>
    <vxe-button content="点击弹出" @click="openEvent"></vxe-button>
  </div>
</template>

<script lang="tsx">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    return {
      loading: false
    }
  },
  methods: {
    openEvent  () {
      VxeUI.drawer.open({
        title: '标题2',
        width: 600,
        beforeHideMethod: () => {
          // 模拟异步
          this.loading = true
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              this.loading = false
              VxeUI.modal.confirm('您确定要关闭吗？').then(type => {
                if (type === 'confirm') {
                  VxeUI.modal.message({
                    content: `允许关闭 ${type}`,
                    status: 'success'
                  })
                  resolve(null)
                } else {
                  VxeUI.modal.message({
                    content: `禁止关闭 ${type}`,
                    status: 'error'
                  })
                  // 返回 Error 禁止关闭
                  reject(new Error())
                }
              })
            }, 300)
          })
        },
        slots: {
          default: () => {
            return <div>
              <div>阻止关闭</div>
              <vxe-loading modelValue={this.loading}></vxe-loading>
            </div>
          }
        }
      })
    }
  }
})
</script>
