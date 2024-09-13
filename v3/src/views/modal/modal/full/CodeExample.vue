<template>
  <div>
    <CodeLight path="modal/modal/full/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="完整功能">
          使用插槽模板方式调用
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="modal/modal/full/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          使用 JSX 方式全局调用
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
