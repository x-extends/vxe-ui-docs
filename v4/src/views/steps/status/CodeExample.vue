<template>
  <div>
    <CodeLight path="steps/status/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="状态颜色">
          通过 <ApiLink name="step-item" prop="status" /> 自定义每个步骤的状态颜色
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="steps/status/Demo2">
      <template #tip>
        <vxe-tip status="primary" title="步骤序号">
          通过 <ApiLink name="steps" prop="show-number" /> 显示步骤序号
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="steps/status/Demo3">
      <template #tip>
        <vxe-tip status="primary" title="状态图标">
          通过 <ApiLink name="steps" prop="show-icon" /> 显示状态图标
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
