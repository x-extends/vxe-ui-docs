<template>
  <div>
    <vxe-print ref="printRef" :style-urls="styleUrls">
      <vxe-print-page-break>
        <div class="my-title">第一页</div>
        <div>内容</div>
        <div>内容</div>
      </vxe-print-page-break>
      <vxe-print-page-break>
        <div>第二页</div>
        <div class="my-wh">内容</div>
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
    const styleUrls = [
      'https://vxeui.com/resource/css/print_page_style_urls.css'
    ]

    return {
      styleUrls
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
        pageBreaks: [
          {
            bodyHtml: `
              <div class="my-title">第一页</div>
              <div>内容</div>
              <div>内容</div>
              `
          },
          {
            bodyHtml: `
              <div>第二页</div>
              <div class="my-wh">内容</div>
              <div>内容</div>
              `
          }
        ],
        styleUrls: this.styleUrls
      })
    }
  }
})
</script>
