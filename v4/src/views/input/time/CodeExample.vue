<template>
  <div>
    <CodeLight path="input/time/Demo1">
      <template #tip>
        <vxe-tip status="primary">时间类型，设置 <ApiLink name="input" prop="type"/>=time</vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="input/time/Demo2">
      <template #tip>
        <vxe-tip status="primary">通过 <ApiLink name="input" prop="value-format"/> 指定格式化</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
