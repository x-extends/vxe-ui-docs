<template>
  <div>
    <CodeLight path="tree/radio/checkMethod/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="禁用选择">
          通过 <ApiLink name="tree" prop="radio-config"/>.<ApiLink name="tree" prop="checkMode"/> 设置单选框是否允许被选择
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="tree/radio/checkMethod/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="tree" prop="radio-config"/>.<ApiLink name="tree" prop="checkMethod"/> 自定义单选框是否允许被选择，当需要进行判断逻辑是就非常有用了
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
