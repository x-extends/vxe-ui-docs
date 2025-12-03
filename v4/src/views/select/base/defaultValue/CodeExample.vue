<template>
  <div>
    <CodeLight path="select/base/defaultValue/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="默认值">
          通过 <ApiLink name="select" prop="default-config"/>.<ApiLink name="select" prop="selectMode"/> 可以提前设置默认值，会在初始化的时候触发一次默认值行为
        </vxe-tip>
        <vxe-tip status="error">
          当绑定值为 null 或 undefined 且首次初始化时自动触发默认值行为
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="select/base/defaultValue/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          异步加载，会在首次加载完成后触发默认行为
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
