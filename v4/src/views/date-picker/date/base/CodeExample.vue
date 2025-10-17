<template>
  <div>
    <CodeLight path="date-picker/date/base/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="绑定值">绑定值，默认 string 类型</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="date-picker/date/base/Demo2">
      <template #tip>
        <vxe-tip status="primary">通过 <ApiLink name="date-picker" prop="value-format"/>="date" 设置为 Date 类型</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="date-picker/date/base/Demo3">
      <template #tip>
        <vxe-tip status="primary">通过 <ApiLink name="date-picker" prop="value-format"/>="timestamp" 设置为 number 时间戳</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="date-picker/date/base/Demo4">
      <template #tip>
        <vxe-tip status="primary">通过 <ApiLink name="date-picker" prop="value-format"/>=dd/MM/yyyy" 设置自定义的格式</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
