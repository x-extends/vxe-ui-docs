<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  num: number
}

export default Vue.extend({
  data () {
    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showOverflow: true,
      keepSource: true,
      editConfig: {
        trigger: 'click',
        mode: 'row'
      },
      columns: [
        { type: 'checkbox', width: 60 },
        { type: 'seq', title: 'Number', width: 80 },
        { field: 'name', title: 'Name', minWidth: 140 },
        { field: 'num', title: '评分', width: 200, cellRender: { name: 'ARate' } }
      ],
      data: [
        { id: 10001, name: 'Test1', num: 3 },
        { id: 10002, name: 'Test2', num: 2 }
      ]
    }

    return {
      gridOptions
    }
  }
})
</script>
