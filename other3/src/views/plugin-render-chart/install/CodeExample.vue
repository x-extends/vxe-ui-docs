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

        <vxe-tip status="primary" title="方式一">使用 NPM 安装</vxe-tip>

        <pre>
          <div>文件 src/main </div>
          <pre-code language="javascript">
            // ...
            import VxeUI from 'vxe-pc-ui'
            import 'vxe-pc-ui/lib/style.css'
            import VxeUITable from 'vxe-table'
            import 'vxe-table/lib/style.css'
            import VxeUIPluginRenderChart from '@vxe-ui/plugin-render-chart'
            import '@vxe-ui/plugin-render-chart/dist/style.css'
            // ...

            VxeUI.use(VxeUIPluginRenderChart)

            Vue.use(VxeUI)
            Vue.use(VxeUITable)
            //...
          </pre-code>
        </pre>

        <vxe-tip status="primary" title="使用 CDN 安装"></vxe-tip>
        <vxe-tip status="error" title="">
          <div>不建议将不受信任的第三方 CDN 用于正式环境，如确实需要使用第三方 CDN 链接记得锁定版本号，锁定版本的方法请查看第三方的说明。</div>
        </vxe-tip>

        <pre>
          <iframe :src="cdnUrl" style="display: block;width: 100%;height: 480px;border: 1px solid #000;"></iframe>
          <code-render language="html" :code="cdnCode"></code-render>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'

export default Vue.extend({
  data () {
    return {
      cdnCode: ''
    }
  },
  computed: {
    ...mapState([
      'packName',
      'docsVersion'
    ]) as {
      packName(): string
      docsVersion(): string
    },
    ...mapGetters([
      'uiCDNLib',
      'tableCDNLib',
      'pluginRenderChartCDNLib'
    ]) as {
      uiCDNLib(): string
      tableCDNLib(): string
      pluginRenderChartCDNLib(): string
    },
    cdnUrl (): string {
      return `/resource/cdn/plugin-render-chart-v${this.docsVersion}.html?v=${process.env.VUE_APP_DATE_NOW}`
    }
  },
  created () {
    fetch(this.cdnUrl as string).then(res => res.text()).then(html => {
      this.cdnCode = html
    })
  }
})
</script>
