<template>
  <div>
    <vxe-date-picker v-model="val1" placeholder="掩码输入" type="year" :masked-config="maskedConfig"></vxe-date-picker>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { VxeDatePickerPropTypes } from 'vxe-pc-ui'

const val1 = ref('')
const maskedConfig = reactive<VxeDatePickerPropTypes.MaskedConfig>({
  isMasked: true
})
</script>
