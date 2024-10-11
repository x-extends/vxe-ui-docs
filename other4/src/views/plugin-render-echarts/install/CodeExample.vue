<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="安装插件 @vxe-ui/plugin-render-echarts">
          该插件提供了在表格中通过鼠标选取单元格后渲染 <vxe-link href="https://www.npmjs.com/package/echarts" target="_blank">echarts</vxe-link> 图表
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code
            language="shell"
            :content="`
            npm install ${ uiCDNLib } ${ tableCDNLib } ${pluginRenderEchartsCDNLib} echarts
            # 或者
            yarn add ${ uiCDNLib } ${ tableCDNLib } ${pluginRenderEchartsCDNLib} echarts
            # 或者
            pnpm add ${ uiCDNLib } ${ tableCDNLib } ${pluginRenderEchartsCDNLib} echarts
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
            import VxeUIPluginRenderEcharts from '@vxe-ui/plugin-render-echarts'
            import '@vxe-ui/plugin-render-echarts/dist/style.css'
            // ...

            // 方式1：CDN 安装，只要确保 window.echarts 存在即可
            VxeUI.use(VxeUIPluginRenderEcharts)

            // 方式2：NPM 安装，注入 echarts 对象
            // VxeUI.use(VxeUIPluginRenderEcharts, {
            //   echarts
            // })
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
