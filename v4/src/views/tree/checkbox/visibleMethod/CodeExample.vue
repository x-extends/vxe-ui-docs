<template>
  <div>
    <CodeLight path="tree/checkbox/visibleMethod/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="显示隐藏复选框">
          通过 <ApiLink name="tree" prop="checkbox-config"/>.<ApiLink name="tree" prop="visibleMode"/> 设置复选框是否显示
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="tree/checkbox/visibleMethod/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="tree" prop="checkbox-config"/>.<ApiLink name="tree" prop="visibleMethod"/> 自定义复选框是否显示，当需要进行判断逻辑是就非常有用了
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
