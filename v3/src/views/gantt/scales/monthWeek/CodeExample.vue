<template>
  <div>
    <CodeLight path="gantt/scales/monthWeek/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="周视图">
          默认解析到周 yyyy-W，以周为维度进行渲染
        </vxe-tip>
        <vxe-tip status="error">
          当使用周视图时，应该控制好月份的限制，比如2个月内，当渲染月份数过大时，渲染的复杂度将会以倍数增长，渲染越多将会越慢
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/scales/monthWeek/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          指定格式，精确到天，自动在单元格内按实际进度显示
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
