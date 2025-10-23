<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="安装插件 @vxe-ui/plugin-menu">
          <vxe-link icon="vxe-icon-github-fill" href="https://github.com/x-extends/vxe-ui-plugins/tree/v3/plugin-men" target="_blank"></vxe-link> 该插件提供了在表格中提供便捷的右键菜单操作
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code
            language="shell"
            :content="`
            npm install ${ uiCDNLib } ${ tableCDNLib } ${pluginMenuCDNLib}
            # 或者
            yarn add ${ uiCDNLib } ${ tableCDNLib } ${pluginMenuCDNLib}
            # 或者
            pnpm add ${ uiCDNLib } ${ tableCDNLib } ${pluginMenuCDNLib}
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
            import VxeUIPluginMenu from '@vxe-ui/plugin-menu'
            import '@vxe-ui/plugin-menu/dist/style.css'
            // ...

            VxeUI.use(VxeUIPluginMenu)

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
import { mapGetters } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapGetters([
      'uiCDNLib',
      'tableCDNLib',
      'pluginMenuCDNLib'
    ])
  }
})
</script>
