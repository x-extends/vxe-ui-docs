<template>
  <div>
    <CodeLight path="gantt/scales/date/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="天视图">
          精度解析到天，默认填充满单元格
        </vxe-tip>
        <vxe-tip status="error">
          当使用天视图时，应该控制好月份的限制，比如一个月内，当渲染月份数过大时，渲染的复杂度将会以倍数增长，渲染越多将会越慢
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
