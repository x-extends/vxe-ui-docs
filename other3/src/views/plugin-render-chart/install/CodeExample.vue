<template>
  <div>
    <CodeLight>
      <template #tip>
        <vxe-tip status="primary" title="安装插件 @vxe-ui/plugin-render-chart">
          该插件提供了在表格中渲染高性能的轻量级图表
        </vxe-tip>
      </template>

      <template #use>
        <pre>
          <pre-code>
            npm install vxe-table@3 @vxe-ui/plugin-render-chart@3
            # 或者
            yarn add vxe-table@3 @vxe-ui/plugin-render-chart@3
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
            import VxeUIPluginRenderChart from '@vxe-ui/plugin-render-chart'
            import '@vxe-ui/plugin-render-chart/dist/style.css'
            // ...

            VxeUI.use(VxeUIPluginRenderChart)
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
