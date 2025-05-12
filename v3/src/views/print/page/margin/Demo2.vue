<template>
  <div>
    <vxe-print ref="printRef" title="打印标题" :page-style="pageStyle" show-page-number>
      <vxe-print-page-break>
        <div>第一页</div>
        <div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
      </vxe-print-page-break>
      <vxe-print-page-break>
        <div>第二页</div>
        <div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
      </vxe-print-page-break>
    </vxe-print>
    <vxe-button @click="printEvent1">直接打印</vxe-button>
    <vxe-button @click="printEvent2">调用方法打印</vxe-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxePrintInstance, VxePrintPropTypes } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    const pageStyle: VxePrintPropTypes.PageStyle = {
      marginLeft: 16,
      marginRight: 16,
      header: {
        height: 40
      },
      footer: {
        height: 30
      }
    }

    return {
      pageStyle
    }
  },
  methods: {
    printEvent1 () {
      const $print = this.$refs.printRef as VxePrintInstance
      if ($print) {
        $print.print()
      }
    },
    printEvent2 () {
      VxeUI.print({
        title: '打印标题',
        pageStyle: {
          marginLeft: 16,
          marginRight: 16,
          header: {
            height: 40
          },
          footer: {
            height: 30
          }
        },
        showPageNumber: true,
        pageBreaks: [
          {
            bodyHtml: `
        <div>第一页</div>
        <div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
        `
          },
          {
            bodyHtml: `
        <div>第二页</div>
        <div>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</div>
        `
          }
        ]
      })
    }
  }
})
</script>
