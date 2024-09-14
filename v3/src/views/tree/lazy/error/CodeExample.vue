<template>
  <div>
    <CodeLight path="tree/lazy/error/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="加载失败">
          当调用 <ApiLink name="tree" prop="load-method"/> 加载子节点失败时，可以继续点击重新加载
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
