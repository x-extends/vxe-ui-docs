<template>
  <div>
    <CodeLight path="input/datetime/Demo1">
      <template #tip>
        <vxe-tip status="primary">日期和时间类型，设置 <ApiLink name="input" prop="type"/>=datetime</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="input/datetime/Demo2">
      <template #tip>
        <vxe-tip status="primary">多选</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="input/datetime/Demo3">
      <template #tip>
        <vxe-tip status="primary">通过 <ApiLink name="input" prop="value-format"/> 指定格式化</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
