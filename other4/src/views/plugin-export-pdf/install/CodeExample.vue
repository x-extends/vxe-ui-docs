<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="安装插件 @vxe-ui/plugin-export-pdf">
          <vxe-link icon="vxe-icon-github-fill" href="https://github.com/x-extends/vxe-ui-plugins/tree/main/plugin-export-pdf" target="_blank"></vxe-link> 该插件用于支持在表格中导出导入导出 PDF 文件，基于 <vxe-link href="https://github.com/MrRio/jsPDF" target="_blank">jspdf</vxe-link> 实现
        </vxe-tip>
        <vxe-tip status="error">该导出插件基于 <vxe-link href="https://github.com/parallax/jsPDF" target="_blank">jsPDF</vxe-link> 库实现，具体开源协议请自行去查看对应的库</vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code
            language="shell"
            :content="`
            npm install ${ uiCDNLib } ${ tableCDNLib } ${pluginExportPdfCDNLib} jspdf@2.5.2
            # 或者
            yarn add ${ uiCDNLib } ${ tableCDNLib } ${pluginExportPdfCDNLib} jspdf@2.5.2
            # 或者
            pnpm add ${ uiCDNLib } ${ tableCDNLib } ${pluginExportPdfCDNLib} jspdf@2.5.2
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
          import VxeUIPluginExportPDF from '@vxe-ui/plugin-export-pdf'
          // import { jsPDF } from 'jspdf'
          // ...

          // （推荐）方式1：使用 CDN 方式，这样可以不影响包体积，额外引入 js 就可以
          // 在 index.html 引入 https://cdn.jsdelivr.net/npm/jspdf@2.5.2/dist/jspdf.umd.js
          VxeUI.use(VxeUIPluginExportPDF, {
            // 支持中文字体，字体库非常大，建议下载到项目本地
            fontName: 'SourceHanSans-Normal',
            fonts: [
              {
                fontName: 'SourceHanSans-Normal',
                fontUrl: 'https://cdn.jsdelivr.net/npm/${pluginExportPdfCDNLib}/fonts/source-han-sans-normal.js'
              }
            ]
          })

          // 方式2：使用 NPM 安装，注入 jsPDF 对象
          // VxeUI.use(VxeUIPluginExportPDF, {
          //   jsPDF
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
const pluginExportPdfCDNLib = computed(() => appStore.pluginExportPdfCDNLib)
</script>
