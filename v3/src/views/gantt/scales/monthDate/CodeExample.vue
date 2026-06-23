<template>
  <div>
    <CodeLight path="gantt/scales/monthDate/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="天视图">
          默认解析到天 yyyy-MM-dd，以天为维度进行渲染
        </vxe-tip>
        <vxe-tip status="error">
          当使用天视图时，应该控制好月份的限制，比如2个月内，当渲染月份数过大时，渲染的复杂度将会以倍数增长，渲染越多将会越慢
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/scales/monthDate/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          指定格式，精确到时分秒，自动在单元格内按实际进度显示
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
