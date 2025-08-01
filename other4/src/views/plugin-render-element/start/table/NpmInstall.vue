<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="安装插件 @vxe-ui/plugin-render-element">
          <vxe-link icon="vxe-icon-github-fill" href="https://github.com/x-extends/vxe-ui-plugins/tree/main/plugin-render-element" target="_blank"></vxe-link> 该插件提供了在表格中渲染第三方组件，用于兼容 <vxe-link href="https://www.npmjs.com/package/element-plus" target="_blank">element-plus</vxe-link> 组件库
        </vxe-tip>
        <vxe-tip status="error">
          对应的第三方组件库 <vxe-link href="https://www.npmjs.com/package/element-plus" target="_blank">element-plus</vxe-link> 需自行去安装，安装完成对应的组件库后就可以在表格中使用了
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code
            language="shell"
            :content="`
            npm install ${ tableCDNLib } ${pluginRenderElementCDNLib}
            # 或者
            yarn add ${ tableCDNLib } ${pluginRenderElementCDNLib}
            # 或者
            pnpm add ${ tableCDNLib } ${pluginRenderElementCDNLib}
            `">
          </pre-code>
        </pre>

        <vxe-tip status="primary" title="方式一">使用 NPM 安装，全局安装方式</vxe-tip>
        <vxe-tip status="error">自行去安装对应的第三方组件；如果需要使用配置式，则需要全局安装</vxe-tip>

        <pre>
          <div>文件 src/main </div>
          <pre-code language="javascript">
            // ...
            import VxeUITable, { VxeUI } from 'vxe-table'
            import 'vxe-table/lib/style.css'
            import VxeUIPluginRenderElement from '@vxe-ui/plugin-render-element'
            import '@vxe-ui/plugin-render-element/dist/style.css'
            // ...

            VxeUI.use(VxeUIPluginRenderElement)

            createApp(App).use(VxeUITable).mount('#app')
            // ...
          </pre-code>
        </pre>

        <vxe-tip status="primary" title="方式二">使用了自动导入的插件</vxe-tip>
        <vxe-tip status="error">由于是通过插件自动注入的，所以无法识别到组件，需手动注册组件</vxe-tip>

        <pre>
          <div>文件 src/main </div>
          <pre-code language="javascript">
            // ...
            import VxeUITable, { VxeUI } from 'vxe-table'
            import 'vxe-table/lib/style.css'
            import VxeUIPluginRenderElement from '@vxe-ui/plugin-render-element'
            import '@vxe-ui/plugin-render-element/dist/style.css'
            // ...

            import { ElInput, ElInputNumber, ElSelect, ElCascader, ElDatePicker, ElTimeSelect } from 'element-plus'
            // ...
            VxeUIPluginRenderElement.component(ElInput)
            VxeUIPluginRenderElement.component(ElInputNumber)
            VxeUIPluginRenderElement.component(ElSelect)
            VxeUIPluginRenderElement.component(ElCascader)
            VxeUIPluginRenderElement.component(ElDatePicker)
            VxeUIPluginRenderElement.component(ElTimeSelect)
            // ...

            VxeUI.use(VxeUIPluginRenderElement)

            createApp(App).use(VxeUITable).mount('#app')
            // ...
          </pre-code>
        </pre>
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
const designCDNLib = computed(() => appStore.designCDNLib)
const pluginRenderElementCDNLib = computed(() => appStore.pluginRenderElementCDNLib)
</script>
