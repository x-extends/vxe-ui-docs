<template>
  <div>
    <vxe-table-select v-model="val1" :columns="columnList" :options="tableData" :popup-config="popupConfig" :option-props="{value: 'id', label: 'name'}"></vxe-table-select>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { VxeTableSelectPropTypes } from 'vxe-pc-ui'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  age: number
  address: string
}

const val1 = ref()

const columnList = ref<VxeTableSelectPropTypes.Columns>([
  { type: 'radio', width: 70 },
  { type: 'seq', width: 70 },
  {
    title: '分组1',
    children: [
      { field: 'name', title: 'Name' },
      { field: 'role', title: 'Role' }
    ]
  },
  {
    title: '分组1',
    children: [
      { field: 'sex', title: 'Sex' }
    ]
  },
  { field: 'age', title: 'age' },
  { field: 'address', title: 'Address' }
])

const tableData = ref<RowVO[]>([])

const popupConfig = reactive<VxeTableSelectPropTypes.PopupConfig>({
  width: 500,
  height: 400
})

// 模拟行数据
const loadList = (size = 200) => {
  const dataList: RowVO[] = []
  for (let i = 0; i < size; i++) {
    dataList.push({
      id: 10000 + i,
      name: 'Test' + i,
      role: 'Developer',
      sex: '男',
      age: 40,
      address: 'Address'
    })
  }
  tableData.value = dataList
}

loadList(500)
</script>
