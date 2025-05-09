<template>
  <div>
    <vxe-date-range-picker ref="dateRangePickerRef" v-model:start-value="startDate" v-model:end-value="endDate" type="time">
      <template #top>
        <vxe-button mode="text" status="primary" @click="selectLastRangeDate(-1)">最近1小时</vxe-button>
      </template>
    </vxe-date-range-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeDateRangePickerInstance } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

const dateRangePickerRef = ref<VxeDateRangePickerInstance>()

const startDate = ref('')
const endDate = ref('')

const selectLastRangeDate = (offsetNum: number) => {
  const $dateRangePicker = dateRangePickerRef.value
  if ($dateRangePicker) {
    $dateRangePicker.hidePanel()
  }
  startDate.value = XEUtils.toDateString(new Date(Date.now() + (1000 * 60 * 60 * offsetNum)), 'HH:mm:ss')
  endDate.value = XEUtils.toDateString(new Date(), 'HH:mm:ss')
}
</script>
