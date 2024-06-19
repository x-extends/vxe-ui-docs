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
            npm install @vxe-ui/plugin-render-chart
          </pre-code>
        </pre>

        <pre>
          <pre-code class="javascript">
            // main.js
            // ...
            import { VxeUI } from 'vxe-pc-ui'
            import VxeUIPluginRenderer from '@vxe-ui/plugin-render-chart'
            import '@vxe-ui/plugin-render-chart/dist/style.css'
            // ...

            VxeUI.use(VxeUIPluginRenderer)
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
