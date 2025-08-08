<template>
  <div>
    <CodeLight path="form/config/overflow/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="溢出隐藏">
          默认是自动换行
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="form/config/overflow/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          启用 <ApiLink name="form" prop="title-overflow"/> 之后，标题会自动显示超出隐藏
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
