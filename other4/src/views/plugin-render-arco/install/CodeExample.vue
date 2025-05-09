<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="安装插件 @vxe-ui/plugin-render-arco">
          <vxe-link icon="vxe-icon-github-fill" href="https://github.com/x-extends/vxe-ui-plugins/tree/main/plugin-render-arco" target="_blank"></vxe-link> 该插件提供了在表格中渲染第三方组件，用于兼容 <vxe-link href="https://www.npmjs.com/package/@arco-design/web-vue" target="_blank">arco-design</vxe-link> 组件库
        </vxe-tip>
        <vxe-tip status="error">
          对应的第三方组件库 <vxe-link href="https://www.npmjs.com/package/@arco-design/web-vue" target="_blank">arco-design</vxe-link> 需自行去安装，安装完成对应的组件库后就可以在表格中使用了
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code
            language="shell"
            :content="`
            npm install ${ uiCDNLib } ${ tableCDNLib } ${pluginRenderArcoCDNLib}
            # 或者
            yarn add ${ uiCDNLib } ${ tableCDNLib } ${pluginRenderArcoCDNLib}
            # 或者
            pnpm add ${ uiCDNLib } ${ tableCDNLib } ${pluginRenderArcoCDNLib}
            `">
          </pre-code>
        </pre>

        <vxe-tip status="primary" title="方式一">使用 NPM 安装</vxe-tip>
        <vxe-tip status="error">自行去安装对应的第三方组件；如果需要使用配置式，则需要全局安装</vxe-tip>

        <pre>
          <div>文件 src/main </div>
          <pre-code
            language="shell"
            :content="`
            // ...
            import VxeUIAll, { VxeUI } from 'vxe-pc-ui'
            import 'vxe-pc-ui/lib/style.css'
            import VxeUITable from 'vxe-table'
            import 'vxe-table/lib/style.css'
            import VxeUIPluginRenderArco from '@vxe-ui/plugin-render-arco'
            import '@vxe-ui/plugin-render-arco/dist/style.css'
            // ...

            VxeUI.use(VxeUIPluginRenderArco)

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
import { computed } from 'vue'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
const uiCDNLib = computed(() => appStore.uiCDNLib)
const tableCDNLib = computed(() => appStore.tableCDNLib)
const pluginRenderArcoCDNLib = computed(() => appStore.pluginRenderArcoCDNLib)
</script>
