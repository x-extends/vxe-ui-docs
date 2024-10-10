<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="安装插件 @vxe-ui/plugin-export-pdf">
          该插件用于支持在表格中导出导入导出 PDF 文件，基于 <vxe-link href="https://github.com/MrRio/jsPDF" target="_blank">jspdf</vxe-link> 实现
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code>
            npm install vxe-table@4.7.87 vxe-pc-ui@4.2.19 @vxe-ui/plugin-export-pdf jspdf
            # 或者
            yarn add vxe-table@4.7.87 vxe-pc-ui@4.2.19 @vxe-ui/plugin-export-pdf jspdf
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
            import VXETablePluginExportPDF from '@vxe-ui/plugin-export-xlsx'
            import { jsPDF } from 'jspdf'
            // ...

            // 方式1：建议使用 CDN 方式，这样可以不影响包体积，额外引入 js 就可以
            VxeUI.use(VXETablePluginExportPDF, {
              // 支持中文字体，字体库非常大，建议下载到项目本地
              // fontName: 'SourceHanSans-Normal',
              // fonts: [
              //   {
              //     fontName: 'SourceHanSans-Normal',
              //     fontUrl: 'https://cdn.jsdelivr.net/npm/vxe-table-plugin-export-pdf/fonts/source-han-sans-normal.js'
              //   }
              // ]
            })

            // 方式2：使用 NPM 安装，注入 jsPDF 对象
            // VxeUI.use(VXETablePluginExportPDF, {
            //   jsPDF
            // })
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
