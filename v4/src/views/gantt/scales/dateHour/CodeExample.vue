<template>
  <div>
    <CodeLight path="gantt/scales/dateHour/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="小时视图">
          默认解析到小时 yyyy-MM-dd HH，以小时为维度进行渲染
        </vxe-tip>
        <vxe-tip status="error">
          当使用小时视图时，应该控制好天数的限制，比如一天内，当渲染天数过大时，渲染的复杂度将会以倍数增长，渲染越多将会越慢
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/scales/dateHour/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          指定格式，精确到分秒，自动在单元格内按实际进度显示
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
