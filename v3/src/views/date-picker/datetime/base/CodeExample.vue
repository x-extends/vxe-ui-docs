<template>
  <div>
    <CodeLight path="date-picker/datetime/base/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="绑定值">日期带时间类型，设置 <ApiLink name="date-picker" prop="type"/>=datetime，默认是 string 类型</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="date-picker/datetime/base/Demo2">
      <template #tip>
        <vxe-tip status="primary">设置为 Date 类型</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="date-picker/datetime/base/Demo3">
      <template #tip>
        <vxe-tip status="primary">设置为 number 时间戳</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
