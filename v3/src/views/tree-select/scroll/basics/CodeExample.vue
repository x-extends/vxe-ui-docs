<template>
  <div>
    <CodeLight path="tree-select/scroll/basics/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="虚拟滚动">
          支持流畅的加载大量数据
        </vxe-tip>
        <vxe-tip status="error" title="小提示">
          由于是可视区渲染，所以可能会造成视觉上宽度忽长忽短，建议设置 <ApiLink name="tree-select" prop="popup-config"/> 宽度以保持最佳视觉体验
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
