<template>
  <div>
    <vxe-select v-model="val1" placeholder="分组" clearable transfer>
      <vxe-optgroup label="选项2">
        <vxe-option value="2-1" label="选项2-1"></vxe-option>
        <vxe-option value="2-2" label="选项2-2"></vxe-option>
        <vxe-option value="2-3" label="选项2-3"></vxe-option>
      </vxe-optgroup>
      <vxe-optgroup label="选项3">
        <vxe-option value="3-1" label="选项3-1"></vxe-option>
        <vxe-option value="3-2" label="选项3-2"></vxe-option>
      </vxe-optgroup>
    </vxe-select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      val1: null
    }
  }
})
</script>
