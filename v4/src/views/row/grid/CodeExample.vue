<template>
  <div>
    <CodeLight path="row/grid/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="Grid 布局">
          通过 <ApiLink name="row" prop="grid-layout" /> 设置为 Grid 样式布局，可以解决边距突出问题
        </vxe-tip>
        <vxe-tip status="error">
          <div>row <ApiLink name="row" prop="wrap" /> 仅支持自动换行</div>
          <div>不支持自定义 col <ApiLink name="col" prop="width" /> 仅支持 col <ApiLink name="col" prop="span" /></div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
