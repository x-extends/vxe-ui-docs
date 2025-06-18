<template>
  <div>
    <CodeLight path="date-picker/time/base/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="绑定值">时间类型，设置 <ApiLink name="date-picker" prop="type"/>=time，默认是 string 类型</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="date-picker/time/base/Demo2">
      <template #tip>
        <vxe-tip status="primary">设置为 Date 类型</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="date-picker/time/base/Demo3">
      <template #tip>
        <vxe-tip status="primary">设置为 number 时间戳</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
