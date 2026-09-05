<template>
  <div>
    <CodeLight path="divider/title/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="显示标题">
          通过 <ApiLink name="divider" prop="title-content" /> 来显示标题
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="divider/title/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="divider" prop="title-align" /> 来设置标题对齐方式
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
