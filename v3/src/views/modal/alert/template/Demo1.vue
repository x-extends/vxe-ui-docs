<template>
  <div>
    <vxe-modal v-model="showAlert" type="alert" title="标题" showFooter>
      <template #default>
        <span>
          <vxe-icon name="question-circle-fill" />
          <a href="https://vxeui.com/" target="_blank">自定义一个链接</a>
        </span>
      </template>
    </vxe-modal>
    <vxe-button content="自定义插槽模板" @click="openAlertEvent"></vxe-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      showAlert: false
    }
  },
  methods: {
    openAlertEvent  () {
      this.showAlert = true
    }
  }
})
</script>
