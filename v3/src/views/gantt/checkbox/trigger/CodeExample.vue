<template>
  <div>
    <CodeLight path="gantt/checkbox/trigger/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="触发方式">
          <vxe-tip status="primary">单元格触发，通过 <ApiLink name="gantt" prop="checkbox-config"/>.<ApiLink name="gantt" prop="trigger"/> 指定触发方式</vxe-tip>
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/checkbox/trigger/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          点击行触发
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
