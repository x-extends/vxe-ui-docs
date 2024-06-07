<template>
  <div>
    <CodeLight path="pager/size/Demo1">
      <template #tip>
        <vxe-tips status="primary" title="尺寸"></vxe-tips>
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
  </div>
</template>
