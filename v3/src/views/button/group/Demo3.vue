<template>
  <div>
    <p>
      <vxe-button-group mode="text" :options="btnList"></vxe-button-group>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeButtonGroupPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const btnList: VxeButtonGroupPropTypes.Options = [
      { content: '按钮1', status: 'warning', name: 1 },
      { content: '按钮1', status: 'success', name: 2 },
      { content: '按钮1', status: 'error', name: 3 }
    ]

    return {
      btnList
    }
  }
})
</script>
