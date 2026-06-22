<template>
  <div>
    <CodeLight path="gantt/dimension/date/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="日期多维度切换">
          通过 <ApiLink name="gantt" prop="task-view-config"/>.<ApiLink name="gantt" prop="scales"/> 可以灵活的切换显示模式
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/dimension/date/Demo2" previewPath="/resource/docsImg/gantt_dimension_date.gif">
      <template #tip>
        <vxe-tip status="primary">
          指定格式，精确到天，自动在单元格内按实际进度显示
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
