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
  minutes: [0, 5, 15, 20, 25, 30, 35, 40, 45, 50, 55]
})
</script>
