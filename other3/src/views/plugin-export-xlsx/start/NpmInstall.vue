<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="安装插件 @vxe-ui/plugin-export-xlsx">
          <vxe-link icon="vxe-icon-github-fill" href="https://github.com/x-extends/vxe-ui-plugins/tree/v3/plugin-export-xlsx" target="_blank"></vxe-link> 该插件用于支持在表格中导出导入导出 XLSX 文件，基于 <vxe-link href="https://github.com/exceljs/exceljs" target="_blank">exceljs</vxe-link> 实现
        </vxe-tip>
        <vxe-tip status="error">该导出插件基于 <vxe-link href="https://github.com/exceljs/exceljs" target="_blank">exceljs</vxe-link> 库实现，具体开源协议请自行去查看对应的库</vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code
            language="shell"
            :content="`
            npm install ${ uiCDNLib } ${ tableCDNLib } ${pluginExportXlsxCDNLib} exceljs@4.4.0
            # 或者
            yarn add ${ uiCDNLib } ${ tableCDNLib } ${pluginExportXlsxCDNLib} exceljs@4.4.0
            # 或者
            pnpm add ${ uiCDNLib } ${ tableCDNLib } ${pluginExportXlsxCDNLib} exceljs@4.4.0
            `">
          </pre-code>
        </pre>

        <vxe-tip status="primary" title="使用 NPM 安装，方式一（推荐）">在 html 引入插件库，使用第三方 CDN 方式记得锁定版本号，避免受到非兼容性更新的影响</vxe-tip>
        <vxe-tip status="error">不建议将第三方的 CDN 地址用于正式环境，因为该连接随时都可能会失效，建议将对应的包下载到本地后在引入</vxe-tip>

        <pre>
          <div>文件 index.html</div>
          <pre-code
            language="html"
            content="%3Cscript%20type%3D%22text%2Fjavascript%22%20src%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fexceljs%404.4.0%2Fdist%2Fexceljs.min.js%22%3E%3C%2Fscript%3E">
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
            import VxeUIPluginExportXLSX from '@vxe-ui/plugin-export-xlsx'
            // ...

            // 确保 window.ExcelJS 变量存在即表示安装完成
            VxeUI.use(VxeUIPluginExportXLSX)

            Vue.use(VxeUIAll)
            Vue.use(VxeUITable)
            //...
            `">
          </pre-code>
        </pre>

        <vxe-tip status="primary" title="使用 NPM 安装，方式二"></vxe-tip>

        <pre>
          <div>文件 src/main </div>
          <pre-code
            language="javascript"
            :content="`
            // ...
            import VxeUIAll, { VxeUI } from 'vxe-pc-ui'
            import VxeUIPluginExportXLSX from '@vxe-ui/plugin-export-xlsx'
            import ExcelJS from 'exceljs'
            // ...

            VxeUI.use(VxeUIPluginExportXLSX, {
              ExcelJS
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
import { mapState, mapGetters } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapGetters([
      'uiCDNLib',
      'tableCDNLib',
      'pluginExportXlsxCDNLib'
    ])
  }
})
</script>
