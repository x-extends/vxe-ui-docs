<template>
  <div>
    <CodeLight path="card/border/Demo1">
      <template #tip>
        <VxeTips status="primary" title="边框">
          默认是显示边框的，可以通过 border 属性设置隐藏
        </VxeTips>
      </template>
    </CodeLight>

    <CodeLight path="card/border/Demo2">
      <template #tip>
        <VxeTips status="primary">
          不显示边框
        </VxeTips>
      </template>
    </CodeLight>
  </div>
</template>
