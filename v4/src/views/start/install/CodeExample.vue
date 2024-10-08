<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="NPM 方式">
          <div>可以配合 <vxe-link  href="https://webpack.js.org/">webpack</vxe-link>、<vxe-link  href="https://vitejs.dev/">vite</vxe-link> 等打包工具配合使用按需加载。</div>
          <div>依赖库： <vxe-link  href="https://cn.vuejs.org/v2/guide/components-slots.html#%E5%8A%A8%E6%80%81%E6%8F%92%E6%A7%BD%E5%90%8D">vue 3.2+</vxe-link></div>
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code class="shell">
            npm install vxe-table@4.7.85 vxe-pc-ui@4.2.15
            # 或者
            yarn add vxe-table@4.7.85 vxe-pc-ui@4.2.15
          </pre-code>
          <pre-code class="javascript">
            // 完整导入 UI 组件库
            import VxeUI from 'vxe-pc-ui'
            import 'vxe-pc-ui/lib/style.css'
            // ...

            // 完整导入 表格库
            import VxeUITable from 'vxe-table'
            import 'vxe-table/lib/style.css'
            // ...

            createApp(App).use(VxeUI).use(VxeUITable).mount('#app')
            // ...
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
