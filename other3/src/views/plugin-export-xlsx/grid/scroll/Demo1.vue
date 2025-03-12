<template>
  <div>
    <vxe-button @click="loadList(500)">加载500行</vxe-button>
    <vxe-button @click="loadList(2000)">加载2000行</vxe-button>
    <vxe-button status="primary" @click="exportEvent">高级导出</vxe-button>

    <vxe-grid ref="gridRef" v-bind="gridOptions"></vxe-grid>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { VxeGridInstance, VxeGridProps, VxeColumnPropTypes } from 'vxe-table'

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
      height: 600,
      loading: false,
      showFooter: true,
      showOverflow: true,
      columnConfig: {
        resizable: true
      },
      editConfig: {
        trigger: 'click',
        mode: 'cell'
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
        { field: 'name', title: 'Name', editRender: { name: 'VxeInput' } },
        { field: 'code', title: '字符串类型', cellType: 'string', editRender: { name: 'VxeInput' } },
        {
          title: '分组1',
          children: [
            { field: 'num1', title: '数值', editRender: { name: 'VxeNumberInput', props: { type: 'float' } } },
            { field: 'num2', title: '数值（负数标红）', editRender: { name: 'VxeNumberInput', showNegativeStatus: true, props: { type: 'float' } } }
          ]
        },
        { field: 'amount1', title: '货币', editRender: { name: 'VxeNumberInput', props: { type: 'amount', showCurrency: true } } },
        { field: 'amount2', title: '货币（负数标红）', editRender: { name: 'VxeNumberInput', showNegativeStatus: true, props: { type: 'amount', showCurrency: true } } },
        { field: 'imgUrl', title: '图片', width: 80, cellRender: imgUrlCellRender }
      ],
      data: [],
      footerData: [
        { checkbox: '合计', name: '12人', no1: 356 }
      ]
    }

    return {
      gridOptions,
      imgUrlCellRender
    }
  },
  methods: {
    // 模拟后端接口
    loadList (size: number) {
      this.gridOptions.loading = true
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
        this.gridOptions.data = list
        this.gridOptions.loading = false
      }, 300)
    },
    exportEvent () {
      const $grid = this.$refs.gridRef as VxeGridInstance<RowVO>
      if ($grid) {
        $grid.openExport()
      }
    }
  },
  created () {
    this.loadList(200)
  }
})
</script>
