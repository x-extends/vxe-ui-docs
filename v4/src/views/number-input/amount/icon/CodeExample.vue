<template>
  <div>
    <CodeLight path="number-input/amount/icon/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义图标">
          可以通过 <ApiLink name="number-input" prop="prefix-icon"/> 或 <ApiLink name="number-input" prop="prefix-config"/>.<ApiLink name="number-input" prop="icon"/> 自定义前缀图标
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="number-input/amount/icon/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          可以通过 <ApiLink name="number-input" prop="suffix-icon"/> 或 <ApiLink name="number-input" prop="suffix-config"/>.<ApiLink name="number-input" prop="icon"/> 自定义后缀图标
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
