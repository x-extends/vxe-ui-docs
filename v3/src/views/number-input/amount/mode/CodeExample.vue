<template>
  <div>
    <CodeLight path="number-input/amount/mode/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="小数位数">
          小数位数处理时的舍入方式，默认是进行截取，不进行任何精度处理
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="number-input/amount/mode/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="number-input" prop="rounding-mode"/>='round' 来设置默认四舍五入，多数金融/数学教材采用此规则
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="number-input/amount/mode/Demo3">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="number-input" prop="rounding-mode"/>='ceil' 设置向上舍入
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="number-input/amount/mode/Demo4">
      <template #tip>
        <vxe-tip status="primary">
          通过 <ApiLink name="number-input" prop="rounding-mode"/>='floor' 设置向下舍去
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
