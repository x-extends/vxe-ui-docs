<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="安装插件 @vxe-ui/plugin-render-element">
          <vxe-link icon="vxe-icon-github-fill" href="https://github.com/x-extends/vxe-ui-plugins/tree/v3/plugin-render-element" target="_blank"></vxe-link> 该插件提供了在表格中渲染第三方组件，用于兼容 <vxe-link href="https://www.npmjs.com/package/element-ui" target="_blank">element-ui</vxe-link> 组件库
        </vxe-tip>
        <vxe-tip status="success" title="兼容性提示">
          适配插件用于解决使用第三方组件时无法选中的问题，比如下拉框等无法选中被自动关闭的问题
        </vxe-tip>
        <vxe-tip status="error">
          对应的第三方组件库 <vxe-link href="https://www.npmjs.com/package/element-ui" target="_blank">element-ui</vxe-link> 需自行去安装，安装完成对应的组件库后就可以在表格中使用了
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code
            language="shell"
            :content="`
            npm install ${ designCDNLib } ${pluginRenderElementCDNLib}
            # 或者
            yarn add ${ designCDNLib } ${pluginRenderElementCDNLib}
            # 或者
            pnpm add ${ designCDNLib } ${pluginRenderElementCDNLib}
            `">
          </pre-code>
        </pre>

        <vxe-tip status="primary" title="方式一">使用 NPM 安装</vxe-tip>
        <vxe-tip status="error">自行去安装对应的第三方组件；如果需要使用配置式，则需要全局安装</vxe-tip>

        <pre>
          <div>文件 src/main </div>
          <pre-code language="javascript">
            // ...
            import VxeUIDesign, { VxeUI } from 'vxe-design'
            import 'vxe-design/lib/style.css'
            import VxeUIPluginRenderElement from '@vxe-ui/plugin-render-element'
            import '@vxe-ui/plugin-render-element/dist/style.css'
            // ...

            VxeUI.use(VxeUIPluginRenderElement)

            Vue.use(VxeUIDesign)
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
      'designCDNLib',
      'pluginRenderElementCDNLib'
    ])
  }
})
</script>
