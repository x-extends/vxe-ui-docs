<template>
  <div>
    <CodeLight path="modal/modal/maximize/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="窗口最大化">
          通过 <ApiLink name="modal" prop="show-maximize"/> 开启窗口最大化
        </vxe-tip>
      </template>

      <template #describe>
        <pre>
          <pre-code>
            | MouseLeft | 鼠标左键双击窗口头部可以在全屏与还原直接切换 |
          </pre-code>
        </pre>
      </template>
    </CodeLight>

    <CodeLight path="modal/modal/maximize/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          叠加多窗口
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
