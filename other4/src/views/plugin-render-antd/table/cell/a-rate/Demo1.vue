<template>
  <div>
    <vxe-table
      border
      show-overflow
      keep-source
      ref="tableRef"
      :data="tableData">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" title="Number" width="80"></vxe-column>
      <vxe-column title="Name" field="name" min-width="140"></vxe-column>
      <vxe-column title="Num" field="num" width="200" :cell-render="{ name: 'ARate' }"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface RowVO {
  id: number
  name: string
  num: number
}

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', num: 3 },
  { id: 10002, name: 'Test2', num: 2 }
])
</script>
