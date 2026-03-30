<template>
  <div>
    <CodeLight path="gantt/scales/hourMinute/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="小时-分钟"></vxe-tip>
        <vxe-tip status="error">
          当使用分钟视图时，应该控制好天数的限制，比如一小时内，当渲染天数过大时，渲染的复杂度将会以倍数增长，渲染越多将会越慢
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
