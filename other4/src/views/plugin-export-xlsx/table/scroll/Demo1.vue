<template>
  <div>
    <vxe-button status="primary" @click="exportEvent">高级导出</vxe-button>
    <vxe-table
      border
      show-footer
      show-overflow
      height="600"
      ref="tableRef"
      :loading="loading"
      :column-config="columnConfig"
      :edit-config="editConfig"
      :export-config="exportConfig"
      :data="tableData"
      :merge-cells="mergeCells"
      :footer-data="footerData">
      <vxe-column type="checkbox" width="70"></vxe-column>
      <vxe-column field="seq" type="seq" width="70"></vxe-column>
      <vxe-column field="code" title="Name" :edit-render="{ name: 'VxeInput' }"></vxe-column>
      <vxe-column field="role" title="字符串类型" cell-type="string" :edit-render="{ name: 'VxeInput' }"></vxe-column>
      <vxe-colgroup title="分组1">
        <vxe-column field="num1" title="数值" :edit-render="{ name: 'VxeNumberInput', props: { type: 'float' } }"></vxe-column>
        <vxe-column field="num2" title="数值（负数标红）" :edit-render="{ name: 'VxeNumberInput', showNegativeStatus: true, props: { type: 'float' } }"></vxe-column>
      </vxe-colgroup>
      <vxe-column field="amount1" title="货币" :edit-render="{ name: 'VxeNumberInput', props: { type: 'amount', showCurrency: true } }"></vxe-column>
      <vxe-column field="amount2" title="货币（负数标红）" :edit-render="{ name: 'VxeNumberInput', showNegativeStatus: true, props: { type: 'amount', showCurrency: true } }"></vxe-column>
      <vxe-column field="imgUrl" title="图片" width="80" :cell-render="imgUrlCellRender"></vxe-column>
    </vxe-table>
  </div>
</template>

<script lang="tsx" setup>
import { ref, reactive } from 'vue'
import type { VxeTablePropTypes, VxeTableInstance, VxeColumnPropTypes } from 'vxe-table'

interface RowVO {
  id: number
  name: string
  code: string
  num1: number | null
  num2: number | null
  amount1: number | null
  amount2: number | null
  imgUrl: string
}

const tableRef = ref<VxeTableInstance<RowVO>>()

const imgUrlCellRender = reactive<VxeColumnPropTypes.CellRender>({
  name: 'VxeImage',
  props: {
    width: 36,
    height: 36
  }
})

const columnConfig = reactive<VxeTablePropTypes.ColumnConfig>({
  resizable: true
})

const editConfig = reactive<VxeTablePropTypes.EditConfig>({
  trigger: 'click',
  mode: 'cell'
})

const mergeCells = ref<VxeTablePropTypes.MergeCells>([
  { row: 0, col: 2, rowspan: 1, colspan: 2 },
  { row: 2, col: 2, rowspan: 2, colspan: 1 }
])

const exportConfig = reactive<VxeTablePropTypes.ExportConfig>({
  type: 'xlsx'
})

const loading = ref(false)
const tableData = ref<RowVO[]>([])

const footerData = ref<VxeTablePropTypes.FooterData>([
  { checkbox: '合计', name: '12人', no1: 356 }
])

// 模拟后端接口
const loadList = (size: number) => {
  loading.value = true
  setTimeout(() => {
    const list: RowVO[] = []
    for (let i = 0; i < size; i++) {
      if (i % 5 === 0) {
        list.push({ id: 100000 + i, name: `名字${i}`, code: '000528697411', num1: 0.32, num2: -0.11, amount1: 1000000000, amount2: -0.11, imgUrl: 'https://vxeui.com/resource/img/fj586.png' })
      } else if (i % 4 === 0) {
        list.push({ id: 100000 + i, name: `名字${i}`, code: '001236598563', num1: null, num2: 100000, amount1: -990000, amount2: 4, imgUrl: 'https://vxeui.com/resource/img/fj573.jpeg' })
      } else if (i % 3 === 0) {
        list.push({ id: 100000 + i, name: `名字${i}`, code: '001499675653', num1: 100000, num2: null, amount1: 1, amount2: 100000, imgUrl: 'https://vxeui.com/resource/img/fj567.jpeg' })
      } else if (i % 2 === 0) {
        list.push({ id: 100000 + i, name: `名字${i}`, code: '002568967545', num1: -0.11, num2: 1000000000, amount1: null, amount2: 1000000000, imgUrl: 'https://vxeui.com/resource/img/fj577.jpg' })
      } else {
        list.push({ id: 100000 + i, name: `名字${i}`, code: '005233368777', num1: -990000, num2: 28, amount1: 100000, amount2: null, imgUrl: 'https://vxeui.com/resource/img/bq673.gif' })
      }
    }
    tableData.value = list
    loading.value = false
  }, 300)
}

const exportEvent = () => {
  const $table = tableRef.value
  if ($table) {
    $table.openExport()
  }
}

loadList(200)
</script>
