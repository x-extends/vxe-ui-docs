<template>
  <div>
    <CodeLight path="gantt/currentRow/base/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="高亮当前行">
          通过设置 <ApiLink name="gantt" prop="row-config"/>.<ApiLink name="gantt" prop="isCurrent"/> 参数
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
