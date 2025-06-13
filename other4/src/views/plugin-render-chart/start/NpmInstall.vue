<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="安装插件 @vxe-ui/plugin-render-chart">
          <vxe-link icon="vxe-icon-github-fill" href="https://github.com/x-extends/vxe-ui-plugins/tree/main/plugin-render-chart" target="_blank"></vxe-link> 该插件提供了在表格中渲染高性能的轻量级图表
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code
            language="shell"
            :content="`
            npm install ${ uiCDNLib } ${ tableCDNLib } ${pluginRenderChartCDNLib}
            # 或者
            yarn add ${ uiCDNLib } ${ tableCDNLib } ${pluginRenderChartCDNLib}
            # 或者
            pnpm add ${ uiCDNLib } ${ tableCDNLib } ${pluginRenderChartCDNLib}
            `">
          </pre-code>
        </pre>

        <vxe-tip status="primary" title="使用 NPM 安装，方式一"></vxe-tip>

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
            import VxeUIPluginRenderChart from '@vxe-ui/plugin-render-chart'
            import '@vxe-ui/plugin-render-chart/dist/style.css'
            // ...

            VxeUI.use(VxeUIPluginRenderChart)

            createApp(App).use(VxeUIAll).use(VxeUITable).mount('#app')
            // ...
            `">
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
const uiCDNLib = computed(() => appStore.uiCDNLib)
const tableCDNLib = computed(() => appStore.tableCDNLib)
const pluginRenderChartCDNLib = computed(() => appStore.pluginRenderChartCDNLib)
</script>
