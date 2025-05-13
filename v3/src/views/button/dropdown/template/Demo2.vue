<template>
  <div>
    <vxe-button mode="text" @dropdown-click="dropdownClickEvent">
      <template #default>下拉按钮</template>
      <template #dropdowns>
        <vxe-button name="1" mode="text" content="下拉按钮1"></vxe-button>
        <vxe-button name="2" mode="text" content="下拉按钮2"></vxe-button>
        <vxe-button name="3" mode="text" content="下拉按钮3"></vxe-button>
      </template>
    </vxe-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI } from 'vxe-pc-ui'

export default Vue.extend({
  methods: {
    dropdownClickEvent (params) {
      VxeUI.modal.message({
        content: `点击了 ${params.name}`
      })
    }
  }
})
</script>
