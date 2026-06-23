<template>
  <div>
    <CodeLight path="gantt/scales/hourMinute/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="分钟视图">
          默认解析到分钟 yyyy-MM-dd HH:mm，以分钟为维度进行渲染
        </vxe-tip>
        <vxe-tip status="error">
          当使用分钟视图时，应该控制好天数的限制，比如小时内，当渲染小时过大时，渲染的复杂度将会以倍数增长，渲染越多将会越慢
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/scales/hourMinute/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          指定格式，精确到秒，自动在单元格内按实际进度显示
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
