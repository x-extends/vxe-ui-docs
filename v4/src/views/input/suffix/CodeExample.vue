<template>
  <div>
    <CodeLight path="input/suffix/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义后缀图标">
          通过 <ApiLink name="input" prop="suffix-icon"/> 或 <ApiLink name="input" prop="suffix-config"/>.<ApiLink name="input" prop="icon"/> 自定义后缀图标
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="input/suffix/Demo2">
      <template #tip>
        <vxe-tip status="primary">通过 <ApiLink name="input" prop="suffix-config"/>.<ApiLink name="input" prop="content"/> 自定义后缀文本</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
