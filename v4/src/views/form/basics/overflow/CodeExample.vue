<template>
  <div>
    <CodeLight path="form/basics/overflow/Demo1">
      <template #tip>
        <vxe-tips status="primary" title="溢出隐藏">
          默认是自动换行
        </vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="form/basics/overflow/Demo2">
      <template #tip>
        <vxe-tips status="primary">
          启用 title-overflow 之后，标题会自动显示超出隐藏
        </vxe-tips>
      </template>
    </CodeLight>
  </div>
</template>
