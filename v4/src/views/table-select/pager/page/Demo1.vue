<template>
  <div>
    <vxe-table-select
      v-model="val1"
      :options="tableData"
      :popup-config="popupConfig"
      :grid-config="gridConfig"
      @page-change="pageChangeEvent">
    </vxe-table-select>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { VxeTableSelectPropTypes, VxeTableSelectEvents } from 'vxe-pc-ui'

interface RowVO {
  value: string
  label: string
  nickname: string
  role: string
  sex: string
  age: number
  address: string
}

const allList: RowVO[] = [
  { value: 'Test1', label: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },
  { value: 'Test2', label: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { value: 'Test3', label: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { value: 'Test4', label: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },
  { value: 'Test5', label: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },
  { value: 'Test6', label: 'Test6', nickname: 'T6', role: 'Designer', sex: 'Women', age: 21, address: 'Shenzhen' },
  { value: 'Test7', label: 'Test7', nickname: 'T7', role: 'Test', sex: 'Man', age: 29, address: 'Shenzhen' },
  { value: 'Test8', label: 'Test8', nickname: 'T8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' },
  { value: 'Test9', label: 'Test9', nickname: 'T9', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' },
  { value: 'Test10', label: 'Test10', nickname: 'T10', role: 'Develop', sex: 'Man', age: 35, address: 'Guangzhou' },
  { value: 'Test11', label: 'Test11', nickname: 'T11', role: 'Develop', sex: 'Man', age: 49, address: 'Guangzhou' },
  { value: 'Test12', label: 'Test12', nickname: 'T12', role: 'Develop', sex: 'Women', age: 45, address: 'Shanghai' },
  { value: 'Test13', label: 'Test13', nickname: 'T13', role: 'Test', sex: 'Women', age: 35, address: 'Guangzhou' },
  { value: 'Test14', label: 'Test14', nickname: 'T14', role: 'Test', sex: 'Man', age: 29, address: 'Shanghai' },
  { value: 'Test15', label: 'Test15', nickname: 'T15', role: 'Develop', sex: 'Man', age: 39, address: 'Guangzhou' },
  { value: 'Test16', label: 'Test16', nickname: 'T16', role: 'Test', sex: 'Women', age: 35, address: 'Guangzhou' },
  { value: 'Test17', label: 'Test17', nickname: 'T17', role: 'Test', sex: 'Man', age: 39, address: 'Shanghai' },
  { value: 'Test18', label: 'Test18', nickname: 'T18', role: 'Develop', sex: 'Man', age: 44, address: 'Guangzhou' },
  { value: 'Test19', label: 'Test19', nickname: 'T19', role: 'Develop', sex: 'Man', age: 39, address: 'Guangzhou' },
  { value: 'Test20', label: 'Test20', nickname: 'T20', role: 'Test', sex: 'Women', age: 35, address: 'Guangzhou' },
  { value: 'Test21', label: 'Test21', nickname: 'T21', role: 'Test', sex: 'Man', age: 39, address: 'Shanghai' },
  { value: 'Test22', label: 'Test22', nickname: 'T22', role: 'Develop', sex: 'Man', age: 44, address: 'Guangzhou' }
]

const val1 = ref()

const tableData = ref<RowVO[]>([])

const popupConfig = reactive<VxeTableSelectPropTypes.PopupConfig>({
  width: 600,
  height: 400
})

const pagerConfig = reactive({
  total: 0,
  currentPage: 1,
  pageSize: 10
})

const gridConfig = reactive<VxeTableSelectPropTypes.GridConfig>({
  border: true,
  pagerConfig,
  columns: [
    { type: 'radio', width: 70 },
    { field: 'label', title: 'Name' },
    { field: 'role', title: 'Role' },
    { field: 'sex', title: 'Sex' },
    { field: 'address', title: 'Address' }
  ]
})

// 模拟前端分页
const handlePageData = () => {
  setTimeout(() => {
    const { pageSize, currentPage } = pagerConfig
    pagerConfig.total = allList.length
    tableData.value = allList.slice((currentPage - 1) * pageSize, currentPage * pageSize)
  }, 100)
}

const pageChangeEvent: VxeTableSelectEvents.PageChange = ({ pageSize, currentPage }) => {
  pagerConfig.currentPage = currentPage
  pagerConfig.pageSize = pageSize
  handlePageData()
}

handlePageData()
</script>
