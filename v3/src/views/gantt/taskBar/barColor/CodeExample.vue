<template>
  <div>
    <CodeLight path="gantt/taskBar/barColor/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="任务条颜色">
          通过 <ApiLink name="gantt" prop="task-bar-config"/>.<ApiLink name="gantt" prop="bar-style"/> 自定义任务条颜色
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/taskBar/barColor/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          也可以自定义每一行的任务条颜色
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
