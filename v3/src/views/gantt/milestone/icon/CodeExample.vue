<template>
  <div>
    <CodeLight path="gantt/milestone/icon/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义图标">
          通过 <ApiLink name="gantt" prop="task-bar-milestone-config"/>.icon 自定义图标
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/milestone/icon/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          每个任务单独自定义图标
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
