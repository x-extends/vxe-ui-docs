<template>
  <div>
    <vxe-button @click="exportEvent">高级导出</vxe-button>
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
      exportConfig: {
        type: 'pdf'
      },
      columns: [
        { field: 'seq', type: 'seq', width: 70 },
        {
          title: '分组1',
          children: [
            { field: 'name', title: 'Name' },
            { field: 'role', title: 'Role' }
          ]
        },
        { field: 'sex', title: 'Sex' },
        { field: 'age', title: 'Age' }
      ],
      data: [
        { id: 10001, name: '张三', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
        { id: 10002, name: '李四', role: 'Test', sex: 'Women', age: 22, address: '广东省' },
        { id: 10003, name: '王五', role: 'PM', sex: 'Man', age: 32, address: '上海' },
        { id: 10004, name: '老六', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
      ],
      footerData: [
        { seq: '合计', name: '888人', age: 666 }
      ]
    }

    return {
      gridOptions
    }
  },
  methods: {
    exportEvent  () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.openExport()
      }
    }
  }
})
</script>
