<template>
  <div>
    <CodeLight path="radio/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="单选框"></vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="radio/Demo2">
      <template #tip>
        <vxe-tip status="primary">禁用状态</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="radio/Demo3">
      <template #tip>
        <vxe-tip status="primary">单选组</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="radio/Demo4">
      <template #tip>
        <vxe-tip status="primary">支持取消，如果为选择状态，再次点击则取消</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="radio/Demo5">
      <template #tip>
        <vxe-tip status="primary">单选按钮</vxe-tip>
      </template>

      <template #describe>
        <pre>
          <pre-code>
            | Tab | 切换到上一个 |
            | Shift + Tab | 切换到下一个 |
            | Arrow Up ↑ | 如果在分组内则移动到上一个选项 |
            | Arrow Left ← | 如果在分组内则移动到上一个选项 |
            | Arrow Down ↓ | 如果在分组内则移动到下一个选项 |
            | Arrow Right → | 如果在分组内则移动到下一个选项 |
            | Spacebar | 按下勾选 |
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
