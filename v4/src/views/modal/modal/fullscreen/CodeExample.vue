<template>
  <div>
    <CodeLight path="modal/modal/fullscreen/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="默认全屏">
          通过 <ApiLink name="modal" prop="fullscreen"/> 开启窗口打开时默认全屏展示
        </vxe-tip>
        <vxe-tip status="error">
          需要注意默认行为只会触发一次，如果需要记住上一次位置，可以配合 <ApiLink name="modal" prop="remember"/> 使用
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="modal/modal/fullscreen/Demo2">
      <template #tip>
        <vxe-tip status="primary">使用 JSX 方式全局调用</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
