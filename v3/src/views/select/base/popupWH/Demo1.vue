<template>
  <div>
    <vxe-select v-model="val1" :popup-config="popupConfig" clearable>
      <vxe-option value="1" label="选项1"></vxe-option>
      <vxe-option value="2" label="选项2"></vxe-option>
      <vxe-option value="3" label="选项3"></vxe-option>
      <vxe-option value="4" label="选项4"></vxe-option>
      <vxe-option value="5" label="选项5"></vxe-option>
      <vxe-option value="6" label="选项6"></vxe-option>
      <vxe-option value="7" label="选项7"></vxe-option>
      <vxe-option value="8" label="选项8"></vxe-option>
      <vxe-option value="10" label="选项10"></vxe-option>
      <vxe-option value="11" label="选项11"></vxe-option>
      <vxe-option value="12" label="选项12"></vxe-option>
      <vxe-option value="13" label="选项13"></vxe-option>
      <vxe-option value="14" label="选项14"></vxe-option>
      <vxe-option value="15" label="选项15"></vxe-option>
      <vxe-option value="16" label="选项16"></vxe-option>
      <vxe-option value="17" label="选项17"></vxe-option>
      <vxe-option value="18" label="选项18"></vxe-option>
      <vxe-option value="19" label="选项19"></vxe-option>
      <vxe-option value="20" label="选项20"></vxe-option>
    </vxe-select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeSelectPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const popupConfig: VxeSelectPropTypes.PopupConfig = {
      width: 400,
      height: 500
    }

    return {
      val1: [],
      popupConfig
    }
  }
})
</script>
