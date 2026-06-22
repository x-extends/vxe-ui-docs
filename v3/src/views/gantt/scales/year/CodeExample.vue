<template>
  <div>
    <CodeLight path="gantt/scales/year/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="年视图">
          精度解析到年，默认填充满单元格
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="gantt/scales/year/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          指定格式，精确到月或天，自动在单元格内按实际进度显示
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
