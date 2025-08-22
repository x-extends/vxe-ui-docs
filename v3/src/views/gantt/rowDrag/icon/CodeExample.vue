<template>
  <div>
    <CodeLight path="gantt/rowDrag/icon/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义图标">
          通过 <ApiLink name="gantt" prop="row-drag-config"/>.<ApiLink name="gantt" prop="icon"/>设置自定义图标
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/rowDrag/icon/Demo2">
      <template #tip>
        <vxe-tip status="primary">自定义插槽模板</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
