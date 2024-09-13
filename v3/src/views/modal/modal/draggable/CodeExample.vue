<template>
  <div>
    <CodeLight path="modal/modal/draggable/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="拖动窗口">
          默认是允许拖动的
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="modal/modal/draggable/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          默认是允许拖动的，可以通过设置 draggable 参数禁止拖动
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
