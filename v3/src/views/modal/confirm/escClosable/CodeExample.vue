<template>
  <div>
    <CodeLight path="modal/confirm/escClosable/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="按 Esc 键可关闭">
          可以通过设置 escClosable 参数启用
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="modal/confirm/escClosable/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          当同时存在多个确认框时，按 Esc 键后会按照层级的先后顺序逐个关闭，最顶级先关闭。
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
