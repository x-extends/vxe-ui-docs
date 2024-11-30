<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="安装插件 @vxe-ui/plugin-render-iview">
          <vxe-link icon="vxe-icon-github-fill" href="https://github.com/x-extends/vxe-ui-plugins/tree/v3/plugin-render-iview" target="_blank"></vxe-link> 该插件提供了在表格中渲染第三方组件，用于兼容 <vxe-link href="https://www.npmjs.com/package/iview" target="_blank">iview</vxe-link>, <vxe-link href="https://www.npmjs.com/package/view-design" target="_blank">view-design</vxe-link> 组件库
        </vxe-tip>
        <vxe-tip status="error">
          对应的第三方组件库 <vxe-link href="https://www.npmjs.com/package/iview" target="_blank">iview</vxe-link>, <vxe-link href="https://www.npmjs.com/package/view-design" target="_blank">view-design</vxe-link> 需自行去安装，安装完成对应的组件库后就可以在表格中使用了
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code
            language="shell"
            :content="`
            npm install ${ uiCDNLib } ${ tableCDNLib } ${pluginRenderIViewCDNLib}
            # 或者
            yarn add ${ uiCDNLib } ${ tableCDNLib } ${pluginRenderIViewCDNLib}
            # 或者
            pnpm add ${ uiCDNLib } ${ tableCDNLib } ${pluginRenderIViewCDNLib}
            `">
          </pre-code>
        </pre>

        <vxe-tip status="primary" title="方式一">使用 NPM 安装</vxe-tip>
        <vxe-tip status="error">自行去安装对应的第三方组件；如果需要使用配置式，则需要全局安装</vxe-tip>

        <pre>
          <div>文件 main.js</div>
          <pre-code class="javascript">
            // ...
            import VxeUI from 'vxe-pc-ui'
            import 'vxe-pc-ui/lib/style.css'
            import VxeUITable from 'vxe-table'
            import 'vxe-table/lib/style.css'
            import VxeUIPluginRenderIView from '@vxe-ui/plugin-render-iview'
            import '@vxe-ui/plugin-render-iview/dist/style.css'
            // ...

            VxeUI.use(VxeUIPluginRenderIView)

            Vue.use(VxeUI)
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
import { mapGetters } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapGetters([
      'uiCDNLib',
      'tableCDNLib',
      'pluginRenderIViewCDNLib'
    ])
  }
})
</script>
