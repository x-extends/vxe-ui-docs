<template>
  <div>
    <CodeLight path="date-picker/quarter/multiple/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="多选"></vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="date-picker/quarter/multiple/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="date-picker" prop="limit-count"/> 限制选择数量
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
