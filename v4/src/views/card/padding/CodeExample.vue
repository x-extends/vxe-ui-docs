<template>
  <div>
    <CodeLight path="card/padding/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="边距">
          默认是显示边距的，可以通过 padding 属性设置间距
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="card/padding/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          不显示边框
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="card/padding/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          不显示边距
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
