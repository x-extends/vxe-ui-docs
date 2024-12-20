<template>
  <div>
    <CodeLight path="list/autoResize/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="响应式高度">
          <div>可以通过修改 height 属性调整高度</div>
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="list/autoResize/Demo2">
      <template #tip>
        <vxe-tip status="primary" title="响应式高度">
          <div>可以通过修改父容器高度，同时设置 height=100% 自适应父容器</div>
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
