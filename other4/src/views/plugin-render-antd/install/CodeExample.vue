<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="安装插件 @vxe-ui/plugin-render-antd">
          该插件提供了在表格中渲染第三方组件，用于兼容 <vxe-link href="https://www.npmjs.com/package/ant-design-vue" target="_blank">ant-design-vue</vxe-link> 组件库
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code>
            npm install @vxe-ui/plugin-render-antd
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
            import VxeUIPluginRenderAntd from '@vxe-ui/plugin-render-antd'
            import '@vxe-ui/plugin-render-antd/dist/style.css'
            // ...

            VxeUI.use(VxeUIPluginRenderAntd)
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
