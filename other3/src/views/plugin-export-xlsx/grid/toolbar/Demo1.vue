<template>
  <div>
    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridProps, VxeColumnPropTypes } from 'vxe-table'

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

export default Vue.extend({
  data () {
    const imgUrlCellRender: VxeColumnPropTypes.CellRender = {
      name: 'VxeImage',
      props: {
        width: 36,
        height: 36
      }
    }

    const gridOptions: VxeGridProps<RowVO> = {
      border: true,
      showFooter: true,
      showOverflow: true,
      columnConfig: {
        resizable: true
      },
      toolbarConfig: {
        export: true
      },
      mergeCells: [
        { row: 0, col: 2, rowspan: 1, colspan: 2 },
        { row: 2, col: 2, rowspan: 2, colspan: 1 }
      ],
      exportConfig: {
        type: 'xlsx'
      },
      columns: [
        { field: 'checkbox', type: 'checkbox', width: 70 },
        { field: 'seq', type: 'seq', width: 70 },
        { field: 'name', title: 'Name' },
        { field: 'code', title: '字符串类型', cellType: 'string' },
        {
          title: '分组1',
          children: [
            { field: 'num1', title: '数值', cellRender: { name: 'FormatNumberInput', props: { type: 'float' } } },
            { field: 'num2', title: '数值（负数标红）', cellRender: { name: 'FormatNumberInput', showNegativeStatus: true, props: { type: 'float' } } }
          ]
        },
        { field: 'amount1', title: '货币', cellRender: { name: 'FormatNumberInput', props: { type: 'amount', showCurrency: true } } },
        { field: 'amount2', title: '货币（负数标红）', cellRender: { name: 'FormatNumberInput', showNegativeStatus: true, props: { type: 'amount', showCurrency: true } } },
        { field: 'imgUrl', title: '图片', width: 80, cellRender: imgUrlCellRender }
      ],
      data: [
        { id: 10001, name: '张三', code: '000528697411', num1: 0.32, num2: -0.11, amount1: 1000000000, amount2: -0.11, imgUrl: 'https://vxeui.com/resource/img/fj586.png' },
        { id: 10002, name: '李四', code: '001236598563', num1: null, num2: 100000, amount1: -990000, amount2: 4, imgUrl: 'https://vxeui.com/resource/img/fj573.jpeg' },
        { id: 10003, name: '王五', code: '001499675653', num1: 100000, num2: null, amount1: 1, amount2: 100000, imgUrl: 'https://vxeui.com/resource/img/fj567.jpeg' },
        { id: 10004, name: '老六', code: '002568967545', num1: -0.11, num2: 1000000000, amount1: null, amount2: 1000000000, imgUrl: 'https://vxeui.com/resource/img/fj577.jpg' },
        { id: 10005, name: '小七', code: '005233368777', num1: -990000, num2: 28, amount1: 100000, amount2: null, imgUrl: 'https://vxeui.com/resource/img/bq673.gif' },
        { id: 10006, name: '小八', code: '000369877575', num1: 1000000000, num2: -990000, amount1: -0.11, amount2: -990000, imgUrl: 'https://vxeui.com/resource/img/fj124.jpeg' }
      ],
      footerData: [
        { checkbox: '合计', name: '12人', no1: 356 }
      ]
    }

    return {
      gridOptions,
      imgUrlCellRender
    }
  }
})
</script>
