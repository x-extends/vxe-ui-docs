<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="掩码输入" type="month" :masked-config="maskedConfig" :popup-config="popupConfig"></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { VxeDatePickerPropTypes } from 'vxe-pc-ui'

const val1 = ref('2026-06')
const maskedConfig = reactive<VxeDatePickerPropTypes.MaskedConfig>({
  isMasked: true
})

const popupConfig = reactive<VxeDatePickerPropTypes.PopupConfig>({
  enabled: false
})
</script>
