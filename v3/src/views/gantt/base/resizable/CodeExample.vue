<template>
  <div>
    <CodeLight path="gantt/base/resizable/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="列宽拖拽调整">通过设置 <ApiLink name="gantt" prop="column-config"/>.<ApiLink name="gantt" prop="resizable"/> 属性启用列宽拖动功能</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/base/resizable/Demo2">
      <template #tip>
        <vxe-tip status="primary">横向滚动条</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
