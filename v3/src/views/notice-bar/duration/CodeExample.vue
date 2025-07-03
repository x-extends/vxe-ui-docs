<template>
  <div>
    <CodeLight path="notice-bar/duration/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="动画时间">
          可以通过 <ApiLink name="notice-bar" prop="duration"/>='15s' 设置动画时间来自定义控制速度
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="notice-bar/duration/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          设置越长时间，滚动速度就越慢
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
