<template>
  <div>
    <CodeLight path="tree-select/lazy/base/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="懒加载">
          通过 <ApiLink name="tree-select" prop="tree-config" />.<ApiLink name="tree-select" prop="lazy"/> 和 <ApiLink name="tree" prop="has-child-field"/> 指定 当前节点是否使用异步加载，当点击展开时会自动调用 <ApiLink name="tree-config" prop="lazy" />.<ApiLink name="tree-select" prop="load-method"/> 去加载子节点
        </vxe-tip>
        <vxe-tip status="error">
          需要注意懒加载是无法回显的，当选择的数据未被加载时将无法显示，仅支持 <ApiLink name="tree-select" prop="option-props"/>.value 和 <ApiLink name="tree-select" prop="option-props"/>.label 相同时可以使用
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
