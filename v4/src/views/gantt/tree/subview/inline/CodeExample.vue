<template>
  <div>
    <CodeLight path="gantt/tree/subview/inline/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="行内展示子任务">
          行内展示子任务由 <ApiLink name="gantt" prop="task-bar-subview-config"/> 和父级任务设置<ApiLink name="gantt" prop="type"/>= VxeGanttTaskType.Subview 来启用。启用后会将所有子任务渲染到父级任务中，可以直观的看到任务全程进度
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
