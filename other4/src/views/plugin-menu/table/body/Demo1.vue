<template>
  <div>
    <vxe-table
      border
      show-overflow
      :menu-config="menuConfig"
      :data="tableData">
      <vxe-column type="checkbox" width="50"></vxe-column>
      <vxe-column type="seq" width="70"></vxe-column>
      <vxe-column title="Name" field="name"></vxe-column>
      <vxe-column title="Nickname" field="nickname"></vxe-column>
      <vxe-column title="Age" field="age"></vxe-column>
      <vxe-column title="Role" field="role"></vxe-column>
      <vxe-column title="Address" field="address"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeTablePropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  nickname: string
  role: string
  sex: string
  age: number
  address: string
}

const menuConfig = reactive<VxeTablePropTypes.MenuConfig>({
  body: {
    options: [
      [
        { code: 'CLEAR_CELL', name: '清除值' },
        { code: 'REVERT_CELL', name: '还原值' }
      ],
      [
        { code: 'PRINT_ALL', name: '打印（Ctrl+P）', prefixConfig: { icon: 'vxe-icon-print' } },
        { code: 'EXPORT_ROW', name: '导出当前行.csv', prefixConfig: { icon: 'vxe-icon-download' } },
        { code: 'EXPORT_ALL', name: '导出全部数据.csv', prefixConfig: { icon: 'vxe-icon-download' } }
      ]
    ]
  }
})

const tableData = ref<RowVO[]>([
  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },
  { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' }
])
</script>
