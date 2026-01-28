<template>
  <div>
    <p>
      <vxe-button mode="text" permission-code="xxx">文本按钮</vxe-button>
    </p>
    <p>
      <vxe-button permission-code="xxx">普通按钮</vxe-button>
    </p>
    <p>
      <vxe-button-group mode="text" permission-code="xxx">
        <vxe-button content="文本按钮1" permission-code="xxx"></vxe-button>
        <vxe-button content="文本按钮2" permission-code="xxx"></vxe-button>
        <vxe-button content="文本按钮3" permission-code="xxx"></vxe-button>
      </vxe-button-group>
    </p>
    <p>
      <vxe-button-group :options="btnList" permission-code="xxx"></vxe-button-group>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeButtonGroupPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const btnList: VxeButtonGroupPropTypes.Options = [
      { content: '按钮1', status: 'warning', name: 1, permissionCode: 'xxx' },
      { content: '按钮1', status: 'success', name: 2, permissionCode: 'xxx' },
      { content: '按钮1', status: 'error', name: 3, permissionCode: 'xxx' }
    ]

    return {
      btnList
    }
  }
})
</script>
