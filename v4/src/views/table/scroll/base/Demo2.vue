<template>
  <div>
    <vxe-table
      border
      show-overflow
      show-header-overflow
      show-footer-overflow
      height="400"
      :scroll-x="{enabled: true, gt: 0}"
      :data="tableData">
      <vxe-column v-for="item in tableColumns" :key="item.field" v-bind="item"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeTablePropTypes, VxeColumnProps } from 'vxe-pc-ui'

interface RowVO {
  id: number
  [key: string]: string | number
}

const tableData = ref<VxeTablePropTypes.Data<RowVO>>([])
const tableColumns = ref<VxeColumnProps[]>([])

// 模拟行与列数据
const loadDataAndColumns = (rowSize: number, colSize: number) => {
  const colList: VxeColumnProps[] = []
  for (let i = 0; i < colSize; i++) {
    colList.push({
      field: `col${i}`,
      title: `标题${i}`,
      width: 140
    })
  }
  const dataList: RowVO[] = []
  for (let i = 0; i < rowSize; i++) {
    const item: RowVO = {
      id: 10000 + i
    }
    for (let j = 0; j < colList.length; j++) {
      item[`col${j}`] = `值_${i}_${j}`
    }
    dataList.push(item)
  }
  tableColumns.value = colList
  tableData.value = dataList
}

loadDataAndColumns(20, 500)
</script>
