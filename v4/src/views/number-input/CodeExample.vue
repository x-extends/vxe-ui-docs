<template>
  <div>
    <CodeLight path="number-input/Demo1">
      <template #tip>
        <vxe-tips status="primary" title="数值框"></vxe-tips>
        <vxe-tips status="error">需要注意，输出是 Number 类型</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="number-input/Demo2">
      <template #tip>
        <vxe-tips status="primary">小数框</vxe-tips>
      </template>
    </CodeLight>

    <CodeLight path="number-input/Demo3">
      <template #tip>
        <vxe-tips status="primary">整数框</vxe-tips>
      </template>
    </CodeLight>
  </div>
</template>
