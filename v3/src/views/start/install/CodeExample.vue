<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="NPM 方式">
          <div>可以配合 <vxe-link  href="https://webpack.js.org/">webpack</vxe-link>、<vxe-link  href="https://vitejs.dev/">vite</vxe-link> 等打包工具配合使用按需加载。</div>
          <div>依赖库： <vxe-link  href="https://v2.cn.vuejs.org/">vue 2.6+</vxe-link></div>
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="shell">
            npm install vxe-table@3.9.0 vxe-pc-ui@3.1.24
            # 或者
            yarn add vxe-table@3.9.0 vxe-pc-ui@3.1.24
          </pre-code>
          <pre-code class="javascript">
            import Vue from 'vue'
            // ...

            // 完整导入 UI 组件库
            import VxeUI from 'vxe-pc-ui'
            import 'vxe-pc-ui/lib/style.css'
            // ...

            // 完整导入 表格库
            import VxeUITable from 'vxe-table'
            import 'vxe-table/lib/style.css'
            // ...

            Vue.use(VxeUI)
            Vue.use(VxeUITable)
            //...
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
