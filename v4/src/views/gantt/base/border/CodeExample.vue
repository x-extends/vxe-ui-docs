<template>
  <div>
    <CodeLight path="gantt/base/border/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="边框">通过设置 <ApiLink name="gantt" prop="border"/> 设置边框</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/base/border/Demo2">
      <template #tip>
        <vxe-tip status="primary">通过设置 <ApiLink name="gantt" prop="taskViewConfig"/>.<ApiLink name="gantt" prop="tableStyle"/>.<ApiLink name="gantt" prop="border"/> 或 <ApiLink name="gantt" prop="taskViewConfig"/>.<ApiLink name="gantt" prop="viewStyle"/>.<ApiLink name="gantt" prop="border"/> 单独设置表格和任务视图的边框</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
