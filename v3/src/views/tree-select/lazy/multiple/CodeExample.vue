<template>
  <div>
    <CodeLight path="tree-select/lazy/multiple/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="多选">
          通过 <ApiLink name="tree-select" prop="multiple"/> 启用多选
        </vxe-tip>
        <vxe-tip status="error">
          需要注意懒加载是无法回显的，当选择的数据未被加载时将无法显示，仅支持 <ApiLink name="tree-select" prop="option-props"/>.value 和 <ApiLink name="tree-select" prop="option-props"/>.label 相同时可以使用
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
