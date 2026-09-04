<template>
  <div>
    <CodeLight path="number-input/number/showTip/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="显示 Tooltip 提示">
          通过 <ApiLink name="number-input" prop="show-tooltip" /> 启用工具提示
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="number-input/number/showTip/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          使用 <ApiLink name="number-input" prop="tooltip-config" />.<ApiLink name="number-input" prop="contentMethod" /> 来自定义提示内容
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
