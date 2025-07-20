<template>
  <div>
    <CodeLight path="date-range-picker/date/disabledMethod/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="禁用指定日期">
          通过设置 <ApiLink name="date-range-picker" prop="disabled-method"/> 限制指定额任意日期
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="date-range-picker/date/disabledMethod/Demo2">
      <template #tip>
        <vxe-tip status="primary">限制只能选择周五</vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
