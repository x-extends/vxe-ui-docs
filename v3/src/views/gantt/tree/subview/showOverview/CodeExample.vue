<template>
  <div>
    <CodeLight path="gantt/tree/subview/showOverview/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="显示任务总览">
          通过 <ApiLink name="gantt" prop="task-bar-subview-config"/>.<ApiLink name="gantt" prop="showOverview"/> 设置是否任务总览，当子任务被展开后自动显示任务总览
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
