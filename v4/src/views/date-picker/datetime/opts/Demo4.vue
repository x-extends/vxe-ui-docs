<template>
  <div>
    <vxe-date-picker v-model="val1" type="datetime" :time-config="timeConfig" clearable></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { VxeDatePickerPropTypes } from 'vxe-pc-ui'

const val1 = ref('')

const timeConfig = reactive<VxeDatePickerPropTypes.TimeConfig>({
  hours: [8, 9, 10, 11, 12, 14, 15, 16, 17, 18],
  minutes: [0, 5, 15, 20, 25, 30, 35, 40, 45, 50, 55],
  seconds: [0, 10, 20, 30, 40, 50]
})
</script>
