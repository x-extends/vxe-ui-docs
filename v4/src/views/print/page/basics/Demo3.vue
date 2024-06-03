<template>
  <div>
    <vxe-print ref="printRef" align="center">
      <vxe-print-page-break>
        <img src="https://vxeui.com/resource/img/fj573.jpeg" style="width: 100%;">
      </vxe-print-page-break>
      <vxe-print-page-break>
        <img src="https://vxeui.com/resource/img/fj562.png" style="width: 100%;">
      </vxe-print-page-break>
      <vxe-print-page-break>
        <img src="https://vxeui.com/resource/img/fj187.jpg" style="width: 100%;">
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
    pageBreaks: [
      {
        bodyHtml: '<img src="https://vxeui.com/resource/img/fj573.jpeg" style="width: 100%;">'
      },
      {
        bodyHtml: '<img src="https://vxeui.com/resource/img/fj562.png" style="width: 100%;">'
      },
      {
        bodyHtml: '<img src="https://vxeui.com/resource/img/fj187.jpg" style="width: 100%;">'
      }
    ]
  })
}
</script>
