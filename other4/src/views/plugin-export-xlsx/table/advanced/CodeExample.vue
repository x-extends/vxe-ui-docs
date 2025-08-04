<template>
  <div>
    <CodeLight path="plugin-export-xlsx/table/advanced/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="高级导出">
          通过调用 openExport 方法打开导出面板，可以自定义更多的设置
        </vxe-tip>
        <vxe-tip status="error">
          如果想导出图片，需确保图片是有效链接，且允许跨域获取，否则不支持导出图片
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
