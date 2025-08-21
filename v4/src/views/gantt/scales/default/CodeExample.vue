<template>
  <div>
    <CodeLight path="gantt/scales/default/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义日期轴">
          默认是月份和天,可以通过 <ApiLink name="gantt" prop="task-view-config"/>.<ApiLink name="gantt" prop="scales"/> 自定义日期轴,支持列头单行或者多行
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/scales/default/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          单行日期轴
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/scales/default/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          多行日期轴
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
