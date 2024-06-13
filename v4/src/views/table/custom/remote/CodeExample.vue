<template>
  <div>
    <CodeLight path="table/custom/remote/Demo1">
      <template #tip>
        <vxe-tip status="primary">通过设置唯一 id 和 storage 和 updateStore 方法可以将数据状态保存到本地或者服务端，从而实现用户个性化列设置服务端保存 </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="table/custom/remote/Demo2">
      <template #tip>
        <vxe-tip status="primary">通过设置唯一 id 和 storage 和 restoreStore 方法可以将服务端数据状态异步还原到本地，从而实现用户个性化列设置服务端还原 </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
