<template>
  <div>
    <CodeLight path="gantt/template/tooltip/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="单元格提示模板">
          单元格文本溢出提示模板，使用插槽 <ApiLink name="gantt" prop="headert-tooltip"/>、<ApiLink name="gantt" prop="tooltip"/>、<ApiLink name="gantt" prop="footer-tooltip"/> 来自定义模板
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/template/tooltip/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          当内容很多时，还可以通过 <ApiLink name="gantt" prop="tooltip-config"/>.<ApiLink name="gantt" prop="width"/>、<ApiLink name="gantt" prop="tooltip-config"/>.<ApiLink name="gantt" prop="height"/>、<ApiLink name="gantt" prop="tooltip-config"/>.<ApiLink name="gantt" prop="maxWidth"/>、<ApiLink name="gantt" prop="tooltip-config"/>.<ApiLink name="gantt" prop="maxHeight"/> 设置容器宽高
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
