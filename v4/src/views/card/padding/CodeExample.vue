<template>
  <div>
    <CodeLight path="card/padding/Demo1">
      <template #tip>
        <VxeTips status="primary" title="边距">
          默认是显示边距的，可以通过 padding 属性设置间距
        </VxeTips>
      </template>
    </CodeLight>

    <CodeLight path="card/padding/Demo2">
      <template #tip>
        <VxeTips status="primary">
          不显示边框
        </VxeTips>
      </template>
    </CodeLight>

    <CodeLight path="card/padding/Demo3">
      <template #tip>
        <VxeTips status="primary">
          不显示边距
        </VxeTips>
      </template>
    </CodeLight>
  </div>
</template>
