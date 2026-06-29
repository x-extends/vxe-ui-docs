<template>
  <div>
    <vxe-icon-picker v-model="val1" :popup-config="popupConfig" clearable></vxe-icon-picker>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { VxeIconPickerPropTypes } from 'vxe-pc-ui'

const val1 = ref('')
const popupConfig = reactive<VxeIconPickerPropTypes.PopupConfig>({
  chunkSize: 8,
  width: 600,
  height: 400
})
</script>
