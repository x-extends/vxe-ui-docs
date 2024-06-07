<template>
  <div>
    <CodeLight path="table/custom/events/Demo1">
      <template #tip>
        <vxe-tips status="primary">通过设置唯一 id 和 storage 和 updateStore 方法可以将数据保存到本地或者服务端，从而实现用户个性化列设置 </vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="table/custom/events/Demo2">
      <template #tip>
        <vxe-tips status="primary">通过设置唯一 id 后监听自定义列设置 custom 事件，可以用于将数据保存到服务器，实现用户个性化列设置 </vxe-tips>
      </template>
    </CodeLight>
  </div>
</template>
