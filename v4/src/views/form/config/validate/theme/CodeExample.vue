<template>
  <div>
    <CodeLight path="form/config/validate/theme/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="错误提示样式">
          通过设置 <ApiLink name="form" prop="valid-config"/>.<ApiLink name="form" prop="theme"/>='beautify' 设置为高亮样式
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="form/config/validate/theme/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          带边框样式
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="form/config/validate/theme/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          通过设置 <ApiLink name="form" prop="valid-config"/>.<ApiLink name="form" prop="showErrorBackground"/> 显示校验错误单元格背景色
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
