<template>
  <div>
    <CodeLight path="form/config/tooltip/Demo1">
      <template #tip>
        <vxe-tips status="primary" title="标题文字提示">
          标题前缀提示
        </vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="form/config/tooltip/Demo2">
      <template #tip>
        <vxe-tips status="primary">
          标题后缀提示
        </vxe-tips>
      </template>
    </CodeLight>
  </div>
</template>
