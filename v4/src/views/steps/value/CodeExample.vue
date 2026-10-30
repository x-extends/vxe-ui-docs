<template>
  <div>
    <CodeLight path="steps/value/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="绑定值">
          通过 v-model 绑定当前进度
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="steps/value/Demo2">
      <template #tip>
        <vxe-tip status="primary" title="步骤序号">
          通过 <ApiLink name="steps" prop="show-number" /> 显示步骤序号
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="steps/value/Demo3">
      <template #tip>
        <vxe-tip status="primary" title="状态图标">
          通过 <ApiLink name="steps" prop="show-icon" /> 显示状态图标
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
