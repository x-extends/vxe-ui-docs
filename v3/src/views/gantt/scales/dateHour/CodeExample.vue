<template>
  <div>
    <CodeLight path="gantt/scales/dateHour/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="天-小时"></vxe-tip>
        <vxe-tip status="error">
          当使用小时视图时，应该控制好天数的限制，比如一天内，当渲染天数过大时，渲染的复杂度将会以倍数增长，渲染越多将会越慢
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
