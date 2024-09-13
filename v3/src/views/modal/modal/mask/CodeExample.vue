<template>
  <div>
    <CodeLight path="modal/modal/mask/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="遮罩层">
          默认窗口弹出后自动显示遮罩层
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="modal/modal/mask/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          可以通过 mask 参数关闭遮罩层，但是视图被锁了，不可以操作页面
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
