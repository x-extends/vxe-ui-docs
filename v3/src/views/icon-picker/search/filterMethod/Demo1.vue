<template>
  <div>
    <vxe-icon-picker v-model="val1" :popup-config="popupConfig" :filter-config="filterConfig" show-icon-title filterable clearable></vxe-icon-picker>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeIconPickerPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const popupConfig: VxeIconPickerPropTypes.PopupConfig = {
      width: 400
    }
    const filterConfig: VxeIconPickerPropTypes.FilterConfig = {
      filterMethod ({ option, searchValue }) {
        // 实现精确查找
        return option.icon === searchValue
      }
    }

    return {
      val1: '',
      popupConfig,
      filterConfig
    }
  }
})
</script>
