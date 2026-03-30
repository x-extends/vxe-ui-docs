<template>
  <div>
    <CodeLight path="gantt/scales/minuteSecond/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="分钟-秒"></vxe-tip>
        <vxe-tip status="error">
          当使用秒视图时，应该控制好天数的限制，比如一分钟内，当渲染天数过大时，渲染的复杂度将会以倍数增长，渲染越多将会越慢
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
