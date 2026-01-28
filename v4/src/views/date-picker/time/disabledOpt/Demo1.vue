<template>
  <div>
    <vxe-date-picker v-model="val1" type="time" :time-config="timeConfig" clearable></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { VxeDatePickerPropTypes } from 'vxe-pc-ui'

const val1 = ref('')

const timeConfig = reactive<VxeDatePickerPropTypes.TimeConfig>({
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
