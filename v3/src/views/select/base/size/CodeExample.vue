<template>
  <div>
    <CodeLight path="select/base/size/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="尺寸大小"></vxe-tip>
        <vxe-tip status="error">
          需要注意，value 值不能包含逗号，逗号属于分割值
        </vxe-tip>
      </template>

      <template #describe>
        <pre>
          <pre-code>
            | Tab | 切换到上一个 |
            | Shift Tab | 切换到下一个 |
            | Arrow Up ↑ | 展开下拉面板、如果已展开则移动到上一个选项 |
            | Arrow Down ↓ | 展开下拉面板、如果已展开则移动到下一个选项 |
            | Enter | 如果未选择值，则展开下拉面板；如果已展开下拉面板，则选中选项 |
            | Esc | 关闭下拉面板 |
          </pre-code>
        </pre>
      </template>
    </CodeLight>
  </div>
</template>
