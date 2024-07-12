<template>
  <div>
    <CodeLight path="tree/lazy/loadMethod/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="懒加载节点">
          通过 <ApiLink name="tree" prop="lazy"/> 和 <ApiLink name="tree" prop="has-child-field"/> 指定 当前节点是否使用异步加载，当点击展开时会自动调用 <ApiLink name="tree" prop="load-method"/> 去加载子节点
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
