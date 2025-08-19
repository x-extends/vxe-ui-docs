<template>
  <div>
    <CodeLight path="gantt/custom/toolbar/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="个性化列">
          通过设置 <ApiLink name="gantt" prop="toolbar-config"/>.<ApiLink name="gantt" prop="custom"/> 启用列个性化设置功能
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/custom/toolbar/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          分组列头
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
