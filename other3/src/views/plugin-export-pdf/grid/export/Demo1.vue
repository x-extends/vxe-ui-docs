<template>
  <div>
    <vxe-button @click="exportEvent">直接导出</vxe-button>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridInstance, VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showFooter: true,
      columns: [
        { field: 'seq', type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' },
        { field: 'address', title: 'Address' }
      ],
      data: [
        { id: 10001, name: '张三', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: '李四', role: 'Test', sex: 'Women', age: 22, address: '广东省' },
        { id: 10003, name: '王五', role: 'PM', sex: 'Man', age: 32, address: '上海' },
        { id: 10004, name: '老六', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ],
      footerData: [
        { seq: '合计', name: '12人', age: 356 }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    exportEvent  () {
      const $grid = this.$refs.gridRef as VxeGridInstance
      if ($grid) {
        $grid.exportData({
          type: 'pdf'
        })
      }
    }
  }
})
</script>
