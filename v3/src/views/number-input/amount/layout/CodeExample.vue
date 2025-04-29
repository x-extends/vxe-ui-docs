<template>
  <div>
    <CodeLight path="number-input/number/amount/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="按钮布局">
          左右布局，可以通过 <ApiLink name="number-input" prop="control-config"/>.<ApiLink name="number-input" prop="layout"/> 设置
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="number-input/number/amount/Demo2">
      <template #tip>
        <vxe-tip status="primary">
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="number-input/number/amount/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          显示到右侧
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
