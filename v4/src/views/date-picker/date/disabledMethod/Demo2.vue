<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="限制只能选择周五" :disabled-method="disabledDateMethod"></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeDatePickerPropTypes } from 'vxe-pc-ui'

const val1 = ref('')

const disabledDateMethod: VxeDatePickerPropTypes.DisabledMethod = (params) => {
  const { date } = params
  // 限制只能选择周五
  return date.getDay() !== 5
}
</script>
