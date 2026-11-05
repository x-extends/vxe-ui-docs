<template>
  <div>
    <CodeLight path="tree/sort/sortMethod/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义排序">
          通过 <ApiLink name="tree" prop="sort-config" />.<ApiLink name="tree" prop="sortMethod" /> 来自定义实现排序方法
        </vxe-tip>
        <vxe-tip status="error">
          排序功能仅支持 <ApiLink name="tree" prop="transform" /> 模式
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
