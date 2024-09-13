<template>
  <div>
    <CodeLight path="modal/modal/zoom/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="窗口最大化与最小化">
          通过 <ApiLink name="modal" prop="show-zoom"/> 开启窗口最大化与最小化功能
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="modal/modal/zoom/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          叠加多窗口
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
