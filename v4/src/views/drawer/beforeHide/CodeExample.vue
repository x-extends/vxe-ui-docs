<template>
  <div>
    <CodeLight path="drawer/beforeHide/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="拦截抽屉关闭">
          通过设置 <ApiLink name="drawer" prop="before-hide-method"/> 阻止抽屉关闭，支持异步，比如在某个异步操作未完成时，禁止关闭抽屉。
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="drawer/beforeHide/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          使用 JSX 方式全局调用
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
