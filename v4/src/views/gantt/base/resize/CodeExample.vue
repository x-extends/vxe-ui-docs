<template>
  <div>
    <CodeLight path="gantt/base/resize/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="拖拽调整视图宽度">
          通过 <ApiLink name="gantt" prop="task-split-config"/>.<ApiLink name="gantt" prop="resize"/> 启用拖拽调整视图宽度
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/base/resize/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="gantt" prop="task-split-config"/>.<ApiLink name="gantt" prop="showCollapseTableButton"/> 是否显示左侧表格的折叠按钮
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/base/resize/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="gantt" prop="task-split-config"/>.<ApiLink name="gantt" prop="showCollapseTaskButton"/> 是否显示右侧任务的折叠按钮
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/base/resize/Demo4">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="gantt" prop="task-split-config"/>.<ApiLink name="gantt" prop="enabled"/> 启用/禁用分割条
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
