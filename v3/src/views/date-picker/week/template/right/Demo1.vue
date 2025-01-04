<template>
  <div>
    <vxe-date-picker ref="datePickerRef" v-model="val1" type="week">
      <template #right>
        <vxe-button-group vertical>
          <vxe-button mode="text" status="primary" @click="selectWeekEvent">选择本周</vxe-button>
          <vxe-button mode="text" @click="selectPrevWeekEvent">选择上一周</vxe-button>
          <vxe-button mode="text" @click="selectNextWeekEvent">选择下一周</vxe-button>
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
    selectWeekEvent () {
      const $datePicker = this.$refs.datePickerRef as VxeDatePickerInstance
      if ($datePicker) {
        $datePicker.hidePanel()
      }
      this.val1 = XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
    },
    selectPrevWeekEvent () {
      const $datePicker = this.$refs.datePickerRef as VxeDatePickerInstance
      if ($datePicker) {
        $datePicker.hidePanel()
      }
      this.val1 = XEUtils.toDateString(XEUtils.getWhatWeek(new Date(), -1), 'yyyy-MM-dd')
    },
    selectNextWeekEvent () {
      const $datePicker = this.$refs.datePickerRef as VxeDatePickerInstance
      if ($datePicker) {
        $datePicker.hidePanel()
      }
      this.val1 = XEUtils.toDateString(XEUtils.getWhatWeek(new Date(), 1), 'yyyy-MM-dd')
    }
  }
})
</script>
