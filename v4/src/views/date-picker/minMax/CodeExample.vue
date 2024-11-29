<template>
  <div>
    <CodeLight path="date-picker/minMax/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="可选日期限制">
          弹出面板默认可选择日期范围 1900 ~ 2100 年，可以通过 <ApiLink name="date-picker" prop="start-date"/> 和 <ApiLink name="date-picker" prop="end-date"/> 设置，超出范围的日期将不会被渲染的面板上
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
