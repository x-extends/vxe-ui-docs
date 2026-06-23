<template>
  <div>
    <CodeLight path="gantt/scales/year/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="年视图">
          默认解析到年 yyyy，以年为维度进行渲染
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
