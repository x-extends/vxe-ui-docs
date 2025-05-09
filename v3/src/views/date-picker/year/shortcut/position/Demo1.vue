<template>
  <div>
    <div>
      <vxe-radio-group v-model="shortcutConfig.position">
        <vxe-radio-button label="top" content="顶部"></vxe-radio-button>
        <vxe-radio-button label="bottom" content="底部"></vxe-radio-button>
        <vxe-radio-button label="left" content="左侧"></vxe-radio-button>
        <vxe-radio-button label="right" content="右侧"></vxe-radio-button>
      </vxe-radio-group>
    </div>

    <vxe-date-picker v-model="val1" type="year" :shortcut-config="shortcutConfig"></vxe-date-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeDatePickerPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const shortcutConfig: VxeDatePickerPropTypes.ShortcutConfig = {
      position: 'left',
      options: [
        { code: 'now', content: '今年' },
        { code: 'prev', content: '前一年' },
        { code: 'next', content: '后一年' }
      ]
    }

    return {
      val1: '',
      shortcutConfig
    }
  }
})
</script>
