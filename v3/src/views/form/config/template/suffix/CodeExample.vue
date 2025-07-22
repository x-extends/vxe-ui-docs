<template>
  <div>
    <CodeLight path="form/config/template/suffix/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义标题后缀模板">
          通过插槽 <ApiLink name="form-item" prop="suffix"/> 来自定义标题后缀模板
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="form/config/template/suffix/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          自定义 JSX 模板
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
