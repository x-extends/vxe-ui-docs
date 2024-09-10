<template>
  <div>
    <vxe-button @click="printEvent">分页打印表格</vxe-button>

    <vxe-table
      border
      show-footer
      height="500"
      ref="tableRef"
      :data="tableData"
      :footer-data="footerData">
      <vxe-column field="id" title="ID" width="60"></vxe-column>
      <vxe-column field="name" title="Name"></vxe-column>
      <vxe-column field="num" title="Num"></vxe-column>
      <vxe-column field="address" title="Address"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeUI, VxeTableInstance, VxeTablePropTypes } from 'vxe-table'
import XEUtils from 'xe-utils'

interface RowVO {
  id: number
  name: string
  role: string
  sex: string
  num: number
  address: string
}

const tableRef = ref<VxeTableInstance>()

const list: RowVO[] = []
let countNum = 0
for (let i = 0; i < 100; i++) {
  list.push({
    id: 10001 + i,
    name: 'Test1',
    role: 'Develop',
    sex: 'Man',
    num: i,
    address: 'test abc'
  })
  countNum += i
}

const tableData = ref(list)

const footerData = ref<VxeTablePropTypes.FooterData>([
  { id: '合计', num: countNum }
])

const printEvent = () => {
  const $table = tableRef.value
  if ($table) {
    // 分割每页26条
    Promise.all(
      XEUtils.chunk(tableData.value, 26).map((pageData, pageIndex, pageList) => {
        return $table.getPrintHtml({
          isHeader: !pageIndex,
          isFooter: pageIndex === pageList.length - 1,
          data: pageData
        }).then(({ html }) => {
          return {
            bodyHtml: html
          }
        })
      })
    ).then(pageBreaks => {
      VxeUI.print({
        title: '分页打印表格',
        showPageNumber: true,
        pageBreaks
      })
    })
  }
}
</script>
