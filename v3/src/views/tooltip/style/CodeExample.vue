<template>
  <div>
    <CodeLight path="tooltip/style/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="设置宽高">
          当内容很多时，还可以通过 <ApiLink name="tooltip" prop="width"/>、<ApiLink name="tooltip" prop="height"/>、<ApiLink name="tooltip" prop="min-width"/>、<ApiLink name="tooltip" prop="min-height"/>、<ApiLink name="tooltip" prop="max-width"/>、<ApiLink name="tooltip" prop="max-height"/> 设置容器宽高
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="tooltip/style/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          自定义插槽模板
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
