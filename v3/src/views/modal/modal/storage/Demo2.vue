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
      showPopup: false
    }
  },
  methods: {
    openEvent () {
      VxeUI.modal.open({
        id: 'modalStore2',
        title: '标题2',
        width: 600,
        height: 400,
        resize: true,
        showMaximize: true,
        showMinimize: true,
        storage: true,
        slots: {
          default: () => {
            return <div>记忆功能，会在首次打开恢复最后一次操作的状态</div>
          }
        }
      })
    }
  }
})
</script>
