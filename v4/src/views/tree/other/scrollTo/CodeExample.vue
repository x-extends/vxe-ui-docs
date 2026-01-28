<template>
  <div>
    <CodeLight path="tree/other/scrollTo/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="定位节点">
          通过调用 <ApiLink name="grid" prop="scrollTo"/>，<ApiLink name="grid" prop="scrollToNode"/>，<ApiLink name="grid" prop="scrollToNodeId"/> 滚动到对应的节点。该功能对于很多场景都非常有用，调用定位可以使节点始终保持在表格的可视区内。
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="tree/other/scrollTo/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          启用虚拟滚动后
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
