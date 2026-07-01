<template>
  <div>
    <CodeLight path="tree/tooltip/showAll/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="全部显示提示">
          通过 <ApiLink name="tree" prop="tooltip-config"/>.<ApiLink name="tree" prop="showAll"/> 设置全部显示提示，不管文本是否溢出都会显示
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
