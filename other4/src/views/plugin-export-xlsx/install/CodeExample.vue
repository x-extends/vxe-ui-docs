<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="安装插件 @vxe-ui/plugin-export-xlsx">
          该插件用于支持在表格中导出导入导出 XLSX 文件，基于 <vxe-link href="https://github.com/exceljs/exceljs" target="_blank">exceljs</vxe-link> 实现
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code
            language="shell"
            :content="`
            npm install ${ uiCDNLib } ${ tableCDNLib } ${pluginExportXlsxCDNLib} exceljs
            # 或者
            yarn add ${ uiCDNLib } ${ tableCDNLib } ${pluginExportXlsxCDNLib} exceljs
            # 或者
            pnpm add ${ uiCDNLib } ${ tableCDNLib } ${pluginExportXlsxCDNLib} exceljs
            `">
          </pre-code>
        </pre>

        <pre>
          <pre-code class="javascript">
            // main.js
            // ...
            // 如果完整使用
            import { VxeUI } from 'vxe-pc-ui'
            // 如果只使用表格
            // import { VxeUI } from 'vxe-table'
            import VxeUIPluginExportXLSX from '@vxe-ui/plugin-export-xlsx'
            import ExcelJS from 'exceljs'
            // ...

            // 方式1：建议使用 CDN 方式，这样可以不影响包体积，额外引入 js 就可以
            VxeUI.use(VxeUIPluginExportXLSX)

            // 方式2：使用 NPM 安装，注入 ExcelJS 对象
            // VxeUI.use(VxeUIPluginExportXLSX, {
            //   ExcelJS
            // })
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
