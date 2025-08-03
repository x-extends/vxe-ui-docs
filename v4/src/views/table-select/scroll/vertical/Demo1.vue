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
}

const val1 = ref()

const columnList = ref<VxeTableSelectPropTypes.Columns>([
  { type: 'radio', width: 70 },
  { type: 'seq', width: 70 },
  { field: 'name', title: 'Name' },
  { field: 'role', title: 'Role' },
  { field: 'sex', title: 'Sex' }
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
      sex: '男'
    })
  }
  tableData.value = dataList
}

loadList(500)
</script>
