<template>
  <div>
    <CodeLight path="date-picker/date/autoClose/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="显示确认按钮">
          通过设置 <ApiLink name="date-picker" prop="auto-close"/> 日期面板是否自动关闭，关闭后可以通过点击确认按钮关闭日期面板
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="date-picker/date/autoClose/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          同时显示清除按钮
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
