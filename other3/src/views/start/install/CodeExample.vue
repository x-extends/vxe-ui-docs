<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="NPM 方式">
          <div>可以配合 <vxe-link  href="https://webpack.js.org/">webpack</vxe-link>、<vxe-link  href="https://vitejs.dev/">vite</vxe-link> 等打包工具配合使用按需加载。</div>
          <div>依赖库：<vxe-link href="https://vxeui.com/xe-utils/" target="_blank">xe-utils 3.0+</vxe-link>、<vxe-link  href="https://v2.cn.vuejs.org/">vue 2.6+</vxe-link></div>
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code
            language="shell"
            :content="`
              npm install ${uiCDNLib } ${ tableCDNLib }
              # 或者
              yarn add ${uiCDNLib } ${ tableCDNLib }
              # 或者
              pnpm add ${uiCDNLib } ${ tableCDNLib }
            `">
          </pre-code>
          <pre-code
            language="javascript"
            :content="`
              import Vue from 'vue'
              // ...

              import VxeUIBase from 'vxe-pc-ui'
              import 'vxe-pc-ui/lib/style.css'
              import VxeUITable from 'vxe-table'
              import 'vxe-table/lib/style.css'
              // ...

              Vue.use(VxeUIBase)
              Vue.use(VxeUITable)
              //...
            `">
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
      'utilCDNLib',
      'uiCDNLib',
      'tableCDNLib'
    ])
  }
})
</script>
