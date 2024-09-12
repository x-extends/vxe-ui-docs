<template>
  <div>
    <CodeLight path="pager/align/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="对齐方式"></vxe-tip>
      </template>

      <template #describe>
        <pre>
          <pre-code>
            | Arrow Up ↑ | 如果在当前页输入框内则向上翻页 |
            | Arrow Down ↓ | 如果在当前页输入框内则向下翻页 |
            | Tab | 切换到上一个 |
            | Shift + Tab | 切换到下一个 |
            | Spacebar | 按下点击 |
            | Enter | 点击 |
          </pre-code>
        </pre>
      </template>
    </CodeLight>

    <CodeLight path="pager/align/Demo2">
      <template #tip>
        <vxe-tip status="primary">居左对齐</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="pager/align/Demo3">
      <template #tip>
        <vxe-tip status="primary">右对齐</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
