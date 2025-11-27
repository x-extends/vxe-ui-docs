<template>
  <div>
    <CodeLight path="gantt/taskView/cellClass/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="单元格附加 className">
          通过 <ApiLink name="gantt" prop="task-view-config"/>.<ApiLink name="gantt" prop="viewStyle"/>.<ApiLink name="gantt" prop="cellClassName"/> 设置任务视图单元格附加 className
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
