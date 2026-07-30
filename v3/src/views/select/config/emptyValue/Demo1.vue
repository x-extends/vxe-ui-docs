<template>
  <div>
    <div>
      <vxe-select v-model="val1" v-bind="selectOptions1"></vxe-select>
      <span>{{ '' + val1 }}</span>
    </div>
    <div>
      <vxe-select v-model="val2" v-bind="selectOptions2"></vxe-select>
      <span>{{ '' + val2 }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeSelectProps } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const selectOptions1: VxeSelectProps = {
      clearable: true,
      filterable: true,
      placeholder: '默认 null',
      options: [
        { value: '1001', label: 'table' },
        { value: '1002', label: 'grid' },
        { value: '1003', label: 'button' },
        { value: '1004', label: 'toolbar' },
        { value: '1005', label: 'tooltip' },
        { value: '1006', label: 'pager' },
        { value: '1007', label: 'print' },
        { value: '1008', label: 'export' },
        { value: '1009', label: 'import' },
        { value: '1010', label: 'select' },
        { value: '1012', label: 'checkbox' },
        { value: '1013', label: 'group' }
      ]
    }

    const selectOptions2: VxeSelectProps = {
      clearable: true,
      filterable: true,
      placeholder: "自定义 ''",
      emptyValue: '',
      options: [
        { value: '1001', label: 'table' },
        { value: '1002', label: 'grid' },
        { value: '1003', label: 'button' },
        { value: '1004', label: 'toolbar' },
        { value: '1005', label: 'tooltip' },
        { value: '1006', label: 'pager' },
        { value: '1007', label: 'print' },
        { value: '1008', label: 'export' },
        { value: '1009', label: 'import' },
        { value: '1010', label: 'select' },
        { value: '1012', label: 'checkbox' },
        { value: '1013', label: 'group' }
      ]
    }

    return {
      val1: null,
      selectOptions1,
      val2: '',
      selectOptions2
    }
  }
})
</script>
