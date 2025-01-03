<template>
  <div>
    <CodeLight path="modal/modal/storage/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="记忆功能">通过配合 <ApiLink name="modal" prop="storage"/> 启用 localStorage 本地储存功能</vxe-tip>
        <vxe-tip status="error">
          用户窗口状态的记忆功能是根据窗口 <ApiLink name="modal" prop="id"/> 进行保存的，必须确保 <ApiLink name="modal" prop="id"/> 是整个全局唯一的。
        </vxe-tip>
        <vxe-tip status="success">
          用户拖动窗口位置后，会在首次打开恢复最后一次操作的状态，如果需要每次打开后自动恢复，可以配合 <ApiLink name="modal" prop="remember"/> 属性
        </vxe-tip>
      </template>
    </CodeLight>

    <!-- <CodeLight path="modal/modal/storage/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          使用 JSX 方式全局调用
        </vxe-tip>
      </template>
    </CodeLight> -->
  </div>
</template>
