<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="安装插件 @vxe-ui/plugin-validator">
          该插件在表格或表单中提供了常用的校验
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code
            language="shell"
            :content="`
            npm install ${ uiCDNLib } ${ tableCDNLib } ${pluginValidatorCDNLib}
            # 或者
            yarn add ${ uiCDNLib } ${ tableCDNLib } ${pluginValidatorCDNLib}
            # 或者
            pnpm add ${ uiCDNLib } ${ tableCDNLib } ${pluginValidatorCDNLib}
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
            import VxeUIPluginValidator from '@vxe-ui/plugin-validator'
            // ...

            VxeUI.use(VxeUIPluginValidator)
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
const pluginValidatorCDNLib = computed(() => appStore.pluginValidatorCDNLib)
</script>
