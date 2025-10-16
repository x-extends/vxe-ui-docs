<template>
  <div>
    <CodeLight path="select/config/userSelect/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="实现人员选择"></vxe-tip>
        <vxe-tip status="error">
          每一行都必须存在高度，当内容超出默认高度时，可以通过 <ApiLink name="select" prop="option-config"/>.<ApiLink name="select" prop="height"/> 来自定义选项高度
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
