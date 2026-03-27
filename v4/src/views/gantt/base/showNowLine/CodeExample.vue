<template>
  <div>
    <CodeLight path="gantt/base/showNowLine/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="高亮此刻线">
          通过设置 <ApiLink name="gantt" prop="task-view-config"/>.<ApiLink name="gantt" prop="showNowLine"/> 高亮此刻线
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/base/showNowLine/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="gantt" prop="task-now-line-config"/>.<ApiLink name="gantt" prop="mode"/> 来设置此刻线的显示方式
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
