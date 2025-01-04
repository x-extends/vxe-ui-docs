<template>
  <div>
    <vxe-date-picker ref="datePickerRef" v-model="val1" type="datetime">
      <template #right>
        <vxe-button-group vertical>
          <vxe-button mode="text" status="primary" @click="selectTodayEvent">选择今天</vxe-button>
          <vxe-button mode="text" @click="selectPrevDayEvent">选择昨天</vxe-button>
          <vxe-button mode="text" @click="selectNextDayEvent">选择明天</vxe-button>
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
    selectTodayEvent () {
      const $datePicker = this.$refs.datePickerRef as VxeDatePickerInstance
      if ($datePicker) {
        $datePicker.hidePanel()
      }
      this.val1 = XEUtils.toDateString(new Date(), 'yyyy-MM-dd HH:mm:ss')
    },
    selectPrevDayEvent () {
      const $datePicker = this.$refs.datePickerRef as VxeDatePickerInstance
      if ($datePicker) {
        $datePicker.hidePanel()
      }
      this.val1 = XEUtils.toDateString(XEUtils.getWhatDay(new Date(), -1), 'yyyy-MM-dd HH:mm:ss')
    },
    selectNextDayEvent () {
      const $datePicker = this.$refs.datePickerRef as VxeDatePickerInstance
      if ($datePicker) {
        $datePicker.hidePanel()
      }
      this.val1 = XEUtils.toDateString(XEUtils.getWhatDay(new Date(), 1), 'yyyy-MM-dd HH:mm:ss')
    }
  }
})
</script>
