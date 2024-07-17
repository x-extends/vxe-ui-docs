<template>
  <div>
    <CodeLight path="modal/modal/minimizeLayout/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义窗口最小化的排列方式">
          通过 <ApiLink name="modal" prop="zoom-config"/>.<ApiLink name="modal" prop="minimizeLayout"/> 设置窗口最小化的排列方式
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="modal/modal/minimizeLayout/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          横向排列方式
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
