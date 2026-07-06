<template>
  <div>
    <CodeLight path="tree/edit/remove/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="删除节点">
          通过调用 <ApiLink name="tree" prop="remove"/> 方法临时删除
        </vxe-tip>
        <vxe-tip status="error" title="小提示">
          删除时节点只支持 <ApiLink name="tree" prop="transform"/> 模式
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
