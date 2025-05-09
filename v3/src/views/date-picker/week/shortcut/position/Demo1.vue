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

    <vxe-date-picker v-model="val1" type="week" :shortcut-config="shortcutConfig"></vxe-date-picker>
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
        { code: 'now', content: '本周' },
        { code: 'prev', content: '前一周' },
        { code: 'next', content: '后一周' }
      ]
    }

    return {
      val1: '',
      shortcutConfig
    }
  }
})
</script>
