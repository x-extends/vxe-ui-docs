<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="安装插件 @vxe-ui/plugin-export-xlsx">
          该插件用于支持在表格中导出导入导出 XLSX 文件，基于 <vxe-link href="https://github.com/exceljs/exceljs" target="_blank">exceljs</vxe-link> 实现
        </vxe-tip>
        <vxe-tip status="error">该导出插件基于 <vxe-link href="https://github.com/exceljs/exceljs" target="_blank">exceljs</vxe-link> 库实现，具体开源协议请自行去查看对应的库</vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code
            language="shell"
            :content="`
            npm install ${ uiCDNLib } ${ tableCDNLib } ${pluginExportXlsxCDNLib} exceljs@4.2.1
            # 或者
            yarn add ${ uiCDNLib } ${ tableCDNLib } ${pluginExportXlsxCDNLib} exceljs@4.2.1
            # 或者
            pnpm add ${ uiCDNLib } ${ tableCDNLib } ${pluginExportXlsxCDNLib} exceljs@4.2.1
            `">
          </pre-code>
        </pre>

        <pre>
          <pre-code
            class="javascript"
            :content="`
            // main.js
            // ...
            // 如果完整使用
            import { VxeUI } from 'vxe-pc-ui'
            // 如果只使用表格
            // import { VxeUI } from 'vxe-table'
            import VxeUIPluginExportXLSX from '@vxe-ui/plugin-export-xlsx'
            // import ExcelJS from 'exceljs'
            // ...

            // （推荐）方式1：使用 CDN 方式，这样可以不影响包体积，额外引入 js 就可以
            // 在 index.html 引入 https://cdn.jsdelivr.net/npm/exceljs@4.2.1/dist/exceljs.min.js
            VxeUI.use(VxeUIPluginExportXLSX)

            // 方式2：使用 NPM 安装，注入 ExcelJS 对象
            // VxeUI.use(VxeUIPluginExportXLSX, {
            //   ExcelJS
            // })
            `">
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
const uiCDNLib = computed(() => appStore.uiCDNLib)
const tableCDNLib = computed(() => appStore.tableCDNLib)
const pluginExportXlsxCDNLib = computed(() => appStore.pluginExportXlsxCDNLib)
</script>
