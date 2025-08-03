<template>
  <div>
    <vxe-table-select
      v-model="val1"
      :columns="columnList"
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
  value: number
  label: string
  role: string
  sex: string
  age: number
  address: string
}

const val1 = ref()

const columnList = ref<VxeTableSelectPropTypes.Columns>([
  { type: 'radio', width: 70 },
  { field: 'label', title: 'Name' },
  { field: 'role', title: 'Role' },
  { field: 'sex', title: 'Sex' },
  { field: 'address', title: 'Address' }
])

const tableData = ref<RowVO[]>([
  { value: 10001, label: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
  { value: 10002, label: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
  { value: 10003, label: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
  { value: 10004, label: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }
])

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
  pagerConfig
})

pagerConfig.total = tableData.value.length

const pageChangeEvent: VxeTableSelectEvents.PageChange = ({ pageSize, currentPage }) => {
  pagerConfig.currentPage = currentPage
  pagerConfig.pageSize = pageSize
  console.log('page change')
}
</script>
