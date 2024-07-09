<template>
  <div>
    <CodeLight path="form/basics/itemRender/readonly/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="只读模式">通过 <ApiLink name="form" prop="readonly"/> 参数设置表单只读，所有被支持的控件会默认继承该属性</vxe-tip>
        <vxe-tip status="error">在只读模式中，校验功能是无效的</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
