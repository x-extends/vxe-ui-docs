<template>
  <div>
    <p>
      <vxe-button @click="toggleTreeEvent()">切换第二个</vxe-button>
      <vxe-button @click="setTreeEvent()">展开第三个</vxe-button>
      <vxe-button @click="expandAllEvent()">展开所有</vxe-button>
      <vxe-button @click="clearExpandEvent()">关闭所有</vxe-button>
    </p>

    <vxe-table
      border
      show-overflow
      show-header-overflow
      ref="tableRef"
      :column-config="{resizable: true}"
      :tree-config="{transform: true, rowField: 'id', parentField: 'parentId'}"
      :checkbox-config="{labelField: 'id'}"
      :data="tableData">
      <vxe-column type="checkbox" title="ID" fixed="left" width="280" tree-node></vxe-column>
      <vxe-column field="name" title="Name" width="300"></vxe-column>
      <vxe-column field="size" title="Size" width="300"></vxe-column>
      <vxe-column field="type" title="Type" width="300"></vxe-column>
      <vxe-column field="date" title="Date" width="300"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { VxeTableInstance } from 'vxe-table'

interface RowVO {
  id: number
  parentId: number | null
  name: string
  type: string
  size: number
  date: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const tableData = ref<RowVO[]>([
  { id: 10000, parentId: null, name: 'test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },
  { id: 10050, parentId: null, name: 'Test2', type: 'mp4', size: 0, date: '2021-04-01' },
  { id: 24300, parentId: 10050, name: 'Test3', type: 'avi', size: 1024, date: '2020-03-01' },
  { id: 20045, parentId: 24300, name: 'test abc4', type: 'html', size: 600, date: '2021-04-01' },
  { id: 10053, parentId: 24300, name: 'test abc96', type: 'avi', size: 0, date: '2021-04-01' },
  { id: 24330, parentId: 10053, name: 'test abc5', type: 'txt', size: 25, date: '2021-10-01' },
  { id: 21011, parentId: 10053, name: 'Test6', type: 'pdf', size: 512, date: '2020-01-01' },
  { id: 22200, parentId: 10053, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 23666, parentId: null, name: 'Test8', type: 'xlsx', size: 2048, date: '2020-11-01' },
  { id: 23677, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 23671, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 23672, parentId: 23677, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 23688, parentId: 23666, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 23681, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 23682, parentId: 23688, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 24555, parentId: null, name: 'test abc9', type: 'avi', size: 224, date: '2020-10-01' },
  { id: 24566, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' },
  { id: 24577, parentId: 24555, name: 'Test7', type: 'js', size: 1024, date: '2021-06-01' }
])

const toggleTreeEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.toggleTreeExpand(tableData.value[1])
  }
}

const setTreeEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.setTreeExpand(tableData.value[8], true)
  }
}

const expandAllEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.setAllTreeExpand(true)
  }
}

const clearExpandEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.clearTreeExpand()
  }
}
</script>
