<template>
  <div>
    <CodeLight path="modal/modal/lockView/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="锁定页面视图">
          默认窗口弹出后是锁页面的
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="modal/modal/lockView/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          设置不锁定页面视图，同时配合 mask 关闭后将可以同时操作页面
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
