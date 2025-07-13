<template>
  <div>
    <CodeLight path="tree-select/search/filterValue/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="过滤节点">
          通过 <ApiLink name="tree-select" prop="filterable"/> 就可以设置过滤功能
        </vxe-tip>
        <vxe-tip status="error">
          过滤功能只支持 <ApiLink name="tree-select" prop="tree-config"/>.<ApiLink name="tree-select" prop="transform"/> 模式
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
