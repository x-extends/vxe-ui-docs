<template>
  <div>
    <CodeLight path="date-picker/datetime/masked/isMasked/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="掩码输入">
          通过 <ApiLink name="date-picker" prop="masked-config"/>.<ApiLink name="date-picker" prop="isMasked"/> 来启用掩码输入，也可以全局设置 <ApiLink name="date-picker" prop="masked-config" />.<ApiLink name="date-picker" prop="enabled" /> 来启用
        </vxe-tip>
      </template>

      <template #describe>
        <pre>
          <pre-code>
            | 0-9 | 数字键输入 |
            | Enter | 按回车确认输入 |
          </pre-code>
        </pre>
      </template>
    </CodeLight>

    <CodeLight path="date-picker/datetime/masked/isMasked/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          还可以通过 <ApiLink name="date-picker" prop="popup-config"/>.<ApiLink name="date-picker" prop="enabled"/> 来关闭日期面板，也可以全局设置启用和关闭
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
