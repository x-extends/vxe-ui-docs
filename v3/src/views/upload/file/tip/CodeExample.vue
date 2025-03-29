<template>
  <div>
    <CodeLight path="upload/file/tip/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义提示语"></vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="upload/file/tip/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          自定义插槽模板
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
