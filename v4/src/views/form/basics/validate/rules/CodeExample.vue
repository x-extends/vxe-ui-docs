<template>
  <div>
    <CodeLight path="form/basics/validate/rules/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="校验规则配置">
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="form/basics/validate/rules/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          也可以单独给表单项加 <ApiLink name="form-item" prop="rules"/> 局部规则，覆盖全局会覆盖全局规则
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
