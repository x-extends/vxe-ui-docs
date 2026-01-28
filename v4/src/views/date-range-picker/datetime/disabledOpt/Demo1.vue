<template>
  <div>
    <vxe-date-range-picker v-model:start-value="startDate" v-model:end-value="endDate" type="datetime" :time-config="timeConfig" clearable></vxe-date-range-picker>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { VxeDateRangePickerPropTypes } from 'vxe-pc-ui'

const startDate = ref('')
const endDate = ref('')

const timeConfig = reactive<VxeDateRangePickerPropTypes.TimeConfig>({
  hourDisabledMethod ({ hour }) {
    return hour % 2 === 0
  },
  minuteDisabledMethod ({ minute }) {
    return minute % 5 === 0
  },
  secondDisabledMethod ({ second }) {
    return second % 10 === 0
  }
})
</script>
