<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="自定义掩码格式" type="month" label-format="MM/yyyy" :masked-config="maskedConfig" :popup-config="popupConfig" clearable></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { VxeDatePickerPropTypes } from 'vxe-pc-ui'

const val1 = ref('')
const maskedConfig = reactive<VxeDatePickerPropTypes.MaskedConfig>({
  isMasked: true,
  isArrow: true
})

const popupConfig = reactive<VxeDatePickerPropTypes.PopupConfig>({
  enabled: false
})
</script>
