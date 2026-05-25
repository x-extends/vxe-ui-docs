<template>
  <div>
    <CodeLight path="tree-select/radio/trigger/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="只允许选中子节点">
          通过 <ApiLink name="tree-select" prop="tree-config"/>.<ApiLink name="tree-select" prop="radio-config"/>.<ApiLink name="tree-select" prop="visibleMode"/> 设置单选框是否显示
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="tree-select/radio/trigger/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="tree-select" prop="tree-config"/>.<ApiLink name="tree-select" prop="radio-config"/>.<ApiLink name="tree-select" prop="visibleMethod"/> 自定义单选框是否显示，当需要进行判断逻辑是就非常有用了
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
