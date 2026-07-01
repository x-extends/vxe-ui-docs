<template>
  <div>
    <vxe-icon-picker v-model="val1" :popup-config="popupConfig" :filter-config="filterConfig" show-icon-title filterable clearable></vxe-icon-picker>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeIconPickerPropTypes } from 'vxe-pc-ui'

const val1 = ref('')
const popupConfig = reactive<VxeIconPickerPropTypes.PopupConfig>({
  width: 400
})
const filterConfig = reactive<VxeIconPickerPropTypes.FilterConfig>({
  filterMethod ({ option, searchValue }) {
    // 实现精确查找
    return option.icon === searchValue
  }
})
</script>
