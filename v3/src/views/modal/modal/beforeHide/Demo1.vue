<template>
  <div>
    <vxe-button content="点击弹出" @click="showPopup = true"></vxe-button>
    <vxe-modal v-model="showPopup" title="标题1" :loading="loading" :width="600" :height="400" :before-hide-method="beforeHideMethod" esc-closable resize>
      <template #default>
        <div>阻止关闭</div>
      </template>
    </vxe-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxeModalPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    return {
      showPopup: false,
      loading: false
    }
  },
  methods: {
    beforeHideMethod () {
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
    }
  }
})
</script>
