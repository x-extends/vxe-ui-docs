<template>
  <div>
    <CodeLight path="modal/confirm/multiple/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="弹出多个确认框">
          通过 mask 关闭遮罩层和 lockView 设置不锁视图可以实现同一时刻弹出多个确认框
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="modal/confirm/multiple/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          唯一弹框，通过设置 id 来实现唯一，当 id 相同时，同一时刻只会弹出一个。
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
