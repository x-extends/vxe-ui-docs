<template>
  <div>
    <CodeLight path="checkbox/defaultValue/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="默认值">
          通过 <ApiLink name="checkbox-group" prop="default-config"/>.<ApiLink name="checkbox-group" prop="selectMode"/> 可以提前设置默认值，会在初始化的时候触发一次默认值行为
        </vxe-tip>
        <vxe-tip status="error">
          仅对 <ApiLink name="checkbox-group" prop="options"/> 有效，当绑定值为 null 或 undefined 且首次初始化时自动触发默认值行为
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
