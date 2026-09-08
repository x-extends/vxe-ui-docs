<template>
  <div>
    <CodeLight path="password-input/showTip/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="显示 Tooltip 提示">
          通过 <ApiLink name="password-input" prop="show-tooltip" /> 启用工具提示
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="password-input/showTip/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          使用 <ApiLink name="password-input" prop="tooltip-config" />.<ApiLink name="password-input" prop="contentMethod" /> 来自定义提示内容
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
