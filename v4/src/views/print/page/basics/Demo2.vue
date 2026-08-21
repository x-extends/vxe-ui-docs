<template>
  <div>
    <vxe-print ref="printRef" align="center">
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
      <vxe-print-page-break>
        <div>第三页</div>
        <div>内容</div>
        <div>内容</div>
      </vxe-print-page-break>
    </vxe-print>
    <vxe-button @click="printEvent1">直接打印</vxe-button>
    <vxe-button @click="printEvent2">调用方法打印</vxe-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeUI, VxePrintInstance } from 'vxe-pc-ui'

const printRef = ref<VxePrintInstance>()

const printEvent1 = () => {
  const $print = printRef.value
  if ($print) {
    $print.print()
  }
}

const printEvent2 = () => {
  VxeUI.print({
    align: 'center',
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
      },
      // 第三页
      {
        bodyHtml: `
        <div>第三页</div>
        <div>内容</div>
        <div>内容</div>
        `
      }
    ]
  })
}
</script>
