<template>
  <div>
    <vxe-date-picker ref="datePickerRef" v-model="val1" type="week">
      <template #left>
        <vxe-button-group vertical>
          <vxe-button mode="text" status="primary" @click="selectWeekEvent">选择本周</vxe-button>
          <vxe-button mode="text" @click="selectPrevWeekEvent">选择上一周</vxe-button>
          <vxe-button mode="text" @click="selectNextWeekEvent">选择下一周</vxe-button>
        </vxe-button-group>
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

const selectWeekEvent = () => {
  const $datePicker = datePickerRef.value
  if ($datePicker) {
    $datePicker.hidePanel()
  }
  val1.value = XEUtils.toDateString(new Date(), 'yyyy-MM-dd')
}

const selectPrevWeekEvent = () => {
  const $datePicker = datePickerRef.value
  if ($datePicker) {
    $datePicker.hidePanel()
  }
  val1.value = XEUtils.toDateString(XEUtils.getWhatWeek(new Date(), -1), 'yyyy-MM-dd')
}

const selectNextWeekEvent = () => {
  const $datePicker = datePickerRef.value
  if ($datePicker) {
    $datePicker.hidePanel()
  }
  val1.value = XEUtils.toDateString(XEUtils.getWhatWeek(new Date(), 1), 'yyyy-MM-dd')
}
</script>
