<template>
  <div>
    <div>
      <vxe-radio-group v-model="popupConfig.trigger">
        <vxe-radio-button checked-value="default" content="默认"></vxe-radio-button>
        <vxe-radio-button checked-value="icon" content="点击图标"></vxe-radio-button>
        <vxe-radio-button checked-value="manual" content="手动"></vxe-radio-button>
      </vxe-radio-group>
    </div>

    <vxe-date-range-picker v-model="val1" :popup-config="popupConfig"></vxe-date-range-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeDateRangePickerPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const popupConfig: VxeDateRangePickerPropTypes.PopupConfig = {
      trigger: 'default'
    }

    return {
      val1: '2025-10-01,2025-10-07',
      popupConfig
    }
  }
})
</script>
