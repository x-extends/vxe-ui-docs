<template>
  <div>
    <CodeLight path="date-picker/quarter/base/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="绑定值">季度类型，设置 <ApiLink name="date-picker" prop="type"/>=quarter，默认是 string 类型</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="date-picker/quarter/base/Demo2">
      <template #tip>
        <vxe-tip status="primary">通过 <ApiLink name="date-picker" prop="value-format"/>="date" 设置为 Date 类型</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="date-picker/quarter/base/Demo3">
      <template #tip>
        <vxe-tip status="primary">通过 <ApiLink name="date-picker" prop="value-format"/>="timestamp" 设置为 number 时间戳</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
