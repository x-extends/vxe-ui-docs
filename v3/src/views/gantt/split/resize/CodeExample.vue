<template>
  <div>
    <CodeLight path="gantt/split/resize/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="拖拽调整宽度">
          通过设置 <ApiLink name="gantt" prop="task-split-config"/>.<ApiLink name="gantt" prop="resize"/> 设置是否允许拖拽调整宽度
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/split/resize/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 css 变量设置调整面板宽度
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
