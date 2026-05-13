<template>
  <div>
    <CodeLight path="tree/checkbox/color/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="字体颜色">
          通过 <ApiLink name="tree" prop="checkbox-config"/>.<ApiLink name="tree" prop="nodeStyle"/>.<ApiLink name="tree" prop="checkedColor"/> 和 <ApiLink name="tree" prop="checkbox-config"/>.<ApiLink name="tree" prop="nodeStyle"/>.<ApiLink name="tree" prop="indeterminateColor"/> 设置节点半选和选中的节点的字体颜色
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="tree/checkbox/color/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 css 变量设置
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
