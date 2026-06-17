<template>
  <div>
    <CodeLight path="cascader/checkbox/trigger/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="只允许选中子节点">
          通过 <ApiLink name="cascader" prop="tree-config"/>.<ApiLink name="cascader" prop="checkbox-config"/>.<ApiLink name="cascader" prop="visibleMode"/> 设置复选框是否显示
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="cascader/checkbox/trigger/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="cascader" prop="tree-config"/>.<ApiLink name="cascader" prop="checkbox-config"/>.<ApiLink name="cascader" prop="visibleMethod"/> 自定义复选框是否显示，当需要进行判断逻辑是就非常有用了
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
