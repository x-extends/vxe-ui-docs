<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="安装插件 @vxe-ui/plugin-shortcut-key">
          <vxe-link icon="vxe-icon-github-fill" href="https://github.com/x-extends/vxe-ui-plugins/tree/main/plugin-shortcut-key" target="_blank"></vxe-link> 该插件为键盘操作提供了相关的快捷键替换行为
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code
            language="shell"
            :content="`
            npm install ${ uiCDNLib } ${ tableCDNLib } ${pluginShortcutKeyCDNLib}
            # 或者
            yarn add ${ uiCDNLib } ${ tableCDNLib } ${pluginShortcutKeyCDNLib}
            # 或者
            pnpm add ${ uiCDNLib } ${ tableCDNLib } ${pluginShortcutKeyCDNLib}
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
            import VxeUIPluginShortcutKey from '@vxe-ui/plugin-shortcut-key'
            // ...

            VxeUIPluginShortcutKey.setConfig({
              // 表格快捷键监听
              tableListener: {
                'Ctrl + V' (params, evnt) {
                  console.log('粘贴')
                }
              },
              // 功能键设置
              setting: {
                'pager.prevPage': 'ArrowLeft',
                'pager.nextPage': 'ArrowRight', // 单个按键
                'pager.prevJump': 'Shift + W',
                'pager.nextJump': 'Shift + S' // 组合键
              }
            })

            createApp(App).use(VxeUIBase).use(VxeUITable).mount('#app')
            // ...
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
      'pluginShortcutKeyCDNLib'
    ])
  }
})
</script>
