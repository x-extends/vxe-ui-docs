<template>
  <div>
    <vxe-print ref="printRef">
      <vxe-print-page-break>
        <h1>第一页</h1>
        <div>内容</div>
      </vxe-print-page-break>
      <vxe-print-page-break>
        <h1>第二页</h1>
        <div>内容</div>
      </vxe-print-page-break>
      <vxe-print-page-break>
        <h1>第三页</h1>
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
    customStyle: '@page {size: auto;margin: 0mm;}html,body{height:100%;}body{padding:40px;}',
    html: `
    <div class="vxe-print-page-break">
      <h1>第一页</h1>
      <div>内容</div>
    </div>
    <div class="vxe-print-page-break">
      <h1>第二页</h1>
      <div>内容</div>
    </div>
    <div class="vxe-print-page-break">
      <h1>第三页</h1>
      <div>内容</div>
    </div>
    `
  })
}
</script>
