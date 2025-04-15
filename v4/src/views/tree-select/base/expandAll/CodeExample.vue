<template>
  <div>
    <CodeLight path="tree-select/base/expandAll/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="默认展开">
          手风琴展开效果，通过配置 <ApiLink name="tree-select" prop="expand-all"/>.<ApiLink name="tree-select" prop="expand-all"/> 属性来设置默认展开所有节点
        </vxe-tip>
        <vxe-tip status="error">
          需要注意默认行为只会在首次触发一次
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
