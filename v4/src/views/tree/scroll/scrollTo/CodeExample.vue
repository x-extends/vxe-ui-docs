<template>
  <div>
    <CodeLight path="tree/scroll/scrollTo/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="滚动到指定位置">
          可以通过 <ApiLink name="tree" prop="scrollToNode"/> 或者 <ApiLink name="tree" prop="scrollToNodeId"/> 将滚动条滚动到指定的节点，如果该节点未展开，则会自动展开
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
