<template>
  <div>
    <CodeLight path="number-input/amount/showTip/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="显示工具提示">
          通过 <ApiLink name="number-input" prop="show-tooltip" /> 启用工具提示
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="number-input/amount/showTip/Demo2" :extraImports="['./demo2.util.ts']">
      <template #tip>
        <vxe-tip status="primary">
          使用 <ApiLink name="number-input" prop="tooltip-config" />.<ApiLink name="number-input" prop="contentMethod" /> 来实现实时显示中文金额
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
