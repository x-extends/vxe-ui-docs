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
  hours: [8, 9, 10, 11, 12, 14, 15, 16, 17, 18]
})
</script>
