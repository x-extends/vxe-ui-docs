<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions">
      <template #customHeader="{ isAllChecked }">
        <vxe-button status="success" @click="toggleAllEvent">切换</vxe-button>
        <span>{{ isAllChecked ? '全选' : '取消' }}</span>
      </template>
    </vxe-grid>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeGridProps, VxeGridInstance } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const gridRef = ref<VxeGridInstance<RowVO>>()

const gridOptions = reactive<VxeGridProps<RowVO>>({
  customConfig: {
    mode: 'modal',
    slots: {
      header: 'customHeader'
    }
  },
  toolbarConfig: {
    custom: true
  },
  columns: [
    { type: 'seq', width: 70 },
    { field: 'name', title: 'Name' },
    { field: 'sex', title: 'Sex' },
    { field: 'age', title: 'Age' }
  ],
  data: [
    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
  ]
})

const toggleAllEvent = () => {
  const $grid = gridRef.value
  if ($grid) {
    $grid.toggleCustomAllCheckbox()
  }
}
</script>
