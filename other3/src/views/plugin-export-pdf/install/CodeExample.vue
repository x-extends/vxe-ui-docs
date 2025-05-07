<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="安装插件 @vxe-ui/plugin-export-pdf">
          <vxe-link icon="vxe-icon-github-fill" href="https://github.com/x-extends/vxe-ui-plugins/tree/v3/plugin-export-pdf" target="_blank"></vxe-link> 该插件用于支持在表格中导出导入导出 PDF 文件，基于 <vxe-link href="https://github.com/MrRio/jsPDF" target="_blank">jspdf</vxe-link> 实现
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

        <vxe-tip status="primary" title="方式一（推荐）">在 html 引入插件库，使用第三方 CDN 方式记得锁定版本号，避免受到非兼容性更新的影响</vxe-tip>
        <vxe-tip status="error">不建议将第三方的 CDN 地址用于正式环境，因为该连接随时都可能会失效，建议将对应的包下载到本地后在引入</vxe-tip>

        <pre>
          <div>文件 index.html</div>
          <pre-code
            language="html"
            content="'%3Cscript%20type%3D%22text%2Fjavascript%22%20src%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fjspdf%402.5.2%2Fdist%2Fjspdf.umd.js%22%3E%3C%2Fscript%3E'">
          </pre-code>
          <div>文件 src/main </div>
          <pre-code
            language="javascript"
            :content="`
            // ...
            import VxeUIAll, { VxeUI } from 'vxe-pc-ui'
            import 'vxe-pc-ui/lib/style.css'
            import VxeUITable from 'vxe-table'
            import 'vxe-table/lib/style.css'
            import VxeUIPluginExportPDF from '@vxe-ui/plugin-export-pdf'
            // ...

            // 确保 window.jsPDF 变量存在即表示安装完成
            VxeUI.use(VxeUIPluginExportPDF, {
              // 安装中文字体
              // fontName: 'SourceHanSans-Normal',
              // fonts: [
              //   {
              //     fontName: 'SourceHanSans-Normal',
              //     fontUrl: 'https://cdn.jsdelivr.net/npm/${pluginExportPdfCDNLib}/fonts/source-han-sans-normal.js' // 字体库非常大，建议下载到项目本地
              //   }
              // ]
            })

            Vue.use(VxeUIAll)
            Vue.use(VxeUITable)
            //...
            `">
          </pre-code>
        </pre>

        <vxe-tip status="primary" title="方式二">使用 NPM 安装</vxe-tip>

        <pre>
          <div>文件 src/main </div>
          <pre-code
            language="javascript"
            :content="`
            // ...
            import VxeUIAll, { VxeUI } from 'vxe-pc-ui'
            import 'vxe-pc-ui/lib/style.css'
            import VxeUITable from 'vxe-table'
            import 'vxe-table/lib/style.css'
            import VxeUIPluginExportXLSX from '@vxe-ui/plugin-export-xlsx'
            import { jsPDF } from 'jspdf'
            // ...

            VxeUI.use(VxeUIPluginExportPDF, {
              jsPDF,
              // 安装中文字体
              // fontName: 'SourceHanSans-Normal',
              // fonts: [
              //   {
              //     fontName: 'SourceHanSans-Normal',
              //     fontUrl: 'https://cdn.jsdelivr.net/npm/${pluginExportPdfCDNLib}/fonts/source-han-sans-normal.js' // 字体库非常大，建议下载到项目本地
              //   }
              // ]
            })

            Vue.use(VxeUIAll)
            Vue.use(VxeUITable)
            //...
            `">
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapGetters([
      'uiCDNLib',
      'tableCDNLib',
      'pluginExportPdfCDNLib'
    ])
  }
})
</script>
