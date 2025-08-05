<template>
  <div>
    <CodeLight path="tree/search/filterValue/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="过滤节点">
          通过 <ApiLink name="tree" prop="filter-value"/> 就可以设置过滤功能
        </vxe-tip>
        <vxe-tip status="error">
          过滤功能只支持 <ApiLink name="tree" prop="transform"/> 模式，其他模式仅支持一级节点的过滤
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="tree/search/filterValue/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="tree" prop="filter-config"/>.<ApiLink name="tree" prop="autoExpandAll"/> 来设置过滤后自动展开与收起
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
