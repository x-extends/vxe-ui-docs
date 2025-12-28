<template>
  <div>
    <CodeLight path="gantt/scroll/tree/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="子任务">
          启用子任务纵向虚拟滚动，与虚拟列表行为完全一致，区别是需要设置 <ApiLink name="gantt" prop="transform"/> 开启自动将列表转成树结构
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
