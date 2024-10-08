<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="安装插件 @vxe-ui/plugin-render-element">
          该插件提供了在表格中渲染第三方组件，用于兼容 <vxe-link href="https://www.npmjs.com/package/element-plus" target="_blank">element-plus</vxe-link> 组件库
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code>
            npm install vxe-table@3 @vxe-ui/plugin-render-element@3
            # 或者
            yarn add vxe-table@3 @vxe-ui/plugin-render-element@3
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
            import VxeUIPluginRenderElement from '@vxe-ui/plugin-render-element'
            import '@vxe-ui/plugin-render-element/dist/style.css'
            // ...

            VxeUI.use(VxeUIPluginRenderElement)
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
