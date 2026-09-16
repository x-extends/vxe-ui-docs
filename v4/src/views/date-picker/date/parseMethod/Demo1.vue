<template>
  <div>
    <vxe-notice-bar content="同时支持多种解析格式：yyyy-MM-dd，dd/MM/yyyy，yyyyMMdd，timestamp"></vxe-notice-bar>
    <vxe-date-picker v-model="val1" :parse-input-method="parseDateMethod" clearable></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { VxeDatePickerPropTypes } from 'vxe-pc-ui'
import XEUtils from 'xe-utils'

const val1 = ref(null)

const parseDateMethod: VxeDatePickerPropTypes.ParseMethod = ({ inputValue }) => {
  if (!inputValue) {
    return null
  }

  // 按顺序优先级解析，返回第一个匹配的日期
  const formats = ['yyyy-MM-dd', 'dd/MM/yyyy', 'yyyyMMdd', 'timestamp']
  for (const format of formats) {
    const date = XEUtils.toStringDate(inputValue, format)
    if (XEUtils.isValidDate(date)) {
      return date
    }
  }
  return null
}
</script>
