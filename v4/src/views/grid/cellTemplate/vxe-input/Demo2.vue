<template>
  <div>
    <vxe-grid v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="tsx" setup>
import { reactive } from 'vue'
import type { VxeGridProps } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
}

const gridOptions = reactive<VxeGridProps<RowVO>>({
  border: true,
  showOverflow: true,
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    {
      field: 'role',
      title: '角色',
      slots: {
        default: ({ row }) => {
          return <vxe-input v-model={row.role}></vxe-input>
        }
      }
    }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop' },
    { id: 10002, name: 'Test2', role: 'Test' },
    { id: 10003, name: 'Test3', role: 'PM' }
  ]
})
</script>
