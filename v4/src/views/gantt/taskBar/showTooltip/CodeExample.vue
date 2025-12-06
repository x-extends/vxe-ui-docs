<template>
  <div>
    <CodeLight path="gantt/taskBar/showTooltip/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="显示任务提示信息">
          通过 <ApiLink name="gantt" prop="task-bar-config"/>.<ApiLink name="gantt" prop="showTooltip"/> 显示任务提示信息
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
