<template>
  <div>
    <CodeLight path="input/readonly/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="只读查看模式">
          通过 <ApiLink name="input" prop="readonly"/> 设置为只读查看模式，该模式下会渲染成文本
        </vxe-tip>
        <vxe-tip status="error" title="兼容性提示">
          对于老版本如果使用 readonly 来设置为不可编辑模式时，可以通过全局参数 setConfig({ inputReadonly: 'obsolete' }) 还原来兼容旧代码 
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
