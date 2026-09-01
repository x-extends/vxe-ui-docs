<template>
  <div>
    <CodeLight path="tooltip/global/tooltip/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="全局单例工具提示">
          高性能的单例提示，全局共享一个实例，渲染性能达到最高优化
        </vxe-tip>
        <vxe-tip status="success">
          打开：VxeUI.tooltip.open(target, options)
          关闭：VxeUI.tooltip.close()
          销毁：VxeUI.tooltip.destroy()
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="tooltip/global/tooltip/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          更多参数
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
