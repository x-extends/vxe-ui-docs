<template>
  <div>
    <vxe-modal v-model="showMsg" type="message" :mask="false" :lockView="false" :showHeader="false">
      <template #default>
        <span>
          <vxe-icon name="question-circle-fill" />
          <a href="https://vxeui.com/" target="_blank">自定义一个链接</a>
        </span>
      </template>
    </vxe-modal>
    <vxe-button content="自定义插槽模板" @click="openMsgEvent"></vxe-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    return {
      showMsg: false
    }
  },
  methods: {
    openMsgEvent () {
      this.showMsg = true
    }
  }
})
</script>
