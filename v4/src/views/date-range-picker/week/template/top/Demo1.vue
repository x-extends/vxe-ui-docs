<template>
  <div>
    <vxe-date-range-picker ref="dateRangePickerRef" v-model:start-value="startDate" v-model:end-value="endDate" type="week">
      <template #top>
        <vxe-button mode="text" status="primary" @click="selectLastRangeDate(-7)">最近1周</vxe-button>
        <vxe-button mode="text" @click="selectLastRangeDate(-14)">最近2周</vxe-button>
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
  startDate.value = XEUtils.toDateString(XEUtils.getWhatDay(new Date(), offsetNum), 'yyyy-MM-dd')
  endDate.value = XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
}
</script>
