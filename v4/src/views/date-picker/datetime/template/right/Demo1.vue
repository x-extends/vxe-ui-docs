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
  val1.value = XEUtils.toDateString(new Date(), 'yyyy-MM-dd HH:mm:ss')
}

const selectPrevDayEvent = () => {
  const $datePicker = datePickerRef.value
  if ($datePicker) {
    $datePicker.hidePanel()
  }
  val1.value = XEUtils.toDateString(XEUtils.getWhatDay(new Date(), -1), 'yyyy-MM-dd HH:mm:ss')
}

const selectNextDayEvent = () => {
  const $datePicker = datePickerRef.value
  if ($datePicker) {
    $datePicker.hidePanel()
  }
  val1.value = XEUtils.toDateString(XEUtils.getWhatDay(new Date(), 1), 'yyyy-MM-dd HH:mm:ss')
}
</script>
