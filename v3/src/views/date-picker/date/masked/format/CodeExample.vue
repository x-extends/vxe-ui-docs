<template>
  <div>
    <CodeLight path="date-picker/date/masked/format/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="掩码格式">
          通过 <ApiLink name="date-picker" prop="label-format"/> 设置自定义显示的格式，会自动识别掩码格式
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="date-picker/date/masked/format/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          还可以通过 <ApiLink name="date-picker" prop="popup-config"/>.<ApiLink name="date-picker" prop="enabled"/> 来关闭日期面板，也可以全局设置启用和关闭，也可以全局设置启用和关闭
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
