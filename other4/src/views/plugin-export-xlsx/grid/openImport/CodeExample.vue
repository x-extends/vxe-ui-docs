<template>
  <div>
    <CodeLight path="plugin-export-xlsx/grid/openImport/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="高级导入">
          通过调用 openImport 方法打开导入面板，可以自定义更多的设置
        </vxe-tip>
        <vxe-tip status="error">
          需要注意导入是不支持分组列头和表尾数据的，仅支持文本格式，不支持图片及特殊格式
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
