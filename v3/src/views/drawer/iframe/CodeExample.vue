<template>
  <div>
    <CodeLight path="drawer/iframe/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="嵌入 iframe">
          使用插槽模板方式调用
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="drawer/iframe/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          使用 JSX 方式全局调用
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
