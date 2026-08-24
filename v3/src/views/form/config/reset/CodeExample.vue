<template>
  <div>
    <CodeLight path="form/config/reset/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="重置表单值">
          默认情况下，表单项的值会被重置为空。在表单中只要存在 <ApiLink name="button" /> 且 <ApiLink name="button" prop="type" />=reset，点击该按钮就可以字段触发重置，也可以手动调用 <ApiLink name="form" prop="reset" />() 方法重置
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="form/config/reset/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          可以通过 <ApiLink name="form-item" prop="reset-value" /> 来自定义字段重置值
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
