<template>
  <div>
    <vxe-date-picker ref="datePickerRef" v-model="val1" type="time">
      <template #bottom>
        <vxe-button mode="text" status="primary" @click="selectNowEvent">选择现在</vxe-button>
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

const selectNowEvent = () => {
  const $datePicker = datePickerRef.value
  if ($datePicker) {
    $datePicker.hidePanel()
  }
  val1.value = XEUtils.toDateString(new Date(), 'HH:mm:ss')
}
</script>
