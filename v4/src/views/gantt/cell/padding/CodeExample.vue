<template>
  <div>
    <CodeLight path="gantt/cell/padding/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="单元格边距">
          可以通过 <ApiLink name="gantt" prop="cell-config"/>.<ApiLink name="gantt" prop="padding"/> 显示单元格边距
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/cell/padding/Demo2">
      <template #tip>
        <vxe-tip status="primary" title="表头单元格边距">
          可以通过 <ApiLink name="gantt" prop="header-cell-config"/>.<ApiLink name="gantt" prop="padding"/> 显示表头单元格边距
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/cell/padding/Demo3">
      <template #tip>
        <vxe-tip status="primary" title="表尾单元格边距">
          可以通过 <ApiLink name="gantt" prop="footer-cell-config"/>.<ApiLink name="gantt" prop="padding"/> 显示表尾单元格的边距
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
