<template>
  <div>
    <CodeLight path="date-picker/time/Demo1">
      <template #tip>
        <vxe-tip status="primary">时间类型，设置 <ApiLink name="date-picker" prop="type"/>=time</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="date-picker/time/Demo2">
      <template #tip>
        <vxe-tip status="primary">通过 <ApiLink name="date-picker" prop="value-format"/> 指定格式化</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="date-picker/time/Demo3">
      <template #tip>
        <vxe-tip status="primary">禁用</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
