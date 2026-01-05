<template>
  <div>
    <vxe-print ref="printRef" :custom-style="customStyle">
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

<script lang="ts" setup>
import { ref } from 'vue'
import { VxeUI, VxePrintInstance } from 'vxe-pc-ui'

const printRef = ref<VxePrintInstance>()

const customStyle = ref(`
  .my-title {
    font-size: 30px;
  }
  .my-wh {
    height: 200px;
    color: red;
    background-color: blue;
  }
`)

const printEvent1 = () => {
  const $print = printRef.value
  if ($print) {
    $print.print()
  }
}

const printEvent2 = () => {
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
    customStyle: customStyle.value
  })
}
</script>
