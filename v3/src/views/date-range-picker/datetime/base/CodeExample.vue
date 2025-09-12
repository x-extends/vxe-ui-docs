<template>
  <div>
    <CodeLight path="date-range-picker/datetime/base/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="绑定值">绑定值，绑定的2个值用逗号分隔</vxe-tip>
        <vxe-tip status="error">
          默认是根据绑定值自动识别，如果需要固定类型，通过 <ApiLink name="date-range-picker" prop="value-type"/>='string' 设置
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="date-range-picker/datetime/base/Demo2">
      <template #tip>
        <vxe-tip status="primary">数组类型，绑定的2个值放数组中</vxe-tip>
        <vxe-tip status="error">
          默认是根据绑定值自动识别，如果需要固定类型，通过 <ApiLink name="date-range-picker" prop="value-type"/>='array' 设置
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="date-range-picker/datetime/base/Demo3">
      <template #tip>
        <vxe-tip status="primary">数据格式，支持同时绑定2个字段</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
