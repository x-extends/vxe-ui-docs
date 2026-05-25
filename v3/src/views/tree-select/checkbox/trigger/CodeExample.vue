<template>
  <div>
    <CodeLight path="tree-select/checkbox/trigger/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="只允许选中子节点">
          通过 <ApiLink name="tree-select" prop="tree-config"/>.<ApiLink name="tree-select" prop="checkbox-config"/>.<ApiLink name="tree-select" prop="visibleMode"/> 设置复选框是否显示
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="tree-select/checkbox/trigger/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="tree-select" prop="tree-config"/>.<ApiLink name="tree-select" prop="checkbox-config"/>.<ApiLink name="tree-select" prop="visibleMethod"/> 自定义复选框是否显示，当需要进行判断逻辑是就非常有用了
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
