<template>
  <div>
    <vxe-date-picker ref="datePickerRef" v-model="val1">
      <template #top>
        <vxe-tag status="primary" @click="selectTodayEvent">选择今天</vxe-tag>
        <vxe-tag status="primary" @click="selectPrevDayEvent">选择昨天</vxe-tag>
        <vxe-tag status="primary" @click="selectNextDayEvent">选择明天</vxe-tag>
      </template>
    </vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeDatePickerInstance } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

const datePickerRef = ref<VxeDatePickerInstance>()

const val1 = ref('')

const selectTodayEvent = () => {
  const $datePicker = datePickerRef.value
  if ($datePicker) {
    $datePicker.hidePanel()
  }
  val1.value = XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
}

const selectPrevDayEvent = () => {
  const $datePicker = datePickerRef.value
  if ($datePicker) {
    $datePicker.hidePanel()
  }
  val1.value = XEUtils.toDateString(XEUtils.getWhatDay(new Date(), -1), 'yyyy-MM-dd')
}

const selectNextDayEvent = () => {
  const $datePicker = datePickerRef.value
  if ($datePicker) {
    $datePicker.hidePanel()
  }
  val1.value = XEUtils.toDateString(XEUtils.getWhatDay(new Date(), 1), 'yyyy-MM-dd')
}
</script>
