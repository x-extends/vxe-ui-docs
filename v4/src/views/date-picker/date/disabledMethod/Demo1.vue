<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="限制日期范围" :disabled-method="disabledDateMethod"></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeDatePickerPropTypes } from 'vxe-pc-ui'

const val1 = ref('2020-04-15')

const disabledDateMethod: VxeDatePickerPropTypes.DisabledMethod = (params) => {
  const { date } = params
  const minDate = new Date(2020, 3, 10)
  const maxDate = new Date(2020, 4, 5)
  // 限制只允许选择 2020-04-10 ~ 2020-05-05 之间
  return date < minDate || date > maxDate
}
</script>
