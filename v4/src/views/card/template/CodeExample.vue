<template>
  <div>
    <CodeLight path="card/template/Demo1">
      <template #tip>
        <VxeTips status="primary" title="自定义插槽模板"></VxeTips>
      </template>
    </CodeLight>

    <CodeLight path="card/template/Demo2">
      <template #tip>
        <VxeTips status="primary">
          不显示边距
        </VxeTips>
      </template>
    </CodeLight>
  </div>
</template>
