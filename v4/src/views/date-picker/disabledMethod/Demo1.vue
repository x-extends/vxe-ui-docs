<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="禁用选项" :disabled-method="disabledDateMethod"></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeDatePickerPropTypes } from 'vxe-pc-ui'

const val1 = ref('')

const disabledDateMethod: VxeDatePickerPropTypes.DisabledMethod = (params) => {
  const { date } = params
  const dd = date.getDate()
  // 限制只允许选择 5-25 号
  return dd > 25 || dd < 5
}
</script>
