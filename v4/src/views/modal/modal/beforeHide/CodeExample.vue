<template>
  <div>
    <CodeLight path="modal/modal/beforeHide/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="拦截窗口关闭">
          通过设置 <ApiLink name="modal" prop="before-hide-method"/> 阻止窗口关闭，支持异步，比如在某个异步操作未完成时，禁止关闭窗口。
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="modal/modal/beforeHide/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          使用 JSX 方式全局调用
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
