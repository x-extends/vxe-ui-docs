<template>
  <div>
    <CodeLight path="drawer/multiple/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="多抽屉">
          通过 <ApiLink name="modal" prop="mask"/> 关闭遮罩层和 <ApiLink name="modal" prop="lock-view"/> 设置不锁视图可以实现同一时刻弹出多个抽屉
        </vxe-tip>
      </template>
    </CodeLight>

      <CodeLight path="drawer/multiple/Demo2">
        <template #tip>
          <vxe-tip status="primary">
            唯一弹框，通过设置 <ApiLink name="modal" prop="id"/> 来实现唯一，当 <ApiLink name="modal" prop="id"/> 相同时，同一时刻只会弹出一个。
          </vxe-tip>
        </template>
      </CodeLight>
  </div>
</template>
