<template>
  <div>
    <CodeLight path="date-picker/year/shortcut/code/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="快捷按钮">
          通过 <ApiLink name="date-picker" prop="shortcut-config"/>.<ApiLink name="date-picker" prop="options"/> 配置快捷按钮
        </vxe-tip>
        <vxe-tip status="success">
          通过 <ApiLink name="date-picker" prop="code"/> 可以使用内置功能，也可以通过 <vxe-link status="primary" :router-link="{name: 'GlobalCommandsDatePickerBase'}">自定义快捷按钮指令</vxe-link> 自定义 code
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
