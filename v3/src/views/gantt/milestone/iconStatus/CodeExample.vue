<template>
  <div>
    <CodeLight path="gantt/milestone/iconStatus/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="图标状态颜色">
          通过 <ApiLink name="gantt" prop="task-bar-milestone-config"/>.iconStatus 图标状态颜色
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/milestone/iconStatus/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          每个任务单独自定义图标状态颜色
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
