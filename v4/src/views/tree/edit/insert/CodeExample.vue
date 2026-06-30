<template>
  <div>
    <CodeLight path="tree/edit/insert/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="插入节点">
          通过调用 <ApiLink name="tree" prop="insert"/>, <ApiLink name="tree" prop="insertAt"/>, <ApiLink name="tree" prop="insertNextAt"/> 方法新增临时节点
        </vxe-tip>
        <vxe-tip status="error" title="小提示">
          插入临时节点只支持 <ApiLink name="tree" prop="transform"/> 模式
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
