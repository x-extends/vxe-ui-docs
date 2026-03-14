<template>
  <div>
    <CodeLight path="gantt/scales/date/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="天视图">
          如果数据不带时分秒，则默认填充满单元格
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/scales/date/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          如果数据带有时分秒，则会自动识别时分秒维度渲染单元格
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
