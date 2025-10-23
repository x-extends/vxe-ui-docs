<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="安装插件 @vxe-ui/plugin-render-echarts">
          <vxe-link icon="vxe-icon-github-fill" href="https://github.com/x-extends/vxe-ui-plugins/tree/v3/plugin-render-echarts" target="_blank"></vxe-link> 该插件提供了在表格中通过鼠标选取单元格后渲染 <vxe-link href="https://www.npmjs.com/package/echarts" target="_blank">echarts</vxe-link> 图表
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
          <pre-code language="javascript">
            // ...
            import VxeUIBase, { VxeUI } from 'vxe-pc-ui'
            import 'vxe-pc-ui/lib/style.css'
            import VxeUITable from 'vxe-table'
            import 'vxe-table/lib/style.css'
            import VxeUIPluginRenderChart from '@vxe-ui/plugin-render-chart'
            import '@vxe-ui/plugin-render-chart/dist/style.css'
            // ...

            VxeUI.use(VxeUIPluginRenderChart)

            Vue.use(VxeUIBase)
            Vue.use(VxeUITable)
            //...
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
      'pluginRenderChartCDNLib'
    ])
  }
})
</script>
