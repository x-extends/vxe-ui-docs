<template>
  <div>
    <CodeLight path="gantt/checkbox/batch/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="按键批量范围选择">
          通过 <ApiLink name="gantt" prop="checkbox-config"/>.<ApiLink name="gantt" prop="isShift"/> 启用批量选中,启用后按住快捷键和鼠标批量选取
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
