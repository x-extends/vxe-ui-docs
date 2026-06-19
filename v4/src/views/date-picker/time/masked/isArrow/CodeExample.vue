<template>
  <div>
    <CodeLight path="date-picker/time/masked/isArrow/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="方向键操作">
          通过 <ApiLink name="date-picker" prop="masked-config"/>.<ApiLink name="date-picker" prop="isArrow"/> 来启用方向键操作，对于全键盘操作时该功能将非常适用
        </vxe-tip>
      </template>

      <template #describe>
        <pre>
          <pre-code>
            | Arrow Up ↑ | 当前选择的值递增 |
            | Arrow Down ↓ | 向左移动数值输入区间 |
            | Arrow Left ← | 当前选择的值递减 |
            | Arrow Right → | 向右移动数值输入区间 |
          </pre-code>
        </pre>
      </template>
    </CodeLight>

    <CodeLight path="date-picker/time/masked/isArrow/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          还可以通过 <ApiLink name="date-picker" prop="popup-config"/>.<ApiLink name="date-picker" prop="enabled"/> 来关闭日期面板
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
