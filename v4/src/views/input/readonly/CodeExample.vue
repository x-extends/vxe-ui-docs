<template>
  <div>
    <CodeLight path="input/readonly/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="只读查看模式">
          通过 <ApiLink name="input" prop="readonly"/> 设置为只读查看模式，该模式下会渲染成文本
        </vxe-tip>
        <vxe-tip status="error" title="兼容性提示">
          对于历史旧版本如果使用 <ApiLink name="input" prop="readonly"/> 来设置为不可编辑模式时，建议使用新参数 <ApiLink name="input" prop="editable"/> 替换，也可以通过全局参数 setConfig({ inputReadonly: 'obsolete' }) 还原来兼容已废弃的旧代码
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
