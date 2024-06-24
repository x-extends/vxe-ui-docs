<template>
  <div>
    <vxe-button @click="insertEvent">新增</vxe-button>
    <vxe-button @click="saveEvent">保存</vxe-button>

    <vxe-table
      border
      show-overflow
      keep-source
      ref="tableRef"
      :edit-config="{ trigger: 'click', mode: 'row'}"
      :data="tableData">
      <vxe-column type="checkbox" width="60"></vxe-column>
      <vxe-column type="seq" title="Number" width="80"></vxe-column>
      <vxe-column title="Name" field="name" min-width="140" :edit-render="{ name: 'ElInput' }"></vxe-column>
      <vxe-column title="自动补全输入" field="role" width="200" :edit-render="roleEditRender"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { ElMessageBox } from 'element-plus'
import { VxeTableInstance, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  role: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const restaurants = [
  { value: 'Designer', name: 'Designer' },
  { value: 'Develop', name: 'Develop' },
  { value: 'Test', name: 'Test' },
  { value: 'PM', name: 'PM' }
]

const roleEditRender = reactive<VxeColumnPropTypes.EditRender>({
  name: 'ElAutocomplete',
  props: {
    fetchSuggestions (queryString: any, cb: (params: any) => void) {
      const results = queryString ? restaurants.filter(item => (item.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0)) : restaurants
      // 模拟后端接口
      setTimeout(() => {
        cb(results)
      }, 500 * Math.random())
    }
  }
})

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', role: '' },
  { id: 10002, name: 'Test2', role: 'Develop' }
])

const insertEvent = async () => {
  const $table = tableRef.value
  if ($table) {
    const record = {
      flag: false
    }
    const { row: newRow } = await $table.insert(record)
    $table.setEditRow(newRow)
  }
}

const saveEvent = () => {
  const $table = tableRef.value
  if ($table) {
    const { insertRecords, removeRecords, updateRecords } = $table.getRecordset()
    if (insertRecords.length || removeRecords.length || updateRecords.length) {
      ElMessageBox.alert(`insertRecords=${insertRecords.length}; removeRecords=${removeRecords.length}; updateRecords=${updateRecords.length}`)
    } else {
      ElMessageBox.alert('数据未改动！')
    }
  }
}
</script>
