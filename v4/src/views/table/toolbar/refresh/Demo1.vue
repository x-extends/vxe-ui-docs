<template>
  <div>
    <vxe-toolbar ref="toolbarRef" refresh :refresh-options="refreshOptions"></vxe-toolbar>
    <vxe-table
      ref="tableRef"
      :loading="loading"
      :data="tableData">
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="sex" title="Sex"></vxe-column>
      <vxe-column field="age" title="Age"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import type { VxeToolbarInstance, VxeTableInstance, VxeToolbarPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const toolbarRef = ref<VxeToolbarInstance>()
const tableRef = ref<VxeTableInstance>()

const loading = ref(false)
const tableData = ref<RowVO[]>([])

// 模拟后端接口
const queryMethod = () => {
  loading.value = true
  setTimeout(() => {
    const currNow = Date.now()
    tableData.value = [
      { id: 10001, name: 'Test1' + currNow + 1, role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
      { id: 10002, name: 'Test2' + currNow + 2, role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
      { id: 10003, name: 'Test3' + currNow + 3, role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
      { id: 10004, name: 'Test4' + currNow + 4, role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
    ]
    loading.value = false
  }, 300)
}

const refreshOptions = reactive<VxeToolbarPropTypes.RefreshOptions>({
  queryMethod
})

queryMethod()

onMounted(() => {
  const $table = tableRef.value
  const $toolbar = toolbarRef.value
  if ($table && $toolbar) {
    $table.connect($toolbar)
  }
})
</script>
