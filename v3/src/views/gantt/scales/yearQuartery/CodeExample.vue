<template>
  <div>
    <CodeLight path="gantt/scales/yearQuartery/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="季视图">
          精度解析到季度，默认填充满单元格
        </vxe-tip>
        <vxe-tip status="error">
          当使用季视图时，应该控制好季度的限制，比如一个年内，当渲染年份数过大时，渲染的复杂度将会以倍数增长，渲染越多将会越慢
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/scales/yearQuartery/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          指定格式，精确到月或天，自动在单元格内按实际进度显示
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
