<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="可方向键操作" :masked-config="maskedConfig" :popup-config="popupConfig" clearable></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { VxeDatePickerPropTypes } from 'vxe-pc-ui'

const val1 = ref('2026-06-18')
const maskedConfig = reactive<VxeDatePickerPropTypes.MaskedConfig>({
  isMasked: true,
  isArrow: true
})

const popupConfig = reactive<VxeDatePickerPropTypes.PopupConfig>({
  enabled: false
})
</script>
