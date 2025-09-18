<template>
  <div>
    <CodeLight path="tree/base/expandNodeKeys/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="默认展开指定节点">
          通过配置 <ApiLink name="tree" prop="expand-node-keys"/> 属性来设置默认展开的节点
        </vxe-tip>
        <vxe-tip status="error">
          需要注意默认行为只会在首次触发一次，如果需要多次执行，通过调用 <ApiLink name="tree" prop="setExpandByNodeId"/> 方法来手动控制
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
