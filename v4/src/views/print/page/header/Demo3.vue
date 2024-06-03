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
      <vxe-print-page-break>
        <div>第三页</div>
        <div>内容</div>
        <div>内容</div>
      </vxe-print-page-break>

      <template #header="{ currentPage, pageCount }">
        <div style="font-size: 20px;padding-top: 20px;text-align: center;">
          <span>标题：自定义标题 </span>
          <span>页码：{{ currentPage }}/{{ pageCount }}</span>
        </div>
      </template>
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
    headerHtml ({ currentPage, pageCount }) {
      return `<div style="font-size: 20px;padding-top: 20px;text-align: center;">
          <span>标题：自定义标题 </span>
          <span>页码：${currentPage}/${pageCount}</span>
        </div>`
    },
    pageBreaks: [
      {
        bodyHtml: `
        <div>第一页</div>
        <div>内容</div>
        <div>内容</div>
        `
      },
      {
        bodyHtml: `
        <div>第二页</div>
        <div>内容</div>
        <div>内容</div>
        `
      },
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
