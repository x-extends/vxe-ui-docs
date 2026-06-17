<template>
  <div>
    <CodeLight path="cascader/radio/trigger/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="只允许选中子节点">
          通过 <ApiLink name="cascader" prop="tree-config"/>.<ApiLink name="cascader" prop="radio-config"/>.<ApiLink name="cascader" prop="visibleMode"/> 设置单选框是否显示
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="cascader/radio/trigger/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="cascader" prop="tree-config"/>.<ApiLink name="cascader" prop="radio-config"/>.<ApiLink name="cascader" prop="visibleMethod"/> 自定义单选框是否显示，当需要进行判断逻辑是就非常有用了
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
