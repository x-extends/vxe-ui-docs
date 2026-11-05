<template>
  <div>
    <CodeLight path="tree/sort/multiSort/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="多字段排序">
          通过 <ApiLink name="tree" prop="sort-config" />.<ApiLink name="tree" prop="defaultSort" /> 支持配置多个字段进行组合排序
        </vxe-tip>
        <vxe-tip status="error">
          排序功能仅支持 <ApiLink name="tree" prop="transform" /> 模式
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
