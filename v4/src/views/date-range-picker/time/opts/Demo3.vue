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
  seconds: [0, 10, 20, 30, 40, 50]
})
</script>
