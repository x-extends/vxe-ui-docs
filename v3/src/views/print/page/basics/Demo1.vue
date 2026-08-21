<template>
  <div>
    <vxe-print ref="printRef">
      <vxe-print-page-break>
        <div>第一页</div>
        <div>内容</div>
        <div>内容</div>
      </vxe-print-page-break>
      <vxe-print-page-break>
        <div>第二页</div>
        <div>内容</div>
        <div>内容</div>
      </vxe-print-page-break>
    </vxe-print>
    <vxe-button @click="printEvent1">直接打印</vxe-button>
    <vxe-button @click="printEvent2">调用方法打印</vxe-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VxeUI, VxePrintInstance } from 'vxe-pc-ui'

export default Vue.extend({
  data () {
    return {
    }
  },
  methods: {
    printEvent1 () {
      const $print = this.$refs.printRef as VxePrintInstance
      if ($print) {
        $print.print()
      }
    },
    printEvent2  () {
      VxeUI.print({
        // 使用自定义分页模式，放弃内置的自动分页功能，可以灵活自定义实现任意分页
        pageBreaks: [
          // 第一页
          {
            bodyHtml: `
              <div>第一页</div>
              <div>内容</div>
              <div>内容</div>
              `
          },
          // 第二页
          {
            bodyHtml: `
              <div>第二页</div>
              <div>内容</div>
              <div>内容</div>
              `
          }
        ]
      })
    }
  }
})
</script>
