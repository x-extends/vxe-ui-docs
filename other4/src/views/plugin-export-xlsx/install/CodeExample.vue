<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="安装插件 @vxe-ui/plugin-export-xlsx">
          该插件用于支持在表格中导出导入导出 XLSX 文件
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code>
            npm install @vxe-ui/plugin-export-xlsx exceljs
          </pre-code>
        </pre>

        <pre>
          <pre-code class="javascript">
            // main.js
            // ...
            import { VxeUI } from 'vxe-pc-ui'
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
