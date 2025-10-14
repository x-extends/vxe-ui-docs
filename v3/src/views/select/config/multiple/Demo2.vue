<template>
  <div>
    <vxe-select v-model="val1" v-bind="selectOptions"></vxe-select>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeSelectProps } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const selectOptions: VxeSelectProps = {
      multiple: true,
      clearable: true,
      placeholder: '多选',
      multiCharOverflow: 2,
      options: [
        { value: 1001, label: 'table' },
        { value: 1002, label: 'grid' },
        { value: 1003, label: 'button' },
        { value: 1004, label: 'toolbar' },
        { value: 1005, label: 'tooltip' },
        { value: 1006, label: 'pager' },
        { value: 1007, label: 'print' },
        { value: 1008, label: 'export' },
        { value: 1009, label: 'import' },
        { value: 1010, label: 'select' },
        { value: 1012, label: 'checkbox' },
        { value: 1013, label: 'group' }
      ]
    }

    return {
      val1: [],
      selectOptions
    }
  }
})
</script>
