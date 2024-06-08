<template>
  <div>
    <CodeLight path="form/basics/tooltip/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="标题文字提示">
          标题前缀提示
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="form/basics/tooltip/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          标题后缀提示
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
