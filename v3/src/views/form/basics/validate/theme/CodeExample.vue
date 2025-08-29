<template>
  <div>
    <CodeLight path="form/basics/validate/theme/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="错误提示样式">
          通过设置 <ApiLink name="grid" prop="valid-config"/>.<ApiLink name="grid" prop="theme"/>='beautify' 设置为高亮样式
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="form/basics/validate/theme/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          带边框样式
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
