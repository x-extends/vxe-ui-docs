<template>
  <div>
    <CodeLight path="gantt/taskView/rowClass/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="行附加 className">
          通过 <ApiLink name="gantt" prop="task-view-config"/>.<ApiLink name="gantt" prop="viewStyle"/>.<ApiLink name="rowStyle" prop="rowClassName"/> 设置任务视图行附加 className
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
