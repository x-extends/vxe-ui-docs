<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="NPM 方式">
          <div>可以配合 <vxe-link  href="https://webpack.js.org/">webpack</vxe-link>、<vxe-link  href="https://vitejs.dev/">vite</vxe-link> 等打包工具配合使用按需加载。</div>
          <div>依赖库：<vxe-link href="https://vxeui.com/xe-utils/" target="_blank">xe-utils 3.0+</vxe-link>、<vxe-link  href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%8A%A8%E6%80%81%E6%8F%92%E6%A7%BD%E5%90%8D">vue 3.2+</vxe-link></div>
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code
            language="shell"
            :content="`
            npm install ${utilCDNLib} ${uiCDNLib } ${ tableCDNLib }
            # 或者
            yarn add ${utilCDNLib} ${uiCDNLib } ${ tableCDNLib }
            # 或者
            pnpm add ${utilCDNLib} ${uiCDNLib } ${ tableCDNLib }
            `">
          </pre-code>
          <pre-code
            language="javascript"
            content="
             // ...
            import VxeUIAll from 'vxe-pc-ui'
            import 'vxe-pc-ui/lib/style.css'
            import VxeUITable from 'vxe-table'
            import 'vxe-table/lib/style.css'
            // ...

            createApp(App).use(VxeUIAll).use(VxeUITable).mount('#app')
            // ...">
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
const utilCDNLib = computed(() => appStore.utilCDNLib)
const uiCDNLib = computed(() => appStore.uiCDNLib)
const tableCDNLib = computed(() => appStore.tableCDNLib)
</script>
