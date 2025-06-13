<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="安装插件 @vxe-ui/plugin-render-echarts">
          <vxe-link icon="vxe-icon-github-fill" href="https://github.com/x-extends/vxe-ui-plugins/tree/main/plugin-render-echarts" target="_blank"></vxe-link> 该插件提供了在表格中通过鼠标选取单元格后渲染 <vxe-link href="https://www.npmjs.com/package/echarts" target="_blank">echarts</vxe-link> 图表
        </vxe-tip>
        <vxe-tip status="error">该导出插件基于 <vxe-link href="https://github.com/apache/echarts" target="_blank">echarts</vxe-link> 库实现，具体开源协议请自行去查看对应的库</vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code
            language="shell"
            :content="`
            npm install ${ uiCDNLib } ${ tableCDNLib } ${pluginRenderEchartsCDNLib} echarts@5.4.3
            # 或者
            yarn add ${ uiCDNLib } ${ tableCDNLib } ${pluginRenderEchartsCDNLib} echarts@5.4.3
            # 或者
            pnpm add ${ uiCDNLib } ${ tableCDNLib } ${pluginRenderEchartsCDNLib} echarts@5.4.3
            `">
          </pre-code>
        </pre>

        <vxe-tip status="primary" title="方式一（推荐）">在 html 引入插件库，使用第三方 CDN 方式记得锁定版本号，避免受到非兼容性更新的影响</vxe-tip>
        <vxe-tip status="error">不建议将第三方的 CDN 地址用于正式环境，因为该连接随时都可能会失效，建议将对应的包下载到本地后在引入</vxe-tip>

        <pre>
          <div>文件 index.html</div>
          <pre-code
            language="html"
            content="%3Cscript%20type%3D%22text%2Fjavascript%22%20src%3D%22https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fecharts%405.4.3%2Fdist%2Fecharts.min.js%22%3E%3C%2Fscript%3E">
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
            import VxeUIPluginRenderEcharts from '@vxe-ui/plugin-render-echarts'
            // ...

            // 确保 window.echarts 变量存在即表示安装完成
            VxeUI.use(VxeUIPluginRenderEcharts)

            createApp(App).use(VxeUIAll).use(VxeUITable).mount('#app')
            // ...
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
            import VxeUIPluginRenderEcharts from '@vxe-ui/plugin-render-echarts'
            import * as echarts from 'echarts'
            // ...

            VxeUI.use(VxeUIPluginRenderEcharts, {
              echarts
            })

            createApp(App).use(VxeUIAll).use(VxeUITable).mount('#app')
            // ...
            `">
          </pre-code>
        </pre>
      </template>

      <template #preview>
        <vxe-image src="https://vxeui.com/pluginDocs/table/static/img/areaBasicsEcharts.de733354.gif"></vxe-image>
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
const pluginRenderEchartsCDNLib = computed(() => appStore.pluginRenderEchartsCDNLib)
</script>
