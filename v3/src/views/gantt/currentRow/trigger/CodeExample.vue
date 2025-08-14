<template>
  <div>
    <CodeLight path="gantt/currentRow/trigger/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="手动模式">
          使用 <ApiLink name="gantt" prop="current-row-config"/>.<ApiLink name="gantt" prop="trigger"/> 来设置手动模式。配合 <ApiLink name="gantt" prop="setCurrentRow"/> 方法来手动控制
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
