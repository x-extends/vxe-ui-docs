<template>
  <div>
    <vxe-modal v-model="showConfirm" type="confirm" title="标题" showFooter>
      <template #default>
        <span>
          <vxe-icon name="question-circle-fill" />
          <a href="https://vxeui.com/" target="_blank">自定义一个链接</a>
        </span>
      </template>
    </vxe-modal>
    <vxe-button content="自定义插槽模板" @click="openConfirmEvent"></vxe-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    return {
      showConfirm: false
    }
  },
  methods: {
    openConfirmEvent  () {
      this.showConfirm = true
    }
  }
})
</script>
