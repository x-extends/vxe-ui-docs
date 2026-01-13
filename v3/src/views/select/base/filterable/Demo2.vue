<template>
  <div>
    <vxe-select v-model="val1" placeholder="本地搜索" :filter-config="filterConfig" clearable filterable>
      <vxe-option value="1" label="选项1"></vxe-option>
      <vxe-option value="2" label="选项2"></vxe-option>
      <vxe-option value="3" label="选项3"></vxe-option>
      <vxe-option value="4" label="选项4"></vxe-option>
      <vxe-option value="5" label="选项5"></vxe-option>
      <vxe-option value="6" label="选项6"></vxe-option>
      <vxe-option value="7" label="选项7"></vxe-option>
      <vxe-option value="8" label="选项8"></vxe-option>
    </vxe-select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeSelectPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const filterConfig: VxeSelectPropTypes.FilterConfig = {
      filterMethod ({ searchValue, option }) {
        return option.label && option.label.indexOf(searchValue) > -1
      }
    }
    return {
      val1: null,
      filterConfig
    }
  }
})
</script>
