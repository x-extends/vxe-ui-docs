<template>
  <div>
    <CodeLight path="tooltip/trigger/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="触发方式">
          默认 Hover 触发
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="tooltip/trigger/Demo2">
      <template #tip>
        <vxe-tip status="primary" title="点击触发"></vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
