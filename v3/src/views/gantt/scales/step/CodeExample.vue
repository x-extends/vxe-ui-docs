<template>
  <div>
    <CodeLight path="gantt/scales/step/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="日期间隔">
          可以通过 <ApiLink name="gantt" prop="task-view-config"/>.<ApiLink name="gantt" prop="scales"/>.<ApiLink name="gantt" prop="step"/> 来指定日期跨度间隔，当日期跨度较大时，渲染的视图横向太长了，就可以设置日期间隔来显示缩略效果，比如每间隔2天渲染视图
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
