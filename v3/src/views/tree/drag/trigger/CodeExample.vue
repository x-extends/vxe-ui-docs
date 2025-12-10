<template>
  <div>
    <CodeLight path="tree/drag/trigger/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="触发方式">
          通过 <ApiLink name="tree" prop="drag-config"/>.<ApiLink name="tree" prop="trigger"/> 设置触发方式为图标按钮或节点
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="tree/drag/trigger/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          拖拽整个节点
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
