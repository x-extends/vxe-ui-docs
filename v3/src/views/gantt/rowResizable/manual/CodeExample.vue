<template>
  <div>
    <CodeLight path="gantt/rowResizable/manual/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="手动操作行高">
          通过调用 <ApiLink name="gantt" prop="setRowHeight"/> 设置行高与 <ApiLink name="gantt" prop="getRowHeight"/> 获取行高
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
