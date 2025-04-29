<template>
  <div>
    <CodeLight path="number-input/number/icon/Demo1">
      <template #tip>
        <vxe-tip status="primary" title="自定义图标">
          可以通过 <ApiLink name="number-input" prop="plus-icon"/> 与 <ApiLink name="number-input" prop="minus-icon"/> 自定义前缀图标
        </vxe-tip>
      </template>
    </CodeLight>

    <CodeLight path="number-input/number/icon/Demo2">
      <template #tip>
        <vxe-tip status="primary">
          自定义后缀图标
        </vxe-tip>
      </template>
    </CodeLight>
  </div>
</template>
