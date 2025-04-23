<template>
  <div>
    <CodeLight path="split/basics/base/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="分割面板"></vxe-tip>
        <vxe-tip status="error">
          建议使用2个面板支持响应式布局，多个面板应该通过嵌套布局实现
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="split/basics/base/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          支持多个面板
        </vxe-tip>
        <vxe-tip status="error">只支持存在一个未设置 width 的面板</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
