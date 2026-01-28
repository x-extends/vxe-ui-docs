<template>
  <div>
    <CodeLight path="date-picker/datetime/opts/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义小时选项">
          通过 <ApiLink name="date-picker" prop="time-config"/>.<ApiLink name="date-picker" prop="hours"/> 自定义小时选项列表
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="date-picker/datetime/opts/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="date-picker" prop="time-config"/>.<ApiLink name="date-picker" prop="minutes"/> 自定义分钟选项列表
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="date-picker/datetime/opts/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="date-picker" prop="time-config"/>.<ApiLink name="date-picker" prop="seconds"/> 自定义秒选项列表
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="date-picker/datetime/opts/Demo4">
      <template #tip>
        <vxe-tip status="primary">
          完整示例
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
