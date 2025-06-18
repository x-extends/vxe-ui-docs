<template>
  <div>
    <CodeLight path="date-picker/datetime/valueFormat/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义格式">显示时分，通过 <ApiLink name="date-picker" prop="value-format"/>、<ApiLink name="date-picker" prop="label-format"/> 指定格式化</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="date-picker/datetime/valueFormat/Demo2">
      <template #tip>
        <vxe-tip status="primary">只显示小时</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="date-picker/datetime/valueFormat/Demo3">
      <template #tip>
        <vxe-tip status="primary">通过 <ApiLink name="date-picker" prop="time-format"/> 指定格式化，只改变显示值，不改变绑定值类型</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
