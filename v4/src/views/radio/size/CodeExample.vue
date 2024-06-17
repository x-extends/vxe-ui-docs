<template>
  <div>
    <CodeLight path="radio/size/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="尺寸大小"></vxe-tip>
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
