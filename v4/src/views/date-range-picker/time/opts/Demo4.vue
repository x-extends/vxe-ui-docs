<template>
  <div>
    <vxe-date-range-picker v-model:start-value="startDate" v-model:end-value="endDate" type="time" :time-config="timeConfig" clearable></vxe-date-range-picker>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { VxeDateRangePickerPropTypes } from 'vxe-pc-ui'

const startDate = ref('')
const endDate = ref('')

const timeConfig = reactive<VxeDateRangePickerPropTypes.TimeConfig>({
  hours: [8, 9, 10, 11, 12, 14, 15, 16, 17, 18],
  minutes: [0, 5, 15, 20, 25, 30, 35, 40, 45, 50, 55],
  seconds: [0, 10, 20, 30, 40, 50]
})
</script>
