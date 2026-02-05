<template>
  <div>
    <CodeLight path="input/prefix/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义前缀图标">
          通过 <ApiLink name="input" prop="prefix-icon"/> 或 <ApiLink name="input" prop="prefix-config"/>.<ApiLink name="input" prop="icon"/> 自定义前缀图标
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="input/prefix/Demo2">
      <template #tip>
        <vxe-tip status="primary">通过 <ApiLink name="input" prop="prefix-config"/>.<ApiLink name="input" prop="content"/> 自定义前缀文本</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
