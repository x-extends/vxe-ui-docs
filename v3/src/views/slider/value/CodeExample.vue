<template>
  <div>
    <CodeLight path="slider/value/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="绑定值">
          绑定值为数组类型
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="slider/value/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="slider" prop="start-value" /> 和 <ApiLink name="slider" prop="end-value" /> 绑定为2个字段值
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
