<template>
  <div>
    <vxe-date-picker ref="datePickerRef" v-model="val1" type="time">
      <template #left>
        <vxe-button-group vertical>
          <vxe-button mode="text" status="primary" @click="selectNowEvent">选择现在</vxe-button>
        </vxe-button-group>
      </template>
    </vxe-date-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeDatePickerInstance } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

export default Vue.extend({
  data () {
    return {
      val1: ''
    }
  },
  methods: {
    selectNowEvent () {
      const $datePicker = this.$refs.datePickerRef as VxeDatePickerInstance
      if ($datePicker) {
        $datePicker.hidePanel()
      }
      this.val1 = XEUtils.toDateString(new Date(), 'HH:mm:ss')
    }
  }
})
</script>
