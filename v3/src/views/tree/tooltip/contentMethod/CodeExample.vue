<template>
  <div>
    <CodeLight path="tree/tooltip/contentMethod/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="来自定义显示内容">
          通过 <ApiLink name="tree" prop="tooltip-config"/>.<ApiLink name="tree" prop="contentMethod"/> 来自定义显示内容
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
