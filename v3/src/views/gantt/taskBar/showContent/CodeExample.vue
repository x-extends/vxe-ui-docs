<template>
  <div>
    <CodeLight path="gantt/taskBar/showContent/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="显示任务内容">
          通过 <ApiLink name="gantt" prop="task-bar-config"/>.<ApiLink name="gantt" prop="showContent"/> 显示任务内容
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/taskBar/showContent/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="gantt" prop="task-bar-config"/>.<ApiLink name="gantt" prop="contentMethod"/> 自定义任务内容
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
