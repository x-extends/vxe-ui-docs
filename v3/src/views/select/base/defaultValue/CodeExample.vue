<template>
  <div>
    <CodeLight path="select/base/defaultValue/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="默认值">
          通过 <ApiLink name="grid" prop="default-config"/>.<ApiLink name="grid" prop="selectMode"/> 可以提前设置默认值，会在初始化的时候触发一次默认值行为
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="select/base/defaultValue/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          异步加载
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
