<template>
  <div>
    <CodeLight path="tree/sort/defaultSort/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="排序">
          通过 <ApiLink name="tree" prop="sort-config" />.<ApiLink name="tree" prop="defaultSort" /> 来配置默认排序
        </vxe-tip>
        <vxe-tip status="error">
          排序功能仅支持 <ApiLink name="tree" prop="transform" /> 模式
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
